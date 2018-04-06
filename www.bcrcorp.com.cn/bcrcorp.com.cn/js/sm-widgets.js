/**
 * Stock Market Widgets (jQuery plugin)
 * Version 1.0.9, built on Wed Jul 13 2016
 * Copyright WebTheGap <mail@webthegap.com>
 * http://webthegap.com/products/stock-market-widgets/
 */
(function($) {
  
  $(document).ready(buildWidgets);

  var yqlBaseUri = 'https://query.yahooapis.com/v1/public/yql?q={0}&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys';
  var yqlQuery = 'select * from {0} where {1}';
  var yqlNewsHeadlineUrl = 'http://finance.yahoo.com/rss/industry?s=';
  var yqlKeyStatsUrl = 'https://query1.finance.yahoo.com/v10/finance/quoteSummary/{0}?formatted=true&modules=defaultKeyStatistics%2CfinancialData%2CcalendarEvents';
  var yqlMapTableToKeyPropertyName = {'yahoo.finance.quotes':'Symbol', 'yahoo.finance.xchange':'id', 'feed':'pubDate', 'yahoo.finance.historicaldata':'Symbol'};
  var yqlMapTableToWidgetType = {'yahoo.finance.quotes':'quote', 'yahoo.finance.xchange':'currency', 'feed':'news', 'json':'stats'};
  var yChartSizeMap = {'small':'s', 'medium':'m', 'large':'l'};
  var yChartTypeMap = {'line':'l', 'bar':'b', 'candle':'c'};
  var DEBUG = false;

  // making yqlRunQuery() available in the global scope
  window.smYqlRunQuery = yqlRunQuery;
  
  function buildWidgets() {
    var quoteSymbols = [];
    var statsSymbols = [];
    var currencyPairs = [];
    var staticChartSymbols = [];
    var newsSymbols = [];
    var historicalPerformanceSymbols = [];
  
    // Sort tables columns 
    $('.sm-sortable-table').tablesort();  
    $('.sm-sortable-table thead th.integer').data('sortBy', function(th, td, tablesort) {
      return parseInt(td.text().replace(/\$|\%/g,''));
    });
    $('.sm-sortable-table thead th.float').data('sortBy', function(th, td, tablesort) {
      return parseFloat(td.text().replace(/\$|\%/g,''));
    });
    
    // load marquee plugin for stock ticker
    var marquee = $('.sm-marquee').marquee();
    marquee.mouseover(function () {
      $(this).trigger('stop');
    }).mouseout(function () {
      $(this).trigger('start');
    }).mousemove(function (event) {
      if ($(this).data('drag') == true) {
        this.scrollLeft = $(this).data('scrollX') + ($(this).data('x') - event.clientX);
      }
    }).mousedown(function (event) {
      $(this).data('drag', true).data('x', event.clientX).data('scrollX', this.scrollLeft);
    }).mouseup(function () {
      $(this).data('drag', false);
    });
    
    $('.sm-widget').each(function(i, widget) {
      var $widget = $(widget);
      var symbol = $widget.data('symbol');
      var widgetType = $widget.data('type');
    
      // add class, so it can be referred to later when data is retrieved from Yahoo Finance
      var addToClass = $widget.data('add-to-class');
      $widget.addClass('sm-widget-'+widgetType+'-'+symbol+(addToClass?'-'+$widget.data(addToClass):''));
      
      // if transtion effect is specified, set initial state to hidden
      initTransitionEffect(widget);
      
      // Add spinning loader
      loaderEnable(widget);
      
      // if symbol is empty continue to next one
      if (symbol=='') return true;
      
      // populate stock symbols, currency pair arrays
      if (widgetType=='quote' && quoteSymbols.indexOf(symbol) < 0) {
        quoteSymbols.push(symbol);
      } else if (widgetType=='stats' && statsSymbols.indexOf(symbol) < 0) {
        statsSymbols.push(symbol);
      } else if (widgetType=='currency' && currencyPairs.indexOf(symbol) < 0) {
        currencyPairs.push(symbol);
      } else if (widgetType=='staticChart' && staticChartSymbols.indexOf(symbol) < 0) {
        staticChartSymbols.push(symbol);
      } else if (widgetType=='news' && newsSymbols.indexOf(symbol) < 0) {
        newsSymbols.push(symbol);
      } else if (widgetType=='historicalPerformance' && $widget.data('from')!='') {
        historicalPerformanceSymbols.push([symbol,$widget.data('from')]);
      }
    });
    //console.log(quoteSymbols);
    if (quoteSymbols.length) {
      log('Retrieve quotes for tickers: '+quoteSymbols.join(','));
      yqlRunQuery('yahoo.finance.quotes', 'symbol IN '+formatSqlIn(quoteSymbols), null);
    }
    
    if (statsSymbols.length>0) {
      log('Retrieve key stats for tickers: '+statsSymbols.join(','));
      $.each(statsSymbols, function(k, statsSymbol) {
        yqlRunQuery('json', 'url = "'+String.format(yqlKeyStatsUrl, statsSymbol)+'"', statsSymbol);
      });
    }

    if (historicalPerformanceSymbols.length>0) {
      log('Retrieve historical performance for tickers: '+historicalPerformanceSymbols.join(','));
      var histCondiditons = [];
      var liveSymbols = [];
      $.each(historicalPerformanceSymbols, function(k, historicalPerformance) {
        histCondiditons.push('(symbol = "'+historicalPerformance[0]+'" AND startDate = "'+historicalPerformance[1]+'" AND endDate = "'+historicalPerformance[1]+'")');
        if(liveSymbols.indexOf(historicalPerformance[0])) {
          liveSymbols.push(historicalPerformance[0]);
        }
      });
      // run 2 quries at the same time - one to get historical quotes on a given date, the other to get current live quotes
      yqlRunQuery('query.multi', 'queries = \'select Adj_Close,Date,Symbol from yahoo.finance.historicaldata where '+histCondiditons.join(' OR ')+'; select LastTradePriceOnly,Symbol,Name from yahoo.finance.quotes where symbol IN '+formatSqlIn(liveSymbols)+'\'', 'historicalPerformance');
    }
    
    if (currencyPairs.length>0) {
      log('Retrieve exchange rates: '+currencyPairs.join(','));
      yqlRunQuery('yahoo.finance.xchange', 'pair IN '+formatSqlIn(currencyPairs), null);
    }
    
    if (staticChartSymbols.length>0) {
      log('Retrieve static charts: '+staticChartSymbols.join(','));
      displayStaticCharts(staticChartSymbols);
    }
    
    if (newsSymbols.length>0) {
      log('Retrieve news: '+newsSymbols.join(','));
      yqlRunQuery('feed', 'url = "'+yqlNewsHeadlineUrl+newsSymbols[0].replace('^','%5E')+'"', newsSymbols[0]);
    }
  }
  
  /**
   * Fromat string for SQL IN clause
   * @param array
   * @returns string
   */
  function formatSqlIn(array) {
    return '("'+array.join('","')+'")';
  }
  
  function arrayMapString(s, array) {
    $.each(array, function(i, value) {
      array[i] = String.format(s, value);
    });
    return array;
  }
  
  function displayStaticCharts(symbols) {
    
    var widgetType = 'staticChart';
    var widget = '';
    var chartSize = '';
    var chartType = '';
    var chartTimeFrame = '';
    var chartLogScale = '';
    var chartUrl = '';
    var unescapedSymbol = '';
    
    $.each(symbols, function(i, symbol) {
      unescapedSymbol = symbol;
      symbol = symbol.replace(/(:|\^|\.|\[|\]|,|=)/g, "\\$1");
  
      widget = '.sm-widget-'+widgetType+'-'+symbol;
      
      // there can be several charts for one ticker, so looping through them all
      $(widget).each(function() {        
        chartSize = $(this).data('size') ? yChartSizeMap[$(this).data('size')] : 'm';
        chartType = $(this).data('chart-type') ? yChartTypeMap[$(this).data('chart-type')] : 'l';
        chartTimeFrame = $(this).data('timeframe') ? $(this).data('timeframe') : '3m';
        chartLogScale = $(this).data('logscale')=='on' ? 'on' : 'off';
        chartUrl = 'http://chart.finance.yahoo.com/z?s='+unescapedSymbol+'&t='+chartTimeFrame+'&q='+chartType+'&z='+chartSize+'&l='+chartLogScale;
        
        log(widget, chartUrl);
        
        $(this).append('<img class="sm-static-chart-img" src="'+chartUrl+'">');        
      });      
      
      // for each image set onLoad event, so transition effect can be applied when the image is loaded
      $(widget).find('.sm-static-chart-img').one('load', function() {
        // important: $(widget) doesn't work here
        loaderDisable('.sm-widget-'+widgetType+'-'+symbol);
        applyTransitionEffect('.sm-widget-'+widgetType+'-'+symbol);
      });
    });    
  }
  
  function loaderEnable(selector) {
    if ($(selector).data('loader') && $(selector).find('.sm-loader').length == 0) {
      $(selector).prepend('<div class="active sm-loader"></div>');
    }
  }
  
  function loaderDisable(selector) {
    $(selector).find('.sm-loader').removeClass('active');
  }
  
  function initTransitionEffect(selector) {
    if ($(selector).data('transition')) {
      $(selector).addClass('transition hidden');
    }
  }
  
  function applyTransitionEffect(selector) {
    // apply transition effects
    if ($(selector).data('transition')) {
      $(selector).transition({animation: $(selector).data('transition'), duration: '1s'});
    }    
  }
  
  /**
   * Transform an indexed array of objects into key indexed object of objects
   * @param objectKeyName - string or array
   * @param arrayOfObjects - indexed array of object to transform
   * @returns object of objects
   */
  function indexedArrayToKeyedObject(objectKeyName, arrayOfObjects) {
    var result = {};
    var keyName;
    
    // if only one object is received then transform it into array first
    if (!$.isArray(arrayOfObjects)) {
      arrayOfObjects = [arrayOfObjects];
    }
    //console.log(arrayOfObjects);
    $.each(arrayOfObjects, function(i, object) {
      if(typeof objectKeyName=='string') {
        keyName = object[objectKeyName];
      } else if(typeof objectKeyName=='object') {
        console.l
        var keys=[];
        $.each(objectKeyName, function(i, key) {
          keys.push(object[key]);
        });
        keyName = keys.join('-');
      }
      result[keyName] = object;
    });
    
    return result;
  }
  
  function displayWidgetData(widgetType, dataObjects) {

    $('.sm-widget-ticker').each(function(i, dataField) {
        var s = $(dataField).data('symbol');
        s= s.slice(0, -2);
        if(dataObjects[s]!==undefined)
        {
            var old = $(dataField).find('.sm-quote').text();
            var cur = dataObjects[s].bid;
            $(dataField).find('.sm-company').text(dataObjects[s].symbol);
            $(dataField).find('.sm-quote').text(dataObjects[s].bid);
            var change = (old=='' ? '0': ((old - cur)/cur*100) );
            var pct = (old=='' ? '0.00': ((old - cur)/cur*100) )+'%';
            $(dataField).find('.sm-pct').text(pct);
            var  arrowClass='';
            if (parseFloat(change)>0) {
              arrowClass = 'up green'
            } else if (parseFloat(change)<0) {
              arrowClass = 'down red';
            }
            
            $(dataField).find('.arrow, .caret').addClass(arrowClass);


        }
    });
    return;
    $.each(dataObjects, function(key, dataObject) {
        //console.log(dataObject);



      var propertyName = '';
      var propertyCallback = '';
      var propertyCallbackArgs = '';
      var propertyValue = '';
      var callbackFunction = '';
      key = key.replace(/(:|\^|\.|\[|\]|,|=)/g, "\\$1");

      // for each tag of sm-data-property class set it to value from retrieved object
      $('.sm-widget-'+widgetType+'-'+key+' .sm-data-property').each(function(i, dataField) {

        propertyName = $(dataField).data('property');
        propertyCallback = $(dataField).data('callback');
        propertyCallbackArgs = $(dataField).data('callback-arguments') ? $(dataField).data('callback-arguments').toString().split(',') : '';
       
        if (propertyName) {

          if (widgetType=='stats') {
            propertyValue = Object.getValueByString(dataObject, propertyName);
            if (typeof propertyValue === 'object' && propertyValue !== null && typeof propertyValue.fmt != 'undefined') {
              propertyValue = propertyValue.fmt;
            } else if (propertyValue == '' || propertyValue === null) {
              propertyValue = 'N/A';
            }
          } else if (dataObject[propertyName] !== null) {
            // if callback function is specified then apply it first (for example to transform string to number etc)
            if (propertyCallback) {
              callbackFunction = window[propertyCallback];
              propertyValue = propertyCallbackArgs ? callbackFunction(dataObject[propertyName], propertyCallbackArgs) : callbackFunction(dataObject[propertyName]);
              //propertyValue = callbackFunction(dataObject[propertyName]);
            } else {
              propertyValue = dataObject[propertyName];
            }
          } else {
            propertyValue = 'N/A';
          }
          $(dataField).text(propertyValue);
        }
      });
      
      var widgetSelector = '.sm-widget-'+widgetType+'-'+key;
      
      // add up/down arrows depending on change in price
      if (widgetType=='quote' && typeof dataObject.Change !== 'undefined') {
        var arrowClass = '';
        
        if (parseFloat(dataObject.Change)>0) {
          arrowClass = 'up green'
        } else if (parseFloat(dataObject.Change)<0) {
          arrowClass = 'down red';
        }
        
        $('.sm-widget-'+widgetType+'-'+key).find('.arrow, .caret').addClass(arrowClass);
      }  
      
      $('.sm-widget-'+widgetType+'-'+key).each(function(i, widget) {
        
        // disable spinning loader
        loaderDisable(widgetSelector);
        
        // apply transition effects
        // ToDo: to be optimized using function calls applyTransitionEffect
        if ($(widget).data('transition')) {
          $(widget).transition({animation: $(widget).data('transition'), duration: '1s'});
        }
      });
    });
  }
  
  function displayNews(widgetType, dataObjects) {
    var jNewsWidget = $('.sm-widget-news');
    var maxNumberOfNews = parseInt(jNewsWidget.data('count'))>0 ? parseInt(jNewsWidget.data('count')) : null;
    var i=1;
    $.each(dataObjects, function(key, dataObject) {
      key = key.replace(/(:|\^|\.|\[|\]|,|=)/g, "\\$1");
      
      // show only news with description
      if (typeof dataObject.description !== 'undefined'/* && dataObject.description != null*/) {
        jNewsWidget.append('<h4>'+dataObject.title+'</h4>');
        jNewsWidget.append('<div class="sm-news-date">'+dataObject.pubDate+'</div>');
        jNewsWidget.append('<div class="sm-news-desc">'+(dataObject.description==null?'':dataObject.description)+'</div>');      
        jNewsWidget.append('<div class="sm-news-link"><a href="'+dataObject.link+'" target="_blank">Read more</a></div>');

        if (maxNumberOfNews !== null && maxNumberOfNews<=i) {
          return false;
        } else {
          i++;
        }        
      }      
    });

    loaderDisable('.sm-widget-news');
  }
  
  function htmlContentToKeyedObject(id, htmlContentArray) {
    var result = {};
    result[id] = {};
    
    $.each(htmlContentArray, function(i, obj) {
      if (i==0 || i % 2 == 0 && typeof htmlContentArray[i+1] !== 'undefined') {
        // removing anything within brackets and traling ":"
        // Important: this results in overriding some of the values, for example Avg Vol (3 month) and Avg Vol (10 day)
        result[id][obj.content.replace(/\s*\(.+\)/g, '').slice(0,-1)] = (typeof htmlContentArray[i+1].span==='undefined' ? htmlContentArray[i+1].content : htmlContentArray[i+1].span.content);
      }
    });
    return result;
  }
  
  function yqlRunQuery(yqlTable, yqlConditions, contextId) {
    var yqlUrl = String.format(yqlBaseUri, encodeURIComponent(String.format(yqlQuery, yqlTable, yqlConditions)));

    // making *async* AJAX call, passing yqlTable as a context
    $.ajax({
      url: '/tool/pricefeed',//qlUrl,
      dataType: 'json',
      async: true,
      //context: {yqlTable: yqlTable, contextId: contextId},
      success: yqlQuerySuccess,
      error: yqlQueryError
    });    
  }  
  
  function yqlQuerySuccess(data, textStatus, jqXHR) {       
    // getting yqlTable from the context
    

    var yqlTable = this.yqlTable;
    var contextId = this.contextId;
    var result = null;
    var dataOjects = {};

    /* BEGIN MAIN PART */
    // /console.log(data['AAPL'].symbol)  ;
    //log(yqlTable+'('+contextId+')', data);
    
    //if (typeof data[.query.results] !== 'undefined' && data.query.count > 0) {     
    if (typeof data.AAPL !== 'undefined' ) {     
      // get the first child of data.query.results 
      //result = data.query.results[Object.keys(data.query.results)[0]];
      
      displayWidgetData('historicalPerformance', data);/*
      var liveQuotes=[];
      liveQuotes.push(...data);
      
      console.log(liveQuotes);
      //var liveQuotes = indexedArrayToKeyedObject('Symbol', data);
      $.each(data, function(i, histQuote) {
            console.log(i,histQuote);

            if(liveQuotes[i] ===undefined)
            {

                liveQuotes.push({
                    historicalPrice:parseFloat(histQuote.Ask),
                };
            }
         
      });
      */
      /*
      
      var histQuotes = indexedArrayToKeyedObject(['Symbol','Date'], data.query.results.results[0].quote);
      $.each(histQuotes, function(i, histQuote) {
          $.extend(histQuote,liveQuotes[histQuote.Symbol]);
          histQuote.historicalPrice = parseFloat(histQuote.Adj_Close);
          histQuote.historicalPerformance = histQuote.LastTradePriceOnly - histQuote.historicalPrice;
          histQuote.historicalPerformancePercent = (histQuote.LastTradePriceOnly - histQuote.historicalPrice)/histQuote.historicalPrice*100;
      });
      displayWidgetData('historicalPerformance', histQuotes);
      */
      /*
      // display data      
      if (yqlTable=='feed') {
        // transform data into an object indexed by key attribute
        dataOjects = indexedArrayToKeyedObject(yqlMapTableToKeyPropertyName[yqlTable], result);        
        displayNews(yqlMapTableToWidgetType[yqlTable], dataOjects);
      } else if (yqlTable=='yahoo.finance.quotes' || yqlTable=='yahoo.finance.xchange') {
        // transform data into an object indexed by key attribute
        dataOjects = indexedArrayToKeyedObject(yqlMapTableToKeyPropertyName[yqlTable], result);        
        displayWidgetData(yqlMapTableToWidgetType[yqlTable], dataOjects);
      } else if (yqlTable=='json') {
        dataOjects[contextId] = result.result;
        displayWidgetData(yqlMapTableToWidgetType[yqlTable], dataOjects);

      // Historical performance quotes (results[0] - historical prices, results[1] - current prices)
      } else if(yqlTable=='query.multi' && contextId=='historicalPerformance' && data.query.count==2 && typeof data.query.results.results != 'undefined') {
       var liveQuotes = indexedArrayToKeyedObject('Symbol', data.query.results.results[1].quote);
        var histQuotes = indexedArrayToKeyedObject(['Symbol','Date'], data.query.results.results[0].quote);
        $.each(histQuotes, function(i, histQuote) {
          $.extend(histQuote,liveQuotes[histQuote.Symbol]);
          histQuote.historicalPrice = parseFloat(histQuote.Adj_Close);
          histQuote.historicalPerformance = histQuote.LastTradePriceOnly - histQuote.historicalPrice;
          histQuote.historicalPerformancePercent = (histQuote.LastTradePriceOnly - histQuote.historicalPrice)/histQuote.historicalPrice*100;
        });
        displayWidgetData('historicalPerformance', histQuotes);
      }
      */
      log(yqlTable, dataOjects);
      
    } else {
      log('smYqlQuerySuccess, no data for '+yqlTable, data);
    }
  }
  
  function yqlQueryError(jqXHR, textStatus, errorThrown) {    
    log('smYqlQueryError', textStatus+'|'+errorThrown);
  }

  /**
   * Get nested object property by string path
   */
  Object.getValueByString = function(o, s) {
    s = s.replace(/\[(\w+)\]/g, '.$1'); // convert indexes to properties
    s = s.replace(/^\./, '');           // strip a leading dot
    var a = s.split('.');
    for (var i = 0, n = a.length; i < n; ++i) {
      var k = a[i];
      if (k in o) {
        o = o[k];
      } else {
        return;
      }
    }
    return o;
  }
  
  /**
   * Log message to console
   * @param msg
   */
  function log(msg, obj) {
    if (DEBUG) {
      if (typeof obj !== 'undefined') {
        console.log(msg, obj);
      } else {
        console.log(msg);
      }
    }
  }

  /**
   * String format function
   * http://stackoverflow.com/questions/610406/javascript-equivalent-to-printf-string-format
   */
  if (!String.format) {
    String.format = function(format) {
      var args = Array.prototype.slice.call(arguments, 1);
      return format.replace(/{(\d+)}/g, function(match, number) { 
        return typeof args[number] != 'undefined'
          ? args[number] 
          : match
        ;
      });
    };
  }
})(jQuery);

/**
 * Formats number with certain precision and adds suffix/prefix
 * Example: smFormatNumber(123.567899, [2,'$','']) will return $123.57
 * @param number
 * @param args - arguments
 */
function smFormatNumber(number) {
  var precision = typeof arguments[1][0]!='undefined' ? arguments[1][0] : 2;
  var prefix = typeof arguments[1][1]!='undefined' ? arguments[1][1] : '';
  var suffix = typeof arguments[1][2]!='undefined' ? arguments[1][2] : '';
  number = parseFloat(number);
  number = precision>1 ? Math.round(number * Math.pow(10,precision))/Math.pow(10,precision) : Math.round(number);
  return number>=0 ? prefix+number+suffix : '-'+prefix+Math.abs(number)+suffix;
}


/**
 * Marquee plugin
 * https://remysharp.com/2008/09/10/the-silky-smooth-marquee
 */
(function ($) {
  $.fn.marquee = function (klass) {
      var newMarquee = [],
          last = this.length;

      // works out the left or right hand reset position, based on scroll
      // behavior, current direction and new direction
      function getReset(newDir, marqueeRedux, marqueeState) {
          var behavior = marqueeState.behavior, width = marqueeState.width, dir = marqueeState.dir;
          var r = 0;
          if (behavior == 'alternate') {
              r = newDir == 1 ? marqueeRedux[marqueeState.widthAxis] - (width*2) : width;
          } else if (behavior == 'slide') {
              if (newDir == -1) {
                  r = dir == -1 ? marqueeRedux[marqueeState.widthAxis] : width;
              } else {
                  r = dir == -1 ? marqueeRedux[marqueeState.widthAxis] - (width*2) : 0;
              }
          } else {
              r = newDir == -1 ? marqueeRedux[marqueeState.widthAxis] : 0;
          }
          return r;
      }

      // single "thread" animation
      function animateMarquee() {
          var i = newMarquee.length,
              marqueeRedux = null,
              $marqueeRedux = null,
              marqueeState = {},
              newMarqueeList = [],
              hitedge = false;
              
          while (i--) {
              marqueeRedux = newMarquee[i];
              $marqueeRedux = $(marqueeRedux);
              marqueeState = $marqueeRedux.data('marqueeState');
              
              if ($marqueeRedux.data('paused') !== true) {
                  // TODO read scrollamount, dir, behavior, loops and last from data
                  marqueeRedux[marqueeState.axis] += (marqueeState.scrollamount * marqueeState.dir);

                  // only true if it's hit the end
                  hitedge = marqueeState.dir == -1 ? marqueeRedux[marqueeState.axis] <= getReset(marqueeState.dir * -1, marqueeRedux, marqueeState) : marqueeRedux[marqueeState.axis] >= getReset(marqueeState.dir * -1, marqueeRedux, marqueeState);
                  
                  if ((marqueeState.behavior == 'scroll' && marqueeState.last == marqueeRedux[marqueeState.axis]) || (marqueeState.behavior == 'alternate' && hitedge && marqueeState.last != -1) || (marqueeState.behavior == 'slide' && hitedge && marqueeState.last != -1)) {                        
                      if (marqueeState.behavior == 'alternate') {
                          marqueeState.dir *= -1; // flip
                      }
                      marqueeState.last = -1;

                      $marqueeRedux.trigger('stop');

                      marqueeState.loops--;
                      if (marqueeState.loops === 0) {
                          if (marqueeState.behavior != 'slide') {
                              marqueeRedux[marqueeState.axis] = getReset(marqueeState.dir, marqueeRedux, marqueeState);
                          } else {
                              // corrects the position
                              marqueeRedux[marqueeState.axis] = getReset(marqueeState.dir * -1, marqueeRedux, marqueeState);
                          }

                          $marqueeRedux.trigger('end');
                      } else {
                          // keep this marquee going
                          newMarqueeList.push(marqueeRedux);
                          $marqueeRedux.trigger('start');
                          marqueeRedux[marqueeState.axis] = getReset(marqueeState.dir, marqueeRedux, marqueeState);
                      }
                  } else {
                      newMarqueeList.push(marqueeRedux);
                  }
                  marqueeState.last = marqueeRedux[marqueeState.axis];

                  // store updated state only if we ran an animation
                  $marqueeRedux.data('marqueeState', marqueeState);
              } else {
                  // even though it's paused, keep it in the list
                  newMarqueeList.push(marqueeRedux);                    
              }
          }

          newMarquee = newMarqueeList;
          
          if (newMarquee.length) {
              setTimeout(animateMarquee, 25);
          }            
      }
      
      // TODO consider whether using .html() in the wrapping process could lead to loosing predefined events...
      this.each(function (i) {
          var $marquee = $(this),
              width = $marquee.attr('width') || $marquee.width(),
              height = $marquee.attr('height') || $marquee.height(),
              $marqueeRedux = $marquee.after('<div ' + (klass ? 'class="' + klass + '" ' : '') + 'style="display: block-inline; width: ' + width + 'px; height: ' + height + 'px; overflow: hidden;"><div style="float: left; white-space: nowrap;">' + $marquee.html() + '</div></div>').next(),
              marqueeRedux = $marqueeRedux.get(0),
              hitedge = 0,
              direction = ($marquee.attr('direction') || 'left').toLowerCase(),
              marqueeState = {
                  dir : /down|right/.test(direction) ? -1 : 1,
                  axis : /left|right/.test(direction) ? 'scrollLeft' : 'scrollTop',
                  widthAxis : /left|right/.test(direction) ? 'scrollWidth' : 'scrollHeight',
                  last : -1,
                  loops : $marquee.attr('loop') || -1,
                  scrollamount : $marquee.attr('scrollamount') || this.scrollAmount || 2,
                  behavior : ($marquee.attr('behavior') || 'scroll').toLowerCase(),
                  width : /left|right/.test(direction) ? width : height
              };
          
          // corrects a bug in Firefox - the default loops for slide is -1
          if ($marquee.attr('loop') == -1 && marqueeState.behavior == 'slide') {
              marqueeState.loops = 1;
          }

          $marquee.remove();
          
          // add padding
          if (/left|right/.test(direction)) {
              $marqueeRedux.find('> div').css('padding', '0 ' + width + 'px');
          } else {
              $marqueeRedux.find('> div').css('padding', height + 'px 0');
          }
          
          // events
          $marqueeRedux.bind('stop', function () {
              $marqueeRedux.data('paused', true);
          }).bind('pause', function () {
              $marqueeRedux.data('paused', true);
          }).bind('start', function () {
              $marqueeRedux.data('paused', false);
          }).bind('unpause', function () {
              $marqueeRedux.data('paused', false);
          }).data('marqueeState', marqueeState); // finally: store the state
          
          // todo - rerender event allowing us to do an ajax hit and redraw the marquee

          newMarquee.push(marqueeRedux);

          marqueeRedux[marqueeState.axis] = getReset(marqueeState.dir, marqueeRedux, marqueeState);
          $marqueeRedux.trigger('start');
          
          // on the very last marquee, trigger the animation
          if (i+1 == last) {
              animateMarquee();
          }
      });            

      return $(newMarquee);
  };
}(jQuery));


/**
 * Odometer functionality
 * http://github.hubspot.com/odometer/
 */
(function() {
  var COUNT_FRAMERATE, COUNT_MS_PER_FRAME, DIGIT_FORMAT, DIGIT_HTML, DIGIT_SPEEDBOOST, DURATION, FORMAT_MARK_HTML, FORMAT_PARSER, FRAMERATE, FRAMES_PER_VALUE, MS_PER_FRAME, MutationObserver, Odometer, RIBBON_HTML, TRANSITION_END_EVENTS, TRANSITION_SUPPORT, VALUE_HTML, addClass, createFromHTML, fractionalPart, now, removeClass, requestAnimationFrame, round, transitionCheckStyles, trigger, truncate, wrapJQuery, _jQueryWrapped, _old, _ref, _ref1,
    __slice = [].slice;

  VALUE_HTML = '<span class="odometer-value"></span>';

  RIBBON_HTML = '<span class="odometer-ribbon"><span class="odometer-ribbon-inner">' + VALUE_HTML + '</span></span>';

  DIGIT_HTML = '<span class="odometer-digit"><span class="odometer-digit-spacer">8</span><span class="odometer-digit-inner">' + RIBBON_HTML + '</span></span>';

  FORMAT_MARK_HTML = '<span class="odometer-formatting-mark"></span>';

  DIGIT_FORMAT = '(,ddd).dd';

  FORMAT_PARSER = /^\(?([^)]*)\)?(?:(.)(d+))?$/;

  FRAMERATE = 30;

  DURATION = 2000;

  COUNT_FRAMERATE = 20;

  FRAMES_PER_VALUE = 2;

  DIGIT_SPEEDBOOST = .5;

  MS_PER_FRAME = 1000 / FRAMERATE;

  COUNT_MS_PER_FRAME = 1000 / COUNT_FRAMERATE;

  TRANSITION_END_EVENTS = 'transitionend webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd';

  transitionCheckStyles = document.createElement('div').style;

  TRANSITION_SUPPORT = (transitionCheckStyles.transition != null) || (transitionCheckStyles.webkitTransition != null) || (transitionCheckStyles.mozTransition != null) || (transitionCheckStyles.oTransition != null);

  requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;

  MutationObserver = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;

  createFromHTML = function(html) {
    var el;
    el = document.createElement('div');
    el.innerHTML = html;
    return el.children[0];
  };

  removeClass = function(el, name) {
    return el.className = el.className.replace(new RegExp("(^| )" + (name.split(' ').join('|')) + "( |$)", 'gi'), ' ');
  };

  addClass = function(el, name) {
    removeClass(el, name);
    return el.className += " " + name;
  };

  trigger = function(el, name) {
    var evt;
    if (document.createEvent != null) {
      evt = document.createEvent('HTMLEvents');
      evt.initEvent(name, true, true);
      return el.dispatchEvent(evt);
    }
  };

  now = function() {
    var _ref, _ref1;
    return (_ref = (_ref1 = window.performance) != null ? typeof _ref1.now === "function" ? _ref1.now() : void 0 : void 0) != null ? _ref : +(new Date);
  };

  round = function(val, precision) {
    if (precision == null) {
      precision = 0;
    }
    if (!precision) {
      return Math.round(val);
    }
    val *= Math.pow(10, precision);
    val += 0.5;
    val = Math.floor(val);
    return val /= Math.pow(10, precision);
  };

  truncate = function(val) {
    if (val < 0) {
      return Math.ceil(val);
    } else {
      return Math.floor(val);
    }
  };

  fractionalPart = function(val) {
    return val - round(val);
  };

  _jQueryWrapped = false;

  (wrapJQuery = function() {
    var property, _i, _len, _ref, _results;
    if (_jQueryWrapped) {
      return;
    }
    if (window.jQuery != null) {
      _jQueryWrapped = true;
      _ref = ['html', 'text'];
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        property = _ref[_i];
        _results.push((function(property) {
          var old;
          old = window.jQuery.fn[property];
          return window.jQuery.fn[property] = function(val) {
            var _ref1;
            if ((val == null) || (((_ref1 = this[0]) != null ? _ref1.odometer : void 0) == null)) {
              return old.apply(this, arguments);
            }
            return this[0].odometer.update(val);
          };
        })(property));
      }
      return _results;
    }
  })();

  setTimeout(wrapJQuery, 0);

  Odometer = (function() {
    function Odometer(options) {
      var e, k, property, v, _base, _i, _len, _ref, _ref1, _ref2,
        _this = this;
      this.options = options;
      this.el = this.options.el;
      if (this.el.odometer != null) {
        return this.el.odometer;
      }
      this.el.odometer = this;
      _ref = Odometer.options;
      for (k in _ref) {
        v = _ref[k];
        if (this.options[k] == null) {
          this.options[k] = v;
        }
      }
      if ((_base = this.options).duration == null) {
        _base.duration = DURATION;
      }
      this.MAX_VALUES = ((this.options.duration / MS_PER_FRAME) / FRAMES_PER_VALUE) | 0;
      this.resetFormat();
      this.value = this.cleanValue((_ref1 = this.options.value) != null ? _ref1 : '');
      this.renderInside();
      this.render();
      try {
        _ref2 = ['innerHTML', 'innerText', 'textContent'];
        for (_i = 0, _len = _ref2.length; _i < _len; _i++) {
          property = _ref2[_i];
          if (this.el[property] != null) {
            (function(property) {
              return Object.defineProperty(_this.el, property, {
                get: function() {
                  var _ref3;
                  if (property === 'innerHTML') {
                    return _this.inside.outerHTML;
                  } else {
                    return (_ref3 = _this.inside.innerText) != null ? _ref3 : _this.inside.textContent;
                  }
                },
                set: function(val) {
                  return _this.update(val);
                }
              });
            })(property);
          }
        }
      } catch (_error) {
        e = _error;
        this.watchForMutations();
      }
      this;
    }

    Odometer.prototype.renderInside = function() {
      this.inside = document.createElement('div');
      this.inside.className = 'odometer-inside';
      this.el.innerHTML = '';
      return this.el.appendChild(this.inside);
    };

    Odometer.prototype.watchForMutations = function() {
      var e,
        _this = this;
      if (MutationObserver == null) {
        return;
      }
      try {
        if (this.observer == null) {
          this.observer = new MutationObserver(function(mutations) {
            var newVal;
            newVal = _this.el.innerText;
            _this.renderInside();
            _this.render(_this.value);
            return _this.update(newVal);
          });
        }
        this.watchMutations = true;
        return this.startWatchingMutations();
      } catch (_error) {
        e = _error;
      }
    };

    Odometer.prototype.startWatchingMutations = function() {
      if (this.watchMutations) {
        return this.observer.observe(this.el, {
          childList: true
        });
      }
    };

    Odometer.prototype.stopWatchingMutations = function() {
      var _ref;
      return (_ref = this.observer) != null ? _ref.disconnect() : void 0;
    };

    Odometer.prototype.cleanValue = function(val) {
      var _ref;
      if (typeof val === 'string') {
        val = val.replace((_ref = this.format.radix) != null ? _ref : '.', '<radix>');
        val = val.replace(/[.,]/g, '');
        val = val.replace('<radix>', '.');
        val = parseFloat(val, 10) || 0;
      }
      return round(val, this.format.precision);
    };

    Odometer.prototype.bindTransitionEnd = function() {
      var event, renderEnqueued, _i, _len, _ref, _results,
        _this = this;
      if (this.transitionEndBound) {
        return;
      }
      this.transitionEndBound = true;
      renderEnqueued = false;
      _ref = TRANSITION_END_EVENTS.split(' ');
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        event = _ref[_i];
        _results.push(this.el.addEventListener(event, function() {
          if (renderEnqueued) {
            return true;
          }
          renderEnqueued = true;
          setTimeout(function() {
            _this.render();
            renderEnqueued = false;
            return trigger(_this.el, 'odometerdone');
          }, 0);
          return true;
        }, false));
      }
      return _results;
    };

    Odometer.prototype.resetFormat = function() {
      var format, fractional, parsed, precision, radix, repeating, _ref, _ref1;
      format = (_ref = this.options.format) != null ? _ref : DIGIT_FORMAT;
      format || (format = 'd');
      parsed = FORMAT_PARSER.exec(format);
      if (!parsed) {
        throw new Error("Odometer: Unparsable digit format");
      }
      _ref1 = parsed.slice(1, 4), repeating = _ref1[0], radix = _ref1[1], fractional = _ref1[2];
      precision = (fractional != null ? fractional.length : void 0) || 0;
      return this.format = {
        repeating: repeating,
        radix: radix,
        precision: precision
      };
    };

    Odometer.prototype.render = function(value) {
      var classes, cls, digit, match, newClasses, theme, wholePart, _i, _j, _len, _len1, _ref;
      if (value == null) {
        value = this.value;
      }
      this.stopWatchingMutations();
      this.resetFormat();
      this.inside.innerHTML = '';
      theme = this.options.theme;
      classes = this.el.className.split(' ');
      newClasses = [];
      for (_i = 0, _len = classes.length; _i < _len; _i++) {
        cls = classes[_i];
        if (!cls.length) {
          continue;
        }
        if (match = /^odometer-theme-(.+)$/.exec(cls)) {
          theme = match[1];
          continue;
        }
        if (/^odometer(-|$)/.test(cls)) {
          continue;
        }
        newClasses.push(cls);
      }
      newClasses.push('odometer');
      if (!TRANSITION_SUPPORT) {
        newClasses.push('odometer-no-transitions');
      }
      if (theme) {
        newClasses.push("odometer-theme-" + theme);
      } else {
        newClasses.push("odometer-auto-theme");
      }
      this.el.className = newClasses.join(' ');
      this.ribbons = {};
      this.digits = [];
      wholePart = !this.format.precision || !fractionalPart(value) || false;
      _ref = value.toString().split('').reverse();
      for (_j = 0, _len1 = _ref.length; _j < _len1; _j++) {
        digit = _ref[_j];
        if (digit === '.') {
          wholePart = true;
        }
        this.addDigit(digit, wholePart);
      }
      return this.startWatchingMutations();
    };

    Odometer.prototype.update = function(newValue) {
      var diff,
        _this = this;
      newValue = this.cleanValue(newValue);
      if (!(diff = newValue - this.value)) {
        return;
      }
      removeClass(this.el, 'odometer-animating-up odometer-animating-down odometer-animating');
      if (diff > 0) {
        addClass(this.el, 'odometer-animating-up');
      } else {
        addClass(this.el, 'odometer-animating-down');
      }
      this.stopWatchingMutations();
      this.animate(newValue);
      this.startWatchingMutations();
      setTimeout(function() {
        _this.el.offsetHeight;
        return addClass(_this.el, 'odometer-animating');
      }, 0);
      return this.value = newValue;
    };

    Odometer.prototype.renderDigit = function() {
      return createFromHTML(DIGIT_HTML);
    };

    Odometer.prototype.insertDigit = function(digit, before) {
      if (before != null) {
        return this.inside.insertBefore(digit, before);
      } else if (!this.inside.children.length) {
        return this.inside.appendChild(digit);
      } else {
        return this.inside.insertBefore(digit, this.inside.children[0]);
      }
    };

    Odometer.prototype.addSpacer = function(chr, before, extraClasses) {
      var spacer;
      spacer = createFromHTML(FORMAT_MARK_HTML);
      spacer.innerHTML = chr;
      if (extraClasses) {
        addClass(spacer, extraClasses);
      }
      return this.insertDigit(spacer, before);
    };

    Odometer.prototype.addDigit = function(value, repeating) {
      var chr, digit, resetted, _ref;
      if (repeating == null) {
        repeating = true;
      }
      if (value === '-') {
        return this.addSpacer(value, null, 'odometer-negation-mark');
      }
      if (value === '.') {
        return this.addSpacer((_ref = this.format.radix) != null ? _ref : '.', null, 'odometer-radix-mark');
      }
      if (repeating) {
        resetted = false;
        while (true) {
          if (!this.format.repeating.length) {
            if (resetted) {
              throw new Error("Bad odometer format without digits");
            }
            this.resetFormat();
            resetted = true;
          }
          chr = this.format.repeating[this.format.repeating.length - 1];
          this.format.repeating = this.format.repeating.substring(0, this.format.repeating.length - 1);
          if (chr === 'd') {
            break;
          }
          this.addSpacer(chr);
        }
      }
      digit = this.renderDigit();
      digit.querySelector('.odometer-value').innerHTML = value;
      this.digits.push(digit);
      return this.insertDigit(digit);
    };

    Odometer.prototype.animate = function(newValue) {
      if (!TRANSITION_SUPPORT || this.options.animation === 'count') {
        return this.animateCount(newValue);
      } else {
        return this.animateSlide(newValue);
      }
    };

    Odometer.prototype.animateCount = function(newValue) {
      var cur, diff, last, start, tick,
        _this = this;
      if (!(diff = +newValue - this.value)) {
        return;
      }
      start = last = now();
      cur = this.value;
      return (tick = function() {
        var delta, dist, fraction;
        if ((now() - start) > _this.options.duration) {
          _this.value = newValue;
          _this.render();
          trigger(_this.el, 'odometerdone');
          return;
        }
        delta = now() - last;
        if (delta > COUNT_MS_PER_FRAME) {
          last = now();
          fraction = delta / _this.options.duration;
          dist = diff * fraction;
          cur += dist;
          _this.render(Math.round(cur));
        }
        if (requestAnimationFrame != null) {
          return requestAnimationFrame(tick);
        } else {
          return setTimeout(tick, COUNT_MS_PER_FRAME);
        }
      })();
    };

    Odometer.prototype.getDigitCount = function() {
      var i, max, value, values, _i, _len;
      values = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
      for (i = _i = 0, _len = values.length; _i < _len; i = ++_i) {
        value = values[i];
        values[i] = Math.abs(value);
      }
      max = Math.max.apply(Math, values);
      return Math.ceil(Math.log(max + 1) / Math.log(10));
    };

    Odometer.prototype.getFractionalDigitCount = function() {
      var i, parser, parts, value, values, _i, _len;
      values = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
      parser = /^\-?\d*\.(\d*?)0*$/;
      for (i = _i = 0, _len = values.length; _i < _len; i = ++_i) {
        value = values[i];
        values[i] = value.toString();
        parts = parser.exec(values[i]);
        if (parts == null) {
          values[i] = 0;
        } else {
          values[i] = parts[1].length;
        }
      }
      return Math.max.apply(Math, values);
    };

    Odometer.prototype.resetDigits = function() {
      this.digits = [];
      this.ribbons = [];
      this.inside.innerHTML = '';
      return this.resetFormat();
    };

    Odometer.prototype.animateSlide = function(newValue) {
      var boosted, cur, diff, digitCount, digits, dist, end, fractionalCount, frame, frames, i, incr, j, mark, numEl, oldValue, start, _base, _i, _j, _k, _l, _len, _len1, _len2, _m, _ref, _results;
      oldValue = this.value;
      fractionalCount = this.getFractionalDigitCount(oldValue, newValue);
      if (fractionalCount) {
        newValue = newValue * Math.pow(10, fractionalCount);
        oldValue = oldValue * Math.pow(10, fractionalCount);
      }
      if (!(diff = newValue - oldValue)) {
        return;
      }
      this.bindTransitionEnd();
      digitCount = this.getDigitCount(oldValue, newValue);
      digits = [];
      boosted = 0;
      for (i = _i = 0; 0 <= digitCount ? _i < digitCount : _i > digitCount; i = 0 <= digitCount ? ++_i : --_i) {
        start = truncate(oldValue / Math.pow(10, digitCount - i - 1));
        end = truncate(newValue / Math.pow(10, digitCount - i - 1));
        dist = end - start;
        if (Math.abs(dist) > this.MAX_VALUES) {
          frames = [];
          incr = dist / (this.MAX_VALUES + this.MAX_VALUES * boosted * DIGIT_SPEEDBOOST);
          cur = start;
          while ((dist > 0 && cur < end) || (dist < 0 && cur > end)) {
            frames.push(Math.round(cur));
            cur += incr;
          }
          if (frames[frames.length - 1] !== end) {
            frames.push(end);
          }
          boosted++;
        } else {
          frames = (function() {
            _results = [];
            for (var _j = start; start <= end ? _j <= end : _j >= end; start <= end ? _j++ : _j--){ _results.push(_j); }
            return _results;
          }).apply(this);
        }
        for (i = _k = 0, _len = frames.length; _k < _len; i = ++_k) {
          frame = frames[i];
          frames[i] = Math.abs(frame % 10);
        }
        digits.push(frames);
      }
      this.resetDigits();
      _ref = digits.reverse();
      for (i = _l = 0, _len1 = _ref.length; _l < _len1; i = ++_l) {
        frames = _ref[i];
        if (!this.digits[i]) {
          this.addDigit(' ', i >= fractionalCount);
        }
        if ((_base = this.ribbons)[i] == null) {
          _base[i] = this.digits[i].querySelector('.odometer-ribbon-inner');
        }
        this.ribbons[i].innerHTML = '';
        if (diff < 0) {
          frames = frames.reverse();
        }
        for (j = _m = 0, _len2 = frames.length; _m < _len2; j = ++_m) {
          frame = frames[j];
          numEl = document.createElement('div');
          numEl.className = 'odometer-value';
          numEl.innerHTML = frame;
          this.ribbons[i].appendChild(numEl);
          if (j === frames.length - 1) {
            addClass(numEl, 'odometer-last-value');
          }
          if (j === 0) {
            addClass(numEl, 'odometer-first-value');
          }
        }
      }
      if (start < 0) {
        this.addDigit('-');
      }
      mark = this.inside.querySelector('.odometer-radix-mark');
      if (mark != null) {
        mark.parent.removeChild(mark);
      }
      if (fractionalCount) {
        return this.addSpacer(this.format.radix, this.digits[fractionalCount - 1], 'odometer-radix-mark');
      }
    };

    return Odometer;

  })();

  Odometer.options = (_ref = window.odometerOptions) != null ? _ref : {};

  setTimeout(function() {
    var k, v, _base, _ref1, _results;
    if (window.odometerOptions) {
      _ref1 = window.odometerOptions;
      _results = [];
      for (k in _ref1) {
        v = _ref1[k];
        _results.push((_base = Odometer.options)[k] != null ? (_base = Odometer.options)[k] : _base[k] = v);
      }
      return _results;
    }
  }, 0);

  Odometer.init = function() {
    var el, elements, _i, _len, _ref1, _results;
    if (document.querySelectorAll == null) {
      return;
    }
    elements = document.querySelectorAll(Odometer.options.selector || '.odometer');
    _results = [];
    for (_i = 0, _len = elements.length; _i < _len; _i++) {
      el = elements[_i];
      _results.push(el.odometer = new Odometer({
        el: el,
        value: (_ref1 = el.innerText) != null ? _ref1 : el.textContent
      }));
    }
    return _results;
  };

  if ((((_ref1 = document.documentElement) != null ? _ref1.doScroll : void 0) != null) && (document.createEventObject != null)) {
    _old = document.onreadystatechange;
    document.onreadystatechange = function() {
      if (document.readyState === 'complete' && Odometer.options.auto !== false) {
        Odometer.init();
      }
      return _old != null ? _old.apply(this, arguments) : void 0;
    };
  } else {
    document.addEventListener('DOMContentLoaded', function() {
      if (Odometer.options.auto !== false) {
        return Odometer.init();
      }
    }, false);
  }

  if (typeof define === 'function' && define.amd) {
    define(['jquery'], function() {
      return Odometer;
    });
  } else if (typeof exports === !'undefined') {
    module.exports = Odometer;
  } else {
    window.Odometer = Odometer;
  }

}).call(this);


/**
 * A simple, lightweight jQuery plugin for creating sortable tables.
 * https://github.com/kylefox/jquery-tablesort 
 */
(function($) {

//var $ = window.jQuery;

$.tablesort = function ($table, settings) {
  var self = this;
  this.$table = $table;
  this.$thead = this.$table.find('thead');
  this.settings = $.extend({}, $.tablesort.defaults, settings);
  this.$table.find('th').bind('click.tablesort', function() {
    self.sort($(this));
  });
  this.index = null;
  this.$th = null;
  this.direction = null;
};

$.tablesort.prototype = {

  sort: function(th, direction) {
    var start = new Date(),
      self = this,
      table = this.$table,
      rows = this.$thead.length > 0 ? table.find('tbody tr') : table.find('tr').has('td'),
      cells = table.find('tr td:nth-of-type(' + (th.index() + 1) + ')'),
      sortBy = th.data().sortBy,
      sortedMap = [];

    var unsortedValues = cells.map(function(idx, cell) {
      if (sortBy)
        return (typeof sortBy === 'function') ? sortBy($(th), $(cell), self) : sortBy;
      return ($(this).data().sortValue != null ? $(this).data().sortValue : $(this).text());
    });
    if (unsortedValues.length === 0) return;

    self.$table.find('th').removeClass(self.settings.asc + ' ' + self.settings.desc);

    if (direction !== 'asc' && direction !== 'desc')
      this.direction = this.direction === 'asc' ? 'desc' : 'asc';
    else
      this.direction = direction;

    direction = this.direction == 'asc' ? 1 : -1;

    self.$table.trigger('tablesort:start', [self]);
    self.log("Sorting by " + this.index + ' ' + this.direction);

    for (var i = 0, length = unsortedValues.length; i < length; i++)
    {
      sortedMap.push({
        index: i,
        cell: cells[i],
        row: rows[i],
        value: unsortedValues[i]
      });
    }

    sortedMap.sort(function(a, b) {
      if (a.value > b.value) {
        return 1 * direction;
      } else if (a.value < b.value) {
        return -1 * direction;
      } else {
        return 0;
      }
    });

    $.each(sortedMap, function(i, entry) {
      table.append(entry.row);
    });

    th.addClass(self.settings[self.direction]);

    self.log('Sort finished in ' + ((new Date()).getTime() - start.getTime()) + 'ms');
    self.$table.trigger('tablesort:complete', [self]);
  },

  log: function(msg) {
    if(($.tablesort.DEBUG || this.settings.debug) && console && console.log) {
      console.log('[tablesort] ' + msg);
    }
  },

  destroy: function() {
    this.$table.find('th').unbind('click.tablesort');
    this.$table.data('tablesort', null);
    return null;
  }

};

$.tablesort.DEBUG = false;

$.tablesort.defaults = {
  debug: $.tablesort.DEBUG,
  asc: 'sorted ascending',
  desc: 'sorted descending'
};

$.fn.tablesort = function(settings) {
  var table, sortable, previous;
  return this.each(function() {
    table = $(this);
    previous = table.data('tablesort');
    if(previous) {
      previous.destroy();
    }
    table.data('tablesort', new $.tablesort(table, settings));
  });
};

}(jQuery));
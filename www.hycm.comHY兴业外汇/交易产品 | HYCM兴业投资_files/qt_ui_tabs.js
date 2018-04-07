(function ($) {

Drupal.behaviors.qt_ui_tabs = {
  attach: function (context, settings) {

    $('.quicktabs-ui-wrapper').once('qt-ui-tabs-processed', function() {
      var id = $(this).attr('id');
      var qtKey = 'qt_' + id.substring(id.indexOf('-') +1);
      var active_tab = parseInt(settings.quicktabs[qtKey].active_tab);
      var check_name = settings.quicktabs[qtKey].name;
      if(check_name=="trading_products"){
        var params = {};
        if (location.search) {
          var parts = location.search.substring(1).split('&');

          for (var i = 0; i < parts.length; i++) {
            var nv = parts[i].split('=');
            if (!nv[0]) continue;
            params[nv[0]] = nv[1] || true;
          }
        }
        if (params.product)
          active_tab=parseInt(params.product);
      }
        
      if (!settings.quicktabs[qtKey].history) {
        if (window.location.hash.match('#qt.*') == undefined) {
          $(this).tabs({selected: active_tab, active: active_tab});
        }
        else {
          $(this).tabs();
        }
      }
      else {
        $(this).tabs({event: 'change'});
        Drupal.quicktabsBbq($(this), 'ul.ui-tabs-nav a');
      }
    });

  }
}

})(jQuery);

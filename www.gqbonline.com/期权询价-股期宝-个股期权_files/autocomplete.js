/*  Copyright Zachary, 1994-2008  |  www.genius.com.cn
* -----------------------------------------------------------
*
* The DHTML AutoComplete, version 1.5  "It is happening again"
*
* This script is developed by terminal team.  Visit us at www.genius.com.cn
*
* This script is distributed under the GNU Lesser General Public License.
* Read the entire license text here: http://www.genius.com.cn
*/

AutoComplete = function (ele, dataSource, trClickCallback, trdbclickCallback, inputEnterCallback) {
    if (ele == null) {
        // 不存在这样的元素，不初始化
        return;
    }

    // 受控文本框
    this.inputElement = ele;
    this.inputElement.autocomplete = "off";
    // 数据源(是一数组，且是 JSON 对象
    this.dataSource = dataSource;
    // 符合用户匹配的对象集合
    this.matchedList = new Array();
    // 当前用户选择的行索引
    this.currentTrIndex = 0;
    // 单击选中或双击选中的 JSON 对象
    this.selectedItem = null;

    // 单击 tr 选中某行数据时的回调函数
    this.trClickCallback = trClickCallback;
    // 双击 tr 选中某行数据时的回调函数
    this.trdbclickCallback = trdbclickCallback;
    // 文本框回车时的回调函数
    this.inputEnterCallback = inputEnterCallback;

    this.addEventListener("click", this.inputElement, this.preDraw, this);
    //this.addEventListener("dblclick", this.inputElement, this.preDraw, this);
    // 在文本框中按下键盘时，可以上下移动表格
    this.addEventListener("keydown", this.inputElement, this.movetable, this);
    // 文本变化时重新绘制
    this.addEventListener("keyup", this.inputElement, this.preDraw, this);
    
    this.addEventListener("input", this.inputElement, this.preDraw, this);
    // 为 document 添加 click 监听
    this.addEventListener("click", document, this.predispose, this);

    // 添加事件监听时附加参数
    this.inputElement.attachment = this;
    document.attachment = this;
};

AutoComplete.prototype = {
    /**
    * 修改数据源
    * @ds 传入的数据源
    */
    setDataSource: function (ds) {
        this.dataSource = ds;
        //重新设置数据源后,要将原始保存的信息清空
        this.matchedList.length = 0;
        this.currentTrIndex = 0;
        this.selectedItem = null;
    },

    /**
    * 单击/双击文本框，文本框被按下键盘时触发的事件，该方法处理事件源，并不是真正绘制 autocomplete
    */
    preDraw: function (eve) {

        // 数据源若为 null，不绘制
        if (!this.dataSource) {
            alert("数据源为空，无法绘制匹配区域。");
            return;
        }

        var event = eve || window.event;
        var eveSrc = event.srcElement || event.target;
        var inputvalue = eveSrc.value.trim();

        if (inputvalue == this.params.initTip) {
            this.inputElement.value = inputvalue = "";
        }

        var keyCode = event.keyCode;
        // 若是 <ESC>、↑、→、↓、←，回车(回车时调用其回调函数，如果该回调函数存在的话)、则不绘制 AutoComplete
        if (keyCode == 13) {
            this.onEnter();
            // 不管是否提供文本框的回调函数，只要回车，就不绘制
            return;
        }
        if (keyCode == 27 || keyCode == 38 || keyCode == 39 || keyCode == 40 || keyCode == 37) {
            return;
        }


        this.draw(inputvalue, this.params.maxMatchedItemNumberAllowed);
    },

    /**
    * 根据待匹配的字符串来绘制 AutoComplete
    * @matchedString 待匹配的字符串
    * @maxMatchedItemNumber 绘制 AutoComplete 时，首先进行匹配操作，该参数代表匹配的最大个数，超过这个数，不再进行匹配
    */
    draw: function (matchedString, maxMatchedItemNumberAllowed) {
        if (!matchedString || matchedString.trim().length == 0) {
            matchedString = "";
        }

        // 首先清空符合用户输入的列表
        this.matchedList.length = 0;
        // 重绘时，把原来记住的 selectedItem 销毁，以便得到新的数据
        this.selectedItem = null;

        // 根据用户输入的内容匹配
        this.match(matchedString, maxMatchedItemNumberAllowed);

        // AutoComplete 将处于 id 为 配置文件中定义的 divContainerId 属性的层中，若存在，删除，以便重绘
        var bodychilds = document.body.childNodes;
        for (var i = 0; i < bodychilds.length; i++) {
            if ((bodychilds[i].nodeType == 1) && bodychilds[i].id == this.params.divContainerId) {
                document.body.removeChild(bodychilds[i]);
                break;
            }
        }

        // AutoComplete 所在的层
        var div = document.createElement("div");
        div.id = this.params.divContainerId;
        div.style.width = this.params.displayZoneWidth + "px";
        // 一个窗口可显示 N 条记录，少于 N 条记录的话不产生滚动条效果
        if (this.matchedList.length >= this.params.itemNumberPerPage) {
            // KeyBoard.setStyle$prompt_limit(div);
            div.className = this.params.exceedMaxItemNumberPerPageClass;
        } else {
            // KeyBoard.setStyle$prompt_common(div);
            div.className = this.params.inItemNumberPerPageClass;
        }

        // 该 table 将放入 div 中
        var table = document.createElement("table");
        table.id = this.params.tableId;
        table.identification = this.params.tableIdentification;
        table.border = 0;
        table.cellPadding = 2;
        table.cellSpacing = 0;
        table.width = "100%";
        table.className = this.params.tableClass;



        // 下面两段不让选择表格中的文本
        table.onselectstart = function () {
            return false;
        }

        table.onselect = function () {
            document.selection.empty();
        }

        var tbody = document.createElement("tbody");
        table.appendChild(tbody);

        // 标题行
        var titleRow = table.insertRow(0);
        titleRow.className = this.params.titleTrClass;
        for (var i = 0; i < this.params.displayMapping.length; i++) {
            var titleTd = titleRow.insertCell(i);
            titleTd.innerHTML = this.params.displayMapping[i].title;
            titleTd.align = "center";
            titleTd.title = this.params.displayMapping[i].alt;
            titleTd.width = this.params.displayMapping[i].displaypercentage;
            if (this.params.displayMapping[i].display && this.params.displayMapping[i].display == "none") {
                titleTd.style.display = "none";
            }
            titleTd.className = this.params.tdTitleClass;
        }

        for (var i = 0; i < this.matchedList.length; i++) {
            var matchedItem = this.matchedList[i];
            var tr = table.insertRow(i + 1);
            // 为 tr 添加一 item 属性，表达这一行所具有的详细信息
            tr.item = matchedItem;
            tr.index = i + 1;
            tr.className = this.params.crossbeddedTrClassPrefix + i % 2;

            for (var j = 0; j < this.params.displayMapping.length; j++) {
                var contentTd = tr.insertCell(j);
                contentTd.innerHTML = this.format(eval("tr.item." + this.params.displayMapping[j].jsonattribute));
                if (this.params.displayMapping[j].display && this.params.displayMapping[j].display == "none") {
                    contentTd.style.display = "none";
                }
                contentTd.align = "center";
                contentTd.title = contentTd.innerText;
                contentTd.className = this.params.tdClass;
            }

            this.addEventListener("click", tr, this.trClick, this);
            this.addEventListener("dblclick", tr, this.trdblClick, this);
        }

        // 为表格添加 keydown 事件
        this.addEventListener("keydown", table, this.movetable, this);

        // 检测当前选中的 row 是否存在(因此重绘了，重绘后的 matchedList.length 有可能小于 currentTrIndex)
        if (table.rows[this.currentTrIndex] == null) {
            this.currentTrIndex = 0;
        }

        div.appendChild(table);

        // 确定 div 的位置
        var top = Gti.Common.getTop(this.inputElement);
        var left = Gti.Common.getLeft(this.inputElement);
        var width = this.inputElement.clientWidth;
        var height = this.inputElement.clientHeight; //Gti.common.getHeight(this.inputElement, false);
        // bottom: 元素的下方离页面顶层的距离(不是元素上方离页面底层的距离)；top: 元素的上方离页面顶层的距离
        var bottom = Gti.Common.getBottom(this.inputElement);
        // right: 元素右侧离页面左侧的距离(不是元素左侧离页面右侧的距离)；lefr: 元素左侧离页面左侧的距离
        var right = Gti.Common.getRight(this.inputElement);

        div.style.position = "absolute";
        div.style.zIndex = 10000;
        var offset_vertical = document.body.clientHeight - bottom;
        var offset_horizontal = document.body.clientWidth - left;
        // div.style.left = left + "px";
        
        var scrollTop = $("body").scrollTop();
        // 满屏高度(AutoComplete 层的高度)为 params.displayZoneHeight，该值和 css 样式中的值一致
        // if (offset_vertical < this.params.displayZoneHeight) {
        //     // 显示在 inputElement 的上方
        //     div.style.top =bottom - height - div.clientHeight + 20 + "px";
        // } else {
            // 显示在 inputElement 的下方
            if ($.browser.msie) {
                div.style.top =scrollTop + top + height + "px";
            } else {
                div.style.top =scrollTop +top + height + "px";
            }
        // }

        // 满屏宽度(AutoComplete 的宽度)为 params.displayZoneWidth
        if (offset_horizontal < this.params.displayZoneWidth) {
            div.style.left = left - (this.params.displayZoneWidth - offset_horizontal) + "px";
        } else {
            div.style.left = left + "px";
        }


        document.body.appendChild(div);
        //$("body").append(div);
        // 使用 iframe，使 AutoComplete 的优先级别最高
        /*  var ifrRef = document.createElement("iframe");
        ifrRef.src = "about:blank?a=_jrjjrjjrj";
        ifrRef.frameBorder = "0";
        ifrRef.style.position = "absolute"
        ifrRef.style.zIndex = -1;
        ifrRef.style.scrolling = "no";
        // div.style.width/height/top/left 属性已添加 "px" 后缀。div 被加入到 document 后，它才有 offsetWidth 和 offsetHeight，之前它们的值为 0
        ifrRef.style.width = div.offsetWidth;
        ifrRef.style.height = div.offsetHeight;
        ifrRef.style.top = "0px";
        ifrRef.style.left = "0px";
        ifrRef.style.display = "none";
        ifrRef.style.filter = "progid:DXImageTransform.Microsoft.Alpha(style=0,opacity=0)";
        div.appendChild(ifrRef);
        */
    },

    /**
    * 根据完整词和用户输入，格式化完整词，使得完整词中出现过用户输入的词高亮显示
    * eg: 完整词为 "我爱我的祖国"，用户输入 "爱我"，最后返回的是 <span class="unmatched">我</span><span class="matched">爱我</span><span class="unmatched">的祖国</span>
    * 可通过样式控制如何高亮显示用户的输入
    * @wholeWord 完整词
    */
    format: function (wholeWord) {
        // 用户输入(即要被匹配的字符串)
        var userInput = this.inputElement.value;
        var index = wholeWord.toUpperCase().indexOf(userInput.toUpperCase());
        if (index == -1) {
            return wholeWord;
        }

        var span = document.createElement("span");

        // 创建匹配前的字符串层及设置其样式
        var beforeMatchedSpan = document.createElement("span");
        beforeMatchedSpan.className = "unmatched";

        // 创建匹配的字符串层及设置其样式
        var matchedspan = document.createElement("span");
        matchedspan.className = "matched";

        // 创建匹配后的字符串层及设置其样式
        var afterMatchedSpan = document.createElement("span");
        afterMatchedSpan.className = "unmatched";

        // 被匹配之前的字符串(黑字)
        beforeMatchedSpan.innerHTML = wholeWord.substring(0, index);
        // 匹配的字符串(红字)
        matchedspan.innerHTML = userInput;
        // 匹配后的字符串(黑字)
        afterMatchedSpan.innerHTML = wholeWord.substring(index + userInput.length);

        span.appendChild(beforeMatchedSpan);
        span.appendChild(matchedspan);
        span.appendChild(afterMatchedSpan);

        return span.innerHTML;
    },

    /**
    * 在表格的行上单击，若有回调函数，则调用回调函数
    */
    trClick: function (eve) {

        /*
        var trEvent = eve || window.event;
        var trSrc = trEvent.target || trEvent.srcElement;
        
        while (trSrc.nodeName.toUpperCase() != "TR") {
        trSrc = trSrc.parentNode;
        }
        
        // 用户选中某行时(onclick)，将当前行的索引(index) 保存到类属性中(KeyBoard.currentTrIndex)
        this.currentTrIndex = trSrc.index;
        this.changeTRClass(trSrc);
        
        // 单击表格的某行时，使文本框聚焦，此时按上下左右键可以上下翻动
        // 由于没有给文本框设置 focus 事件，因此使文本框聚焦时不会进行重绘
        this.inputElement.focus();
        
        // 为文本框赋值
        this.evaluate(trSrc);
        // 为选中的数据对象赋值
        this.selectedItem = trSrc.item;
        if (this.trClickCallback) {
        this.trClickCallback(trSrc.item);   
        }
        
        */

        var trEvent = eve || window.event;
        var trSrc = trEvent.target || trEvent.srcElement;

        while (trSrc.nodeName.toUpperCase() != "TR") {
            trSrc = trSrc.parentNode;
        }

        this.evaluate(trSrc);
        // 为选中的数据对象赋值
        this.selectedItem = trSrc.item;
        this.dispose();

        if (this.trClickCallback) {
            this.trClickCallback(trSrc.item);
        }
    },

    /**
    * 在表格行上双击，若有回调函数，则调用回调函数
    */
    trdblClick: function (eve) {
        var trEvent = eve || window.event;
        var trSrc = trEvent.target || trEvent.srcElement;

        while (trSrc.nodeName.toUpperCase() != "TR") {
            trSrc = trSrc.parentNode;
        }

        this.evaluate(trSrc);
        // 为选中的数据对象赋值
        this.selectedItem = trSrc.item;
        this.dispose();

        // 若用户提供了回调函数，则调用用户的函数
        if (this.trdbclickCallback) {
            this.trdbclickCallback(trSrc.item);
        }
    },

    /**
    * 用 上下左右 键移动时，动态修改 tr 的样式
    */
    movetable: function (eve) {
        var event = eve || window.event;
        var eveSrc = event.srcElement || this;
        var keyCode = event.keyCode;

        // <ESC>
        if (keyCode == 27) {
            // 销毁 div
            this.dispose();
            return;
        }

        var table = document.getElementById(this.params.tableId);
        var rows = null;
        if (table != null) {
            rows = table.rows;
        }

        // ←，↑
        if (keyCode == 37 || keyCode == 38) {
            if (rows != null) {
                this.currentTrIndex--;
                if (this.currentTrIndex <= 0) {
                    this.currentTrIndex = this.matchedList.length;
                }

                if (rows[this.currentTrIndex] != null) {
                    this.selectedItem = rows[this.currentTrIndex].item;
                    this.evaluate(rows[this.currentTrIndex]);
                    this.changeTRClass(rows[this.currentTrIndex]);
                }

                document.getElementById(this.params.divContainerId).scrollTop = Math.floor(this.currentTrIndex / this.params.itemNumberPerPage) * this.params.displayZoneHeight;
            }
            return;
        }

        // →，↓
        if (keyCode == 39 || keyCode == 40) {
            if (rows != null) {
                this.currentTrIndex++;
                if (this.currentTrIndex > this.matchedList.length) {
                    this.currentTrIndex = 1;
                }
                if (rows[this.currentTrIndex] != null) {
                    this.selectedItem = rows[this.currentTrIndex].item;
                    this.evaluate(rows[this.currentTrIndex]);
                    this.changeTRClass(rows[this.currentTrIndex]);
                }

                document.getElementById(this.params.divContainerId).scrollTop = Math.floor(this.currentTrIndex / this.params.itemNumberPerPage) * this.params.displayZoneHeight;
            }
            return;
        }

        // 回车确定
        if (keyCode == 13) {
            //this.onEnter();
        }
    },

    /**
    * 在文本框中回车时，要给未填全的文本框赋，随后调用回车的回调函数
    */
    onEnter: function () {
        var obj = this.getSelectedItem(this);
        if (obj) {
            // 文本框聚焦
            this.inputElement.focus();
            this.inputElement.value =eval("obj." + this.params.textField)+"-"+ eval("obj." + this.params.textName);
            // 销毁 div
            this.dispose();
        } else {
            // 输入了未匹配到的字符，回车后，根据配置文件进行相应处理
            if (this.params.ignoreUnExactMatchOnCheck) {
                // 忽略用户的错误输入或未精确匹配，此时系统将会分配给它一个默认值，即数据源的第一项数据
                this.selectedItem = this.dataSource[0];
                if (this.matchedList.length == 0) {
                    this.inputElement.value =eval("this.dataSource[0]." + this.params.textField)+"-"+ eval("this.dataSource[0]." + this.params.textName);
                } else {
                    this.inputElement.value =eval("this.matchedList[0]." + this.params.textField)+"-"+  eval("this.matchedList[0]." + this.params.textName);
                }
                // 销毁 div
                this.dispose();
            } else {
                // 不允许用户输入错误(必须精确匹配)的字符，此时错误处理交由回调函数处理，因此 inputEnterCallback 必须提供
                if (this.inputEnterCallback) {
                    this.inputEnterCallback(null);
                } else {
                    alert("配置文件中的 ignoreUnExactMatchOnCheck 为 false，表明用户输入必须精确匹配。但是现在用户输入的未能精确批喷(匹配零项或匹配多于一项)，可是又没有提供回车时的回调函数。");
                }
                return;
            }
        }

        if (this.inputEnterCallback) {
            this.inputEnterCallback(this.selectedItem);
        }
    },

    /**
    * 针对点击 document 来销毁 AutoComplete，document 的任意元素被点击均会触发该事件
    * nodeName == "undefined":  Firefox
    * nodeName ==  "body"           IE
    */
    predispose: function (eve) {
        var event = eve || window.event;
        var eveSrc = event.target || event.srcElement;

        if (eveSrc && (eveSrc.nodeName.toUpperCase() == "TD" || eveSrc.nodeName.toUpperCase() == "SPAN")) {
            while (true) {
                eveSrc = eveSrc.parentNode;
                if (!eveSrc) {
                    return;
                }
                if (eveSrc.nodeName.toUpperCase() == "TABLE") {
                    break;
                }
            }
        }

        if (eveSrc != this.inputElement && eveSrc.identification != this.params.tableIdentification) {
            this.dispose();
        }
    },

    /**
    * 销毁 AutoComplete
    */
    dispose: function () {
        // AutoComplete 将处于 id 为配置文件中指定参数为 divContainerId 的层中，若存在，删除，以便重绘
        var divcontainer = document.getElementById(this.params.divContainerId);
        if (divcontainer) {
            document.body.removeChild(divcontainer);
        }

        if (this.inputElement.value.trim() == "") {
            this.inputElement.value = this.params.initTip;
        }
    },

    /**
    * 为 input 赋值
    */
    evaluate: function (trSrc) {
        this.inputElement.value =eval("trSrc.item." + this.params.textField)+"-"+ eval("trSrc.item." + this.params.textName);
        this.inputElement.focus();
    },

    /**
    * 和数据源提供的值，匹配待匹配的字符串，将匹配的 item 放入 matchedList 中
    * @inputvalue 待匹配的字符串
    * @maxMatchedItemNumberAllowed 当匹配到 maxMatchedItemNumberAllowed 后，不再继续匹配，若值小于 0，匹配全部的
    */
    match: function (matchedString, maxMatchedItemNumberAllowed) {
        if (!maxMatchedItemNumberAllowed) {
            maxMatchedItemNumberAllowed = -1;
        }

        // 文本框中若为 ""，则直接从数据源 copy maxMatchedItemNumberAllowed 个数据到 matchedList 中，不需要匹配
        if (matchedString == "") {
            for (var i = 0; i < this.params.maxMatchedItemNumberAllowed; i++) {
                if (i < this.dataSource.length) {
                    this.matchedList[i] = this.dataSource[i];
                } else {
                    break;
                }
            }
            return;
        }

        for (var i = 0; i < this.dataSource.length; i++) {
            for (var j = 0; j < this.params.matchFields.length; j++) {
                if (this.dataSource[i][this.params.matchFields[j]].toUpperCase().indexOf(matchedString.toUpperCase(), 0) != -1) {
                    this.append(this.dataSource[i]);
                    continue;
                }
            }

            if (maxMatchedItemNumberAllowed < 0) {
                continue;
            } else {
                if (this.matchedList.length >= maxMatchedItemNumberAllowed) {
                    break;
                }
            }
        }
    },

    /**
    * 追加匹配的股票
    */
    append: function (item) {
        var isExists = function (thisobj) {
            var existence = false;
            var primarykey = thisobj.params.primarykey;
            var primaryvalue = eval("item." + primarykey);
            for (var i = 0; i < thisobj.matchedList.length; i++) {
                if (eval("thisobj.matchedList[i]." + primarykey) == primaryvalue) {
                    existence = true;
                    break;
                }
            }
            return existence;
        };
        

        if (!isExists(this)) {
            this.matchedList[this.matchedList.length++] = item;
        }
    },
    

    /**
    * 获取用户选中的 item(数据源的某项)。首先检查 matchedList，其次检查数据源，均未找到时，返回 null
    */
    getSelectedItem: function (thisobj) {
        var iterate = function (textvalue) {
            // 如果当前窗口只要一个匹配项，不管用户是否输入完整，均返回这唯一的匹配项
            if (thisobj.matchedList.length == 1) {
                return thisobj.matchedList[0];
            }

            // 不止一个匹配项或没有匹配项时，首先遍历满足当前窗口的的集合
            for (var i = 0; i < thisobj.matchedList.length; i++) {
                for (var j = 0; j < thisobj.params.matchFields.length; j++) {
                    var wholeWord = eval("thisobj.matchedList[i]." + thisobj.params.matchFields[j]);
                    if (thisobj.params.ignoreUnExactMatchOnCheck) {
                        // 不必精确匹配，则可使用 indexOf
                        if (wholeWord.toUpperCase().indexOf(textvalue.toUpperCase()) >= 0) {
                            return thisobj.matchedList[i];
                        }
                    } else {
                        // 使用精确匹配，需使用 "=="
                        if (wholeWord.toUpperCase() == textvalue.toUpperCase()) {
                            return thisobj.matchedList[i];
                        }
                    }
                }
            }

            // 当前窗口未找到，遍历全部
            for (var i = 0; i < thisobj.dataSource.length; i++) {
                for (var j = 0; j < thisobj.params.matchFields.length; j++) {
                    var wholeWord = eval("thisobj.dataSource[i]." + thisobj.params.matchFields[j]);
                    if (thisobj.params.ignoreUnExactMatchOnCheck) {
                        // 不必精确匹配，则可使用 indexOf
                        if (wholeWord.toUpperCase().indexOf(textvalue.toUpperCase()) >= 0) {
                            return thisobj.dataSource[i];
                        }
                    } else {
                        // 使用精确匹配，需使用 "=="
                        if (wholeWord.toUpperCase() == textvalue.toUpperCase()) {
                            return thisobj.dataSource[i];
                        }
                    }
                }
            }

            // 都未找到，返回 null
            return null;
        }; //-------------------------------------------------------------------------------------------

        var textvalue = thisobj.inputElement.value;
        if (textvalue.trim().length == 0) {
            return null;
        }

        // 数据源若为 null，直接返回 null
        if (!this.dataSource) {
            return null;
        }

        if (thisobj.selectedItem) {
            return thisobj.selectedItem;
        } else {
            thisobj.selectedItem = iterate(textvalue);
            return thisobj.selectedItem;
        }
    },

    /**
    * 上下左右键移动时，或鼠标在某行单击时，修改样式，使得被选中的行的样式区别其它的行
    */
    changeTRClass: function (selectedTR) {
        var table = document.getElementById(this.params.tableId);
        if (table != null) {
            var trs = table.childNodes[0].getElementsByTagName("tr");
            for (var i = 0; i < trs.length; i++) {
                if (trs[i].item == selectedTR.item) {
                    trs[i].className = this.params.trSelectedClass;
                } else {
                    trs[i].className = this.params.crossbeddedTrClassPrefix + (i + 1) % 2;
                }
            }
        }
    },

    /**
    * @eventType    事件类型，例如："click"
    * @eventSrc 事件源
    * @eventHandler 事件处理函数
    * @attachment       附加信息
    */
    addEventListener: function (eventType, eventSrc, eventHandler, attachment) {
        var handler = eventHandler;

        if (attachment) {
            handler = function (eve) {
                eventHandler.call(attachment, eve);
            };
        }
        if (navigator.userAgent.indexOf("MSIE") > 0) {
            eventSrc.attachEvent("on" + eventType, handler);
        } else {  //if(isFirefox=navigator.userAgent.indexOf("Firefox") > 0) {
            eventSrc.addEventListener(eventType, handler, false);
        }
    },

    /**
    * 把处于 overDiv 范围内的 elmID 元素的 visibility 设置为 hidden，使之不可见
    * @elmID 要被设置为不可见的 html 元素标签名，如 "select"
    * @overDiv 只有处于该属性指定的元素范围内的 elmID 才会被隐藏，如 document.getElementById("divId");
    */
    hideElement: function (elmID, overDiv) {
        if (Gti.Common.browser.getBrowser() == Gti.Common.browser.IE6 ||
                Gti.Common.browser.getBrowser() == Gti.Common.browser.IE7) {
            for (i = 0; i < document.all.tags(elmID).length; i++) {
                obj = document.all.tags(elmID)[i];
                if (!obj || !obj.offsetParent) {
                    continue;
                }

                // Find the element's offsetTop and offsetLeft relative to the BODY tag.
                objLeft = obj.offsetLeft;
                objTop = obj.offsetTop;
                objParent = obj.offsetParent;

                while (objParent.tagName.toUpperCase() != "BODY" && objParent.tagName.toUpperCase() != "HTML") {
                    objLeft += objParent.offsetLeft;
                    objTop += objParent.offsetTop;
                    objParent = objParent.offsetParent;
                }

                objHeight = obj.offsetHeight;
                objWidth = obj.offsetWidth;

                if ((overDiv.offsetLeft + overDiv.offsetWidth) <= objLeft);
                else if ((overDiv.offsetTop + overDiv.offsetHeight) <= objTop);
                else if (overDiv.offsetTop >= (objTop + objHeight));
                else if (overDiv.offsetLeft >= (objLeft + objWidth));
                else {
                    obj.style.visibility = "hidden";
                }
            }
        }
    },

    /*
    * unhides <select> and <applet> objects (for IE only), use tagname, ex: "select"
    */
    showElement: function (elmID) {
        if (Gti.Common.browser.getBrowser() == Gti.Common.browser.IE6 ||
                Gti.Common.browser.getBrowser() == Gti.Common.browser.IE7) {
            for (i = 0; i < document.all.tags(elmID).length; i++) {
                obj = document.all.tags(elmID)[i];

                if (!obj || !obj.offsetParent) {
                    continue;
                }

                obj.style.visibility = "";
            }
        }
    }
};

String.prototype.trim = function () {
    return this.replace(/(^\s*)|(\s*$)/g, "");
};

function isIE() { //ie?
    if (window.navigator.userAgent.toLowerCase().indexOf("msie") >= 1)
        return true;
    else
        return false;
}

if (!isIE()) { //firefox innerText define
    HTMLElement.prototype.__defineGetter__("innerText",
function () {
    var anyString = "";
    var childS = this.childNodes;
    for (var i = 0; i < childS.length; i++) {
        if (childS[i].nodeType == 1)
            anyString += childS[i].tagName == "BR" ? "\n" : childS[i].textContent;
        else if (childS[i].nodeType == 3)
            anyString += childS[i].nodeValue;
    }
    return anyString;
}
);
    HTMLElement.prototype.__defineSetter__("innerText",
function (sText) {
    this.textContent = sText;
}
);
}
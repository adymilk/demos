/**
*  This function "patches" an input field (or other element) to use a autocomplete for complete user input automatically
*
*  The "params" is a single object that can have the following properties:
*
*    prop. name                                         | description
*  -------------------------------------------------------------------------------------------------
*       inputElement                                        | 文本域或文本域的 id，自动完成功能将对该文本框进行操作
*       initTip                                                 | 文本框的初始化提示，用户提示用户哪些信息
*       toolTip                                                 | 鼠标悬浮文本框上方时提示用户如何使用该 AutoComplete 的一段文本
*       dataSource                                          | 用于自动完成的数据源，是一个数组，每一个元素是一 JSON 对象
*       trClickCallback                                 | AutoComplete 以 table 显示，当某一行被点击时，AutoComplete 将调用的此函数(如果提供的话)
*       trdbclickCallback                               | AutoComplete 以 table 显示，当某一行被双击时，AutoComplete 将调用的此函数(如果提供的话)
*       inputEnterCallback                          | 在 inputElement 中回车时，AutoComplete 将调用此函数(如果提供的话)
*       divContainerId                                  | AutoComplete 的容器 id(div's id)
*       tableId                                                 | AutoComplete 的容器中，是以 table 形式表现的，该属性代表 table 的 id
*       itemNumberPerPage                               | 显示 AutoComplete 匹配项时，一屏能显示的条数(包括标题头)
*       maxMatchedItemNumberAllowed         | 当匹配到 maxMatchedItemNumberAllowed 属性指定的个数后，不再继续匹配，以减轻客户端 js 的执行速度。若小于 0，则匹配全部
*       displayZoneWidth                                | AutoComplete 展示区的宽度，若不提供该参数，系统会使用 inputElement 的宽度作为展示区的宽度
*       displayZoneHeight                               |   AutoComplete 展示区的高度。当匹配到的个数少于 (itemNumberPerPage - 1)时自适应高度，否则将固定该值指定的高度，且该高度需和 css 文件指定的高度一致
*       tableIdentification                         | 当在页面任何处单击时，AutoComplete 会销毁。呈现匹配项后，在 table 上的某行单击选择，此时也会触发 document.onclick 事件。同时，
在页面中将有很多个table，AutoComplete 的 table 将被赋予一 tableIdentification 参数。若事件源是 table，且 tableIdentification 为
该属性所指定的值时，不销毁 AutoComplete
*       exceedMaxItemNumberPerPageClass | 当匹配项的个数超过 (itemNumberPerPage - 1)时将使用的样式名称
*       inItemNumberPerPageClass          | 当匹配项的个数未超过 (itemNumberPerPage - 1)时将使用的样式名称
*       tableClass                                          | 展现匹配的列表的样式，以 table 形式呈现
*       crossbeddedTrClassPrefix                | 交错行的样式前缀名，最后会以 0，1，2 ... 等结束，交错行的背景色不同
*       titleTrClass                                        | 标题行的样式
*       trSelectedClass                                 | 每单击的行或被选中的行的样式
*       tdClass                                                 | 展现匹配的列表的样式，table 中各个单元格的样式
*       displayMapping                                  | 数据源对于 AutoComplete 而言是透明的，因此需要告知 AutoComplete 在展示区所展示信息映射：
title                           展示区中 table 的标题
alt                             对标题的详细解释，即当鼠标放在 tr 上时的提示信息
jsonattribute           该列对应于数据源的 JSON 属性名
displaypercentage   该列显示要占的百分比，以 "%" 结尾
以上四个属性组合成一个匿名 json 对象，displayMapping 包含多个这样的匿名 json 对象，其个数就是要展现的列数。
*       matchFields                                         | displayMapping 只是要展示的列的映射，其提供的 jsonattribute 不一定作为要匹配的字段。以研究报告为例，数据源是以下 json对象：
{'text':'财达证券', 'content':'27', 'orgCode':'200038219', 'spell':'cdzq'}
在展示区显示的可能只是 text 属性，但若用户输入 "cd" 时，AutoComplete 应该去匹配 "spell" 属性，即要被匹配的属性由 matchFields 指定，
它是一个数组，即可以匹配数据源的多个属性。但是匹配后，高亮显示(目前以红色标识)属性名是由 displayMapping 的 jsonattribute 属性来确定
*       primarykey                                          | 代表数据源的唯一性的 json 属性名
*       textField                                               | AutoComplete 协助用户完成时，把用户选择的数据填入 inputElement 中，至于填数据源的哪个 json 属性名，由该属性指定
*       ignoreUnExactMatchOnCheck               | (true/false) 当用户回车或要检查所选择的项时，此时若匹配零项或匹配多于一项或，则无法知道用户需要哪个值
true    由于用户的选择不明确，不需要提示用户，直接取数据源的第 0 项数据(匹配零项)或取匹配到的第 0 项(匹配到多项)
false   必须让用户提供准确的输入，否则，交由 inputEnterCallback 回调函数处理。此时若未提供该函数，则提示补充该函数
*
*       以上提及的属性并不需要你提供，它们都有默认值。尽管如此，如果你未提供 "inputElement", "dataSource", "displayMapping", "matchFields", "primarykey"
*       or "textField"，AutoComplete 的初始化操作将不能完成。
*/
AutoComplete.setup = function (params) {
    var withDefaultValue = function (paramName, defaultValue) {
        if (typeof params[paramName] == "undefined") {
            params[paramName] = defaultValue;
        }
    };

    withDefaultValue("inputElement", null);
    withDefaultValue("initTip", "");
    withDefaultValue("toolTip", "");
    withDefaultValue("dataSource", null);
    withDefaultValue("trClickCallback", null);
    withDefaultValue("trdbclickCallback", null);
    withDefaultValue("inputEnterCallback", null);
    withDefaultValue("divContainerId", "dd");
    withDefaultValue("tableId", "tt");
    withDefaultValue("itemNumberPerPage", 11);
    withDefaultValue("maxMatchedItemNumberAllowed", 10);
    withDefaultValue("displayZoneWidth", 240);
    withDefaultValue("displayZoneHeight", 210);

    withDefaultValue("tableIdentification", "hello");
    withDefaultValue("exceedMaxItemNumberPerPageClass", "prompt_limit");
    withDefaultValue("inItemNumberPerPageClass", "prompt_common");
    withDefaultValue("tableClass", "table_class");
    withDefaultValue("crossbeddedTrClassPrefix", "cross_tr_class_");
    withDefaultValue("titleTrClass", "title_tr_class");
    withDefaultValue("trSelectedClass", "tr_selected_class");
    withDefaultValue("tdClass", "td_class");
    withDefaultValue("tdTitleClass", "td_title_class");

    withDefaultValue("displayMapping", [
                                { "title": "股票代码", "alt": "股票代码", "jsonattribute": "c", "displaypercentage": "30%" },
                                { "title": "股票名称", "alt": "股票名称", "jsonattribute": "n", "displaypercentage": "40%" },
                                { "title": "股票简称", "alt": "股票简称", "jsonattribute": "p", "displaypercentage": "30%" }
                            ]);
    withDefaultValue("matchFields", ["c", "n", "p"]);
    withDefaultValue("primarykey", "c");
    withDefaultValue("textField", "c");
    withDefaultValue("textName", "n");

    withDefaultValue("ignoreUnExactMatchOnCheck", true);

    var attributes = ["inputElement", "dataSource", "trClickCallback", "trdbclickCallback", "inputEnterCallback"];
    for (var i in attributes) {
        if (typeof params[attributes[i]] == "string") {
            params[attributes[i]] = document.getElementById(params[attributes[i]]);
        }
    }
    if (!params["inputElement"]) {
        alert("被托管的文本框不存在，初始化失败，请检查您的代码。");
        return null;
    }
    if (!params["dataSource"]) {
        alert("所需要的数据源不存在，初始化失败，请检查您的代码。");
        return null;
    }
    if (!params["displayMapping"]) {
        alert("数据源字段到展示区的显示映射未指定。");
        return null;
    }
    if (!params["matchFields"]) {
        alert("用于根据用户输入匹配的数据源字段集合未指定。");
        return null;
    }
    if (!params["primarykey"]) {
        alert("数据源中用于指定唯一性的字段未指定。");
        return null;
    }
    if (!params["textField"]) {
        alert("用户填充文本框的数据源字段未指定。");
        return null;
    }
    if (!params["textName"]) {
        alert("用户填充文本框的数据源字段未指定。");
        return null;
    }

    // displayZoneWidth 若未指定，则以 inputElement 的宽度计算，否则按指定宽度计算
    params.displayZoneWidth = params.displayZoneWidth ? params.displayZoneWidth : params.inputElement.clientWidth;

    var autoCompleteInstance = new AutoComplete(params.inputElement, params.dataSource, params.trClickCallback, params.trdbclickCallback, params.inputEnterCallback);
    autoCompleteInstance.inputClickCallback = params.inputClickCallback;
    if (!params["inputElement"].value) {
        params.inputElement.value = params.initTip;
    }
    params.inputElement.title = params.toolTip;
    autoCompleteInstance.params = params;
    return autoCompleteInstance;
}
/*******************
* Desc  : 公共js库 
* Author: 
* Date  : 2012-03-22
*******************/

/********************原型扩展************************/

/**
* 格式化字符串,支持array和object两种数据源
* <pre>示例：<br>
* String.format("src={0} width:{1};height:{2}",[src, width, height])
* </pre>
* @param {string} str 必选参数，格式化的目标模板。
* @param {Object} arr 必选参数，填充模板的集合。
* @return {格式化后的字符串}
*/
String.prototype.format = function () {
    var str = this;
    var tmp;
    for (var i = 0; i < arguments.length; i++) {
        tmp = String(arguments[i]).replace(/\$/g, "$$$$");
        str = str.replace(eval("/\\{" + i + "\\}/g"), tmp);
    }
    return str;
}
/**
* 清除字符串前后空字符。
* <pre>示例：<br>
* alert("  空格没了。  ".trim());
* </pre>
* @return {除前后空格的字符串}
*/
String.prototype.trim = function () {
    return this.replace(/^\s+|\s+$/g, "");
}
/**
* 字符串转JSON
* @return {Object} josn
*/
String.prototype.toJson = function () {
    if (!this || this == "")
        return null;
    try {
        var obj = (new Function("return " + this))();
        if (obj) return obj;
    } catch (ex) {
        //throw ex;//object not a json string.
    }
    return null;
}


/**
* 对象数组搜索元素
* @param {Array} array 数组元素
* @param {String} key 属性
* @param {String} value 值
* @return {Object} 数组元素
*/
Array.getIndex = function (array, key, value) {
    var temp = array;
    var index = -1;
    for (var i = 0; i < temp.length; i++) {
        if (key == null && temp[i] == value) {
            index = i;
            break;
        }
        if (key != null && temp[i][key] == value) {
            index = i;
            break;
        }
    }
    return index;
}

/**
* 对象数组搜索元素
* @param {Array} array 数组元素
* @param {String} key 属性
* @param {String} value 值
* @return {Object} 数组元素
*/
Array.getObject = function (array, key, value) {
    var index = Array.getIndex(array, key, value);
    if (index == -1)
        return null;
    return array[index];
}

/**
* 对象数组删除元素
* @param {Array} array 数组元素
* @param {String} key 属性
* @param {String} value 值
* @return {Object} 新数组
*/
Array.delObject = function (array, key, value) {
    var index = Array.getIndex(array, key, value);
    if (index == -1)
        return array;
    return array.slice(0, index).concat(array.slice(index + 1, array.length)); ;
}

/**
* 获取指定属性值数组
* @param {String} key 属性
* @return {Object} 指定属性值数组
*/
Array.getArray = function (array, key) {
    var tempArray = [];
    for (var i = 0; i < array.length; i++) {
        tempArray.push(array[i][key]);
    }
    return tempArray;
}



/********************自定义类 ************************/


/**
* Desc  : 工具类
* Author: 
* Date  : 2012-03-22
*/
var Utils = {

    HTMLEncode: function (html) {
        var temp = document.createElement("div");
        (temp.textContent != null) ? (temp.textContent = html) : (temp.innerText = html);
        var output = temp.innerHTML;
        temp = null;
        return output;
    },
    HTMLDecode: function (text) {
        var temp = document.createElement("div");
        temp.innerHTML = text;
        var output = temp.innerText || temp.textContent;
        temp = null;
        return output;
    },
    /**
    * 获取请求地址
    * @param {String} url
    * @param {Boolean} noRand
    * @return {请求地址完整路径}
    */
    getUrl: function (url, norand) {
        url = "http://" + window.location.host + url;
        if (norand)
            return url;
        if (url.indexOf("?") == -1)
            url += "?";
        else
            url += "&";
        url += "rd=" + Math.random();
        return url;
    },
    /**
    * 获取url中参数集合
    * @param {String} url 可空默认为但前页面url
    * @return 参数转换后的键值对象
    */
    getUrlParams: function (url) {
        url = url || location.href;
        if (url.lastIndexOf("?") >= 0)
            url = url.substring(url.lastIndexOf("?") + 1);
        if (url.lastIndexOf("#") == (url.length - 1))
            url = url.substring(0, url.length - 1);

        var obj = {};
        var pairs = url.split('&');
        for (var i = 0; i < pairs.length; i++) {
            var pair = pairs[i].split("=");
            obj[pair[0]] = pair[1];
        }
        return obj;
    },
    /**
    * 获取url中参数 获取单个
    * @param {String} name 参数名
    * @param {String} url 可空默认为但前页面url
    * @return 参数值
    */
    getUrlParam: function (name, url) {
        var data = Utils.getUrlParams(url);
        return data[name];
    },
    /**
    *  Json对象转参数字符串
    *  @param {JsonObject} obj必须是Json对象 或者Json数组
    *  @return 返回键值对参数字符串 如:a=1&b=2
    */
    toParamStr: function (obj) {
        if (!obj) return;
        var parmStr = ""
        for (var str in obj) {
            parmStr += str + "=" + obj[str] + "&";
        }
        if (parmStr.lastIndexOf("&") == parmStr.length - 1)
            parmStr = parmStr.substring(0, parmStr.length - 1);
        return parmStr;
    },
    /**
    *  键值对参数字符串转成对象   a=1&b=2  
    *  @param {String} obj必须是Json对象 或者Json数组
    *  @return 返回json对象 如:{a:1,b:2}
    */
    getParamObj: function (str) {
        var obj = {};
        var pairs = str.split('&');
        for (var i = 0; i < pairs.length; i++) {
            var pair = pairs[i].split("=");
            obj[pair[0]] = pair[1];
        }
        return obj;
    },
    /**
    * 判断字符串是否为nul 或者空
    * @param {String} str
    * @return {Boolean}
    */
    isEmpty: function (str) {
        if (!str || String(str).trim() == "")
            return true;
        return false;
    },
    /**
    * 判断字符串是否为邮箱格式
    * @param {String} str
    * @return {Boolean}
    */
    isEmail: function (str) {
        if (typeof str != "string") return false;
        str = str.trim();
        var reg = new RegExp("^[a-z0-9\.!#$%&'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$", "i");
        var result = reg.test(str);
        return result;
    },
    /**
    * 判断字符串是否为第二代身份证格式
    * @param {String} cid 18为的身份证号码
    * @return Boolean 是否合法
    **/
    isNewIDCardNo: function (sId) {
        var aCity = { 11: "北京", 12: "天津", 13: "河北", 14: "山西", 15: "内蒙古", 21: "辽宁", 22: "吉林", 23: "黑龙江", 31: "上海", 32: "江苏", 33: "浙江", 34: "安徽", 35: "福建", 36: "江西", 37: "山东", 41: "河南", 42: "湖北", 43: "湖南", 44: "广东", 45: "广西", 46: "海南", 50: "重庆", 51: "四川", 52: "贵州", 53: "云南", 54: "西藏", 61: "陕西", 62: "甘肃", 63: "青海", 64: "宁夏", 65: "新疆" }
        try {
            var iSum = 0;
            if (!/^\d{17}(\d|x)$/i.test(sId)) {
                return false;
            }
            sId = sId.replace(/x$/i, "a");
            if (aCity[parseInt(sId.substr(0, 2))] == null) {
                return false;
            }
            sBirthday = sId.substr(6, 4) + "-" + Number(sId.substr(10, 2)) + "-" + Number(sId.substr(12, 2));
            var d = new Date(sBirthday.replace(/-/g, "/"));
            if (sBirthday != (d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + d.getDate())) {
                return false;
            }
            for (var i = 17; i >= 0; i--) {
                iSum += (Math.pow(2, i) % 11) * parseInt(sId.charAt(17 - i), 11);
            }
            if (iSum % 11 != 1) {
                return false;
            }
            return true;
        }
        catch (e) {
            return false;
        }
    },
    /**
    * 判断字符串是否为名称格式
    * @param {String} str
    * @return {Boolean}
    */
    isName: function (str) {
        var reg = new RegExp("^([\u4E00-\uFA29]|[\uE7C7-\uE7F3]|[a-zA-Z0-9])*$");
        return reg.test(str);
    },
    /**
    * 判断文本是否包含特殊字符
    * @param {String} str
    * @return {Boolean}
    */
    hasSpecialChar: function (str) {
        var reg = new RegExp("^([\u4E00-\uFA29]|[\uE7C7-\uE7F3]|[a-zA-Z0-9]|[,.，。])*$");
        return reg.test(str);
    },
    /**
    * 判断字符串是否为手机格式
    * @param {String} str
    * @return {Boolean}
    */
    isMobile: function (str) {
        if (typeof str != "string") return false;
        str = str.trim();
        var reg = new RegExp("^([1][3458][0-9]([0-9]{8})|[0-9]{0})$", "i");
        var result = reg.test(str);
        return result;
    },
    /**
    * 显示提示
    * @params {String} text 显示内容
    * @params {Int} time 显示时间
    * @params {Int} type 提示框类别
    */
    showTip: function (content, success) {

        //$("#divTips .modal-body").html(content);
        //$("#divTips").modal();
        //setTimeout(function () {
        //    $('#myModal').modal('hide')
        //}, 2000);

        var tipClass = (success == false)? "success":"error";
        var tipDiv = $(top.document.body).find("#tipDiv");
        if (tipDiv.length == 0)
            $(top.document.body).append("<div id='tipDiv' style='display:none;'></div>");

        $(top.document.body).find("#tipDiv").css("opacity", "1").show();
        $(top.document.body).find("#tipDiv").html("<span class='" + tipClass + "'>" + content + "</span>");
        $(top.document.body).find("#tipDiv").fadeOut(5000);
    },
    hideDialog:function(){
        top.tb_remove();
    },
    /**
    *  Cookie操作类
    */
    Cookie: {
        /**
        * 取Cookie
        * @params {String} name:Cookie名称
        * @return {String} Cookie值
        */
        getCookie: function (name) {
            var ck = decodeURIComponent(document.cookie); //解码中文Cookie
            var arr = ck.match(new RegExp("(^| )" + name + "=([^;]*)(;|$)"));
            if (arr != null) return unescape(arr[2]); return null;
        },
        /**
        * 存Cookie
        * @params {String} name:Cookie名称
        * @params {String} value:Cookie值
        */
        setCookie: function (name, value) {
            var Days = 30; //此 cookie 将被保存 30 天
            var exp = new Date();    //new Date("December 31, 9998");
            exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000);
            document.cookie = name + "=" + escape(value) + ";path=/;expires=" + exp.toGMTString();
        },
        setCookie: function (name, value, Days) {
            var exp = new Date();    //new Date("December 31, 9998");
            exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000);
            document.cookie = name + "=" + escape(value) + ";path=/;expires=" + exp.toGMTString();
        },
        setCookie: function (name, value, Days, Domain) {
            var exp = new Date();    //new Date("December 31, 9998");
            exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000);
            document.cookie = name + "=" + escape(value) + ";path=/;expires=" + exp.toGMTString() + ";domain=" + Domain;
        },
        /**
        * 删除cookie
        * @params {String} name:Cookie名称
        */
        delCookie: function (name) {
            var exp = new Date();
            exp.setTime(exp.getTime() - 1);
            var cval = Utils.Cookie.getCookie(name);
            if (cval != null) document.cookie = name + "=" + cval + ";expires=" + exp.toGMTString();
        },
        delCookie: function (name, Domain) {
            var exp = new Date();
            exp.setTime(exp.getTime() - 1);
            document.cookie = name + "=0;expires=" + exp.toGMTString() + ";domain=" + Domain;
        }

    },
    /**
    * 将数字转换成货币格式
    * @params {String} num 数字
    * @params {Boolean} split 是否显示逗号分隔
    * @params {int} l 小数个数
    * @return {String} 格式化后的值
    */
    parseMoney: function (num, split, l) {
        if (!num) return 0;
        l = l || 2;
        var result = parseFloat(num).toFixed(l).toString();
        if (!split)
            return result;
        var temp = result.split('.');
        var s1 = temp[0].split('');
        var newStr = "";
        for (var i = 0; i < s1.length; i++) {
            if (i == 0 || i < s1.length % 3) {
                newStr += s1[i];
                continue;
            }
            if ((i - (s1.length % 3)) % 3 == 0)
                newStr += ",";
            newStr += s1[i];
        }

        return newStr + '.' + temp[1].toString();
    }
};


/**
* ajax请求方法
* @param {JsonObject} p 参数名
*/
Utils.ajax = function (p) {
    var params = $.extend({
        url: "",
        type: "POST",
        dataType: "json",
        waitMsg: "正在处理中，请稍后...",
        nottip: true
    }, p);

    if (!params.nottip)
        var tip = $.ligerDialog.waitting(params.waitMsg);
    params.error = function () {
        if (!params.nottip)
            tip.close();
    }
    params.success = function (result) {
        if (!params.nottip)
            tip.close();
        //如果用户未登录，重新刷新主页
        if (result && result.ReturnCode == "-4002") {
            alert("您的登录已经超时，请重新登录!");
            var a = "";
            if (location.href.toLowerCase().indexOf("agent") > -1)
                (top || window).location.href = Utils.getUrl("/agent.html");
            else
                (top || window).location.href = Utils.getUrl("/login.html");

            return;
        }
        //参数包含限制字符
        if (result && result.ReturnCode == "-3001") {
            var msg = Utils.HTMLEncode(result.Message);
            Utils.showTip(("'{0}'包含限制字符").format(msg));
            return;
        }
        if (!p.success)
            return;
        var message = p.success(result);
        if (!message)
            return;
        Utils.showTip(message);
    }

    $.ajax(params);
};

/*数据容器*/
Utils.Data = {};

/**
* 获取用户
*/
Utils.getUser = function () {
    if (Utils.Data.User)
        return Utils.Data.User;
    Utils.ajax({
        url: Utils.getUrl("/Process/LoginHandler.ashx?Action=GetUser"),
        async: false,
        notip: true,
        success: function (r) {
            if (!r.Content) {
                return;
            }
            Utils.Data.User = {
                Id: r.Content.Userid,
                Name: r.Content.UserName
            };
        }
    });
    return Utils.Data.User;
}

/**
* 获取用户ID
*/
Utils.getUserId = function () {
    return Utils.getUser().id;
}

/** 
*  UTC日期字符串转日期
*  @param {String} utcDateStr，UTC格式日期时间字符串
*  @return {Date} 转换为Date型对象
*/
Utils.utcDateParse = function (utcDateStr) {
    var re = new RegExp('\\/Date\\((-?\\d+)(?:[+-]\\d{4})?\\)\\/');
    var r = (utcDateStr || '').match(re);
    return r ? new Date(r[1] * 1) : null;
}

/**
*  日期转字符串
*  @param {String} d 要转换的日期
*  @param {Boolean} l 是否显示时分秒  l=nosecond时不显示秒
*  @return {String} 转换为YYYY-MM-DD格式日期
*/
Utils.dateToString = function (d, l) {
    if (!d) return ""

    if (!d.getFullYear || !d.getMonth || !d.getDay)
        return d.toString();
    var m = String(d.getMonth() + 1);
    var day = String(d.getDate());
    var strTime = d.getFullYear() + "-" + (m.length == 1 ? "0" + m : m) + "-" + (day.length == 1 ? "0" + day : day);
    if (l) {
        var hour = String(d.getHours());
        var minute = String(d.getMinutes());
        var second = String(d.getSeconds());
        strTime += " " + (hour.length == 1 ? "0" + hour : hour) + ":" + (minute.length == 1 ? "0" + minute : minute);
        if (l != "nosecond")
            strTime += ":" + (second.length == 1 ? "0" + second : second)
    }
    return strTime;
}


/*
* UTC格式日期字符串格式化
* @param {String} utcDateStr，UTC格式日期时间字符串
* @param {Boolean} l 是否显示时分秒
* @return {String}  转换为YYYY-MM-DD格式日期
*/
Utils.formatUTCStr = function (utcDateStr, l) {
    return Utils.dateToString(Utils.utcDateParse(utcDateStr), l);
}

/**
*  YYYYMMDD型日期值显示格式化
*  @param {String} yyyymmdd 8字节日期字符串
*  @return {String} 转换为YYYY-MM-DD格式日期
*/
Utils.formatYYYYMMDD = function (yyyymmdd) {
    if (typeof (yyyymmdd) == "string" && yyyymmdd.length == 8) {
        return yyyymmdd.substring(0, 4) + "-" +
               yyyymmdd.substring(4, 2) + "-" +
               yyyymmdd.substring(6, 2);
    }
    return "";
}

/**
* 比较两个日期大小
* @param {String} d1 参数名
* @param {String} d2 参数名
* @param {Boolean} 返回d1是否大于d2
* @return 参数值
*/
Utils.CompareDate = function (d1, d2) {
    return ((new Date(d1.replace(/-/g, "/"))) > (new Date(d2.replace(/-/g, "/"))));
}

/**
* 比较两个日期大小
* @param {String} d1 参数名
* @param {String} d2 参数名
* @param {Boolean} 返回d1-d2 相差天数
* @return 参数值
*/
Utils.GetDiffDays = function (d1, d2) {
    d1 = new Date(d1.replace(/-/g, "/"));
    d2 = new Date(d2.replace(/-/g, "/"));
    //得到时间戳相减 得到以毫秒为单位的差   
    var mmSec = (d2.getTime() - d1.getTime());
    //单位转换为天并返回   
    return (mmSec / 3600000 / 24);
};

/**
*  通过字典进行显示格式化
*  src: 要格式化的值, 必须为字典中的KEY
*  dic: 格式化字典
*  showKey: 是否显示键。 如果显示键的话, 返值将变为<键><空格><值>； 否则只显示<值>
*  返值: 格式化后的字符串
*/
Utils.formatByDic = function (src, dic, showKey) {
    var s = src.toString();
    if (dic && (dic[s] || dic["_" + s])) {
        if (showKey)
            return s.trim() + "\t" + (dic[s] ? dic[s].toString() : dic["_" + s].toString());
        return (dic[s] ? dic[s].toString() : dic["_" + s].toString());
    }
    return "";
}

/*********** 页面公共操作方法 ***********/
Utils.setNumInput = function (obj) {
    var control;
    if (typeof obj == "string")
        control = $("#" + obj);
    else if (typeof obj == "object")
        control = obj;
    control.unbind("keyup").keyup(function (e) {
        this.value = this.value.replace(/[^\d]/g, '');
    }).blur(function (e) {
        this.value = this.value.replace(/[^\d]/g, '');
    });
}

/**
* 阻止DOM元素事件冒泡
* @param {Event} e 事件对象
*/
Utils.stopPropagation = function (e) {
    //如果提供了事件对象，则这是一个非IE浏览器
    if (e && e.stopPropagation)
    //因此它支持W3C的stopPropagation()方法
        e.stopPropagation();
    else
    //否则，我们需要使用IE的方式来取消事件冒泡 
        window.event.cancelBubble = true;
    //如果提供了事件对象，则这是一个非IE浏览器 
    if (e && e.preventDefault)
    //阻止默认浏览器动作(W3C) 
        e.preventDefault();
    else
    //IE中阻止函数器默认动作的方式 
        window.event.returnValue = false;
    return false;
}


Utils.Grid = {
    /*
    * 修改单个单元格内容
    */
    updateCell: function (grid, cell, value) {
        var rowid = $("#" + grid + " input[name=ids]:checked").val();
        var cellIndex = $("#" + grid + " th[d-field=" + cell + "]").index();
        $("#" + grid + " [d-id=" + rowid + "] td").eq(cellIndex).html(value);
    },

    /*
    * 删除单行
    */
    deleteRow: function (grid) {
        var rowid = $("#" + grid + " input[name=ids]:checked").val();
        $("#" + grid + " [d-id=" + rowid + "]").remove();
    },
    
    /*
    * 初始化行事件
    */
    initRow: function () {
        $('tbody > tr').click(function (event) {
            var _This = $(this);
            if (_This.attr('class') == 'summary') return; //汇总行
            _This.addClass("success").siblings().removeClass('success');
        })
    }
}

Utils.MonthList = [201504, 201505, 201506, 201507, 201508, 201509, 201510, 201511, 201512];
Utils.BankList = ['中国工商银行', '中国建设银行', '中国农业银行', '深圳发展银行', '广东发展银行', '中国民生银行', '中国光大银行', '中国邮政储蓄银行', '中国银行',
            '交通银行', '招商银行', '浦发银行', '中信银行', '华夏银行', '平安银行', '兴业银行', '上海银行', '杭州银行', '宁波银行', '其它银行'];

/*
*   日期选择
*/
Utils.DateType = ['今天', '昨天', '本周', '上周', '本月', '上月', '近三月','历史以来'];
Utils.DateSelect = {
    cmbDateType : null,
    beginDate: null,
    endDate: null,
    defaultDateType: "", 

    Init: function (_cmbDateType,_beginDate,_endDate,_defaultDateType) {
        Utils.DateSelect.cmbDateType = document.getElementById(_cmbDateType);
        Utils.DateSelect.beginDate = document.getElementById(_beginDate);
        Utils.DateSelect.endDate = document.getElementById(_endDate);
        Utils.DateSelect.defaultDateType = _defaultDateType;

        for (var i = 0; i < Utils.DateType.length; i++) {
            Utils.DateSelect.cmbDateType.options.add(new Option(Utils.DateType[i], Utils.DateType[i]));
        }
        Utils.DateSelect.cmbSelect(Utils.DateSelect.cmbDateType, Utils.DateSelect.defaultDateType);
        Utils.DateSelect.changeDate();
        Utils.DateSelect.cmbDateType.onchange = Utils.DateSelect.changeDate;
    },

    cmbSelect: function (cmb, str) {
        for (var i = 0; i < cmb.options.length; i++) {
            if (cmb.options[i].value == str) {
                cmb.selectedIndex = i;
                return;
            }
        }
    },

    changeDate: function () {
        if (Utils.DateSelect.cmbDateType.selectedIndex == -1) return;
        var item = Utils.DateSelect.cmbDateType.options[Utils.DateSelect.cmbDateType.selectedIndex].value;

        var d = new Date();
        var year = d.getFullYear().toString();
        var month = d.getMonth() + 1;
        var day = d.getDate();
        month = Utils.DateSelect.doHandleMonth(month);
        day = Utils.DateSelect.doHandleMonth(day);

        if (item == "今天") {
            Utils.DateSelect.beginDate.value = Utils.DateSelect.getDay(d,0);
            Utils.DateSelect.endDate.value = Utils.DateSelect.beginDate.value;
        }
        if (item == "昨天") {
            Utils.DateSelect.beginDate.value = Utils.DateSelect.getDay(d,-1);
            Utils.DateSelect.endDate.value = Utils.DateSelect.beginDate.value;
        }

        if (item == '本周') {
            Utils.DateSelect.beginDate.value = Utils.DateSelect.getWeekStartDate(d);
            Utils.DateSelect.endDate.value = Utils.DateSelect.getWeekEndDate(d);
        }

        if (item == '上周') {
            var str = Utils.DateSelect.getWeekStartDate(d);
            str = str.replace(/-/g, "/");
            Utils.DateSelect.beginDate.value = Utils.DateSelect.getDay(new Date(str), -7);
            Utils.DateSelect.endDate.value = Utils.DateSelect.getDay(new Date(str), -1);
        }

        if (item == "本月") {
            Utils.DateSelect.beginDate.value = year + '-' + month + '-01';
            var d = new Date(year, parseInt(month), 0); //最后一天
            Utils.DateSelect.endDate.value = year + '-' + month + '-' + d.getDate();
        }
        if (item == "上月") {
            if (parseInt(month) - 1 == 0) {
                Utils.DateSelect.beginDate.value = (parseInt(year) - 1) + '-' + '12-01';
                Utils.DateSelect.endDate.value = (parseInt(year) - 1) + '-' + '12-31';
                return;
            }

            Utils.DateSelect.beginDate.value = year + '-' + Utils.DateSelect.doHandleMonth(parseInt(month) - 1) + '-01';
            var d = new Date(year, (parseInt(month) - 1), 0); //最后一天
            Utils.DateSelect.endDate.value = year + '-' + Utils.DateSelect.doHandleMonth(parseInt(month) - 1) + '-' + d.getDate();
        }
        if (item == "近三月") {
            Utils.DateSelect.endDate.value = Utils.DateSelect.getDay(d, 0);
            Utils.DateSelect.beginDate.value = Utils.DateSelect.getDay(d,-90);
        }
        if (item == "历史以来") {
            Utils.DateSelect.beginDate.value = "2000-01-01"
            Utils.DateSelect.endDate.value = Utils.DateSelect.getDay(d, 0);
        }


    },

    getDay: function(date,day){  
        var today = date;
        var targetday_milliseconds=today.getTime() + 1000*60*60*24*day;          
  
        today.setTime(targetday_milliseconds); //注意，这行是关键代码    
         
        var tYear = today.getFullYear();  
        var tMonth = today.getMonth();  
        var tDate = today.getDate();  
        tMonth = Utils.DateSelect.doHandleMonth(tMonth + 1);  
        tDate = Utils.DateSelect.doHandleMonth(tDate);  
        return tYear+"-"+tMonth+"-"+tDate;  
    },

    doHandleMonth:function(month){ 
       var m = month;  
        if(month.toString().length == 1){  
            m = "0" + month;  
        }  
        return m;  
    },

    formatDate :function(date) { 
        var myyear = date.getFullYear(); 
        var mymonth = date.getMonth()+1; 
        var myweekday = date.getDate(); 

        if(mymonth < 10){ 
            mymonth = "0" + mymonth; 
        } 
        if(myweekday < 10){ 
            myweekday = "0" + myweekday; 
        } 
        return (myyear+"-"+mymonth + "-" + myweekday); 
    },
    
    //获得本周的开端日期 
    getWeekStartDate:function (date) { 
        var weekStartDate = new Date(date.getFullYear(), date.getMonth(), date.getDate() - date.getDay());
        return Utils.DateSelect.formatDate(weekStartDate);
    } ,

    //获得本周的停止日期 
    getWeekEndDate :function (date) { 
        var weekEndDate = new Date(date.getFullYear(), date.getMonth(), date.getDate() + (6 - date.getDay()));
        return Utils.DateSelect.formatDate(weekEndDate);
    } 
}

///--------------------------Dictionary-----------------------------
/*创建Dictionary*/
Utils.BuildDictionary = function () {
    var dic = new Object();
    dic.Keys = new Array();      //键数组
    dic.Values = new Array();   //值数组
    dic.length = function () {
        return dic.Keys.length;
    }; //字典长度

    return dic;
}

/*添加 key,value*/
Utils.AddItem = function (key, value, dic) {
    var keyCount = dic.Keys.length;
    if (keyCount > 0) {
        var flag = true;
        for (var i = 0; i < keyCount; i++) {
            if (dic.Keys[i] == key) {
                flag = false;
                break; //如果存在则不添加
            }
        }
        if (flag) {
            dic.Keys.push(key)
            dic.Values.push(value);
        }
    }
    else {
        dic.Keys.push(key)
        dic.Values.push(value);
    }
    return dic;
}
/*更改key,value*/
Utils.UpdateItem = function (key, value, dic) {
    var keyCount = dic.Keys.length;
    if (keyCount > 0) {
        var flag = -1;
        for (var i = 0; i < keyCount; i++) {
            if (dic.Keys[i] == key) {
                flag = i;
                break; //查找相应的index
            }
        }
        if (flag > -1) {
            dic.Keys[flag] = key;
            dic.Values[flag] = value;
        }
        return dic;
    }
    else {
        return dic;
    }
}

/*移除key value*/
Utils.DeleteItem = function (key, dic) {
    var keyCount = dic.Keys.length;
    if (keyCount > 0) {
        var flag = -1;
        for (var i = 0; i < keyCount; i++) {
            if (dic.Keys[i] == key) {
                flag = i;
                break; //查找相应的index
            }
        }
        if (flag > -1) {
            dic.Keys.splice(flag, 1); //移除
            dic.Values.splice(flag, 1);  //移除
        }
        return dic;
    }
    else {
        return dic;
    }
}

/*获取key的索引*/
Utils.GetKeyIndex = function (key, dic) {
    var keyCount = dic.Keys.length;
    var flag = -1;
    if (keyCount > 0) {
        for (var i = 0; i < keyCount; i++) {
            if (dic.Keys[i] == key) {
                flag = i;
                break; //查找相应的index
            }
        }
        return flag;
    }
    else {
        return flag;
    }
}

/*获取key的值*/
Utils.GetKeyValue = function (key, dic) {
    var flag = Utils.GetKeyIndex(key, dic);
    if (flag == -1) return "";
    return dic.Values[flag];
}

/*判断key存在*/
Utils.ExistsKey = function (key, dic) {
    return Utils.GetKeyIndex(key, dic) >= 0;
}

/*获取Key字符串,用符号拼接*/
Utils.GetKeyStr = function (separator, dic) {
    var keyCount = dic.Keys.length;
    if (keyCount > 0) {
        return dic.Keys.join(separator);
    }
    else {
        return '';
    }
}

/*获取Value字符串,用符号拼接*/
Utils.GetValueStr = function (separator, dic) {
    var keyCount = dic.Keys.length;
    if (keyCount > 0) {
        return dic.Values.join(separator);
    }
    else {
        return '';
    }
}
///--------------------------Dictionary-----------------------------

/**
* Desc  : 公共下载方法
* Author: hubin
* Date  : 2012-03-22
*/
Utils.DownLoad = {
    /**
    * 下载
    * @param {String} url 服务器地址
    */
    fnDownLoad: function (url) {
        try {
            var elemIF = document.createElement("iframe");
            elemIF.src = url;
            elemIF.style.display = "none";
            document.body.appendChild(elemIF);
        } catch (e) { }
    }
};
/**
* Desc  : 导出Excel
* Author: hubin
* Date  : 2012-03-22
*/
Utils.ExportExcel = {
    init: function (formid,url) {
        var formdata = $("#" + formid).serializeArray();

        url = url + "?";
        for (var i = 0; i < formdata.length; i++) {
            url = url + formdata[i].name + "=" + formdata[i].value;
            if (i != formdata.length - 1)
                url += "&";
        }

        Utils.DownLoad.fnDownLoad(url);
    }
}

Utils.Mask = {
    Data: {
        DefaultElementId: ".ProcessingDiv",
        BlockElement: null
    },
    
    fnShow: function () {
        top.$(Utils.Mask.Data.DefaultElementId).show();
    },
    fnClose: function () {
        top.$(Utils.Mask.Data.DefaultElementId).hide();
    },

    fnInit: function (blockElement) {
        Utils.Mask.Data.BlockElement = $(blockElement + ' > .portlet > .portlet-body');;
    },
    fnBlockUI: function () {
        //临时注释：top 在内嵌框架中，获取为顶级对象，导致错误
        //top.App.blockUI(Utils.Mask.Data.BlockElement);
    },
    fnUnBlockUI: function () {
        //临时注释：top 在内嵌框架中，获取为顶级对象，导致错误
        //top.App.unblockUI(Utils.Mask.Data.BlockElement);
        if ($.fn.uniform)
            $("input.checkboxes").uniform();
        Utils.Grid.initRow();
    }

}
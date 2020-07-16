var Class = {
    create: function () {
        return function () {
            this.initialize.apply(this, arguments);
        }
    }
}
var Site_FC = Class.create();
Site_FC.prototype =
{
    ErrorMessage: "",
    initialize: function () {
        this.ErrorMessage = "";
    },
    getErrorMessage: function () {
        return ErrorMessage;
    },
    checkValue: function (parControlID, parSpanID, parRegular, parErrorMessage) {
        //var controlTemp = $("#" + parControlID);
        var controlTemp = document.getElementById(parControlID);
        if (controlTemp == null) {//如果变量参数id为空, 直接返回;
            alert("没有ID为" + parControlID.toString() + "的对象");
            return false;
        }

        var objSpan = $("#" + parSpanID);//对应的第一个输入框姓名的下面提示字段的id;
        if (objSpan == null) {//如果变量参数id为空, 直接返回;
            alert("没有ID为" + parSpanID.toString() + "的SPAN对象");
            return false;
        }

        if (parRegular == null) {
            alert("正则表达式不能为空");
            return false;
        }
        var patrn;
        try
        { patrn = eval(parRegular); }
        catch (err)
        { alert("正则表达式有误"); return false; }

        //var rtnValue = patrn.exec($.trim(controlTemp.val()));
        //清空空格
        controlTemp.value = controlTemp.value.replace(/\s/gi, "");
        var rtnValue = patrn.exec(controlTemp.value);

        if (rtnValue) {//姓名和电话号码输入框下面的对勾图标设置;
            objSpan.html("<img src=\"//mat1.gtimg.com/house_wuhan/work/emmaliu/whbpoly/yes.gif\" width=\"19\" height=\"16\" align=\"absmiddle\" />");
            return true;
        }
        else {
            objSpan.html(parErrorMessage);
            return false;
        }
    },
    checkRadio: function (radioname, spanid, errtxt) {
        var objSpan = $("#" + spanid);

        var radiovalue = $("input[name='" + radioname + "']:radio:checked").length;
        if (radiovalue == 0) {
            objSpan.html(errtxt);
            return false;
        }
        else {
            objSpan.html("<img src=\"/Images/yes.gif\" width=\"19\" height=\"16\" align=\"absmiddle\" />");
            return true;
        }
    },
    checkCheckBox: function (parName, spanID, errTxt) {
        var objSpan = $("#" + spanID);
        var checkboxValue = $("input[name='" + parName + "']:checkbox:checked").length;
        if (checkboxValue == 0) {
            objSpan.html(errTxt);
            return false;
        }
        else {
            objSpan.html("<img src=\"/Images/yes.gif\" width=\"19\" height=\"16\" align=\"absmiddle\" />");
            return true;
        }
    },
    checkLength: function (parControlID, spanID, errTxt, minL, maxL) {
        var objSpan = $("#" + spanID);
        var length=document.getElementById(parControlID).value.length;
        if (length < minL || length > maxL) {
            objSpan.html(errTxt);
            return false;
        }
        else {
            objSpan.html("<img src=\"/Images/yes.gif\" width=\"19\" height=\"16\" align=\"absmiddle\" />");
            return true;
        }
    },
    EmailRegular: '/^[\\w-]+(\\.[\\w-]+)*@[\\w-]+(\\.[\\w-]+)+$/',
    FloatRegular: '/^\\d+(\\.\\d+)?$/',
    IntRegular: '/^\\d+$/',
    EmptyRegular: '/^.+$/',
    StrFormatRegular: '/^[^`~!@#$%^&*()+=\\\\]{1,50}$/',
    PhoneRegular: '/^((0\\d{2,3})?\\d{7,8})$|1[3,5,8]{1}[0-9]{9}$/',
    MobileRegular: '/^1[3,4,5,7,8]{1}[0-9]{9}$/',
    TelRegular: '/^((\\d{3,4})\\d{7,8})$/',
    SerialRegular: '/^[0-9]{6}[1,2]{1}[0-9]{5}$/',
    IdentRegular: '/(^\\d{15}$)|(^\\d{17}([0-9]|X)$)/',
    ChinaNameRegular: '/^[\\u4e00-\\u9fa5]{2,6}$/',
    //UserNameRegular: '/^[0-9a-zA-z\_\-]{6,}$/',
    ChineseRegular: '/^[\\u4e00-\\u9fa5]{1,20}$/',
    UserNameRegular: '/^[\\u4e00-\\u9fa5]{1,7}$|^[0-9a-zA-z\_\-]{1,14}$/',
    PostRegular: '/^[0-9]{6}$/'
};

/*身份证详细验证*/
function checkIDCardNumber(idCard, parSpanID) {
    var objSpan = document.getElementById(parSpanID);
    var Errors = new Array("验证通过!", "身份证号码位数不对!", "身份证号码出生日期超出范围或含有非法字符!", "身份证号码校验错误!", "身份证地区非法!");
    var area = { 11: "北京", 12: "天津", 13: "河北", 14: "山西", 15: "内蒙古", 21: "辽宁", 22: "吉林", 23: "黑龙江", 31: "上海", 32: "江苏", 33: "浙江", 34: "安徽", 35: "福建", 36: "江西", 37: "山东", 41: "河南", 42: "湖北", 43: "湖南", 44: "广东", 45: "广西", 46: "海南", 50: "重庆", 51: "四川", 52: "贵州", 53: "云南", 54: "西藏", 61: "陕西", 62: "甘肃", 63: "青海", 64: "宁夏", 65: "新疆", 71: "台湾", 81: "香港", 82: "澳门", 91: "国外" };

    var Y, JYM;
    var S, M;
    var idCardArray = new Array();
    idCardArray = idCard.split("");
    //地区检验
    if (area[parseInt(idCard.substr(0, 2))] == null) {
        objSpan.innerHTML = Errors[4];
        return false;
    }
    //身份号码位数及格式检验
    switch (idCard.length) {
        case 15:
            if ((parseInt(idCard.substr(6, 2)) + 1900) % 4 == 0 || ((parseInt(idCard.substr(6, 2)) + 1900) % 100 == 0 && (parseInt(idCard.substr(6, 2)) + 1900) % 4 == 0)) {
                //测试出生日期的合法性
                ereg = /^[1-9][0-9]{5}[0-9]{2}((01|03|05|07|08|10|12)(0[1-9]|[1-2][0-9]|3[0-1])|(04|06|09|11)(0[1-9]|[1-2][0-9]|30)|02(0[1-9]|[1-2][0-9]))[0-9]{3}$/;
            }
            else {
                //测试出生日期的合法性
                ereg = /^[1-9][0-9]{5}[0-9]{2}((01|03|05|07|08|10|12)(0[1-9]|[1-2][0-9]|3[0-1])|(04|06|09|11)(0[1-9]|[1-2][0-9]|30)|02(0[1-9]|1[0-9]|2[0-8]))[0-9]{3}$/;
            }
            if (ereg.test(idCard)) {
                objSpan.innerHTML = "<img src=\"/Images/yes.gif\" width=\"19\" height=\"16\" align=\"absmiddle\" />";
                return true;
            }
            else {
                objSpan.innerHTML = Errors[2];
                return false;
            }
            break;
        case 18:
            //18位身份号码检测
            //出生日期的合法性检查 
            //闰年月日:((01|03|05|07|08|10|12)(0[1-9]|[1-2][0-9]|3[0-1])|(04|06|09|11)(0[1-9]|[1-2][0-9]|30)|02(0[1-9]|[1-2][0-9]))
            //平年月日:((01|03|05|07|08|10|12)(0[1-9]|[1-2][0-9]|3[0-1])|(04|06|09|11)(0[1-9]|[1-2][0-9]|30)|02(0[1-9]|1[0-9]|2[0-8]))
            if (parseInt(idCard.substr(6, 4)) % 4 == 0 || (parseInt(idCard.substr(6, 4)) % 100 == 0 && parseInt(idCard.substr(6, 4)) % 4 == 0)) {
                ereg = /^[1-9][0-9]{5}(19|20)[0-9]{2}((01|03|05|07|08|10|12)(0[1-9]|[1-2][0-9]|3[0-1])|(04|06|09|11)(0[1-9]|[1-2][0-9]|30)|02(0[1-9]|[1-2][0-9]))[0-9]{3}[0-9Xx]$/; //闰年出生日期的合法性正则表达式
            }
            else {
                ereg = /^[1-9][0-9]{5}(19|20)[0-9]{2}((01|03|05|07|08|10|12)(0[1-9]|[1-2][0-9]|3[0-1])|(04|06|09|11)(0[1-9]|[1-2][0-9]|30)|02(0[1-9]|1[0-9]|2[0-8]))[0-9]{3}[0-9Xx]$/; //平年出生日期的合法性正则表达式
            }
            if (ereg.test(idCard)) {//测试出生日期的合法性
                //计算校验位
                S = (parseInt(idCardArray[0]) + parseInt(idCardArray[10])) * 7 + (parseInt(idCardArray[1]) + parseInt(idCardArray[11])) * 9 + (parseInt(idCardArray[2]) + parseInt(idCardArray[12])) * 10 + (parseInt(idCardArray[3]) + parseInt(idCardArray[13])) * 5 + (parseInt(idCardArray[4]) + parseInt(idCardArray[14])) * 8 + (parseInt(idCardArray[5]) + parseInt(idCardArray[15])) * 4 + (parseInt(idCardArray[6]) + parseInt(idCardArray[16])) * 2 + parseInt(idCardArray[7]) * 1 + parseInt(idCardArray[8]) * 6 + parseInt(idCardArray[9]) * 3;
                Y = S % 11;
                M = "F";
                JYM = "10X98765432";
                M = JYM.substr(Y, 1); //判断校验位
                if (M == idCardArray[17]) {
                    objSpan.innerHTML = "<img src=\"/Images/yes.gif\" width=\"19\" height=\"16\" align=\"absmiddle\" />";
                    return true; //检测ID的校验位
                }
                else {
                    objSpan.innerHTML = Errors[3];
                    return false;
                }
            }
            else {
                objSpan.innerHTML = Errors[2];
                return false;
            }
            break;
        default:
            objSpan.innerHTML = Errors[1];
            return false;
            break;
    }
}/*  |xGv00|9bd831d4b44683fc8c268bb4d3c0d522 */
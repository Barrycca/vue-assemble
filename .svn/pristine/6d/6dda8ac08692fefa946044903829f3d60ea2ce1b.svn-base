exports.install = function (Vue, options) {
  Vue.prototype.getCookie = function (objName) {
    var arrStr = document.cookie.split('; ');
    for (var i = 0; i < arrStr.length; i++) {
      var temp = arrStr[i].split('=');
      if (temp[0] == objName) {
        if (temp.length > 2) {
          return decodeURIComponent(temp[2]);
        } else {
          return decodeURIComponent(temp[1]);
        }
      }
    }
    return '';
  };
  Vue.prototype.getWbCookie = function (name) {
    var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
    return (arr = document.cookie.match(reg)) ? unescape(arr[2]) : null;
  };
  Vue.prototype.setCookie = function (name,value) {
    var Days = 30;
    var exp = new Date();
    exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000);
    document.cookie = name + "=" + escape(value) + ";expires=" + exp.toGMTString(); 
  };
};

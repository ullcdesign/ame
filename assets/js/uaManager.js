
var ua = {};

if (navigator.userAgent.indexOf('iPhone') > 0 || navigator.userAgent.indexOf('Android') > 0 && navigator.userAgent.indexOf('Mobile') > 0) {
   ua.__device = "phone";
} else if (navigator.userAgent.indexOf('iPad') > 0 || navigator.userAgent.indexOf('Android') > 0) {
   ua.__device = "tablet";
} else {
   ua.__device = "deskTop";
}

ua.isTablet = (ua.__device == "tablet");
ua.isPhone = (ua.__device == "phone");
ua.isDeskTop = (ua.__device == "deskTop");



if(window.navigator.userAgent.toLowerCase().indexOf('trident') != -1) ua.isIE11 = true;
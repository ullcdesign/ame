var $window = $(window);

$window.on("resize",onResize);
onResize();
function onResize(){

	if(ua.isTablet){
			$("#Viewport").attr("content","width=1400,maximum-scale=1,user-scalable=no,shrink-to-fit=no");
	}
}




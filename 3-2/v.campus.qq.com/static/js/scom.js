function styleApril () {
	var styleUrlApril = '.april4 {-webkit-filter: grayscale(100%);-moz-filter: grayscale(100%);-ms-filter: grayscale(100%);-o-filter: grayscale(100%);filter: grayscale(100%);}';
	if (document.all) {
		window.style = styleUrlApril;
		document.createStyleSheet("javascript:style");
	} else {
		var style = document.createElement('style');
		style.type = 'text/css';
		style.innerHTML = styleUrlApril;
		document.getElementsByTagName('head').item(0).appendChild(style);
	} 
}
try {
	if (!/campus\.luohuedu\.net/.test(location.host)) {
		var aprilDateObj = new Date();
		var aprilDateStr = ''
			+ aprilDateObj.getFullYear()
			+ aprilDateObj.getMonth()
			+ aprilDateObj.getDate();
		// 2020 04 04 才显示灰色， 即是：202034
		if (aprilDateStr == '202034') {
			styleApril();
			setTimeout(() => {
				document.getElementsByTagName('html')[0].classList.add('april4');
			}, 10);
		}
	}
	
} catch (ev) { }
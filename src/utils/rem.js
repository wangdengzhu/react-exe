/**
 * 使用css rem单位适配各种手机屏幕
 */
;
(function(doc, win) {
	const docElem = doc.documentElement;
	const resizeEvt = 'orientationchange'  in  window  ?  'orientationchange'  :  'resize';

	const SCREEN_DESIGN_WIDTH = 750; //该值根据设计图大小设置

	if (typeof doc.addEventListener !== 'function') {
		return;
	}
	//屏幕旋转时重新计算
	win.addEventListener(resizeEvt, recalc, !1);          
	doc.addEventListener('DOMContentLoaded', recalc, !1);   

	function recalc() {
		const clientWidth = docElem.clientWidth;
		if (typeof clientWidth !== 'number') {
			return;
		}
		docElem.style.fontSize = 100 * (clientWidth / SCREEN_DESIGN_WIDTH) + 'px';
	}

}(document, window));


;
(function() {
	if (window.devicePixelRatio && devicePixelRatio >= 2) {
		var testElem = document.createElement('div');
		testElem.style.border = '.5px solid transparent';
		document.body.appendChild(testElem);
		if (testElem.offsetHeight === 1) {
			document.querySelector('html').classList.add('hairlines');
		}
		document.body.removeChild(testElem);
	}
})();
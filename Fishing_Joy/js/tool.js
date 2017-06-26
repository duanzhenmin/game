/**
 * Created by zhenmin on 2017/6/25.
 */
function loadImg(source, callback) {
	var sourceItem = [],
		count = 0,
		imgArr = [];
	var imgSources = {};
	for (var key in source) {
		sourceItem = source[key];
		for (var i = 0; i < sourceItem.length; i++) {
			var img = new Image();
			img.src = "img/" + sourceItem[i] + ".png";
			count++;
			(function (img, name) {
				img.onload = function () {
					imgArr.push(img);
					imgSources[name] = img;
					if (imgArr.length == count) {
						callback && callback(imgSources);
					}
				}
			})(img, sourceItem[i]);
		}
	}
}
// 角度转弧度
function d2r(degree) {
	var PI = Math.PI;
	if (!degree) {
		return degree;
	} else {
		return degree * PI / 180;
	}
}
// 随机数
function random(n, m) {
	return parseInt(Math.random() * (m - n) + n);
}
// 获取元素的绝对位置
function getPositionAbsolute(ele){
	var offsetPosition = {
		left:0,
		top:0
	}
	if(!ele){
		return offsetPosition;
	}
	var parentOffsetPosition = getPositionAbsolute(ele.offsetParent);
	offsetPosition.left += ele.offsetLeft + parentOffsetPosition.left;
	offsetPosition.top += ele.offsetTop + parentOffsetPosition.top;
	return offsetPosition;
}
//计算直线距离
function computeDis(x1,y1,w1,h1,x2,y2,w2,h2){
	var c1X = x1+w1/2,
		c1Y = y1+h1/2,
		c2X = x2+w2/2,
		c2Y = y2+h2/2,
		disX = c1X - c2X,
		disY = c1Y - c2Y;
	return Math.sqrt(Math.pow(disX,2)+Math.pow(disY,2));
}

/**
 * 判断鼠标是否在所选范围内
 * @param e             -->事件对象
 * @param canvas         -->canvas对象
 * @param opts {        -->参数
 *         startX:"",
 *         startY:"",
 *         extendX:"",
 *         extendY:"",
 *         isCircle:"",
 *         circleCenterX:"",
 *         circleCenterY:"",
 *         circleRadius:""
 *     }
 * @returns {boolean}
 */
function pointInPath(e, canvas, opts) {
	if (!e || !canvas || !opts) {
		console.log("缺少参数！");
		return false;
	}
	var Event = e || event;
	// canvas信息
	var cWidth = canvas.width || parseInt(window.getComputedStyle(canvas, null).width),
		cHeight = canvas.height || parseInt(window.getComputedStyle(canvas, null).height),
		cOffsetLeft = canvas.getBoundingClientRect().left,
		cOffsetTop = canvas.getBoundingClientRect().top,
		scaleWidth = cWidth / canvas.getBoundingClientRect().width,
		scaleHeight = cHeight / canvas.getBoundingClientRect().height;
	// 鼠标相对于canvas左上角位置
	var mousePositionX = (Event.pageX - cOffsetLeft) * scaleWidth,
		mousePositionY = (Event.pageY - cOffsetTop) * scaleHeight;
	// 限制范围
	if (opts.isCircle) {// 如果是圆形
		var circleCenterX = opts.circleCenterX,
			circleCenterY = opts.circleCenterY,
			circleRadius = opts.circleRadius;
		var disX = mousePositionX - circleCenterX,
			disY = mousePositionY - circleCenterY,
			disLine = Math.sqrt(Math.pow(disX, 2) + Math.pow(disY, 2));
		if (disLine <= circleRadius) {
			return true;
		} else {
			return false;
		}
	} else {// 如果是矩形
		var minX = opts.startX,
			maxX = opts.extendX + minX,
			minY = opts.startY,
			maxY = opts.extendY + minY,
			temp = null;
		if (minX > maxX) {
			temp = minX;
			minX = maxX;
			maxX = temp;
		}
		if (minY > maxY) {
			temp = minY;
			minY = maxY;
			maxY = temp;
		}
		if (
			mousePositionX <= minX ||
			mousePositionX >= maxX ||
			mousePositionY <= minY ||
			mousePositionY >= maxY
		) {
			return false;
		} else {
			return true;
		}
	}
}

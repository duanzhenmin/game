/**
 * Created by zhenmin on 2017/6/25.
 */
var WEB_SIZE = [
	null,
	{x: 332, y: 372, w: 86, h: 86},
	{x: 14, y: 413, w: 108, h: 108},
	{x: 177, y: 370, w: 125, h: 125},
	{x: 253, y: 197, w: 146, h: 146},
	{x: 1, y: 245, w: 154, h: 154},
	{x: 242, y: 0, w: 180, h: 180},
	{x: 21, y: 22, w: 200, h: 200}
];
var PI = Math.PI;
function Web(ctx, img ,fish, type) {
	this.type = type;
	this.zoom = 1.8;
	this.img = img;
	this.w = WEB_SIZE[type].w;
	this.h = WEB_SIZE[type].h;
	this.positionX = fish.speedX>0?fish.positionX + fish.w:fish.positionX;
	this.positionY = fish.positionY + fish.h/2;

	this.draw(ctx);
}
Web.prototype.draw = function (ctx) {
	var _t = this;
	ctx.save();
	ctx.beginPath();
	ctx.drawImage(_t.img, WEB_SIZE[_t.type].x, WEB_SIZE[_t.type].y, WEB_SIZE[_t.type].w, WEB_SIZE[_t.type].h, _t.positionX - (WEB_SIZE[_t.type].w * _t.zoom)/2, _t.positionY - (WEB_SIZE[_t.type].h * _t.zoom)/2, WEB_SIZE[_t.type].w * _t.zoom, WEB_SIZE[_t.type].h * _t.zoom);
	ctx.closePath();
	ctx.restore();
	_t.move();
}
Web.prototype.move = function () {
	this.zoom -= 0.2;
}
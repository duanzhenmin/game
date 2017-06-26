/**
 * Created by zhenmin on 2017/6/25.
 */
var BULLET_SIZE=[
	null,
	{x: 86, y: 0, w: 24, h: 26},
	{x: 62, y: 0, w: 25, h: 29},
	{x: 30, y: 0, w: 31, h: 35},
	{x: 32, y: 35, w: 27, h: 31},
	{x: 30, y: 82, w: 29, h: 33},
	{x: 0, y: 82, w: 30, h: 34},
	{x: 0, y: 0, w: 30, h: 44}
];
var PI = Math.PI;
function Bullet(ctx, opts) {
	this.opts = opts;
	this.w = BULLET_SIZE[opts.type].w;
	this.h = BULLET_SIZE[opts.type].h;
	this.positionX = 442;
	this.positionY = 566;
	this.speed = 40;
	this.angle = opts.angle;
	this.speedX = this.speed*Math.cos(this.angle);
	this.speedY = this.speed*Math.sin(this.angle);

	this.draw(ctx, opts);
}
Bullet.prototype.draw = function (ctx, opts) {
	var _t = this;
	ctx.save();
	ctx.beginPath();
	ctx.translate(_t.positionX, _t.positionY);
	ctx.rotate(_t.angle+PI/2);
	ctx.drawImage(opts.img, BULLET_SIZE[opts.type].x, BULLET_SIZE[opts.type].y, BULLET_SIZE[opts.type].w, BULLET_SIZE[opts.type].h, -BULLET_SIZE[opts.type].w/2, -BULLET_SIZE[opts.type].h/2, BULLET_SIZE[opts.type].w, BULLET_SIZE[opts.type].h);
	ctx.closePath();
	ctx.restore();
	this.move(ctx, opts);
}
Bullet.prototype.move = function (ctx, opts) {
	var _t = this;
	_t.positionX += _t.speedX;
	_t.positionY += _t.speedY;
	if (_t.positionY > 600 || _t.positionY < 0-BULLET_SIZE[opts.type].h || _t.positionX < 0-BULLET_SIZE[opts.type].w || _t.positionX > 800) {

	}
}
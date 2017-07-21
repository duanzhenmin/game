/**
 * Created by zhenmin on 2017/6/25.
 */
var FISH_SIZE = [
	null,
	{w: 55, h: 37, collR: 17},
	{w: 78, h: 64, collR: 24},
	{w: 72, h: 56, collR: 20},
	{w: 77, h: 59, collR: 22},
	{w: 107, h: 122, collR: 29}
];
var PI = Math.PI;
function Fish(ctx, opts) {
	this.opts = opts;
	this.current = 0;
	this.w = FISH_SIZE[opts.type].w;
	this.h = FISH_SIZE[opts.type].h;
	this.positionX = 800 - FISH_SIZE[opts.type].w;
	this.positionY = 300 - FISH_SIZE[opts.type].h / 2;
	this.speed = random(5, 10);
	this.angle = d2r(random(0,360));
	this.speedX = this.speed*Math.cos(this.angle);
	this.speedY = this.speed*Math.sin(this.angle);
	this.positionX = this.speedX>=0 ? 0- FISH_SIZE[opts.type].w : 800;

	this.draw(ctx, opts);
}
Fish.prototype.draw = function (ctx, opts) {
	var _t = this;
	ctx.save();
	ctx.beginPath();
	ctx.translate(_t.positionX + FISH_SIZE[opts.type].w / 2, _t.positionY);
	ctx.rotate(_t.angle);
	if(this.speedX<0){
		ctx.scale(1,-1);
	}
	ctx.drawImage(opts.img, 0, FISH_SIZE[opts.type].h * _t.current, FISH_SIZE[opts.type].w, FISH_SIZE[opts.type].h, 0, 0, FISH_SIZE[opts.type].w, FISH_SIZE[opts.type].h);
	ctx.closePath();
	ctx.restore();
	this.move(ctx, opts);
}
Fish.prototype.move = function (ctx, opts) {
	var _t = this;
	_t.current++;
	if (_t.current >= 4) {
		_t.current = 0;
	}
	_t.positionX += _t.speedX;
	_t.positionY += _t.speedY;
}
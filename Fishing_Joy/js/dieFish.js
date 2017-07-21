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
function DieFish(ctx, fish) {
	fish = fish[0];
	this.opts = fish.opts;
	this.current = 4;
	this.num = 0;
	this.positionX =fish.positionX;
	this.positionY =fish.positionY;
	this.speedX = fish.speedX;
	this.angle = fish.angle;

	this.draw(ctx, this.opts);
}
DieFish.prototype.draw = function (ctx, opts) {
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
DieFish.prototype.move = function (ctx, opts) {
	var _t = this;
	_t.current++;
	_t.num++;
	if (_t.current >= 8) {
		_t.current = 4;
	}
}
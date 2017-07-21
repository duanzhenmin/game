/**
 * Created by zhenmin on 2017/6/25.
 */

function EnergyBar(ctx, opts) {
	this.current = 0;
	this.img = opts.img;
	this.w = 212;
	this.h = 18;
	this.positionX = 558;
	this.positionY = 577;
	this.totalPoints = 1000000;

	this.draw(ctx);
}
EnergyBar.prototype.draw = function (ctx, scoreNum) {
	var _t = this;
	ctx.save();
	ctx.beginPath();
	ctx.drawImage(_t.img, 0, 104, _t.w * scoreNum/_t.totalPoints, _t.h, _t.positionX, _t.positionY,  _t.w * scoreNum/_t.totalPoints, _t.h);
	ctx.closePath();
	ctx.restore();
}
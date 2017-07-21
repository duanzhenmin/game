/**
 * Created by zhenmin on 2017/6/25.
 */

function Score(ctx, opts) {
	this.current = 0;
	this.img = opts.img;
	this.score = parseInt(opts.score);
	this.w = 20;
	this.h = 24;
	this.positionX = 34;
	this.positionX2 = 57;
	this.positionX3 = 80;
	this.positionX4 = 103;
	this.positionX5 = 126;
	this.positionX6 = 149;
	this.positionY = 575;

	this.draw(ctx, this.score);
}
Score.prototype.draw = function (ctx, score) {
	var _t = this;
	ctx.save();
	ctx.beginPath();
	ctx.drawImage(_t.img, 0, _t.h * (9 - parseInt(score/100000)%10), _t.w, _t.h, _t.positionX, _t.positionY, _t.w, _t.h);
	ctx.drawImage(_t.img, 0, _t.h * (9 - parseInt(score/10000)%10), _t.w, _t.h, _t.positionX2, _t.positionY, _t.w, _t.h);
	ctx.drawImage(_t.img, 0, _t.h * (9 - parseInt(score/1000)%10), _t.w, _t.h, _t.positionX3, _t.positionY, _t.w, _t.h);
	ctx.drawImage(_t.img, 0, _t.h * (9 - parseInt(score/100)%10), _t.w, _t.h, _t.positionX4, _t.positionY, _t.w, _t.h);
	ctx.drawImage(_t.img, 0, _t.h * (9 - parseInt(score/10)%10), _t.w, _t.h, _t.positionX5, _t.positionY, _t.w, _t.h);
	ctx.drawImage(_t.img, 0, _t.h * (9 - parseInt(score)%10), _t.w, _t.h, _t.positionX6, _t.positionY, _t.w, _t.h);
	ctx.closePath();
	ctx.restore();
}
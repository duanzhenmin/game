/**
 * Created by zhenmin on 2017/6/25.
 */
var CANNON_INFO = {
	"1": {
		w: 74,
		h: 74,
		x: -37,
		y: -37,
		px: 442,
		py: 566
	},
	"2": {
		w: 74,
		h: 76,
		x: -37,
		y: -38,
		px: 442,
		py: 566
	},
	"3": {
		w: 74,
		h: 76,
		x: -37,
		y: -38,
		px: 442,
		py: 566
	},
	"4": {
		w: 74,
		h: 83,
		x: -37,
		y: -42,
		px: 442,
		py: 566
	},
	"5": {
		w: 74,
		h: 85,
		x: -37,
		y: -43,
		px: 442,
		py: 566
	},
	"6": {
		w: 74,
		h: 90,
		x: -37,
		y: -45,
		px: 442,
		py: 566
	},
	"7": {
		w: 74,
		h: 94,
		x: -37,
		y: -47,
		px: 442,
		py: 566
	}
}
function Cannon(ctx, opts) {
	this.opts = opts;
	this.draw(ctx, opts);
}
Cannon.prototype.draw = function(ctx, opts){
	ctx.save();
	ctx.beginPath();
	ctx.translate(CANNON_INFO[opts.type].px, CANNON_INFO[opts.type].py);
	ctx.rotate(opts.angle);
	ctx.drawImage(opts.img, 0, 0, CANNON_INFO[opts.type].w, CANNON_INFO[opts.type].h, CANNON_INFO[opts.type].x, CANNON_INFO[opts.type].y, CANNON_INFO[opts.type].w, CANNON_INFO[opts.type].h);
	ctx.closePath();
	ctx.restore();
}
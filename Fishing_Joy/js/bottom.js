/**
 * Created by zhenmin on 2017/6/25.
 */
function Bottom(ctx,opts){
	this.opts = opts;
	this.draw(ctx,opts);
}
Bottom.prototype.draw=function(ctx,opts){
	ctx.save();
	ctx.beginPath();
	ctx.drawImage(opts.img,opts.sx,opts.sy,opts.swidth,opts.sheight,opts.x,opts.y,opts.width,opts.height);
	ctx.closePath();
	ctx.restore();
}

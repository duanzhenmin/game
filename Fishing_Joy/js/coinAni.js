/**
 * Created by zhenmin on 2017/6/25.
 */

function CoinAni(ctx, img, web) {
	this.type = web.type;
	this.current = 0;
	this.img = img;
	this.w = 60;
	this.h = 60;
	this.speed = 15;
	this.currentSpeed = 0;
	this.positionX = web.positionX;
	this.positionY = web.positionY<30?web.positionY:web.positionY - 30;

	this.speedX = (65 - this.positionX)/this.speed;
	this.speedY = (560 - this.positionY)/this.speed;

	this.draw(ctx);
}
CoinAni.prototype.draw = function (ctx) {
	var _t = this;
	ctx.save();
	ctx.beginPath();
	ctx.drawImage(_t.img, 0, _t.current * _t.h , _t.w , _t.h, _t.positionX + (_t.currentSpeed * _t.speedX), _t.positionY + (_t.currentSpeed * _t.speedY), _t.w, _t.h);
	ctx.closePath();
	ctx.restore();
	_t.move();
}
CoinAni.prototype.move = function () {
	this.current +=2;
	this.currentSpeed++;
	if(this.current>=10){
		this.current = 0;
	}
}
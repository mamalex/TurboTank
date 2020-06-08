var canvas = document.getElementById('canvas');
ctx = canvas.getContext('2d');

var tank = {
	pic: new Image(50,50),
	zoom: 1,
	x: 200,
	y: 200,
	speed: 0
}

var keyPressed = {
	ArrowLeft: false,
	ArrowRight: false,
	ArrowUp: false,
	ArrowDown: false,
};
tank.pic.src = "tank.png";

tank.pic.onload = function(){
	ctx.drawImage(tank.pic,tank.x,tank.y, 40, 40);
}

document.addEventListener('keydown', function(e) {
	//console.log(e.code);
	keyPressed[e.code] = true;
});
document.addEventListener('keyup', function(e) {
	keyPressed[e.code] = false;	
});

setInterval(function(){
	//console.log(keyPressed);
	if(keyPressed['ArrowLeft']) {
		tank.speed -= 1;
		tank.rotate = 1;
	}

	if(keyPressed['ArrowRight']){
		tank.speed += 1;
		tank.rotate = -1;
	}
	if(keyPressed['ArrowUp'] && tank.y > 10){
		tank.y -= 10;;
		tank.rotate = -2;
	}

	if(keyPressed['ArrowDown'] && tank.y < 600 - 30){
		tank.y += 10;
		tank.rotate = 2;
	}
	
	if(tank.x > 1750) tank.x -= 2000;
	if(tank.x < - 10) tank.x += 2000;
	
	tank.x += tank.speed;
	
	if(tank.speed > 0){
		tank.speed -= 0.5;
	}else{
		tank.speed += 0.5;
	}
	
	
	ctx.save(); 
	ctx.clearRect(0,0,1800,600);
	//ctx.translate(tank.x, tank.y); 
	//ctx.rotate(tank.rotate); 
	ctx.drawImage(tank.pic,tank.x,tank.y, 40*tank.zoom, 40*tank.zoom);
	ctx.restore();
},10);












//var tankBox = getElementById('tank');
//tankImg.src = 'tank.png';

//tankBox.appendCild(tankImg);
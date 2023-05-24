var  evoy=0;
var evox=0;
var mayroy=0;
var mayrox=0;
var evoimg="";
function preload() {
	world_start = loadSound("world_start.wav");
mario_die = loadSound("mariodie.wav");
mario_gameover = loadSound("gameover.wav");
mario_kick = loadSound("kick.wav");
mario_jump = loadSound("jump.wav");
ario_coin = loadSound("coin.wav");
	setSprites();
	MarioAnimation();
}
function setup() {
	canvas = createCanvas(1240,336);
	instializeInSetup(mario);
video=createCapture(VIDEO);
video.size(800,400);
video.parent("consola");
canvas.parent("canvas");
poseNet=ml5.poseNet(video,modelolisto);
poseNet.on("pose",result);

}

function draw() {
	game()
}
function modelolisto() {
	console.log("maririoiroiroriroirirorio")
}

function result(resultados) {
	if (resultados.length>0) {
		console.log(resultados);
evoy=resultados[0].pose.nose.y;
evox=resultados[0].pose.nose.x;	

}
}




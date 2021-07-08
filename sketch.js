var stick, ninja;
var stick_image, ninja_image;
var boundary1, boundary2, boundary3, boundary4;
var wall1, wall2, wall3, wall4, wall5;
var wall6, wall7, wall8, wall9, wall10;
var wall11, wall12, wall13, wall14, wall15;
var wall20, wall21, wall22, wall23;
var wall24, wall25, wall26, wall27;

function preload() {
	stick_image = loadImage("images/stick.png");
	ninja_image = loadImage("images/ninja.png");
}

function setup() {
	canvas = createCanvas(600, 550);

	stick = createSprite(75, 70, 100, 100);
	stick.addImage(stick_image);
	stick.scale = 0.5;
	//stick.debug = true;
	stick.setCollider("rectangle", 0, 20, 50, 70);

	ninja = createSprite(width/2, height/2);
	ninja.addImage(ninja_image);
	ninja.scale = 0.3;

	boundary1 = createSprite(50, 275, 5, 450);
	//boundary1.debug = true;
	boundary2 = createSprite(550, 275, 5, 450);
	//boundary2.debug = true;
	boundary3 = createSprite(300, 50, 505, 5);
	//boundary3.debug = true;
	boundary4 = createSprite(300, 500, 505, 5);
	//boundary4.debug = true;

	wall1 = createSprite(100, 97, 5, 90);
	wall2 = createSprite(148, 140, 100, 5);
	wall3 = createSprite(100, 188, 100, 5);
	wall4 = createSprite(100, 215, 5, 50);
	wall5 = createSprite(148, 236, 5, 100);

	wall6 = createSprite(192, 260, 5, 150);
	wall7 = createSprite(148, 333, 91, 5);
	wall8 = createSprite(100, 370, 5, 170);
	wall9 = createSprite(150, 395, 5, 35);
	wall10 = createSprite(190, 395, 75, 5);
	

	wall11 = createSprite(277, 405, 5, 100);
	wall12 = createSprite(417, 452, 165, 5);
	wall13 = createSprite(500, 325, 5, 90);
	wall14 = createSprite(450, 330, 95, 5);
	wall15 = createSprite(188, 453, 180, 5);
	

	wall16 = createSprite(300, 220, 40, 5); 
	wall17=createSprite(430,270, 60, 5); 
	wall18 = createSprite(360, 80, 90, 5);
	wall19 = createSprite(495, 140, 5, 110);
	wall20=createSprite(368, 130, 140, 5); 
	

	wall21=createSprite(435,230, 5, 160); 
	wall22 = createSprite(260, 185, 140, 5); 
	wall23 = createSprite(300, 175, 5, 90); 
	wall24=createSprite(250,90,5,90); 
	wall25=createSprite(300, 320, 100, 5); 
	

	wall26=createSprite(350, 270, 5, 100); 
	wall27 = createSprite(415, 400, 80, 5);
	wall28 = createSprite(250, 270, 5, 100);
	
	
}

function draw() {
	background(224, 224, 224);

	if(keyDown(UP_ARROW)) {
		stick.y = stick.y - 3;
	}

	if(keyDown(DOWN_ARROW)) {
		stick.y = stick.y + 3;
	}

	if(keyDown(LEFT_ARROW)) {
		stick.x = stick.x - 3;
	}

	if(keyDown(RIGHT_ARROW)) {
		stick.x = stick.x + 3;
	}
	drawSprites();
	if(stick.isTouching(ninja)){
		textSize(40);
		fill("hotpink");
		textFont("Comic Sans MS");
		text("Well Done!",200,220);
	}
	//collide code

	stick.collide(boundary1);
	stick.collide(boundary2);
	stick.collide(boundary3);
	stick.collide(boundary4);

	stick.collide(wall1);
	stick.collide(wall2);
	stick.collide(wall3);
	stick.collide(wall4);
	stick.collide(wall5);
	
	stick.collide(wall6);
	stick.collide(wall7);
	stick.collide(wall8);
	stick.collide(wall9);
	stick.collide(wall10);
	
	stick.collide(wall11);
	stick.collide(wall12);
	stick.collide(wall13);
	stick.collide(wall14);
	stick.collide(wall15);

	stick.collide(wall16);
	stick.collide(wall17);
	stick.collide(wall18);
	stick.collide(wall19);
	stick.collide(wall20);

	stick.collide(wall21);
	stick.collide(wall22);
	stick.collide(wall23);
	stick.collide(wall24);
	stick.collide(wall25);

	stick.collide(wall26);
	stick.collide(wall27);
	stick.collide(wall28);
	//end collide code

	
}
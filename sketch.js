var game = {
	life : 3,
	dead : 0,
	level : 1,
	wait : 0,
	gravitypull : 1,
	jump : 0,
}

var block = {
	x : 0,
	y : 200,
}

var barrier = {
	x : 50,
	y : 200,
}

var platform = {
	x : 0,
	y : 200,
}

var platform = {
	x : 0,
	y : 200,
}

var reward = {
	x : 0,
	y : 200,
}

let stamina = 0
let extraCanvas;

function setup() {
	createCanvas(600, 400);
	platform.x = random(90, 480)
	platform.y = random(110, 180)

	barrier.x = random(platform.x +30, platform.x - 90)
	barrier.y = random(platform.y +30, platform.y - 90)
	
	reward.x = random(platform.x +30, platform.x - 90)
	reward.y = random(platform.y -30, platform.y - 90)
	
	extraCanvas = createGraphics(600, 400);
	extraCanvas.clear()
	background(50);
	stroke(255, 0, 0);
	line(0, 220, 500, 220);
}

function draw() {
	
	let d = dist(block.x, block.y, barrier.x, barrier.y)
	if (d < 20 && game.wait < 1) {
		game.wait += 1000
		game.life = game.life - 1
	}
	//barrier and block distance detection
	
	let e = block.y - platform.y
	let f = block.x - platform.x
	if (e > -21 && e < -20 && f < 20 && f > -20) {
		game.gravitypull = 0
		game.jump = 1
	} else {
		game.gravitypull = 1
	}
	//platform and block distance detection
	
	let b = dist(barrier.x, barrier.y, platform.x, platform.y)
	if (b > 100 || b < 30) {
		barrier.x = random(platform.x +30, platform.x - 90)
		barrier.y = random(platform.y +30, platform.y - 90)
		clear()		
	}
	//barrier and platform distance detection
	
	let r = dist(reward.x, reward.y, platform.x, platform.y)
	if (r > 100 || r < 30) {
		reward.x = random(platform.x +30, platform.x - 90)
		reward.y = random(platform.y -30, platform.y - 90)
		clear()
	}
	//reward and platform distance detection
	
	let t = dist(barrier.x, barrier.y, reward.x, reward.y)
	if (t > 100 || t < 30) {
		reward.x = random(platform.x +30, platform.x - 90)
		reward.y = random(platform.y -30, platform.y - 90)
		clear()
	}
	//reward and barrier distance detection
	
	if (block.y < 200 && game.gravitypull === 1) {
		setInterval(10);
		block.y += 2;
		clear();
		//background(50);
	}

	if (block.y > 200) {
		setInterval(10);
		block.y -= 1;
		clear();
		//background(50);
	}

	extraCanvas.noStroke();
	extraCanvas.fill(155, 0, 0, 20, 70);
	extraCanvas.rect(barrier.x, barrier.y, 20, 20);
	//Drawing of barrier

	extraCanvas.noStroke();
	extraCanvas.fill(0, 155, 155, 20, 70);
	extraCanvas.rect(platform.x, platform.y, 20, 20);
	//Drawing of platform
	
	extraCanvas.noStroke();
	extraCanvas.fill(155, 155, 0, 20, 70);
	extraCanvas.rect(reward.x, reward.y, 20, 20);
	//Drawing of reward

	noStroke();
	fill(255, 255, 255, 20, 70);
	rect(block.x, block.y, 20, 20);
	//Drawing of main block

	extraCanvas.stroke(255, 0, 0);
	extraCanvas.line(0, 220, 500, 220);
	//Drawing of line on ground

	image(extraCanvas, 0, 0);
	
	if (block.y >= 200 || game.jump === 1) {
			stamina = 0
			//print(stamina)
	
	if (game.wait > 1) {
		setInterval(100)
		game.wait = 0
	}
	}
		
	
}



function keyPressed() {
	if (keyCode === LEFT_ARROW) {
		block.x -= 20;
		clear()
		//background(50);
	}

	if (keyCode === RIGHT_ARROW) {
		block.x += 20;
		clear();
		//background(50);
	}
	if (stamina < 2) {
		if (keyCode === UP_ARROW) {
			block.y -= 70;
			stamina = stamina + 1
		//	print(stamina)
			clear();
			//background(50);
		}
	}

	if (keyCode === DOWN_ARROW) {
		block.y += 10;
		clear();
		//background(50);
	}
	return false;
}

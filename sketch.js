var game = {
	life: 3,
	dead: 0,
	level: 1,
	wait: 0,
	gravitypull: 1,
	jump: 0,
	onbarrier: 1,
	nextleveltimer : 0,
	nextlevel : 0,
}

var barline = {
	x1 : 0,
	x2 : 0,
	y1 : 0,
	y2 : 0,
}

var block = {
	x: 0,
	y: 200,
	col1: 0,
	col2: 255,
	col3: 0,
}

var barrier = {
	x: 50,
	y: 200,
}

var platform = {
	x: 0,
	y: 200,
}

var platform = {
	x: 0,
	y: 200,
}

var reward = {
	x: 0,
	y: 200,
}

let stamina = 0
let extraCanvas;

function setup() {
	createCanvas(500, 400);
	platform.x = random(90, 480)
	platform.y = random(110, 180)

	barrier.x = random(platform.x + 30, platform.x - 90)
	barrier.y = random(platform.y + 30, platform.y - 90)

	reward.x = random(platform.x + 30, platform.x - 90)
	reward.y = random(platform.y - 30, platform.y - 150)
	
	barline.x1 = random(20, 580)
	barline.x2 = random(20, 580)
	barline.y1 = random(50, 180)
	barline.y2 = random(50, 180)

	/*barline.x1 = 50
	barline.x2 = 450
	barline.y1 = 50
	barline.y2 = 180*/
	
	extraCanvas = createGraphics(600, 400);
	extraCanvas.clear()
	background(50);
	stroke(255, 0, 0);
	line(0, 220, 500, 220);
}

function draw() {
	
	if (game.nextlevel === 1) {
		game.nextlevel = 0
		setup()
	}

	if (game.life === 0) {
		background(255, 0, 0)
		image.background(255, 0, 0)
	}

	let d = dist(block.x, block.y, barrier.x, barrier.y)
	if (d < 20 && game.wait < 1) {
		game.wait += 1000
		game.life = game.life - 1
		block.col1 = 255
		block.col2 = 0
		block.col3 = 0
		print("You have " + game.life + " lives remaining")
	}
	//barrier and block distance detection

	let w = dist(block.x, block.y, reward.x, reward.y)
	if (w < 20 && game.nextleveltimer === 0) {
		game.nextleveltimer = 1
		block.y +=25
		game.jump = 0
		setInterval(1000)
		print("Congradulations! You have advanced to level " + game.level)
		game.nextlevel = 1
		game.level += 1
		game.wait += 1000
		block.col1 = 0
		block.col2 = 255
		block.col3 = 0
	}
	//reward and block win detection
	
	let e = block.y - platform.y
	let f = block.x - platform.x
	if (e > -22 && e <= -20 && f < 20 && f > -20) {
		game.gravitypull = 0
		game.jump = 1
		game.onbarrier = 1
		if (game.onbarrier === 0) {
			block.y += 1
		} else {
			game.onbarrier = 0
		}
	} else {
		game.gravitypull = 1
	}
	//platform and block distance detection

	let b = dist(barrier.x, barrier.y, platform.x, platform.y)
	if (b > 90 || b < 30) {
		barrier.x = random(platform.x + 30, platform.x - 90)
		barrier.y = random(platform.y + 30, platform.y - 90)
		clear()
	}
	//barrier and platform distance detection

	let r = dist(reward.x, reward.y, platform.x, platform.y)
	if (r > 140 || r < 60 || platform.y < 20) {
		reward.x = random(platform.x + 30, platform.x - 90)
		reward.y = random(platform.y - 60, platform.y - 150)
		clear()
	}
	//reward and platform distance detection

	let t = dist(barrier.x, barrier.y, reward.x, reward.y)
	if (t > 140 || t < 60) {
		reward.x = random(platform.x + 30, platform.x - 90)
		reward.y = random(platform.y - 60, platform.y - 150)
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
	


	//extraCanvas.noStroke()
	//extraCanvas.fill(155, 0, 0, 20, 70)
//	extraCanvas.rect(barrier.x, barrier.y, 20, 20)
	//Drawing of barrier

	//extraCanvas.noStroke();
//	extraCanvas.fill(0, 155, 155, 20, 70);
//	extraCanvas.rect(platform.x, platform.y, 20, 20);
//	//Drawing of platform


	extraCanvas.noStroke()
	extraCanvas.fill(155, 0, 0, 20, 70)
	extraCanvas.rect(barrier.x, barrier.y, 20, 20)
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
	fill(block.col1, block.col2, block.col3, 20, 70);
	rect(block.x, block.y, 20, 20);
	//Drawing of main block

	extraCanvas.stroke(0, 0, 0);
	extraCanvas.line(0, 220, 500, 220);
	//Drawing of line on ground
	
	extraCanvas.stroke(200, 55, 50);
	extraCanvas.line(barline.x1, barline.y1, barline.x2, barline.y2);
	//Drawing of barrier line

	image(extraCanvas, 0, 0);

	if (block.y >= 200 || game.jump === 1) {
		stamina = 0
		game.jump = 0
		//print(stamina)

		if (game.wait > 1) {
			setInterval(100)
			game.wait = 0
			setInterval(300)
			block.col1 = 255
			block.col2 = 255
			block.col3 = 255
		}
	}
	setInterval(1000);
	game.nextleveltimer = 0

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

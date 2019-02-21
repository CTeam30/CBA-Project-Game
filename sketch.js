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

let stamina = 0
let extraCanvas;

function setup() {
	createCanvas(600, 400);
	platform.x = random(90, 480)
	platform.y = random(200, 0)

	extraCanvas = createGraphics(600, 400);
	extraCanvas.clear()
	background(50);
	stroke(255, 0, 0);
	line(0, 220, 500, 220);
}

function draw() {

	let d = dist(block.x, block.y, barrier.x, barrier.y)
	if (d < 20) {
		background(0, 255, 0)
	}

	if (block.y < 200) {
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
	extraCanvas.fill(155, 155, 0, 20, 70);
	extraCanvas.rect(platform.x, platform.y, 20, 20);
	//Drawing of platform

	noStroke();
	fill(255, 255, 255, 20, 70);
	rect(block.x, block.y, 20, 20);
	//Drawing of main block

	extraCanvas.stroke(255, 0, 0);
	extraCanvas.line(0, 220, 500, 220);
	//Drawing of line on ground

	image(extraCanvas, 0, 0);
	
	if (block.y >= 200) {
			stamina = 0
			//print(stamina)
	}
		
	
}



function keyPressed() {
	if (keyCode === LEFT_ARROW) {
		block.x -= 10;
		clear()
		//background(50);
	}

	if (keyCode === RIGHT_ARROW) {
		block.x += 10;
		clear();
		//background(50);
	}
	if (stamina < 2) {
		if (keyCode === UP_ARROW) {
			block.y -= 70;
			stamina = stamina + 1
			print(stamina)
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

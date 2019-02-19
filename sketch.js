let horizontal = 400
let vertical = 200

function setup() {
	createCanvas(800, 450);
	background(50);
}

function draw() {
	noStroke()
	fill(255, 255, 255, 20, 70)
	rect(horizontal, vertical, 20, 20)
}

function keyPressed() {
	if (keyCode === LEFT_ARROW) {
		horizontal -= 10
		clear()
		background(50);
	}
	
	if (keyCode === RIGHT_ARROW) {
		horizontal += 10
		clear()
		background(50);
	}
	
	if (keyCode === UP_ARROW) {
		vertical -= 10
		clear()
		background(50);
	}
	
	if (keyCode === DOWN_ARROW) {
		vertical += 10
		clear()
		background(50);
	}
	return false
}

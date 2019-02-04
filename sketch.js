let value = 0
function setup() {
  createCanvas(800, 450);
	background(120);
}

function draw() {
	fill(value, value, value, 20, 70)
	rect(mouseX, mouseY, 20, 20)
}

function keyPressed() {
		if (keyCode === LEFT_ARROW) {
			clear()
		}
	return false
}

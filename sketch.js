let horizontal = 0
let vertical = 200
let bx = 50
let by = 200
let start = 1

function setup() {
	createCanvas(800, 450);
	background(50);
	stroke(255, 0, 0)
	line(0, 220, 500, 220)
}

function draw() {
/*	if (start = 1) {
		setInterval(100)
	  horizontal += 1
		clear()
		background(50) 

	}*/
	if (vertical < 200) {
		setInterval(10)
		vertical += 3
		clear()
		background(50)
	}
	noStroke()
	fill(255, 255, 255, 20, 70)
	rect(horizontal, vertical, 20, 20)
	//Drawing of main block
	noStroke()
	fill(155, 0, 0, 20, 70)
	rect(bx, by, 20, 20)
	//Drawing of barrier
	stroke(255, 0, 0)
	line(0, 220, 500, 220)
	//Drawing of line on ground

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
		vertical -= 50
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
	
	if (keyCode === RIGHT_ARROW) {
		horizontal += 10
		clear()
		background(50);
	}
	
	if (keyCode === UP_ARROW) {
		vertical -= 50
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

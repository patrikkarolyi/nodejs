	x = 200;
	y = 200;
	r = 100;

function setup() {
	createCanvas(400, 400);
}

function draw() {
	background(50);
	
	if (dist(x, y, mouseX, mouseY) < r/2) {
		background(10);
	} else {
		background(200);
	}

	fill(250,0,0)
	stroke(0)
	ellipse(x,y,r,r);
	
}
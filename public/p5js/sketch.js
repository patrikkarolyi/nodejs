vertices = [{
		x: 100,
		y: 200,
		overBox: false,
		locked: false,
		id: 0
	},
	{
		x: 300,
		y: 200,
		overBox: false,
		locked: false,
		id: 1
	},
	{
		x: 200,
		y: 300,
		overBox: false,
		locked: false,
		id: 2
	}
]

edges = [{
		a: vertices[0],
		b: vertices[1]
	},
	{
		a: vertices[1],
		b: vertices[2]
	}
]


var r = 50;
var xOffset = 0.0;
var yOffset = 0.0;
var overSomething = false

function setup() {
	createCanvas(800, 400);
	strokeWeight(3);
	textAlign(LEFT);
}

function draw() {
	background(255, 255, 200);
	overSomething = false;

	edges.forEach(function(edge) {
		stroke(0);
		line(edge.a.x, edge.a.y, edge.b.x, edge.b.y);
	});

	vertices.forEach(function(vertex) {

		var dx = vertex.x - mouseX;
		var dy = vertex.y - mouseY;
		if (dx * dx + dy * dy < r * r / 2) {
			if (!overSomething) {
				vertex.overBox = true;
				overSomething = true;
			}
			text(vertex.id, 20, 20);
			stroke(255, 156, 0);
		} else {
			stroke(0);
			fill(30, 144, 255);
			vertex.overBox = false;
		}
		ellipse(vertex.x, vertex.y, r, r);
	});
}

function mousePressed() {
	vertices.forEach(function(vertex) {
		if (vertex.overBox) {
			vertex.locked = true;
			fill(255, 0, 0);
			xOffset = mouseX - vertex.x;
			yOffset = mouseY - vertex.y;
			return;
		} else {
			vertex.locked = false;
		}

	});
}

function mouseDragged() {
	vertices.forEach(function(vertex) {
		if (vertex.locked) {
			vertex.x = mouseX - xOffset;
			vertex.y = mouseY - yOffset;
		}
	});
}

function mouseReleased() {
	vertices.forEach(function(vertex) {
		vertex.locked = false;
	});
}
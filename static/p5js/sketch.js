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
}
]

edges = [{
a: vertices[0],
b: vertices[1]
}]


var boxSize = 20;
var xOffset = 0.0;
var yOffset = 0.0;
var overSomething = false

function setup() {
createCanvas(800, 400);
rectMode(RADIUS);
strokeWeight(3);
}

function draw() {
background(255, 255, 200);
overSomething = false;
vertices.forEach(function(vertex) {

	if (mouseX > vertex.x - boxSize && mouseX < vertex.x + boxSize &&
		mouseY > vertex.y - boxSize && mouseY < vertex.y + boxSize) {
		if (!overSomething) {
			vertex.overBox = true;
			overSomething = true;
		}
		if (!vertex.locked) {
			stroke(255, 156, 0);
		}

	} else {
		stroke(0);
		fill(0, 0, 255);
		vertex.overBox = false;
	}
	rect(vertex.x, vertex.y, boxSize, boxSize);
});
edges.forEach(function(edge) {
	stroke(0);
	line(edge.a.x, edge.a.y, edge.b.x, edge.b.y);
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
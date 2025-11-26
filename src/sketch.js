function setup() {
    createCanvas(windowWidth, windowHeight);
    background(20);
}

function draw() {
    background(20);
    circle(width / 2, height / 2, 50);
    const myPos = randomPositionAroundMouse(100);
    circle(myPos.x, myPos.y, 20);
}

/**
 * @param {number} range - max allowed distance from mouse
 * @returns {p5.Vector} */
function randomPositionAroundMouse(range) {
    const offset = p5.Vector.random2D().mult(random(0, range));
    return offset.add(mouseX, mouseY);
}

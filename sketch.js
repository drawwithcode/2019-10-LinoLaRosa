var faceMask;
var vid;
var sofa;

function preload() {

    pattern = loadImage("assets/holo.jpeg");
    faceMask = loadModel("assets/faceMesh.obj", true);
    sofa = loadModel("assets/sofa.obj", true);
    sofap = loadImage("assets/sofapattern.jpg");

}

function setup() {

    createCanvas(windowWidth, windowHeight, WEBGL);

    vid = createVideo(['assets/vaporwavevisual.mp4']);
    vid.elt.muted = true;
    vid.loop();
    vid.hide();

}

function draw() {

    background(0);

    var locX = mouseX - width / 2;
    var locY = mouseY - height / 2;
    pointLight(0, 255, 255, locX, locY, 50);

    ambientLight(255,192,203);
    directionalLight(255, 192, 203, 1, -1, 0);

    welcome = createGraphics(200, 200);
    welcome.fill("pink");
    welcome.background("aqua");
    welcome.textAlign(CENTER);
    welcome.textSize(20);
    welcome.text("WELCOME TO THE \nHOLOGRAPHIC \nDREAM \nLIVING ROOM", 105, 70);

    push();
    texture(welcome);
    noStroke();
    translate(-windowWidth / 4, 0, 0);
    rotateX(frameCount / 200);
    rotateY(frameCount / 200);
    rotateZ(frameCount / 200);
    box(200);
    pop();

    head = createGraphics(200, 200);
    head.fill("aqua");
    head.background("pink");
    head.textAlign(CENTER);
    head.textSize(20);
    head.text("IT'S ALL \nIN YOUR \nHEAD", 105, 70);

    push();
    texture(head);
    noStroke();
    translate(windowWidth / 4, 0, 0);
    rotateY(frameCount / 200);
    sphere(150);
    pop();

    push();
    noStroke();
    translate(0, 250);
    rotateX(HALF_PI);
    texture(pattern);
    plane(windowWidth, windowHeight);
    pop()

    push();
    noStroke();
    translate(0, 0, -200);
    texture(vid);
    plane(windowWidth, windowHeight + 500);
    pop()

    push();
    normalMaterial();
    translate(mouseX - width / 2, mouseY - height / 2);
    rotateZ(PI);
    rotateY(frameCount / 100);
    model(faceMask);
    pop();

    push();
    translate(0, 200, 300);
    rotateZ(PI);
    rotateY(PI);
    noStroke();
    texture(sofap);
    model(sofa);
    pop();
}

//I tried to put a song in the background or a button with a youtube link to a song, but either way the background video stopped. I think that may be a bug.

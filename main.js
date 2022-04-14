img = "";

function preload()
{
    img = loadImage("Ferrari.png")
}

function setup()
{
    canvas = createCanvas(640, 500);
    canvas.center();
}

function draw()
{
    image(img, 0, 0, 640, 500);
    fill("#ff0000");
    text("Ferrari", 45, 75);
    noFill();
    stroke("#ff0000");
    rect(30, 70, 444, 360);
}
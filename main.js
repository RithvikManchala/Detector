img = "";
status = "";
objects = "";

function preload()
{
    img = loadImage("Ferrari.png")
}

function setup()
{
    canvas = createCanvas(640, 500);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelloaded);
    document.getElementById("status").innerHTML = "Status : Detecting Object"
}

function modelloaded()
{
    console.log("Model is ready");
    status = true;
    objectDetector.detect(img, gotResults);
}

function gotResults(error, results)
{
    if(error)
    {
        console.log(error);
    }
    else
    {
        console.log(results);
    }
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

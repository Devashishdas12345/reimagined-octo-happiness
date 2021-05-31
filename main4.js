img = "";
objects = [];
status = "";

function preload() {
    img = loadImage('Pen-Stand.jpg');
}

function setup() {
    canvas = createCanvas(450 , 330);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd' , modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting object"; 
}

function modelLoaded() {
    console.log("Model is loaded");
    status = true;
    objectDetector.detect(img, gotResults);
}

function gotResults(error, results) {
    console.log(results);
    if(error) {
        console.error("Error");
        window.alert("Error");
    }
    else {
        console.log(results);
        objects = results;
    }
}

function draw() {
    document.getElementById("status").innerHTML = "Status : Status is detected";

    image(img, 0, 0, 500, 400);

    fill("#FF0000");
    text("Pen stand with pens   61%", 108, 53);
    noFill();
    stroke("#FF0000");
    rect(100, 39, 300, 290);
}

function back() {
    window.location = "index.html";
}
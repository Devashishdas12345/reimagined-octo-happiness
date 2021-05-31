img = "";
objects = [];
status = "";

function preload() {
    img = loadImage('download.jpg');
}

function setup() {
    canvas = createCanvas(500 , 370);
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

    fill("#FFFFFF");
    text("Dressing table   89%", 82, 23);
    noFill();
    stroke("#FF0000");
    rect(80, 9, 350, 360);
}

function back() {
    window.location = "index.html";
}
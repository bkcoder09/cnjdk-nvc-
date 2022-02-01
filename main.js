status = "";
video = "";

function preload(){
    video = createVideo('video.mp4');
    video.hide();
}

function setup(){
    canvas = createCanvas(325, 325);
    canvas.center();
}

function draw(){
    image(video, 0, 0, 325, 325);
}

function start(){
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = " Status - Detecting Objects :D ";
}

function modelLoaded(){
    console.log(" Model is Loaded ");
    status = true;
    video.loop();
    video.speed(1);
    video.volume(0);
}
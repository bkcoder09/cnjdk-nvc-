objects = [];
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
    if(status != ""){
        objectDetector.detect(video, gotResult);
        for(i=0; i < objects.length; i++){
            document.getElementById("status").innerHTML = " Status - Objects Detected :D ";
            document.getElementById("object_count").innerHTML = " Number of Objects - "+objects.length;
            fill("#FF0000");
            percent = floor(objects[i].confidence * 100);
            text(objects[i].label+" "+percent+"%",objects[i].x + 15, objects[i].y + 15);
            noFill();
            stroke("#FF0000");
            rect(objects[i].width, objects[i].height, objects[i].x, objects[i].y);
        }
    }
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

function gotResult(error, results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        objects = results;
    }
}
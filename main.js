noseX = 0;
noseY = 0;

function preload(){
   hat = loadImage('https://i.postimg.cc/NfVJ0XZ8/party-hat.png');
   song = loadSound("music.mp3");
}

function setup(){
    canvas = createCanvas(480,380);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose', gotPoses);

}

function modelLoaded(){
console.log(" The poseNet model is intialized");

}

function gotPoses(results){
if(results.length > 0){
    console.log(results);
    noseX = results[0].pose.nose.x - 180;
    noseY = results[0].pose.nose.y - 320;
    console.log("nose x = " + results[0].pose.nose.x);
    console.log("nose y = " + results[0].pose.nose.y); 
}


}

function draw(){
    image(video,0,0,480,380);
    image(hat,noseX,noseY,210,170);
}

function playsong(){
    song.play();
}

function takeSnapshot(){
    save('birthday.png');
}
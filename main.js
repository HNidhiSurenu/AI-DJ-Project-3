leftwristx=0
leftwristy=0
rightwristx=0
rightwristy=0
scoreleftwrist=0
scorerightwrist=0

function setup(){
    canvas=createCanvas(600, 500)
    canvas.center()
video=createCapture(VIDEO)
video.hide()
posenet=ml5.poseNet(video, modelloaded)
posenet.on('pose', gotposes)
}
function modelloaded (){
    console.log("model is loaded")
}

function preload(){
    song=loadSound("Bijlee Bijlee.mp3")
        song=loadSound("Raataan Lambiyan.mp3")
}

function draw(){
    image(video, 0, 0, 600, 500)
}
function gotposes(results){
    if(results.length>0){
        console.log(results)
        leftwristx=results[0].pose.leftWrist.x
        leftwristy=results[0].pose.leftWrist.y
        rightwristx=results[0].pose.rightWrist.x
        rightwristy=results[0].pose.rightWrist.y 
        scoreleftwrist=results[0].pose.keypoints[9].score
        scorerightwrist=results[0].pose.keypoints[10].score
        console.log("leftwristx=" + leftwristx + "and leftwristy=" + leftwristy)
        console.log("rightwristx=" + rightwristx + "and rightwristy=" + rightwristy)
    }
}
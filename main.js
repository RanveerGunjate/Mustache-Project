noseX = 0;
noseY = 0;
function preload(){
clown_nose = loadImage('https://i.postimg.cc/sDtr8sCN/clown-nose-png-banner-free-zoya-nail-polish-11562929643mcuxnpgdb2.png');
}
function setup(){
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}  
function gotPoses(results) 
{
    if(results.length > 0){
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("nose x =" + noseX);
        console.log("nose y =" + noseY);
    }
}





function modelLoaded() 
{
    console.log('PoseNet Is Initalized');
}

function draw(){
    image(video, 0, 0, 300, 300);
    image(clown_nose, noseX-10, noseY-5, 20, 20);
}


function take_snapshot(){
    save('myFilterImage.png');
}
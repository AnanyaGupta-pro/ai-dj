scoreLeftWrist=0
scoreRightWrist=0
song1="";
song2="";
song3="";
song4="";
song5="";
song6="";
song7="";
song8="";
song9="";
song10="";
leftWristX=0;
leftWristY=0;
rightWristX=0;
rightWristY=0;
function preload(){
    song1=loadSound("harry potter.mp3")
    song2=loadSound("believer.mp3")
    song3=loadSound("cheap thrills.mp3")
    song4=loadSound("dance monkey.mp3")   
    song5=loadSound("dont let me down.mp3")
    song6=loadSound("Faded.mp3")
    song7=loadSound("senorita.mp3")
    song8=loadSound("Shape of you.mp3")
    song9=loadSound("thunder.mp3")
    song10=loadSound("wavinflag.mp3")

}

function setup(){
    canvas=createCanvas(600,500);
    canvas.center()

    video=createCapture(VIDEO);
    video.hide();

    poseNet=ml5.poseNet(video,modelLoaded)
    poseNet.on("pose",gotPoses)
}
function draw(){
    image(video,0,0,600,500);
fill("blue")
stroke("white")
if(scoreRightWrist>0.2){


circle(rightWristX,rightWristY,40);

if(rightWristY>0 && rightWristY<=100){
   
    document.getElementById("speed").innerHTML="Speed = 0.5x";
    song1.rate(0.5);
    song2.rate(0.5);
    song3.rate(0.5);
    song4.rate(0.5);
    song5.rate(0.5);
    song6.rate(0.5);
    song7.rate(0.5);
    song8.rate(0.5);
    song9.rate(0.5);
    song10.rate(0.5);

    }
    else if(rightWristY>100 && rightWristY<=200){
   
        document.getElementById("speed").innerHTML="Speed = 1x";
        song1.rate(1);
        song2.rate(1);
        song3.rate(1);
        song4.rate(1);
        song5.rate(1);
        song6.rate(1);
        song7.rate(1);
        song8.rate(1);
        song9.rate(1);
        song10.rate(1);
        }
        else if(rightWristY>200 && rightWristY<=300){
   
            document.getElementById("speed").innerHTML="Speed = 1.5x";
            song1.rate(1.5);
            song2.rate(1.5);
            song3.rate(1.5);
            song4.rate(1.5);
            song5.rate(1.5);
            song6.rate(1.5);
            song7.rate(1.5);
            song8.rate(1.5);
            song9.rate(1.5);
            song10.rate(1.5);
            }
            else if(rightWristY>300 && rightWristY<=400){
   
                document.getElementById("speed").innerHTML="Speed = 2x";
                song1.rate(2)
                song2.rate(2);
                song3.rate(2);
                song4.rate(2);
                song5.rate(2);
                song6.rate(2);
                song7.rate(2);
                song8.rate(2);
                song9.rate(2);
                song10.rate(2);
                }
                else if(rightWristY>400 && rightWristY<=500){
   
                    document.getElementById("speed").innerHTML="Speed = 2.5x";
                    song1.rate(2.5);
                    song2.rate(2.5);
                    song3.rate(2.5);
                    song4.rate(2.5);
                    song5.rate(2.5);
                    song6.rate(2.5);
                    song7.rate(2.5);
                    song8.rate(2.5);
                    song9.rate(2.5);
                    song10.rate(2.5);
                    }
                }
if(scoreLeftWrist>0.2){
circle(leftWristX,leftWristY,40);
InNumberleftWristY=Number(leftWristY);
remove_decimals=floor(InNumberleftWristY);
volume=remove_decimals/500;
document.getElementById("volume").innerHTML="Volume = "+volume
song1.setVolume(volume);
song2.setVolume(volume);
song3.setVolume(volume);
song4.setVolume(volume);
song5.setVolume(volume);
song6.setVolume(volume);
song7.setVolume(volume);
song8.setVolume(volume);
song9.setVolume(volume);
song10.setVolume(volume);
}


}
function play(){
   window.alert("Please select a song from the Song List")

   
}
function modelLoaded(){
    console.log("PoseNet Is Initialized");
}
function gotPoses(results){
    if(results.length>0){
        console.log(results);
        scoreRightWrist=results[0].pose.keypoints[10].score;
        scoreLeftWrist=results[0].pose.keypoints[9].score;
        console.log("scoreLeftwrist = "+scoreLeftWrist);
        console.log("scoreRightwrist = "+scoreRightWrist);
        leftWristX=results[0].pose.leftWrist.x;
        leftWristY=results[0].pose.leftWrist.y;

        rightWristX=results[0].pose.rightWrist.x;
        rightWristY=results[0].pose.rightWrist.y;
    }
}
   function stop(){
       song1.stop()
       song2.stop()
       song3.stop()
       song4.stop()
       song5.stop()
       song6.stop()
       song7.stop()
       song8.stop()
       song9.stop()
       song10.stop()
       document.getElementById("play").style.display="inline-block"
       document.getElementById("stop").style.display="none"
   }
   function openNav() {
    document.getElementById("mySidenav").style.width = "300px";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }
  function playHarryPotter() {
    song1.play();
    song1.setVolume(1)
    song1.rate(1);
    song2.stop()
    song3.stop()
    song4.stop()
    song5.stop()
    song6.stop()
    song7.stop()
    song8.stop()
    song9.stop()
    song10.stop()
    document.getElementById("play").style.display="none"
    document.getElementById("stop").style.display="inline-block"
  }

  function playBeliever() {
    song2.play();
    song2.setVolume(1)
    song2.rate(1);
    song1.stop()
    song3.stop()
    song4.stop()
    song5.stop()
    song6.stop()
    song7.stop()
    song8.stop()
    song9.stop()
    song10.stop()
    document.getElementById("play").style.display="none"
    document.getElementById("stop").style.display="inline-block"
  }

  function playCheapThrills() {
    song3.play();
    song3.setVolume(1)
    song3.rate(1);
    song1.stop()
    song2.stop()
    song4.stop()
    song5.stop()
    song6.stop()
    song7.stop()
    song8.stop()
    song9.stop()
    song10.stop()
    document.getElementById("play").style.display="none"
    document.getElementById("stop").style.display="inline-block"
  }

  function playDanceMonkey() {
    song4.play();
    song4.setVolume(1)
    song4.rate(1);
    song1.stop()
    song3.stop()
    song2.stop()
    song5.stop()
    song6.stop()
    song7.stop()
    song8.stop()
    song9.stop()
    song10.stop()
    document.getElementById("play").style.display="none"
    document.getElementById("stop").style.display="inline-block"
  }
  
  function playDLMD() {
    song5.play();
    song5.setVolume(1)
    song5.rate(1);
    song1.stop()
    song3.stop()
    song2.stop()
    song4.stop()
    song6.stop()
    song7.stop()
    song8.stop()
    song9.stop()
    song10.stop()
    document.getElementById("play").style.display="none"
    document.getElementById("stop").style.display="inline-block"
  }
 
  function playFaded() {
    song6.play();
    song6.setVolume(1)
    song6.rate(1);
    song1.stop()
    song3.stop()
    song2.stop()
    song4.stop()
    song5.stop()
    song7.stop()
    song8.stop()
    song9.stop()
    song10.stop()
    document.getElementById("play").style.display="none"
    document.getElementById("stop").style.display="inline-block"
  }
  
  

  function playSenorita() {
    song7.play();
    song7.setVolume(1)
    song7.rate(1);
    song1.stop()
    song3.stop()
    song2.stop()
    song4.stop()
    song5.stop()
    song8.stop()
    song6.stop()
    song9.stop()
    song10.stop()
    document.getElementById("play").style.display="none"
    document.getElementById("stop").style.display="inline-block"
  }

  function playSOY() {
    song8.play();
    song8.setVolume(1)
    song8.rate(1);
    song1.stop()
    song3.stop()
    song2.stop()
    song4.stop()
    song5.stop()
    song7.stop()
    song9.stop()
    song6.stop()
    song10.stop()
    document.getElementById("play").style.display="none"
    document.getElementById("stop").style.display="inline-block"
  }
  function playThunder() {
    song9.play();
    song9.setVolume(1)
    song9.rate(1);
    song1.stop()
    song3.stop()
    song2.stop()
    song4.stop()
    song5.stop()
    song7.stop()
    song8.stop()
    song6.stop()
    song10.stop()
    document.getElementById("play").style.display="none"
    document.getElementById("stop").style.display="inline-block"
  }
  function playWavinFlag() {
    song10.play();
    song10.setVolume(1)
    song10.rate(1);
    song1.stop()
    song3.stop()
    song2.stop()
    song4.stop()
    song5.stop()
    song7.stop()
    song9.stop()
    song6.stop()
    song8.stop()
    document.getElementById("play").style.display="none"
    document.getElementById("stop").style.display="inline-block"
  }
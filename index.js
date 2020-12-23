function pausevideo(){
vid=document.getElementById('myVideo');
vid.pause();
console.log('i executed');
}

function play(){
    video=document.getElementById('myVideo');
    video.play();
    console.log('i executed');
}



  var i = 0;
  var speed = 50; /* The speed/duration of the effect in milliseconds */
  
  function typeWriter() {
    if (i < 10) {
      document.getElementById("stats").innerHTML += 1;
      i++;
      setTimeout(typeWriter, speed);
    }
  }
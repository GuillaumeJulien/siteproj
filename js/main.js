var video = document.getElementById('home-video');

video.addEventListener('ended', onVideoEnded);
document.getElementById('button-trailer-view').addEventListener('click', showTrailer);

function onVideoEnded (){
  document.getElementsByTagName('body')[0].classList.add('video-ended');
  document.getElementById('title').classList.add('blink');
}
 function showTrailer() {
   document.getElementById('title').classList.remove('blink');
   document.getElementById('title').classList.add('blink-exit');
   rewindVideo();
   document.getElementsByTagName('body')[0].classList.remove('video-ended');
   setTimeout(function () {

     video.src = '';
     video.controls = true;
   }, 3000);
 }
function rewindVideo() {
  var intervalRewind = setInterval(function(){
    video.playbackRate = 1.0;
    if(video.currentTime == 0){
        clearInterval(intervalRewind);
        video.pause();
    }
    else{
        video.currentTime += -.9;
    }
  },150);
}

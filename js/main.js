var video = document.getElementById('home-video');

video.addEventListener('ended', onVideoEnded);
document.getElementById('button-trailer-view').addEventListener('click', showTrailer);

function onVideoEnded (){
  document.getElementsByTagName('body')[0].classList.add('video-ended');
  document.getElementById('title').classList.add('blink');
  document.getElementById('credit').classList.add('fadeInDown');
}
 function showTrailer() {
   document.getElementById('title').classList.remove('blink');
   document.getElementById('title').classList.add('blink-exit');
   

 }

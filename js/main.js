document.getElementById('home-video').addEventListener('ended', onVideoEnded);

function onVideoEnded (){
  document.getElementsByTagName('body')[0].classList.add('video-ended');
  document.getElementById('title').classList.add('blink');
}
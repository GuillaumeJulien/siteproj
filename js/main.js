document.getElementById('home-video').addEventListener('ended', onVideoEnded);

function onVideoEnded (){
  document.getElementById('home-content').classList.add('home__content--visible');
  document.getElementById('title').classList.add('blink');
}
document.getElementById('home-video').addEventListener('ended', onVideoEnded);

function onVideoEnded (){
  document.getElementById('home-content').style.display = 'block';
}
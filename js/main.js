document.getElementById('home-video').addEventListener('ended', onVideoEnded);

function onVideoEnded (){
  document.getElementById('home-content').style.opacity = 1;
  var title = document.getElementById('title');
  if (title.classList){
    title.classList.add('blink');
  }else{
    title.className += ' blink';
  }
}

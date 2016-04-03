/**
 * Trailer
 */

var firstScriptTag, player, tag, playTrailer, loadFitVids;

tag = document.createElement('script');
tag.src = 'https://www.youtube.com/iframe_api';
firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

window.onYouTubeIframeAPIReady = function() {
  player = new YT.Player('trailer-player', {
    height: '540',
    width: '960',
    videoId: '0M83z9y3h8w',
    events: {
      'onReady': loadFitVids
    }
  });
};

loadFitVids = function () {
  fitvids();
};

playTrailer = function () {
  var el = document.getElementById('trailer');
  var wrapperEl = document.getElementsByClassName('trailer__wrapper')[0];
  var videoEl = document.getElementById('trailer-player');

  el.style.display = "block";
  wrapperEl.style.marginTop = (window.innerHeight - videoEl.clientHeight) / 2 + "px";
  el.style.opacity = 1;

  player.playVideo();
};


/**
 * Home Section
 */

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
   playTrailer()
 }, 1000);
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

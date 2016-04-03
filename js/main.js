/**
 * Trailer
 */

var loadYouTubeApi, trailerPlayer, playTrailer, loadFitVids;

var trailerEl = document.getElementById('trailer');
var closeButton = document.getElementById('trailer-close');

trailerEl.style.display = 'none';

loadYouTubeApi = function () {
  var tag = document.createElement('script');
  tag.src = 'https://www.youtube.com/iframe_api';
  var firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
}();

window.onYouTubeIframeAPIReady = function() {
  trailerPlayer = new YT.Player('trailer-player', {
    height: '540',
    width: '960',
    videoId: '0M83z9y3h8w',
    events: {
      'onReady': fitvids
    }
  });
};

playTrailer = function () {
  trailerEl.style.display = null;
  trailerEl.style.opacity = 1;

  trailerPlayer.playVideo();
};

closeTrailer = function (e) {
  e.preventDefault();
  trailerPlayer.stopVideo();

  trailerEl.style.display = 'none';
  trailerEl.style.opacity = 0;
  homeVideo.style.opacity = 1;
  homeVideo.currentTime = '0';
  homeVideo.play();
};

closeButton.addEventListener('click', closeTrailer);


/**
 * Home Section
 */

var homeVideo = document.getElementById('home-video');

homeVideo.addEventListener('ended', onVideoEnded);
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
   homeVideo.style.opacity = 0;
   playTrailer()
 }, 1000);
}

function rewindVideo() {
  var intervalRewind = setInterval(function(){
    homeVideo.playbackRate = 1.0;
    if(homeVideo.currentTime == 0){
        clearInterval(intervalRewind);
        homeVideo.pause();
    }
    else{
        homeVideo.currentTime += -.9;
    }
  },150);
}

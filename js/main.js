/**
 * Trailer
 */

var loadYouTubeApi, trailerPlayer, playTrailer, loadFitVids;

var trailerEl = document.getElementById('trailer');
var closeButton = document.getElementById('trailer-close');

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
  var wrapperEl = document.getElementsByClassName('trailer__wrapper')[0];
  var videoEl = document.getElementById('trailer-player');

  trailerEl.style.display = 'block';
  wrapperEl.style.marginTop = (window.innerHeight - videoEl.clientHeight) / 2 + "px";
  trailerEl.style.opacity = 1;

  trailerPlayer.playVideo();
};

closeTrailer = function (e) {
  e.preventDefault();
  trailerPlayer.stopVideo();

  trailerEl.style.display = 'none';
  trailerEl.style.opacity = '0';
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
   //video.src = '';
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

function initVideosVolume () {
  var videos = document.querySelectorAll('.feature-video');

  Array.prototype.forEach.call(videos, function(video, i){
    video.volume = 0;
    video.addEventListener('mouseenter', function(){
      TweenMax.to(video, 1, {volume: 1});
    });
    video.addEventListener('mouseleave', function(){
      TweenMax.to(video, 1, {volume: 0});
    });

    video.addEventListener('loadeddata', function() {
      console.log(video.offsetWidth);
      //video.style.height = video.offsetWidth + 'px';
    });

    // video.style.height = video.offsetWidth + 'px';
  });
}

function init() {
  initVideosVolume();
}

document.addEventListener('DOMContentLoaded', init);

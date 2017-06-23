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
  });
}


function initLanding () {
  TweenMax.to('.landing-logo', 0.8, {y:0, opacity:1});
  TweenMax.staggerTo('.landing-text span:nth-of-type(1) i', 0.5, {x:0, y:0, opacity:1, rotation: 0, ease: Elastic.easeOut.config(1, 0.5), delay: 0.4}, 0.02);
  TweenMax.staggerTo('.landing-text span:nth-of-type(2) i', 0.5, {x:0, y:0, opacity:1, rotation: 0, ease: Elastic.easeOut.config(1, 0.5), delay: 1.1}, 0.02);
  TweenMax.staggerTo('.landing-text span:nth-of-type(3) i', 0.5, {x:0, y:0, opacity:1, rotation: 0, ease: Elastic.easeOut.config(1, 0.5), delay: 1.8}, 0.02);
  TweenMax.staggerTo('.landing-text span:nth-of-type(4) i', 0.5, {x:0, y:0, opacity:1, rotation: 0, ease: Elastic.easeOut.config(1, 0.5), delay: 2.5}, 0.02);
  TweenMax.to('.landing-btn', 0.8, {y:0, opacity:1, delay: 3.4});
}
function init() {
  initVideosVolume();
  initLanding();
}

document.addEventListener('DOMContentLoaded', init);

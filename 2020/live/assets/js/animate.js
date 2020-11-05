var pathEls = document.querySelectorAll('.path_anim');
for (var i = 0; i < pathEls.length; i++) {
  // Don't animate 40% of lines
  if (Math.random() < .40) {
    continue;
  }
  var pathEl = pathEls[i];
  var offset = anime.setDashoffset(pathEl);
  pathEl.setAttribute('stroke-dashoffset', offset);
  
  // Start half at 100%
  let range = [offset, 0];
  if (Math.random() < .50) {
    range = [0, offset];
  }
 
  anime({
    targets: pathEl,
    strokeDashoffset: range,
    duration: anime.random(1000, 3000),
    delay: anime.random(250, 1000),
    loop: true,
    direction: 'alternate',
    easing: 'easeInOutSine',
    autoplay: true
  });
}
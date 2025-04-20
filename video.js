document.querySelectorAll('.video-container').forEach(container => {
  const video = container.querySelector('video');
  const playBtn = container.querySelector('.play-btn');
  const muteBtn = container.querySelector('.mute-btn');
  const fullscreenBtn = container.querySelector('.fullscreen-btn');

  // Detectar orientación al cargar metadata
  video.addEventListener('loadedmetadata', () => {
    const aspectRatio = video.videoWidth / video.videoHeight;
    if (aspectRatio < 1) {
      container.classList.add('vertical');
    } else {
      container.classList.remove('vertical');
    }
  });

  playBtn.addEventListener('click', () => {
    if (video.paused) {
      video.play();
      playBtn.innerHTML = '&#10074;&#10074;';
    } else {
      video.pause();
      playBtn.innerHTML = '&#9658;';
    }
  });

  muteBtn.addEventListener('click', () => {
    video.muted = !video.muted;
    muteBtn.innerHTML = video.muted ? '&#128266;' : '&#128263;';
  });

  fullscreenBtn.addEventListener('click', () => {
    if (video.requestFullscreen) {
      video.requestFullscreen();
    } else if (video.webkitRequestFullscreen) {
      video.webkitRequestFullscreen();
    } else if (video.mozRequestFullScreen) {
      video.mozRequestFullScreen();
    } else if (video.msRequestFullscreen) {
      video.msRequestFullscreen();
    }
  });
});
const iOSSafari = () => {
  return /iP(ad|od|hone)/i.test(navigator.userAgent) && /WebKit/i.test(navigator.userAgent) && !(/(CriOS|FxiOS|OPiOS|mercury)/i.test(navigator.userAgent));
};

const setHtml5Player = container => {
  const img = container.querySelector('.presentation-image');
  const video = container.querySelector('.presentation-video-html5');

  img.addEventListener('click', e => {
    $(img).fadeOut(600, () => {
      $(video).fadeIn(500, () => {
        video.play();
        const backToImg = () => {
          $(video).fadeOut(400, () => $(img).fadeIn());
          video.pause();
          video.currentTime = 0;
        };
        video.addEventListener('click', backToImg);
        video.addEventListener('ended', backToImg);
      });
    });
  });
};

const setVimeoPlayer = container => {
  const img = container.querySelector('.presentation-image');
  const video = container.querySelector('iframe');
  const player = new Vimeo.Player(video);

  img.addEventListener('click', e => {
    $(img).fadeOut(600, () => {
      $(video).fadeIn(500, () => {
        player.play();
        const backToImg = () => {
          $(video).fadeOut(400, () => $(img).fadeIn());
          player.pause();
          player.setCurrentTime(0);
        };
        player.on('ended', backToImg);
      });
    });
  });
};

document.querySelectorAll('.presentation-col').forEach(col => {
  iOSSafari() ? setVimeoPlayer(col) : setHtml5Player(col);
});

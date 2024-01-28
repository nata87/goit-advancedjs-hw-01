import Vimeo from '@vimeo/player';

import throttle from 'lodash.throttle';

const player = new Vimeo(document.getElementById('vimeo-player'));

const saveCurrentTime = throttle(() => {
  player
    .getCurrentTime()
    .then(currentTime =>
      localStorage.setItem('videoplayer-current-time', currentTime)
    );
}, 1000);

player.on('timeupdate', saveCurrentTime);

const savedTime = localStorage.getItem('videoplayer-current-time');
if (savedTime) {
  player.setCurrentTime(parseFloat(savedTime));
}

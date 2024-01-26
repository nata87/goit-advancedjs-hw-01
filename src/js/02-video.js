import Vimeo from '@vimeo/player';

import throttle from 'throttle';

const player = new Vimeo(document.getElementById('vimeo-player'));

const ls = localStorage.setItem('"videoplayer-current-time"', currentTime);
const currentTime = new Date().getTime();

const saveCurrentTime = throttle(() => {
  player.getCurrentTime().then(currentTime => ls);
}, 1000);

player.on('timeupdate', saveCurrentTime);

document.addEventListener('RestoreContent', () => {
  const savedTime = localStorage.getItem('videoplayer-current-time');
  if (savedTime) {
    player.setCurrentTime(parseFloat(savedTime));
  }
});

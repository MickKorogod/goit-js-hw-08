import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
const iframe = document.querySelector('iframe')
const player = new Player(iframe);

const onPlay = ({ seconds }) => {
    localStorage.setItem("videoplayer-current-time", seconds)
}
const getItem = localStorage.getItem("videoplayer-current-time")
if (getItem) {
    player.setCurrentTime(getItem)
}

player.on('timeupdate', throttle (onPlay, 500))
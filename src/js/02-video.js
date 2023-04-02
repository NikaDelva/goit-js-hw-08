import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
console.log(player)
player.on('play', function() {
        console.log('played the video!');
});

player.getVideoTitle().then(function(title) {
        console.log('title:', title);
});
const onPlay = function(data) {
    console.log(data)
    localStorage.setItem('videoplayer-current-time', data.seconds)
    // data is an object containing properties specific to that event
};
const time = +localStorage.getItem('videoplayer-current-time')
player.setCurrentTime(time || 0);
player.on('timeupdate', throttle('onPlay', 1000));
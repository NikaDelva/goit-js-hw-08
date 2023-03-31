import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
console.log(player)
player.on('play', function() {
        console.log('played the video!');
});

player.getVideoTitle().then(function(title) {
        console.log('title:', title);
});
const onPlay = function (data) {
    cconsole.log(data)
    localStorage.setItem('videoplayer-current-time', data.seconds)
    // data is an object containing properties specific to that event
};

player.on('timeupdate', onPlay);
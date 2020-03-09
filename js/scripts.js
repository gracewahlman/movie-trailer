// https://cdnjs.cloudflare.com/ajax/libs/plyr/3.5.6/plyr.min.js

const player = new Plyr( '#player', {
  
  controls : [ 'play', 'current-time', 'progress' ],
  
  keyboard : { focused: true, global: false },
  
  seekTime : 30

});

console.log( player );
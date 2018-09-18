// load sound
const audio = new Audio('sounds/Roblox-death-sound-effect.mp3');
audio.load();

// container vue instance
new Vue({
  el: '.container',
  data: {
    health: 100,
    ended: false
  },
  methods: {
    punch: function () {
      this.health -= 10;
      if (this.health <= 0) {
        this.ended = true;
        audio.play();
      }
    },
    restart: function () {
      this.health = 100;
      this.ended = false;
    }
  },
  computed: {
    headClasses: function () {
      return {
        head: true,
        rip: this.ended
      };
    }
  }
});
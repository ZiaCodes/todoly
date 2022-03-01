/*
design by Voicu Apostol.
design: https://dribbble.com/shots/3533847-Mini-Music-Player
I can't find any open music api or mp3 api so i have to download all musics as mp3 file.
You can fork on github: https://github.com/muhammederdem/mini-player
*/

new Vue({
    el: "#app",
    data() {
      return {
        audio: null,
        circleLeft: null,
        barWidth: null,
        duration: null,
        currentTime: null,
        isTimerPlaying: false,
        tracks: [
          {
            name: "Say So",
            artist: "Doja Cat",
            cover: "https://i1.sndcdn.com/artworks-9vcy5i8USx6PRORe-IYr9yw-t500x500.jpg",
            source: "https://github.com/ZiaCodes/imge-container/raw/main/music/1.mp3",
            url: "https://www.youtube.com/watch?v=pok8H_KF1FA",
            favorited: false
          },
          {
            name: "【Rainych】 SAY SO",
            artist: "Rainych Ran",
            cover: "https://steamuserimages-a.akamaihd.net/ugc/1305431056810271498/68D2CCC7E3FE5A3BF8C1CED8D5BEAEED323AB999/?imw=512&&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false",
            source: "https://github.com/ZiaCodes/imge-container/raw/main/music/2.mp3",
            url: "https://www.youtube.com/watch?v=EsZbWAqU8xY",
            favorited: true
          },
          {
            name: "Dusk till down",
            artist: "Zyan",
            cover: "https://i1.sndcdn.com/artworks-000330707796-c9xqsh-t500x500.jpg",
            source: "https://github.com/ZiaCodes/imge-container/raw/main/music/3.mp3",
            url: "https://www.youtube.com/watch?v=tt2k8PGm-TI",
            favorited: false
          },
          {
            name: "I Don’t Wanna Live Forever",
            artist: "ZAYN, Taylor Swift ",
            cover: "https://i.pinimg.com/originals/a6/35/65/a635651769c7fcc03c68c353dce9af52.jpg",
            source: "https://github.com/ZiaCodes/imge-container/raw/main/music/4.mp3",
            url: "https://www.youtube.com/watch?v=7F37r50VUTQ",
            favorited: false
          },
          {
            name: "Last Hurrah",
            artist: "Bebe Rexha",
            cover: "https://lastfm.freetls.fastly.net/i/u/770x0/07aa0b0c89617e2f5dcdb5c6198d1614.jpg",
            source: "https://github.com/ZiaCodes/imge-container/raw/main/music/5.mp3",
            url: "https://www.youtube.com/watch?v=fTNnwzXrVdg",
            favorited: true
          },
          {
            name: "Good Life",
            artist: "Kehlani & G-Eazy",
            cover: "https://i.scdn.co/image/ab67616d0000b273fcc36f9c0515e6e7faa2030b",
            source: "https://github.com/ZiaCodes/imge-container/raw/main/music/6.mp3",
            url: "https://www.youtube.com/watch?v=FG9M0aEpJGE",
            favorited: false
          },
          {
            name: "Girls",
            artist: "Rita Ora",
            cover: "https://www.pride.com/sites/default/files/2018/06/06/rita-ora-girls-music-video.jpg",
            source: "https://github.com/ZiaCodes/imge-container/raw/main/music/7.mp3",
            url: "https://www.youtube.com/watch?v=ExJmET8boVw",
            favorited: true
          },
          {
            name: "Black Widow",
            artist: "Iggy Azalea",
            cover: "https://m.media-amazon.com/images/M/MV5BMWY5OWU3NmUtNzM3My00MzA3LTlmMmItZWU4ZWYyZGQ0MWU4XkEyXkFqcGdeQXVyNDE4OTY5NzI@._V1_.jpg",
            source: "https://github.com/ZiaCodes/imge-container/raw/main/music/8.mp3",
            url: "https://www.youtube.com/watch?v=u3u22OYqFGo",
            favorited: false
          },
          {
            name: "No Mediocre",
            artist: "Iggy Azalea",
            cover: "https://i.ytimg.com/vi/qdsTUfDTEhQ/maxresdefault.jpg",
            source: "https://github.com/ZiaCodes/imge-container/raw/main/music/9.mp3",
            url: "https://www.youtube.com/watch?v=qdsTUfDTEhQ",
            favorited: false
          }
        ],
        currentTrack: null,
        currentTrackIndex: 0,
        transitionName: null
      };
    },
    methods: {
      play() {
        if (this.audio.paused) {
          this.audio.play();
          this.isTimerPlaying = true;
        } else {
          this.audio.pause();
          this.isTimerPlaying = false;
        }
      },
      generateTime() {
        let width = (100 / this.audio.duration) * this.audio.currentTime;
        this.barWidth = width + "%";
        this.circleLeft = width + "%";
        let durmin = Math.floor(this.audio.duration / 60);
        let dursec = Math.floor(this.audio.duration - durmin * 60);
        let curmin = Math.floor(this.audio.currentTime / 60);
        let cursec = Math.floor(this.audio.currentTime - curmin * 60);
        if (durmin < 10) {
          durmin = "0" + durmin;
        }
        if (dursec < 10) {
          dursec = "0" + dursec;
        }
        if (curmin < 10) {
          curmin = "0" + curmin;
        }
        if (cursec < 10) {
          cursec = "0" + cursec;
        }
        this.duration = durmin + ":" + dursec;
        this.currentTime = curmin + ":" + cursec;
      },
      updateBar(x) {
        let progress = this.$refs.progress;
        let maxduration = this.audio.duration;
        let position = x - progress.offsetLeft;
        let percentage = (100 * position) / progress.offsetWidth;
        if (percentage > 100) {
          percentage = 100;
        }
        if (percentage < 0) {
          percentage = 0;
        }
        this.barWidth = percentage + "%";
        this.circleLeft = percentage + "%";
        this.audio.currentTime = (maxduration * percentage) / 100;
        this.audio.play();
      },
      clickProgress(e) {
        this.isTimerPlaying = true;
        this.audio.pause();
        this.updateBar(e.pageX);
      },
      prevTrack() {
        this.transitionName = "scale-in";
        this.isShowCover = false;
        if (this.currentTrackIndex > 0) {
          this.currentTrackIndex--;
        } else {
          this.currentTrackIndex = this.tracks.length - 1;
        }
        this.currentTrack = this.tracks[this.currentTrackIndex];
        this.resetPlayer();
      },
      nextTrack() {
        this.transitionName = "scale-out";
        this.isShowCover = false;
        if (this.currentTrackIndex < this.tracks.length - 1) {
          this.currentTrackIndex++;
        } else {
          this.currentTrackIndex = 0;
        }
        this.currentTrack = this.tracks[this.currentTrackIndex];
        this.resetPlayer();
      },
      resetPlayer() {
        this.barWidth = 0;
        this.circleLeft = 0;
        this.audio.currentTime = 0;
        this.audio.src = this.currentTrack.source;
        setTimeout(() => {
          if(this.isTimerPlaying) {
            this.audio.play();
          } else {
            this.audio.pause();
          }
        }, 300);
      },
      favorite() {
        this.tracks[this.currentTrackIndex].favorited = !this.tracks[
          this.currentTrackIndex
        ].favorited;
      }
    },
    created() {
      let vm = this;
      this.currentTrack = this.tracks[0];
      this.audio = new Audio();
      this.audio.src = this.currentTrack.source;
      this.audio.ontimeupdate = function() {
        vm.generateTime();
      };
      this.audio.onloadedmetadata = function() {
        vm.generateTime();
      };
      this.audio.onended = function() {
        vm.nextTrack();
        this.isTimerPlaying = true;
      };
  
      // this is optional (for preload covers)
      for (let index = 0; index < this.tracks.length; index++) {
        const element = this.tracks[index];
        let link = document.createElement('link');
        link.rel = "prefetch";
        link.href = element.cover;
        link.as = "image"
        document.head.appendChild(link)
      }
    }
  });
/*
design by Voicu Apostol.
design: https://dribbble.com/shots/3533847-Mini-Music-Player
Connect with him : 
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
          },
          {
            name: "End Game",
            artist: "Taylor Swift ft. Ed Sheeran",
            cover: "https://images.genius.com/d6eba083b40fcec8b16ab1b4489fe057.1000x1000x1.png",
            source: "https://github.com/ZiaCodes/imge-container/raw/main/music/10.mp3",
            url: "https://www.youtube.com/watch?v=dfnCAmr569k",
            favorited: false
          },
          {
            name: "Sweet but Psycho",
            artist: "Ava Max",
            cover: "https://i1.sndcdn.com/artworks-000563995928-ysk5x2-t500x500.jpg",
            source: "https://github.com/ZiaCodes/imge-container/raw/main/music/11.mp3",
            url: "https://www.youtube.com/watch?v=WXBHCQYxwr0",
            favorited: false
          },
          {
            name: "let her go",
            artist: "Passanger",
            cover: "https://lyricsservice.com/wp-content/uploads/2021/05/Let-Her-Go-Lyrics-Passenger.jpg",
            source: "https://github.com/ZiaCodes/imge-container/raw/main/music/12.mp3",
            url: "https://www.youtube.com/watch?v=RBumgq5yVrA",
            favorited: false
          },
          {
            name: "Symphony",
            artist: "Clean Bandit ft. Zara Larsson",
            cover: "https://www.cevirce.com/en/translate/wp-content/uploads/2021/05/clean-bandit-feat.-zara-larsson-symphony-lyrics-1.jpg",
            source: "https://github.com/ZiaCodes/imge-container/raw/main/music/13.mp3",
            url: "https://www.youtube.com/watch?v=aatr_2MstrI",
            favorited: false
          },
          {
            name: "Lush Life",
            artist: "Zara Larsson",
            cover: "https://s.mxmcdn.net/images-storage/albums4/6/9/1/7/2/3/34327196_800_800.jpg",
            source: "https://github.com/ZiaCodes/imge-container/raw/main/music/14.mp3",
            url: "https://www.youtube.com/watch?v=tD4HCZe-tew",
            favorited: false
          },
          {
            name: "Ain't My Fault",
            artist: "Zara Larsson",
            cover: "https://m.media-amazon.com/images/M/MV5BODM0NWQ3ZTQtMjZlNC00YmM1LWIwN2EtYmQ3ZDgzNjU5MWUwXkEyXkFqcGdeQXVyNjE0ODc0MDc@._V1_.jpg",
            source: "https://github.com/ZiaCodes/imge-container/raw/main/music/15.mp3",
            url: "https://www.youtube.com/watch?v=eC-F_VZ2T1c",
            favorited: false
          },
          {
            name: "lovely",
            artist: "Billie Eilish, Khalid",
            cover: "https://i1.sndcdn.com/artworks-000601496665-j6jmfd-t500x500.jpg",
            source: "https://github.com/ZiaCodes/imge-container/raw/main/music/16.mp3",
            url: "https://www.youtube.com/watch?v=V1Pl8CzNzCw",
            favorited: false
          },
          {
            name: "Same Old Love",
            artist: "Selena Gomez",
            cover: "https://a3-images.myspacecdn.com/images04/6/3da892b19c794bd9ab330798272541bd/600x600.jpg",
            source: "https://github.com/ZiaCodes/imge-container/raw/main/music/17.mp3",
            url: "https://www.youtube.com/watch?v=9h30Bx4Klxg",
            favorited: false
          },
          {
            name: "Scared To Be Lonely ",
            artist: "Martin Garrix & Dua Lipa",
            cover: "https://i1.sndcdn.com/artworks-000237422778-zflh0p-t500x500.jpg",
            source: "https://github.com/ZiaCodes/imge-container/raw/main/music/18.mp3",
            url: "https://www.youtube.com/watch?v=e2vBLd5Egnk",
            favorited: false
          },
          {
            name: "Positions ",
            artist: "Ariana Grande",
            cover: "https://pics.filmaffinity.com/Ariana_Grande_Positions_Music_Video-836341494-large.jpg",
            source: "https://github.com/ZiaCodes/imge-container/raw/main/music/19.mp3",
            url: "https://youtu.be/tcYodQoapMg",
            favorited: false
          },
          {
            name: "Ciao Adios",
            artist: "Anne-Marie",
            cover: "https://lineimg.omusic.com.tw/img/album/1314872.jpg?v=20210605113218",
            source: "https://github.com/ZiaCodes/imge-container/raw/main/music/20.mp3",
            url: "https://www.youtube.com/watch?v=qqob4D3BoZc",
            favorited: false
          },
          {
            name: "WAP feat. Megan Thee Stallion",
            artist: "Cardi B",
            cover: "https://pbs.twimg.com/media/EeoW7dVWAAA1ji4.jpg",
            source: "https://github.com/ZiaCodes/imge-container/raw/main/music/22.mp3",
            url: "https://www.youtube.com/watch?v=hsm4poTWjMs",
            favorited: false
          },
          {
            name: "Bloodstream",
            artist: "Ed Sheeran",
            cover: "https://i.scdn.co/image/ab67616d0000b27392b94e4a90718a1e532ea91a",
            source: "https://github.com/ZiaCodes/imge-container/raw/main/music/21.mp3",
            url: "https://www.youtube.com/watch?v=XIJHg1XWR7o",
            favorited: false
          },
          {
            name: "I Like It",
            artist: "Cardi B, Bad Bunny & J Balvin",
            cover: "https://i.scdn.co/image/ab67616d0000b27337422e424f7e93330acc5719",
            source: "https://github.com/ZiaCodes/imge-container/raw/main/music/23.mp3",
            url: "https://www.youtube.com/watch?v=xTlNMmZKwpA",
            favorited: false
          },
          {
            name: "New Rules",
            artist: "Dua Lipa ",
            cover: "https://i.pinimg.com/736x/37/f4/a0/37f4a056a9d332c5e2098a29a73c0579.jpg",
            source: "https://github.com/ZiaCodes/imge-container/raw/main/music/24.mp3",
            url: "youtube.com/watch?v=k2qgadSvNyU",
            favorited: false
          },
          {
            name: "Without Me",
            artist: "Halsey",
            cover: "https://i.ytimg.com/vi/oqmK3xLXw9c/maxresdefault.jpg",
            source: "https://github.com/ZiaCodes/imge-container/raw/main/music/25.mp3",
            url: "https://www.youtube.com/watch?v=ZAfAud_M_mg",
            favorited: false
          },
          {
            name: "PUBLIC - Make You Mine",
            artist: "PUBLICTHEBAND",
            cover: "https://assets.charmboard.com/images/w_1920,h_1080/x_241,y_134,w_1438,h_812,c_crop,f_auto,q_auto/h_541/v1591205439930/im/lc/2140145/ashley-puzemis-in-make-you-mine-publictheband-2019.jpg",
            source: "https://github.com/ZiaCodes/imge-container/raw/main/music/26.mp3",
            url: "https://youtu.be/nLnp0tpZ0ok",
            favorited: true
          },
          {
            name: "Happier",
            artist: "Marshmello ft. Bastille",
            cover: "https://virtualpiano.net/wp-content/uploads/2020/08/Happier-%E2%80%93-Marshmello-Best-Online-Piano-Keyboard-Virtual-Piano.jpg",
            source: "https://github.com/ZiaCodes/imge-container/raw/main/music/27.mp3",
            url: "https://youtu.be/m7Bc3pLyij0",
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

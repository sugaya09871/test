import $ from 'jquery';

export default class YouTube {

  constructor() {
    let tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";
    let firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
  }

  play(val){

    let ytplay = [];

    window.onYouTubeIframeAPIReady = function () {
      for(let i = 0; i < val.length; i++) {
        console.log(val[i]['area']);
        ytplay[i] = new YT.Player(val[i]['area'], {
          videoId: val[i]['id'],
          playerVars: {
            controls: 0,
            showinfo: 0,
            playsinline: 1,
            rel: 0
          },
          events: {
            'onReady': onPlayerReady
          }
        });
      }
    };

    for(let i = 0; i < val.length; i++) {
      function onPlayerReady(event) {
        if (autoPlay === "on") {
          ytplay[i].playVideo(event);
        }
      }
    }

  }

}

// function YouTube() {
//   let tag = document.createElement('script');
//   tag.src = "https://www.youtube.com/iframe_api";
//   let firstScriptTag = document.getElementsByTagName('script')[0];
//   firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
// }

// YouTube.prototype.play = function(id,target,auto){
//
//   this.id = id;
//   this.auto = auto;
//   this.target = target;
//
//   let videoId = this.id;
//   let autoPlay = this.auto;
//   let targetVal = {};
//   targetVal[0] = target;
//
//   window.onYouTubeIframeAPIReady = function () {
//     alert(targetVal[0]);
//     targetVal[0] = new YT.Player(targetVal[0], {
//       videoId: videoId,
//       playerVars: {
//         controls: 0,
//         showinfo: 0,
//         playsinline: 1,
//         rel: 0
//       },
//       events: {
//         'onReady': onPlayerReady
//       }
//     });
//
//   };
//
//   function onPlayerReady(event) {
//     if(autoPlay === "on"){
//       targetVal[0].playVideo(event);
//     }
//   }
//
// };


// let youtube1 = new YouTube();
// let youtube2 = new YouTube();
//
// youtube1.play('PX7K3ofYpM','movie2','off');
// youtube2.play('PX7K3ofYpM','movie3','on');

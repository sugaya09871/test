import $ from 'jquery';

export default class YouTube {

  constructor(...arr) {
    this.idName = arr;
    this.idNameNam = this.idName.length;
  }

  set() {

    let tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";
    let firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    window.onYouTubeIframeAPIReady = () => {

      for (let i = 0; i < this.idNameNam; i++) {

        this.youtubeId = $('#' + this.idName[i]).attr('youtube-id');

        this.idName[i] = new YT.Player(this.idName[i], {
          videoId: this.youtubeId,
          playerVars: {
            controls: 1,
            showinfo: 1,
            playsinline: 0,
            rel: 0,
            modestbranding: 1
          },
          // events: {
          //   'onStateChange' : onPlayerStateChange,
          //   'onReady': onPlayerReady
          // }
        });
      }

    };

  }


}
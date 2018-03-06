import $ from 'jquery';
import anime from 'animejs';

export default class onePageScroll{

  constructor(className, breakPoint){
    this.border = 0;
    this.className = className;
    this.point = breakPoint;
  }

//ウィンドウの高さを取得
  getWindowHeight(){
    this.height = $(window).height();
    return this.height;
  }

//ウィンドウの横幅を取得
  getWindowWidth(){
    this.width = $(window).width();
    return this.width;
  }

//スクロールの値を取得
  getScrollTop(){
    this.scroll = $(window).scrollTop();
    return this.scroll;
  }

//ヘッダーの高さを取得
  getHeaderHeight(){
    this.headerHeight = $('header').height();
    return this.headerHeight;
  }

//コンテンツの始まりの値を取得
  getStartContent(){
    this.contentTop = $(this.className).offset().top;
    return this.contentTop;
  }

//コンテンツの高さの値を取得
  getContentHeight(){
    this.contentTop = $(this.className).height();
    return this.contentTop;
  }

  set(){
    console.log('getStartContent' + this.getStartContent());
    console.log('getScrollTop' + this.getScrollTop());
    console.log('animationFlag' + this.animationFlag);
    console.log('endAnimation' + this.endAnimation);
    console.log('getContentHeight' + this.getContentHeight());
    console.log('getScrollTop' + this.getScrollTop());
    console.log('getHeaderHeight' + this.getHeaderHeight());

    if (this.getStartContent() < this.getScrollTop() && !this.animationFlag && !this.endAnimation) {
      this.animationFlag = true;
      anime({
        targets: ['html','body'],
        scrollTop: this.getContentHeight() + this.getHeaderHeight(),
        duration: 600,
        easing: 'easeInQuint',
        complete: () => {
          this.endAnimation = true;
          this.border = this.getScrollTop();
          return false;
        }
      });
    };

    if(this.border > this.getScrollTop() && this.animationFlag && this.endAnimation) {
      this.animationFlag = false;
      anime({
        targets: ['html','body'],
        scrollTop: this.getStartContent(),
        duration: 600,
        easing: 'easeInQuint',
        complete: () => {
          this.endAnimation = false;
          return false;
        }
      });
    };

  }




  //   $('.arrow').click(function () {
  //
  //   let height = $(window).height();
  //   let scroll = $('#js-onePage').offset().top - 60;
  //
  //   animationFlag = true;
  //   anime({
  //     targets: ['html', 'body'],
  //     scrollTop: scroll,
  //     duration: 600,
  //     easing: 'easeInQuint',
  //     complete: function () {
  //       endFlag = true;
  //       border = height - 60;
  //     }
  //   });
  //   return false;
  //
  // }







}



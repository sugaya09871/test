import $ from 'jquery';
import anime from 'animejs';

export default class onePageScroll{

  constructor(targetClass, breakPoint){
    this.border = 0;
    this.ofset = 0;
    this.animationFlag = false;
    this.endAnimation = false;
    this.target = targetClass;
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
    this.contentTop = $(this.target).offset().top;
    return this.contentTop;
  }

//コンテンツの高さの値を取得
  getContentHeight(){
    this.contentTop = $(this.target).height();
    return this.contentTop;
  }


  responsive(){

    if (this.getStartContent() < this.getScrollTop() && !this.animationFlag && !this.endAnimation) {
      this.animationFlag = true;
      this.border = this.getScrollTop();
      anime({
        targets: ['html','body'],
        scrollTop: this.getContentHeight() + this.border,
        duration: 600,
        easing: 'easeInQuint',
        complete: () => {
          this.endAnimation = true;
          this.border = this.getScrollTop();
        }
      });
    };

    if(this.border > this.getScrollTop() &&  this.animationFlag && this.endAnimation) {
      this.animationFlag = false;
      anime({
        targets: ['html','body'],
        scrollTop: this.getStartContent(),
        duration: 600,
        easing: 'easeInQuint',
        complete: () => {
          this.endAnimation = false;
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



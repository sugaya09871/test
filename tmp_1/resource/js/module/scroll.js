import $ from 'jquery';
import anime from 'animejs';


export default class Scroll{

  constructor(){
    this.$window = $(window);
    this.$topBtn = $('.scrollTop');
    this.$ancBtn = $('a[href^="#"]');
    this.Top = 0;
    this.fadeInValue = 100;
    this.scrollSpeed = 1000;
  }

  fadeInOut(){
    if ($(window).scrollTop() > this.fadeInValue) {
      this.$topBtn.fadeIn();
    } else {
      this.$topBtn.fadeOut();
    }
    this.$window.scroll( ()=>{
      if ($(window).scrollTop() > this.fadeInValue) {
        this.$topBtn.fadeIn();
      } else {
        this.$topBtn.fadeOut();
      }
    });
  }

  top(){
    this.$topBtn.click( ()=>{
      anime({
        targets: ['html','body'],
        scrollTop: this.Top,
        duration: this.scrollSpeed,
        easing: 'easeInOutQuart'
      });
    });
    this.fadeInOut();
  }

  anchor(){
    this.$ancBtn.click( ()=>{
      let href = this.$ancBtn.attr("href");
      let target = $(href == "#" || href == "" ? 'html' : href);
      let position = target.offset().top;
      anime({
        targets: ['html','body'],
        scrollTop: position,
        duration: this.scrollSpeed,
        easing: 'easeInOutQuart'
      });
      return false;
    });

  }

}

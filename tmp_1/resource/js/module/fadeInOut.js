import $ from 'jquery';
import anime from 'animejs';


export default class FadeInOut{

  constructor(className,border){
    this.$window = $(window);
    this.className = className;
    this.fadeInValue = border;
  }

  set(){
    if ($(window).scrollTop() > this.fadeInValue) {
      $(this.className).fadeIn();
    } else {
      $(this.className).fadeOut();
    }
  }

}

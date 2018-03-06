import $ from 'jquery';
import anime from 'animejs';


export default class Scroll{

  constructor(){
    this.$window = $(window);
    this.$ancBtn = $('a[href^="#"]');
    this.Top = 0;
    this.scrollSpeed = 1000;
  }

  top(className){
    $(className).click( ()=>{
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

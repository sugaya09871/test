import $ from 'jquery';

export default class slideShow{

  constructor(){
    this.count = 2;
    this.slideNum = false;
  }

  slide(){

    if(count <= this.slideNum){
      
    }
  }

  $(window).focus();
  var count1 = 2;
  var count2 = 2;

  function item1(){
    if (count1 <= 4) {
      $('.sec4_item1_large').fadeOut();
      $('.sec4_item1_img .img_large' + count1).fadeIn();
      $('.sec4_item1_img .sec4_item_min').removeClass('is-active');
      $('.sec4_item1_img .img_thum' + count1).addClass('is-active');
      count1++;
    } else {
      count1 = 1;
      $('.sec4_item1_large').fadeOut();
      $('.sec4_item1_img .img_large' + count1).fadeIn();
      $('.sec4_item1_img .sec4_item_min').removeClass('is-active');
      $('.sec4_item1_img ul .img_thum' + count1).addClass('is-active');
      count1++;
    }
  }

  function item2(){
    if (count2 <= 4) {
      $('.sec4_item2_large').fadeOut();
      $('.sec4_item2_img .img_large' + count2).fadeIn();
      $('.sec4_item2_img .sec4_item_min').removeClass('is-active');
      $('.sec4_item2_img .img_thum' + count2).addClass('is-active');
      count2++;
    } else {
      count2 = 1;
      $('.sec4_item2_large').fadeOut();
      $('.sec4_item2_img .img_large' + count2).fadeIn();
      $('.sec4_item2_img .sec4_item_min').removeClass('is-active');
      $('.sec4_item2_img ul .img_thum' + count2).addClass('is-active');
      count2++;
    }
  }

  $(window).bind("focus",function(){
    clearInterval(sec4_item1_large);
    clearInterval(sec4_item2_large);
    sec4_item1_large = setInterval(item1, 3000);
    sec4_item2_large = setInterval(item2, 3000);
  }).bind("blur",function(){
    clearInterval(sec4_item1_large);
    clearInterval(sec4_item2_large);
  });

  $('.sec4_item1_img .sec4_item_min').click(function(){
    clearInterval(sec4_item1_large);
  });

  $('.sec4_item2_img .sec4_item_min').click(function(){
    clearInterval(sec4_item2_large);
  });

  $('.sec4_item_min').click(function(){
    var imgNo = $(this).attr('data-img');
    var imgLarge = $(this).parent().prevAll();
    var imgresult = $(this).parents('div').attr('class');
    if($(this).hasClass('is-active')){
      return false;
    }else{
      $(imgLarge).fadeOut();
      $( '.' + imgresult + ' .img_large' + imgNo).fadeIn();
      $(this).prevAll().removeClass('is-active');
      $(this).nextAll().removeClass('is-active');
      $(this).addClass('is-active');
    }
  });

  sec4_item1_large = setInterval(item1, 3000);
  sec4_item2_large = setInterval(item2, 3000);




}









$(function () {


  var count1 = 2;
  var count2 = 2;

  $(window).focus();

  function item1(){
    if (count1 <= 4) {
      $('.sec4_item1_large').fadeOut();
      $('.sec4_item1_large_box .img_large' + count1).fadeIn();
      $('.sec4_item1_min_box .sec4_item_min').removeClass('is-active');
      $('.sec4_item1_min_box .img_thum' + count1).addClass('is-active');
      count1++;
    } else {
      count1 = 1;
      $('.sec4_item1_large').fadeOut();
      $('.sec4_item1_large_box .img_large' + count1).fadeIn();
      $('.sec4_item1_min_box .sec4_item_min').removeClass('is-active');
      $('.sec4_item1_min_box .img_thum' + count1).addClass('is-active');
      count1++;
    }
  }

  function item2(){
    if (count2 <= 4) {
      $('.sec4_item2_large').fadeOut();
      $('.sec4_item2_large_box .img_large' + count2).fadeIn();
      $('.sec4_item2_min_box .sec4_item_min').removeClass('is-active');
      $('.sec4_item2_min_box .img_thum' + count2).addClass('is-active');
      count2++;
    } else {
      count2 = 1;
      $('.sec4_item2_large').fadeOut();
      $('.sec4_item2_large_box .img_large' + count2).fadeIn();
      $('.sec4_item2_min_box .sec4_item_min').removeClass('is-active');
      $('.sec4_item2_min_box .img_thum' + count2).addClass('is-active');
      count2++;
    }
  }

  sec4_item1_large = setInterval(item1, 3000);
  sec4_item2_large = setInterval(item2, 3000);

  $(window).bind("focus",function(){
    clearInterval(sec4_item1_large);
    clearInterval(sec4_item2_large);
    sec4_item1_large = setInterval(item1, 3000);
    sec4_item2_large = setInterval(item2, 3000);
  }).bind("blur",function(){
    clearInterval(sec4_item1_large);
    clearInterval(sec4_item2_large);
    return false;
  });

  $('.sec4_item1_min_box .sec4_item_min').click(function(){
    clearInterval(sec4_item1_large);
    return false;
  });

  $('.sec4_item2_min_box .sec4_item_min').click(function(){
    clearInterval(sec4_item2_large);
    return false;
  });

  $('.sec4_item_min').click(function(){

    var imgNo = $(this).attr('data-img');
    var imgLarge = $(this).parent().parent().prev().children();
    var imgresult = $(this).parent().parent().prev().attr('class');

    if($(this).hasClass('is-active')){
      return false;
    }else{
      $(imgLarge).fadeOut();
      $( '.' + imgresult + ' .img_large' + imgNo).fadeIn();
      $(this).prevAll().removeClass('is-active');
      $(this).nextAll().removeClass('is-active');
      $(this).addClass('is-active');
      return false;
    }
  });


});
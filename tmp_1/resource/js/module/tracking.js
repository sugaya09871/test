import $ from 'jquery';

// nameClassに設定したいクラス名
// actionにclickなどのアクション名
// valueにdeviceなどを入れる
//html側には「data-category」と「data-label」に送りたい値を設置

export default class tracking{

  constructor(nameClass,action,value){
    this.category = false;
    this.label = false;
    this.name = nameClass;
    this.action = action;
    this.value = value;
  }

  set(){
    $(this.name).on('click',()=>{

      this.category = $(this).attr('data-category');
      this.label = $(this).attr('data-label');

      ga('send','event',
          {
            'eventCategory': this.category,
            'eventAction': this.action,
            'eventLabel': this.label,
            'eventValue': this.value
          });
    });
  }

}


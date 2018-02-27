import $ from 'jquery';

//nameClassに画面の高さを設定したいクラスをセット
//breakPointにブレイクポイントをセット

export default class setHeight {

  constructor(breakPoint = false) {
    this.point = breakPoint;
  }

//ヘッダーの高さを取得
  getHeaderHeight(){
    this.headerHeight = $('header').height();
    return this.headerHeight;
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

//指定のクラスに高さを指定
  set(targetClass){
    this.target = targetClass;
    $(this.target).css('height', this.getWindowHeight() - this.getHeaderHeight());
  }

//レスポンシブ時
  responsive(targetClass) {
    this.target = targetClass;
    $(this.target).css('height', this.getWindowHeight() - this.getHeaderHeight());
  }

//PCだけにしたい場合（ブレイクポイントは任意）
  pcOnly(targetClass){
    this.target = targetClass;
    if(this.point){
      if(this.point <= this.getWindowWidth()){
        $(this.target).css('height', this.getWindowHeight() - this.getHeaderHeight());
      }else{
        $(this.target).css('height','');
      }
    }else{
      alert("ブレイクポイントが設定されていません。");
      return false;
    }
  }

//SPだけにしたい場合（ブレイクポイントは任意）
  spOnly(targetClass){
    this.target = targetClass;
    if(this.point) {
      if (this.point >= this.getWindowWidth()) {
        $(this.target).css('height', this.getWindowHeight() - this.getHeaderHeight());
      } else {
        $(this.target).css('height', '');
      }
    }else{
      alert("ブレイクポイントが設定されていません。");
      return false;
    }
  }

}






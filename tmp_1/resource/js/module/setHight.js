import $ from 'jquery';

//nameClassに画面の高さを設定したいクラスをセット
//breakPointにブレイクポイントをセット

export default class setHeight {

  constructor(className , breakPoint = false) {
    this.point = breakPoint;
    this.className = className;
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
  set(){
    $(this.className).css('height', this.getWindowHeight() - this.getHeaderHeight());
  }

//レスポンシブ時
  responsive() {
    $(this.className).css('height', this.getWindowHeight() - this.getHeaderHeight());
  }

//PCだけにしたい場合（ブレイクポイントは任意）
  pcOnly(targetClass){
    this.className = targetClass;
    if(this.point){
      if(this.point <= this.getWindowWidth()){
        $(this.className).css('height', this.getWindowHeight() - this.getHeaderHeight());
      }else{
        $(this.className).css('height','');
      }
    }else{
      alert("ブレイクポイントが設定されていません。");
      return false;
    }
  }

//SPだけにしたい場合（ブレイクポイントは任意）
  spOnly(targetClass){
    this.className = targetClass;
    if(this.point) {
      if (this.point >= this.getWindowWidth()) {
        $(this.className).css('height', this.getWindowHeight() - this.getHeaderHeight());
      } else {
        $(this.className).css('height', '');
      }
    }else{
      alert("ブレイクポイントが設定されていません。");
      return false;
    }
  }

}






import $ from 'jquery';

//ブレイクポイントでリダイレクト（その場合ロード時とリサイズ時に発火させる）
//ロード時にユーザーエージェントでリダイレクト

export default class Redirect{

  constructor(breakPoint = false) {
    this.useragent = window.navigator.userAgent;
    this.href = window.location.href;
    this.point = breakPoint;
  }

//ユーザーエージェントからデバイスを判別
  judgDevice(){
    if(this.useragent.indexOf('iPhone') > 0 || this.useragent.indexOf('iPod') > 0 || this.useragent.indexOf('Android') > 0 || this.useragent.indexOf('Mobile') > 0){
      return "sp";
    }else if(this.useragent.indexOf('iPad') > 0 || this.useragent.indexOf('Android') > 0){
      return "sp";
    }else{
      return "pc";
    }
  }

//spの文字がurlにあるかどうかチェック
  checkSpell(){
    return this.href.indexOf('sp/') >= 0;
  }

//ウィンドウの横幅を取得
  getWindowWidth(){
    this.width = $(window).width();
    return this.width;
  }

//spの文字を追加して、リダイレクト
  removeSpell(){
    let replaceHref;
    replaceHref = this.href.replace('sp/', '');
    location.href = replaceHref;
  }

//spの文字を削除して、リダイレクト
  addSpell(){
    let pathname;
    pathname = location.pathname;
    location.href = './sp' + pathname;
  }

//ユーザーエージェントでリダイレクトを判断
  ua(){
    //PCで、URLにsp/が付いてる場合
    if(this.judgDevice() === "pc" && this.checkSpell()){
      this.removeSpell();
    }
    //spで、URLにsp/が付いてない場合
    if (this.judgDevice() === "sp" && !this.checkSpell()) {
      this.addSpell();
    }
  }

// ブレイクポイントでリダイレクトを判断
  bp(){
    if(this.point) {
      if (this.point <= this.getWindowWidth()) {
        //ブレイクポイント以上(PC)の場合
        if (this.checkSpell()) {
          //spが付いていれば
          this.removeSpell();
          return false;
        }
      } else {
        //ブレイクポイント以下(SP)の場合
        if (!this.checkSpell()) {
          //spが付いていなければ
          this.addSpell();
          return false;
        }
      }
    }else{
      alert('ブレイクポイントが設定されていません。');
    }
  }

}




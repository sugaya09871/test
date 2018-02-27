//モジュールの読み込み
import Redirect from './module/redirect';
import Tracking from './module/tracking';
import SetHeight from './module/setHight';
import OnePageScroll from './module/onePageScroll';

//インスタンスの生成
const redirect = new Redirect('767');
const tracking1 = new Tracking('.js-tracking1','click','device');
const tracking2 = new Tracking('.js-tracking2','click','device');
const setHeight = new SetHeight('767');
const onepagescroll = new OnePageScroll('.tracking');

//ロードしたら実行
window.addEventListener('load', ()=>{
  setHeight.set(".setheight");
  redirect.ua();
  tracking1.set();
  tracking2.set();
},false);

//リサイズしたら実行
window.addEventListener('resize', ()=>{
  setHeight.responsive (".setheight");
},false);

//スクロールしたら実行
window.addEventListener('scroll', ()=>{
  onepagescroll.responsive();
},false);
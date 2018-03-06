//モジュールの読み込み
import Redirect from './module/redirect';
import Tracking from './module/tracking';
import SetHeight from './module/setHight';
import OnePageScroll from './module/onePageScroll';
import YouTube from './module/youtube';

//インスタンスの生成
const redirect = new Redirect('767');
const tracking1 = new Tracking('.js-tracking1','click','device');
const tracking2 = new Tracking('.js-tracking2','click','device');
const setHeight = new SetHeight(".setheight",'767');
const onepagescroll = new OnePageScroll('.setheight');

const youtube = new YouTube('player1','player2','player3');


//ロードしたら実行
window.addEventListener('load', ()=>{
  setHeight.set();
  redirect.ua();
  tracking1.set();
  tracking2.set();
  youtube.set();
},false);

//リサイズしたら実行
window.addEventListener('resize', ()=>{
  setHeight.responsive ();
},false);

//スクロールしたら実行
window.addEventListener('scroll', ()=>{
  onepagescroll.set();
},false);
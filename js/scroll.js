//htmlの幅 - スクロールバーを除くビューポートの幅とすることで､画面右端に移動します｡アニメーション無し｡
let scrollWidth = Math.max(
  document.body.scrollWidth, document.documentElement.scrollWidth,
  document.body.offsetWidth, document.documentElement.offsetWidth,
  document.body.clientWidth
);

scrollTo(scrollWidth - document.documentElement.clientWidth, 0);

//そのままhtmlの幅を渡すだけでも動作します。
scrollTo(scrollWidth, 0);

//scrollToのオプション機能を活用し､スムーズに画面右端に移動｡
//しかし対応ブラウザが非常に少なく、使えるようになるにはもう少しかかります。
scrollTo({top: 0, left: scrollWidth, behavior: "smooth"});
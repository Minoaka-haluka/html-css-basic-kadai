// ハンバーガーメニュー
var hamburger = $('.hamburger-menu');

// OPEN/CLOSEボタンをクリックしたら
$('.hamburger-button').on('click', function () {
  // .hamburgerの表示・非表示を繰り返す
  hamburger.toggleClass('hamburger-menu-active')
  ;  
});

var box = $('.box');

$('.my-button-in').on('click', function() {
  hamburger-menu-list.fadeIn();
});

// 画面幅のサイズが変わったら
$(window).on('resize', function () {

  // ハンバーガーメニューを閉じる
  hamburger.removeClass('hamburger-menu-active');
});

// カルーセル
$('.cover-slick').slick({
  autoplay: true, // 自動再生
  autoplaySpeed: 5000, // 自動再生の速さ、単位はミリ秒
  arrows: false, // 左右のナビゲーションを無効
  dots: true, // ドットを表示
  fade: true, // フェードで切り替え
});

// タブ
$('#smarttab').smartTab({
  enableUrlHash: false, // タブidにもとづいたURLハッシュの付与を無効
  autoAdjustHeight: false, // 高さの自動調整を無効化
});


// 3つの特色（左から）
$('.js-fadein-left').waypoint({
  handler: function(direction) {
    // 要素が画面中央に来るとここが実行される
    if (direction === 'down') {
      /**
       * 下方向のスクロール
       * イベント発生元の要素に
       * fadeInLeftアニメーションを付けることで
       * アニメーションを開始
       */
      $(this.element)
        .addClass('animate__fadeInLeft');
    }
  },

  // 要素が画面中央に来たらhandlerを実行
  offset: '50%',
});

// 3つの特色（右から）
$('.js-fadein-right').waypoint({
  handler: function(direction) {
    // 要素が画面中央に来るとここが実行される
    if (direction === 'down') {
      /**
       * 下方向のスクロール
       * イベント発生元の要素に
       * fadeInLeftアニメーションを付けることで
       * アニメーションを開始
       */
      $(this.element)
        .addClass('animate__fadeInRight');
    }
  },

  // 要素が画面中央に来たらhandlerを実行
  offset: '50%',
});

// アコーディオンのタイトルがクリックされたら
$('.accordion-title').on('click', function(e) {

  // .accordion-contentを選択
  var content = $(this).next();

  // .accordion-contentを表示・非表示
  content.slideToggle();

  // タイトルにopenクラスを付け外しして矢印の向きを変更
  $(this).toggleClass("open", 300);
  
});


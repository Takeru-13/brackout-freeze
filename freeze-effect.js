const btn = document.getElementById('pushun-btn');
const body = document.body;
const laserLayer = document.getElementById('laser-layer');

btn.addEventListener('click', () => {
  // 一度リセット
  body.classList.remove('pushed', 'fadeout');
  laserLayer.classList.remove('active', 'crt-fx', 'shrink');

  // 0.1秒後、黒幕とクロス線出現・内容フェード
  setTimeout(() => {
    body.classList.add('pushed');
    laserLayer.classList.add('active');
    // 0.08秒後、クロス線収束
    setTimeout(() => {
      laserLayer.classList.add('crt-fx');
      // 0.13秒後、クロス線消滅
      setTimeout(() => {
        laserLayer.classList.add('shrink');
        // 0.19秒後、全体フェードアウト
        setTimeout(() => {
          body.classList.add('fadeout');
          // 1.2秒後、自動リセット
          setTimeout(() => {
            body.classList.remove('pushed', 'fadeout');
            laserLayer.classList.remove('active', 'crt-fx', 'shrink');
          }, 1200);
        }, 190);
      }, 130);
    }, 80);
  }, 100);
});

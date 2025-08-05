window.addEventListener("DOMContentLoaded", () => {
  const freezeFx = document.getElementById("freeze-fx");
  const freezeBar = document.getElementById("freeze-bar");
  const freezeBarVertical = document.getElementById("freeze-bar-vertical");
  const mainContent = document.getElementById("main-content");

  // 1. 一瞬で中央横線にギュッと収縮
  freezeFx.classList.add("shrink");

  // 収縮開始と同時に背景を黒に
  document.body.style.background = "#000";
  freezeFx.style.background = "#000";

  // 2. 収縮完了後、横線バー＋縦グロー表示
  setTimeout(() => {
    freezeBar.classList.add("show");
    freezeBarVertical.classList.add("show");
  }, 250); // 収縮アニメの時間に合わせる

  // 3. 横線・縦線をすばやく消して本体へ
  setTimeout(() => {
    freezeBar.classList.remove("show");
    freezeBarVertical.classList.remove("show");
    setTimeout(() => {
      freezeFx.style.display = "none";
      mainContent.style.display = "flex";
      document.body.style.overflow = "auto";
    }, 180); // hideトランジション終了
  }, 1200); // 光線を出してから消えるまでの秒数（余韻を長く）
});

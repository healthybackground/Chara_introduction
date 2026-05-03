document.addEventListener("DOMContentLoaded", () => {
    // .fade-inクラスがついている要素をすべて取得
    const fadeElements = document.querySelectorAll(".fade-in");

    // 画面内に入ってきたかを監視する機能
    const scrollObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                // 画面に入ったら visible クラスを付与（CSSでアニメーション発動）
                entry.target.classList.add("visible");
                // 一度表示したら監視を終了する
                scrollObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 }); // 10%見えたら発動

    // すべての要素を監視対象にする
    fadeElements.forEach((el) => {
        scrollObserver.observe(el);
    });
});

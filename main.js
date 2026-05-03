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

// --- 共有（シェア）ボタンの機能 ---
document.addEventListener("DOMContentLoaded", () => {
    const shareButton = document.getElementById('shareButton');
    
    if (shareButton) {
        shareButton.addEventListener('click', () => {
            // スマホなどの「Web Share API」対応ブラウザの場合
            if (navigator.share) {
                navigator.share({
                    title: 'まるふく奇譚 ～福の精と丸い心～',
                    text: 'まるくて、やわらかくて、あたたかい。四人の「福」が、世界をちょっとだけ変えていく。ほっこり系ノベルゲーム',
                    url: window.location.href, // 今開いているページのURL
                }).catch((error) => console.log('共有がキャンセルされました', error));
            } 
            // PCなど非対応ブラウザの場合は、X（Twitter）のシェア画面を直接開く
            else {
                const shareText = encodeURIComponent('ほっこり系ノベルゲーム『まるふく奇譚 ～福の精と丸い心～』\n');
                const shareUrl = encodeURIComponent(window.location.href);
                window.open(`https://x.com/intent/tweet?text=${shareText}&url=${shareUrl}`, '_blank');
            }
        });
    }
});

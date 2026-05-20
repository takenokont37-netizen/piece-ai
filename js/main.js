/**
 * Piece.ai ホームページ メインJavaScript
 * 担当する機能:
 *   1. ヘッダーのスクロール検知（背景変化）
 *   2. ハンバーガーメニュー（スマホ用）
 *   3. ドロワーメニューのリンクをクリックしたら閉じる
 *   4. ページトップボタン
 *   5. スクロールアニメーション（フェードイン）
 *   6. お問い合わせフォームのバリデーションと仮送信処理
 */

/* ===================================================
   1. ヘッダー：スクロールで背景を切り替える
   =================================================== */
const header = document.getElementById('header');

// スクロール量が100px以上になったらヘッダーに is-scrolled クラスを付ける
function handleHeaderScroll() {
  if (window.scrollY > 100) {
    header.classList.add('is-scrolled');
  } else {
    header.classList.remove('is-scrolled');
  }
}

window.addEventListener('scroll', handleHeaderScroll, { passive: true });
// ページ読み込み時にも実行（リロード後のスクロール位置に対応）
handleHeaderScroll();


/* ===================================================
   2. ハンバーガーメニューの開閉
   =================================================== */
const hamburger = document.getElementById('hamburger');
const drawer = document.getElementById('drawer');

hamburger.addEventListener('click', () => {
  const isOpen = hamburger.classList.toggle('is-open');
  drawer.classList.toggle('is-open', isOpen);

  // アクセシビリティ属性の更新
  hamburger.setAttribute('aria-expanded', String(isOpen));
  hamburger.setAttribute('aria-label', isOpen ? 'メニューを閉じる' : 'メニューを開く');

  // メニュー開放中はページのスクロールを止める
  document.body.style.overflow = isOpen ? 'hidden' : '';
});


/* ===================================================
   3. ドロワーのリンクをタップしたらメニューを閉じる
   =================================================== */
const drawerLinks = document.querySelectorAll('.drawer__link');

drawerLinks.forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('is-open');
    drawer.classList.remove('is-open');
    hamburger.setAttribute('aria-expanded', 'false');
    hamburger.setAttribute('aria-label', 'メニューを開く');
    document.body.style.overflow = '';
  });
});


/* ===================================================
   4. ページトップボタンの表示・非表示
   =================================================== */
const backToTop = document.getElementById('backToTop');

function handleBackToTop() {
  // 300px以上スクロールしたらボタンを表示
  if (window.scrollY > 300) {
    backToTop.classList.add('is-visible');
  } else {
    backToTop.classList.remove('is-visible');
  }
}

window.addEventListener('scroll', handleBackToTop, { passive: true });

// クリックでページトップへ滑らかにスクロール
backToTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});


/* ===================================================
   5. スクロールアニメーション（IntersectionObserver）
   fade-in クラスを持つ要素が画面内に入ったら is-visible を付与
   =================================================== */
const fadeTargets = document.querySelectorAll(
  '.service-card, .about__mission, .about__ceo, .about__table-wrap, .news__item, .stats__item, .ai-card'
);

// すべての要素に fade-in クラスを追加
fadeTargets.forEach(el => el.classList.add('fade-in'));

// 要素が80%見えたらアニメーション発火
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        // 一度表示されたら監視解除（パフォーマンス向上）
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }  // 要素が15%見えたらトリガー
);

fadeTargets.forEach(el => observer.observe(el));


/* ===================================================
   6. お問い合わせフォーム：バリデーションと仮送信処理
   注意：実際の送信処理はサーバー連携が必要です
   =================================================== */
const contactForm = document.getElementById('contactForm');
const formSuccess = document.getElementById('formSuccess');

// 各フィールドの取得
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');

// エラーメッセージ要素の取得
const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const messageError = document.getElementById('messageError');

/**
 * メールアドレスの形式チェック
 * @param {string} email
 * @returns {boolean}
 */
function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

/**
 * 単一フィールドのバリデーション
 * エラーがあればエラーメッセージを表示してfalseを返す
 */
function validateName() {
  if (!nameInput.value.trim()) {
    nameError.textContent = 'お名前を入力してください。';
    nameInput.style.borderColor = '#ef4444';
    return false;
  }
  nameError.textContent = '';
  nameInput.style.borderColor = '';
  return true;
}

function validateEmail() {
  if (!emailInput.value.trim()) {
    emailError.textContent = 'メールアドレスを入力してください。';
    emailInput.style.borderColor = '#ef4444';
    return false;
  }
  if (!isValidEmail(emailInput.value.trim())) {
    emailError.textContent = '正しいメールアドレス形式で入力してください。';
    emailInput.style.borderColor = '#ef4444';
    return false;
  }
  emailError.textContent = '';
  emailInput.style.borderColor = '';
  return true;
}

function validateMessage() {
  if (!messageInput.value.trim()) {
    messageError.textContent = 'お問い合わせ内容を入力してください。';
    messageInput.style.borderColor = '#ef4444';
    return false;
  }
  messageError.textContent = '';
  messageInput.style.borderColor = '';
  return true;
}

// フォーカスが外れたタイミングでリアルタイムバリデーション
nameInput.addEventListener('blur', validateName);
emailInput.addEventListener('blur', validateEmail);
messageInput.addEventListener('blur', validateMessage);

// 送信処理
contactForm.addEventListener('submit', (e) => {
  e.preventDefault();  // ブラウザのデフォルト送信を止める

  // 全フィールドをバリデーション
  const isValid = validateName() & validateEmail() & validateMessage();
  // ※ && ではなく & を使うことで全フィールドを一度にチェックする

  if (!isValid) return;  // バリデーションNG時は終了

  // 送信ボタンを無効化して二重送信を防ぐ
  const submitBtn = contactForm.querySelector('[type="submit"]');
  submitBtn.disabled = true;
  submitBtn.textContent = '送信中...';

  // 仮の送信処理（本番環境ではAPIエンドポイントへのfetchに置き換える）
  // 例: fetch('/api/contact', { method: 'POST', body: new FormData(contactForm) })
  setTimeout(() => {
    contactForm.reset();               // フォームをリセット
    formSuccess.hidden = false;        // 完了メッセージを表示
    submitBtn.disabled = false;
    submitBtn.textContent = '送信する';

    // 5秒後に完了メッセージを非表示
    setTimeout(() => {
      formSuccess.hidden = true;
    }, 5000);
  }, 1000);  // 1秒後に完了（APIに合わせて変更する）
});

# [Architecture] Next.js への移行（静的HTMLからフレームワーク化）

**Issue #3** | State: OPEN | Author: meicich  
Labels: `enhancement` `discussion`

---

## 背景

現在は素のHTML + Vanilla JS で動いており、これでも目的は果たせていますが、これから以下が必要になります。

- **ニュース記事の量産**（現状はHTMLに直書き）
- **CMS連携**（別issue）
- **i18n（日英対応）**
- **OGP/メタタグの動的生成**
- **A/Bテスト基盤**

これらを全部「素のHTML」で頑張ると、ファイルが増えるたびに変更箇所が爆発します。  
**推奨は Next.js (App Router) + TypeScript** です。

## なぜ Next.js か（CTOの判断）

| 観点 | 素HTML | Next.js |
| --- | --- | --- |
| ニュースページ量産 | HTMLを手で複製 | MDX or CMSで自動生成 |
| OGP/SEO | 各ページ手書き | `generateMetadata` で一元管理 |
| デプロイ | どこでもOK | Vercel と相性最強 |
| 採用 | 限定的 | フロント候補がほぼ全員触れる |
| 将来のダッシュボード | 別アプリ化 | 同一プロジェクトで併存可能 |

→ **将来の認証付きコンソールや管理画面まで見据えると Next.js 一択** と判断しています。

## やること（ステップ）

ジュニアにとって大きいタスクなので、**PRを分けて** 進めてください。

### Phase 1: 雛形セットアップ（別ブランチ）

- [ ] `apps/web/` または同一リポルートに Next.js 15 (App Router) + TypeScript を導入
- [ ] Tailwind CSS or CSS Modules を採用（現状の `style.css` 構造に近い方を選ぶ）
- [ ] `pnpm` を使う（パッケージマネージャの統一）
- [ ] ESLint + Prettier + Husky の整備

### Phase 2: 現サイトの移植

- [ ] `index.html` を `app/page.tsx` に変換
- [ ] ヘッダー/フッターを `components/Header.tsx` / `components/Footer.tsx` に分離
- [ ] ヒーロー / サービス / About / News / Contact をそれぞれコンポーネント化
- [ ] お問い合わせフォームを Server Action 化（メール送信は Resend / SendGrid を検討）
- [ ] 既存の `js/main.js` の挙動（スクロール演出など）をReact化（IntersectionObserverはそのまま使えます）

### Phase 3: 切り替え

- [ ] 旧 `index.html` のディレクトリを `legacy/` に退避（一定期間は残す）
- [ ] Vercel 側のビルド設定を Next.js に変更

## 完了条件 (DoD)

- [ ] `pnpm dev` でローカル起動できる
- [ ] 見た目が現在のサイトと **ピクセル単位で同一** （Lighthouse・スクリーンショット比較）
- [ ] Lighthouse スコアが現状より下がっていない
- [ ] README に「ローカル開発手順」「ディレクトリ構成」が記載されている

## ⚠️ 注意 / 議論ポイント

1. **App Router vs Pages Router** → App Router で行きましょう（最新の標準）
2. **CSS** → 個人的には Tailwind 推し（クラス名を考えなくていい）だが、現状の BEM 風 CSS を維持したいなら CSS Modules でも可。ジュニアの好みも聞いた上で **issue内で決定** してから実装に入ること。
3. **モノレポ化するか** → 当面はシングルアプリでOK。将来ダッシュボードを足すタイミングで turborepo 化を検討。

## 参考

- Next.js: https://nextjs.org/docs
- App Router の考え方: https://nextjs.org/docs/app

## 💡 ジュニア向けTips

- いきなり全部書き換えず、**「ヘッダーだけ Next.js 化したPR」** のような小さな単位で出してください
- 移行中は旧サイトと並行稼働させ、ある日切り替える方式（Strangler Fig パターン）で進めるのが安全です

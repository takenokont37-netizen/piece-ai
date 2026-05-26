# [CMS] ニュース・お知らせのCMS化（microCMS / Contentful 選定）

**Issue #4** | State: OPEN | Author: meicich  
Labels: `enhancement` `integration` `discussion`

---

## 背景

現状、`index.html` のニュースは **3件すべて手書き**。  
リリースのたびにエンジニアがHTMLを編集する状態だと、広報チームが回らないので CMS 化します。

依存 issue: #3 （Next.js移行）

## 目的（ゴール）

- 広報・PR担当が **エンジニアの手を借りずに** ニュース記事を公開できる
- Web側は CMS から記事一覧を取得して描画する（SSG or ISR）
- 画像のアップロード・OGP用画像も CMS 側で管理できる

## 候補比較

| CMS | 強み | 弱み | 推奨度 |
| --- | --- | --- | --- |
| **microCMS** | 国産・UIが日本語ネイティブ・無料枠あり | 多言語が少し面倒 | ★★★ |
| **Contentful** | 多言語対応が強い・グローバル定番 | UIが英語・無料枠が厳しい | ★★ |
| **Sanity** | 開発者フレンドリー・スキーマがコード | 非エンジニアにはやや難 | ★★ |
| **Notion + 公開API** | 誰でも使える | 表示崩れリスク・本番運用には不向き | × |

→ Piece.ai は **日本発のEnterprise** なので **microCMS を第一候補** とします（運用者が日本語UIの方が早い）。

## やること（ステップ）

### 1. スキーマ設計（コード書く前）

ニュース記事に必要なフィールドを Issue 上で確定させる。たたき台:

- title (text)
- slug (text, ユニーク)
- publishedAt (datetime)
- category (select: プレスリリース / お知らせ / メディア掲載)
- thumbnail (image)
- body (rich text / markdown)
- ogImage (image, 任意)

### 2. microCMS 側のセットアップ

- [ ] サービス作成（プラン: 無料 or Team）
- [ ] APIキーを発行（Vercelの環境変数に登録）
- [ ] 上記スキーマで API を作る
- [ ] 初期データ3件を投入（現在 index.html にある3件）

### 3. Next.js 側の実装

- [ ] `lib/cms.ts` で fetch ラッパーを作る
- [ ] `/app/news/page.tsx` で一覧
- [ ] `/app/news/[slug]/page.tsx` で詳細（ISR: revalidate 60秒）
- [ ] Webhook で記事更新 → Vercel の On-Demand Revalidate を叩く

## 完了条件 (DoD)

- [ ] CMS で記事を更新すると、本番サイトに60秒以内に反映される
- [ ] 広報担当（非エンジニア）が **マニュアルなしで** 投稿できるUIになっている
- [ ] APIキーが Git にコミットされていない（環境変数で管理）
- [ ] OGP画像が記事ごとに切り替わる

## ⚠️ 注意

- **APIキー漏洩**: microCMS の write API key を絶対にフロントで使わないこと。Read 用キーのみフロントで利用、Write は Server Action / Webhook 経由。
- **本番データ削除リスク**: 開発用と本番用を **別サービス** で立てる（または本番ロールを read-only に絞る）。

## 参考

- microCMS Docs: https://document.microcms.io/
- Next.js + microCMS チュートリアル: https://blog.microcms.io/

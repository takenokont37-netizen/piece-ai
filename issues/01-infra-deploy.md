# [Infra] 本番デプロイ環境の構築（Vercel / Cloudflare Pages の比較と選定）

**Issue #1** | State: OPEN | Author: meicich  
Labels: `enhancement` `infra` `discussion`

---

## 背景

現状、`index.html` / `css/style.css` / `js/main.js` で構成された静的サイトをローカルでしか確認できない状態です。  
**まずは本番URLでお客様に見せられる状態にする** ことを最優先タスクとして、デプロイ先を確定し、自動デプロイまで通します。

## 目的（このissueのゴール）

- `main` ブランチに push したら、本番URL（例: `piece.ai` または暫定ドメイン）に自動反映される状態を作る
- HTTPS / 独自ドメイン / プレビュー環境（PRごと） の3点を満たす
- ジュニアでも再現できるよう、手順を `README.md` にまとめる

## やること（ステップ）

### 1. ホスティング候補を3つ調べて、比較表を作る

以下の3つを最低限調査してください。コーポレートLPの一般的な選択肢です。

| 候補 | 強み | 弱み |
| --- | --- | --- |
| **Vercel** | Next.js移行時にそのまま使える / PRプレビュー標準 / 設定がほぼゼロ | 商用利用時のチームプラン課金 |
| **Cloudflare Pages** | 無料枠が広い / Workers連携が強い / 高速CDN | Next.js のISR/Server Actionsで制限あり |
| **AWS Amplify / S3+CloudFront** | AWSで一貫管理できる | 設定項目が多くジュニアには重い |

→ 「**Piece.ai は Next.js への移行を予定している**（別issue参照）」前提で、**Vercelを第一候補に推奨** します。

### 2. 選定したらセットアップ

- [ ] GitHubリポジトリと連携
- [ ] `main` への push → Production デプロイ
- [ ] Pull Request → Preview デプロイ（レビュアーがブラウザで動作確認できる状態）
- [ ] 独自ドメインの設定（ドメインは別途確認）
- [ ] HTTPS が有効になっていること

### 3. ドキュメント化

- [ ] `README.md` に「ローカル起動方法」「デプロイの仕組み」「URL一覧」を追加

## 完了条件 (Definition of Done)

- [ ] 本番URLがHTTPSで開ける
- [ ] PRを作るとPreview URLがコメントで自動投稿される
- [ ] `README.md` に新人が読めば再現できるレベルの手順がある
- [ ] デプロイにかかるコスト試算が `README.md` または本issueのコメントに記載されている

## 参考

- Vercel Docs: https://vercel.com/docs
- Cloudflare Pages: https://developers.cloudflare.com/pages/

## ⚠️ 注意

- ドメインのDNS設定は本番影響があります。**設定変更前に必ずレビュー依頼を出してください**。
- `.env` などのシークレットは絶対にリポジトリにコミットしないこと。

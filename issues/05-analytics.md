# [Analytics] アクセス解析・コンバージョン計測の導入（GA4 / Microsoft Clarity）

**Issue #5** | State: OPEN | Author: meicich  
Labels: `enhancement` `good first issue` `analytics`

---

## 背景

このサイトは **コーポレートLP + 問い合わせ獲得が目的** です。  
計測なしでは「どのCTAが効いたか」「どこで離脱したか」が一切わからず、改善ループが回りません。  
**最初のお客様1人目を取りに行く前に、計測だけは入れておきます**。

## 目的（ゴール）

以下を **本番デプロイの初日から** 取れている状態にする。

1. **GA4** : ページビュー / 流入元 / デバイス / 主要イベント
2. **Microsoft Clarity** : ヒートマップ / セッションリプレイ（無料・無制限）
3. **コンバージョン計測** : 「お問い合わせ送信完了」を CV として GA4 に送る
4. **同意バナー** : 日本ではマストではないが、EU / グローバル展開を見据えて Cookie 同意UIを実装

## やること（ステップ）

### Step 1: GA4 セットアップ

- [ ] GA4 プロパティ作成
- [ ] 測定ID (`G-XXXXXXX`) を環境変数に登録
- [ ] `<head>` に gtag.js を埋め込む（Next.js なら `app/layout.tsx` + `next/script`）

### Step 2: イベント設計

ジュニアが迷わないよう、イベントを **事前にissue内で確定** してから実装してください。たたき台:

| イベント名 | 発火タイミング | パラメータ |
| --- | --- | --- |
| `cta_hero_click` | ヒーローの「無料でお問い合わせ」クリック | - |
| `cta_service_click` | ヒーローの「サービスを見る」クリック | - |
| `nav_contact_click` | ヘッダー「お問い合わせ」クリック | - |
| `form_submit_start` | フォーム送信開始 | - |
| `form_submit_success` | フォーム送信完了（CV） | type: service/demo/price/other |
| `news_item_click` | ニュース記事クリック | news_id |
| `scroll_75` | ページ75%スクロール | - |

### Step 3: Clarity 導入

- [ ] Clarity プロジェクト作成
- [ ] スクリプトを `<head>` に追加
- [ ] PII（個人情報）が映らないよう、フォーム入力欄に `data-clarity-mask="true"` を付与

### Step 4: 同意バナー

- [ ] 軽量なライブラリ（[CookieYes](https://www.cookieyes.com/) 等）または自前実装で「Accept / Reject」UIを設置
- [ ] Reject時はGA4/Clarityを発火させない

### Step 5: ダッシュボード作成

- [ ] GA4 で「主要CVファネル」のレポートを作成
- [ ] Looker Studio で社内共有用のダッシュボードを作る

## 完了条件 (DoD)

- [ ] 本番でお問い合わせを1件出すと、GA4のリアルタイムに `form_submit_success` が表示される
- [ ] Clarity でセッションリプレイが見れる
- [ ] 同意Reject時にスクリプトが読み込まれないことをDevToolsで確認
- [ ] CV、CVR、流入元 が見れる Looker Studio のリンクが共有されている

## ⚠️ 注意 / プライバシー

- **個人情報（名前・メール・問い合わせ本文）を GA4 にイベントパラメータとして送らないこと**。送るとGoogleの規約違反 + 個人情報保護法リスクです。
- Clarity のマスキング設定は **必ず** 入れること。

## 参考

- GA4 公式: https://support.google.com/analytics/answer/9304153
- Microsoft Clarity: https://clarity.microsoft.com/
- Next.js + GA4: https://nextjs.org/docs/app/building-your-application/optimizing/third-party-libraries

## 💡 ジュニア向けTips

- 「とりあえずGAだけ入れる」を最小PRで先に出してOK。**完璧を待つより早く計測開始** が正解です。

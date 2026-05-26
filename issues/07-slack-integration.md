# [Integration] Slack連携（お問い合わせ通知 / デプロイ通知 / アラート）

**Issue #7** | State: OPEN | Author: meicich  
Labels: `enhancement` `good first issue` `integration`

---

## 背景

現状、お問い合わせフォーム送信は `js/main.js` で **setTimeout の擬似処理** になっており、誰のもとにも届きません。

最初のお客様1人目を取りこぼさないため、**Slackへの即時通知** を最優先で入れます。  
ついでにデプロイ通知・CIアラートもまとめて Slack に流すと、運用が一気に楽になります。

依存 issue: #3 (Next.js移行), #1 (デプロイ), #2 (CI/CD)

## 目的（ゴール）

| イベント | 通知先チャンネル | 担当 |
| --- | --- | --- |
| お問い合わせ送信 | `#contact-inbound` | 営業 |
| 本番デプロイ完了 | `#dev-deploy` | エンジニア |
| CI失敗 | `#dev-alerts` | エンジニア |
| 本番のJSエラー（Sentry） | `#dev-alerts` | エンジニア（将来） |

## やること（ステップ）

### 1. お問い合わせ → Slack 通知（最優先）

Next.js の Server Action（または API Route）でフォーム送信を受け、以下を実行:

1. バリデーション
2. Slack Incoming Webhook に payload を POST
3. 同時にメール送信（Resend / SendGrid）も検討
4. 成功時はフォーム側に200を返す

```ts
// 概念コード
await fetch(process.env.SLACK_WEBHOOK_URL_CONTACT!, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    text: `📩 新規お問い合わせ\n会社: ${company}\n氏名: ${name}\nメール: ${email}\n種別: ${type}\n内容:\n${message}`,
  }),
});
```

### 2. デプロイ通知

- Vercel Integration → Slack で1クリック設定
- もしくは GitHub Actions の最後に `slackapi/slack-github-action` を仕込む

### 3. CI失敗通知

- GitHub Actions の `on: failure` で Slack に投げる

### 4. （将来）エラー監視

- Sentry を導入し、本番エラーを Slack に通知

## 完了条件 (DoD)

- [ ] 本番フォームから送信 → 5秒以内に `#contact-inbound` に通知が来る
- [ ] 本番デプロイ完了通知が `#dev-deploy` に来る
- [ ] CI失敗時に `#dev-alerts` に通知が来る
- [ ] Webhook URL が **環境変数** で管理されており、Gitに入っていない
- [ ] お問い合わせの **個人情報** がSlack通知に含まれることを、社内ポリシー上問題ないか確認済み

## ⚠️ 注意 / セキュリティ

- **Slack Incoming Webhook URL の漏洩は致命的**: 漏れると誰でも社内チャンネルに投稿できる。必ず環境変数。
- **個人情報**: メールアドレス・問い合わせ本文を Slack に流すことの社内承認を取ること。
- **二重送信防止**: 同じフォームを連打されたときに Slack に同じメッセージが何件も飛ばないよう、サーバー側でデバウンスかidempotencyキーを持たせる。
- **Spam対策**: reCAPTCHA / Cloudflare Turnstile を将来的に検討（追加issueにすること）。

## 参考

- Slack Incoming Webhooks: https://api.slack.com/messaging/webhooks
- Vercel Slack Integration: https://vercel.com/integrations/slack
- Resend (メール送信): https://resend.com/

## 💡 ジュニア向けTips

- **「お問い合わせ→Slack」だけのPR** を最初に出してください。デプロイ通知やCI通知は後で別PRに分けると、何が壊れたかが切り分けやすいです。
- ローカルで試すときは、テスト用のSlackチャンネル+テスト用Webhookを使うこと。本番チャンネルに開発ノイズを流さない。

# [Roadmap] 今後の拡張ロードマップ（i18n / 採用ページ / ブログ / ダッシュボード）

**Issue #8** | State: OPEN | Author: meicich  
Labels: `enhancement` `discussion`

---

## 背景

このサイトは現状「1ページLP」ですが、会社のフェーズが進むにつれて以下のページ群が必要になります。  
**いきなり全部作るのではなく、優先順位を共有し、各項目を独立issue化** していくためのロードマップです。

## ロードマップ（優先順位順）

### 🟢 Phase 0（今すぐ）

- [x] [#1 デプロイ環境](https://github.com/takenokont37-netizen/piece-ai/issues/1)
- [x] [#2 CI/CD](https://github.com/takenokont37-netizen/piece-ai/issues/2)
- [x] [#5 アナリティクス](https://github.com/takenokont37-netizen/piece-ai/issues/5)
- [x] [#7 Slack連携](https://github.com/takenokont37-netizen/piece-ai/issues/7)

### 🟡 Phase 1（最初のお客様前後 / 1〜2ヶ月）

- [ ] [#3 Next.js移行](https://github.com/takenokont37-netizen/piece-ai/issues/3)
- [ ] [#4 CMS導入](https://github.com/takenokont37-netizen/piece-ai/issues/4)
- [ ] [#6 LLMEO/SEO](https://github.com/takenokont37-netizen/piece-ai/issues/6)
- [ ] **採用ページ** (`/careers`): 募集要項・応募フォーム
- [ ] **プライバシーポリシー / 利用規約** (`/privacy`, `/terms`)
- [ ] **会社情報の独立ページ化** (`/about`)

### 🟠 Phase 2（シリーズA前後 / 3〜6ヶ月）

- [ ] **ブログ / オウンドメディア** (`/blog`): SEO/LLMEOのドライバー
- [ ] **導入事例ページ** (`/cases`): エンタープライズ向けには必須
- [ ] **資料DL（ホワイトペーパー）**: リード獲得導線
- [ ] **多言語対応 (i18n)**: 英語版（グローバル展開を見据える場合）
- [ ] **動画コンテンツ**（製品紹介・代表メッセージ）

### 🔴 Phase 3（プロダクトGA以降）

- [ ] **製品ドキュメント** (`docs.piece.ai`): Mintlify / Docusaurus 等
- [ ] **ステータスページ** (`status.piece.ai`): 稼働状況の公開
- [ ] **顧客ポータル / ダッシュボード** (`app.piece.ai`): 認証付きアプリ
- [ ] **API リファレンス**: 開発者向け

## このissueでやること

これは **親issue / ロードマップ管理** なので、ここでコードを書くことはありません。  
かわりに以下を行う:

- [ ] 経営陣（特に営業・PR）と Phase 1 の優先度をすり合わせ
- [ ] Phase 1 の各項目について **個別のissueを立てる**（テンプレートはこのissueの構造を参考に）
- [ ] 月次でこのissueをレビューし、達成済みにチェックを入れる

## 議論ポイント

1. **多言語対応はいつから？** 国内顧客が先 vs グローバル並行
2. **ブログのプラットフォーム**: 自社CMS統合 / note / Zenn の使い分け
3. **採用ページ**: 自社実装 vs Herp / YOUTRUST 等の埋め込み
4. **ドメイン戦略**: `docs.piece.ai` / `app.piece.ai` のサブドメイン運用ポリシー

## ⚠️ 注意

- ロードマップは **生もの**。3ヶ月ごとに棚卸しすること。
- 「全部やる」ではなく **「やらないことを決める」** のも経営判断。優先度低なら閉じる勇気を持つ。

## 💡 ジュニア向けTips

- ロードマップを見ながら **「次は何をしたいか」をエンジニア自身が提案できる** 状態が理想です。
- 各 Phase の項目を独立 issue にする時は、本 issue へのリンクを貼って親子関係を明示してください。

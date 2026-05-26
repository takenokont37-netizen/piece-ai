# [Infra] CI/CDパイプラインの構築（GitHub Actions / Lint / Lighthouse）

**Issue #2** | State: OPEN | Author: meicich  
Labels: `enhancement` `good first issue` `infra`

---

## 背景

現状、PRを出してもチェックが何も走らない状態です。  
ジュニアが安心して変更を出せるよう、**「壊れたものはmergeできない」状態** を作ります。

依存 issue: #1 （デプロイ先の確定）

## 目的（ゴール）

PRごとに以下が自動で実行され、失敗すると赤バッジが付く状態にします。

1. **静的解析** (HTML/CSS/JSの構文・フォーマット)
2. **リンク切れチェック**
3. **Lighthouse CI** （パフォーマンス・SEO・アクセシビリティのスコア計測）
4. **本番デプロイ** は `main` への merge 時のみ実行

## やること（ステップ）

### 1. GitHub Actions ワークフローを追加

`.github/workflows/ci.yml` を作成し、以下を実行する。

```yaml
# 概念図（実装はジュニアに任せます）
on: [pull_request, push]
jobs:
  lint:
    - HTMLHint or html-validate
    - Stylelint
    - ESLint or Biome
  links:
    - lychee などでリンク切れチェック
  lighthouse:
    - treosh/lighthouse-ci-action
    - 各カテゴリ 90点以上を閾値にする
```

### 2. Branch Protection の設定

- [ ] `main` への直接 push を禁止
- [ ] PR には最低1人の Approve を必須
- [ ] 上記 CI ジョブの成功を必須にする

### 3. PRテンプレート / Issueテンプレートを追加

- [ ] `.github/pull_request_template.md`
- [ ] `.github/ISSUE_TEMPLATE/bug_report.md` / `feature_request.md`

## 完了条件 (DoD)

- [ ] わざと壊した PR を作ると CI が落ちることを確認した
- [ ] Lighthouse スコアが PR コメントとして自動投稿される
- [ ] `main` への直接 push が GitHub 側でブロックされる
- [ ] README に「CIが落ちた時の対処法」を追記

## 参考

- GitHub Actions: https://docs.github.com/ja/actions
- Lighthouse CI: https://github.com/treosh/lighthouse-ci-action
- lychee (リンク切れチェック): https://github.com/lycheeverse/lychee-action

## 💡 ジュニア向けTips

- いきなり全部入れず、まず `lint` だけのPRを作って動作確認 → 次に `lighthouse` を足す、という順で **小さくPRを分けて** ください
- secrets を使う場合は **Repository Secrets** に登録し、ワークフローからは `${{ secrets.XXX }}` で参照すること

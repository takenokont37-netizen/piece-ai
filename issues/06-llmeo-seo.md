# [LLMEO/SEO] LLM最適化対応（llms.txt / 構造化データ / メタタグ強化）

**Issue #6** | State: OPEN | Author: meicich  
Labels: `enhancement` `seo`

---

## 背景

検索流入は SEO（Google）だけでなく、**LLM経由の流入（ChatGPT / Perplexity / Claude / Gemini）** が無視できない比率になってきています。AI関連サービスを提供する以上、LLM に「自社サービスは何か」を聞かれたときに **正しく要約される** 状態を作っておく価値が大きい領域です。これを LLMEO (Generative Engine Optimization / GEO とも) と呼びます。

## 目的（ゴール）

1. LLM が **公式情報源** としてこのサイトを引用できる状態にする
2. 「このサービスは何ですか？」と LLM に聞いた時に、サイト記載と整合する内容が返ってくる
3. 同じ実装で SEO（Google）にも効かせる（一石二鳥）

## やること（ステップ）

### 1. `llms.txt` / `llms-full.txt` の追加

ルートに `public/llms.txt` を置き、LLM向けに「**このサイトで何が読めるか**」を機械可読な形で記述する。フォーマットは llms.txt 仕様に従う。

参考仕様: https://llmstxt.org/

中身は **サイト本体の記述から自動生成 or 手動転記**。サイトと食い違わせないこと。

### 2. 構造化データ (JSON-LD) の追加

LLM/Google 両方に効く。`<head>` に以下を追加:

- **Organization** スキーマ
- **WebSite** スキーマ
- **FAQPage** スキーマ（よくある質問セクションを新設してそこに紐付け）
- **NewsArticle** スキーマ（ニュース個別ページ／CMS連携時）

→ Google: https://developers.google.com/search/docs/appearance/structured-data

### 3. メタタグの強化

現状の description は1行のみ。以下を整える:

- [ ] `<meta name="description">` を各ページ固有の文章に（120〜160字）
- [ ] OGP タグ（`og:title` / `og:description` / `og:image` / `og:url`）
- [ ] Twitter Card タグ
- [ ] `<link rel="canonical">` の設置
- [ ] hreflang（多言語対応時）

### 4. サイトマップ / robots.txt

- [ ] `public/sitemap.xml` を生成（Next.js なら `app/sitemap.ts`）
- [ ] `public/robots.txt` で LLM クローラーの許可/拒否を明示

### 5. コンテンツ品質向上（中長期）

- [ ] FAQ セクションをページに追加（構造化データと連動）
- [ ] 各サービスの詳細説明を200字以上に拡充
- [ ] 競合比較・導入事例コンテンツ（Phase 2 以降）

## 完了条件 (DoD)

- [ ] Google Search Console で構造化データのエラーがゼロ
- [ ] `llms.txt` が `https://piece.ai/llms.txt` で取得できる
- [ ] ChatGPT / Perplexity で「Piece AIとは」と聞くと正しい概要が返ってくる（手動確認）
- [ ] Lighthouse SEO スコアが 95 以上

## ⚠️ 注意

- **`llms.txt` の内容とサイト本文が乖離しないよう管理する**。嘘の情報を書くと LLM が誤情報を拡散するリスクがある。
- 構造化データのマークアップミスは Google にペナルティを与えることがある。必ず [Rich Results Test](https://search.google.com/test/rich-results) で検証すること。

## 参考

- llms.txt 仕様: https://llmstxt.org/
- Google 構造化データ: https://developers.google.com/search/docs/appearance/structured-data
- Next.js Metadata API: https://nextjs.org/docs/app/building-your-application/optimizing/metadata

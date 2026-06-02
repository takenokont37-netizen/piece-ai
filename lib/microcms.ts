/* =============================================
   microCMS クライアント設定
   必要な環境変数（Vercelのダッシュボードで設定）:
   - MICROCMS_SERVICE_DOMAIN : サービスID（例: piece-ai）
   - MICROCMS_API_KEY        : APIキー
   ============================================= */
import { createClient } from 'microcms-js-sdk'

/* 環境変数未設定時はダミー値でクライアントを生成（実際のAPIは呼び出さない） */
export const client = createClient({
  serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN || 'dummy',
  apiKey:        process.env.MICROCMS_API_KEY        || 'dummy',
})

/** ニュース記事の型定義 */
export type NewsItem = {
  id:          string
  title:       string
  category:    string
  link?:       string
  date?:       string   /* 手動設定の掲載日（未入力の場合は publishedAt を使用） */
  publishedAt: string   /* microCMS が自動付与する公開日時 */
}

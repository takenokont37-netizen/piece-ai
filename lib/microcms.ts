/* =============================================
   microCMS クライアント設定
   必要な環境変数（Vercelのダッシュボードで設定）:
   - MICROCMS_SERVICE_DOMAIN : サービスID（例: piece-ai）
   - MICROCMS_API_KEY        : APIキー
   ============================================= */
import { createClient } from 'microcms-js-sdk'

export const client = createClient({
  serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN!,
  apiKey:        process.env.MICROCMS_API_KEY!,
})

/** ニュース記事の型定義 */
export type NewsItem = {
  id:          string
  title:       string
  category:    string
  link?:       string
  publishedAt: string   /* microCMS が自動付与する公開日時 */
}

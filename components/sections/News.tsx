/* =============================================
   ニュースセクション
   microCMS の /news エンドポイントから記事を取得する
   環境変数: MICROCMS_SERVICE_DOMAIN / MICROCMS_API_KEY
   ============================================= */
import FadeIn from '@/components/FadeIn'
import { client, type NewsItem } from '@/lib/microcms'

/** カテゴリ → バッジの色クラスを返す */
const badgeColor: Record<string, string> = {
  'プレスリリース': 'bg-[#5b6ef5]/10 text-[#5b6ef5]',
  'お知らせ':       'bg-[#00c9a7]/10 text-[#00c9a7]',
  'メディア掲載':   'bg-purple-500/10 text-purple-500',
}

/** microCMS から最新10件のニュースを取得 */
async function getNews(): Promise<NewsItem[]> {
  /* 環境変数が未設定の場合はフォールバックデータを返す */
  if (!process.env.MICROCMS_SERVICE_DOMAIN || !process.env.MICROCMS_API_KEY) {
    console.warn('[News] microCMS の環境変数が未設定のため、フォールバックデータを使用します')
    return fallbackNews
  }

  try {
    const data = await client.getList<NewsItem>({
      endpoint: 'news',
      queries:  { limit: 10, orders: '-publishedAt' },
    })
    return data.contents
  } catch (err) {
    console.error('[News] microCMS からの取得に失敗しました:', err)
    return fallbackNews
  }
}

/** microCMS 未設定時・エラー時に表示するフォールバックデータ */
const fallbackNews: NewsItem[] = [
  {
    id:          '1',
    title:       'Piece.ai、AIエージェントプラットフォームのβ版提供を開始',
    category:    'プレスリリース',
    publishedAt: '2026-05-20T00:00:00.000Z',
  },
  {
    id:          '2',
    title:       'コーポレートサイトを公開しました',
    category:    'お知らせ',
    publishedAt: '2026-04-15T00:00:00.000Z',
  },
  {
    id:          '3',
    title:       '「非定型業務×AI」で注目されるPiece.aiの戦略とは（取材記事）',
    category:    'メディア掲載',
    publishedAt: '2026-03-01T00:00:00.000Z',
  },
]

/** 日付フォーマット（例: 2026.05.20） */
function formatDate(iso: string): string {
  const d = new Date(iso)
  const y = d.getFullYear()
  const m = String(d.getMonth() + 1).padStart(2, '0')
  const day = String(d.getDate()).padStart(2, '0')
  return `${y}.${m}.${day}`
}

export default async function News() {
  const newsItems = await getNews()

  return (
    <section id="news" className="bg-white py-24">
      <div className="max-w-[1140px] mx-auto px-6">

        {/* セクションヘッダー */}
        <div className="text-center mb-16">
          <p className="text-xs font-semibold tracking-[0.2em] text-[#5b6ef5] font-[var(--font-en)] mb-3">NEWS</p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a2e]">ニュース</h2>
        </div>

        {/* ニュースリスト */}
        <ul className="border-t border-gray-200">
          {newsItems.map((item, i) => (
            <FadeIn key={item.id} delay={i * 60}>
              <li className="border-b border-gray-200">
                <a
                  href={item.link ?? '#'}
                  target={item.link ? '_blank' : undefined}
                  rel={item.link ? 'noopener noreferrer' : undefined}
                  className="flex flex-wrap items-center gap-5 px-4 py-6 transition-colors hover:bg-gray-50 group"
                >
                  {/* 日付 */}
                  <time
                    className="font-[var(--font-en)] text-sm text-gray-400 shrink-0 w-20"
                    dateTime={item.publishedAt}
                  >
                    {formatDate(item.publishedAt)}
                  </time>

                  {/* バッジ */}
                  <span className={`shrink-0 px-2.5 py-1 text-xs font-semibold rounded-full ${badgeColor[item.category] ?? 'bg-gray-100 text-gray-500'}`}>
                    {item.category}
                  </span>

                  {/* タイトル */}
                  <p className="text-sm text-[#1a1a2e] leading-snug group-hover:text-[#5b6ef5] transition-colors">
                    {item.title}
                  </p>
                </a>
              </li>
            </FadeIn>
          ))}
        </ul>

        {/* もっと見るボタン */}
        <div className="text-center mt-10">
          <a
            href="#"
            className="inline-block px-8 py-3 border-2 border-[#5b6ef5] text-[#5b6ef5] text-sm font-semibold rounded-lg transition-all hover:bg-[#5b6ef5] hover:text-white hover:-translate-y-0.5"
          >
            ニュース一覧を見る
          </a>
        </div>
      </div>
    </section>
  )
}

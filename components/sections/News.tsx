/* =============================================
   ニュースセクション
   TODO: #4 CMS導入後、ここでmicroCMSから記事を取得する
   ============================================= */
import FadeIn from '@/components/FadeIn'

const newsItems = [
  {
    date: '2026.05.20',
    datetime: '2026-05-20',
    badge: 'プレスリリース',
    badgeColor: 'bg-[#5b6ef5]/10 text-[#5b6ef5]',
    title: 'Piece.ai、AIエージェントプラットフォームのβ版提供を開始',
  },
  {
    date: '2026.04.15',
    datetime: '2026-04-15',
    badge: 'お知らせ',
    badgeColor: 'bg-[#00c9a7]/10 text-[#00c9a7]',
    title: 'コーポレートサイトを公開しました',
  },
  {
    date: '2026.03.01',
    datetime: '2026-03-01',
    badge: 'メディア掲載',
    badgeColor: 'bg-purple-500/10 text-purple-500',
    title: '「非定型業務×AI」で注目されるPiece.aiの戦略とは（取材記事）',
  },
]

export default function News() {
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
          {newsItems.map(({ date, datetime, badge, badgeColor, title }, i) => (
            <FadeIn key={i}>
              <li className="border-b border-gray-200">
                <a
                  href="#"
                  className="flex flex-wrap items-center gap-5 px-4 py-6 transition-colors hover:bg-gray-50 group"
                >
                  <time className="font-[var(--font-en)] text-sm text-gray-400 shrink-0 w-20" dateTime={datetime}>
                    {date}
                  </time>
                  <span className={`shrink-0 px-2.5 py-1 text-xs font-semibold rounded-full ${badgeColor}`}>
                    {badge}
                  </span>
                  <p className="text-sm text-[#1a1a2e] leading-snug group-hover:text-[#5b6ef5] transition-colors">
                    {title}
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

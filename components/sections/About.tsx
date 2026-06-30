/* =============================================
   会社概要セクション
   ミッション・ビジョン・バリュー・会社情報
   ============================================= */
import FadeIn from '@/components/FadeIn'

type Lang = 'ja' | 'en'

const t = {
  ja: {
    sectionTag:   'ABOUT',
    sectionTitle: 'Piece.aiについて',

    missionTag:   'MISSION',
    missionTitle: '愛のある世界平和の実現',
    missionDesc:  'AIデジタル戦争に終止符を打ち、争いのない平和な世界を創造する。',

    visionTag:    'VISION',
    visionTitle:  '全ての人にAIの力を、全人類の幸福を最大化する',
    visionDesc:   '世界一使いやすいプラットフォームで、AI格差を是正し、すべての人がAIの恩恵を受けられる社会を目指します。',

    ceoRole: '代表取締役 CEO',
    ceoName: 'Yusuke Aoki',
    ceoBio:  '元伊藤忠商事にて最年少で新規事業責任者を務めた後、AI領域で連続起業。Piece.aiを創業し、全人類の幸福最大化というミッションに取り組む。',

    tableTitle: '会社情報',
    tableRows: [
      { label: '会社名',   value: 'Piece.ai株式会社' },
      { label: '事業内容', value: 'バイブワーキングAIエージェントプラットフォームの提供（Enterprise AI SaaS）' },
      { label: '設立',     value: '2026年6月8日' },
      { label: '従業員数', value: '15名' },
      { label: '代表',     value: '元伊藤忠商事 最年少新規事業責任者・AI連続起業家' },
    ],
  },
  en: {
    sectionTag:   'ABOUT',
    sectionTitle: 'About Piece.ai',

    missionTag:   'MISSION',
    missionTitle: 'Realizing World Peace with Love',
    missionDesc:  'Putting an end to the AI digital war, and creating a peaceful world free from conflict.',

    visionTag:    'VISION',
    visionTitle:  'AI for All — Maximizing the Happiness of All Humanity',
    visionDesc:   'With the world\'s most intuitive platform, we bridge the AI divide and ensure that everyone can benefit from the power of AI.',

    ceoRole: 'CEO & Co-Founder',
    ceoName: 'Yusuke Aoki',
    ceoBio:  'Former youngest Head of New Business Development at Itochu Corporation. Serial entrepreneur in AI. Founded Piece.ai with a mission to maximize the happiness of all humanity.',

    tableTitle: 'Company Info',
    tableRows: [
      { label: 'Company',   value: 'Piece.ai Inc.' },
      { label: 'Business',  value: 'Vibe Working AI Agent Platform (Enterprise AI SaaS)' },
      { label: 'Founded',   value: 'June 8, 2026' },
      { label: 'Team Size', value: '15 members' },
      { label: 'CEO',       value: 'Former youngest Head of New Business at Itochu Corp. · Serial AI entrepreneur' },
    ],
  },
}

export default function About({ lang = 'ja' }: { lang?: Lang }) {
  const tx = t[lang]

  return (
    <section id="about" className="bg-gray-50 py-24">
      <div className="max-w-[1140px] mx-auto px-6">

        {/* セクションヘッダー */}
        <div className="text-center mb-16">
          <p className="text-xs font-semibold tracking-[0.2em] text-[#5b6ef5] font-[var(--font-en)] mb-3">{tx.sectionTag}</p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a2e]">{tx.sectionTitle}</h2>
        </div>

        <div className="flex flex-col gap-10">

          {/* ミッション */}
          <FadeIn>
            <div className="relative overflow-hidden text-center py-16 bg-[#0a0a14] rounded-3xl text-white">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_50%,rgba(91,110,245,0.3)_0%,transparent_60%)]" />
              <div className="relative z-10 px-6">
                <p className="text-xs font-semibold tracking-[0.25em] text-[#00c9a7] mb-5 font-[var(--font-en)]">{tx.missionTag}</p>
                <p className="text-3xl md:text-4xl font-bold leading-[1.4] mb-6">{tx.missionTitle}</p>
                <p className="max-w-lg mx-auto text-sm text-white/65 leading-[1.8]">{tx.missionDesc}</p>
              </div>
            </div>
          </FadeIn>

          {/* ビジョン */}
          <FadeIn>
            <div className="text-center py-14 px-6 bg-white border border-gray-200 rounded-3xl">
              <p className="text-xs font-semibold tracking-[0.25em] text-[#5b6ef5] mb-5 font-[var(--font-en)]">{tx.visionTag}</p>
              <p className="text-2xl md:text-3xl font-bold text-[#1a1a2e] leading-[1.4] mb-5">{tx.visionTitle}</p>
              <p className="max-w-xl mx-auto text-sm text-gray-500 leading-[1.8]">{tx.visionDesc}</p>
            </div>
          </FadeIn>

          {/* 代表プロフィール */}
          <FadeIn>
            <div className="flex flex-col md:flex-row items-center md:items-start gap-10 p-12 bg-white border border-gray-200 rounded-3xl">
              <img
                src="/images/aoki.jpg"
                alt={tx.ceoName}
                className="shrink-0 w-24 h-24 rounded-full object-cover object-top"
              />
              <div className="text-center md:text-left">
                <p className="text-xs font-semibold tracking-[0.1em] text-[#5b6ef5] mb-1">{tx.ceoRole}</p>
                <p className="text-lg font-bold text-[#1a1a2e] mb-3">{tx.ceoName}</p>
                <p className="text-sm text-gray-500 leading-[1.8]">{tx.ceoBio}</p>
              </div>
            </div>
          </FadeIn>

          {/* 会社情報テーブル */}
          <FadeIn>
            <div className="bg-white border border-gray-200 rounded-3xl p-12">
              <h3 className="text-xl font-bold text-[#1a1a2e] pb-4 mb-6 border-b-2 border-gray-200">{tx.tableTitle}</h3>
              <table className="w-full border-collapse text-sm">
                <tbody>
                  {tx.tableRows.map(({ label, value }, i) => (
                    <tr key={label} className={i < tx.tableRows.length - 1 ? 'border-b border-gray-100' : ''}>
                      <th className="text-left py-4 pr-6 w-36 font-medium text-gray-500 align-top">{label}</th>
                      <td className="py-4 text-[#1a1a2e] leading-relaxed">{value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </FadeIn>

        </div>
      </div>
    </section>
  )
}

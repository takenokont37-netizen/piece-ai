/* =============================================
   会社概要セクション
   ミッション・ビジョン・バリュー・会社情報
   ============================================= */
import FadeIn from '@/components/FadeIn'

const values = [
  'ファーストクラス体験',
  '自由な発想',
  '自律的行動',
  'AIネイティブ思考',
  'イシュードリブン',
  'グロースマインドセット',
  '三方よし',
  'グローバルマインドセット',
  'Go Bold',
  '稼ぐ・削る・防ぐ',
]

const tableRows = [
  { label: '会社名',   value: 'Piece.ai株式会社' },
  { label: '事業内容', value: 'バイブワーキングAIエージェントプラットフォームの提供（Enterprise AI SaaS）' },
  { label: '設立',     value: '2024年（設立準備中）' },
  { label: '従業員数', value: '13名（創業メンバー4名）' },
  { label: '代表',     value: '元伊藤忠商事 最年少新規事業責任者・AI連続起業家' },
]

export default function About() {
  return (
    <section id="about" className="bg-gray-50 py-24">
      <div className="max-w-[1140px] mx-auto px-6">

        {/* セクションヘッダー */}
        <div className="text-center mb-16">
          <p className="text-xs font-semibold tracking-[0.2em] text-[#5b6ef5] font-[var(--font-en)] mb-3">ABOUT</p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a2e]">Piece.aiについて</h2>
        </div>

        <div className="flex flex-col gap-10">

          {/* ミッション */}
          <FadeIn>
            <div className="relative overflow-hidden text-center py-16 bg-[#0a0a14] rounded-3xl text-white">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_50%,rgba(91,110,245,0.3)_0%,transparent_60%)]" />
              <div className="relative z-10 px-6">
                <p className="text-xs font-semibold tracking-[0.25em] text-[#00c9a7] mb-5 font-[var(--font-en)]">MISSION</p>
                <p className="text-3xl md:text-4xl font-bold leading-[1.4] mb-6">
                  愛のある世界平和の実現
                </p>
                <p className="max-w-lg mx-auto text-sm text-white/65 leading-[1.8]">
                  AIデジタル戦争に終止符を打ち、<br />
                  争いのない平和な世界を創造する。
                </p>
              </div>
            </div>
          </FadeIn>

          {/* ビジョン */}
          <FadeIn>
            <div className="text-center py-14 px-6 bg-white border border-gray-200 rounded-3xl">
              <p className="text-xs font-semibold tracking-[0.25em] text-[#5b6ef5] mb-5 font-[var(--font-en)]">VISION</p>
              <p className="text-2xl md:text-3xl font-bold text-[#1a1a2e] leading-[1.4] mb-5">
                全ての人にAIの力を、<br />全人類の幸福を最大化する
              </p>
              <p className="max-w-xl mx-auto text-sm text-gray-500 leading-[1.8]">
                世界一使いやすいプラットフォームで、AI格差を是正し、<br className="hidden md:block" />
                すべての人がAIの恩恵を受けられる社会を目指します。
              </p>
            </div>
          </FadeIn>

          {/* バリュー */}
          <FadeIn>
            <div className="bg-white border border-gray-200 rounded-3xl p-12">
              <h3 className="text-xs font-semibold tracking-[0.25em] text-[#5b6ef5] text-center mb-8 font-[var(--font-en)]">VALUES</h3>
              <div className="flex flex-wrap justify-center gap-3">
                {values.map((v) => (
                  <span
                    key={v}
                    className="px-5 py-2.5 bg-gray-50 border border-gray-200 rounded-full text-sm font-semibold text-[#1a1a2e] hover:border-[#5b6ef5] hover:text-[#5b6ef5] transition-colors"
                  >
                    {v}
                  </span>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* 代表プロフィール */}
          <FadeIn>
            <div className="flex flex-col md:flex-row items-center md:items-start gap-10 p-12 bg-white border border-gray-200 rounded-3xl">
              <div className="shrink-0 w-24 h-24 rounded-full bg-gradient-to-br from-[#5b6ef5] to-[#00c9a7] flex items-center justify-center text-white font-bold text-xl font-[var(--font-en)]">
                YA
              </div>
              <div className="text-center md:text-left">
                <p className="text-xs font-semibold tracking-[0.1em] text-[#5b6ef5] mb-1">代表取締役 CEO</p>
                <p className="text-lg font-bold text-[#1a1a2e] mb-3">Yusuke Aoki</p>
                <p className="text-sm text-gray-500 leading-[1.8]">
                  元伊藤忠商事にて最年少で新規事業責任者を務めた後、
                  AI領域で連続起業。Piece.aiを創業し、
                  全人類の幸福最大化というミッションに取り組む。
                </p>
              </div>
            </div>
          </FadeIn>

          {/* 会社情報テーブル */}
          <FadeIn>
            <div className="bg-white border border-gray-200 rounded-3xl p-12">
              <h3 className="text-xl font-bold text-[#1a1a2e] pb-4 mb-6 border-b-2 border-gray-200">会社情報</h3>
              <table className="w-full border-collapse text-sm">
                <tbody>
                  {tableRows.map(({ label, value }, i) => (
                    <tr key={label} className={i < tableRows.length - 1 ? 'border-b border-gray-100' : ''}>
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

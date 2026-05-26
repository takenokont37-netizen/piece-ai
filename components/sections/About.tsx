/* =============================================
   会社概要セクション
   ============================================= */
import FadeIn from '@/components/FadeIn'

const tableRows = [
  { label: '会社名',   value: 'Piece.ai株式会社' },
  { label: '事業内容', value: 'AIエージェントサービスの提供（Enterprise AI SaaS）' },
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

        <div className="flex flex-col gap-16">

          {/* ビジョン */}
          <FadeIn>
            <div className="relative overflow-hidden text-center py-16 bg-[#0a0a14] rounded-3xl text-white">
              {/* 背景グラデーション */}
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_50%,rgba(91,110,245,0.3)_0%,transparent_60%)]" />
              <div className="relative z-10">
                <p className="text-xs font-semibold tracking-[0.25em] text-[#00c9a7] mb-5 font-[var(--font-en)]">OUR VISION</p>
                <p className="text-3xl md:text-5xl font-bold leading-[1.3] mb-6">
                  日本発・グローバル時価総額<br />
                  <strong className="text-[#5b6ef5] text-[1.2em]">10兆円</strong>規模を目指す
                </p>
                <p className="max-w-lg mx-auto text-sm text-white/65 leading-[1.8]">
                  AIエージェントが当たり前の社会インフラとなる未来へ向け、
                  日本から世界をリードするプロダクトを作り続けます。
                </p>
              </div>
            </div>
          </FadeIn>

          {/* 代表プロフィール */}
          <FadeIn>
            <div className="flex flex-col md:flex-row items-center md:items-start gap-10 p-12 bg-white border border-gray-200 rounded-3xl">
              {/* アバター */}
              <div className="shrink-0 w-24 h-24 rounded-full bg-gradient-to-br from-[#5b6ef5] to-[#00c9a7] flex items-center justify-center text-white font-bold text-xl font-[var(--font-en)]">
                CEO
              </div>
              {/* テキスト */}
              <div className="text-center md:text-left">
                <p className="text-xs font-semibold tracking-[0.1em] text-[#5b6ef5] mb-2">代表取締役 CEO</p>
                <p className="text-sm text-gray-500 leading-[1.8]">
                  元伊藤忠商事にて最年少で新規事業責任者を務めた後、
                  AI領域で連続起業。Piece.aiを創業し、
                  日本企業のDXを加速させるミッションに取り組む。
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

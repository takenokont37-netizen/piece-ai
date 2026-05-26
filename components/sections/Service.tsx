/* =============================================
   サービスセクション
   ============================================= */
import FadeIn from '@/components/FadeIn'

const services = [
  {
    icon: '🧠',
    title: '非定型業務の自動化',
    desc: 'ルーティン作業だけでなく、状況判断が必要な複雑な業務フローもAIエージェントが対応。人間にしかできないと思われていた仕事を自動化します。',
  },
  {
    icon: '🔧',
    title: 'ノーコード業務設計',
    desc: 'キントーンのように、エンジニアがいなくてもAIエージェントの業務フローを直感的に設計・運用できるプラットフォームを提供します。',
  },
  {
    icon: '🔗',
    title: '既存システムとの連携',
    desc: '社内の各種ツールやデータベースとシームレスに接続。情報の分断を解消し、全社横断での業務効率化を実現します。',
  },
  {
    icon: '🛡️',
    title: 'エンタープライズ対応',
    desc: '大企業が求めるセキュリティ・ガバナンス要件に対応。安心して業務の中枢をPiece.aiに任せることができます。',
  },
]

export default function Service() {
  return (
    <section id="service" className="bg-white py-24">
      <div className="max-w-[1140px] mx-auto px-6">

        {/* セクションヘッダー */}
        <div className="text-center mb-16">
          <p className="text-xs font-semibold tracking-[0.2em] text-[#5b6ef5] font-[var(--font-en)] mb-3">SERVICE</p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a2e] mb-5">Piece.aiが解決すること</h2>
          <p className="text-base text-gray-500 leading-[1.8]">
            「AI版キントーン」として、これまで属人化・手作業だった<br className="hidden md:block" />
            非定型業務をAIエージェントで自動化・標準化します。
          </p>
        </div>

        {/* カードグリッド */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map(({ icon, title, desc }, i) => (
            <FadeIn key={title} delay={i * 80}>
              <div className="p-8 bg-gray-50 border border-gray-200 rounded-2xl h-full transition-all hover:border-[#5b6ef5] hover:shadow-[0_8px_32px_rgba(91,110,245,0.12)] hover:-translate-y-1">
                <div className="w-13 h-13 flex items-center justify-center bg-gradient-to-br from-[#5b6ef5]/15 to-[#00c9a7]/15 rounded-xl mb-5">
                  <span className="text-2xl">{icon}</span>
                </div>
                <h3 className="text-base font-bold text-[#1a1a2e] mb-3">{title}</h3>
                <p className="text-sm text-gray-500 leading-[1.75]">{desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}

/* =============================================
   サービスセクション
   ============================================= */
import FadeIn from '@/components/FadeIn'

type Lang = 'ja' | 'en'

const t = {
  ja: {
    tag:   'SERVICE',
    title: 'Piece.aiが解決すること',
    desc:  '3分以内で業務特化型AIエージェントを構築。プロンプト不要で、誰でも真のAIトランスフォーメーションを実現します。',
    cards: [
      { icon: '⚡', title: '3分で構築できるAIエージェント',   desc: 'プロンプト不要。従業員が3分以内で業務特化型AIエージェントを構築でき、誰でも簡単に使いこなせるバイブワーキングプラットフォームを提供します。' },
      { icon: '🧠', title: '非定型業務の自動化',             desc: '状況判断が必要な複雑な業務フローもAIエージェントが対応。これまで属人化・手作業だった非定型業務を自動化・標準化します。' },
      { icon: '🔗', title: '既存システムとの連携',           desc: '社内の各種ツールやデータベースとシームレスに接続。情報の分断を解消し、全社横断での業務効率化を実現します。' },
      { icon: '🛡️', title: 'エンタープライズ対応',          desc: '超大手企業が求めるセキュリティ・ガバナンス要件に対応。安心して業務の中枢をPiece.aiに任せることができます。' },
    ],
  },
  en: {
    tag:   'SERVICE',
    title: 'What Piece.ai Solves',
    desc:  'Build task-specific AI agents in minutes — no prompt engineering needed. True AI transformation, accessible to everyone.',
    cards: [
      { icon: '⚡', title: 'AI Agents Built in 3 Minutes',         desc: 'No prompt engineering required. Any employee can build a task-specific AI agent in under 3 minutes using our intuitive vibe working platform.' },
      { icon: '🧠', title: 'Automating Non-Routine Work',          desc: 'AI agents handle even complex, judgment-heavy workflows. Automate and standardize tasks that were previously manual or siloed to individuals.' },
      { icon: '🔗', title: 'Connects with Existing Tools',         desc: 'Seamlessly integrates with your current systems and databases to eliminate information silos and drive company-wide efficiency.' },
      { icon: '🛡️', title: 'Enterprise-Ready',                    desc: 'Built to meet the security and governance requirements of large enterprises — with role-based access, audit logs, and compliance features.' },
    ],
  },
}

export default function Service({ lang = 'ja' }: { lang?: Lang }) {
  const tx = t[lang]

  return (
    <section id="service" className="bg-white py-24">
      <div className="max-w-[1140px] mx-auto px-6">

        {/* セクションヘッダー */}
        <div className="text-center mb-16">
          <p className="text-xs font-semibold tracking-[0.2em] text-[#5b6ef5] font-[var(--font-en)] mb-3">{tx.tag}</p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a2e] mb-5">{tx.title}</h2>
          <p className="text-base text-gray-500 leading-[1.8]">{tx.desc}</p>
        </div>

        {/* カードグリッド */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {tx.cards.map(({ icon, title, desc }, i) => (
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

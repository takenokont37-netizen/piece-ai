/* =============================================
   サービスセクション
   ============================================= */
import FadeIn from '@/components/FadeIn'

type Lang = 'ja' | 'en'

const t = {
  ja: {
    tag:   'SERVICE',
    title: 'AIツールを入れても、使われない。\nその課題に、Piece.aiが答えます。',
    desc:  'プロンプト入力もAI知識も不要。誰もが使いこなせるエンタープライズAIエージェント基盤を提供します。',
    cards: [
      { icon: '⚡', title: '全員が使いこなせる',       desc: 'AIの専門知識もプロンプト入力も不要。はじめてAIに触れる社員でも、自分の業務に特化したAIエージェントを即日から使いこなせます。' },
      { icon: '🧠', title: '複雑な業務も自動化できる', desc: '「AIでは対応できない」と諦めていた、状況判断が必要な非定型業務にも対応。属人化していた業務を、組織全体の力に変えます。' },
      { icon: '🔗', title: '既存ツールとそのまま使える', desc: 'Slack・Notionをはじめ、社内で使い慣れたツールやデータベースとそのまま連携。導入のために業務フローを変える必要はありません。' },
      { icon: '🛡️', title: '大企業の要件を満たす',    desc: '大手企業が求めるセキュリティ・ガバナンス要件に対応。IT部門の承認も通りやすい設計で、全社展開まで安心して任せられます。' },
    ],
  },
  en: {
    tag:   'SERVICE',
    title: 'AI tools that nobody uses.\nPiece.ai changes that.',
    desc:  'No prompts, no AI expertise required. An enterprise AI agent platform that everyone on your team can actually use.',
    cards: [
      { icon: '⚡', title: 'Everyone can use it',          desc: 'No AI knowledge or prompt engineering needed. Even employees who have never used AI can put a task-specific AI agent to work from day one.' },
      { icon: '🧠', title: 'Automate complex workflows',   desc: 'Handles the judgment-heavy, non-routine tasks that other AI tools can\'t. Turn work that was siloed to individuals into an organizational capability.' },
      { icon: '🔗', title: 'Works with your existing tools', desc: 'Integrates with Slack, Notion, and the tools your team already uses — no need to overhaul your workflows just to adopt AI.' },
      { icon: '🛡️', title: 'Built for large enterprises',  desc: 'Meets the security and governance requirements of large organizations. Designed to clear IT approval and scale company-wide with confidence.' },
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
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a2e] mb-5 whitespace-pre-line">{tx.title}</h2>
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

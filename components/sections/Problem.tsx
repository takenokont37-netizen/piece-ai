/* =============================================
   課題共感セクション
   - Hero（ダーク）に続くダーク背景で「使われないAI」の課題を提示
   - 次の Service（白背景）で解決策に転換する物語をつくる
   ============================================= */
import FadeIn from '@/components/FadeIn'

type Lang = 'ja' | 'en'

const t = {
  ja: {
    tag:   'CHALLENGE',
    title: 'AIを導入したのに、\n使われない。',
    lead:  'いま、多くの企業が同じ壁に直面しています。ツールは増えても、現場の業務は変わらない——。',
    cards: [
      {
        no: '01',
        title: '一部の人しか使いこなせない',
        desc:  'プロンプトを書ける一部の社員だけがAIを活用し、大多数は置いてけぼり。全社の生産性にはつながりません。',
      },
      {
        no: '02',
        title: '自社の複雑な業務に踏み込めない',
        desc:  '汎用AIは便利でも、判断が必要な非定型業務や属人化した業務フローには対応しきれません。',
      },
      {
        no: '03',
        title: '個人は変わっても、組織は変わらない',
        desc:  'AI活用が一人ひとりにとどまり、ハイパフォーマーの知見がチーム全体に広がっていきません。',
      },
    ],
    bridge: 'Piece.aiは、この「使われないAI」の課題に正面から向き合います。',
  },
  en: {
    tag:   'CHALLENGE',
    title: 'You adopted AI.\nBut no one uses it.',
    lead:  'Many companies hit the same wall. The tools pile up, yet the actual work on the ground never changes.',
    cards: [
      {
        no: '01',
        title: 'Only a few can actually use it',
        desc:  'Only the handful of employees who can write prompts get value from AI. Everyone else is left behind — and company-wide productivity never moves.',
      },
      {
        no: '02',
        title: "It can't handle your real workflows",
        desc:  'General-purpose AI is convenient, but it falls short on judgment-heavy, non-routine work and the processes siloed to specific people.',
      },
      {
        no: '03',
        title: 'Individuals change, the organization stays the same',
        desc:  'AI usage stays stuck at the individual level. The know-how of your top performers never spreads across the team.',
      },
    ],
    bridge: 'Piece.ai takes on this challenge of "AI that no one uses" head-on.',
  },
}

export default function Problem({ lang = 'ja' }: { lang?: Lang }) {
  const tx = t[lang]

  return (
    <section id="challenge" className="relative bg-[#0a0a14] py-24 overflow-hidden">

      {/* 背景装飾オーブ（Heroから続く世界観） */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-[500px] h-[500px] rounded-full opacity-20 blur-[100px] bg-[radial-gradient(circle,#5b6ef5_0%,transparent_70%)] top-[10%] -left-[150px]" />
        <div className="absolute w-[400px] h-[400px] rounded-full opacity-20 blur-[100px] bg-[radial-gradient(circle,#a855f7_0%,transparent_70%)] bottom-[5%] -right-[120px]" />
      </div>

      <div className="relative z-10 max-w-[1140px] mx-auto px-6">

        {/* セクションヘッダー */}
        <div className="text-center mb-16">
          <p className="text-xs font-semibold tracking-[0.2em] text-[#00c9a7] font-[var(--font-en)] mb-3">{tx.tag}</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white leading-[1.4] mb-6 whitespace-pre-line">{tx.title}</h2>
          <p className="max-w-xl mx-auto text-base text-white/60 leading-[1.9]">{tx.lead}</p>
        </div>

        {/* 課題カード（3枚） */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {tx.cards.map(({ no, title, desc }, i) => (
            <FadeIn key={no} delay={i * 80}>
              <div className="h-full p-8 bg-white/[0.04] border border-white/10 rounded-2xl backdrop-blur-sm">
                <p className="font-[var(--font-en)] text-3xl font-bold text-white/15 mb-4">{no}</p>
                <h3 className="text-base font-bold text-white mb-3">{title}</h3>
                <p className="text-sm text-white/55 leading-[1.8]">{desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* 解決策へのブリッジ */}
        <FadeIn delay={120}>
          <p className="text-center text-base md:text-lg font-semibold text-white mt-14">
            {tx.bridge}
          </p>
        </FadeIn>

      </div>
    </section>
  )
}

'use client'
/* =============================================
   ヒーローセクション
   - フルスクリーン・ダーク背景
   - 浮遊する装飾オーブ（CSS アニメーション）
   - 左: テキスト + CTA / 右: AI機能カードグリッド
   ============================================= */
import Link from 'next/link'

type Lang = 'ja' | 'en'

const cardAnimClass = ['ai-card-1', 'ai-card-2', 'ai-card-3', 'ai-card-4']

const t = {
  ja: {
    tag:  'Enterprise AI SaaS',
    h1a:  '全ての人に、',
    h1b:  'AIの力',
    h1c:  'を。',
    sub:  '3分以内で業務特化型AIエージェントを構築。プロンプト不要で、誰でも使いこなせるバイブワーキングAIエージェントプラットフォーム。',
    cta1: '無料でお問い合わせ',
    cta2: 'サービスを見る',
    cards: [
      { icon: '⚡', label: '業務自動化' },
      { icon: '🤖', label: 'AIエージェント' },
      { icon: '📊', label: 'データ連携' },
      { icon: '🔗', label: 'システム統合' },
    ],
  },
  en: {
    tag:  'Enterprise AI SaaS',
    h1a:  'AI for',
    h1b:  'Everyone',
    h1c:  '.',
    sub:  'Build task-specific AI agents in under 3 minutes. No prompt engineering needed — our vibe working AI agent platform puts the power of AI in everyone\'s hands.',
    cta1: 'Contact Us Free',
    cta2: 'See Our Service',
    cards: [
      { icon: '⚡', label: 'Automation' },
      { icon: '🤖', label: 'AI Agents' },
      { icon: '📊', label: 'Data Connect' },
      { icon: '🔗', label: 'Integration' },
    ],
  },
}

export default function Hero({ lang = 'ja' }: { lang?: Lang }) {
  const tx = t[lang]

  return (
    <section id="top" className="relative min-h-screen flex items-center bg-[#0a0a14] overflow-hidden pt-[72px]">

      {/* 背景装飾オーブ */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-[600px] h-[600px] rounded-full opacity-50 blur-[80px] bg-[radial-gradient(circle,#5b6ef5_0%,transparent_70%)] -top-[200px] -right-[100px] animate-float" />
        <div className="absolute w-[400px] h-[400px] rounded-full opacity-50 blur-[80px] bg-[radial-gradient(circle,#00c9a7_0%,transparent_70%)] -bottom-[100px] -left-[100px] animate-float-2" />
        <div className="absolute w-[300px] h-[300px] rounded-full opacity-30 blur-[80px] bg-[radial-gradient(circle,#a855f7_0%,transparent_70%)] top-[40%] left-[30%] animate-float-3" />
      </div>

      {/* コンテンツ */}
      <div className="relative z-10 max-w-[1140px] mx-auto px-6 py-20 w-full grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

        {/* 左: テキスト */}
        <div className="text-white">
          <span className="inline-block text-xs font-semibold tracking-[0.2em] text-[#00c9a7] border border-[#00c9a7]/40 rounded-full px-3.5 py-1.5 mb-5">
            {tx.tag}
          </span>

          <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold leading-[1.2] tracking-tight mb-6">
            {tx.h1a}<br />
            <span className="text-[#5b6ef5] relative">
              {tx.h1b}
              <span className="absolute bottom-1 left-0 right-0 h-[3px] bg-gradient-to-r from-[#5b6ef5] to-[#00c9a7] rounded-full" />
            </span>
            {tx.h1c}
          </h1>

          <p className="text-base text-white/70 leading-[1.8] mb-10">
            {tx.sub}
          </p>

          <div className="flex flex-wrap gap-4">
            <Link
              href="#contact"
              className="px-8 py-3.5 bg-[#5b6ef5] text-white text-sm font-semibold rounded-lg shadow-[0_4px_14px_rgba(91,110,245,0.35)] transition-all hover:bg-[#3a4fd4] hover:shadow-[0_6px_20px_rgba(91,110,245,0.5)] hover:-translate-y-0.5"
            >
              {tx.cta1}
            </Link>
            <Link
              href="#service"
              className="px-8 py-3.5 border border-white/50 text-white/90 text-sm font-semibold rounded-lg transition-all hover:bg-white/10 hover:border-white hover:text-white hover:-translate-y-0.5"
            >
              {tx.cta2}
            </Link>
          </div>
        </div>

        {/* 右: AI機能カードグリッド */}
        <div className="flex items-center justify-center">
          <div className="grid grid-cols-2 gap-4 max-w-[340px] w-full">
            {tx.cards.map(({ icon, label }, i) => (
              <div
                key={label}
                className={`${cardAnimClass[i]} bg-white/7 border border-white/12 rounded-2xl p-6 text-center backdrop-blur-md transition-all hover:bg-white/12 hover:border-[#5b6ef5]/50 hover:-translate-y-1`}
              >
                <div className="text-3xl mb-2">{icon}</div>
                <p className="text-xs text-white/70 font-medium">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

'use client'
/* =============================================
   ヒーローセクション
   - フルスクリーン・ダーク背景
   - 浮遊する装飾オーブ（CSS アニメーション）
   - 左: テキスト + CTA / 右: AI機能カードグリッド
   ============================================= */
import Link from 'next/link'

const aiCards = [
  { icon: '⚡', label: '業務自動化' },
  { icon: '🤖', label: 'AIエージェント' },
  { icon: '📊', label: 'データ連携' },
  { icon: '🔗', label: 'システム統合' },
]

const cardAnimClass = ['ai-card-1', 'ai-card-2', 'ai-card-3', 'ai-card-4']

export default function Hero() {
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
          {/* タグライン */}
          <span className="inline-block text-xs font-semibold tracking-[0.2em] text-[#00c9a7] border border-[#00c9a7]/40 rounded-full px-3.5 py-1.5 mb-5">
            Enterprise AI SaaS
          </span>

          {/* メインコピー */}
          <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold leading-[1.2] tracking-tight mb-6">
            全ての人に、<br />
            <span className="text-[#5b6ef5] relative">
              AIの力
              <span className="absolute bottom-1 left-0 right-0 h-[3px] bg-gradient-to-r from-[#5b6ef5] to-[#00c9a7] rounded-full" />
            </span>
            を。
          </h1>

          {/* サブコピー */}
          <p className="text-base text-white/70 leading-[1.8] mb-10">
            3分以内で業務特化型AIエージェントを構築。<br className="hidden md:block" />
            プロンプト不要で、誰でも使いこなせる<br />
            バイブワーキングAIエージェントプラットフォーム。
          </p>

          {/* CTAボタン */}
          <div className="flex flex-wrap gap-4">
            <Link
              href="#contact"
              className="px-8 py-3.5 bg-[#5b6ef5] text-white text-sm font-semibold rounded-lg shadow-[0_4px_14px_rgba(91,110,245,0.35)] transition-all hover:bg-[#3a4fd4] hover:shadow-[0_6px_20px_rgba(91,110,245,0.5)] hover:-translate-y-0.5"
            >
              無料でお問い合わせ
            </Link>
            <Link
              href="#service"
              className="px-8 py-3.5 border border-white/50 text-white/90 text-sm font-semibold rounded-lg transition-all hover:bg-white/10 hover:border-white hover:text-white hover:-translate-y-0.5"
            >
              サービスを見る
            </Link>
          </div>
        </div>

        {/* 右: AI機能カードグリッド */}
        <div className="flex items-center justify-center">
          <div className="grid grid-cols-2 gap-4 max-w-[340px] w-full">
            {aiCards.map(({ icon, label }, i) => (
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

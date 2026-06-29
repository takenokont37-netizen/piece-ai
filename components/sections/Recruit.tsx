/* =============================================
   採用ページ本体（/recruit ・ /en/recruit で使用）
   - ヒーロー / なぜPiece.aiか / 募集職種 / 応募導線
   - 応募はトップのお問い合わせフォーム（種別「採用・入社のご応募」）へ集約
   ============================================= */
import Link from 'next/link'
import FadeIn from '@/components/FadeIn'

type Lang = 'ja' | 'en'

const t = {
  ja: {
    /* ヒーロー */
    tag:      'CAREERS',
    heroH1a:  'AI for Everyone を、',
    heroH1b:  '共につくる仲間へ。',
    heroSub:  'Piece.aiは、日本発・グローバルを目指すEnterprise AI SaaSスタートアップです。「Love and Peace ― 愛のある世界平和」を掲げ、AIによる経済格差をなくす。その実現に向けて、各領域のプロフェッショナルを募集しています。',
    heroCta:  '募集職種を見る',
    contactHref: '/#contact',

    /* なぜPiece.aiか */
    whyTag:   'WHY PIECE.AI',
    whyTitle: 'Piece.aiで働く理由',
    whys: [
      {
        icon: '🚀',
        title: '創業期だからこその裁量',
        desc:  '組織はまだ十数名。あなたの意思決定が、そのまま会社の方向性になります。CXO・VP・マネージャークラスとして、事業の中核を担っていただきます。',
      },
      {
        icon: '🌍',
        title: '日本発・グローバルへの挑戦',
        desc:  '目指すのは日本発のグローバルAI企業。エンタープライズから富裕層向けまで、世界規模のマーケットに挑みます。',
      },
      {
        icon: '🧩',
        title: 'ミッションドリブン',
        desc:  '「すべての人にAIの力を」。富裕層・大企業で得た利益を、AIの恩恵を受けられない人々へ再配分する。利益と社会貢献を両立させます。',
      },
      {
        icon: '💡',
        title: '第一線のプロが集う環境',
        desc:  '元伊藤忠商事 最年少新規事業責任者の代表をはじめ、各業界の専門家が集結。互いの暗黙知が交わる場で、自身の専門性をさらに磨けます。',
      },
    ],

    /* 募集職種 */
    jobsTag:   'OPEN POSITIONS',
    jobsTitle: '募集職種',
    jobsLead:  '各ポジションともCXO・VP・マネージャークラスを中心に、幅広く募集しています。',
    jobs: [
      { title: 'エンジニア',             desc: 'AIエージェント基盤の設計・開発を担う、プロダクトの中核エンジニア。' },
      { title: 'プロダクト開発',         desc: 'プロダクトマネジメント・UX。プロダクトの方向性を描き、形にする。' },
      { title: '営業（セールス）',       desc: 'エンタープライズ向けのフィールドセールス。大手企業との商談を推進。' },
      { title: '事業開発・アライアンス', desc: '大手企業との提携や新規事業の立ち上げを牽引するBizDev。' },
      { title: 'マーケティング',         desc: 'BtoB／BtoC／ブランディング。認知獲得から需要創出までを設計。' },
      { title: 'ファイナンス',           desc: 'グローバル資金調達・アライアンス・管理会計・経理。財務の基盤を築く。' },
      { title: 'M&A',                    desc: 'スタートアップ買収を中心に、非連続な成長の設計と実行を担う。' },
      { title: 'メディアコンテンツ制作', desc: 'ポッドキャスト・動画など、自社メディアの企画・制作。' },
      { title: 'イベント企画',           desc: 'VIP向けイベント・カンファレンスの企画・運営。' },
    ],

    /* 応募導線 */
    ctaTitle: 'まずは、カジュアルにお話ししませんか。',
    ctaDesc:  '「自分が活躍できるか分からない」という方も歓迎です。お問い合わせフォームより、種別「採用・入社のご応募」を選んでお気軽にご連絡ください。',
    ctaBtn:   'エントリーする',
    backHome: 'トップページに戻る',
  },
  en: {
    tag:      'CAREERS',
    heroH1a:  'Build "AI for Everyone"',
    heroH1b:  'with us.',
    heroSub:  'Piece.ai is a Japan-born Enterprise AI SaaS startup going global. Under our mission of "Love and Peace," we work to close the economic divide created by AI. We are hiring professionals across every domain to make it happen.',
    heroCta:  'See Open Positions',
    contactHref: '/en/#contact',

    whyTag:   'WHY PIECE.AI',
    whyTitle: 'Why Work at Piece.ai',
    whys: [
      {
        icon: '🚀',
        title: 'Real ownership, from the start',
        desc:  'We are still a team of just over a dozen. Your decisions shape the direction of the company. Join as a CXO, VP, or manager and own the core of the business.',
      },
      {
        icon: '🌍',
        title: 'Japan-born, going global',
        desc:  'We aim to be a global AI company born in Japan — serving everyone from enterprises to high-net-worth individuals on a worldwide stage.',
      },
      {
        icon: '🧩',
        title: 'Mission-driven',
        desc:  '"AI for Everyone." We redistribute the profits earned from enterprises and the wealthy to those left behind by AI — combining profit with social impact.',
      },
      {
        icon: '💡',
        title: 'Surrounded by top professionals',
        desc:  'Led by a CEO who was the youngest-ever head of new business at Itochu, our team brings together experts from every industry. Sharpen your craft where tacit knowledge meets.',
      },
    ],

    jobsTag:   'OPEN POSITIONS',
    jobsTitle: 'Open Positions',
    jobsLead:  'We are hiring broadly, primarily at the CXO, VP, and manager level.',
    jobs: [
      { title: 'Engineering',                 desc: 'Core engineers designing and building our AI agent platform.' },
      { title: 'Product',                     desc: 'Product management and UX — shape and ship the product direction.' },
      { title: 'Sales',                       desc: 'Enterprise field sales driving deals with major corporations.' },
      { title: 'Business Development',        desc: 'Lead alliances with large enterprises and launch new businesses.' },
      { title: 'Marketing',                   desc: 'BtoB / BtoC / branding — from awareness to demand generation.' },
      { title: 'Finance',                     desc: 'Global fundraising, alliances, management accounting, and accounting.' },
      { title: 'M&A',                         desc: 'Drive non-linear growth through startup acquisitions.' },
      { title: 'Media & Content',             desc: 'Plan and produce our own media — podcasts, video, and more.' },
      { title: 'Event Planning',              desc: 'Plan and run VIP events and conferences.' },
    ],

    ctaTitle: 'Let\'s start with a casual chat.',
    ctaDesc:  'Not sure where you\'d fit? You\'re welcome too. Reach out via our contact form and select "Job Application."',
    ctaBtn:   'Apply Now',
    backHome: 'Back to Home',
  },
}

export default function Recruit({ lang = 'ja' }: { lang?: Lang }) {
  const tx = t[lang]

  return (
    <>
      {/* ===== ヒーロー（ダーク） ===== */}
      <section className="relative min-h-[70vh] flex items-center bg-[#0a0a14] overflow-hidden pt-[72px]">
        {/* 背景装飾オーブ */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute w-[600px] h-[600px] rounded-full opacity-40 blur-[90px] bg-[radial-gradient(circle,#5b6ef5_0%,transparent_70%)] -top-[150px] -right-[100px]" />
          <div className="absolute w-[400px] h-[400px] rounded-full opacity-40 blur-[90px] bg-[radial-gradient(circle,#00c9a7_0%,transparent_70%)] -bottom-[120px] -left-[100px]" />
        </div>

        <div className="relative z-10 max-w-[1140px] mx-auto px-6 py-24 w-full">
          <span className="inline-block text-xs font-semibold tracking-[0.2em] text-[#00c9a7] border border-[#00c9a7]/40 rounded-full px-3.5 py-1.5 mb-6">
            {tx.tag}
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-[3.25rem] font-bold leading-[1.3] tracking-tight text-white mb-7">
            {tx.heroH1a}<br />
            <span className="text-[#5b6ef5]">{tx.heroH1b}</span>
          </h1>
          <p className="max-w-2xl text-base text-white/70 leading-[1.9] mb-10">{tx.heroSub}</p>
          <a
            href="#positions"
            className="inline-block px-8 py-3.5 bg-[#5b6ef5] text-white text-sm font-semibold rounded-lg shadow-[0_4px_14px_rgba(91,110,245,0.35)] transition-all hover:bg-[#3a4fd4] hover:-translate-y-0.5"
          >
            {tx.heroCta}
          </a>
        </div>
      </section>

      {/* ===== なぜPiece.aiか（白） ===== */}
      <section className="bg-white py-24">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-xs font-semibold tracking-[0.2em] text-[#5b6ef5] font-[var(--font-en)] mb-3">{tx.whyTag}</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a2e]">{tx.whyTitle}</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {tx.whys.map(({ icon, title, desc }, i) => (
              <FadeIn key={title} delay={i * 80}>
                <div className="h-full p-9 bg-gray-50 border border-gray-200 rounded-2xl transition-all hover:border-[#5b6ef5] hover:shadow-[0_8px_32px_rgba(91,110,245,0.1)] hover:-translate-y-1">
                  <div className="w-13 h-13 flex items-center justify-center bg-gradient-to-br from-[#5b6ef5]/15 to-[#00c9a7]/15 rounded-xl mb-5">
                    <span className="text-2xl">{icon}</span>
                  </div>
                  <h3 className="text-lg font-bold text-[#1a1a2e] mb-3">{title}</h3>
                  <p className="text-sm text-gray-500 leading-[1.8]">{desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 募集職種（グレー） ===== */}
      <section id="positions" className="bg-gray-50 py-24 scroll-mt-[72px]">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-xs font-semibold tracking-[0.2em] text-[#5b6ef5] font-[var(--font-en)] mb-3">{tx.jobsTag}</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a2e] mb-5">{tx.jobsTitle}</h2>
            <p className="text-base text-gray-500 leading-[1.8]">{tx.jobsLead}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tx.jobs.map(({ title, desc }, i) => (
              <FadeIn key={title} delay={i * 60}>
                <div className="h-full p-8 bg-white border border-gray-200 rounded-2xl transition-all hover:border-[#5b6ef5] hover:shadow-[0_8px_32px_rgba(91,110,245,0.12)] hover:-translate-y-1">
                  <h3 className="text-base font-bold text-[#1a1a2e] mb-3">{title}</h3>
                  <p className="text-sm text-gray-500 leading-[1.75]">{desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 応募導線（ダーク） ===== */}
      <section className="relative bg-[#0a0a14] py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,rgba(91,110,245,0.25)_0%,transparent_60%)]" />
        <div className="relative z-10 max-w-[760px] mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white leading-[1.5] mb-5">{tx.ctaTitle}</h2>
          <p className="text-sm text-white/65 leading-[1.9] mb-10">{tx.ctaDesc}</p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href={tx.contactHref}
              className="px-8 py-3.5 bg-[#5b6ef5] text-white text-sm font-semibold rounded-lg shadow-[0_4px_14px_rgba(91,110,245,0.35)] transition-all hover:bg-[#3a4fd4] hover:-translate-y-0.5"
            >
              {tx.ctaBtn}
            </Link>
            <Link
              href={lang === 'en' ? '/en' : '/'}
              className="px-8 py-3.5 border border-white/40 text-white/80 text-sm font-semibold rounded-lg transition-all hover:bg-white/10 hover:border-white hover:text-white"
            >
              {tx.backHome}
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

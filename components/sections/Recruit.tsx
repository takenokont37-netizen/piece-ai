/* =============================================
   採用ページ本体（/recruit ・ /en/recruit で使用）
   - トップページと差別化するため、ティール基調＋パンくず＋専用フォーム
   - 構成：ヒーロー / ビジョン / なぜPiece.aiか / 募集職種 / 応募フォーム
   ============================================= */
import Link from 'next/link'
import FadeIn from '@/components/FadeIn'
import RecruitContact from '@/components/sections/RecruitContact'

type Lang = 'ja' | 'en'

const t = {
  ja: {
    home: 'ホーム',
    crumb: '採用情報',
    /* ヒーロー */
    badge:   "WE'RE HIRING",
    heroH1a: '「AI for Everyone」を、',
    heroH1b: '世界へ。',
    heroSub: 'Piece.aiは、日本発・グローバル時価総額10兆円規模を目指すEnterprise AI SaaSスタートアップです。その挑戦を共にする仲間を、各領域で募集しています。',
    heroCta: '募集職種を見る',

    /* ビジョン帯 */
    visionTag:   'OUR VISION',
    visionTitle: '日本発、世界のAI革命を完遂する。',
    visionPoints: [
      'Day 1からグローバル市場で、時価総額10兆円規模の企業を目指す。',
      '1〜3年後には、日本のIP × AIエージェントをコンシューマー向けに展開。',
      '世界的リーダー企業との戦略的パートナーシップ・大型資金調達を推進。',
    ],

    /* なぜPiece.aiか */
    whyTag:   'WHY PIECE.AI',
    whyTitle: 'Piece.aiで働く理由',
    whys: [
      { icon: '🚀', title: '創業期だからこその裁量', desc: '組織はまだ十数名。あなたの意思決定が、そのまま会社の方向性になります。ゼロイチのフェーズから事業の中核を担えます。' },
      { icon: '📈', title: '将来の経営・幹部候補', desc: 'CXO・VP・マネージャークラスとして参画いただき、会社の成長とともに経営の中枢を担うキャリアを描けます。' },
      { icon: '🧩', title: 'ミッションドリブン', desc: '「すべての人にAIの力を」。富裕層・大企業で得た利益を、AIの恩恵を受けられない人々へ再配分し、利益と社会貢献を両立させます。' },
      { icon: '💡', title: '第一線のプロが集う環境', desc: '元伊藤忠商事 最年少新規事業責任者の代表をはじめ、各業界の専門家が集結。互いの暗黙知が交わる場で専門性を磨けます。' },
    ],

    /* 募集職種 */
    jobsTag:   'OPEN POSITIONS',
    jobsTitle: '募集職種',
    jobsLead:  '各ポジションともCXO・VP・マネージャークラスを中心に、幅広く募集しています。',
    workNote:  '働き方：フルリモート可。副業・業務委託からの参画も歓迎します。',
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

    /* 応募 */
    applyTag:   'ENTRY',
    applyTitle: 'まずは、カジュアルにお話ししませんか。',
    applyDesc:  '「自分が活躍できるか分からない」という方も歓迎です。ご希望の職種を選んで、お気軽にご応募ください。',
    backHome:   '← トップページに戻る',
  },
  en: {
    home: 'Home',
    crumb: 'Careers',
    badge:   "WE'RE HIRING",
    heroH1a: 'Take "AI for Everyone"',
    heroH1b: 'to the world.',
    heroSub: 'Piece.ai is a Japan-born Enterprise AI SaaS startup aiming for a global market cap of ¥10 trillion. We are hiring people across every domain to take on this challenge together.',
    heroCta: 'See Open Positions',

    visionTag:   'OUR VISION',
    visionTitle: 'Complete the global AI revolution — from Japan.',
    visionPoints: [
      'Aiming for a ¥10-trillion-scale company on the global market from Day 1.',
      'Within 1–3 years, bringing Japanese IP × AI agents to consumers.',
      'Driving strategic partnerships and major fundraising with world-leading companies.',
    ],

    whyTag:   'WHY PIECE.AI',
    whyTitle: 'Why Work at Piece.ai',
    whys: [
      { icon: '🚀', title: 'Real ownership from the start', desc: 'We are still a team of just over a dozen. Your decisions shape the company. Own the core of the business from the zero-to-one phase.' },
      { icon: '📈', title: 'A path to leadership', desc: 'Join as a CXO, VP, or manager and grow into the core of management as the company scales.' },
      { icon: '🧩', title: 'Mission-driven', desc: '"AI for Everyone." We redistribute profits earned from enterprises and the wealthy to those left behind by AI — combining profit with social impact.' },
      { icon: '💡', title: 'Surrounded by top professionals', desc: 'Led by a CEO who was the youngest-ever head of new business at Itochu, our team brings together experts from every industry.' },
    ],

    jobsTag:   'OPEN POSITIONS',
    jobsTitle: 'Open Positions',
    jobsLead:  'We are hiring broadly, primarily at the CXO, VP, and manager level.',
    workNote:  'How we work: Fully remote OK. Side-project and contract engagements are welcome.',
    jobs: [
      { title: 'Engineering',          desc: 'Core engineers designing and building our AI agent platform.' },
      { title: 'Product',              desc: 'Product management and UX — shape and ship the product direction.' },
      { title: 'Sales',                desc: 'Enterprise field sales driving deals with major corporations.' },
      { title: 'Business Development', desc: 'Lead alliances with large enterprises and launch new businesses.' },
      { title: 'Marketing',            desc: 'BtoB / BtoC / branding — from awareness to demand generation.' },
      { title: 'Finance',              desc: 'Global fundraising, alliances, management accounting, and accounting.' },
      { title: 'M&A',                  desc: 'Drive non-linear growth through startup acquisitions.' },
      { title: 'Media & Content',      desc: 'Plan and produce our own media — podcasts, video, and more.' },
      { title: 'Event Planning',       desc: 'Plan and run VIP events and conferences.' },
    ],

    applyTag:   'ENTRY',
    applyTitle: "Let's start with a casual chat.",
    applyDesc:  "Not sure where you'd fit? You're welcome too. Pick a position of interest and reach out.",
    backHome:   '← Back to Home',
  },
}

export default function Recruit({ lang = 'ja' }: { lang?: Lang }) {
  const tx = t[lang]
  const homeHref = lang === 'en' ? '/en' : '/'

  return (
    <>
      {/* ===== ヒーロー（ティール基調・パンくずでページ移動を明示） ===== */}
      <section className="relative min-h-[72vh] flex items-center bg-[#06121a] overflow-hidden pt-[72px]">
        {/* 背景：ティール主体のオーブ＋大きな透かし文字でトップと差別化 */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute w-[620px] h-[620px] rounded-full opacity-45 blur-[90px] bg-[radial-gradient(circle,#00c9a7_0%,transparent_70%)] -top-[160px] -right-[120px]" />
          <div className="absolute w-[420px] h-[420px] rounded-full opacity-35 blur-[90px] bg-[radial-gradient(circle,#5b6ef5_0%,transparent_70%)] -bottom-[140px] -left-[110px]" />
        </div>
        <span className="pointer-events-none select-none absolute -bottom-6 right-2 md:right-8 font-[var(--font-en)] font-bold text-white/[0.04] text-[18vw] leading-none tracking-tighter">
          CAREERS
        </span>

        <div className="relative z-10 max-w-[1140px] mx-auto px-6 py-20 w-full">
          {/* パンくず */}
          <nav className="flex items-center gap-2 text-xs text-white/50 mb-7">
            <Link href={homeHref} className="hover:text-white transition-colors">{tx.home}</Link>
            <span>/</span>
            <span className="text-[#00c9a7]">{tx.crumb}</span>
          </nav>

          <span className="inline-block text-xs font-bold tracking-[0.25em] text-[#06121a] bg-[#00c9a7] rounded-full px-4 py-1.5 mb-6">
            {tx.badge}
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold leading-[1.25] tracking-tight text-white mb-7">
            {tx.heroH1a}<br />
            <span className="text-[#00c9a7]">{tx.heroH1b}</span>
          </h1>
          <p className="max-w-2xl text-base text-white/70 leading-[1.9] mb-10">{tx.heroSub}</p>
          <a
            href="#positions"
            className="inline-block px-8 py-3.5 bg-[#00c9a7] text-[#06121a] text-sm font-bold rounded-lg shadow-[0_4px_14px_rgba(0,201,167,0.4)] transition-all hover:bg-[#00e0bb] hover:-translate-y-0.5"
          >
            {tx.heroCta}
          </a>
        </div>
      </section>

      {/* ===== ビジョン帯（トップにない専用コンテンツ） ===== */}
      <section className="bg-[#0a0a14] py-20">
        <div className="max-w-[1000px] mx-auto px-6">
          <FadeIn>
            <p className="text-xs font-semibold tracking-[0.25em] text-[#00c9a7] font-[var(--font-en)] mb-5">{tx.visionTag}</p>
            <h2 className="text-2xl md:text-4xl font-bold text-white leading-[1.45] mb-10">{tx.visionTitle}</h2>
            <ul className="flex flex-col gap-4">
              {tx.visionPoints.map((p) => (
                <li key={p} className="flex items-start gap-3 text-sm md:text-base text-white/70 leading-[1.8]">
                  <span className="mt-2 shrink-0 w-2 h-2 rounded-full bg-gradient-to-br from-[#00c9a7] to-[#5b6ef5]" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </FadeIn>
        </div>
      </section>

      {/* ===== なぜPiece.aiか（白） ===== */}
      <section className="bg-white py-24">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-xs font-semibold tracking-[0.2em] text-[#00a98e] font-[var(--font-en)] mb-3">{tx.whyTag}</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a2e]">{tx.whyTitle}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {tx.whys.map(({ icon, title, desc }, i) => (
              <FadeIn key={title} delay={i * 80}>
                <div className="h-full p-9 bg-gray-50 border border-gray-200 rounded-2xl transition-all hover:border-[#00c9a7] hover:shadow-[0_8px_32px_rgba(0,201,167,0.12)] hover:-translate-y-1">
                  <div className="w-13 h-13 flex items-center justify-center bg-gradient-to-br from-[#00c9a7]/15 to-[#5b6ef5]/15 rounded-xl mb-5">
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
          <div className="text-center mb-12">
            <p className="text-xs font-semibold tracking-[0.2em] text-[#00a98e] font-[var(--font-en)] mb-3">{tx.jobsTag}</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a2e] mb-5">{tx.jobsTitle}</h2>
            <p className="text-base text-gray-500 leading-[1.8]">{tx.jobsLead}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tx.jobs.map(({ title, desc }, i) => (
              <FadeIn key={title} delay={i * 60}>
                <div className="h-full p-8 bg-white border border-gray-200 rounded-2xl transition-all hover:border-[#00c9a7] hover:shadow-[0_8px_32px_rgba(0,201,167,0.14)] hover:-translate-y-1">
                  <h3 className="text-base font-bold text-[#1a1a2e] mb-3">{title}</h3>
                  <p className="text-sm text-gray-500 leading-[1.75]">{desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>

          {/* 働き方の注記 */}
          <p className="text-center text-sm text-gray-500 mt-10">{tx.workNote}</p>
        </div>
      </section>

      {/* ===== 応募フォーム（ダーク背景＋埋め込みフォーム） ===== */}
      <section id="entry" className="relative bg-[#06121a] py-24 overflow-hidden scroll-mt-[72px]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_30%,rgba(0,201,167,0.22)_0%,transparent_60%)]" />
        <div className="relative z-10 max-w-[1140px] mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold tracking-[0.2em] text-[#00c9a7] font-[var(--font-en)] mb-3">{tx.applyTag}</p>
            <h2 className="text-2xl md:text-3xl font-bold text-white leading-[1.5] mb-4">{tx.applyTitle}</h2>
            <p className="max-w-xl mx-auto text-sm text-white/65 leading-[1.9]">{tx.applyDesc}</p>
          </div>

          <RecruitContact lang={lang} />

          <div className="text-center mt-12">
            <Link href={homeHref} className="text-sm text-white/60 hover:text-white transition-colors">
              {tx.backHome}
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

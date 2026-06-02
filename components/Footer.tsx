'use client'
/* =============================================
   フッター
   usePathname で /en かどうかを判定して言語を切り替える
   ============================================= */
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navLinks = {
  ja: [
    { href: '#service', label: 'サービス' },
    { href: '#about',   label: '会社概要' },
    { href: '#members', label: 'メンバー' },
    { href: '#news',    label: 'ニュース' },
    { href: '#faq',     label: 'FAQ' },
    { href: '#contact', label: 'お問い合わせ' },
  ],
  en: [
    { href: '#service', label: 'Service' },
    { href: '#about',   label: 'About' },
    { href: '#members', label: 'Members' },
    { href: '#news',    label: 'News' },
    { href: '#faq',     label: 'FAQ' },
    { href: '#contact', label: 'Contact' },
  ],
}

/* SNSリンク（アカウント開設後に href に実際のURLを設定してください） */
const socialLinks = [
  {
    label: 'X (Twitter)',
    href: '',
    svg: <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.816l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />,
  },
  {
    label: 'LinkedIn',
    href: '',
    svg: <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />,
  },
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/yusuke.aoki.904750',
    svg: <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />,
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/il3_yuuuskiii/',
    svg: <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />,
  },
  {
    label: 'YouTube',
    href: '',
    svg: <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />,
  },
]

export default function Footer() {
  /* URLが /en で始まる場合は英語 */
  const pathname = usePathname()
  const lang: 'ja' | 'en' = pathname.startsWith('/en') ? 'en' : 'ja'
  const links = navLinks[lang]

  return (
    <footer className="bg-[#0a0a14] text-white">
      <div className="max-w-[1140px] mx-auto px-6 py-16 flex flex-col md:flex-row items-start justify-between gap-10 border-b border-white/10">

        {/* ブランド・SNS */}
        <div>
          <Link href={lang === 'en' ? '/en#top' : '#top'} className="font-[var(--font-en)] text-2xl font-bold tracking-tight">
            Piece<span className="text-[#5b6ef5]">.</span>
            <span className="text-[#5b6ef5]">ai</span>
          </Link>
          <p className="mt-2.5 text-sm text-white/50">
            {lang === 'en' ? 'Japan-born AI Agent Platform, Going Global' : '日本発・グローバルを変えるAIエージェント'}
          </p>

          {/* SNSアイコン（hrefが設定されていない場合はクリック不可） */}
          <div className="flex gap-2.5 mt-4">
            {socialLinks.map(({ label, href, svg }) => {
              const iconClass = "flex items-center justify-center w-9 h-9 rounded-full bg-white/8 border border-white/12 text-white/65 transition-all"
              const inner = (
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true">
                  {svg}
                </svg>
              )
              return href ? (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${iconClass} hover:bg-[#5b6ef5] hover:border-[#5b6ef5] hover:text-white hover:-translate-y-0.5`}
                >
                  {inner}
                </a>
              ) : (
                <span
                  key={label}
                  aria-label={label}
                  className={`${iconClass} opacity-40 cursor-default`}
                >
                  {inner}
                </span>
              )
            })}
          </div>
        </div>

        {/* ナビゲーション */}
        <nav>
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {links.map(({ href, label }) => (
              <li key={href}>
                <Link href={href} className="text-sm text-white/60 hover:text-white transition-colors">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* コピーライト */}
      <div className="py-5 text-center">
        <p className="text-xs text-white/35">© 2026 Piece.ai Inc. All rights reserved.</p>
      </div>
    </footer>
  )
}

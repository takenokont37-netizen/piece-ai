'use client'
/* =============================================
   ヘッダー / ナビゲーション
   - スクロールで背景が白くなる
   - スマホでハンバーガーメニュー表示
   - EN/JA 言語切り替えボタン
   ============================================= */
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

/* セクションアンカー（id）と採用ページ（route）。
   アンカーはトップページ内リンクなので、別ページにいるときは
   ホームのパスを前置して /#service の形にする（buildHref で処理） */
const navLinks = {
  ja: [
    { id: 'service', label: 'サービス' },
    { id: 'about',   label: '会社概要' },
    { id: 'news',    label: 'ニュース' },
  ],
  en: [
    { id: 'service', label: 'Service' },
    { id: 'about',   label: 'About' },
    { id: 'news',    label: 'News' },
  ],
}

const t = {
  ja: { contact: 'お問い合わせ', contactId: 'contact', recruit: '採用情報', recruitHref: '/recruit',     langLabel: 'EN', langHref: '/en',  menuOpen: 'メニューを閉じる', menuClose: 'メニューを開く' },
  en: { contact: 'Contact',      contactId: 'contact', recruit: 'Careers',  recruitHref: '/en/recruit',  langLabel: 'JA', langHref: '/',    menuOpen: 'Close menu',       menuClose: 'Open menu' },
}

export default function Header() {
  const [scrolled,  setScrolled]  = useState(false)
  const [menuOpen,  setMenuOpen]  = useState(false)

  /* 現在のパスから言語を判定 */
  const pathname = usePathname()
  const lang: 'ja' | 'en' = pathname.startsWith('/en') ? 'en' : 'ja'
  const tx   = t[lang]
  const links = navLinks[lang]

  /* トップページにいるか（/ または /en）を判定 */
  const isHome = pathname === '/' || pathname === '/en'
  /* セクションアンカーのhref：トップ内なら #id、別ページなら /#id（/en#id） */
  const homeBase = lang === 'en' ? '/en' : ''
  const buildHref = (id: string) => (isHome ? `#${id}` : `${homeBase}/#${id}`)
  const contactHref = buildHref(tx.contactId)

  /* スクロール量に応じてヘッダー背景を切り替え */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 100)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  /* ドロワーを開いているときはページスクロールを止める */
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
  }, [menuOpen])

  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 h-[72px] transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md shadow-[0_1px_0_#e5e7eb]'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-[1140px] mx-auto px-6 h-full flex items-center justify-between">

          {/* ロゴ */}
          <Link
            href={lang === 'en' ? '/en#top' : '#top'}
            className={`font-[var(--font-en)] text-2xl font-bold tracking-tight transition-colors ${
              scrolled ? 'text-[#1a1a2e]' : 'text-white'
            }`}
          >
            Piece<span className="text-[#5b6ef5]">.</span>
            <span className="text-[#5b6ef5]">ai</span>
          </Link>

          {/* PC用ナビ */}
          <nav className="hidden md:flex items-center gap-2">
            {links.map(({ id, label }) => (
              <Link
                key={id}
                href={buildHref(id)}
                className={`px-4 py-2 text-sm font-medium rounded-md transition-all ${
                  scrolled
                    ? 'text-gray-500 hover:text-[#1a1a2e] hover:bg-gray-50'
                    : 'text-white/85 hover:text-white hover:bg-white/10'
                }`}
              >
                {label}
              </Link>
            ))}

            {/* 採用情報（独立ページへのリンク） */}
            <Link
              href={tx.recruitHref}
              className={`px-4 py-2 text-sm font-medium rounded-md transition-all ${
                scrolled
                  ? 'text-gray-500 hover:text-[#1a1a2e] hover:bg-gray-50'
                  : 'text-white/85 hover:text-white hover:bg-white/10'
              }`}
            >
              {tx.recruit}
            </Link>

            {/* 言語切り替えボタン */}
            <Link
              href={tx.langHref}
              className={`px-3 py-2 text-xs font-bold rounded-md border transition-all ${
                scrolled
                  ? 'border-gray-200 text-gray-500 hover:border-[#5b6ef5] hover:text-[#5b6ef5]'
                  : 'border-white/30 text-white/70 hover:border-white hover:text-white'
              }`}
            >
              {tx.langLabel}
            </Link>

            <Link
              href={contactHref}
              className="ml-2 px-5 py-2.5 bg-[#5b6ef5] text-white text-sm font-semibold rounded-lg shadow-[0_4px_14px_rgba(91,110,245,0.35)] transition-all hover:bg-[#3a4fd4] hover:-translate-y-0.5"
            >
              {tx.contact}
            </Link>
          </nav>

          {/* ハンバーガーボタン（スマホ用） */}
          <button
            className="md:hidden flex flex-col justify-between w-7 h-5 p-0 overflow-hidden"
            onClick={() => setMenuOpen(v => !v)}
            aria-label={menuOpen ? tx.menuOpen : tx.menuClose}
            aria-expanded={menuOpen}
          >
            {[0, 1, 2].map(i => (
              <span
                key={i}
                className={`block w-full h-0.5 rounded-sm transition-all duration-300 ${
                  scrolled ? 'bg-[#1a1a2e]' : 'bg-white'
                } ${
                  menuOpen && i === 0 ? 'translate-y-[9px] rotate-45' :
                  menuOpen && i === 2 ? '-translate-y-[9px] -rotate-45' : ''
                } ${
                  /* 常に opacity-100/opacity-0 を明示してトランジションを有効化 */
                  i === 1 ? (menuOpen ? 'opacity-0' : 'opacity-100') : ''
                }`}
              />
            ))}
          </button>
        </div>
      </header>

      {/* スマホ用ドロワーメニュー */}
      <div
        className={`md:hidden fixed top-[72px] left-0 right-0 z-40 bg-white shadow-xl transition-all duration-300 ${
          menuOpen ? 'opacity-100 pointer-events-auto translate-y-0' : 'opacity-0 pointer-events-none -translate-y-2'
        }`}
      >
        <ul className="flex flex-col">
          {[
            ...links.map(({ id, label }) => ({ href: buildHref(id), label })),
            { href: tx.recruitHref, label: tx.recruit },
            { href: contactHref,    label: tx.contact },
          ].map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                onClick={closeMenu}
                className="block px-6 py-4 text-base font-medium text-[#1a1a2e] border-b border-gray-100 hover:bg-gray-50 hover:text-[#5b6ef5] transition-colors"
              >
                {label}
              </Link>
            </li>
          ))}
          {/* 言語切り替え */}
          <li>
            <Link
              href={tx.langHref}
              onClick={closeMenu}
              className="block px-6 py-4 text-base font-medium text-[#5b6ef5] border-b border-gray-100 hover:bg-gray-50 transition-colors"
            >
              {tx.langLabel === 'EN' ? '🌐 English' : '🌐 日本語'}
            </Link>
          </li>
        </ul>
      </div>
    </>
  )
}

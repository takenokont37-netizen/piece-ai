'use client'
/* =============================================
   ヘッダー / ナビゲーション
   - スクロールで背景が白くなる
   - スマホでハンバーガーメニュー表示
   ============================================= */
import { useState, useEffect } from 'react'
import Link from 'next/link'

const navLinks = [
  { href: '#service', label: 'サービス' },
  { href: '#about',   label: '会社概要' },
  { href: '#news',    label: 'ニュース' },
]

export default function Header() {
  const [scrolled,  setScrolled]  = useState(false)
  const [menuOpen,  setMenuOpen]  = useState(false)

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
            href="#top"
            className={`font-[var(--font-en)] text-2xl font-bold tracking-tight transition-colors ${
              scrolled ? 'text-[#1a1a2e]' : 'text-white'
            }`}
          >
            Piece<span className="text-[#5b6ef5]">.</span>
            <span className="text-[#5b6ef5]">ai</span>
          </Link>

          {/* PC用ナビ */}
          <nav className="hidden md:flex items-center gap-2">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`px-4 py-2 text-sm font-medium rounded-md transition-all ${
                  scrolled
                    ? 'text-gray-500 hover:text-[#1a1a2e] hover:bg-gray-50'
                    : 'text-white/85 hover:text-white hover:bg-white/10'
                }`}
              >
                {label}
              </Link>
            ))}
            <Link
              href="#contact"
              className="ml-2 px-5 py-2.5 bg-[#5b6ef5] text-white text-sm font-semibold rounded-lg shadow-[0_4px_14px_rgba(91,110,245,0.35)] transition-all hover:bg-[#3a4fd4] hover:-translate-y-0.5"
            >
              お問い合わせ
            </Link>
          </nav>

          {/* ハンバーガーボタン（スマホ用） */}
          <button
            className="md:hidden flex flex-col justify-between w-7 h-5 p-0 overflow-hidden"
            onClick={() => setMenuOpen(v => !v)}
            aria-label={menuOpen ? 'メニューを閉じる' : 'メニューを開く'}
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
          {[...navLinks, { href: '#contact', label: 'お問い合わせ' }].map(({ href, label }) => (
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
        </ul>
      </div>
    </>
  )
}

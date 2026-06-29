'use client'
/* =============================================
   ニュース一覧モーダル（全画面オーバーレイ）
   News.tsx（Server Component）からアイテムを受け取り、
   ボタンクリックで全画面表示する
   ============================================= */
import { useState, useEffect } from 'react'
import type { NewsItem } from '@/lib/microcms'

type Lang = 'ja' | 'en'

const badgeColor: Record<string, string> = {
  'プレスリリース': 'bg-[#5b6ef5]/10 text-[#5b6ef5]',
  'お知らせ':       'bg-[#00c9a7]/10 text-[#00c9a7]',
  'メディア掲載':   'bg-purple-500/10 text-purple-500',
  'Press Release':  'bg-[#5b6ef5]/10 text-[#5b6ef5]',
  'Announcement':   'bg-[#00c9a7]/10 text-[#00c9a7]',
  'Media':          'bg-purple-500/10 text-purple-500',
}

function formatDate(item: NewsItem): string {
  const iso = item.date ?? item.publishedAt
  const d = new Date(iso)
  return `${d.getFullYear()}.${String(d.getMonth() + 1).padStart(2, '0')}.${String(d.getDate()).padStart(2, '0')}`
}

export default function NewsModal({
  items,
  lang,
  label,
}: {
  items: NewsItem[]
  lang: Lang
  label: string
}) {
  const [open, setOpen] = useState(false)
  const title = lang === 'en' ? 'News' : 'ニュース'

  /* モーダルが開いている間：Escで閉じる＋背景スクロール無効 */
  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setOpen(false) }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <>
      {/* 「ニュース一覧を見る」ボタン */}
      <button
        onClick={() => setOpen(true)}
        className="inline-block px-8 py-3 border-2 border-[#5b6ef5] text-[#5b6ef5] text-sm font-semibold rounded-lg transition-all hover:bg-[#5b6ef5] hover:text-white hover:-translate-y-0.5"
      >
        {label}
      </button>

      {/* 全画面モーダル */}
      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={title}
          className="fixed inset-0 z-50 flex flex-col bg-white"
        >
          {/* ヘッダー */}
          <div className="relative flex items-center justify-between px-6 py-5 border-b border-gray-200 shrink-0">
            <h2 className="text-lg font-bold text-[#1a1a2e]">{title}</h2>
            <button
              onClick={() => setOpen(false)}
              aria-label="閉じる"
              className="w-9 h-9 flex items-center justify-center rounded-full text-gray-400 hover:bg-gray-100 hover:text-[#1a1a2e] transition-colors"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* スクロール可能なニュースリスト */}
          <div className="flex-1 overflow-y-auto">
            <div className="max-w-[800px] mx-auto px-6 pb-16">
              {items.length === 0 ? (
                <p className="text-center text-gray-400 py-20 text-sm">
                  {lang === 'en' ? 'No news available yet.' : 'まだニュースはありません。'}
                </p>
              ) : (
                <ul className="border-t border-gray-200">
                  {items.map((item) => (
                    <li key={item.id} className="border-b border-gray-200">
                      {item.link ? (
                        <a
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex flex-wrap items-center gap-5 px-4 py-6 transition-colors hover:bg-gray-50 group"
                        >
                          <time className="font-[var(--font-en)] text-sm text-gray-400 shrink-0 w-20" dateTime={item.date ?? item.publishedAt}>
                            {formatDate(item)}
                          </time>
                          <span className={`shrink-0 px-2.5 py-1 text-xs font-semibold rounded-full ${badgeColor[item.category] ?? 'bg-gray-100 text-gray-500'}`}>
                            {item.category}
                          </span>
                          <p className="text-sm text-[#1a1a2e] leading-snug group-hover:text-[#5b6ef5] transition-colors flex-1">
                            {item.title}
                          </p>
                        </a>
                      ) : (
                        <div className="flex flex-wrap items-center gap-5 px-4 py-6">
                          <time className="font-[var(--font-en)] text-sm text-gray-400 shrink-0 w-20" dateTime={item.date ?? item.publishedAt}>
                            {formatDate(item)}
                          </time>
                          <span className={`shrink-0 px-2.5 py-1 text-xs font-semibold rounded-full ${badgeColor[item.category] ?? 'bg-gray-100 text-gray-500'}`}>
                            {item.category}
                          </span>
                          <p className="text-sm text-[#1a1a2e] leading-snug flex-1">
                            {item.title}
                          </p>
                        </div>
                      )}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  )
}

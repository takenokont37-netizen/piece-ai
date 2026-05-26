'use client'
/* =============================================
   Cookie同意バナー（クライアントコンポーネント）
   - 同意時: GA4のconsent を granted に更新 + Clarityを読み込む
   - 拒否時: スクリプトは一切読み込まない
   - 選択結果はCookieに180日間保存
   ============================================= */
import { useState, useEffect } from 'react'

const COOKIE_KEY = 'piece_ai_cookie_consent'

/** Cookieの値を取得するヘルパー */
function getCookieValue(key: string): string | null {
  const match = document.cookie.match(new RegExp('(^| )' + key + '=([^;]+)'))
  return match ? match[2] : null
}

/** Cookieに保存するヘルパー（180日間有効） */
function setCookieValue(key: string, value: string) {
  const expires = new Date(Date.now() + 180 * 24 * 60 * 60 * 1000).toUTCString()
  document.cookie = `${key}=${value}; expires=${expires}; path=/; SameSite=Lax`
}

/** Microsoft Clarityを動的に読み込む */
function loadClarity(projectId: string) {
  // TODO: projectId を実際の Microsoft Clarity プロジェクトIDに変更すること
  type ClarityFunction = ((...args: unknown[]) => void) & { q?: unknown[] }
  const w = window as Window & { clarity?: ClarityFunction }
  w.clarity = w.clarity || function (...args: unknown[]) {
    ;(w.clarity!.q = w.clarity!.q || []).push(args)
  }
  const script = document.createElement('script')
  script.async = true
  script.src = `https://www.clarity.ms/tag/${projectId}`
  document.head.appendChild(script)
}

/** GA4のconsent設定を更新し、Clarityも有効化 */
function enableAnalytics() {
  if (typeof window !== 'undefined' && 'gtag' in window) {
    ;(window as Window & { gtag: (...args: unknown[]) => void }).gtag(
      'consent', 'update', { analytics_storage: 'granted' }
    )
  }
  loadClarity('XXXXXXXXXX') // TODO: 実際のClarityプロジェクトIDに変更
}

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)

  /* マウント時にCookieを確認してバナー表示可否を決める */
  useEffect(() => {
    const consent = getCookieValue(COOKIE_KEY)
    if (consent === 'accepted') {
      enableAnalytics()
    } else if (consent !== 'rejected') {
      setVisible(true)
    }
  }, [])

  const handleAccept = () => {
    setCookieValue(COOKIE_KEY, 'accepted')
    enableAnalytics()
    setVisible(false)
  }

  const handleReject = () => {
    setCookieValue(COOKIE_KEY, 'rejected')
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[9999] bg-[rgba(10,10,20,0.97)] backdrop-blur-md border-t border-white/8 px-6 py-4">
      <div className="max-w-[1140px] mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <p className="text-sm text-white/70 leading-relaxed">
          当サイトではアクセス解析（Google Analytics・Microsoft Clarity）のためにCookieを使用しています。
        </p>
        <div className="flex gap-3 shrink-0">
          <button
            onClick={handleReject}
            className="px-6 py-2.5 text-sm font-semibold text-white/65 border border-white/25 rounded-lg hover:border-white/55 hover:text-white transition-all"
          >
            拒否する
          </button>
          <button
            onClick={handleAccept}
            className="px-6 py-2.5 text-sm font-semibold text-white bg-[#5b6ef5] rounded-lg hover:bg-[#3a4fd4] transition-colors"
          >
            同意する
          </button>
        </div>
      </div>
    </div>
  )
}

'use client'
/* =============================================
   スクロールフェードインラッパー
   - 子要素が画面に入ったときに .is-visible を付与する
   - globals.css の .fade-in / .is-visible でアニメーション制御
   使い方: <FadeIn><div>内容</div></FadeIn>
   ============================================= */
import { useEffect, useRef } from 'react'

interface FadeInProps {
  children: React.ReactNode
  className?: string
  delay?: number   // アニメーションの遅延（ms）。カードの段階的表示に使う
}

export default function FadeIn({ children, className = '', delay = 0 }: FadeInProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    /* 遅延があればスタイルで設定 */
    if (delay) el.style.transitionDelay = `${delay}ms`

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('is-visible')
          observer.unobserve(el) // 一度表示したら監視解除
        }
      },
      { threshold: 0.15 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [delay])

  return (
    <div ref={ref} className={`fade-in ${className}`}>
      {children}
    </div>
  )
}

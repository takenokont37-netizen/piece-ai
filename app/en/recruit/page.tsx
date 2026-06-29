/* =============================================
   採用ページ 英語版（/en/recruit）
   ============================================= */
import type { Metadata } from 'next'
import Recruit from '@/components/sections/Recruit'

export const metadata: Metadata = {
  title: 'Careers | Piece.ai',
  description:
    'Join Piece.ai, a Japan-born Enterprise AI SaaS startup going global. We are hiring professionals across engineering, business development, marketing, and finance — primarily at the CXO, VP, and manager level.',
  alternates: {
    canonical: '/en/recruit',
    languages: { 'ja': '/recruit', 'en': '/en/recruit' },
  },
  openGraph: {
    type: 'website',
    title: 'Careers | Piece.ai',
    description: 'Build "AI for Everyone" with us. Hiring professionals across every domain, primarily at the CXO, VP, and manager level.',
    locale: 'en_US',
  },
}

export default function RecruitPageEn() {
  return <Recruit lang="en" />
}

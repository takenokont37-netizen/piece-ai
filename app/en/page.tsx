/* =============================================
   英語版ホームページ（/en）
   各セクションに lang="en" を渡して英語表示
   ============================================= */
import type { Metadata } from 'next'
import Hero    from '@/components/sections/Hero'
import Stats   from '@/components/sections/Stats'
import Service from '@/components/sections/Service'
import About   from '@/components/sections/About'
import Members from '@/components/sections/Members'
import News    from '@/components/sections/News'
import Faq     from '@/components/sections/Faq'
import Contact from '@/components/sections/Contact'

export const metadata: Metadata = {
  title: 'Piece.ai | AI Agent Platform for Non-Routine Work',
  description: 'Piece.ai is an Enterprise AI SaaS that automates non-routine workflows with AI agents. Build task-specific agents in under 3 minutes — no coding required.',
  alternates: { canonical: '/en' },
  openGraph: {
    type: 'website',
    title: 'Piece.ai | AI Agent Platform for Non-Routine Work',
    description: 'Build task-specific AI agents in under 3 minutes. No prompt engineering needed. Enterprise-ready, Japan-born AI SaaS going global.',
    locale: 'en_US',
  },
}

export default function HomeEn() {
  return (
    <>
      <Hero    lang="en" />
      <Stats   lang="en" />
      <Service lang="en" />
      <About   lang="en" />
      <Members lang="en" />
      <News    lang="en" />
      <Faq     lang="en" />
      <Contact lang="en" />
    </>
  )
}

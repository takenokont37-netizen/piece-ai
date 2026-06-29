/* =============================================
   英語版ホームページ（/en）
   各セクションに lang="en" を渡して英語表示
   ============================================= */
import type { Metadata } from 'next'
import Hero    from '@/components/sections/Hero'
import Problem from '@/components/sections/Problem'
import Service from '@/components/sections/Service'
import About   from '@/components/sections/About'
import Members from '@/components/sections/Members'
import News    from '@/components/sections/News'
import Faq     from '@/components/sections/Faq'
import Contact from '@/components/sections/Contact'

export const metadata: Metadata = {
  title: 'Piece.ai | AI for Everyone — Enterprise AI Agents',
  description: 'Piece.ai is an Enterprise AI SaaS where every employee can run their own task-specific AI agent from day one — no prompts, no AI expertise required. Turn siloed, non-routine work into an organizational capability. Japan-born, going global.',
  alternates: { canonical: '/en' },
  openGraph: {
    type: 'website',
    title: 'Piece.ai | AI for Everyone — Enterprise AI Agents',
    description: 'No prompts, no AI expertise needed. Every employee can use their own task-specific AI agent. Enterprise-ready, Japan-born AI SaaS going global.',
    locale: 'en_US',
  },
}

export default function HomeEn() {
  return (
    <>
      <Hero    lang="en" />
      <Problem lang="en" />
      <Service lang="en" />
      <About   lang="en" />
      <Members lang="en" />
      <News    lang="en" />
      <Faq     lang="en" />
      <Contact lang="en" />
    </>
  )
}

/* =============================================
   ホームページ（全セクションを並べるだけ）
   各セクションは components/sections/ に分かれています
   ============================================= */
import type { Metadata } from 'next'
import Hero    from '@/components/sections/Hero'

export const metadata: Metadata = {
  alternates: {
    canonical: '/',
    languages: { 'ja': '/', 'en': '/en' },
  },
}
import Problem from '@/components/sections/Problem'
import Service from '@/components/sections/Service'
import About   from '@/components/sections/About'
import Members from '@/components/sections/Members'
import News    from '@/components/sections/News'
import Faq     from '@/components/sections/Faq'
import Contact from '@/components/sections/Contact'

export default function Home() {
  return (
    <>
      <Hero    />
      <Problem />
      <Service />
      <About   />
      <Members />
      <News    />
      <Faq     />
      <Contact />
    </>
  )
}

/* =============================================
   ホームページ（全セクションを並べるだけ）
   各セクションは components/sections/ に分かれています
   ============================================= */
import Hero    from '@/components/sections/Hero'
import Stats   from '@/components/sections/Stats'
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
      <Stats   />
      <Service />
      <About   />
      <Members />
      <News    />
      <Faq     />
      <Contact />
    </>
  )
}

/* =============================================
   採用ページ（/recruit）
   ============================================= */
import type { Metadata } from 'next'
import Recruit from '@/components/sections/Recruit'

export const metadata: Metadata = {
  title: '採用情報 | Piece.ai',
  description:
    'Piece.aiの採用情報。日本発・グローバルを目指すEnterprise AI SaaSスタートアップで、エンジニア・事業開発・マーケティング・ファイナンスなど各領域のプロフェッショナル（CXO・VP・マネージャークラス）を募集しています。',
  alternates: { canonical: '/recruit' },
  openGraph: {
    type: 'website',
    title: '採用情報 | Piece.ai',
    description: '「AI for Everyone」を共につくる仲間を募集しています。各領域のプロフェッショナル（CXO・VP・マネージャークラス）を募集中。',
    locale: 'ja_JP',
  },
}

export default function RecruitPage() {
  return <Recruit />
}

import type { Metadata } from 'next'
import { Noto_Sans_JP, Inter } from 'next/font/google'
import Script from 'next/script'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import CookieBanner from '@/components/CookieBanner'

/* =============================================
   Googleフォント（next/font で最適化）
   ============================================= */
const notoSansJP = Noto_Sans_JP({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
  variable: '--font-ja',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '600', '700'],
  variable: '--font-en',
  display: 'swap',
})

/* =============================================
   SEOメタデータ（#6 SEO/LLMEO対応）
   ============================================= */
export const metadata: Metadata = {
  title: 'Piece.ai | 全ての人に、AIの力を。',
  description:
    'Piece.aiは、プロンプト不要・AIの専門知識なしで、社員一人ひとりが業務特化型のAIエージェントを即日から使いこなせるエンタープライズAI SaaSです。属人化した非定型業務を組織全体の力に変え、既存システムとも連携します。日本発・グローバルを目指します。',
  metadataBase: new URL('https://loveandpiece.ai'),
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    url: 'https://loveandpiece.ai/',
    title: 'Piece.ai | 全ての人に、AIの力を。',
    description:
      'プロンプト不要・AIの専門知識なしで、社員一人ひとりが業務特化型のAIエージェントを使いこなせるエンタープライズAI SaaS。属人化した非定型業務を組織全体の力に変えます。',
    images: [{ url: '/ogp.png', width: 1200, height: 630 }],
    siteName: 'Piece.ai',
    locale: 'ja_JP',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Piece.ai | 全ての人に、AIの力を。',
    description: 'プロンプト不要で誰もが使える、業務特化型AIエージェントのエンタープライズAI SaaS。Piece.ai。',
    images: ['/ogp.png'],
  },
}

/* =============================================
   JSON-LD 構造化データ（Google / LLM向け）
   ============================================= */
const jsonLdOrganization = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Piece.ai株式会社',
  url: 'https://loveandpiece.ai',
  description: 'プロンプト不要で誰もが使える業務特化型AIエージェントを提供するEnterprise AI SaaS。日本発・グローバルを目指すスタートアップ。',
  foundingDate: '2026-06',
  numberOfEmployees: { '@type': 'QuantitativeValue', value: 15 },
  contactPoint: {
    '@type': 'ContactPoint',
    url: 'https://loveandpiece.ai/#contact',
    contactType: 'customer service',
    availableLanguage: ['Japanese', 'English'],
  },
}

const jsonLdWebSite = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Piece.ai',
  url: 'https://loveandpiece.ai',
  description: 'プロンプト不要で誰もが使える業務特化型AIエージェント（Enterprise AI SaaS）',
  publisher: { '@type': 'Organization', name: 'Piece.ai株式会社' },
}

const jsonLdFaq = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Piece.aiとはどのようなサービスですか？',
      acceptedAnswer: { '@type': 'Answer', text: 'Piece.aiは、AIの専門知識がない社員でも業務特化型のAIエージェントを即日から使いこなせるエンタープライズAI SaaSです。個人のAI活用に留まらず、ハイパフォーマーの判断・ノウハウをAIが再現し、チーム・組織全体の生産性を底上げします。' },
    },
    {
      '@type': 'Question',
      name: 'どのような業務を自動化できますか？',
      acceptedAnswer: { '@type': 'Answer', text: 'ルーティン作業はもちろん、状況判断が必要な非定型業務にも対応します。これまで属人化していた複雑な業務フローをAIが担うことで、特定の担当者に依存していた業務を組織全体の力に変えます。' },
    },
    {
      '@type': 'Question',
      name: '導入にエンジニアは必要ですか？',
      acceptedAnswer: { '@type': 'Answer', text: '不要です。プログラミングの知識がなくても、専任エンジニアがいなくても、AIエージェントの設計・運用が可能です。現場の担当者が主体となって導入・活用を進められます。' },
    },
    {
      '@type': 'Question',
      name: '既存のシステムと連携できますか？',
      acceptedAnswer: { '@type': 'Answer', text: 'はい。社内で使っているコミュニケーションツール・メール・カレンダーなどと接続可能です。各社員の閲覧・編集権限を維持したまま、AIが必要な情報を自動で参照・連携します。' },
    },
    {
      '@type': 'Question',
      name: 'セキュリティ・コンプライアンス面は大丈夫ですか？',
      acceptedAnswer: { '@type': 'Answer', text: '大手企業が求めるセキュリティ・ガバナンス要件に対応しています。権限管理・監査ログなど、エンタープライズ利用に必要な機能を備え、安心して業務の中枢をお任せいただけます。' },
    },
  ],
}

/* =============================================
   ルートレイアウト
   ============================================= */
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja" className={`${notoSansJP.variable} ${inter.variable}`}>
      <head>
        {/* JSON-LD 構造化データ */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdOrganization) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdWebSite) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }} />
      </head>
      <body className={`${notoSansJP.className} antialiased`}>

        {/* GA4: Consent Mode v2（Cookie同意前はデフォルト拒否） */}
        {/* TODO: G-JCD5VZEFCM を実際の測定IDに変更すること */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-JCD5VZEFCM"
          strategy="afterInteractive"
        />
        <Script id="ga4-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){ dataLayer.push(arguments); }
            gtag('consent', 'default', { 'analytics_storage': 'denied' });
            gtag('js', new Date());
            gtag('config', 'G-JCD5VZEFCM');
          `}
        </Script>

        <Header />
        <main>{children}</main>
        <Footer />

        {/* Cookie同意バナー（クライアントコンポーネント） */}
        <CookieBanner />

      </body>
    </html>
  )
}

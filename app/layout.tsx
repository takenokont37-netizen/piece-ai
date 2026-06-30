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
   FAQPage は Google が廃止のため除外
   ============================================= */
const jsonLdOrganization = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Piece.ai株式会社',
  url: 'https://loveandpiece.ai',
  description: 'プロンプト不要で誰もが使える業務特化型AIエージェントを提供するEnterprise AI SaaS。日本発・グローバルを目指すスタートアップ。',
  foundingDate: '2026-06-08',
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

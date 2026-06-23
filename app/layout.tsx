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
  title: 'Piece.ai | AIエージェントで、非定型業務を変える。',
  description:
    'Piece.aiは、営業・バックオフィスなど非定型業務をAIエージェントで自動化するEnterprise AI SaaSです。ノーコードで業務フローを設計し、既存システムとシームレスに連携。日本発・グローバルを目指します。',
  metadataBase: new URL('https://loveandpiece.ai'),
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    url: 'https://loveandpiece.ai/',
    title: 'Piece.ai | AIエージェントで、非定型業務を変える。',
    description:
      'Piece.aiは、営業・バックオフィスなど非定型業務をAIエージェントで自動化するEnterprise AI SaaSです。ノーコードで業務フローを設計し、既存システムとシームレスに連携。',
    images: [{ url: '/ogp.png', width: 1200, height: 630 }],
    siteName: 'Piece.ai',
    locale: 'ja_JP',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Piece.ai | AIエージェントで、非定型業務を変える。',
    description: 'Piece.aiは、営業・バックオフィスなど非定型業務をAIエージェントで自動化するEnterprise AI SaaSです。',
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
  description: '非定型業務を自動化するAIエージェントサービス（Enterprise AI SaaS）。日本発・グローバルを目指すスタートアップ。',
  foundingDate: '2024',
  numberOfEmployees: { '@type': 'QuantitativeValue', value: 13 },
  contactPoint: {
    '@type': 'ContactPoint',
    email: 'info@piece.ai',
    contactType: 'customer service',
    availableLanguage: 'Japanese',
  },
}

const jsonLdWebSite = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Piece.ai',
  url: 'https://loveandpiece.ai',
  description: '非定型業務を自動化するAIエージェントサービス',
  publisher: { '@type': 'Organization', name: 'Piece.ai株式会社' },
}

const jsonLdFaq = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Piece.aiとはどのようなサービスですか？',
      acceptedAnswer: { '@type': 'Answer', text: 'Piece.aiは、これまで自動化できなかった非定型業務をAIエージェントで解決するEnterprise AI SaaSです。「AI版キントーン」として、営業・バックオフィスなど複雑な業務フローをノーコードで設計・自動化できます。' },
    },
    {
      '@type': 'Question',
      name: 'どのような業務を自動化できますか？',
      acceptedAnswer: { '@type': 'Answer', text: 'ルーティン作業はもちろん、状況判断が必要な複雑な業務フローにも対応します。特に営業部門の非定型業務（見積作成・顧客対応・レポート生成など）での活用を得意としています。' },
    },
    {
      '@type': 'Question',
      name: '導入にエンジニアは必要ですか？',
      acceptedAnswer: { '@type': 'Answer', text: '不要です。キントーンのようにノーコードで業務フローを設計できるため、エンジニアがいなくてもAIエージェントを運用できます。' },
    },
    {
      '@type': 'Question',
      name: '既存のシステムと連携できますか？',
      acceptedAnswer: { '@type': 'Answer', text: 'はい。社内の各種ツールやデータベースとシームレスに接続可能です。情報の分断を解消し、全社横断での業務効率化を実現します。' },
    },
    {
      '@type': 'Question',
      name: 'セキュリティ・コンプライアンス面は大丈夫ですか？',
      acceptedAnswer: { '@type': 'Answer', text: '大企業が求めるセキュリティ・ガバナンス要件に対応しています。権限管理・監査ログなど、エンタープライズ利用に必要な機能を備えています。' },
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

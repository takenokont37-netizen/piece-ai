'use client'
/* =============================================
   FAQセクション（アコーディオン）
   - <details> / <summary> で開閉
   - JSON-LDはlayout.tsxで設定済み
   ============================================= */

const faqs = [
  {
    q: 'Piece.aiとはどのようなサービスですか？',
    a: 'Piece.aiは、これまで自動化できなかった非定型業務をAIエージェントで解決するEnterprise AI SaaSです。「AI版キントーン」として、営業・バックオフィスなど複雑な業務フローをノーコードで設計・自動化できます。',
  },
  {
    q: 'どのような業務を自動化できますか？',
    a: 'ルーティン作業はもちろん、状況判断が必要な複雑な業務フローにも対応します。特に営業部門の非定型業務（見積作成・顧客対応・レポート生成など）での活用を得意としています。',
  },
  {
    q: '導入にエンジニアは必要ですか？',
    a: '不要です。キントーンのようにノーコードで業務フローを設計できるため、エンジニアがいなくてもAIエージェントを運用できます。',
  },
  {
    q: '既存のシステムと連携できますか？',
    a: 'はい。社内の各種ツールやデータベースとシームレスに接続可能です。情報の分断を解消し、全社横断での業務効率化を実現します。',
  },
  {
    q: 'セキュリティ・コンプライアンス面は大丈夫ですか？',
    a: '大企業が求めるセキュリティ・ガバナンス要件に対応しています。権限管理・監査ログなど、エンタープライズ利用に必要な機能を備えています。',
  },
]

export default function Faq() {
  return (
    <section id="faq" className="bg-gray-50 py-24">
      <div className="max-w-[1140px] mx-auto px-6">

        {/* セクションヘッダー */}
        <div className="text-center mb-16">
          <p className="text-xs font-semibold tracking-[0.2em] text-[#5b6ef5] font-[var(--font-en)] mb-3">FAQ</p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a2e]">よくある質問</h2>
        </div>

        {/* アコーディオン */}
        <div className="max-w-[760px] mx-auto border-t border-gray-200">
          {faqs.map(({ q, a }) => (
            <details key={q} className="group border-b border-gray-200">
              <summary className="flex items-center justify-between gap-4 py-6 text-base font-semibold text-[#1a1a2e] cursor-pointer list-none hover:text-[#5b6ef5] transition-colors">
                {q}
                {/* + / × アイコン */}
                <span className="shrink-0 text-2xl font-light text-[#5b6ef5] leading-none transition-transform duration-300 group-open:rotate-45">
                  +
                </span>
              </summary>
              <div className="pb-6 text-sm text-gray-500 leading-[1.8]">
                {a}
              </div>
            </details>
          ))}
        </div>

      </div>
    </section>
  )
}

'use client'
/* =============================================
   FAQセクション（アコーディオン）
   - <details> / <summary> で開閉
   - JSON-LDはlayout.tsxで設定済み
   ============================================= */

type Lang = 'ja' | 'en'

const t = {
  ja: {
    tag:   'FAQ',
    title: 'よくある質問',
    faqs: [
      {
        q: 'Piece.aiとはどのようなサービスですか？',
        a: 'Piece.aiは、AIの専門知識がない社員でも業務特化型のAIエージェントを即日から使いこなせるエンタープライズAI SaaSです。個人のAI活用に留まらず、ハイパフォーマーの判断・ノウハウをAIが再現し、チーム・組織全体の生産性を底上げします。',
      },
      {
        q: 'どのような業務を自動化できますか？',
        a: 'ルーティン作業はもちろん、状況判断が必要な非定型業務にも対応します。これまで属人化していた複雑な業務フローをAIが担うことで、特定の担当者に依存していた業務を組織全体の力に変えます。',
      },
      {
        q: '導入にエンジニアは必要ですか？',
        a: '不要です。プログラミングの知識がなくても、専任エンジニアがいなくても、AIエージェントの設計・運用が可能です。現場の担当者が主体となって導入・活用を進められます。',
      },
      {
        q: '既存のシステムと連携できますか？',
        a: 'はい。社内で使っているコミュニケーションツール・メール・カレンダーなどと接続可能です。各社員の閲覧・編集権限を維持したまま、AIが必要な情報を自動で参照・連携します。',
      },
      {
        q: 'セキュリティ・コンプライアンス面は大丈夫ですか？',
        a: '大手企業が求めるセキュリティ・ガバナンス要件に対応しています。権限管理・監査ログなど、エンタープライズ利用に必要な機能を備え、安心して業務の中枢をお任せいただけます。',
      },
    ],
  },
  en: {
    tag:   'FAQ',
    title: 'Frequently Asked Questions',
    faqs: [
      {
        q: 'What is Piece.ai?',
        a: 'Piece.ai is an Enterprise AI SaaS that lets every employee — regardless of AI expertise — put a task-specific AI agent to work from day one. Beyond individual productivity, it replicates the judgment and know-how of top performers across your entire team.',
      },
      {
        q: 'What kinds of tasks can be automated?',
        a: 'Both routine tasks and complex, judgment-heavy non-routine workflows. Piece.ai takes over work that was previously siloed to specific individuals, transforming what once depended on one person into an organizational capability.',
      },
      {
        q: 'Do we need engineers to implement it?',
        a: 'No. No programming knowledge or dedicated engineering team is required. Business teams can lead the rollout and run AI agents on their own.',
      },
      {
        q: 'Does it integrate with existing systems?',
        a: 'Yes. It connects with the communication tools, email, and calendars your team already uses. AI accesses and shares information automatically, while respecting each employee\'s existing access permissions.',
      },
      {
        q: 'What about security and compliance?',
        a: 'Piece.ai meets the security and governance requirements of large enterprises, with role-based access control, audit logs, and all the features needed for enterprise-wide deployment — giving you full confidence to put critical workflows in our hands.',
      },
    ],
  },
}

export default function Faq({ lang = 'ja' }: { lang?: Lang }) {
  const tx = t[lang]

  return (
    <section id="faq" className="bg-gray-50 py-24">
      <div className="max-w-[1140px] mx-auto px-6">

        {/* セクションヘッダー */}
        <div className="text-center mb-16">
          <p className="text-xs font-semibold tracking-[0.2em] text-[#5b6ef5] font-[var(--font-en)] mb-3">{tx.tag}</p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a2e]">{tx.title}</h2>
        </div>

        {/* アコーディオン */}
        <div className="max-w-[760px] mx-auto border-t border-gray-200">
          {tx.faqs.map(({ q, a }) => (
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

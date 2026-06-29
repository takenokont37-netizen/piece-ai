/* =============================================
   創業メンバーセクション
   実際の情報が決まったら members の各言語を更新してください
   ============================================= */
import FadeIn from '@/components/FadeIn'

type Lang = 'ja' | 'en'

const t = {
  ja: {
    tag:   'FOUNDERS',
    title: '創業メンバー',
    desc:  'Piece.aiを立ち上げたメンバーのプロフィール。',
    members: [
      {
        initials: 'YA',
        name: 'Yusuke Aoki',
        role: '代表取締役 CEO',
        bio:  '慶應義塾大学大学院理工学研究科（物性×AI）修了後、伊藤忠商事に入社。最年少で新規事業責任者を務めた後、エンタメ×生成AI領域でスタートアップを起業し資金調達を実施。デカコーン級AIスタートアップのNo.2経営者として、グループ2万人規模の大手企業へのAI導入を牽引。Piece.aiを創業し、全人類の幸福最大化に挑む。',
      },
      {
        initials: 'SS',
        photo: '/images/suzuki.jpg',
        name: '鈴木 誠一郎',
        role: 'GTM',
        bio:  '元日産自動車にて国内営業・マーケティング・経営企画を歴任後、全国BMW正規ディーラー経営コンサルタントとして活動。メーカー・ディーラー双方の視点を持つ実戦型ビジネスプロフェッショナル。大手企業からベンチャーまで幅広く支援し、「既存産業×新技術（AI・DX）」領域での戦略立案と現場実行を専門とする。『普通のサラリーマンでもできる！週末コンサルの教科書』（PHP研究所）をはじめ著書多数。',
      },
    ],
  },
  en: {
    tag:   'FOUNDERS',
    title: 'Founders',
    desc:  'The team behind Piece.ai.',
    members: [
      {
        initials: 'YA',
        name: 'Yusuke Aoki',
        role: 'CEO & Co-Founder',
        bio:  'After his M.S. at Keio University (condensed matter physics × AI), he joined Itochu Corporation as its youngest-ever Head of New Business Development. He founded a startup in entertainment × generative AI and successfully raised funding. As #2 at a decacorn-level AI startup, he led AI adoption at enterprise groups of 20,000+ employees. He founded Piece.ai to maximize the happiness of all humanity.',
      },
      {
        initials: 'SS',
        photo: '/images/suzuki.jpg',
        name: 'Seiichiro Suzuki',
        role: 'GTM',
        bio:  'Former Nissan Motor executive with roles spanning domestic sales, marketing, and corporate planning. Later served as a nationwide BMW dealer management consultant. A hands-on business professional with both manufacturer and dealer perspectives, specializing in "legacy industry × new technology (AI/DX)." Author of multiple books including "The Weekend Consultant\'s Handbook" (PHP Institute).',
      },
    ],
  },
}

export default function Members({ lang = 'ja' }: { lang?: Lang }) {
  const tx = t[lang]

  return (
    <section id="members" className="bg-white py-24">
      <div className="max-w-[1140px] mx-auto px-6">

        {/* セクションヘッダー */}
        <div className="text-center mb-16">
          <p className="text-xs font-semibold tracking-[0.2em] text-[#5b6ef5] font-[var(--font-en)] mb-3">{tx.tag}</p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a2e] mb-5">{tx.title}</h2>
          <p className="text-base text-gray-500">{tx.desc}</p>
        </div>

        {/* カードグリッド（2名） */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[760px] mx-auto">
          {tx.members.map(({ initials, photo, name, role, bio }, i) => (
            <FadeIn key={i} delay={i * 80}>
              <div className="p-9 bg-gray-50 border border-gray-200 rounded-2xl text-center h-full transition-all hover:border-[#5b6ef5] hover:shadow-[0_8px_32px_rgba(91,110,245,0.1)] hover:-translate-y-1">
                {/* アバター：photoがあれば写真、なければイニシャル */}
                {photo ? (
                  <img
                    src={photo}
                    alt={name}
                    className="w-22 h-22 mx-auto mb-5 rounded-full object-cover object-top"
                  />
                ) : (
                  <div className="w-22 h-22 mx-auto mb-5 rounded-full bg-gradient-to-br from-[#5b6ef5] to-[#00c9a7] flex items-center justify-center text-white font-bold text-base font-[var(--font-en)]">
                    {initials}
                  </div>
                )}
                <h3 className="text-base font-bold text-[#1a1a2e] mb-1.5">{name}</h3>
                <p className="text-xs font-semibold text-[#5b6ef5] tracking-wide mb-3.5">{role}</p>
                <p className="text-sm text-gray-500 leading-[1.75]">{bio}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}

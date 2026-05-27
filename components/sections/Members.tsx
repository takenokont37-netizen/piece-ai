/* =============================================
   創業メンバーセクション
   実際の情報が決まったら members 配列を更新してください
   ============================================= */
import FadeIn from '@/components/FadeIn'

/* TODO: bioを実際の経歴テキスト（150〜200字）に差し替えてください */
const members = [
  {
    initials: 'YA',
    name: 'Yusuke Aoki',
    role: '代表取締役 CEO',
    bio: '（経歴 準備中）',
  },
  {
    initials: 'YY',
    name: 'Yoshida',
    role: 'Co-Founder',
    bio: '（経歴 準備中）',
  },
]

export default function Members() {
  return (
    <section id="members" className="bg-white py-24">
      <div className="max-w-[1140px] mx-auto px-6">

        {/* セクションヘッダー */}
        <div className="text-center mb-16">
          <p className="text-xs font-semibold tracking-[0.2em] text-[#5b6ef5] font-[var(--font-en)] mb-3">FOUNDERS</p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a2e] mb-5">創業メンバー</h2>
          <p className="text-base text-gray-500">Piece.aiを立ち上げたメンバーのプロフィール。</p>
        </div>

        {/* カードグリッド（2名） */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[760px] mx-auto">
          {members.map(({ initials, name, role, bio }, i) => (
            <FadeIn key={i} delay={i * 80}>
              <div className="p-9 bg-gray-50 border border-gray-200 rounded-2xl text-center h-full transition-all hover:border-[#5b6ef5] hover:shadow-[0_8px_32px_rgba(91,110,245,0.1)] hover:-translate-y-1">
                {/* アバター（写真が決まったら <img> に差し替え） */}
                <div className="w-22 h-22 mx-auto mb-5 rounded-full bg-gradient-to-br from-[#5b6ef5] to-[#00c9a7] flex items-center justify-center text-white font-bold text-base font-[var(--font-en)]">
                  {initials}
                </div>
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

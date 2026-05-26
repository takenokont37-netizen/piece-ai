/* =============================================
   Statsセクション（数字で見るPiece.ai）
   ============================================= */
import FadeIn from '@/components/FadeIn'

const stats = [
  { number: '10', unit: '兆円', label: '目標時価総額規模' },
  { number: '13', unit: '名',   label: 'チームメンバー' },
  { number: 'Claude', unit: '搭載', label: '最先端AI技術' },
  { number: '24', unit: '時間', label: '365日稼働' },
]

export default function Stats() {
  return (
    <section className="bg-[#12121f] py-10 border-t border-white/5 border-b border-white/5">
      <div className="max-w-[1140px] mx-auto px-6">
        <div className="flex flex-wrap items-center justify-around gap-8">
          {stats.map(({ number, unit, label }, i) => (
            <FadeIn key={label} delay={i * 100}>
              <div className="text-center text-white">
                <span className="block font-[var(--font-en)] text-3xl font-bold text-[#5b6ef5] leading-tight">
                  {number}<span className="text-base font-normal font-[var(--font-ja)]">{unit}</span>
                </span>
                <span className="block text-xs text-white/50 mt-1">{label}</span>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}

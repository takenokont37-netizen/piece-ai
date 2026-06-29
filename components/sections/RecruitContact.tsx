'use client'
/* =============================================
   採用ページ専用 応募フォーム
   - 種別は 'recruit'（採用・入社のご応募）で固定
   - 希望職種（position）を選択できる
   - 送信は /api/contact に POST（トップのお問い合わせと同じ）
   ============================================= */
import { useState } from 'react'

type Lang = 'ja' | 'en'

type FormData = {
  name: string
  company: string
  email: string
  position: string
  message: string
}

type FieldError = Partial<Record<keyof FormData, string>>

const isValidEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)

const t = {
  ja: {
    nameLabel: 'お名前', required: '必須', namePlaceholder: '山田 太郎',
    companyLabel: '現在のご所属（任意）', companyPlaceholder: '株式会社〇〇 / フリーランス など',
    emailLabel: 'メールアドレス', emailPlaceholder: 'example@company.com',
    positionLabel: 'ご希望の職種', positionDefault: '選択してください',
    positions: [
      'エンジニア', 'プロダクト開発', '営業（セールス）', '事業開発・アライアンス',
      'マーケティング', 'ファイナンス', 'M&A', 'メディアコンテンツ制作', 'イベント企画', 'その他・未定',
    ],
    messageLabel: 'ご経歴・ひとこと', messagePlaceholder: 'これまでのご経歴や、興味を持った理由などをお書きください。',
    submit: '応募する', sending: '送信中...',
    success: '✅ ご応募ありがとうございます。担当者よりご連絡いたします。',
    serverErr: '送信に失敗しました。しばらくしてからお試しください。',
    errName: 'お名前を入力してください。',
    errEmail: 'メールアドレスを入力してください。',
    errEmailFmt: '正しいメールアドレス形式で入力してください。',
    errMessage: 'ご経歴・ひとことを入力してください。',
  },
  en: {
    nameLabel: 'Full Name', required: 'Required', namePlaceholder: 'Jane Smith',
    companyLabel: 'Current Affiliation (optional)', companyPlaceholder: 'Acme Corp. / Freelance, etc.',
    emailLabel: 'Email Address', emailPlaceholder: 'example@company.com',
    positionLabel: 'Position of Interest', positionDefault: 'Select an option',
    positions: [
      'Engineering', 'Product', 'Sales', 'Business Development',
      'Marketing', 'Finance', 'M&A', 'Media & Content', 'Event Planning', 'Other / Undecided',
    ],
    messageLabel: 'Background / A Note', messagePlaceholder: 'Tell us about your background and what drew you to Piece.ai.',
    submit: 'Apply', sending: 'Sending...',
    success: '✅ Thank you for applying. Our team will be in touch shortly.',
    serverErr: 'Something went wrong. Please try again later.',
    errName: 'Please enter your name.',
    errEmail: 'Please enter your email address.',
    errEmailFmt: 'Please enter a valid email address.',
    errMessage: 'Please enter a note about your background.',
  },
}

export default function RecruitContact({ lang = 'ja' }: { lang?: Lang }) {
  const tx = t[lang]
  const [form, setForm]     = useState<FormData>({ name: '', company: '', email: '', position: '', message: '' })
  const [errors, setErrors] = useState<FieldError>({})
  const [loading, setLoading]   = useState(false)
  const [success, setSuccess]   = useState(false)
  const [serverError, setServerError] = useState('')

  const validate = (): FieldError => {
    const e: FieldError = {}
    if (!form.name.trim())    e.name    = tx.errName
    if (!form.email.trim())   e.email   = tx.errEmail
    else if (!isValidEmail(form.email)) e.email = tx.errEmailFmt
    if (!form.message.trim()) e.message = tx.errMessage
    return e
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
    if (errors[name as keyof FormData]) setErrors(prev => ({ ...prev, [name]: '' }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length > 0) { setErrors(errs); return }

    setLoading(true)
    setServerError('')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        /* 種別は採用で固定して送信 */
        body: JSON.stringify({ ...form, type: 'recruit' }),
      })
      if (!res.ok) throw new Error('failed')
      setSuccess(true)
      setForm({ name: '', company: '', email: '', position: '', message: '' })
    } catch {
      setServerError(tx.serverErr)
    } finally {
      setLoading(false)
    }
  }

  const inputBase = 'w-full px-4 py-3 border rounded-lg text-sm outline-none transition-all'
  const inputOk   = 'border-gray-200 focus:border-[#00c9a7] focus:ring-3 focus:ring-[#00c9a7]/15'

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="max-w-[640px] mx-auto bg-white border border-gray-200 rounded-3xl p-8 md:p-11 shadow-[0_4px_24px_rgba(0,0,0,0.06)]"
    >
      {/* 名前 */}
      <div className="mb-6">
        <label className="block text-sm font-semibold text-[#1a1a2e] mb-2">
          {tx.nameLabel} <span className="text-xs bg-red-500 text-white px-1.5 py-0.5 rounded ml-1">{tx.required}</span>
        </label>
        <input
          name="name" value={form.name} onChange={handleChange} type="text"
          placeholder={tx.namePlaceholder}
          className={`${inputBase} ${errors.name ? 'border-red-400' : inputOk}`}
        />
        {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name}</p>}
      </div>

      {/* メール */}
      <div className="mb-6">
        <label className="block text-sm font-semibold text-[#1a1a2e] mb-2">
          {tx.emailLabel} <span className="text-xs bg-red-500 text-white px-1.5 py-0.5 rounded ml-1">{tx.required}</span>
        </label>
        <input
          name="email" value={form.email} onChange={handleChange} type="email"
          placeholder={tx.emailPlaceholder}
          className={`${inputBase} ${errors.email ? 'border-red-400' : inputOk}`}
        />
        {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
      </div>

      {/* 現在のご所属（任意） */}
      <div className="mb-6">
        <label className="block text-sm font-semibold text-[#1a1a2e] mb-2">{tx.companyLabel}</label>
        <input
          name="company" value={form.company} onChange={handleChange} type="text"
          placeholder={tx.companyPlaceholder}
          className={`${inputBase} ${inputOk}`}
        />
      </div>

      {/* ご希望の職種 */}
      <div className="mb-6">
        <label className="block text-sm font-semibold text-[#1a1a2e] mb-2">{tx.positionLabel}</label>
        <select
          name="position" value={form.position} onChange={handleChange}
          className={`${inputBase} ${inputOk} appearance-none bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%2212%22 height=%228%22><path fill=%22%236b7280%22 d=%22M6 8L0 0h12z%22/></svg>')] bg-no-repeat bg-[right_16px_center] pr-10`}
        >
          <option value="">{tx.positionDefault}</option>
          {tx.positions.map((p) => (
            <option key={p} value={p}>{p}</option>
          ))}
        </select>
      </div>

      {/* ご経歴・ひとこと */}
      <div className="mb-8">
        <label className="block text-sm font-semibold text-[#1a1a2e] mb-2">
          {tx.messageLabel} <span className="text-xs bg-red-500 text-white px-1.5 py-0.5 rounded ml-1">{tx.required}</span>
        </label>
        <textarea
          name="message" value={form.message} onChange={handleChange} rows={5}
          placeholder={tx.messagePlaceholder}
          className={`${inputBase} resize-y min-h-[120px] ${errors.message ? 'border-red-400' : inputOk}`}
        />
        {errors.message && <p className="text-xs text-red-500 mt-1">{errors.message}</p>}
      </div>

      {/* 送信ボタン */}
      <div className="text-center">
        <button
          type="submit"
          disabled={loading}
          className="px-12 py-4 bg-[#00c9a7] text-white font-semibold rounded-lg shadow-[0_4px_14px_rgba(0,201,167,0.35)] transition-all hover:bg-[#00a98e] hover:-translate-y-0.5 disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {loading ? tx.sending : tx.submit}
        </button>
      </div>

      {success && (
        <div className="mt-6 p-5 bg-[#00c9a7]/10 border border-[#00c9a7] rounded-lg text-center text-sm text-emerald-700">
          {tx.success}
        </div>
      )}
      {serverError && (
        <div className="mt-6 p-5 bg-red-50 border border-red-300 rounded-lg text-center text-sm text-red-600">
          {serverError}
        </div>
      )}
    </form>
  )
}

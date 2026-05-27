'use client'
/* =============================================
   お問い合わせセクション（クライアントコンポーネント）
   - フォーム送信は /api/contact に POST
   - Slack通知は #7 で api/contact/route.ts に追加予定
   ============================================= */
import { useState } from 'react'

type FormData = {
  name: string
  company: string
  email: string
  type: string
  message: string
}

type FieldError = Partial<Record<keyof FormData, string>>

/** メールアドレス形式チェック */
const isValidEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)

export default function Contact() {
  const [form, setForm] = useState<FormData>({ name: '', company: '', email: '', type: '', message: '' })
  const [errors, setErrors]   = useState<FieldError>({})
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [serverError, setServerError] = useState('')

  /** バリデーション（エラーを返す） */
  const validate = (): FieldError => {
    const e: FieldError = {}
    if (!form.name.trim())    e.name    = 'お名前を入力してください。'
    if (!form.email.trim())   e.email   = 'メールアドレスを入力してください。'
    else if (!isValidEmail(form.email)) e.email = '正しいメールアドレス形式で入力してください。'
    if (!form.message.trim()) e.message = 'お問い合わせ内容を入力してください。'
    return e
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
    /* 入力中にエラーをクリア */
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
        body: JSON.stringify(form),
      })
      if (!res.ok) throw new Error('送信に失敗しました')
      setSuccess(true)
      setForm({ name: '', company: '', email: '', type: '', message: '' })
    } catch {
      setServerError('送信に失敗しました。しばらくしてからお試しください。')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="bg-gray-50 py-24">
      <div className="max-w-[1140px] mx-auto px-6">

        {/* セクションヘッダー */}
        <div className="text-center mb-16">
          <p className="text-xs font-semibold tracking-[0.2em] text-[#5b6ef5] font-[var(--font-en)] mb-3">CONTACT</p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a2e] mb-5">お問い合わせ</h2>
          <p className="text-base text-gray-500 leading-[1.8]">
            サービスに関するご質問、導入のご相談はお気軽にどうぞ。<br />
            担当者より2営業日以内にご連絡いたします。
          </p>
        </div>

        {/* フォーム */}
        <form
          onSubmit={handleSubmit}
          noValidate
          className="max-w-[680px] mx-auto bg-white border border-gray-200 rounded-3xl p-12 shadow-[0_4px_24px_rgba(0,0,0,0.05)]"
        >
          {/* 名前・会社名（横並び） */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-6">
            <div>
              <label className="block text-sm font-semibold text-[#1a1a2e] mb-2">
                お名前 <span className="text-xs bg-red-500 text-white px-1.5 py-0.5 rounded ml-1">必須</span>
              </label>
              <input
                name="name" value={form.name} onChange={handleChange}
                placeholder="山田 太郎" type="text"
                className={`w-full px-4 py-3 border rounded-lg text-sm outline-none transition-all ${
                  errors.name ? 'border-red-400' : 'border-gray-200 focus:border-[#5b6ef5] focus:ring-3 focus:ring-[#5b6ef5]/15'
                }`}
              />
              {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name}</p>}
            </div>
            <div>
              <label className="block text-sm font-semibold text-[#1a1a2e] mb-2">会社名</label>
              <input
                name="company" value={form.company} onChange={handleChange}
                placeholder="株式会社〇〇" type="text"
                className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm outline-none focus:border-[#5b6ef5] focus:ring-3 focus:ring-[#5b6ef5]/15 transition-all"
              />
            </div>
          </div>

          {/* メール */}
          <div className="mb-6">
            <label className="block text-sm font-semibold text-[#1a1a2e] mb-2">
              メールアドレス <span className="text-xs bg-red-500 text-white px-1.5 py-0.5 rounded ml-1">必須</span>
            </label>
            <input
              name="email" value={form.email} onChange={handleChange}
              placeholder="example@company.com" type="email"
              className={`w-full px-4 py-3 border rounded-lg text-sm outline-none transition-all ${
                errors.email ? 'border-red-400' : 'border-gray-200 focus:border-[#5b6ef5] focus:ring-3 focus:ring-[#5b6ef5]/15'
              }`}
            />
            {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
          </div>

          {/* お問い合わせ種別 */}
          <div className="mb-6">
            <label className="block text-sm font-semibold text-[#1a1a2e] mb-2">お問い合わせ種別</label>
            <select
              name="type" value={form.type} onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm outline-none focus:border-[#5b6ef5] focus:ring-3 focus:ring-[#5b6ef5]/15 transition-all appearance-none bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%2212%22 height=%228%22><path fill=%22%236b7280%22 d=%22M6 8L0 0h12z%22/></svg>')] bg-no-repeat bg-[right_16px_center] pr-10"
            >
              <option value="">選択してください</option>
              <option value="meeting">まずは面談を希望する</option>
              <option value="service">サービスについて詳しく聞きたい</option>
              <option value="demo">デモを見たい</option>
              <option value="price">料金について</option>
              <option value="other">その他</option>
            </select>
          </div>

          {/* お問い合わせ内容 */}
          <div className="mb-8">
            <label className="block text-sm font-semibold text-[#1a1a2e] mb-2">
              お問い合わせ内容 <span className="text-xs bg-red-500 text-white px-1.5 py-0.5 rounded ml-1">必須</span>
            </label>
            <textarea
              name="message" value={form.message} onChange={handleChange}
              placeholder="ご相談内容をご記入ください"
              rows={6}
              className={`w-full px-4 py-3 border rounded-lg text-sm outline-none transition-all resize-y min-h-[140px] ${
                errors.message ? 'border-red-400' : 'border-gray-200 focus:border-[#5b6ef5] focus:ring-3 focus:ring-[#5b6ef5]/15'
              }`}
            />
            {errors.message && <p className="text-xs text-red-500 mt-1">{errors.message}</p>}
          </div>

          {/* 送信ボタン */}
          <div className="text-center">
            <button
              type="submit"
              disabled={loading}
              className="px-12 py-4 bg-[#5b6ef5] text-white font-semibold rounded-lg shadow-[0_4px_14px_rgba(91,110,245,0.35)] transition-all hover:bg-[#3a4fd4] hover:-translate-y-0.5 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {loading ? '送信中...' : '送信する'}
            </button>
          </div>

          {/* 送信成功メッセージ */}
          {success && (
            <div className="mt-6 p-5 bg-[#00c9a7]/10 border border-[#00c9a7] rounded-lg text-center text-sm text-emerald-700">
              ✅ お問い合わせを受け付けました。担当者よりご連絡いたします。
            </div>
          )}

          {/* サーバーエラー */}
          {serverError && (
            <div className="mt-6 p-5 bg-red-50 border border-red-300 rounded-lg text-center text-sm text-red-600">
              {serverError}
            </div>
          )}
        </form>

      </div>
    </section>
  )
}

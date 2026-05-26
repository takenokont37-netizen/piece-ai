import { NextRequest, NextResponse } from 'next/server'

/* =============================================
   お問い合わせフォーム API Route
   POST /api/contact

   TODO: Slack通知を追加する場合は以下を参考に
   https://api.slack.com/messaging/webhooks
   環境変数 SLACK_WEBHOOK_URL_CONTACT を設定して使う
   ============================================= */

/** バリデーション: 必須フィールドの確認 */
function validate(body: Record<string, unknown>) {
  const errors: string[] = []
  if (!body.name || typeof body.name !== 'string' || !body.name.trim()) {
    errors.push('お名前は必須です')
  }
  if (!body.email || typeof body.email !== 'string' || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(body.email)) {
    errors.push('有効なメールアドレスが必要です')
  }
  if (!body.message || typeof body.message !== 'string' || !body.message.trim()) {
    errors.push('お問い合わせ内容は必須です')
  }
  return errors
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()

    /* バリデーション */
    const errors = validate(body)
    if (errors.length > 0) {
      return NextResponse.json({ error: errors.join(', ') }, { status: 400 })
    }

    const { name, company, email, type, message } = body as {
      name: string; company?: string; email: string; type?: string; message: string
    }

    /* ── TODO: Slack通知（#7 で実装） ──────────────────
    const webhookUrl = process.env.SLACK_WEBHOOK_URL_CONTACT
    if (webhookUrl) {
      await fetch(webhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          text: [
            '📩 *新規お問い合わせ*',
            `会社: ${company || '（未入力）'}`,
            `氏名: ${name}`,
            `メール: ${email}`,
            `種別: ${type || '（未選択）'}`,
            `内容:\n${message}`,
          ].join('\n'),
        }),
      })
    }
    ─────────────────────────────────────────────────── */

    /* ── TODO: メール送信（Resend / SendGrid） ──────────
    import { Resend } from 'resend'
    const resend = new Resend(process.env.RESEND_API_KEY)
    await resend.emails.send({
      from: 'noreply@piece.ai',
      to: 'info@piece.ai',
      subject: `お問い合わせ: ${name}（${company || '個人'}）`,
      text: `氏名: ${name}\nメール: ${email}\n種別: ${type}\n\n${message}`,
    })
    ─────────────────────────────────────────────────── */

    /* 受付完了ログ（本番デプロイ後はVercelのFunction Logsで確認できる） */
    console.log('[Contact] New inquiry received:', {
      name,
      company: company || '（未入力）',
      email,
      type: type || '（未選択）',
      messageLength: message.length,
      timestamp: new Date().toISOString(),
    })

    return NextResponse.json({ success: true }, { status: 200 })

  } catch (err) {
    console.error('[Contact] Error:', err)
    return NextResponse.json({ error: 'サーバーエラーが発生しました' }, { status: 500 })
  }
}

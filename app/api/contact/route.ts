import { NextRequest, NextResponse } from 'next/server'

/* =============================================
   お問い合わせフォーム API Route
   POST /api/contact

   必要な環境変数（Vercelのダッシュボードで設定）:
   - SLACK_WEBHOOK_URL_CONTACT : Slack Incoming Webhook URL
   ============================================= */

/** お問い合わせ種別の日本語ラベル */
const typeLabel: Record<string, string> = {
  meeting: '面談を希望する',
  service: 'サービスについて詳しく聞きたい',
  demo:    'デモを見たい',
  price:   '料金について',
  other:   'その他',
}

/** バリデーション */
function validate(body: Record<string, unknown>): string[] {
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

/** Slackに通知を送る */
async function notifySlack(params: {
  name: string
  company: string
  email: string
  type: string
  message: string
}) {
  const webhookUrl = process.env.SLACK_WEBHOOK_URL_CONTACT
  if (!webhookUrl) {
    /* 環境変数が未設定の場合はスキップ（ローカル開発時など） */
    console.warn('[Contact] SLACK_WEBHOOK_URL_CONTACT が未設定のため、Slack通知をスキップします')
    return
  }

  const { name, company, email, type, message } = params
  const label = typeLabel[type] ?? type ?? '（未選択）'

  const slackBody = {
    text: '📩 *新規お問い合わせが届きました*',
    blocks: [
      {
        type: 'header',
        text: { type: 'plain_text', text: '📩 新規お問い合わせ', emoji: true },
      },
      {
        type: 'section',
        fields: [
          { type: 'mrkdwn', text: `*氏名*\n${name}` },
          { type: 'mrkdwn', text: `*会社名*\n${company || '（未入力）'}` },
          { type: 'mrkdwn', text: `*メール*\n${email}` },
          { type: 'mrkdwn', text: `*種別*\n${label}` },
        ],
      },
      {
        type: 'section',
        text: { type: 'mrkdwn', text: `*お問い合わせ内容*\n${message}` },
      },
      {
        type: 'context',
        elements: [
          {
            type: 'mrkdwn',
            text: `受信日時: ${new Date().toLocaleString('ja-JP', { timeZone: 'Asia/Tokyo' })}`,
          },
        ],
      },
    ],
  }

  const res = await fetch(webhookUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(slackBody),
  })

  if (!res.ok) {
    /* Slack通知の失敗はエラーにしない（フォーム送信は成功扱いにする） */
    console.error('[Contact] Slack通知に失敗しました:', res.status, await res.text())
  }
}

/* =============================================
   POST ハンドラー
   ============================================= */
export async function POST(req: NextRequest) {
  try {
    const body = await req.json()

    /* バリデーション */
    const errors = validate(body)
    if (errors.length > 0) {
      return NextResponse.json({ error: errors.join(', ') }, { status: 400 })
    }

    const { name, company = '', email, type = '', message } = body as {
      name: string; company?: string; email: string; type?: string; message: string
    }

    /* Slack通知（失敗しても送信完了とする） */
    await notifySlack({ name, company, email, type, message })

    /* ログ（Vercel Functions Logs で確認できる） */
    console.log('[Contact] お問い合わせを受け付けました:', {
      name,
      company: company || '（未入力）',
      email,
      type: typeLabel[type] ?? type,
      timestamp: new Date().toISOString(),
    })

    return NextResponse.json({ success: true }, { status: 200 })

  } catch (err) {
    console.error('[Contact] Error:', err)
    return NextResponse.json({ error: 'サーバーエラーが発生しました' }, { status: 500 })
  }
}

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

/** Slackに通知を送る（デバッグ情報を返す） */
async function notifySlack(params: {
  name: string
  company: string
  email: string
  type: string
  message: string
}): Promise<{ status: number; body: string; webhookSet: boolean }> {
  const webhookUrl = process.env.SLACK_WEBHOOK_URL_CONTACT
  if (!webhookUrl) {
    console.warn('[Contact] SLACK_WEBHOOK_URL_CONTACT が未設定のため、Slack通知をスキップします')
    return { status: 0, body: 'webhook URL not set', webhookSet: false }
  }

  const { name, company, email, type, message } = params
  const label = typeLabel[type] ?? type ?? '（未選択）'

  /* シンプルなテキスト形式（デバッグ用：Block Kitを一時的に無効化） */
  const slackBody = {
    text: `📩 新規お問い合わせ\n氏名: ${name}\n会社: ${company || '未入力'}\nメール: ${email}\n種別: ${label}\n内容: ${message}`,
  }

  const res = await fetch(webhookUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(slackBody),
  })

  const responseBody = await res.text()
  if (!res.ok) {
    console.error('[Contact] Slack通知に失敗しました:', res.status, responseBody)
  } else {
    console.log('[Contact] Slack通知成功:', res.status, responseBody)
  }
  return { status: res.status, body: responseBody, webhookSet: true }
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

    /* Slack通知（デバッグ情報をレスポンスに含める） */
    const slackResult = await notifySlack({ name, company, email, type, message })

    console.log('[Contact] お問い合わせを受け付けました:', {
      name,
      email,
      slackStatus: slackResult.status,
      slackBody: slackResult.body,
      webhookSet: slackResult.webhookSet,
      timestamp: new Date().toISOString(),
    })

    /* デバッグ用：Slackの結果をレスポンスに含める（確認後に削除） */
    return NextResponse.json({ success: true, _debug: slackResult }, { status: 200 })

  } catch (err) {
    console.error('[Contact] Error:', err)
    return NextResponse.json({ error: 'サーバーエラーが発生しました' }, { status: 500 })
  }
}

export type RSVPPayload = {
  name: string
  attending: boolean
  transportNeeded: boolean | null
  message: string
  language: string
}

export async function submitRSVP(data: RSVPPayload): Promise<void> {
  const url = import.meta.env.VITE_GOOGLE_SHEETS_WEBHOOK_URL

  if (!url) {
    console.warn(
      'VITE_GOOGLE_SHEETS_WEBHOOK_URL is not set. RSVP data will not be submitted.',
    )
    return
  }

  const controller = new AbortController()
  const timeoutId = setTimeout(() => controller.abort(), 10_000)

  try {
    await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'text/plain;charset=utf-8',
      },
      body: JSON.stringify(data),
      mode: 'no-cors',
      signal: controller.signal,
    })
  } catch (error: unknown) {
    if (error instanceof DOMException && error.name === 'AbortError') {
      throw new Error(
        'RSVP submission timed out after 10 seconds. Please try again.',
        { cause: error },
      )
    }

    throw new Error(
      `Failed to submit RSVP: ${error instanceof Error ? error.message : 'Unknown error'}`,
      { cause: error },
    )
  } finally {
    clearTimeout(timeoutId)
  }
}

import { type FormEvent, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'

export default function RSVPSection() {
  const { t } = useTranslation()
  const [name, setName] = useState('')
  const [attending, setAttending] = useState<boolean | null>(null)
  const [transportNeeded, setTransportNeeded] = useState<boolean | null>(null)
  const [message, setMessage] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    setError('')

    // Validate
    if (!name.trim()) {
      setError(`${t('rsvp.fullName')} required`)
      return
    }
    if (attending === null) {
      setError(`${t('rsvp.attendance')} required`)
      return
    }

    setSubmitted(true)
    // Reset form after 3 seconds
    setTimeout(() => {
      setSubmitted(false)
      setName('')
      setAttending(null)
      setTransportNeeded(null)
      setMessage('')
    }, 3000)
  }

  return (
    <motion.section
      className="py-16 px-6"
      style={{ backgroundColor: '#FAF8F5' }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <div className="max-w-xl mx-auto">
        {/* Info badge */}
        <div
          className="flex items-center justify-center gap-2 mb-6 px-4 py-2 rounded-full mx-auto w-fit"
          style={{
            backgroundColor: 'rgba(92, 32, 24, 0.08)',
            border: '1px solid rgba(92, 32, 24, 0.15)',
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#5C2018"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ opacity: 0.7 }}
            aria-hidden="true"
          >
            <title>Info</title>
            <circle cx="12" cy="12" r="10" />
            <path d="M12 16v-4" />
            <path d="M12 8h.01" />
          </svg>
          <span className="font-body text-xs tracking-wide" style={{ color: 'rgba(92, 32, 24, 0.8)' }}>
            {t('rsvp.info')}
          </span>
        </div>

        {/* Title */}
        <div className="text-center mb-10">
          <h2 className="font-script text-4xl md:text-5xl mb-2 text-burgundy">
            {t('rsvp.title')}
          </h2>
        </div>

        {/* Form */}
        {submitted ? (
          <div className="text-center py-12">
            <p className="font-script text-3xl text-burgundy">
              {t('rsvp.thankYouMessage')}
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="rounded-2xl p-6 md:p-8 space-y-6"
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.6)',
              border: '1px solid rgba(92, 32, 24, 0.1)',
            }}
          >
            {/* Honeypot */}
            <div className="absolute -left-[9999px] opacity-0" aria-hidden="true">
              <input type="text" name="website" tabIndex={-1} autoComplete="off" />
            </div>

            {/* Name */}
            <div>
              <label
                htmlFor="name"
                className="font-body text-xs tracking-widest uppercase mb-2 block text-burgundy"
              >
                {t('rsvp.fullName')}
              </label>
              <input
                id="name"
                required
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder={t('rsvp.namePlaceholder')}
                className="flex h-10 w-full border px-3 py-2 text-base rounded-xl bg-white/80 focus:outline-none focus:ring-2 focus:ring-burgundy/30 focus:border-burgundy"
                style={{
                  borderColor: 'rgba(92, 32, 24, 0.2)',
                  color: '#5C2018',
                }}
              />
            </div>

            {/* Attendance */}
            <fieldset>
              <legend className="font-body text-xs tracking-widest uppercase mb-3 block text-burgundy">
                {t('rsvp.attendance')}
              </legend>
              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  type="button"
                  onClick={() => setAttending(true)}
                  className="flex-1 py-3 px-4 rounded-xl border-2 font-body text-sm transition-all duration-200"
                  style={{
                    borderColor: attending === true ? '#5C2018' : 'rgba(92, 32, 24, 0.2)',
                    backgroundColor: attending === true ? '#5C2018' : 'transparent',
                    color: attending === true ? '#FFFFFF' : '#5C2018',
                  }}
                >
                  {t('rsvp.yesAttend')}
                </button>
                <button
                  type="button"
                  onClick={() => setAttending(false)}
                  className="flex-1 py-3 px-4 rounded-xl border-2 font-body text-sm transition-all duration-200"
                  style={{
                    borderColor: attending === false ? '#5C2018' : 'rgba(92, 32, 24, 0.2)',
                    backgroundColor: attending === false ? '#5C2018' : 'transparent',
                    color: attending === false ? '#FFFFFF' : '#5C2018',
                  }}
                >
                  {t('rsvp.noAttend')}
                </button>
            </div>
            </fieldset>

            {/* Transport */}
            <fieldset>
              <legend className="font-body text-xs tracking-widest uppercase mb-3 block text-burgundy">
                {t('rsvp.transportQuestion')}
              </legend>
              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  type="button"
                  onClick={() => setTransportNeeded(true)}
                  className="flex-1 py-3 px-4 rounded-xl border-2 font-body text-sm transition-all duration-200"
                  style={{
                    borderColor: transportNeeded === true ? '#5C2018' : 'rgba(92, 32, 24, 0.2)',
                    backgroundColor: transportNeeded === true ? '#5C2018' : 'transparent',
                    color: transportNeeded === true ? '#FFFFFF' : '#5C2018',
                  }}
                >
                  {t('rsvp.transportYes')}
                </button>
                <button
                  type="button"
                  onClick={() => setTransportNeeded(false)}
                  className="flex-1 py-3 px-4 rounded-xl border-2 font-body text-sm transition-all duration-200"
                  style={{
                    borderColor: transportNeeded === false ? '#5C2018' : 'rgba(92, 32, 24, 0.2)',
                    backgroundColor: transportNeeded === false ? '#5C2018' : 'transparent',
                    color: transportNeeded === false ? '#FFFFFF' : '#5C2018',
                  }}
                >
                  {t('rsvp.transportNo')}
                </button>
              </div>
            </fieldset>

            {/* Message */}
            <div>
              <label
                htmlFor="message"
                className="font-body text-xs tracking-widest uppercase mb-2 block text-burgundy"
              >
                {t('rsvp.message')}
              </label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder={t('rsvp.messagePlaceholder')}
                rows={3}
                className="flex w-full border px-3 py-2 text-base rounded-xl bg-white/80 focus:outline-none focus:ring-2 focus:ring-burgundy/30 focus:border-burgundy resize-none"
                style={{
                  borderColor: 'rgba(92, 32, 24, 0.2)',
                  color: '#5C2018',
                }}
              />
            </div>

            {/* Error */}
            {error && (
              <p className="text-red-500 text-xs text-center">{error}</p>
            )}

            {/* Submit */}
            <button
              type="submit"
              className="w-full py-3 px-6 rounded-xl font-body text-sm tracking-widest uppercase transition-all duration-200 flex items-center justify-center gap-2"
              style={{
                backgroundColor: '#5C2018',
                color: '#FFFFFF',
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <title>Confirm</title>
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                <polyline points="22 4 12 14.01 9 11.01" />
              </svg>
              {t('rsvp.confirm')}
            </button>
          </form>
        )}
      </div>
    </motion.section>
  )
}

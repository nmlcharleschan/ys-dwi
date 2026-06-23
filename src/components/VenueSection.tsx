import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'

const WEDDING_ICS = [
  'BEGIN:VCALENDAR',
  'VERSION:2.0',
  'PRODID:-//Wedding//EN',
  'BEGIN:VEVENT',
  'DTSTART:20261107T090000Z',
  'DTEND:20261107T140000Z',
  'SUMMARY:Yanese & Steve\'s Wedding',
  'LOCATION:Wooden Fairies\\, Windfield Court\\, No.7 Wang Kong Tsuen\\, Sai Kung',
  'DESCRIPTION:Ceremony at 5:00 PM followed by reception',
  'END:VEVENT',
  'END:VCALENDAR',
].join('\n')

const ICS_URI = `data:text/calendar;charset=utf-8,${encodeURIComponent(WEDDING_ICS)}`

export default function VenueSection() {
  const { t } = useTranslation()

  return (
    <motion.section
      className="bg-white flex flex-col items-center justify-start pt-8 pb-12 px-8"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <div className="text-center mb-4">
        <p className="font-body text-sm tracking-[0.15em] uppercase text-burgundy">
          {t('venue.celebrationAt')}
        </p>
      </div>

      <div className="relative max-w-2xl w-full mb-8">
        <img
          src="./assets/venue-illustration.png"
          alt="Venue Illustration"
          className="w-full h-auto"
        />
      </div>

      <div className="text-center mb-4">
        <h2 className="font-display text-3xl md:text-4xl lg:text-5xl tracking-wide leading-tight text-burgundy">
          {t('venue.name')}
        </h2>
      </div>

      <div className="text-center mb-8">
        <p className="font-body text-xs tracking-[0.2em] uppercase text-burgundy">
          {t('venue.address1')}
        </p>
        <p className="font-body text-xs tracking-[0.2em] uppercase text-burgundy">
          {t('venue.address2')}
        </p>
      </div>

      <div className="text-center mb-10">
        <div className="inline-flex items-center gap-3">
          <a
            href="https://maps.app.goo.gl/gr5ostiWzUhKw6xv7"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center w-10 h-10 rounded-full transition-all duration-200 hover:opacity-80"
            style={{
              backgroundColor: '#5C2018',
              color: '#FFFFFF',
            }}
            aria-label="Open in Google Maps"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
          </a>
          <a
            href="https://www.woodenfairies.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center w-10 h-10 rounded-full transition-all duration-200 hover:opacity-80"
            style={{
              backgroundColor: '#5C2018',
              color: '#FFFFFF',
            }}
            aria-label="Visit website"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10" />
              <line x1="2" y1="12" x2="22" y2="12" />
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
            </svg>
          </a>
          <a
            href={ICS_URI}
            download="yanese-steve-wedding.ics"
            className="inline-flex items-center justify-center w-10 h-10 rounded-full transition-all duration-200 hover:opacity-80"
            style={{
              backgroundColor: '#5C2018',
              color: '#FFFFFF',
            }}
            aria-label="Add to calendar"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
              <line x1="16" y1="2" x2="16" y2="6" />
              <line x1="8" y1="2" x2="8" y2="6" />
              <line x1="3" y1="10" x2="21" y2="10" />
            </svg>
          </a>
        </div>
      </div>

      <div className="text-center mb-10">
        <p className="font-display text-2xl md:text-3xl tracking-wide text-burgundy">
          {t('venue.date')}
        </p>
      </div>

      <div className="text-center">
        <p className="font-script text-3xl md:text-4xl text-burgundy">
          {t('venue.receptionToFollow')}
        </p>
      </div>
    </motion.section>
  )
}

import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'

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

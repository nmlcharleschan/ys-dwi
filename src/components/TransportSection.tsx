import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'

export default function TransportSection() {
  const { t } = useTranslation()

  return (
    <motion.section
      className="bg-white flex flex-col items-center justify-center py-12 px-8"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      {/* Header */}
      <div className="text-center mb-12">
        <p className="font-body text-xs tracking-[0.2em] uppercase mb-4 text-burgundy">
          {t('transport.howToGetThere')}
        </p>
        <h2 className="font-display text-5xl md:text-6xl tracking-wide text-burgundy">
          {t('transport.title')}
        </h2>
      </div>

      {/* Description */}
      <div className="text-center max-w-xl mb-16">
        <p className="font-body text-base leading-relaxed text-burgundy">
          {t('transport.description')}
        </p>
      </div>

      {/* Bus departure */}
      <div className="text-center mb-16">
        <p className="font-body text-xs tracking-[0.2em] uppercase mb-6 text-burgundy">
          {t('transport.busDeparture')}
        </p>
        <p className="font-display text-2xl md:text-3xl tracking-wide mb-2 text-burgundy">
          {t('transport.departurePoint')}
        </p>
        <p className="font-display text-xl md:text-2xl tracking-wide text-burgundy">
          {t('transport.departureTime')}
        </p>
      </div>

      {/* Return */}
      <div className="text-center mb-12">
        <p className="font-body text-xs tracking-[0.2em] uppercase mb-6 text-burgundy">
          {t('transport.returnToFlorence')}
        </p>
        <p className="font-display text-xl md:text-2xl tracking-wide text-burgundy">
          {t('transport.returnTime')}
        </p>
      </div>

      {/* RSVP note */}
      <div className="text-center">
        <p className="font-script text-2xl md:text-3xl text-burgundy">
          {t('transport.rsvpNote')}
        </p>
      </div>
    </motion.section>
  )
}

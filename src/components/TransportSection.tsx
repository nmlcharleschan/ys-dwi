import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'

export default function TransportSection() {
  const { t } = useTranslation()

  return (
    <motion.section
      className="flex flex-col items-center justify-center py-12 px-8"
      style={{ backgroundColor: '#FAF8F5' }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <div className="text-center mb-12">
        <p className="font-body text-xs tracking-[0.2em] uppercase mb-4 text-burgundy">
          {t('transport.howToGetThere')}
        </p>
        <img
          src="./assets/gift-icon.png"
          alt="Shuttle"
          className="w-28 h-28 mx-auto mb-4 object-contain"
        />
        <h2 className="font-display text-5xl md:text-6xl tracking-wide text-burgundy">
          {t('transport.title')}
        </h2>
      </div>

      <div className="text-center max-w-xl mb-12">
        <p className="font-body text-base leading-relaxed mb-6 text-burgundy">
          {t('transport.description')}
        </p>
      </div>

      <div className="text-center mb-12">
        <p className="font-script text-3xl md:text-4xl text-burgundy">
          {t('transport.encourage')}
        </p>
      </div>

      <div className="text-center mb-12">
        <p className="font-body text-xs tracking-[0.2em] uppercase mb-4 text-burgundy">
          {t('transport.busDeparture')}
        </p>
        <div className="border-2 border-burgundy px-8 py-6 inline-block">
          <p className="font-body text-sm tracking-wide mb-2 text-burgundy">
            {t('transport.departurePoint')}
          </p>
          <p className="font-body text-sm tracking-wide mb-2 text-burgundy">
            {t('transport.departureTime')}
          </p>
          <p className="font-body text-sm tracking-wide mb-2 text-burgundy">
            {t('transport.returnToCentral')}: {t('transport.returnTime')}
          </p>
          <p className="font-body text-xs tracking-wide italic text-burgundy">
            {t('transport.note')}
          </p>
        </div>
      </div>
    </motion.section>
  )
}

import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'

export default function GiftsSection() {
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
          {t('gifts.registry')}
        </p>
        <img
          src="./assets/gift-icon.png"
          alt="Gift"
          className="w-28 h-28 mx-auto mb-4 object-contain"
        />
        <h2 className="font-display text-5xl md:text-6xl tracking-wide text-burgundy">
          {t('gifts.title')}
        </h2>
      </div>

      <div className="text-center max-w-xl mb-12">
        <p className="font-body text-base leading-relaxed mb-6 text-burgundy">
          {t('gifts.message')}
        </p>
      </div>

      <div className="text-center mb-12">
        <p className="font-script text-3xl md:text-4xl text-burgundy">
          {t('gifts.withLove')}
        </p>
      </div>

      <div className="text-center">
        <p className="font-body text-xs tracking-[0.2em] uppercase mb-4 text-burgundy">
          {t('gifts.bankDetails')}
        </p>
        <div className="border-2 border-burgundy px-8 py-6 inline-block">
          <p className="font-body text-sm tracking-wide mb-2 text-burgundy">
            {t('gifts.accountHolder')}
          </p>
          <p className="font-body text-sm tracking-wide mb-2 text-burgundy">
            {t('gifts.iban')}
          </p>
          <p className="font-body text-sm tracking-wide text-burgundy">
            {t('gifts.reference')}
          </p>
        </div>
      </div>
    </motion.section>
  )
}

import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'

export default function DressCodeSection() {
  const { t } = useTranslation()

  return (
    <motion.section
      className="bg-white flex flex-col items-center justify-center py-12 px-8"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      {/* Title */}
      <div className="text-center mb-8">
        <h2 className="font-display text-5xl md:text-6xl tracking-wide text-burgundy">
          {t('dresscode.title')}
        </h2>
      </div>

      {/* Illustration */}
      <div className="w-full max-w-xs mb-8">
        <img
          src="./assets/dresscode-illustration.png"
          alt="Dress Code Illustration"
          className="w-full h-auto"
        />
      </div>

      {/* Description */}
      <div className="text-center max-w-xl mb-8">
        <p className="font-body text-base leading-relaxed text-burgundy">
          {t('dresscode.description')}
        </p>
      </div>

      {/* Formal Attire */}
      <div className="text-center mb-8">
        <p className="font-display text-3xl md:text-4xl tracking-wide text-burgundy">
          {t('dresscode.formalAttire')}
        </p>
      </div>

      {/* Avoid white */}
      <div className="text-center">
        <p className="font-script text-2xl md:text-3xl text-burgundy">
          {t('dresscode.avoidWhite')}
        </p>
      </div>
    </motion.section>
  )
}

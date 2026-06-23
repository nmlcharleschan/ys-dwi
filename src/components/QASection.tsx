import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'

const QASection = () => {
  const { t } = useTranslation()

  const qaPairs = [
    { question: t('qa.deadlineQ'), answer: t('qa.deadlineA') },
    { question: t('qa.childrenQ'), answer: t('qa.childrenA') },
    { question: t('qa.parkingQ'), answer: t('qa.parkingA') },
  ]

  return (
    <motion.section
      className="py-16 px-6"
      style={{ backgroundColor: '#FAF8F5' }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <div className="max-w-xl mx-auto">
        <h2 className="font-script text-4xl md:text-5xl text-center mb-12 text-burgundy">
          {t('qa.title')}
        </h2>

        <div className="space-y-0">
          {qaPairs.map((pair, index) => (
            <div key={pair.question}>
              <h3 className="font-display text-lg md:text-xl text-burgundy mb-3">
                {pair.question}
              </h3>
              <p
                className="font-body text-sm md:text-base leading-relaxed"
                style={{ color: 'rgba(92, 32, 24, 0.75)' }}
              >
                {pair.answer}
              </p>
              {index < qaPairs.length - 1 && (
                <hr
                  className="my-8"
                  style={{
                    borderColor: 'rgba(92, 32, 24, 0.12)',
                    borderTopWidth: '1px',
                  }}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}

export default QASection

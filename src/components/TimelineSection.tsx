import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'

function TimelineItem({
  time,
  title,
}: {
  time: string
  title: string
}) {
  return (
    <div className="text-center mb-4">
      <h3 className="font-display text-sm md:text-base tracking-[0.15em] uppercase mb-1 text-burgundy">
        {time}
      </h3>
      <p className="font-body text-xs md:text-sm text-burgundy">{title}</p>
    </div>
  )
}

export default function TimelineSection() {
  const { t } = useTranslation()

  return (
    <motion.section
      className="flex flex-col items-center justify-center py-8 px-4"
      style={{ backgroundColor: '#FAF8F5' }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <div className="relative w-full max-w-md md:max-w-lg">
        <img
          src="./assets/menu-frame.png"
          alt=""
          className="w-full h-auto"
        />

        <div className="absolute inset-0 flex flex-col items-center justify-center px-[12%] -mt-8">
          <div className="text-center mb-3">
            <h2 className="font-script text-lg md:text-xl text-burgundy">
              {t('timeline.title')}
            </h2>
          </div>

          <TimelineItem
            time={t('timeline.ceremonyTime')}
            title={t('timeline.ceremony')}
          />
          <TimelineItem
            time={t('timeline.photosTime')}
            title={t('timeline.photos')}
          />
          <TimelineItem
            time={t('timeline.dinnerTime')}
            title={t('timeline.dinner')}
          />
          <TimelineItem
            time={t('timeline.partyTime')}
            title={t('timeline.party')}
          />
          <TimelineItem
            time={t('timeline.shuttleTime')}
            title={t('timeline.shuttle')}
          />
        </div>
      </div>
    </motion.section>
  )
}

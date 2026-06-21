import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'

function MenuItem({
  title,
  description,
  detail,
}: {
  title: string
  description: string
  detail: string
}) {
  return (
    <div className="text-center mb-5">
      <h3 className="font-display text-xs md:text-sm tracking-[0.2em] uppercase mb-1 text-burgundy">
        {title}
      </h3>
      <p className="font-body text-[10px] md:text-xs text-burgundy">{description}</p>
      <p className="font-body text-[10px] md:text-xs italic text-burgundy">{detail}</p>
    </div>
  )
}

export default function MenuSection() {
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
          <MenuItem
            title={t('menu.aperitivo')}
            description={t('menu.aperitivoDesc')}
            detail={t('menu.aperitivoDetail')}
          />
          <MenuItem
            title={t('menu.primo')}
            description={t('menu.primoDesc')}
            detail={t('menu.primoDetail')}
          />
          <MenuItem
            title={t('menu.secondo')}
            description={t('menu.secondoDesc')}
            detail={t('menu.secondoDetail')}
          />
          <MenuItem
            title={t('menu.dolce')}
            description={t('menu.dolceDesc')}
            detail={t('menu.dolceDetail')}
          />

          <div className="text-center">
            <p className="font-script text-lg md:text-xl text-burgundy">
              {t('menu.wines')}
            </p>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

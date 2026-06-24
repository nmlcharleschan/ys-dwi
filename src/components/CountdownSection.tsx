import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
}

function calculateTimeLeft(): TimeLeft {
  const target = new Date('2026-11-07T00:00:00')
  const now = new Date()
  const difference = target.getTime() - now.getTime()

  if (difference <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 }
  }

  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / (1000 * 60)) % 60),
    seconds: Math.floor((difference / 1000) % 60),
  }
}

function pad(num: number): string {
  return num.toString().padStart(2, '0')
}

export default function CountdownSection() {
  const { t } = useTranslation()
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft())

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <motion.section
      className="py-12 bg-white flex flex-col items-center justify-center px-8"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <div className="text-center mb-10">
        <h2 className="font-script text-4xl md:text-5xl mb-2 text-burgundy">
          {t('countdown.title')}
        </h2>
      </div>

      <div className="flex gap-4 md:gap-8">
        <CountBox value={timeLeft.days} label={t('countdown.days')} />
        <CountBox value={timeLeft.hours} label={t('countdown.hours')} />
        <CountBox value={timeLeft.minutes} label={t('countdown.minutes')} />
        <CountBox value={timeLeft.seconds} label={t('countdown.seconds')} />
      </div>

      <p className="font-body text-sm tracking-wide mt-10 text-burgundy">
        {t('countdown.untilTheBigDay')}
      </p>
    </motion.section>
  )
}

function CountBox({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center">
      <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center border border-burgundy rounded-lg mb-2">
        <span className="font-display text-2xl md:text-3xl text-burgundy">
          {pad(value)}
        </span>
      </div>
      <span className="font-body text-[10px] md:text-xs tracking-[0.15em] uppercase text-burgundy">
        {label}
      </span>
    </div>
  )
}

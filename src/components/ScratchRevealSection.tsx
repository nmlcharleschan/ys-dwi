import confetti from 'canvas-confetti'
import { useCallback, useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'

const CIRCLE_SIZE = 150
const SCRATCH_RADIUS = 65
const REVEAL_THRESHOLD = 0.6

interface ScratchState {
  cleared: boolean
  percent: number
}

function ScratchCircle({
  label,
  index,
  onClear,
}: {
  label: string
  index: number
  onClear: (index: number) => void
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [state, setState] = useState<ScratchState>({ cleared: false, percent: 0 })
  const isDrawing = useRef(false)
  const ctxRef = useRef<CanvasRenderingContext2D | null>(null)
  const clearedRef = useRef(false)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    ctxRef.current = ctx

    const dpr = window.devicePixelRatio || 1
    canvas.width = CIRCLE_SIZE * dpr
    canvas.height = CIRCLE_SIZE * dpr
    canvas.style.width = `${CIRCLE_SIZE}px`
    canvas.style.height = `${CIRCLE_SIZE}px`
    ctx.scale(dpr, dpr)

    ctx.beginPath()
    ctx.arc(CIRCLE_SIZE / 2, CIRCLE_SIZE / 2, SCRATCH_RADIUS, 0, Math.PI * 2)
    ctx.fillStyle = '#5C2018'
    ctx.fill()

    for (let i = 0; i < 8; i++) {
      const angle = (i / 8) * Math.PI * 2
      const x = CIRCLE_SIZE / 2 + Math.cos(angle) * SCRATCH_RADIUS * 0.7
      const y = CIRCLE_SIZE / 2 + Math.sin(angle) * SCRATCH_RADIUS * 0.7
      ctx.beginPath()
      ctx.moveTo(CIRCLE_SIZE / 2, CIRCLE_SIZE / 2)
      ctx.lineTo(x, y)
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.08)'
      ctx.lineWidth = 1
      ctx.stroke()
    }

    const gradient = ctx.createRadialGradient(
      CIRCLE_SIZE / 2 - 15, CIRCLE_SIZE / 2 - 15, 5,
      CIRCLE_SIZE / 2, CIRCLE_SIZE / 2, SCRATCH_RADIUS
    )
    gradient.addColorStop(0, 'rgba(255, 255, 255, 0.25)')
    gradient.addColorStop(0.5, 'rgba(255, 255, 255, 0.05)')
    gradient.addColorStop(1, 'rgba(0, 0, 0, 0.15)')
    ctx.beginPath()
    ctx.arc(CIRCLE_SIZE / 2, CIRCLE_SIZE / 2, SCRATCH_RADIUS, 0, Math.PI * 2)
    ctx.fillStyle = gradient
    ctx.fill()
  }, [])

  const getPos = useCallback(
    (e: React.MouseEvent | React.TouchEvent | MouseEvent | Touch) => {
      const canvas = canvasRef.current
      if (!canvas) return { x: 0, y: 0 }
      const rect = canvas.getBoundingClientRect()
      const clientX = 'touches' in e ? (e as React.TouchEvent).touches[0]?.clientX : (e as MouseEvent).clientX
      const clientY = 'touches' in e ? (e as React.TouchEvent).touches[0]?.clientY : (e as MouseEvent).clientY
      if (clientX === undefined) return { x: 0, y: 0 }
      return {
        x: clientX - rect.left,
        y: clientY - rect.top,
      }
    },
    []
  )

  const checkProgress = useCallback(() => {
    const canvas = canvasRef.current
    const ctx = ctxRef.current
    if (!canvas || !ctx) return

    const imageData = ctx.getImageData(0, 0, CIRCLE_SIZE, CIRCLE_SIZE)
    let transparentPixels = 0
    let totalCirclePixels = 0

    for (let py = 0; py < CIRCLE_SIZE; py++) {
      for (let px = 0; px < CIRCLE_SIZE; px++) {
        const dx = px - CIRCLE_SIZE / 2
        const dy = py - CIRCLE_SIZE / 2
        if (dx * dx + dy * dy <= SCRATCH_RADIUS * SCRATCH_RADIUS) {
          totalCirclePixels++
          const alpha = imageData.data[(py * CIRCLE_SIZE + px) * 4 + 3]
          if (alpha === 0) transparentPixels++
        }
      }
    }

    const percent = totalCirclePixels > 0 ? transparentPixels / totalCirclePixels : 0

    if (percent >= REVEAL_THRESHOLD && !clearedRef.current) {
      clearedRef.current = true
      setState({ cleared: true, percent: 1 })
      onClear(index)
    }
  }, [index, onClear])

  const scratch = useCallback(
    (x: number, y: number) => {
      const ctx = ctxRef.current
      if (!ctx || clearedRef.current) return

      const dx = x - CIRCLE_SIZE / 2
      const dy = y - CIRCLE_SIZE / 2
      if (dx * dx + dy * dy > SCRATCH_RADIUS * SCRATCH_RADIUS) return

      ctx.globalCompositeOperation = 'destination-out'
      ctx.beginPath()
      ctx.arc(x, y, 25, 0, Math.PI * 2)
      ctx.fill()
      ctx.globalCompositeOperation = 'source-over'

      checkProgress()
    },
    [checkProgress]
  )

  const handleStart = useCallback(
    (e: React.MouseEvent | React.TouchEvent) => {
      e.preventDefault()
      isDrawing.current = true
      const pos = getPos(e)
      scratch(pos.x, pos.y)
    },
    [getPos, scratch]
  )

  const handleMove = useCallback(
    (e: React.MouseEvent | React.TouchEvent) => {
      e.preventDefault()
      if (!isDrawing.current) return
      const pos = getPos(e)
      scratch(pos.x, pos.y)
    },
    [getPos, scratch]
  )

  const handleEnd = useCallback(() => {
    isDrawing.current = false
  }, [])

  return (
    <div className="relative flex flex-col items-center">
      <div className="relative w-28 h-28 md:w-32 md:h-32 rounded-full overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center bg-paper">
          <span className="font-display text-2xl md:text-3xl text-burgundy">{label}</span>
        </div>
        <canvas
          ref={canvasRef}
          width={CIRCLE_SIZE}
          height={CIRCLE_SIZE}
          className={`absolute inset-0 w-full h-full cursor-pointer transition-opacity duration-700 ${
            state.cleared ? 'opacity-0' : 'opacity-100'
          }`}
          style={{ touchAction: 'none', userSelect: 'none' }}
          onMouseDown={handleStart}
          onMouseMove={handleMove}
          onMouseUp={handleEnd}
          onMouseLeave={handleEnd}
          onTouchStart={handleStart}
          onTouchMove={handleMove}
          onTouchEnd={handleEnd}
        />
      </div>
    </div>
  )
}

export default function ScratchRevealSection() {
  const { t } = useTranslation()
  const [allCleared, setAllCleared] = useState(false)
  const clearedCount = useRef(0)
  const [showCelebration, setShowCelebration] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  const handleClear = useCallback((_index: number) => {
    clearedCount.current++
    if (clearedCount.current >= 3 && !allCleared) {
      setAllCleared(true)
      confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#5C2018', '#D4A84B', '#FAF8F5', '#8B9A6E', '#FFFFFF'],
      })
      setTimeout(() => {
        confetti({
          particleCount: 100,
          spread: 100,
          origin: { y: 0.5, x: 0.5 },
          colors: ['#D4A84B', '#5C2018', '#FFFFFF'],
        })
      }, 300)
      setTimeout(() => {
        setShowCelebration(true)
      }, 800)
    }
  }, [allCleared])

  return (
    <motion.section
      ref={sectionRef}
      className="min-h-screen flex flex-col items-center justify-center py-8 px-8"
      style={{ backgroundColor: '#FAF8F5' }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <div className="text-center mb-8">
        <h2 className="font-script text-4xl md:text-5xl mb-4 text-burgundy">
          {t('reveal.heading')}
        </h2>
        <p className="font-body text-sm tracking-[0.15em] uppercase text-burgundy">
          {allCleared ? t('reveal.scratchHint') : t('reveal.scratchSubtitle')}
        </p>
      </div>

      <div className="flex gap-6 md:gap-10">
        <ScratchCircle label={t('reveal.day')} index={0} onClear={handleClear} />
        <ScratchCircle label={t('reveal.month')} index={1} onClear={handleClear} />
        <ScratchCircle label={t('reveal.year')} index={2} onClear={handleClear} />
      </div>

      {showCelebration && (
        <div className="mt-10 text-center animate-fade-in">
          <h3 className="font-script text-3xl md:text-4xl text-burgundy animate-scale-in">
            {t('reveal.weddingAnnouncement')}
          </h3>
        </div>
      )}
    </motion.section>
  )
}

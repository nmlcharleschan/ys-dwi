import confetti from 'canvas-confetti'
import { useCallback, useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'

const REVEAL_THRESHOLD = 0.6
const BRUSH_SIZE = 25

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
  const sizeRef = useRef({ s: 0, cx: 0, cy: 0, r: 0 })

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    ctxRef.current = ctx

    const rect = canvas.getBoundingClientRect()
    const dpr = window.devicePixelRatio || 1
    const s = rect.width

    canvas.width = s * dpr
    canvas.height = s * dpr
    ctx.scale(dpr, dpr)

    const cx = s / 2
    const cy = s / 2
    const r = s / 2 - 1

    sizeRef.current = { s, cx, cy, r }

    ctx.save()
    ctx.beginPath()
    ctx.arc(cx, cy, r, 0, Math.PI * 2)
    ctx.clip()

    if (ctx.createConicGradient) {
      const conic = ctx.createConicGradient(0, cx, cy)
      conic.addColorStop(0, '#f3d082')
      conic.addColorStop(0.125, '#dfb256')
      conic.addColorStop(0.25, '#f9dfa7')
      conic.addColorStop(0.375, '#c19438')
      conic.addColorStop(0.5, '#f3d082')
      conic.addColorStop(0.625, '#dfb256')
      conic.addColorStop(0.75, '#f9dfa7')
      conic.addColorStop(0.875, '#c19438')
      conic.addColorStop(1, '#f3d082')
      ctx.fillStyle = conic
    } else {
      const fallback = ctx.createRadialGradient(cx - r * 0.2, cy - r * 0.3, 2, cx, cy, r)
      fallback.addColorStop(0, '#f9dfa7')
      fallback.addColorStop(0.3, '#f3d082')
      fallback.addColorStop(0.6, '#dfb256')
      fallback.addColorStop(1, '#c19438')
      ctx.fillStyle = fallback
    }
    ctx.fill()

    const radial = ctx.createRadialGradient(cx - r * 0.15, cy - r * 0.15, r * 0.05, cx, cy, r)
    radial.addColorStop(0, 'rgba(255, 255, 255, 0.22)')
    radial.addColorStop(0.7, 'rgba(0, 0, 0, 0.04)')
    radial.addColorStop(1, 'rgba(0, 0, 0, 0.14)')
    ctx.fillStyle = radial
    ctx.fill()

    ctx.beginPath()
    ctx.arc(cx, cy, r, 0, Math.PI * 2)
    ctx.strokeStyle = 'rgba(212, 168, 75, 0.35)'
    ctx.lineWidth = 1
    ctx.stroke()

    ctx.restore()
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

    const { s, r } = sizeRef.current
    const imageData = ctx.getImageData(0, 0, s, s)
    let transparentPixels = 0
    let totalCirclePixels = 0

    for (let py = 0; py < s; py++) {
      for (let px = 0; px < s; px++) {
        const dx = px - s / 2
        const dy = py - s / 2
        if (dx * dx + dy * dy <= r * r) {
          totalCirclePixels++
          const alpha = imageData.data[(py * s + px) * 4 + 3]
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

      const { cx, cy, r } = sizeRef.current
      const dx = x - cx
      const dy = y - cy
      if (dx * dx + dy * dy > r * r) return

      ctx.save()
      ctx.beginPath()
      ctx.arc(cx, cy, r, 0, Math.PI * 2)
      ctx.clip()

      ctx.globalCompositeOperation = 'destination-out'
      ctx.beginPath()
      ctx.arc(x, y, BRUSH_SIZE, 0, Math.PI * 2)
      ctx.fill()

      ctx.restore()

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
          width={300}
          height={300}
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
      {!allCleared && (
        <div className="mb-6 flex flex-col items-center justify-center">
          <div className="relative flex items-center justify-center">
            <div
              className="absolute w-10 h-10 rounded-full border"
              style={{ borderColor: 'rgba(92, 32, 24, 0.3)' }}
            />
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center"
              style={{
                backgroundColor: 'rgba(92, 32, 24, 0.08)',
                border: '1px solid rgba(92, 32, 24, 0.2)',
              }}
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#5C2018"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{ opacity: 0.6 }}
              >
                <title>Hand</title>
                <path d="M18 11V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2v0" />
                <path d="M14 10V4a2 2 0 0 0-2-2a2 2 0 0 0-2 2v6" />
                <path d="M10 10.5V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2v8" />
                <path d="M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15" />
              </svg>
            </div>
          </div>
          <p
            className="mt-3 font-body text-xs tracking-wide text-center"
            style={{ color: 'rgba(92, 32, 24, 0.6)' }}
          >
            {t('reveal.scratchHint')}
          </p>
        </div>
      )}

      <div className="text-center mb-8">
        <h2 className="font-script text-4xl md:text-5xl mb-4 text-burgundy">
          {t('reveal.heading')}
        </h2>
        <p className="font-body text-sm tracking-[0.15em] uppercase text-burgundy">
          {t('reveal.scratchSubtitle')}
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

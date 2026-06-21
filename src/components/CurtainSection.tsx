import { useState, useRef, useEffect } from 'react'
import { useTranslation } from 'react-i18next'

type Stage = 'image' | 'video' | 'overlay' | 'hidden'

export default function CurtainSection() {
  const { t } = useTranslation()
  const [stage, setStage] = useState<Stage>('image')
  const [overlayVisible, setOverlayVisible] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)
  const sectionRef = useRef<HTMLElement>(null)

  const advanceToVideo = () => {
    if (stage === 'image') {
      setStage('video')
      setTimeout(() => {
        videoRef.current?.play()
      }, 100)
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      advanceToVideo()
    }
  }

  const handleVideoEnded = () => {
    setStage('overlay')
    setOverlayVisible(true)
  }

  useEffect(() => {
    if (stage === 'hidden') {
      const nextSection = sectionRef.current?.nextElementSibling
      if (nextSection) {
        nextSection.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }, [stage])

  useEffect(() => {
    if (overlayVisible) {
      const timer = setTimeout(() => {
        setStage('hidden')
      }, 3000)
      return () => clearTimeout(timer)
    }
  }, [overlayVisible])

  return (
    <section
      ref={sectionRef}
      className="relative h-screen w-full overflow-hidden"
      style={{ display: stage === 'hidden' ? 'none' : 'block' }}
    >
      {stage === 'image' && (
        <>
          <img
            src="./assets/curtain-closed.jpg"
            alt="Curtain"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <button
            type="button"
            onClick={advanceToVideo}
            onKeyDown={handleKeyDown}
            aria-label={t('curtain.tapToContinue')}
            className="absolute inset-0 w-full h-full cursor-pointer border-none bg-transparent"
          >
            <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
              <div className="relative flex items-center justify-center">
                <div
                  className="absolute w-16 h-16 rounded-full border-2"
                  style={{
                    borderColor: 'rgba(255, 255, 255, 0.5)',
                    transform: 'scale(1.5)',
                    opacity: 0,
                  }}
                />
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center"
                  style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.15)',
                    border: '2px solid rgba(255, 255, 255, 0.4)',
                  }}
                >
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    style={{ opacity: 0.9 }}
                    aria-hidden="true"
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
                className="mt-4 font-body text-xs tracking-wide text-center"
                style={{ color: 'rgba(255, 255, 255, 0.8)' }}
              >
                {t('curtain.tapToContinue')}
              </p>
            </div>
          </button>
        </>
      )}

      <video
        ref={videoRef}
        src="./assets/curtain-video.mp4"
        className={`absolute inset-0 w-full h-full object-cover ${stage === 'video' ? 'block' : 'hidden'}`}
        playsInline
        preload="auto"
        tabIndex={-1}
        onEnded={handleVideoEnded}
      >
        <track kind="captions" />
      </video>

      {stage === 'overlay' && (
        <div
          className="absolute inset-0 flex flex-col items-center justify-center bg-black/60 transition-opacity duration-1000"
          style={{ opacity: overlayVisible ? 1 : 0 }}
        >
          <p className="font-body text-sm md:text-base tracking-[0.15em] uppercase text-white/80 mb-4">
            {t('curtain.invitation')}
          </p>
          <h1 className="font-script text-4xl md:text-6xl lg:text-7xl text-white text-center leading-tight px-4">
            {t('curtain.names')}
          </h1>
        </div>
      )}
    </section>
  )
}

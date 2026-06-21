import { useState, useRef } from 'react'
import { useTranslation } from 'react-i18next'

type Stage = 'image' | 'video'

export default function CurtainSection() {
  const { t } = useTranslation()
  const [stage, setStage] = useState<Stage>('image')
  const [overlayOpacity, setOverlayOpacity] = useState(0)
  const [muted, setMuted] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)
  const audioRef = useRef<HTMLAudioElement>(null)

  const advanceToVideo = () => {
    if (stage === 'image') {
      setStage('video')
      setTimeout(() => {
        videoRef.current?.play()
        if (audioRef.current) {
          audioRef.current.play().catch(() => {})
        }
        setTimeout(() => {
          setOverlayOpacity(1)
        }, 600)
      }, 100)
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      advanceToVideo()
    }
  }

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !audioRef.current.muted
      setMuted(!muted)
    }
  }

  return (
    <section className="relative h-screen w-full overflow-hidden">
      <audio ref={audioRef} src="./assets/intro-music.mp3" loop preload="auto" />

      {stage !== 'image' && (
        <button
          type="button"
          onClick={toggleMute}
          className="fixed bottom-4 left-4 z-[9999] w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200"
          style={{
            backgroundColor: 'rgba(92, 32, 24, 0.7)',
            color: 'white',
          }}
          aria-label={muted ? 'Unmute' : 'Mute'}
        >
          {muted ? (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
              <line x1="23" y1="9" x2="17" y2="15" />
              <line x1="17" y1="9" x2="23" y2="15" />
            </svg>
          ) : (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
              <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07" />
            </svg>
          )}
        </button>
      )}

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
      >
        <track kind="captions" />
      </video>

      {stage === 'video' && (
        <>
          <div
            className="absolute inset-0 flex items-center justify-center transition-opacity duration-[2000ms] ease-out"
            style={{ opacity: overlayOpacity }}
          >
            <div className="flex flex-col items-center text-center max-w-[55%] md:max-w-[45%] lg:max-w-[40%] px-4 pt-4">
              <p
                className="font-display text-[8px] md:text-[10px] tracking-[0.15em] uppercase mb-4"
                style={{ color: '#5C2018' }}
              >
                {t('curtain.invitation')}
              </p>
              <h1
                className="font-script text-6xl md:text-7xl lg:text-8xl mb-0 leading-none"
                style={{ color: '#5C2018' }}
              >
                Yanese
              </h1>
              <span
                className="font-script text-3xl md:text-4xl"
                style={{ color: '#5C2018' }}
              >
                &
              </span>
              <h1
                className="font-script text-6xl md:text-7xl lg:text-8xl mb-10 leading-none"
                style={{ color: '#5C2018' }}
              >
                Steve
              </h1>
            </div>
          </div>

          <div
            className="absolute bottom-40 left-0 right-0 flex justify-center px-4 transition-opacity duration-[2000ms] ease-out"
            style={{ opacity: overlayOpacity }}
          >
            <p
              className="font-display text-[11px] md:text-sm tracking-[0.12em] uppercase leading-relaxed text-center max-w-[85%] md:max-w-[70%] lg:max-w-[60%]"
              style={{ color: '#5C2018' }}
            >
              {t('curtain.subtitle')}
            </p>
          </div>

          <div
            className="absolute bottom-8 left-0 right-0 flex justify-center transition-opacity duration-[2000ms] ease-out"
            style={{ opacity: overlayOpacity }}
          >
            <div className="flex flex-col items-center">
              <p
                className="font-display text-[10px] tracking-[0.2em] uppercase mb-2"
                style={{ color: '#5C2018' }}
              >
                {t('curtain.scroll')}
              </p>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#5C2018"
                strokeWidth="1.5"
              >
                <title>Scroll down</title>
                <path d="M12 5v14M5 12l7 7 7-7" />
              </svg>
            </div>
          </div>
        </>
      )}
    </section>
  )
}

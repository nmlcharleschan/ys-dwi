import { useTranslation } from 'react-i18next'

export default function LanguageToggle() {
  const { i18n } = useTranslation()
  const currentLang = i18n.language

  const switchLang = (lang: string) => {
    i18n.changeLanguage(lang)
  }

  return (
    <div className="fixed top-4 right-4 z-[9999] flex items-center gap-1 backdrop-blur-sm rounded-full p-1 transition-all duration-300"
      style={{
        backgroundColor: 'rgba(250, 248, 245, 0.95)',
        border: '1px solid rgba(92, 32, 24, 0.2)',
      }}>
      <button
        type="button"
        onClick={() => switchLang('en')}
        className="px-3 py-1.5 text-xs font-medium rounded-full transition-all duration-200"
        style={{
          backgroundColor: currentLang === 'en' ? '#5C2018' : 'transparent',
          color: currentLang === 'en' ? 'white' : '#5C2018',
        }}
      >
        EN
      </button>
      <button
        type="button"
        onClick={() => switchLang('zh')}
        className="px-3 py-1.5 text-xs font-medium rounded-full transition-all duration-200"
        style={{
          backgroundColor: currentLang === 'zh' ? '#5C2018' : 'transparent',
          color: currentLang === 'zh' ? 'white' : '#5C2018',
        }}
      >
        中文
      </button>
    </div>
  )
}

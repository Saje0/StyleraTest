'use client'

import { useLanguage } from '@/contexts/language-context'

export default function HeroContent() {
  const { t, language } = useLanguage()

  return (
    <main
      className={`absolute bottom-8 z-20 max-w-2xl px-6 ${
        language === 'ar' ? 'right-8' : 'left-8'
      }`}
    >
      <div className={`${language === 'ar' ? 'text-right' : 'text-left'}`}>
        <div
          className={`inline-flex items-center px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm mb-6 relative`}
          style={{
            filter: 'url(#glass-effect)',
          }}
        >
          <div className='absolute top-0 left-1 right-1 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent rounded-full' />
          <span className='text-white/90 text-sm font-light relative z-10'>
            {t('hero.badge')}
          </span>
        </div>

        {/* Main Heading */}
        <h1 className='text-5xl md:text-7xl md:leading-tight tracking-tight font-light text-white mb-4'>
          <span className='font-medium italic instrument text-accent'>
            {t('hero.title')}
          </span>
          <br />
          <span className='font-light tracking-tight text-white/90 text-3xl md:text-4xl'>
            {t('hero.subtitle')}
          </span>
        </h1>

        {/* Description */}
        <p className='text-base font-light text-white/70 mb-8 leading-relaxed max-w-lg'>
          {t('hero.description')}
        </p>

        {/* Buttons */}
        <div
          className={`flex items-center gap-4 flex-wrap ${
            language === 'ar' ? 'rtl:flex-row-reverse' : ''
          }`}
        >
          <button className='px-8 py-3 rounded-full bg-primary text-primary-foreground font-medium text-sm transition-all duration-200 hover:bg-primary/90 cursor-pointer'>
            {t('hero.cta.primary')}
          </button>
          <button className='px-8 py-3 rounded-full bg-transparent border border-white/30 text-white font-medium text-sm transition-all duration-200 hover:bg-white/10 hover:border-white/50 cursor-pointer'>
            {t('hero.cta.secondary')}
          </button>
        </div>
      </div>
    </main>
  )
}

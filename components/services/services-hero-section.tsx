'use client'

import { useLanguage } from '@/contexts/language-context'
import {
  Div,
  H2,
  P,
  textVariants,
  defaultContainerVariants,
} from '@/constants/animation'
import InViewSection from '@/components/ui/Custom-ui/in-view-section'

export default function ServicesHeroSection() {
  const { t } = useLanguage()

  return (
    <InViewSection
      className='pt-32 pb-20 px-4'
      variants={defaultContainerVariants}
    >
      <Div className='max-w-4xl mx-auto text-center'>
        <H2
          className='text-5xl md:text-7xl font-bold text-accent mb-6 leading-tight'
          variants={textVariants}
        >
          {t('OurServices.title')}
        </H2>
        <P
          className='text-xl text-slate-300 leading-relaxed max-w-2xl mx-auto'
          variants={textVariants}
        >
          {t('OurServices.subtitle')}
        </P>
      </Div>
    </InViewSection>
  )
}

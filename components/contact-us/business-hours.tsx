'use client'

import { Card } from '@/components/ui/card'
import { Clock } from 'lucide-react'
import { useLanguage } from '@/contexts/language-context'
import {
  Div,
  defaultContainerVariants,
  itemVariants,
} from '@/constants/animation'
import InViewSection from '@/components/ui/Custom-ui/in-view-section'

export default function BusinessHours() {
  const { t } = useLanguage()

  return (
    <InViewSection className='py-10 px-4' variants={defaultContainerVariants}>
      <Div className='max-w-6xl mx-auto' variants={itemVariants}>
        <Card className='bg-slate-800/50 border-slate-700 p-8'>
          <div className='flex items-center mb-6'>
            <div className='w-16 h-16 rounded-2xl bg-gradient-to-r from-orange-500 to-red-500 flex items-center justify-center me-6'>
              <Clock className='w-8 h-8 text-white' />
            </div>
            <div>
              <h3 className='text-2xl font-bold text-white mb-2'>
                {t('contactPage.businessHours.title')}
              </h3>
              <p className='text-slate-300'>
                {t('contactPage.businessHours.subtitle')}
              </p>
            </div>
          </div>

          <div className='grid md:grid-cols-2 gap-6'>
            <div>
              <h4 className='text-white font-semibold mb-2'>
                {t('contactPage.businessHours.weekdays')}
              </h4>
              <p className='text-slate-300'>
                {t('contactPage.businessHours.weekdaysTime')}
              </p>
            </div>
            <div>
              <h4 className='text-white font-semibold mb-2'>
                {t('contactPage.businessHours.weekend')}
              </h4>
              <p className='text-slate-300'>
                {t('contactPage.businessHours.weekendTime')}
              </p>
            </div>
          </div>
        </Card>
      </Div>
    </InViewSection>
  )
}

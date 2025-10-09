'use client'

import { useLanguage } from '@/contexts/language-context'
import {
  Code,
  Smartphone,
  Brain,
  Palette,
  Shield,
  Database,
  Cloud,
  BarChart3,
  MessageCircle,
  ArrowRight,
} from 'lucide-react'
import Link from 'next/link'
import {
  Div,
  H2,
  P,
  defaultContainerVariants,
  itemVariants,
  textVariants,
} from '@/constants/animation'
import InViewSection from './ui/Custom-ui/in-view-section'

export default function ServicesSection() {
  const { t } = useLanguage()

  const services = [
    {
      icon: Code,
      titleKey: 'services.web.title',
      descriptionKey: 'services.web.description',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Smartphone,
      titleKey: 'services.mobile.title',
      descriptionKey: 'services.mobile.description',
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      icon: Brain,
      titleKey: 'services.ai.title',
      descriptionKey: 'services.ai.description',
      gradient: 'from-green-500 to-emerald-500',
    },
    {
      icon: Database,
      titleKey: 'services.data.title',
      descriptionKey: 'services.data.description',
      gradient: 'from-amber-500 to-yellow-500',
    },
    {
      icon: Shield,
      titleKey: 'services.security.title',
      descriptionKey: 'services.security.description',
      gradient: 'from-red-500 to-rose-500',
    },
    {
      icon: Palette,
      titleKey: 'services.design.title',
      descriptionKey: 'services.design.description',
      gradient: 'from-orange-500 to-red-500',
    },
    {
      icon: Cloud,
      titleKey: 'services.cloud.title',
      descriptionKey: 'services.cloud.description',
      gradient: 'from-sky-500 to-indigo-500',
    },
    {
      icon: BarChart3,
      titleKey: 'services.business.title',
      descriptionKey: 'services.business.description',
      gradient: 'from-fuchsia-500 to-pink-500',
    },
    {
      icon: MessageCircle,
      titleKey: 'services.chatbot.title',
      descriptionKey: 'services.chatbot.description',
      gradient: 'from-green-400 to-teal-500',
    },
  ]

  return (
    <InViewSection id='services' className='py-24 relative'>
      <Div className='container mx-auto px-4 xl:px-0' variants={undefined}>
        {/* Section Header */}
        <Div className='mx-auto mb-20 text-start' variants={itemVariants}>
          <H2
            className='text-4xl text-center md:text-5xl mb-6 font-medium ltr:instrument text-accent'
            variants={textVariants}
          >
            {t('services.title')}
          </H2>
          <P
            className='text-lg text-center max-w-2xl mx-auto text-white/70 font-light leading-relaxed'
            variants={textVariants}
          >
            {t('services.subtitle')}
          </P>
        </Div>

        {/* Services Grid */}
        <Div
          className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'
          variants={defaultContainerVariants}
        >
          {services.map((service) => {
            const Icon = service.icon
            return (
              <Div
                key={service.titleKey}
                variants={itemVariants}
                className='group relative bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-8 hover:bg-card/70 transition-all duration-300 hover:scale-105 hover:shadow-2xl'
              >
                {/* Icon */}
                <div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} p-4 mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon className='w-full h-full text-white' />
                </div>

                {/* Content */}
                <div className='text-start select-none'>
                  <h3 className='text-xl font-semibold text-white mb-4 group-hover:text-accent transition-colors duration-300'>
                    {t(service.titleKey)}
                  </h3>
                  <p className='text-white/70 font-light leading-relaxed mb-6'>
                    {t(service.descriptionKey)}
                  </p>
                </div>

                {/* Hover Overlay */}
                <div className='absolute inset-0 rounded-2xl bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none' />
              </Div>
            )
          })}
        </Div>

        {/* CTA Section */}
        <Div className='mt-20 text-center' variants={itemVariants}>
          <Div className='max-w-2xl mx-auto'>
            <H2
              className='text-2xl md:text-3xl font-light text-white mb-6'
              variants={textVariants}
            >
              {t('services.cta.title')}
            </H2>
            <P
              className='text-white/70 font-light mb-8 leading-relaxed'
              variants={textVariants}
            >
              {t('services.cta.subtitle')}
            </P>
            <Link
              href='/contact'
              className='group px-8 py-4 w-fit rounded-full bg-primary text-primary-foreground font-medium text-base transition-all duration-300 hover:bg-primary/90 cursor-pointer flex items-center gap-3 hover:gap-4 mx-auto'
            >
              {t('services.cta.button')}
              <ArrowRight
                size={20}
                className='transition-all duration-300 rtl:rotate-180'
              />
            </Link>
          </Div>
        </Div>
      </Div>
    </InViewSection>
  )
}

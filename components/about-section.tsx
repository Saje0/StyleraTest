'use client'

import { useLanguage } from '@/contexts/language-context'
import { Target, Users, Lightbulb, Award } from 'lucide-react'
import {
  Div,
  H2,
  P,
  defaultContainerVariants,
  itemVariants,
  textVariants,
} from '@/constants/animation'
import InViewSection from './ui/Custom-ui/in-view-section'

export default function AboutSection() {
  const { t, language } = useLanguage()

  const values = [
    {
      icon: Target,
      titleKey: language === 'ar' ? 'الدقة والجودة' : 'Precision & Quality',
      descriptionKey:
        language === 'ar'
          ? 'نلتزم بأعلى معايير الجودة في كل مشروع نعمل عليه'
          : 'We maintain the highest quality standards in every project we undertake',
    },
    {
      icon: Users,
      titleKey:
        language === 'ar' ? 'التعاون والشراكة' : 'Collaboration & Partnership',
      descriptionKey:
        language === 'ar'
          ? 'نعمل كشركاء حقيقيين مع عملائنا لتحقيق أهدافهم'
          : 'We work as true partners with our clients to achieve their goals',
    },
    {
      icon: Lightbulb,
      titleKey:
        language === 'ar' ? 'الابتكار والإبداع' : 'Innovation & Creativity',
      descriptionKey:
        language === 'ar'
          ? 'نستخدم أحدث التقنيات والحلول المبتكرة في مشاريعنا'
          : 'We leverage cutting-edge technologies and innovative solutions',
    },
    {
      icon: Award,
      titleKey:
        language === 'ar'
          ? 'التميز والاحترافية'
          : 'Excellence & Professionalism',
      descriptionKey:
        language === 'ar'
          ? 'نسعى للتميز في كل جانب من جوانب عملنا'
          : 'We strive for excellence in every aspect of our work',
    },
  ]

  return (
    <InViewSection
      id='about'
      className='py-24 relative bg-card/20'
      variants={defaultContainerVariants}
    >
      <Div className='container mx-auto px-6'>
        {/* Header */}
        <Div
          className='max-w-4xl mx-auto mb-20 text-center'
          variants={itemVariants}
        >
          <H2
            className='text-4xl text-center md:text-5xl font-light text-white mb-8'
            variants={textVariants}
          >
            <span className='font-medium ltr:instrument text-accent'>
              {t('about.title')}
            </span>
          </H2>
          <P
            className='text-xl md:text-2xl text-white/80 font-light leading-relaxed mb-8'
            variants={textVariants}
          >
            {t('about.description')}
          </P>
          <P
            className='text-lg text-white/70 font-light leading-relaxed'
            variants={textVariants}
          >
            {language === 'ar'
              ? 'منذ تأسيسنا، ساعدنا العشرات من الشركات والمؤسسات على تحقيق التحول الرقمي وبناء حضور قوي على الإنترنت. نحن نؤمن بقوة التكنولوجيا في تغيير الأعمال وتحسين حياة الناس.'
              : "Since our founding, we've helped dozens of companies and organizations achieve digital transformation and build a strong online presence. We believe in the power of technology to transform businesses and improve people's lives."}
          </P>
        </Div>

        {/* Mission & Vision */}
        <Div className='grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20'>
          <Div
            className={`bg-gradient-to-br from-primary/10 to-accent/10 backdrop-blur-sm border border-border rounded-2xl p-8 ${
              language === 'ar' ? 'text-right' : 'text-left'
            }`}
            variants={itemVariants}
          >
            <h3 className='text-2xl font-semibold text-white mb-6'>
              {language === 'ar' ? 'رؤيتنا' : 'Our Vision'}
            </h3>
            <p className='text-white/80 font-light leading-relaxed'>
              {language === 'ar'
                ? 'أن نكون الشركة الرائدة في مجال تطوير البرمجيات والحلول التقنية في المنطقة، ونساهم في بناء مستقبل رقمي أفضل للجميع.'
                : 'To be the leading software development and technology solutions company in the region, contributing to building a better digital future for everyone.'}
            </p>
          </Div>

          <Div
            className={`bg-gradient-to-br from-accent/10 to-primary/10 backdrop-blur-sm border border-border rounded-2xl p-8 ${
              language === 'ar' ? 'text-right' : 'text-left'
            }`}
            variants={itemVariants}
          >
            <h3 className='text-2xl font-semibold text-white mb-6'>
              {language === 'ar' ? 'مهمتنا' : 'Our Mission'}
            </h3>
            <p className='text-white/80 font-light leading-relaxed'>
              {language === 'ar'
                ? 'لتقديم حلول تقنية مبتكرة وعالية الجودة تساعد عملائنا على تحقيق أهدافهم التجارية والنمو في العصر الرقمي.'
                : 'To deliver innovative, high-quality technical solutions that help our clients achieve their business goals and grow in the digital age.'}
            </p>
          </Div>
        </Div>

        {/* Values */}
        <Div
          className={`mb-20 ${language === 'ar' ? 'text-right' : 'text-left'}`}
        >
          <h3 className='text-3xl font-light text-white mb-12 text-center'>
            <span className='font-medium ltr:instrument text-accent'>
              {language === 'ar' ? 'قيمنا الأساسية' : 'Our Core Values'}
            </span>
          </h3>

          <Div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <Div
                  key={index}
                  variants={itemVariants}
                  className='group text-center hover:scale-105 transition-transform duration-300'
                >
                  <div className='w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-primary to-accent p-5 group-hover:shadow-lg group-hover:shadow-primary/25 transition-all duration-300'>
                    <Icon className='w-full h-full text-white' />
                  </div>
                  <h4 className='text-lg select-none font-semibold text-white mb-3'>
                    {value.titleKey}
                  </h4>
                  <p className='text-white/70 select-none font-light leading-relaxed text-sm'>
                    {value.descriptionKey}
                  </p>
                </Div>
              )
            })}
          </Div>
        </Div>

        {/* Stats */}
        <Div
          className='bg-gradient-to-r from-primary/5 to-accent/5 backdrop-blur-sm border border-border rounded-2xl p-12'
          variants={itemVariants}
        >
          <div className='grid grid-cols-2 md:grid-cols-4 gap-8 text-center'>
            <div>
              <div className='text-4xl md:text-5xl font-bold text-white mb-2'>
                50+
              </div>
              <div className='text-white/70 font-light'>
                {language === 'ar' ? 'مشاريع مكتملة' : 'Projects Completed'}
              </div>
            </div>
            <div>
              <div className='text-4xl md:text-5xl font-bold text-white mb-2'>
                25+
              </div>
              <div className='text-white/70 font-light'>
                {language === 'ar' ? 'عملاء سعداء' : 'Happy Clients'}
              </div>
            </div>
            <div>
              <div className='text-4xl md:text-5xl font-bold text-white mb-2'>
                3+
              </div>
              <div className='text-white/70 font-light'>
                {language === 'ar' ? 'سنوات خبرة' : 'Years Experience'}
              </div>
            </div>
            <div>
              <div className='text-4xl md:text-5xl font-bold text-white mb-2'>
                100%
              </div>
              <div className='text-white/70 font-light'>
                {language === 'ar' ? 'رضا العملاء' : 'Client Satisfaction'}
              </div>
            </div>
          </div>
        </Div>
      </Div>
    </InViewSection>
  )
}

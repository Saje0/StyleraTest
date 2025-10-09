import { motion, Variants } from 'framer-motion'

export const { div: Div, p: P, h1: H1, h2: H2, span: Span } = motion

export const defaultContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.4,
      when: 'beforeChildren',
      staggerChildren: 0.3,
    },
  },
}

export const containerFromTop: Variants = {
  hidden: { opacity: 0, y: -50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.1,
      when: 'beforeChildren',
      staggerChildren: 0.2,
    },
  },
}

export const itemVariants: Variants = {
  hidden: { y: 5, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'tween',
      duration: 0.3,
      ease: 'easeOut',
    },
  },
}

export const textVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
}

export const comeFromBottomItem: Variants = {
  hidden: { y: 25, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring' as const,
      stiffness: 60,
    },
  },
}

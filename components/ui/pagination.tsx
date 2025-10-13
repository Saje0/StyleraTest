'use client'

import * as React from 'react'
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  MoreHorizontalIcon,
} from 'lucide-react'

import { cn } from '@/lib/utils'
import { Button, buttonVariants } from '@/components/ui/button'

interface PaginationProps extends React.ComponentProps<'nav'> {
  isRTL?: boolean
}

function Pagination({ className, isRTL, ...props }: PaginationProps) {
  // 👆 Destructure `isRTL` so it's not spread into <nav>
  return (
    <nav
      role='navigation'
      aria-label='pagination'
      data-slot='pagination'
      className={cn('mx-auto flex w-full justify-center', className)}
      {...props} // Safe now — no `isRTL` leaking
    />
  )
}

function PaginationContent({
  className,
  ...props
}: React.ComponentProps<'ul'>) {
  return (
    <ul
      data-slot='pagination-content'
      className={cn('flex flex-row items-center gap-1', className)}
      {...props}
    />
  )
}

function PaginationItem({ ...props }: React.ComponentProps<'li'>) {
  return <li data-slot='pagination-item' {...props} />
}

type PaginationLinkProps = {
  isActive?: boolean
} & Pick<React.ComponentProps<typeof Button>, 'size'> &
  React.ComponentProps<'a'>

function PaginationLink({
  className,
  isActive,
  size = 'icon',
  ...props
}: PaginationLinkProps) {
  return (
    <a
      aria-current={isActive ? 'page' : undefined}
      data-slot='pagination-link'
      data-active={isActive}
      className={cn(
        buttonVariants({
          variant: isActive ? 'outline' : 'ghost',
          size,
        }),
        className
      )}
      {...props}
    />
  )
}

interface PaginationNavProps
  extends React.ComponentProps<typeof PaginationLink> {
  isRTL?: boolean
}

function PaginationPrevious({
  className,
  isRTL,
  ...props
}: PaginationNavProps) {
  const label = isRTL ? 'السابق' : 'Previous'
  return (
    <PaginationLink
      aria-label={label}
      size='default'
      className={cn('gap-1 px-2.5 sm:pl-2.5', className)}
      {...props}
    >
      {isRTL ? <ChevronRightIcon /> : <ChevronLeftIcon />}
      <span className='hidden sm:block'>{label}</span>
    </PaginationLink>
  )
}

function PaginationNext({ className, isRTL, ...props }: PaginationNavProps) {
  const label = isRTL ? 'التالي' : 'Next'
  return (
    <PaginationLink
      aria-label={label}
      size='default'
      className={cn('gap-1 px-2.5 sm:pr-2.5', className)}
      {...props}
    >
      <span className='hidden sm:block'>{label}</span>
      {isRTL ? <ChevronLeftIcon /> : <ChevronRightIcon />}
    </PaginationLink>
  )
}

function PaginationEllipsis({
  className,
  ...props
}: React.ComponentProps<'span'>) {
  return (
    <span
      aria-hidden
      data-slot='pagination-ellipsis'
      className={cn('flex size-9 items-center justify-center', className)}
      {...props}
    >
      <MoreHorizontalIcon className='size-4' />
      <span className='sr-only'>More pages</span>
    </span>
  )
}

export {
  Pagination,
  PaginationContent,
  PaginationLink,
  PaginationItem,
  PaginationPrevious,
  PaginationNext,
  PaginationEllipsis,
}

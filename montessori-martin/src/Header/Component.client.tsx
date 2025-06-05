'use client'

import Link from 'next/link'
import React from 'react'

import type { Header } from '@/payload-types'

import { Logo } from '@/components/Logo/Logo'
import { HeaderNav } from './Nav'

interface HeaderClientProps {
  data: Header
}

export const HeaderClient: React.FC<HeaderClientProps> = ({ data }) => {
  return (
    <header className="sticky top-0 px-40 z-50 bg-white shadow-sm border-b border-gray-200 w-full">
      <div className="py-4 flex justify-between items-center">
        <Link href="/">
          <div className="relative inline-block">
            <Logo loading="eager" priority="high" />
          </div>
        </Link>
        <HeaderNav data={data} />
      </div>
    </header>
  )
}

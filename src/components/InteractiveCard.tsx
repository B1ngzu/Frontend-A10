'use client'

import { useState, ReactNode } from 'react'

export default function InteractiveCard({ children }: { children: ReactNode }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className={`${isHovered ? 'shadow-2xl bg-neutral-200' : 'shadow-lg bg-white'} rounded-lg overflow-hidden`}
      onMouseOver={() => setIsHovered(true)}
      onMouseOut={() => setIsHovered(false)}
    >
      {children}
    </div>
  )
}

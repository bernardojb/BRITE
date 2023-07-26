'use client'
import * as React from 'react';

export const metadata = {
  title: 'hokup - Base Template',
  description: 'Personal template for outstanding projects.',
}

export default function RootLayout({ children }) {
  return (
    <div>
        {children}
    </div>
  )
}

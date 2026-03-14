import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Sidharth Jain – Robotics Engineer',
  description: 'I build robotics systems that deploy in the real world. From PCB design to clinical validation.',
  keywords: ['robotics', 'embedded systems', 'machine learning', 'medical devices', 'computer vision'],
  authors: [{ name: 'Sidharth Jain' }],
  openGraph: {
    title: 'Sidharth Jain – Robotics Engineer',
    description: 'I build robotics systems that deploy in the real world',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

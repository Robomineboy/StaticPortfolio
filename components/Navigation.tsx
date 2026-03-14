'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export function Navigation() {
  const pathname = usePathname()
  
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-nav animate-slide-down">
      <div className="max-w-7xl mx-auto px-8 py-6 flex justify-between items-center">
        <Link 
          href="/" 
          className="font-mono text-lg font-bold text-accent-teal tracking-tight hover:text-accent-green transition-colors"
        >
          SJ
        </Link>
        
        <ul className="flex gap-12">
          {[
            { href: '/#projects', label: 'PROJECTS' },
            { href: '/#about', label: 'ABOUT' },
            { href: '/#contact', label: 'CONTACT' },
          ].map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="font-mono text-sm text-text-secondary hover:text-accent-teal transition-colors relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-accent-teal transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

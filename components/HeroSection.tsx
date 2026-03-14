'use client'

import Link from 'next/link'

export function HeroSection() {
  return (
    <section className="min-h-screen flex items-center px-8 pt-32 pb-16">
      <div className="max-w-7xl mx-auto w-full">
        <div className="max-w-4xl">
          {/* Status Badge */}
          <div 
            className="inline-flex items-center gap-2 font-mono text-xs text-accent-green bg-accent-green/10 border border-accent-green/20 px-4 py-2 rounded mb-8"
            style={{ animationDelay: '0.2s' }}
          >
            <span className="w-1.5 h-1.5 bg-accent-green rounded-full animate-pulse-slow" />
            AVAILABLE FOR FULL-TIME ROLES // MAY 2026
          </div>

          {/* Main Heading */}
          <h1 
            className="text-7xl font-bold leading-tight mb-6"
            style={{ animationDelay: '0.4s' }}
          >
            I build <span className="gradient-text">robotics systems</span> that deploy in the real world
          </h1>

          {/* Description */}
          <p 
            className="text-xl text-text-secondary mb-12 max-w-3xl leading-relaxed"
            style={{ animationDelay: '0.6s' }}
          >
            From PCB design to clinical validation, I don't just prototype—I iterate through failure until systems work under real constraints: latency, drift, medical standards, and human needs.
          </p>

          {/* Stats Grid */}
          <div 
            className="grid grid-cols-4 gap-8 mb-12"
            style={{ animationDelay: '0.8s' }}
          >
            {[
              { number: '100+', label: 'Patient Deployments' },
              { number: '$120K', label: 'Funding Raised' },
              { number: '7', label: 'Prototype Iterations' },
              { number: '200+', label: 'Students Mentored' },
            ].map((stat) => (
              <div key={stat.label} className="border-l-2 border-accent-teal pl-4">
                <span className="font-mono text-3xl font-bold text-accent-teal block">
                  {stat.number}
                </span>
                <span className="font-mono text-xs text-text-dim uppercase tracking-wide">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div 
            className="flex gap-4"
            style={{ animationDelay: '1s' }}
          >
            <a
              href="#projects"
              className="font-mono text-sm px-8 py-4 border border-accent-teal text-accent-teal hover:bg-accent-teal hover:text-primary transition-all duration-300 relative overflow-hidden group"
            >
              <span className="relative z-10">VIEW PROJECTS</span>
              <span className="absolute inset-0 bg-accent-teal transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
            </a>
            <a
              href="#contact"
              className="font-mono text-sm px-8 py-4 border border-border text-text-secondary hover:text-text-primary hover:border-text-dim transition-all duration-300"
            >
              GET IN TOUCH
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

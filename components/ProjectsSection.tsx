'use client'

import Link from 'next/link'

const projects = [
  {
    number: '001',
    tags: ['Patented', 'Medical Device', 'Deployed'],
    title: 'GATTII – Wearable Gait Analysis System',
    description: 'Bringing clinical-grade gait analysis from $100k+ motion-capture labs to community physiotherapy clinics in Mumbai. Seven iterations, 100+ patient deployments, validated with orthopedists.',
    metrics: [
      { value: '24', label: 'Gait Parameters' },
      { value: '35%', label: 'Latency Reduction' },
      { value: '100+', label: 'Patient Tests' },
      { value: 'Patent', label: '#377581' },
    ],
    href: '/projects/gattii',
  },
  {
    number: '002',
    tags: ['Social Impact', '6 Years', 'Robotics'],
    title: 'Dharavi Dynamites – Competitive Robotics Pipeline',
    description: 'Founded Team GForce, then trained 13 students from Dharavi (one of the world\'s largest informal settlements) in competitive robotics. Six years later, original members are pursuing careers in healthcare and engineering.',
    metrics: [
      { value: '200+', label: 'Students' },
      { value: '6', label: 'Years Sustained' },
      { value: '7-DoF', label: 'Articulated Arms' },
      { value: 'FTC/WRO', label: 'Competitions' },
    ],
    href: '/projects/dharavi',
  },
  {
    number: '003',
    tags: ['Award Winner', 'Computer Vision', 'Haptics'],
    title: 'RIDGE – Remote Skin Cancer Detection',
    description: 'COVID-19 made in-person dermatology impossible. Built system combining computer vision and haptic feedback for remote diagnosis. Microsoft Imagine Cup Winner, ISEF 4th Place Grand Award.',
    metrics: [
      { value: '95%', label: 'CNN Accuracy' },
      { value: '10K+', label: 'Dataset Images' },
      { value: '40x40mm', label: 'Sensor Array' },
      { value: 'Prov.', label: 'Patent' },
    ],
    href: '/projects/ridge',
  },
]

export function ProjectsSection() {
  return (
    <section id="projects" className="bg-primary-light py-24 px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          <div className="font-mono text-sm text-accent-teal uppercase tracking-widest mb-4">
            Featured Work
          </div>
          <h2 className="text-5xl font-bold mb-4">Systems That Deploy</h2>
          <p className="text-lg text-text-secondary max-w-2xl">
            Three flagship projects spanning medical devices, social impact robotics, and pandemic-era innovation.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="space-y-8">
          {projects.map((project) => (
            <article
              key={project.number}
              className="bg-primary-lighter border border-border p-12 hover:border-accent-teal transition-all duration-400 hover:translate-x-2 relative group overflow-hidden"
            >
              {/* Accent Bar */}
              <div className="absolute left-0 top-0 w-1 h-0 bg-gradient-to-b from-accent-teal to-accent-green group-hover:h-full transition-all duration-400" />

              {/* Project Header */}
              <div className="flex justify-between items-start mb-6">
                <span className="font-mono text-xs text-text-dim tracking-widest">
                  {project.number}
                </span>
                <div className="flex gap-2 flex-wrap">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-mono text-[10px] px-3 py-1 bg-accent-teal/10 text-accent-teal border border-accent-teal/20 uppercase tracking-wide"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Content */}
              <h3 className="text-3xl font-bold mb-4">{project.title}</h3>
              <p className="text-lg text-text-secondary mb-8 leading-relaxed">
                {project.description}
              </p>

              {/* Metrics */}
              <div className="grid grid-cols-4 gap-6 mb-8 p-6 bg-accent-teal/5 border-l-2 border-accent-teal">
                {project.metrics.map((metric) => (
                  <div key={metric.label} className="flex flex-col">
                    <span className="font-mono text-2xl font-bold text-accent-teal">
                      {metric.value}
                    </span>
                    <span className="font-mono text-xs text-text-dim uppercase">
                      {metric.label}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <Link
                href={project.href}
                className="inline-flex items-center gap-2 font-mono text-sm text-accent-teal group-hover:gap-4 transition-all"
              >
                Read Case Study
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

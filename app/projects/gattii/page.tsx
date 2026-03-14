'use client'

import Link from 'next/link'
import { Navigation } from '@/components/Navigation'
import { Footer } from '@/components/Footer'

export default function GattiiProject() {
  return (
    <main className="min-h-screen bg-primary">
      <Navigation />
      
      <article className="pt-32 pb-16 px-8">
        <div className="max-w-5xl mx-auto">
          {/* Breadcrumb */}
          <div className="font-mono text-xs text-text-dim mb-8">
            <Link href="/" className="text-accent-teal hover:text-accent-green">HOME</Link>
            {' / '}PROJECTS{' / '}GATTII
          </div>

          {/* Header */}
          <div className="font-mono text-sm text-accent-teal uppercase tracking-widest mb-4">
            PROJECT 001 // MEDICAL DEVICE
          </div>
          <h1 className="text-6xl font-bold mb-6">
            GATTII: Wearable Gait Analysis System
          </h1>
          <p className="text-2xl text-text-secondary mb-12 leading-relaxed">
            Bringing clinical-grade gait analysis from $100,000+ motion-capture laboratories to community physiotherapy clinics in Mumbai through custom embedded hardware and real-time sensor fusion.
          </p>

          {/* Meta Grid */}
          <div className="grid grid-cols-5 gap-8 py-8 border-t border-b border-border mb-16">
            {[
              { label: 'Timeline', value: '2017 - Present (7 years)' },
              { label: 'Patent', value: '#377581' },
              { label: 'Funding', value: '$120,000' },
              { label: 'Deployments', value: '100+ Patients' },
              { label: 'Iterations', value: '7 Prototypes' },
            ].map((item) => (
              <div key={item.label} className="flex flex-col gap-2">
                <span className="font-mono text-xs text-text-dim uppercase tracking-wide">
                  {item.label}
                </span>
                <span className="text-lg">{item.value}</span>
              </div>
            ))}
          </div>

          {/* Content */}
          <div className="prose prose-invert prose-lg max-w-none">
            <div className="font-mono text-sm text-accent-teal uppercase tracking-widest mb-4">
              The Problem
            </div>
            <h2 className="text-4xl font-bold mb-6">When Walking Tells a Story</h2>
            <p className="text-text-secondary mb-6">
              Gait abnormalities are early indicators of neurological disorders like Parkinson's, orthopedic conditions, and age-related mobility decline. Clinical gait analysis—measuring 24 spatiotemporal parameters during walking—is the gold standard for diagnosis and monitoring recovery.
            </p>
            <p className="text-text-secondary mb-6">
              The challenge? Laboratory-grade systems cost $100,000+, require dedicated facilities with camera arrays and force plates, and are inaccessible to the dense urban communities where early detection matters most. In Mumbai's physiotherapy clinics and elder-care homes, doctors rely on visual observation—subjective, inconsistent, and unquantifiable.
            </p>

            <div className="bg-primary-lighter border-l-4 border-accent-teal p-8 my-8">
              <h4 className="text-xl font-semibold text-accent-teal mb-4">The Core Question</h4>
              <p className="text-xl text-text-primary m-0">
                Can we deliver the same clinical-grade measurements using wearable sensors that cost 100x less and work anywhere?
              </p>
            </div>

            <div className="font-mono text-sm text-accent-teal uppercase tracking-widest mb-4 mt-16">
              The Approach
            </div>
            <h2 className="text-4xl font-bold mb-6">Full-Stack Medical Device Development</h2>
            <p className="text-text-secondary mb-6">
              GATTII is a wearable system combining custom PCB design, real-time embedded firmware, sensor fusion algorithms, and cloud-based clinical reporting. Over seven iterations, we solved drift, latency, and synchronization challenges to match laboratory accuracy in field conditions.
            </p>

            <h3 className="text-3xl font-bold mt-12 mb-4">System Architecture</h3>
            <p className="text-text-secondary mb-6">
              The system consists of three hardware modules—two shoe insoles and one waist-mounted unit—streaming synchronized data to a FastAPI backend that generates clinical-grade PDF reports with spatial heat maps.
            </p>

            {/* Tech Stack Grid */}
            <div className="grid grid-cols-2 gap-4 my-12">
              {[
                {
                  title: 'Hardware Layer',
                  items: ['ESP32-S3 microcontroller', '6-axis IMU arrays (MPU6050)', 'FSR pressure sensor grid', 'Custom PCB design', 'Battery management (3.7V LiPo)'],
                },
                {
                  title: 'Firmware Layer',
                  items: ['FreeRTOS task scheduling', 'I2C sensor communication', 'TCP/UDP streaming', 'On-device filtering', 'Memory-optimized buffers'],
                },
                {
                  title: 'Processing Layer',
                  items: ['Quaternion smoothing', 'Drift correction (EKF)', 'Gait event detection', 'Pressure map reconstruction', 'Spatiotemporal computation'],
                },
                {
                  title: 'Backend Layer',
                  items: ['FastAPI + Python', 'SQL database', 'PDF report generation', 'Spatial heat mapping', 'Clinical validation tools'],
                },
              ].map((category) => (
                <div key={category.title} className="bg-primary-light border border-border p-6">
                  <h4 className="font-mono text-sm text-accent-teal uppercase mb-4">
                    {category.title}
                  </h4>
                  <ul className="space-y-2">
                    {category.items.map((item) => (
                      <li key={item} className="font-mono text-sm text-text-secondary flex items-start">
                        <span className="text-accent-teal mr-2">›</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="font-mono text-sm text-accent-teal uppercase tracking-widest mb-4 mt-16">
              Technical Deep Dive
            </div>
            <h2 className="text-4xl font-bold mb-8">The Hard Problems</h2>

            {/* Challenges */}
            <div className="space-y-6 mb-12">
              {[
                {
                  title: 'Challenge 1: Inertial Drift',
                  problem: 'IMU sensors accumulate orientation error over time. For a 30-second gait test, uncorrected drift made joint angle measurements useless. Traditional EKF approaches assume stationary periods—but gait is continuous motion.',
                  solution: 'We synchronized IMU quaternion frames with gait events (heel strike, toe-off) detected from pressure sensors. Each step cycle provides a natural reset point, reducing cumulative drift by 73%.',
                },
                {
                  title: 'Challenge 2: Real-Time Latency',
                  problem: 'Clinical gait parameters require frame-by-frame synchronization across three devices streaming at 100Hz. Initial TCP implementation introduced 400ms lag, making real-time feedback impossible.',
                  solution: 'FreeRTOS task prioritization + UDP streaming for time-critical data + on-device filtering reduced pipeline latency to 260ms—a 35% improvement enabling live clinical feedback.',
                },
                {
                  title: 'Challenge 3: Pressure Map Reconstruction',
                  problem: 'FSR sensors provide discrete pressure points, but clinicians need continuous center-of-pressure trajectories. Naive interpolation created artifacts that looked nothing like force-plate data.',
                  solution: 'Weighted Voronoi tessellation with temporal smoothing. Validated against laboratory force plates (R² = 0.91 for CoP trajectory correlation).',
                },
              ].map((challenge) => (
                <div key={challenge.title} className="bg-primary-light border-l-2 border-accent-teal p-6">
                  <h4 className="text-xl font-semibold text-accent-teal mb-3">
                    {challenge.title}
                  </h4>
                  <p className="text-text-secondary mb-4">{challenge.problem}</p>
                  <p className="text-accent-green">
                    <strong>Solution:</strong> {challenge.solution}
                  </p>
                </div>
              ))}
            </div>

            {/* Metrics */}
            <h3 className="text-3xl font-bold mt-12 mb-6">Key Metrics Computed</h3>
            <div className="grid grid-cols-3 gap-4 my-8">
              {[
                { value: '100Hz', label: 'Sampling Rate' },
                { value: '260ms', label: 'End-to-End Latency' },
                { value: '24', label: 'Gait Parameters' },
                { value: '91%', label: 'CoP Correlation (R²)' },
                { value: '<5%', label: 'Lab Deviation' },
                { value: '7', label: 'Hardware Iterations' },
              ].map((metric) => (
                <div key={metric.label} className="bg-primary-light border border-border p-6 text-center">
                  <span className="font-mono text-4xl font-bold text-accent-teal block mb-2">
                    {metric.value}
                  </span>
                  <span className="text-xs text-text-dim uppercase">{metric.label}</span>
                </div>
              ))}
            </div>

            <div className="font-mono text-sm text-accent-teal uppercase tracking-widest mb-4 mt-16">
              Impact & Deployment
            </div>
            <h2 className="text-4xl font-bold mb-6">Real-World Results</h2>
            <p className="text-text-secondary mb-6">
              After seven hardware iterations and 18 months of clinical validation, GATTII deployed to physiotherapy clinics and elder-care homes across Mumbai. The system enables routine gait monitoring at a fraction of laboratory costs.
            </p>

            <div className="bg-primary-lighter border-l-4 border-accent-teal p-8 my-8">
              <h4 className="text-xl font-semibold text-accent-teal mb-4">Deployment Scale</h4>
              <div className="space-y-2 text-text-secondary">
                <p>• <strong>100+ patient assessments</strong> across 3 physiotherapy clinics and 2 elder-care facilities</p>
                <p>• <strong>Validated by 4 orthopedists and 6 physiotherapists</strong> for clinical accuracy</p>
                <p>• <strong>$120,000 in angel funding</strong> to scale manufacturing</p>
                <p>• <strong>Patent granted</strong> (No. 377581, Application No. 201821005734)</p>
                <p>• <strong>Developed in collaboration with Dr. Charmi</strong>, practicing physiotherapist</p>
              </div>
            </div>

            <h3 className="text-3xl font-bold mt-12 mb-4">What I Learned</h3>
            <p className="text-text-secondary mb-6">
              GATTII taught me that real-world deployment is 90% constraint management. The first three prototypes worked beautifully on my lab bench and failed immediately in field testing. Drift? Fine in 10-second tests, catastrophic in clinical use. Latency? Invisible until a physiotherapist needed real-time feedback. Medical validation? You don't just compare numbers—you convince doctors to change their workflow.
            </p>
            <p className="text-text-secondary mb-6">
              Seven iterations wasn't perfectionism—it was learning to design within constraints: battery life, sensor noise, human movement variability, clinical workflow integration. Each iteration addressed one failure mode, and each failure taught me something you can't learn from simulation.
            </p>
          </div>

          {/* CTA */}
          <div className="bg-primary-light border border-border p-12 mt-16 text-center">
            <h3 className="text-3xl font-bold mb-4">Interested in Medical Device Development?</h3>
            <p className="text-text-secondary mb-6">
              I'm seeking full-time roles in robotics, embedded systems, or ML engineering—with a focus on medical technology and wearable devices.
            </p>
            <a
              href="mailto:sidharth@sidjain.co"
              className="inline-block font-mono text-sm px-8 py-4 border border-accent-teal text-accent-teal hover:bg-accent-teal hover:text-primary transition-all"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </article>

      <Footer />
    </main>
  )
}

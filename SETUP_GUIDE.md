# 🚀 Portfolio Setup Guide

## Your Next.js + React Three Fiber Portfolio is Ready!

I've built you a complete Next.js portfolio with the same distinctive "Lab Notebook Meets Instrument Panel" aesthetic, now properly structured for modern deployment and future Three.js integration.

---

## 📦 What You Got

### **Project Structure**
```
portfolio/
├── app/                      # Next.js App Router
│   ├── globals.css          # Tailwind + custom animations
│   ├── layout.tsx           # Root layout & metadata
│   ├── page.tsx             # Homepage
│   └── projects/
│       └── gattii/          # GATTII project page
│           └── page.tsx
├── components/              # React components
│   ├── Navigation.tsx       # Fixed nav with glass effect
│   ├── HeroSection.tsx      # Animated hero with stats
│   ├── ProjectsSection.tsx  # Project cards grid
│   └── Footer.tsx           # Footer with contact
├── tailwind.config.js       # Custom color scheme
├── package.json             # Dependencies
├── README.md                # Documentation
└── setup.sh                 # Quick start script
```

### **Tech Stack**
- ✅ Next.js 14 (App Router)
- ✅ TypeScript
- ✅ Tailwind CSS (custom theme)
- ✅ React Three Fiber ready
- ✅ Framer Motion for animations
- ✅ Optimized for Vercel deployment

---

## 🎬 Quick Start (3 Steps)

### **Step 1: Extract and Install**
```bash
# Extract the archive
tar -xzf portfolio.tar.gz
cd portfolio

# Run setup script
./setup.sh

# OR manually install:
npm install
```

### **Step 2: Customize Your Info**

1. **Email & Links** (`components/Footer.tsx`):
   ```tsx
   // Line ~20
   sidharth@sidjain.co  // ← Update this
   
   // Lines ~35-40
   { label: 'LinkedIn', href: 'https://linkedin.com/in/YOUR_PROFILE' },
   { label: 'GitHub', href: 'https://github.com/YOUR_PROFILE' },
   ```

2. **Stats** (`components/HeroSection.tsx`):
   ```tsx
   // Line ~26 - Update if numbers changed
   { number: '100+', label: 'Patient Deployments' },
   { number: '$120K', label: 'Funding Raised' },
   ```

3. **Availability** (`components/HeroSection.tsx`):
   ```tsx
   // Line ~13
   AVAILABLE FOR FULL-TIME ROLES // MAY 2026
   ```

### **Step 3: Run Local Development**
```bash
npm run dev
```

Open **http://localhost:3000** → Your portfolio is live locally! 🎉

---

## 🌐 Deploy to Vercel (5 Minutes)

### **Option A: GitHub → Vercel (Recommended)**

1. **Push to GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
   git push -u origin main
   ```

2. **Connect to Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repo
   - Click "Deploy" (Vercel auto-detects Next.js!)

3. **Custom Domain**:
   - In Vercel dashboard → Settings → Domains
   - Add `sidjain.co`
   - Update DNS records at your registrar:
     ```
     A     @     76.76.21.21
     CNAME www   cname.vercel-dns.com
     ```

### **Option B: Direct Deploy (No GitHub)**
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Follow prompts, done!
```

---

## 🎨 Design System

### **Colors** (Tailwind config)
```javascript
primary: '#0a0e14'      // Dark background
accent-teal: '#2dd4bf'  // Primary accent (PCB green)
accent-green: '#34d399' // Secondary accent
text-primary: '#e5e7eb' // Main text
text-secondary: '#9ca3af' // Dimmed text
```

### **Typography**
- **Display/Code**: JetBrains Mono (technical credibility)
- **Body**: IBM Plex Sans (readability)

### **Key Components**
- **Grid Background**: Oscilloscope-style grid overlay
- **Glass Nav**: Backdrop blur with border
- **Project Cards**: Hover animations with accent bar
- **Gradient Text**: Teal → Green gradient on headings

---

## 📝 Adding Content

### **Create New Project Page**

1. **Create directory**:
   ```bash
   mkdir app/projects/your-project
   ```

2. **Create page** (`app/projects/your-project/page.tsx`):
   ```tsx
   'use client'
   
   import { Navigation } from '@/components/Navigation'
   import { Footer } from '@/components/Footer'
   
   export default function YourProject() {
     return (
       <main>
         <Navigation />
         {/* Your content */}
         <Footer />
       </main>
     )
   }
   ```

3. **Add to homepage** (`components/ProjectsSection.tsx`):
   ```tsx
   const projects = [
     // ... existing projects
     {
       number: '004',
       tags: ['New', 'Tag'],
       title: 'Your Project Title',
       description: '...',
       metrics: [...],
       href: '/projects/your-project',
     },
   ]
   ```

### **Add Images**

1. Put images in `public/`:
   ```
   public/
   ├── projects/
   │   ├── gattii-pcb.jpg
   │   ├── dharavi-team.jpg
   │   └── ridge-sensor.jpg
   └── resume.pdf
   ```

2. Use Next.js Image component:
   ```tsx
   import Image from 'next/image'
   
   <Image 
     src="/projects/gattii-pcb.jpg" 
     alt="GATTII PCB"
     width={800}
     height={600}
     className="rounded"
   />
   ```

---

## 🎯 Phase 2: Adding Three.js

When ready to add interactive 3D elements:

### **1. Create 3D Scene Component**
```tsx
// components/GattiiModel.tsx
'use client'

import { Canvas } from '@react-three/fiber'
import { OrbitControls, PerspectiveCamera } from '@react-three/drei'

export function GattiiModel() {
  return (
    <div className="w-full h-96">
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 0, 5]} />
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} />
        <OrbitControls enableZoom={false} />
        
        {/* Your 3D model here */}
        <mesh>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color="#2dd4bf" />
        </mesh>
      </Canvas>
    </div>
  )
}
```

### **2. Add to Project Page**
```tsx
import { GattiiModel } from '@/components/GattiiModel'

export default function GattiiProject() {
  return (
    <article>
      <h2>3D Visualization</h2>
      <GattiiModel />
    </article>
  )
}
```

### **Example 3D Elements to Build**
- **GATTII**: Rotating 3D model of the wearable device
- **Gait Analysis**: Animated pressure map heatmap
- **Robot Arm**: Interactive kinematics demo
- **Dharavi**: 3D robot model with articulated arms

---

## 🐛 Troubleshooting

### **Port 3000 already in use**
```bash
# Kill the process
lsof -ti:3000 | xargs kill -9

# Or use different port
npm run dev -- -p 3001
```

### **TypeScript errors**
```bash
# Rebuild
rm -rf .next
npm run build
```

### **Styling not working**
- Ensure Tailwind classes are in `content` paths
- Check browser console for CSS errors
- Clear browser cache

---

## 📊 Performance Checklist

- [ ] Add `alt` tags to all images
- [ ] Use Next.js `<Image>` component
- [ ] Enable static generation where possible
- [ ] Compress images (use TinyPNG)
- [ ] Add loading states for 3D scenes
- [ ] Test on mobile devices

---

## 🎯 Recommended Workflow

### **Week 1: Get Live**
- [x] Static site built ✅
- [ ] Customize contact info
- [ ] Add project images
- [ ] Deploy to Vercel
- [ ] Share with 5 people for feedback

### **Week 2: Content**
- [ ] Complete Dharavi + RIDGE project pages
- [ ] Add About page
- [ ] Write 1-2 blog posts (optional)
- [ ] Update resume PDF

### **Week 3+: Enhancements**
- [ ] Add first Three.js element
- [ ] Implement smooth scroll
- [ ] Add page transitions
- [ ] Analytics (Vercel Analytics)

---

## 🚀 Going Further

### **Analytics**
```bash
npm install @vercel/analytics
```

```tsx
// app/layout.tsx
import { Analytics } from '@vercel/analytics/react'

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
```

### **SEO Optimization**
Already configured in `app/layout.tsx`, but add:
- Open Graph images
- Twitter cards
- Structured data (JSON-LD)

### **Performance Monitoring**
- Use Lighthouse in Chrome DevTools
- Monitor Core Web Vitals in Vercel
- Test on real devices

---

## 📞 Need Help?

**Common Issues:**
- Check README.md first
- Search Next.js docs: [nextjs.org/docs](https://nextjs.org/docs)
- Tailwind docs: [tailwindcss.com/docs](https://tailwindcss.com/docs)
- R3F docs: [docs.pmnd.rs/react-three-fiber](https://docs.pmnd.rs/react-three-fiber)

**Project Structure Questions:**
- Next.js uses file-based routing
- `page.tsx` = route
- `layout.tsx` = shared wrapper
- `'use client'` = client component (for interactivity)

---

## ✅ Quick Checklist

Before deploying:
- [ ] Updated email address
- [ ] Added LinkedIn/GitHub URLs
- [ ] Tested on localhost
- [ ] Checked mobile responsiveness
- [ ] Added project images (optional but recommended)
- [ ] Resume PDF in `/public/resume.pdf`
- [ ] Ran `npm run build` successfully

---

**You're ready to ship! 🎉**

The static HTML files work perfectly as-is, but this Next.js version gives you:
- ✅ Better SEO
- ✅ Faster page loads
- ✅ Easy content updates
- ✅ Ready for Three.js
- ✅ Professional deployment workflow

**Next action: Run `npm install` and `npm run dev`**

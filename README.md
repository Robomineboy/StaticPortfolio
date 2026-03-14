# Sidharth Jain - Portfolio

A Next.js portfolio showcasing robotics systems engineering projects with React Three Fiber integration.

## 🎯 Design Philosophy

**"Lab Notebook Meets Instrument Panel"**
- Monospaced typography for technical credibility
- Dark theme with precision grid overlay (oscilloscope/blueprint vibes)
- Teal/Green accents inspired by PCB solder masks
- Clean, professional layout emphasizing engineering over design

## 🚀 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **3D Graphics**: React Three Fiber + Drei
- **Animations**: Framer Motion
- **Deployment**: Vercel

## 📦 Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## 📁 Project Structure

```
portfolio/
├── app/
│   ├── globals.css          # Global styles with Tailwind
│   ├── layout.tsx            # Root layout with metadata
│   ├── page.tsx              # Homepage
│   └── projects/
│       ├── gattii/           # GATTII project page
│       ├── dharavi/          # Dharavi Dynamites page
│       └── ridge/            # RIDGE project page
├── components/
│   ├── Navigation.tsx        # Global nav component
│   ├── HeroSection.tsx       # Homepage hero
│   ├── ProjectsSection.tsx   # Featured projects grid
│   └── Footer.tsx            # Footer with contact info
├── lib/                      # Utility functions (future)
├── public/                   # Static assets
└── package.json
```

## 🎨 Customization

### Update Personal Info

1. **Contact Information** (`components/Footer.tsx`):
   - Update email address
   - Add LinkedIn/GitHub URLs
   - Update resume link

2. **Hero Section** (`components/HeroSection.tsx`):
   - Modify stats (deployments, funding, etc.)
   - Update availability status

3. **Projects** (`components/ProjectsSection.tsx`):
   - Edit project descriptions
   - Update metrics
   - Add new projects

### Color Scheme

Colors are defined in `tailwind.config.js`:
```js
colors: {
  primary: '#0a0e14',     // Background
  accent: {
    teal: '#2dd4bf',      // Primary accent
    green: '#34d399',     // Secondary accent
  },
  text: {
    primary: '#e5e7eb',   // Main text
    secondary: '#9ca3af', // Secondary text
  }
}
```

## 🔧 Adding React Three Fiber

When ready to add 3D elements:

```tsx
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'

function Scene() {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <OrbitControls />
      {/* Your 3D models here */}
    </Canvas>
  )
}
```

## 📝 Content Guidelines

### Project Pages
Each project follows this structure:
1. **Problem** - What challenge you solved
2. **Approach** - Your technical solution
3. **Technical Details** - Deep dive into implementation
4. **Results** - Metrics and impact
5. **Learnings** - What you gained

### Key Differentiators to Emphasize
- Medical device deployment (rare for new grads)
- Full-stack robotics (PCB → firmware → backend → validation)
- Real constraints (latency, drift, medical standards)
- Sustained commitment (iterations, years of work)
- Cross-functional collaboration

## 🚀 Deployment

### Deploy to Vercel

1. Push code to GitHub:
```bash
git init
git add .
git commit -m "Initial portfolio"
git remote add origin <your-repo-url>
git push -u origin main
```

2. Connect to Vercel:
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Vercel auto-detects Next.js and deploys

3. Custom domain:
   - Add `sidjain.co` in Vercel project settings
   - Update DNS records as instructed

## 📊 Performance Optimizations

- **Static Generation**: Most pages are statically generated at build time
- **Image Optimization**: Use Next.js `<Image>` component for assets
- **Code Splitting**: Automatic with Next.js App Router
- **Font Optimization**: Self-hosted fonts via Google Fonts

## 🎯 Next Steps

### Phase 1 (Current)
- [x] Static site with core content
- [x] Responsive design
- [x] Three flagship project pages
- [ ] Add project images
- [ ] Deploy to Vercel

### Phase 2 (Future)
- [ ] Add Three.js interactive elements
  - 3D GATTII device model
  - Interactive gait visualization
  - Robot arm kinematics demo
- [ ] About page with full story
- [ ] Blog/maker series section
- [ ] Skills breakdown page

## 📧 Contact

Sidharth Jain
- Email: sidharth@sidjain.co
- Website: sidjain.co

---

**Portfolio Goal**: Get callbacks from robotics/embedded/ML roles by showing systems that deploy in the real world.

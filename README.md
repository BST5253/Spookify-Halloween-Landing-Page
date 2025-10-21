# 🎃 Spookify - Halloween Landing Page

A stunning, fully-featured Halloween-themed landing page built with modern web technologies. This project showcases advanced animations, interactive elements, and responsive design for an immersive spooky experience.

![Made with](https://img.shields.io/badge/Made%20with-Next.js-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

## ✨ Features

### 🎨 Visual Effects

-   **Animated Particle System** - 80 floating particles with Halloween colors (orange, red, white)
-   **Custom Ghost Cursor** - Interactive ghost cursor with glowing trail effect
-   **GSAP Scroll Animations** - Professional parallax effects and scroll-triggered animations
-   **Hover Micro-interactions** - Spooky shake, glow pulse, and 3D transform effects
-   **Gradient Borders** - Rotating gradient animations on card hover
-   **Pumpkin Glow Effects** - Pulsing orange glow throughout the page

### 🎭 Interactive Elements

-   **Responsive Mobile Menu** - Slide-in hamburger menu for mobile devices
-   **Interactive Particles** - Particles react to mouse hover and clicks
-   **Smooth Scroll Animations** - Elements fade in and animate on scroll
-   **CTA Button** - Continuous pulse animation with enhanced hover effects
-   **Auto-hiding Navbar** - Navbar hides on scroll down, shows on scroll up

### 📱 Responsive Design

-   Fully responsive on all devices (mobile, tablet, desktop)
-   Optimized particle count for mobile performance (40 vs 80)
-   Custom cursor disabled on touch devices
-   Mobile-optimized text sizes and spacing
-   Adaptive grid layouts

### 🚀 Performance

-   60 FPS animations with GSAP
-   Optimized particle rendering
-   Once-only animations to prevent re-rendering
-   Efficient scroll triggers
-   Touch-device detection for better mobile UX

## 🛠️ Tech Stack

### Core Framework

-   **[Next.js 15](https://nextjs.org/)** - React framework with App Router
-   **[React 19](https://react.dev/)** - UI library
-   **[TypeScript](https://www.typescriptlang.org/)** - Type-safe development

### Styling

-   **[Tailwind CSS v4](https://tailwindcss.com/)** - Utility-first CSS framework
-   **Custom CSS Animations** - Keyframe animations for spooky effects

### Animation Libraries

-   **[GSAP](https://greensock.com/gsap/)** - Professional-grade animation library
-   **[GSAP ScrollTrigger](https://greensock.com/scrolltrigger/)** - Scroll-based animations
-   **[Framer Motion](https://www.framer.com/motion/)** - React animation library

### Particles

-   **[@tsparticles/react](https://particles.js.org/)** - React particle system
-   **[@tsparticles/slim](https://particles.js.org/)** - Lightweight particle engine
-   **[@tsparticles/engine](https://particles.js.org/)** - Core particle engine
-   **[tsparticles](https://particles.js.org/)** - Main particles package

### Development Tools

-   **[pnpm](https://pnpm.io/)** - Fast, disk space efficient package manager
-   **[ESLint](https://eslint.org/)** - Code linting
-   **[PostCSS](https://postcss.org/)** - CSS processing

## 📦 Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd halloween-landing-page

# Install dependencies
pnpm install

# Run development server
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view the project.

## 📁 Project Structure

```
halloween-landing-page/
├── src/
│   └── app/
│       ├── components/
│       │   ├── Navbar.tsx          # Responsive navigation with mobile menu
│       │   ├── Hero.tsx            # Hero section with animated ghost
│       │   ├── Features.tsx        # Product cards with hover effects
│       │   ├── CTA.tsx             # Call-to-action with pulsing button
│       │   ├── Footer.tsx          # Footer section
│       │   ├── ParticleSystem.tsx  # Animated particle background
│       │   ├── CustomCursor.tsx    # Ghost cursor with trail effect
│       │   └── ScrollAnimations.tsx # GSAP scroll-triggered animations
│       ├── globals.css             # Global styles and animations
│       ├── layout.tsx              # Root layout
│       └── page.tsx                # Main page component
├── public/
│   └── assets/                     # Images and static assets
├── package.json
├── tsconfig.json
└── next.config.ts
```

## 🎯 Key Components

### ParticleSystem

-   80 particles on desktop, 40 on mobile
-   Interactive on hover and click
-   Halloween color palette
-   Smooth 60 FPS animations

### CustomCursor

-   Ghost-shaped cursor with eyes
-   Glowing orange trail using Canvas API
-   Disabled on mobile/touch devices
-   Scales up on interactive elements

### ScrollAnimations

-   Parallax hero section
-   Staggered card reveals
-   3D rotation effects
-   Fade-in animations
-   Auto-hiding navbar

### Hover Effects

-   Spooky shake animation
-   Glow pulse effect
-   Rotating gradient borders
-   3D transforms
-   Brightness adjustments

## 🎨 Color Palette

```css
--color-pumpkin: #ff7518; /* Primary orange */
--color-midnight: #0b0016; /* Dark background */
--color-ghost: #f8f8ff; /* Light text */
--color-blood: #a30000; /* Accent red */
```

## 📝 Scripts

```bash
pnpm dev          # Start development server
pnpm build        # Build for production
pnpm start        # Start production server
pnpm lint         # Run ESLint
```

## 🌐 Browser Support

-   Chrome (latest)
-   Firefox (latest)
-   Safari (latest)
-   Edge (latest)
-   Mobile browsers (iOS Safari, Chrome Mobile)

## 🚀 Deployment

### Deploy on Vercel

The easiest way to deploy this Next.js app:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=<your-repo-url>)

Or manually:

```bash
# Build the project
pnpm build

# Deploy to Vercel
vercel
```

See [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for other platforms.

## 💡 Features Breakdown

### Quick Win Implementations

1. **Particle System** ✅

    - Falling particles in Halloween colors
    - Interactive hover and click effects
    - Mobile-optimized performance

2. **Custom Cursor** ✅

    - Ghost cursor with glowing trail
    - Canvas API for smooth animations
    - Touch-device detection

3. **GSAP Scroll Animations** ✅

    - Professional parallax effects
    - Scroll-triggered reveals
    - Auto-hiding navbar
    - Smooth 60 FPS performance

4. **Hover Micro-interactions** ✅
    - Button shake animations
    - Card glow effects
    - 3D transforms
    - Gradient animations

## 🤝 Contributing

Contributions are welcome! Feel free to submit issues and pull requests.

## 👤 Author

**BST**

Made with 💀 and lots of ☕

---

⭐ Star this repository if you found it helpful!

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

## 🚀 Development Journey & Learnings

### 🎓 What We Learned

#### 1. **Advanced Animation Techniques**

-   **GSAP ScrollTrigger Mastery**: Learned how to create professional parallax effects and coordinate multiple scroll-triggered animations
-   **Canvas API for Custom Effects**: Built a custom cursor with trailing effects using HTML5 Canvas
-   **Animation State Management**: Discovered the importance of using `gsap.set()` and `gsap.fromTo()` for reliable initial states
-   **Performance Optimization**: Implemented `once: true` flags to prevent animations from reversing and causing layout issues

#### 2. **React & Next.js Best Practices**

-   **Client-Side Components**: Used `"use client"` directive effectively for interactive components
-   **useEffect Lifecycle**: Managed side effects and cleanup for animations, event listeners, and canvas rendering
-   **Component Composition**: Built modular, reusable components that work together seamlessly
-   **TypeScript Integration**: Leveraged TypeScript for type-safe props and better developer experience

#### 3. **Responsive Design Patterns**

-   **Mobile-First Approach**: Implemented responsive breakpoints using Tailwind's utility classes
-   **Touch Device Detection**: Learned to detect touch devices and disable features like custom cursor for better UX
-   **Adaptive Performance**: Reduced particle count on mobile devices (40 vs 80) for better performance
-   **Responsive Grid Systems**: Mastered `grid-cols-1 sm:grid-cols-2 lg:grid-cols-3` patterns

#### 4. **CSS Animation Techniques**

-   **Keyframe Animations**: Created complex animations like `spooky-shake`, `glow-pulse`, and `cta-pulse`
-   **CSS Gradients**: Implemented rotating gradient borders and multi-layer gradient backgrounds
-   **Transform & Filter Effects**: Used `transform`, `filter`, and `backdrop-blur` for modern visual effects
-   **CSS Variables**: Defined custom color palette with CSS custom properties for consistency

#### 5. **Performance & Optimization**

-   **60 FPS Target**: Ensured all animations run at 60 FPS using GSAP and optimized CSS
-   **Lazy Loading**: Particles and animations only initialize when components mount
-   **Z-Index Layering**: Properly managed stacking contexts to prevent overflow issues
-   **Event Listener Cleanup**: Learned to remove event listeners in `useEffect` cleanup functions

#### 6. **Problem-Solving & Debugging**

-   **Animation Conflicts**: Resolved conflicts between Framer Motion and GSAP by choosing the right tool for each job
-   **Scroll Behavior Issues**: Fixed hero section overflow by adding `overflow-hidden` and proper z-index
-   **Visibility Problems**: Debugged cards disappearing by understanding `toggleActions` and animation lifecycle
-   **State Persistence**: Ensured elements stay visible after animations complete

#### 7. **Third-Party Library Integration**

-   **tsparticles**: Integrated and configured a complex particle system with custom options
-   **GSAP + ScrollTrigger**: Combined multiple GSAP plugins for advanced scroll effects
-   **Framer Motion**: Used alongside GSAP for different types of animations
-   **Package Management**: Used pnpm for efficient dependency management

#### 8. **UI/UX Design Principles**

-   **Visual Hierarchy**: Created clear focus points with size, color, and animation
-   **Micro-interactions**: Added delightful details that enhance user engagement
-   **Accessibility Considerations**: Disabled problematic features on touch devices
-   **Theme Consistency**: Maintained Halloween aesthetic throughout all components

### 💡 Key Takeaways

1. **Animation Timing is Everything**: Proper `toggleActions` and `once` flags prevent animation reversal issues
2. **Mobile Matters**: Always test and optimize for mobile devices (cursor, particles, layout)
3. **Layer Management**: Z-index and stacking contexts require careful planning
4. **State Management**: Initial states should be explicitly set to avoid flashing or invisible content
5. **Performance First**: Reduce complexity on lower-powered devices while maintaining experience
6. **Tool Selection**: Choose the right animation library for each use case (GSAP vs Framer Motion)
7. **Clean Code**: Proper cleanup in `useEffect` prevents memory leaks and performance issues
8. **Responsive Testing**: Test at multiple breakpoints, not just mobile and desktop

### 🔧 Technical Challenges Overcome

| Challenge                    | Solution                                                            |
| ---------------------------- | ------------------------------------------------------------------- |
| Cards disappearing on scroll | Changed from `gsap.from()` to `gsap.fromTo()` with explicit states  |
| Hero background overflow     | Added `overflow-hidden` and proper z-index layering                 |
| Mobile performance issues    | Reduced particle count and disabled custom cursor on touch          |
| CTA button visibility        | Enhanced with gradients, text shadows, and pulsing animation        |
| Animation conflicts          | Removed conflicting Framer Motion props from GSAP-animated elements |
| Navbar blocking content      | Implemented auto-hide on scroll with GSAP ScrollTrigger             |

### 🎯 Best Practices Applied

-   ✅ Component modularity and separation of concerns
-   ✅ TypeScript for type safety and better DX
-   ✅ Responsive design with mobile-first approach
-   ✅ Performance optimization for all devices
-   ✅ Clean code with proper error handling
-   ✅ Comprehensive documentation
-   ✅ Git version control with meaningful commits
-   ✅ Professional README with badges and structure

### 📚 Resources That Helped

-   [GSAP Documentation](https://gsap.com/docs/v3/)
-   [Next.js App Router Guide](https://nextjs.org/docs/app)
-   [Tailwind CSS Documentation](https://tailwindcss.com/docs)
-   [MDN Canvas API](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API)
-   [tsparticles Configuration](https://particles.js.org/)

## 🤝 Contributing

Contributions are welcome! Feel free to submit issues and pull requests.

## 👤 Author

**BST**

Made with 💀 and lots of ☕

---

⭐ Star this repository if you found it helpful!

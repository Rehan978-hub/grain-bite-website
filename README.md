# Grain Bite - Premium Food Manufacturing Website

A modern, high-performance website for Grain Bite - a leading food manufacturing and private-label partner.

## 🎯 Project Overview

Grain Bite is a premium food manufacturing platform designed to:
- Generate B2B leads for food manufacturing services
- Build trust with industry-leading certifications and quality standards
- Showcase manufacturing capabilities and product categories
- Enable businesses to request quotations and connect with the team

## 🛠️ Technology Stack

- **Framework**: Next.js 14+ with App Router
- **Styling**: Tailwind CSS with custom configuration
- **Animations**: Framer Motion & GSAP
- **Forms**: React Hook Form
- **UI Icons**: Lucide React
- **Language**: TypeScript
- **Performance**: Image optimization, code splitting, lazy loading

## 📁 Project Structure

```
grain-bite-website/
├── app/
│   ├── components/
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── HeroSection.tsx
│   │   ├── StatsSection.tsx
│   │   ├── AboutSection.tsx
│   │   ├── ServicesSection.tsx
│   │   ├── ProductsSection.tsx
│   │   ├── QualitySection.tsx
│   │   ├── ProcessSection.tsx
│   │   ├── ContactSection.tsx
│   │   ├── FAQSection.tsx
│   │   ├── ScrollToTop.tsx
│   │   └── Counter.tsx
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── tailwind.config.js
├── tsconfig.json
├── next.config.js
├── postcss.config.js
├── package.json
└── README.md
```

## 🎨 Design Features

### Color Palette
- **Primary Green**: #22c55e (brand color)
- **Natural Green**: #15803d
- **Warm Beige**: #f5f1ed (accent)
- **Dark Charcoal**: #1f2937
- **Soft Gold**: #d4a574

### Typography
- **Display Font**: Sora (headings)
- **Body Font**: Inter (content)

## 📄 Page Sections

1. **Hero Section** - Premium hero with animated background, brand positioning
2. **Stats Section** - Industry impact metrics with animated counters
3. **About Section** - Why choose Grain Bite with key differentiators
4. **Services Section** - 6 manufacturing services with hover effects
5. **Products Section** - 8 product categories with inquiry CTAs
6. **Quality Section** - Certifications and quality assurance details
7. **Process Section** - 8-step manufacturing timeline
8. **FAQ Section** - Expandable accordion with common questions
9. **Contact Section** - Lead generation form and contact methods
10. **Header & Footer** - Navigation and company information

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/Rehan978-hub/grain-bite-website.git
cd grain-bite-website

# Install dependencies
npm install

# Run development server
npm run dev

# Open browser
# Navigate to http://localhost:3000
```

### Build for Production

```bash
npm run build
npm start
```

## ✨ Key Features

### 🎬 Animations
- Smooth scroll animations with Framer Motion
- Parallax effects on background elements
- Staggered reveal animations on scroll
- Hover interactions on all interactive elements
- Animated counters for statistics

### 📱 Responsive Design
- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px)
- Touch-friendly interactions
- Optimized navigation for mobile

### ♿ Accessibility
- Semantic HTML structure
- ARIA labels on interactive elements
- Keyboard navigation support
- Focus management
- Color contrast compliance

### 📊 SEO Optimization
- Meta tags and OG tags
- Structured data
- Sitemap ready
- Fast page load times
- Mobile-friendly design

### 🔍 Performance
- Image optimization with Next.js Image
- Code splitting and lazy loading
- CSS minification
- Efficient animations
- CDN ready

## 📊 Conversion Optimization

### Lead Generation Elements
- Multiple CTA buttons throughout the site
- Contact form with validation
- Quick quote request button
- Product inquiry buttons
- "Get Free Quote" primary CTA

### Trust Building
- Certifications display
- Industry statistics
- Success metrics
- Manufacturing process transparency
- Professional design

## 🔧 Customization

### Update Contact Information
Edit `app/components/Footer.tsx` and `app/components/ContactSection.tsx`:
```tsx
const contactMethods = [
  {
    icon: '📞',
    title: 'Phone',
    value: '+91 YOUR-NUMBER-HERE',
    link: 'tel:+91XXXXX',
  },
  // ... more methods
]
```

### Modify Color Scheme
Update `tailwind.config.js` custom colors section

### Add/Remove Sections
Edit `app/page.tsx` and add/remove component imports

## 📈 SEO Keywords

Optimized for:
- Food manufacturer India
- Private label food manufacturer
- Healthy snack manufacturer
- Contract food manufacturing
- Protein bar manufacturer
- White label food products
- FMCG manufacturing partner

## 🚀 Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Other Platforms
- AWS Amplify
- Netlify
- DigitalOcean
- Heroku

## 📝 Content Management

All content is hardcoded in components. To manage dynamically:
1. Create a `/lib/content.ts` file
2. Move content arrays to the content file
3. Import and use in components

## 🎯 Conversion Funnel

```
Hero Section (Brand Awareness)
    ↓
Services Section (Interest)
    ↓
Products Section (Consideration)
    ↓
Process Section (Decision)
    ↓
Contact/FAQ Sections (Action)
```

## 📞 Support & Contact

For questions or support:
- Email: hello@grainbite.co.in
- Phone: +91 XXXX-XXXX-XX
- WhatsApp: +91 XXXX-XXXX-XX

## 📜 License

This project is proprietary to Grain Bite.

## 🙏 Acknowledgments

Designed and built with:
- Next.js
- React
- Tailwind CSS
- Framer Motion
- Lucide React

---

**Built with ❤️ for premium food manufacturing excellence**

# 🚀 Ankit Singh – Software Developer Portfolio
## Live Demo
https://ankit1portfolio.netlify.app/

A modern, responsive software developer portfolio built with **React** (via CDN), featuring smooth animations, lazy loading, and a polished dark-theme UI.

---

## ✅ Completed Features

- **Navbar** – Sticky with scroll progress bar, active section detection, smooth scroll, mobile hamburger menu
- **Hero Section** – Animated particle canvas background, typewriter effect, floating tech badges, animated rings, CTA buttons
- **About Section** – Profile card with info, stats grid, values/strengths cards
- **Skills Section** – Animated skill progress bars per category, technology pill cloud
- **Projects Section** – Filterable grid with lazy-loaded images, hover overlays, featured badge
- **Experience Section** – Interactive timeline (alternating left/right), achievement lists, tech tags
- **Testimonials** – Three-column testimonial cards with star ratings
- **Contact Section** – Info cards, availability indicator, validated contact form with simulated send
- **Footer** – Quick links, contact summary, social links, back-to-top button
- **Animations** – Intersection Observer-based scroll-triggered animations, fade+slide effects
- **Responsive Design** – Fully responsive from 320px to 4K screens

---

## 📂 Project Structure

```
├── index.html              # Main HTML entry point
├── css/
│   └── style.css           # Full CSS (variables, layout, components, responsive)
├── js/
│   ├── utils.js            # Custom React hooks (useInView, useTypingEffect, useScrollProgress)
│   ├── data.js             # All portfolio content (easy to customize)
│   ├── App.js              # Root React component & mount
│   └── components/
│       ├── Navbar.js       # Navigation component
│       ├── Hero.js         # Hero section with canvas particles
│       ├── About.js        # About me section
│       ├── Skills.js       # Skills section with animated bars
│       ├── Projects.js     # Projects grid with filter tabs
│       ├── Experience.js   # Timeline + testimonials
│       ├── Contact.js      # Contact form with validation
│       └── Footer.js       # Site footer
└── README.md
```

---

## 🎨 Customization Guide

### 1. Update Personal Info
Edit `js/data.js` – change the `PORTFOLIO_DATA` object:
- `personal` – name, tagline words, bio, location, email, social links
- `skills` – categories, skill names & proficiency levels
- `projects` – title, description, tags, images, github/live URLs
- `experience` – roles, companies, dates, achievements
- `testimonials` – quotes and author info

### 2. Change Color Theme
In `css/style.css`, update the `:root` CSS variables:
```css
--primary: #6366f1;       /* Main accent (indigo) */
--secondary: #10b981;     /* Secondary accent (emerald) */
--accent: #f59e0b;        /* Warning/highlight (amber) */
--bg: #0a0a0f;            /* Page background */
```

### 3. Swap Avatar
Replace the `avatar` URL in `js/data.js` `personal.avatar` with your own photo or DiceBear URL.

---

## 🛠 Tech Stack

| Technology | Usage |
|---|---|
| React 18 | UI Components via CDN |
| Babel Standalone | JSX transpilation in browser |
| Intersection Observer API | Scroll-triggered animations |
| Canvas API | Particle field background |
| CSS Custom Properties | Theming system |
| Google Fonts | Inter, Space Grotesk, Fira Code |
| Font Awesome 6 | Icons throughout |

---

## 🌟 Key Features & Techniques

- **Typewriter Effect** – Custom `useTypingEffect` hook cycles through role titles
- **Lazy Loading** – Project images use native `loading="lazy"` with skeleton loaders
- **Scroll Animations** – `useInView` hook with `IntersectionObserver` for performant entrance animations
- **Particle Canvas** – Animated network of dots using `requestAnimationFrame`
- **Filter System** – Category-based project filtering with staggered re-animation
- **Form Validation** – Client-side validation with error states and success feedback
- **Mobile Menu** – CSS-animated hamburger with smooth open/close

---

## 📌 Functional Entry Points

| Section | Anchor | Description |
|---|---|---|
| Home / Hero | `#home` | Landing section |
| About | `#about` | Bio, stats, values |
| Skills | `#skills` | Tech skills + proficiency |
| Projects | `#projects` | Portfolio showcase |
| Experience | `#experience` | Work history + testimonials |
| Contact | `#contact` | Contact form |

---

## 🔮 Recommended Next Steps

1. **Replace `PORTFOLIO_DATA`** in `data.js` with your real info
2. **Connect the contact form** to a real backend (EmailJS, Formspree, etc.)
3. **Add a blog section** with Markdown rendering
4. **Implement dark/light mode toggle**
5. **Add project detail modals** for extended case studies
6. **Integrate real GitHub API** to pull live repository stats
7. **Add cursor spotlight effect** for extra visual flair
8. **SEO optimization** – add Open Graph meta tags

---

## 🚀 Deployment

To publish your portfolio, go to the **Publish tab** and click deploy. No build step required — the project runs entirely in the browser using React via CDN.

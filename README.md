# ⚡ NIKHIL KUMAR — Portfolio v2

<div align="center">

![Portfolio Banner](https://img.shields.io/badge/NIKHIL%20KUMAR-Frontend%20Developer-ff2244?style=for-the-badge&labelColor=040408&color=ff2244)

[![React](https://img.shields.io/badge/React-18-61DAFB?style=flat-square&logo=react&logoColor=white&labelColor=20232a)](https://react.dev)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS%203-38BDF8?style=flat-square&logo=tailwindcss&logoColor=white&labelColor=0f172a)](https://tailwindcss.com)
[![Three.js](https://img.shields.io/badge/Three.js-3D-black?style=flat-square&logo=threedotjs)](https://threejs.org)
[![Framer Motion](https://img.shields.io/badge/Framer-Motion-ff0055?style=flat-square&logo=framer)](https://www.framer.com/motion)
[![EmailJS](https://img.shields.io/badge/EmailJS-Contact%20Form-orange?style=flat-square)](https://emailjs.com)
[![Vite](https://img.shields.io/badge/Vite-Build-646CFF?style=flat-square&logo=vite)](https://vitejs.dev)
[![Vercel](https://img.shields.io/badge/Deploy-Vercel-black?style=flat-square&logo=vercel)](https://vercel.com)

> **"Every project I ship is an obsession over clean code, pixel-perfect UI, and blazing performance."**

🌐 **[View Live →](https://your-portfolio.vercel.app)**

</div>

---

## ✨ Features

| Feature | Details |
|---|---|
| 🎯 Custom Cursor | Glowing red dot + animated ring trail |
| ⚡ Animated Loader | NK rings + gradient progress bar |
| 🌌 3D Hero Canvas | Rotating Torus, Icosahedron, Octahedron + 800-particle galaxy |
| 🔄 3D About Ring | Three.js interactive ring with orbit dots |
| 🃏 3D Tilt Cards | Mouse-following perspective tilt on project cards |
| 🔤 Glitch Effect | Periodic cyan/red glitch on hero name |
| 🌗 Dark/Light Mode | Smooth toggle with OS preference detection + localStorage |
| 📬 Contact Form | EmailJS powered — real emails, no backend needed |
| 📄 Resume Download | One-click PDF download from navbar + contact section |
| 📊 CountUp Stats | Animated numbers on scroll intersection |
| 🌀 Type Animation | Rotating role titles in hero |
| 📋 Click-to-Copy | Email copy with toast notification |
| 📱 Fully Responsive | Mobile-first, works on all devices |

---

## 🗂️ Project Structure

```
nikhil-portfolio/
├── public/
│   ├── favicon.svg
│   └── Nikhil_Kumar_Resume.pdf    ← ✅ PUT YOUR RESUME HERE
├── src/
│   ├── components/
│   │   ├── Cursor.jsx
│   │   ├── Navbar.jsx             ← ThemeToggle + Resume download
│   │   ├── Hero.jsx               ← 3D Canvas + Glitch + TypeAnimation
│   │   ├── StatsBar.jsx
│   │   ├── About.jsx              ← 3D rotating ring
│   │   ├── Skills.jsx             ← Animated skill bars
│   │   ├── Projects.jsx           ← 3D tilt cards + live links
│   │   ├── Experience.jsx         ← Timeline
│   │   ├── Contact.jsx            ← EmailJS form + Resume download
│   │   ├── ThemeToggle.jsx        ← 🌗 Dark/Light switch
│   │   └── Footer.jsx
│   ├── context/
│   │   └── ThemeContext.jsx       ← Global theme state
│   ├── data/
│   │   └── index.js               ← ✅ Edit projects/skills/experience here
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css                  ← CSS variables for dark/light themes
├── index.html
├── vite.config.js
├── tailwind.config.js
└── package.json
```

---

## 🚀 Getting Started

```bash
# 1. Clone or unzip
cd nikhil-portfolio

# 2. Install all dependencies
npm install

# 3. Start dev server
npm run dev
# Open → http://localhost:5173
```

---

## 📬 EmailJS Setup (FREE — 200 emails/month)

1. Go to **[emailjs.com](https://emailjs.com)** → Sign up free
2. **Add a Service** → Connect Gmail → copy `SERVICE_ID`
3. **Create a Template** → Use these variables in your template:
   ```
   From: {{from_name}} ({{from_email}})
   Subject: {{subject}}
   Message: {{message}}
   ```
   Copy `TEMPLATE_ID`
4. **Account → API Keys** → copy `PUBLIC_KEY`
5. Open `src/components/Contact.jsx` and replace:
   ```js
   const EMAILJS_SERVICE_ID  = 'service_xxxxxx'   // your service ID
   const EMAILJS_TEMPLATE_ID = 'template_xxxxxx'  // your template ID
   const EMAILJS_PUBLIC_KEY  = 'xxxxxxxxxxxx'      // your public key
   ```

---

## 📄 Resume Download Setup

1. Export your resume as PDF
2. Name it exactly: `Nikhil_Kumar_Resume.pdf`
3. Place it in the `/public/` folder
4. Done! The download button in Navbar + Contact will work automatically.

---

## 🔗 Add Your Project Live Links

Open `src/data/index.js` and update:

```js
{
  title: 'DataExplorer Pro',
  live:   'https://YOUR-VERCEL-LINK.vercel.app',   // ← replace
  github: 'https://github.com/nikhilandc/YOUR-REPO', // ← replace
}
```

---

## 🌗 Dark / Light Mode

- Toggle button is in the **Navbar** (top right)
- Preference is **saved in localStorage** — remembered on next visit
- Detects **OS preference** on first load
- All colors use **CSS variables** — smooth animated transitions

---

## 🚀 Deploy to Vercel

```bash
# Option 1 — Vercel CLI
npm install -g vercel
vercel --prod

# Option 2 — GitHub (recommended)
# 1. Push to GitHub
git init
git add .
git commit -m "🚀 Portfolio launch"
git remote add origin https://github.com/nikhilandc/nikhil-portfolio.git
git push -u origin main

# 2. Go to vercel.com/new
# 3. Import GitHub repo
# 4. Build Command: npm run build
# 5. Output Directory: dist
# 6. Deploy!
```

---

## 📁 All Projects

| # | Project | Tech | Live |
|---|---|---|---|
| 01 | DataExplorer Pro | React 18, REST API, Auth | [Live](https://your-link.vercel.app) |
| 02 | PageCraft | React 18, DnD | [Live](https://your-link.vercel.app) |
| 03 | Admin Panel + AI | React, OpenAI GPT | [Live](https://admin-panel-with-ai-fszl.vercel.app) |
| 04 | BeautyAI | React, Stripe | [Live](https://your-link.vercel.app) |
| 05 | Design System | TypeScript, Storybook | [Live](https://design-system-with-storybook-ten.vercel.app) |
| 06 | VideoFeed App | React, CSS3 | [Live](https://your-link.vercel.app) |
| 07 | Netflix & YouTube Clone | React, API | [Live](https://your-link.vercel.app) |

---

## 👤 About

**Nikhil Kumar** · B.Sc. Electronics · Acharya Narendra Dev College, Delhi University

- 🏆 Top 3 — IIITD Infronix Hackathon
- 🔬 Intern — DRDO–SSPL (PCB Design + Frequency Control)
- 📊 Research Intern — FITT IIT Delhi × NITI Aayog
- 📣 Market Research Intern — DevTown
- 🛠️ IT Volunteer — PlastIndia

📧 nk5434802@gmail.com · 📞 +91 98214 32989

---

<div align="center">
Made by <strong>Nikhil Kumar</strong>
</div>

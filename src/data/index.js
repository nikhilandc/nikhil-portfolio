export const GITHUB_USERNAME = 'nikhilandc'

export const projects = [
  {
    id: 1, num: '01', featured: true,
    title:    'DataExplorer Pro',
    subtitle: 'Product Browser & Dashboard',
    desc:     'Production-grade product browser with global state, client-side auth, protected routing, glassmorphism UI, cart persistence, dark/light mode, skeleton loaders and toast notifications.',
    tags:     ['React 18', 'Tailwind CSS', 'REST API', 'Auth', 'localStorage'],
    live:     'https://data-explorer-pro-rho.vercel.app/',
    github:   'https://github.com/nikhilandc/data-explorer-pro',
    color:    '#ff2244',
  },
  {
    id: 2, num: '02', featured: false,
    title:    'PageCraft',
    subtitle: 'Drag & Drop Page Builder',
    desc:     'Production-grade drag-and-drop personal page builder with complex interactive state management and premium dark-theme UI.',
    tags:     ['React 18', 'Tailwind CSS 3', 'Drag & Drop', 'State Management'],
    live:     'https://dynamic-conten.vercel.app',
    github:   'https://github.com/nikhilandc/dynamic-conten',
    color:    '#ffd166',
  },
  {
    id: 3, num: '03', featured: false,
    title:    'Admin Panel',
    subtitle: 'AI-Powered Dashboard',
    desc:     'Full-featured admin dashboard with sales analytics, role-based access control, and OpenAI GPT chat assistant for real-time business insights.',
    tags:     ['React.js', 'OpenAI API', 'RBAC', 'Vercel'],
    live:     'https://admin-panel-with-ai-fszl.vercel.app/',
    github:   'https://github.com/nikhilandc/admin-panel-with-ai',
    color:    '#00f5d4',
  },
  {
    id: 4, num: '04', featured: false,
    title:    'BeautyAI',
    subtitle: 'Global Beauty Standards Platform',
    desc:     'AI-powered beauty analysis across 6 global standards with e-commerce cart, Stripe checkout and personalized skincare recommendations.',
    tags:     ['React.js', 'AI API', 'Stripe', 'E-Commerce'],
    live:     'https://beauty-ai-dusky.vercel.app/',
    github:   'https://github.com/nikhilandc/Beauty-Ai',
    color:    '#ff6680',
  },
  {
    id: 5, num: '05', featured: false,
    title:    'Design System',
    subtitle: 'Storybook Component Library',
    desc:     'WCAG 2.1 compliant design system with design tokens, TypeScript, dark mode, focus management and full Storybook documentation.',
    tags:     ['React', 'TypeScript', 'Tailwind CSS', 'Storybook', 'WCAG 2.1'],
    live:     'https://design-system-with-storybook-ten.vercel.app/',
    github:   'https://github.com/nikhilandc/design-system-with-storybook_',
    color:    '#a78bfa',
  },
  {
    id: 6, num: '06', featured: false,
    title:    'VideoFeed App',
    subtitle: 'Vertical Video Experience',
    desc:     'Fullscreen snap-scrolling vertical video feed with likes, comments, share, view counts, creator profiles and keyboard controls.',
    tags:     ['React.js', 'CSS3', 'JavaScript', 'Social Features'],
    live:     'https://video-feed-app-izlw.vercel.app/',
    github:   'https://github.com/nikhilandc/VideoFeed-App',
    color:    '#ffd166',
  },
  {
    id: 7, num: '07', featured: false,
    title:    'Netflix & YouTube Clones',
    subtitle: 'Streaming Platform Replicas',
    desc:     'Functional clones of Netflix and YouTube with authentication, content management, streaming UI and dynamic content rendering.',
    tags:     ['React.js', 'CSS3', 'API Integration', 'Auth'],
    live:     'https://netflix-clone-peach-eight.vercel.app/',
    github:   'https://github.com/nikhilandc/Netflix-clone',
    color:    '#ff2244',
  },
]

export const skills = [
  { name:'React.js & JavaScript', icon:'⚛️', level:90, tags:['React 18','ES6+','TypeScript','Hooks','Context'] },
  { name:'CSS & Tailwind CSS',    icon:'🎨', level:88, tags:['Tailwind 3','CSS3','Glassmorphism','Animations'] },
  { name:'Dev Tools',             icon:'🛠️', level:82, tags:['Git','GitHub','Vercel','Figma','Storybook'] },
  { name:'AI & API Integration',  icon:'🤖', level:75, tags:['OpenAI API','REST APIs','Stripe','EmailJS'] },
  { name:'PCB & Electronics',     icon:'🔌', level:80, tags:['PCB Design','IoT','Embedded Systems','DRDO'] },
  { name:'Other Languages',       icon:'📊', level:65, tags:['Python','C++','SQL','AWS Basic'] },
]

export const experiences = [
  {
    period:'Jun – Jul 2025', color:'#ff2244',
    role:'Technical Intern', org:'DRDO – SSPL, Delhi', sub:'Defence Research & Development Organisation',
    bullets:['Worked on Frequency Control System in a professional R&D environment','Designed PCB layouts alongside experienced DRDO researchers'],
  },
  {
    period:'May – Aug 2025', color:'#ffd166',
    role:'Research Intern', org:'FITT, IIT Delhi', sub:'NITI Aayog Collaboration',
    bullets:['Analyzed research data on Innovation & Entrepreneurship in State Public Universities','Contributed to field coordination and reporting at Maharishi Dayanand University'],
  },
  {
    period:'2024 — 1 Month', color:'#00f5d4',
    role:'Market Research Intern', org:'DevTown', sub:'Campus Ambassador',
    bullets:['Conducted competitive market research and user insight analysis for tech products','Compiled and interpreted market data reports for data-driven decisions'],
  },
  {
    period:'2024', color:'#ff6680',
    role:'IT Support Volunteer', org:'PlastIndia', sub:'National Large-Scale Industry Event',
    bullets:['Ensured smooth operation of technical systems and digital infrastructure','Provided real-time on-site troubleshooting for hardware, software, and network issues'],
  },
]

export const stats = [
  { num:7,  label:'Live Projects',  suffix:'+' },
  { num:3,  label:'Internships',    suffix:''  },
  { num:2,  label:'Years Building', suffix:'+' },
  { num:3,  label:'Hackathon Rank', suffix:'rd'},
]

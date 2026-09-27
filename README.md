# Simangele Tutubala | Junior Software Developer Portfolio

> **Junior Software Developer | Girl in Tech | Building practical, user-focused web applications**  
> *Building practical web applications with React, JavaScript, Python, and Node.js.*

[![React 19](https://img.shields.io/badge/React-19.0-61DAFB?logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS v4](https://img.shields.io/badge/Tailwind_CSS-v4.0-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Vite-6.x-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![Women in Tech](https://img.shields.io/badge/Women_Techsters-Fellow-E11D48?logo=heart&logoColor=white)](https://womentechsters.org/)

---

## 🌟 Overview

This repository houses the modern developer portfolio website for **Simangele Tutubala**, showcasing hands-on full-stack and frontend applications, technical proficiencies, learning trajectory, and transferable engineering strengths gained through a Bachelor of Education in Mathematics & Technology.

Rather than static mockups, the portfolio features **built-in interactive live sandbox simulators** for featured projects, an on-screen printable **Curriculum Vitae modal**, and a high-taste aesthetic tailored for modern engineering recruiters.

---

## 🚀 Key Features

* **Empowering Girl in Tech Identity**: Celebrates women in STEM and the Women Techsters fellowship, blending technical rigor with inclusivity and clear communication.
* **Interactive Live Project Demos**: Built-in interactive sandboxes allowing recruiters to test project functionality directly on any device without external broken links:
  * **MathSpark**: Interactive Grade 4 fraction visualizer and multi-step multiplication decomposition quest.
  * **FreshBite**: Synchronous shopping cart with real-time recalculation, tax/delivery thresholds, and checkout modal.
  * **Fitness Challenge Tracker**: Dynamic activity logger, streak calculation, and community leaderboard ranking.
* **Interactive CV / Resume Modal**: An accessible, printable Curriculum Vitae view with 1-click email copy and browser print/save-to-PDF support.
* **Component-Driven Architecture**: Fully modular React 19 + TypeScript components adhering to clean code and single responsibility principles.
* **Anti-Slop Design Discipline**: Follows universal frontend design standards:
  * Zero-pill metadata formatting with clean typographic separators (`·` and `/`).
  * 3-zone Top Bar Contract and single-line truncated controls.
  * 60-30-10 color distribution (Midnight violet canvas `#0A0816`, purple-slate surfaces `#0E0C1C`, vibrant rose/fuchsia accents).
  * High-performance compositor-only animations via `motion`.
* **SEO & Structured Data**: Pre-configured OpenGraph social sharing tags and JSON-LD Schema.org structured data (`ProfilePage` and `Person` entities).

---

## 📂 Featured Projects Highlighted

### 1. [MathSpark](https://github.com/simangeletutubala/mathspark) — *Grade 4 Mathematics Learning Platform*
* **Core Tech**: React, JavaScript, Tailwind CSS, Component State, Web Audio API
* **Problem Solved**: Bridges the gap between abstract arithmetic and young learners through interactive spatial models, pedagogical decomposition, and immediate visual feedback.
* **Key Demonstration**: Empathetic UX design, modular state machines, and translating educational theory into software.

### 2. [FreshBite](https://github.com/simangeletutubala/freshbite-order) — *Responsive Online Food-Ordering & Cart*
* **Core Tech**: React, Node.js, Express, Context API, CSS Grid / Flexbox
* **Problem Solved**: End-to-end food delivery catalog with dietary filtering, order modifiers, persistent cart calculations, and step-based checkout.
* **Key Demonstration**: Real-time state synchronization, price math precision, and cross-device responsiveness.

### 3. [Fitness Challenge Tracker](https://github.com/simangeletutubala/fitness-challenge-tracker) — *Full-Stack Goal Tracking & Leaderboard*
* **Core Tech**: React, Node.js, Express, MongoDB / SQL, REST APIs
* **Problem Solved**: Allows users to join community challenges, log daily activities with input validation, track completion streaks, and view dynamic leaderboards.
* **Key Demonstration**: Algorithmic ranking calculations, asynchronous log syncing, and lightweight progress visualization.

---

## 🛠️ Technical Stack

| Layer | Technologies |
| :--- | :--- |
| **Frontend** | React 19, TypeScript, JavaScript (ES6+), HTML5, CSS3, Tailwind CSS v4 |
| **Backend Knowledge** | Node.js, Express, Python, RESTful API Design |
| **Databases** | SQL (PostgreSQL/MySQL fundamentals), MongoDB |
| **Tooling & Workflow** | Git, GitHub, VS Code, Vite, npm, Postman |
| **UI & Animation** | Lucide React, Motion (Framer Motion v12) |

---

## 📁 Repository Structure

```text
simangele-portfolio/
├── index.html                 # HTML entry point with Schema.org JSON-LD & OpenGraph meta
├── metadata.json              # Application metadata & configuration
├── package.json               # Project dependencies and npm scripts
├── tsconfig.json              # TypeScript strict configuration
├── vite.config.ts             # Vite build configuration with Tailwind CSS v4 plugin
├── public/                    # Static assets
└── src/
    ├── main.tsx               # React root entry point
    ├── App.tsx                # Main container integrating sections and modal state
    ├── index.css              # Global styles, fonts (Outfit & Plus Jakarta Sans), Tailwind
    ├── types.ts               # TypeScript data interfaces for projects, skills, journey
    ├── assets/
    │   └── images/            # Developer portrait and visual assets
    ├── data/
    │   └── portfolioData.ts   # Centralized data store for bio, projects, skills, education
    └── components/
        ├── Navbar.tsx         # 3-zone responsive top navigation bar
        ├── Hero.tsx           # Hero section with developer portrait, positioning, code tab
        ├── About.tsx          # About story and Women in STEM advocacy callouts
        ├── Skills.tsx         # Categorized skills grid with interactive filter tabs
        ├── Projects.tsx       # Featured project showcase cards with demo launcher
        ├── ProjectDemoModal.tsx # Interactive sandbox simulators (MathSpark, FreshBite, Fitness)
        ├── Journey.tsx        # Deliberate timeline (Women Techsters, CodSoft, Tech4Dev)
        ├── Experience.tsx     # Transferable engineering strengths from Educator background
        ├── Education.tsx      # B.Ed degree & software engineering certificates
        ├── Contact.tsx        # Direct contact channels, copy email, and message form
        ├── ResumeModal.tsx    # Printable on-screen Curriculum Vitae viewer
        └── Footer.tsx         # Quiet footer with social links and back-to-top action
```

---

## 💻 Getting Started Locally

### Prerequisites

* [Node.js](https://nodejs.org/) (version 18.x or higher recommended)
* `npm` (version 9.x or higher)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/simangeletutubala/portfolio.git
   cd portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Launch the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to:
   ```text
   http://localhost:3000
   ```

### Production Build & Linting

* **Build for Production**:
  ```bash
  npm run build
  ```
* **Type-check & Lint**:
  ```bash
  npm run lint
  ```

---

## 👩🏾‍💻 About Simangele Tutubala

* **Role**: Junior Software Developer
* **Background**: Bachelor of Education (Senior Phase: Mathematics & Technology)
* **Training**: Women Techsters Software Engineering Fellowship, CodSoft Web Dev Internship, Tech4Dev Software Program
* **Philosophy**: Clean code, empathetic UX, and continuous learning. Translating mathematical proofs and educational clarity into resilient digital applications.

---

## 📬 Contact & Connect

* **Email**: [smangelent@gmail.com](mailto:smangelent@gmail.com)
* **GitHub**: [@simangeletutubala](https://github.com/simangeletutubala)
* **LinkedIn**: [in/simangele-tutubala](https://linkedin.com/in/simangele-tutubala)
* **Availability**: Open for Junior Software Developer, Frontend Developer, and Full-Stack roles (Remote or Hybrid).

---

## 📄 License

This project is licensed under the Apache-2.0 License.

# Ehsan Saeedizade Portfolio Website

Personal portfolio website built with React, TypeScript, and Vite. This project presents my profile, research background, skills, experience, publications, certificates, awards, and professional services in a fast, responsive single-page interface.

## About

This website is designed to serve as a central hub for my academic and professional work.

It includes:

- Personal introduction and contact information
- Skills across software engineering, cloud, and research domains
- Work and teaching experience
- Publications and academic activity
- Certificates, awards, and services
- Social links (GitHub, LinkedIn, Google Scholar, ResearchGate)

## Tech Stack

- React 19
- TypeScript
- Vite
- Tailwind CSS 4
- Motion (for animations)
- Lucide React and React Icons

## Project Structure

```text
.
├── src/
│   ├── data/                # Portfolio content datasets
│   │   ├── personalInfo.ts
│   │   ├── education.ts
│   │   ├── skills.ts
│   │   ├── workExperience.ts
│   │   ├── teachingExperience.ts
│   │   ├── publications.ts
│   │   ├── certificates.ts
│   │   ├── awards.ts
│   │   └── services.ts
│   ├── App.tsx              # Main UI and section rendering
│   ├── index.css            # Global styles
│   └── main.tsx             # App entry point
├── images/                  # Static image assets
├── index.html
├── package.json
└── README.md
```

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Installation

```bash
npm install
```

### Run in Development

```bash
npm run dev
```

The app runs at `http://localhost:3000`.

### Build for Production

```bash
npm run build
```

Build output will be generated in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

### Type Check

```bash
npm run lint
```

## Customization

Most portfolio content is data-driven and can be updated without changing UI components.

Update these files to personalize content:

- `src/data/personalInfo.ts`
- `src/data/education.ts`
- `src/data/skills.ts`
- `src/data/workExperience.ts`
- `src/data/teachingExperience.ts`
- `src/data/publications.ts`
- `src/data/certificates.ts`
- `src/data/awards.ts`
- `src/data/services.ts`

To update profile images, replace or add assets under `images/` and reference them in the data files.

## Deployment

This is a static frontend app. You can deploy the contents of `dist/` to any static hosting provider, such as:

- GitHub Pages
- Netlify
- Vercel
- Cloudflare Pages
- Apache/Nginx static hosting

## Contact

- Email: e24saeedi@gmail.com
- LinkedIn: https://www.linkedin.com/in/ehsansaeedizade/
- GitHub: https://github.com/EhsanSaZ
- Google Scholar: https://scholar.google.com/citations?user=RKRvkz8AAAAJ&hl=en
- ResearchGate: https://www.researchgate.net/profile/Ehsan-Saeedizade

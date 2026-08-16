# Divyanshu Sharma — Portfolio

A single-page, responsive portfolio website that mimics a **macOS desktop** on large screens and an **iPhone home screen** on mobile. Built with React (plain JSX, no TypeScript), Tailwind CSS, and Framer Motion. 100% static — no backend, no database.

## Features

- macOS-style menu bar with live clock, translucent top bar, and dock with hover-bounce animation.
- Draggable windows with traffic-light controls (close / minimize / maximize) and open/close animations.
- Launchpad-style full-screen overlay revealing **Education** and **Experience** apps.
- Profile "Finder" window with bio, skills, and social links.
- Project icons deep-link straight to their GitHub repos in a new tab.
- `mailto:` contact link and direct resume PDF download — no server required.
- iPhone-style home screen layout (4-column app grid + bottom dock) below 768px width, with slide-up modal app transitions.

## Getting Started

```bash
npm install
npm run dev
```

Open the local URL printed in the terminal.

## Build

```bash
npm run build
npm run preview
```

## Deploy

### Vercel
Import this repository into [Vercel](https://vercel.com/new) — it auto-detects the Vite project. No environment variables required.

### GitHub Pages
```bash
npm run deploy
```
This uses the `gh-pages` package to publish the `dist/` folder to the `gh-pages` branch. Update the `homepage` field in `package.json` if you rename the repository.

## Project Structure

```
src/
  components/
    MenuBar.jsx        top macOS-style menu bar
    Dock.jsx             bottom dock (desktop)
    Window.jsx           draggable window shell
    Launchpad.jsx        full-screen grid overlay
    ProfileFolder.jsx    profile "Finder" window content
    EducationApp.jsx     education window content
    ExperienceApp.jsx    experience + achievements window content
    MobileHome.jsx       iPhone-style layout
    icons.jsx            inline SVG icon set
  data/
    portfolioData.js     all résumé content (edit here)
  hooks/
    useMediaQuery.js      responsive breakpoint hook
  App.jsx
  main.jsx
public/
  resume.pdf             replace with your real résumé
```

## Customization

- Edit `src/data/portfolioData.js` to update bio, skills, projects, education, experience, achievements, and social links (LinkedIn/LeetCode placeholders included).
- Replace `public/resume.pdf` with your actual résumé (same filename, wired to the download button).
- Wallpaper colors and frosted-glass effects live in `src/index.css`.

## Tech Stack

React 18 (JSX) · Vite · Tailwind CSS · Framer Motion — no TypeScript, no backend, no environment variables.

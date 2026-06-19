# Academic Portfolio Website

A single-page academic portfolio website for **Dr. Arvind Kumar Jha**, Associate Professor at the Department of Civil & Environmental Engineering, IIT Patna.

## About

Dr. Arvind Kumar Jha is a researcher and educator specializing in Geotechnical and Geoenvironmental Engineering. His research spans areas including:

- Geotechnical & Geoenvironmental Engineering
- Ground Improvement Techniques
- Soil Stabilization by Admixtures
- Environmental Geotechnics & Bio-Geotechnics
- Transportation Geotechnics
- Rock Mechanics and Underground Excavation

He holds a Doctorate from the Indian Institute of Science (IISc), Bangalore, and has over **1000+ citations** across **22+ publications**. He is a member of several professional bodies including ASCE, IGS, ISET, and the Nepal Geotechnical Society.

---

A single-page academic portfolio web application built with React, TypeScript, and Tailwind CSS.

## Tech Stack

- **Framework**: React 19 + TypeScript
- **Bundler**: Vite
- **Styling**: Tailwind CSS v4
- **Icons**: Lucide React

## Features

- Responsive sidebar navigation with mobile hamburger menu
- Sections: Home, Research, Teaching, Publications, Education, Activities, Achievement, Miscellaneous, Contact
- Smooth section transitions with fade-in animation
- Data-driven — all content loaded from a central `data.json`

## Getting Started

### Prerequisites

- Node.js (v18+)
- npm

### Install & Run

```bash
npm install
npm run dev
```

### Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
src/
├── assets/          # Static assets (images, logos)
├── components/      # Shared UI components
├── pages/           # Section-level page components
├── data.json        # All site content
├── App.tsx          # Root layout & navigation
└── main.tsx         # Entry point
```

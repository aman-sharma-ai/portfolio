# Aman Sharma | Portfolio

Personal portfolio website of Aman Sharma, AI Engineer and Full-Stack Developer.

![Next.js](https://img.shields.io/badge/Next.js-16-000000?style=flat-square&logo=nextdotjs&logoColor=white)
![React](https://img.shields.io/badge/React-19-20232A?style=flat-square&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-4-0F172A?style=flat-square&logo=tailwindcss&logoColor=38BDF8)

## Overview

A single-page, statically rendered site with sections for professional experience, open-source projects, technical skills and contact details. It is built with the Next.js App Router and Tailwind CSS, uses the Geist typeface, and includes scroll-triggered animations that respect the reduced-motion setting.

## Project Structure

| Path | Purpose |
|---|---|
| `lib/data.ts` | All site content: profile, experience, projects and skills |
| `app/page.tsx` | Page layout and sections |
| `app/layout.tsx` | Fonts, metadata and the root layout |
| `app/globals.css` | Theme tokens, background effects and animations |
| `components/` | Reusable components (scroll reveal and icons) |

To update the content, edit `lib/data.ts` only. The layout reads everything from that file.

## Running Locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## Deployment

The site is deployed on [Vercel](https://vercel.com). Every push to the `main` branch triggers a new production deployment automatically.

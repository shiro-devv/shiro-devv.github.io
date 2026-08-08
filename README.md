# shiro-devv.github.io

**Personal portfolio & CV** — an Awwwards-tier digital identity built with Astro, Tailwind CSS, and a obsessive attention to micro-interaction detail.
---

## Design

| Layer | Approach |
|---|---|
| **Vibe** | Ethereal Glass — deep OLED backgrounds, radial mesh gradient orbs, frosted glass panels |
| **Layout** | Asymmetrical Bento — CSS Grid with varying card spans, massive whitespace (`py-28 md:py-36`) |
| **Typography** | Geist (body) + Clash Display (headings) — zero generic fonts |
| **Icons** | Remix Line — ultra-light strokes only |
| **Architecture** | Double-Bezel (Doppelrand) — nested outer-shell/inner-core with concentric radii, hairlines, and inset highlights |
| **Navigation** | Fluid Island pill nav — hamburger morphs to X, full-screen overlay with staggered link reveals, integrated theme toggle |

### Motion

- **Scroll reveals** — IntersectionObserver-driven fade-up with blur (`cubic-bezier(0.16, 1, 0.3, 1)`)
- **Stagger cascades** — list items animate in sequentially (`--i * 80ms` delay)
- **Typewriter** — hero subtitle cycles through roles; quote types out on scroll-into-view
- **Kinetic marquee** — endless scrolling text band in the page footer
- **Magnetic hover** — buttons scale up with diffused shadow bloom, icons translate diagonally
- **Theme transition** — view-transition API with circular clip-path morph

---

## Stack

- **[Astro](https://astro.build/)** — static site generation
- **[TypeScript](https://www.typescriptlang.org/)** — type safety
- **[Tailwind CSS](https://tailwindcss.com/)** — utility-first styling (v3)
- **[astro-icon](https://github.com/natemoo-re/astro-icon)** — Iconify integration (Remix + Simple Icons)
- **[Fancybox](https://fancyapps.com/fancybox/)** — lightbox gallery
- **[HotkeyPad](https://github.com/ssleptsov/hotkeypad)** — keyboard command palette (`Cmd+K`)
- **[ArtPlum](https://github.com/antfu/)** — canvas generative art by antfu

---

## Getting started

### 1. Clone & install

```bash
git clone https://github.com/shiro-devv/shiro-devv.github.io.git
cd shiro-devv.github.io
npm install
```

### 2. Add your content

Edit `cv.json` — follows the [JSON Resume](https://jsonresume.org/schema/) schema. Fields:

`basics.name` · `basics.label` · `basics.image` · `basics.summary` · `basics.qoute` · `basics.location` · `basics.profiles` · `work[]` · `education[]` · `skills[]` · `certificates[]` · `images`

### 3. Colour themes

Set `basics.theme` in `cv.json` to one of: `blue`, `red`, `orange`, `green`, `cyber`, `pink`. Each has light and dark variants defined in `src/globals.css`.

### 4. Run

```bash
npm run dev
```

Open `http://localhost:4321`.

---

## Commands

| Command | Action |
|---|---|
| `npm run dev` | Start dev server at `localhost:4321` |
| `npm run build` | Type-check + build to `./dist/` |
| `npm run preview` | Preview production build |
| `npm run deploy:vercel` | Deploy to Vercel |
| `npm run deploy:cloudflare` | Deploy to Cloudflare (`wrangler login` first) |

---

## License

MIT — see [LICENSE](./LICENSE).

---

*Forked from [dev-portfolio](https://github.com/Smilesharks/dev-portfolio). Canvas plum animation by [antfu](https://github.com/antfu).*

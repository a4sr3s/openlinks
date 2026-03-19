# OpenLinks

A modern, customizable landing page built with **Astro 6** + **Tailwind CSS 4**. AI-first — use Claude to customize it in seconds.

[![Deploy to DO](https://www.deploytodo.com/do-btn-blue.svg)](https://cloud.digitalocean.com/apps/new?repo=https://github.com/your-username/openlinks/tree/main)

## Features

- **5 themes** with light/dark mode toggle: Midnight, Aurora, Sunset, Ocean, Minimal
- **Single config file**: Edit `src/config.ts` and you're done
- **Mobile-first**: Responsive on every screen size
- **Animated**: Entry animations, floating background orbs, hover effects
- **SEO ready**: Open Graph, Twitter cards, meta tags
- **Fast**: Static site, minimal JS (only the dark/light toggle)
- **10+ social icons**: GitHub, X/Twitter, LinkedIn, Instagram, YouTube, TikTok, Mastodon, Threads, Bluesky, and more

## Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:4321](http://localhost:4321) and edit `src/config.ts` to make it yours.

## Customizing with Claude

Open the project in [Claude Code](https://github.com/anthropics/claude-code) and describe what you want. Some examples:

**Profile & theme:**
```
Set my name to "Jane Smith", tagline to "Designer & Developer", and theme to "aurora".
```

**Add links:**
```
Add a link titled "My Podcast" with URL "https://podcast.example.com",
icon "🎙️", and description "Weekly episodes on tech and design".
```

**Socials:**
```
Add my Bluesky (https://bsky.app/profile/jane.bsky.social) and remove Twitter.
```

**Full setup in one shot:**
```
Here's my info:
- Name: Jane Smith
- Tagline: "Design systems by day, open source by night"
- Theme: ocean
- Links:
  1. Portfolio (https://janesmith.com) 🎨 "Design & dev portfolio"
  2. GitHub (https://github.com/janesmith) 💻 "Open source projects"
  3. Blog (https://blog.janesmith.com) ✍️ "Writing about design systems"
- Socials: github, linkedin, bluesky
- Site URL: https://links.janesmith.com
```

**Create a custom theme:**
```
Create a theme called "forest" with deep greens and gold accents.
```

## Project Structure

```
openlinks/
├── .do/
│   └── app.yaml              # DigitalOcean App Platform config
├── public/
│   └── avatar.svg            # Default avatar (replace with your image)
├── src/
│   ├── config.ts              # ← Edit this to customize everything
│   ├── components/
│   │   ├── themes.ts          # Theme definitions (dark + light)
│   │   └── SocialIcon.astro   # Social media icons
│   ├── pages/
│   │   └── index.astro        # Main page template
│   └── styles/
│       └── global.css         # Tailwind imports
├── astro.config.mjs
└── package.json
```

## Themes

All themes support both dark and light modes, toggled via the sun/moon button.

| Theme | Description |
|-------|-------------|
| `midnight` | Indigo/slate with purple accents |
| `aurora` | Teal/emerald with green glow |
| `sunset` | Orange-to-purple warm gradient |
| `ocean` | Blue/cyan with sky accents |
| `minimal` | Neutral stone tones |

Set your theme in `src/config.ts`:

```ts
theme: "aurora",
```

## Deploy

### DigitalOcean App Platform (recommended)

1. Fork this repo
2. Go to [DigitalOcean App Platform](https://cloud.digitalocean.com/apps)
3. Click **Create App** and connect your forked repo
4. App Platform auto-detects the config from `.do/app.yaml`
5. Click **Deploy**

> Replace `your-username` in the deploy button URL and `.do/app.yaml` with your GitHub username.

## Commands

| Command           | Action                                 |
| :---------------- | :------------------------------------- |
| `npm install`     | Install dependencies                   |
| `npm run dev`     | Start dev server at `localhost:4321`   |
| `npm run build`   | Build production site to `./dist/`     |
| `npm run preview` | Preview build locally before deploying |

## License

MIT

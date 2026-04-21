# Sacred Words Daily

A devotional web app drawing from scripture, poetry, and sacred traditions across world religions — words, names, places, numbers, fruits, and more. Built with Vue 3, TypeScript, and Vite.

## Pages

| Route | Page | Description |
| --- | --- | --- |
| `/` | Home | Landing page with daily inspiration |
| `/bible-verses` | Bible Verses | Scripture reference collection |
| `/poetry` | Poetry | Devotional poems |
| `/quotes` | Inspirational Quotes | Curated inspirational quotes |
| `/youtube-quotes` | YouTube Quotes | Quotes from YouTube messages |
| `/ted-talks` | TED Talks | Spiritually relevant TED Talks |
| `/sacred-words` | Sacred Words | 100+ theological words with meanings and scripture |
| `/sacred-names` | Sacred Names | 44 sacred names across 6 categories |
| `/sacred-places` | Sacred Places | 30 holy locations with religious significance |
| `/sacred-numbers` | Sacred Numbers | 27 numbers and their symbolic meaning |
| `/sacred-fruits` | Sacred Fruits | 25 fruits and their role in sacred texts |
| `/about` | About | Mission, purpose, and background |
| `/contact` | Contact | Contact form and direct contact info |

## Features

- **Word of the Day** — Daily rotating word from the Sacred Words collection, shown in a banner on every page
- **Search** — Filter entries by text on all sacred content pages
- **Category filters** — Browse by themed categories on each sacred page
- **Responsive design** — Mobile-friendly card grid layout with collapsible hamburger nav
- **Sacred dropdown nav** — All content pages grouped under a single Sacred dropdown
- **Contact form** — Client-side validated form with Formspree integration

## Data

All sacred content lives in `src/data/`:

- `sacredWords.ts` — 100+ words across 7 categories
- `sacredNames.ts` — 44+ names across 6 categories (Names of Jesus, Names of God, Patriarchs & Prophets, Apostles & Disciples, Women of Faith, Angels & Celestial Beings — including 5 angels from the Book of Enoch)
- `sacredPlaces.ts` — 30 places across 5 categories (Gardens & Wilderness, Mountains, Cities & Villages, Waters & Rivers, Temples & Sacred Sites)
- `sacredNumbers.ts` — 27 numbers across 4 categories (Divine Perfection, Covenant & Promise, Trial & Testing, Completion & Rest)
- `sacredFruits.ts` — 25 fruits across 5 categories (Garden & Paradise, Prophets & Wilderness, Sacred Rites & Covenant, Eastern Sacred Traditions, Healing & Sacred Provision)

## Project Setup

```sh
npm install
```

### Development

```sh
npm run dev
```

### Build for Production

```sh
npm run build
```

### Preview Production Build

```sh
npm run preview
```

## Tech Stack

- [Vue 3](https://vuejs.org/) with `<script setup>` + TypeScript
- [Vue Router](https://router.vuejs.org/)
- [Vite](https://vite.dev/)
- Deployed on [Netlify](https://www.netlify.com/)

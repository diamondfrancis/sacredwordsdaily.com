# Sacred Words Daily

A devotional web app exploring the language of scripture — words, names, places, and numbers that carry divine meaning. Built with Vue 3, TypeScript, and Vite.

## Pages

| Route | Page | Description |
| --- | --- | --- |
| `/` | Home | Landing page |
| `/poetry` | Poetry | Devotional poems |
| `/quotes` | Inspirational Quotes | Curated quotes |
| `/youtube-quotes` | YouTube Quotes | Quotes from YouTube messages |
| `/ted-talks` | TED Talks | Spiritually relevant TED Talks |
| `/bible-verses` | Bible Verses | Scripture reference collection |
| `/sacred-words` | Sacred Words | 100+ theological words with meanings and scripture |
| `/sacred-names` | Sacred Names | 44 sacred names across 6 categories |
| `/sacred-places` | Sacred Places | 30 biblical locations with significance |
| `/sacred-numbers` | Sacred Numbers | 27 numbers and their symbolic meaning |

## Features

- **Word of the Day** — Daily rotating word from the Sacred Words collection, shown in a banner on every page
- **Search** — Filter entries by text on all sacred content pages
- **Category filters** — Browse by themed categories on each sacred page
- **Responsive design** — Mobile-friendly card grid layout

## Data

All sacred content lives in `src/data/`:

- `sacredWords.ts` — 100+ words across 7 categories
- `sacredNames.ts` — 44 names across 6 categories (Names of Jesus, Names of God, Patriarchs & Prophets, Apostles & Disciples, Women of Faith, Angels & Celestial Beings)
- `sacredPlaces.ts` — 30 places across 5 categories (Gardens & Wilderness, Mountains, Cities & Villages, Waters & Rivers, Temples & Sacred Sites)
- `sacredNumbers.ts` — 27 numbers across 4 categories (Divine Perfection, Covenant & Promise, Trial & Testing, Completion & Rest)

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

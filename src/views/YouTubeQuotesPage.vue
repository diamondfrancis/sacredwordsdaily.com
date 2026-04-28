<script setup lang="ts">
import AppLayout from '../components/AppLayout.vue'
import ShareButtons from '../components/ShareButtons.vue'
import { ref, computed } from 'vue'

interface YouTubeQuote {
  text: string
  creator: string
  channel: string
  youtubeUrl: string
  category: string
}

const categories = [
  'All',
  'Mindset & Growth',
  'Success & Hustle',
  'Creativity & Content',
  'Life & Purpose',
  'Health & Science',
  'Financial Freedom',
]

const activeCategory = ref('All')

const quotes: YouTubeQuote[] = [
  // ── Mindset & Growth ──
  {
    category: 'Mindset & Growth',
    text: 'You have to be willing to do what others won\'t to have what others don\'t.',
    creator: 'MrBeast',
    channel: '@MrBeast',
    youtubeUrl: 'https://www.youtube.com/@MrBeast',
  },
  {
    category: 'Mindset & Growth',
    text: 'The only limits in life are the ones you make.',
    creator: 'Tom Bilyeu',
    channel: '@TomBilyeu',
    youtubeUrl: 'https://www.youtube.com/@TomBilyeu',
  },
  {
    category: 'Mindset & Growth',
    text: 'Your dream must be bigger than your fear.',
    creator: 'Lewis Howes',
    channel: '@LewisHowes',
    youtubeUrl: 'https://www.youtube.com/@LewisHowes',
  },
  {
    category: 'Mindset & Growth',
    text: 'The goal isn\'t to be the best in the world, it\'s to be the best for the world.',
    creator: 'Ali Abdaal',
    channel: '@aliabdaal',
    youtubeUrl: 'https://www.youtube.com/@aliabdaal',
  },
  {
    category: 'Mindset & Growth',
    text: 'Most people overestimate what they can do in a day and underestimate what they can do in a year.',
    creator: 'Ali Abdaal',
    channel: '@aliabdaal',
    youtubeUrl: 'https://www.youtube.com/@aliabdaal',
  },
  {
    category: 'Mindset & Growth',
    text: 'Obsessing over your craft is not a burden — it\'s the path.',
    creator: 'MrBeast',
    channel: '@MrBeast',
    youtubeUrl: 'https://www.youtube.com/@MrBeast',
  },
  {
    category: 'Mindset & Growth',
    text: 'The person who says they can and the person who says they can\'t are both usually right.',
    creator: 'Tom Bilyeu',
    channel: '@TomBilyeu',
    youtubeUrl: 'https://www.youtube.com/@TomBilyeu',
  },

  // ── Success & Hustle ──
  {
    category: 'Success & Hustle',
    text: 'Skills are cheap. Passion is priceless.',
    creator: 'GaryVee',
    channel: '@garyvee',
    youtubeUrl: 'https://www.youtube.com/@garyvee',
  },
  {
    category: 'Success & Hustle',
    text: 'Stop spending your one life on things that don\'t matter to you.',
    creator: 'GaryVee',
    channel: '@garyvee',
    youtubeUrl: 'https://www.youtube.com/@garyvee',
  },
  {
    category: 'Success & Hustle',
    text: 'Your greatness is not what you have, it\'s what you give.',
    creator: 'Lewis Howes',
    channel: '@LewisHowes',
    youtubeUrl: 'https://www.youtube.com/@LewisHowes',
  },
  {
    category: 'Success & Hustle',
    text: 'Excuses are the lies we tell ourselves so we don\'t have to do the hard work.',
    creator: 'Patrick Bet-David',
    channel: '@valuetainment',
    youtubeUrl: 'https://www.youtube.com/@valuetainment',
  },
  {
    category: 'Success & Hustle',
    text: 'Your choices in your 20s and 30s will define your 40s and 50s.',
    creator: 'Patrick Bet-David',
    channel: '@valuetainment',
    youtubeUrl: 'https://www.youtube.com/@valuetainment',
  },
  {
    category: 'Success & Hustle',
    text: 'Pressure creates diamonds. Embrace the grind.',
    creator: 'GaryVee',
    channel: '@garyvee',
    youtubeUrl: 'https://www.youtube.com/@garyvee',
  },
  {
    category: 'Success & Hustle',
    text: 'The most dangerous risk of all is the risk of spending your life not doing what you want.',
    creator: 'Lewis Howes',
    channel: '@LewisHowes',
    youtubeUrl: 'https://www.youtube.com/@LewisHowes',
  },

  // ── Creativity & Content ──
  {
    category: 'Creativity & Content',
    text: 'Create more than you consume.',
    creator: 'Casey Neistat',
    channel: '@CaseyNeistat',
    youtubeUrl: 'https://www.youtube.com/@CaseyNeistat',
  },
  {
    category: 'Creativity & Content',
    text: 'If the dream is big enough, the obstacles don\'t matter.',
    creator: 'Casey Neistat',
    channel: '@CaseyNeistat',
    youtubeUrl: 'https://www.youtube.com/@CaseyNeistat',
  },
  {
    category: 'Creativity & Content',
    text: 'People can tell when you genuinely care about what you\'re making.',
    creator: 'Marques Brownlee',
    channel: '@mkbhd',
    youtubeUrl: 'https://www.youtube.com/@mkbhd',
  },
  {
    category: 'Creativity & Content',
    text: 'Make the thing you wish existed in the world.',
    creator: 'Casey Neistat',
    channel: '@CaseyNeistat',
    youtubeUrl: 'https://www.youtube.com/@CaseyNeistat',
  },
  {
    category: 'Creativity & Content',
    text: 'Don\'t wait for permission to create. Start before you\'re ready.',
    creator: 'Peter McKinnon',
    channel: '@petermckinnon',
    youtubeUrl: 'https://www.youtube.com/@petermckinnon',
  },
  {
    category: 'Creativity & Content',
    text: 'Consistency beats talent when talent isn\'t consistent.',
    creator: 'Peter McKinnon',
    channel: '@petermckinnon',
    youtubeUrl: 'https://www.youtube.com/@petermckinnon',
  },

  // ── Life & Purpose ──
  {
    category: 'Life & Purpose',
    text: 'People don\'t buy what you do; they buy why you do it.',
    creator: 'Simon Sinek',
    channel: '@SimonSinek',
    youtubeUrl: 'https://www.youtube.com/@SimonSinek',
  },
  {
    category: 'Life & Purpose',
    text: 'Leadership is not about being in charge. It\'s about taking care of those in your charge.',
    creator: 'Simon Sinek',
    channel: '@SimonSinek',
    youtubeUrl: 'https://www.youtube.com/@SimonSinek',
  },
  {
    category: 'Life & Purpose',
    text: 'Life doesn\'t get easier — you just get stronger.',
    creator: 'Jay Shetty',
    channel: '@JayShetty',
    youtubeUrl: 'https://www.youtube.com/@JayShetty',
  },
  {
    category: 'Life & Purpose',
    text: 'Your setbacks are actually setups for your comeback.',
    creator: 'Jay Shetty',
    channel: '@JayShetty',
    youtubeUrl: 'https://www.youtube.com/@JayShetty',
  },
  {
    category: 'Life & Purpose',
    text: 'The quality of your questions determines the quality of your life.',
    creator: 'Jay Shetty',
    channel: '@JayShetty',
    youtubeUrl: 'https://www.youtube.com/@JayShetty',
  },
  {
    category: 'Life & Purpose',
    text: 'Start with why, and the how becomes clear.',
    creator: 'Simon Sinek',
    channel: '@SimonSinek',
    youtubeUrl: 'https://www.youtube.com/@SimonSinek',
  },

  // ── Health & Science ──
  {
    category: 'Health & Science',
    text: 'Small daily improvements lead to staggering long-term results.',
    creator: 'Andrew Huberman',
    channel: '@hubermanlab',
    youtubeUrl: 'https://www.youtube.com/@hubermanlab',
  },
  {
    category: 'Health & Science',
    text: 'Sleep is the best legal performance enhancer available to anyone.',
    creator: 'Andrew Huberman',
    channel: '@hubermanlab',
    youtubeUrl: 'https://www.youtube.com/@hubermanlab',
  },
  {
    category: 'Health & Science',
    text: 'Failing is just learning in disguise.',
    creator: 'Mark Rober',
    channel: '@MarkRober',
    youtubeUrl: 'https://www.youtube.com/@MarkRober',
  },
  {
    category: 'Health & Science',
    text: 'The best ideas come when you\'re willing to be wrong.',
    creator: 'Veritasium',
    channel: '@veritasium',
    youtubeUrl: 'https://www.youtube.com/@veritasium',
  },
  {
    category: 'Health & Science',
    text: 'Curiosity is the engine of achievement.',
    creator: 'Veritasium',
    channel: '@veritasium',
    youtubeUrl: 'https://www.youtube.com/@veritasium',
  },
  {
    category: 'Health & Science',
    text: 'The mind is a tool. You are the one who wields it.',
    creator: 'Andrew Huberman',
    channel: '@hubermanlab',
    youtubeUrl: 'https://www.youtube.com/@hubermanlab',
  },

  // ── Financial Freedom ──
  {
    category: 'Financial Freedom',
    text: 'The best investment you can make is in yourself.',
    creator: 'Graham Stephan',
    channel: '@GrahamStephan',
    youtubeUrl: 'https://www.youtube.com/@GrahamStephan',
  },
  {
    category: 'Financial Freedom',
    text: 'Time in the market beats timing the market.',
    creator: 'Andrei Jikh',
    channel: '@AndreiJikh',
    youtubeUrl: 'https://www.youtube.com/@AndreiJikh',
  },
  {
    category: 'Financial Freedom',
    text: 'Financial freedom isn\'t about having everything — it\'s about having choices.',
    creator: 'Graham Stephan',
    channel: '@GrahamStephan',
    youtubeUrl: 'https://www.youtube.com/@GrahamStephan',
  },
  {
    category: 'Financial Freedom',
    text: 'Don\'t work for money. Make money work for you.',
    creator: 'Andrei Jikh',
    channel: '@AndreiJikh',
    youtubeUrl: 'https://www.youtube.com/@AndreiJikh',
  },
  {
    category: 'Financial Freedom',
    text: 'Wealth is built in the boring decisions that nobody sees.',
    creator: 'Graham Stephan',
    channel: '@GrahamStephan',
    youtubeUrl: 'https://www.youtube.com/@GrahamStephan',
  },
]

const filteredQuotes = computed(() => {
  if (activeCategory.value === 'All') return quotes
  return quotes.filter(q => q.category === activeCategory.value)
})

const categoryCount = computed(() => {
  const counts: Record<string, number> = {}
  for (const cat of categories) {
    counts[cat] = cat === 'All' ? quotes.length : quotes.filter(q => q.category === cat).length
  }
  return counts
})

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>

<template>
  <AppLayout>
    <section id="yt-quote-display">
      <div class="page-header">
        <div class="yt-badge">
          <svg class="yt-icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M23.5 6.2a3.01 3.01 0 0 0-2.12-2.13C19.54 3.6 12 3.6 12 3.6s-7.54 0-9.38.47A3.01 3.01 0 0 0 .5 6.2C0 8.05 0 12 0 12s0 3.95.5 5.8a3.01 3.01 0 0 0 2.12 2.13C4.46 20.4 12 20.4 12 20.4s7.54 0 9.38-.47a3.01 3.01 0 0 0 2.12-2.13C24 15.95 24 12 24 12s0-3.95-.5-5.8zM9.6 15.6V8.4L15.86 12 9.6 15.6z"/>
          </svg>
          YouTube Creators
        </div>
        <h2>Words from Top Creators</h2>
        <p class="page-subtitle">Wisdom, motivation, and insight straight from the world's biggest YouTube voices.</p>
      </div>

      <div class="category-filters">
        <button
          v-for="cat in categories"
          :key="cat"
          class="cat-btn"
          :class="{ active: activeCategory === cat }"
          @click="activeCategory = cat"
        >
          {{ cat }}
          <span class="cat-count">{{ categoryCount[cat] }}</span>
        </button>
      </div>

      <h3 v-if="activeCategory !== 'All'" class="category-title">{{ activeCategory }}</h3>

      <div class="quote-grid">
        <div
          v-for="quote in filteredQuotes"
          :key="quote.text"
          class="quote-card"
        >
          <span class="quote-category-tag">{{ quote.category }}</span>
          <p class="quote-text">"{{ quote.text }}"</p>

          <div class="card-footer">
            <p class="quote-author">&mdash; {{ quote.creator }}</p>
            <a
              :href="quote.youtubeUrl"
              target="_blank"
              rel="noopener noreferrer"
              class="yt-source-link"
              @click.stop
              :aria-label="`Watch ${quote.creator} on YouTube`"
            >
              <svg class="yt-mini-icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M23.5 6.2a3.01 3.01 0 0 0-2.12-2.13C19.54 3.6 12 3.6 12 3.6s-7.54 0-9.38.47A3.01 3.01 0 0 0 .5 6.2C0 8.05 0 12 0 12s0 3.95.5 5.8a3.01 3.01 0 0 0 2.12 2.13C4.46 20.4 12 20.4 12 20.4s7.54 0 9.38-.47a3.01 3.01 0 0 0 2.12-2.13C24 15.95 24 12 24 12s0-3.95-.5-5.8zM9.6 15.6V8.4L15.86 12 9.6 15.6z"/>
              </svg>
              {{ quote.channel }}
            </a>
          </div>

          <div class="card-actions">
            <ShareButtons :text="quote.text" :author="quote.creator" />
          </div>
        </div>
      </div>
    </section>

    <button @click="scrollToTop" aria-label="Back to top" class="back-to-top">&uarr;</button>
  </AppLayout>
</template>

<style scoped>
/* ── Page Header ── */
#yt-quote-display {
  padding-bottom: 3rem;
}

.page-header {
  text-align: center;
  padding: 2.5rem 1rem 1.5rem;
}

.yt-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  background: #ff0000;
  color: #fff;
  font-size: 0.82rem;
  font-weight: 700;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  padding: 0.3rem 0.9rem;
  border-radius: 999px;
  margin-bottom: 1rem;
}

.yt-icon {
  width: 1.1rem;
  height: 1.1rem;
}

.page-header h2 {
  font-size: 2.4rem;
  color: #3b2a1a;
  font-weight: 700;
  margin: 0 0 0.5rem;
}

.page-subtitle {
  color: #6b5a45;
  font-size: 1.05rem;
  margin: 0;
  max-width: 540px;
  margin-inline: auto;
}

/* ── Category Filters ── */
.category-filters {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.5rem;
  margin-bottom: 2rem;
  padding: 0 1rem;
}

.cat-btn {
  background: #fdf8f2;
  border: 1px solid #e0d0b8;
  border-radius: 999px;
  padding: 0.4rem 1rem;
  font-size: 0.88rem;
  font-weight: 600;
  color: #5a3e2b;
  cursor: pointer;
  transition: all 0.2s;
  display: flex;
  align-items: center;
  gap: 0.4rem;
}

.cat-btn:hover {
  background: #f0e6d6;
  border-color: #c9a96e;
}

.cat-btn.active {
  background: #3b2a1a;
  color: #fdf8f2;
  border-color: #3b2a1a;
}

.cat-btn.active .cat-count {
  background: rgba(253, 248, 242, 0.2);
  color: #fdf8f2;
}

.cat-count {
  background: rgba(59, 42, 26, 0.08);
  color: #6b5a45;
  font-size: 0.75rem;
  font-weight: 700;
  padding: 0.1rem 0.45rem;
  border-radius: 999px;
  min-width: 1.2rem;
  text-align: center;
}

.category-title {
  text-align: center;
  font-size: 1.4rem;
  color: #5a3e2b;
  margin: 0 0 1.5rem;
  font-weight: 600;
}

/* ── Grid ── */
.quote-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1.5rem;
  padding: 0 1rem;
}

.quote-card {
  background: #fdf8f2;
  border: 1px solid #e8d9c5;
  border-radius: 12px;
  padding: 1.5rem 1.25rem;
  position: relative;
  transition: all 0.25s ease;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(59, 42, 26, 0.08);
  display: flex;
  flex-direction: column;
}

.quote-card:hover {
  transform: translateY(-6px) scale(1.03);
  box-shadow: 0 12px 32px rgba(59, 42, 26, 0.16);
  border-color: #c9a96e;
}

.quote-category-tag {
  display: inline-block;
  font-size: 0.72rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: #a38b6f;
  background: rgba(59, 42, 26, 0.06);
  padding: 0.2rem 0.6rem;
  border-radius: 999px;
  margin-bottom: 0.75rem;
  align-self: flex-start;
}

.quote-text {
  font-size: 1.05rem;
  line-height: 1.5;
  color: #2f1e0f;
  margin: 0 0 auto;
  font-style: italic;
  flex: 1;
}

.card-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 1rem;
  gap: 0.5rem;
  flex-wrap: wrap;
}

.quote-author {
  color: #6b5a45;
  font-weight: 600;
  font-size: 0.95rem;
  margin: 0;
}

/* ── YouTube source link ── */
.yt-source-link {
  display: inline-flex;
  align-items: center;
  gap: 0.3rem;
  background: #ff0000;
  color: #fff;
  font-size: 0.78rem;
  font-weight: 700;
  padding: 0.25rem 0.65rem;
  border-radius: 999px;
  text-decoration: none;
  transition: background 0.2s, transform 0.15s;
  white-space: nowrap;
  z-index: 1;
}

.yt-source-link:hover {
  background: #cc0000;
  transform: scale(1.05);
}

.yt-mini-icon {
  width: 0.85rem;
  height: 0.85rem;
  flex-shrink: 0;
}

.card-actions {
  display: flex;
  justify-content: flex-end;
  padding-top: 0.5rem;
  border-top: 1px solid rgba(59, 42, 26, 0.08);
}

/* ── Back to top ── */
.back-to-top {
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  background-color: #3b2a1a;
  color: #fdf8f2;
  border: none;
  border-radius: 50%;
  width: 2.75rem;
  height: 2.75rem;
  font-size: 1.25rem;
  cursor: pointer;
  box-shadow: 0 4px 12px rgba(59, 42, 26, 0.3);
  transition: all 0.2s;
  z-index: 1000;
}

.back-to-top:hover {
  background-color: #c9a96e;
  color: #3b2a1a;
  transform: translateY(-3px);
}

@media (max-width: 600px) {
  .page-header h2 {
    font-size: 1.8rem;
  }

  .category-filters {
    gap: 0.35rem;
  }

  .cat-btn {
    font-size: 0.8rem;
    padding: 0.35rem 0.75rem;
  }

  .quote-grid {
    grid-template-columns: 1fr;
  }

  .card-footer {
    flex-direction: column;
    align-items: flex-start;
  }
}
</style>

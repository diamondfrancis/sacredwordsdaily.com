<script setup lang="ts">
import AppLayout from '../components/AppLayout.vue'
import { ref, computed } from 'vue'

interface Quote {
  text: string
  author: string
  category: string
}

const categories = [
  'All',
  'Motivation & Action',
  'Courage & Resilience',
  'Dreams & Ambition',
  'Mindset & Belief',
  'Self-Worth & Identity',
  'Wisdom & Perspective',
  'Positivity & Joy',
  'Purpose & Service',
]

const activeCategory = ref('All')

const quotes: Quote[] = [
  // ── Motivation & Action ──
  { category: 'Motivation & Action', text: 'The only way to do great work is to love what you do.', author: 'Steve Jobs' },
  { category: 'Motivation & Action', text: 'Do what you can, with what you have, where you are.', author: 'Theodore Roosevelt' },
  { category: 'Motivation & Action', text: "Don't watch the clock; do what it does. Keep going.", author: 'Sam Levenson' },
  { category: 'Motivation & Action', text: 'Start where you are. Use what you have. Do what you can.', author: 'Arthur Ashe' },
  { category: 'Motivation & Action', text: "You don't have to be great to start, but you have to start to be great.", author: 'Zig Ziglar' },
  { category: 'Motivation & Action', text: 'The journey of a thousand miles begins with one step.', author: 'Lao Tzu' },
  { category: 'Motivation & Action', text: 'Act as if what you do makes a difference. It does.', author: 'William James' },
  { category: 'Motivation & Action', text: "The harder you work for something, the greater you'll feel when you achieve it.", author: 'Unknown' },

  // ── Courage & Resilience ──
  { category: 'Courage & Resilience', text: "Everything you've ever wanted is on the other side of fear.", author: 'George Addair' },
  { category: 'Courage & Resilience', text: 'What we fear doing most is usually what we most need to do.', author: 'Tim Ferriss' },
  { category: 'Courage & Resilience', text: "Life shrinks or expands in proportion to one's courage.", author: 'Ana\u00efs Nin' },
  { category: 'Courage & Resilience', text: 'Success is not final, failure is not fatal: it is the courage to continue that counts.', author: 'Winston Churchill' },
  { category: 'Courage & Resilience', text: "It always seems impossible until it's done.", author: 'Nelson Mandela' },
  { category: 'Courage & Resilience', text: 'The greatest glory in living lies not in never falling, but in rising every time we fall.', author: 'Nelson Mandela' },
  { category: 'Courage & Resilience', text: 'Fall seven times and stand up eight.', author: 'Japanese Proverb' },

  // ── Dreams & Ambition ──
  { category: 'Dreams & Ambition', text: 'The future belongs to those who believe in the beauty of their dreams.', author: 'Eleanor Roosevelt' },
  { category: 'Dreams & Ambition', text: 'Dream big and dare to fail.', author: 'Norman Vaughan' },
  { category: 'Dreams & Ambition', text: "When you have a dream, you've got to grab it and never let go.", author: 'Carol Burnett' },
  { category: 'Dreams & Ambition', text: 'Too many of us are not living our dreams because we are living our fears.', author: 'Les Brown' },
  { category: 'Dreams & Ambition', text: 'The best way to predict the future is to create it.', author: 'Peter Drucker' },
  { category: 'Dreams & Ambition', text: "If opportunity doesn't knock, build a door.", author: 'Milton Berle' },
  { category: 'Dreams & Ambition', text: "You miss 100% of the shots you don't take.", author: 'Wayne Gretzky' },

  // ── Mindset & Belief ──
  { category: 'Mindset & Belief', text: "Whether you think you can or you think you can't \u2014 you're right.", author: 'Henry Ford' },
  { category: 'Mindset & Belief', text: "Believe you can and you're halfway there.", author: 'Theodore Roosevelt' },
  { category: 'Mindset & Belief', text: 'The mind is everything. What you think you become.', author: 'Buddha' },
  { category: 'Mindset & Belief', text: 'Change your thoughts and you change your world.', author: 'Norman Vincent Peale' },
  { category: 'Mindset & Belief', text: 'You become what you believe.', author: 'Oprah Winfrey' },
  { category: 'Mindset & Belief', text: 'I am not a product of my circumstances. I am a product of my decisions.', author: 'Stephen Covey' },
  { category: 'Mindset & Belief', text: 'The only limit to our realization of tomorrow is our doubts of today.', author: 'Franklin D. Roosevelt' },

  // ── Self-Worth & Identity ──
  { category: 'Self-Worth & Identity', text: 'You are enough just as you are.', author: 'Meghan Markle' },
  { category: 'Self-Worth & Identity', text: 'Be yourself; everyone else is already taken.', author: 'Oscar Wilde' },
  { category: 'Self-Worth & Identity', text: "Your time is limited, so don't waste it living someone else's life.", author: 'Steve Jobs' },
  { category: 'Self-Worth & Identity', text: 'The only person you are destined to become is the person you decide to be.', author: 'Ralph Waldo Emerson' },
  { category: 'Self-Worth & Identity', text: 'What you get by achieving your goals is not as important as what you become.', author: 'Zig Ziglar' },

  // ── Wisdom & Perspective ──
  { category: 'Wisdom & Perspective', text: "Life is what happens when you're busy making other plans.", author: 'John Lennon' },
  { category: 'Wisdom & Perspective', text: 'In the middle of difficulty lies opportunity.', author: 'Albert Einstein' },
  { category: 'Wisdom & Perspective', text: 'Strive not to be a success, but rather to be of value.', author: 'Albert Einstein' },
  { category: 'Wisdom & Perspective', text: 'An unexamined life is not worth living.', author: 'Socrates' },
  { category: 'Wisdom & Perspective', text: 'Everything has beauty, but not everyone can see.', author: 'Confucius' },
  { category: 'Wisdom & Perspective', text: 'It does not matter how slowly you go as long as you do not stop.', author: 'Confucius' },
  { category: 'Wisdom & Perspective', text: 'What lies behind us and what lies before us are tiny matters compared to what lies within us.', author: 'Ralph Waldo Emerson' },
  { category: 'Wisdom & Perspective', text: 'The best time to plant a tree was 20 years ago. The second best time is now.', author: 'Chinese Proverb' },

  // ── Positivity & Joy ──
  { category: 'Positivity & Joy', text: 'Keep your face always toward the sunshine\u2014and shadows will fall behind you.', author: 'Walt Whitman' },
  { category: 'Positivity & Joy', text: "I can't change the direction of the wind, but I can adjust my sails to always reach my destination.", author: 'Jimmy Dean' },
  { category: 'Positivity & Joy', text: 'Happiness is not something ready-made. It comes from your own actions.', author: 'Dalai Lama' },
  { category: 'Positivity & Joy', text: 'Stay hungry. Stay foolish.', author: 'Steve Jobs' },
  { category: 'Positivity & Joy', text: 'The best revenge is massive success.', author: 'Frank Sinatra' },

  // ── Purpose & Service ──
  { category: 'Purpose & Service', text: 'Be the change that you wish to see in the world.', author: 'Mahatma Gandhi' },
  { category: 'Purpose & Service', text: 'If you want to lift yourself up, lift up someone else.', author: 'Booker T. Washington' },
  { category: 'Purpose & Service', text: "We don't have to wait for some grand utopian future. The future is an infinite succession of presents.", author: 'Howard Zinn' },
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

function copyToClipboard(text: string, author: string) {
  const fullText = `${text} \u2014 ${author}`
  navigator.clipboard.writeText(fullText).then(() => {
    alert('Quote copied! \uD83D\uDCCB')
  }).catch(() => {
    alert('Failed to copy quote')
  })
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>

<template>
  <AppLayout>
    <section id="quote-display">
      <h2>Inspirational Quotes</h2>

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

      <div id="quote-container" class="quote-grid">
        <div
          v-for="quote in filteredQuotes"
          :key="quote.text"
          class="quote-card"
        >
          <span class="quote-category-tag">{{ quote.category }}</span>
          <p class="quote-text">"{{ quote.text }}"</p>
          <p class="quote-author">&mdash; {{ quote.author }}</p>
          <div class="card-actions">
            <button class="copy-btn" @click="copyToClipboard(quote.text, quote.author)">Copy</button>
          </div>
        </div>
      </div>
    </section>

    <button @click="scrollToTop" aria-label="Back to top" class="back-to-top">&uarr;</button>
  </AppLayout>
</template>

<style scoped>
#quote-display h2 {
  font-size: 2.4rem;
  margin: 2rem 0 1.25rem;
  color: #3b2a1a;
  text-align: center;
  font-weight: 700;
}

/* ── Category Filters ── */
.category-filters {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.5rem;
  margin-bottom: 2rem;
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
}

.quote-text {
  font-size: 1.1rem;
  line-height: 1.45;
  color: #2f1e0f;
  margin: 0 0 1rem;
  font-style: italic;
}

.quote-author {
  text-align: right;
  color: #6b5a45;
  font-weight: 600;
  margin: 0;
}

.card-actions {
  display: flex;
  justify-content: flex-end;
  padding-top: 0.5rem;
  border-top: 1px solid rgba(59, 42, 26, 0.08);
}

.copy-btn {
  background: none;
  border: 1px solid #e0d0b8;
  border-radius: 999px;
  padding: 0.3rem 0.85rem;
  font-size: 0.8rem;
  font-weight: 600;
  color: #5a3e2b;
  cursor: pointer;
  transition: all 0.2s;
}

.copy-btn:hover {
  background: #3b2a1a;
  color: #fdf8f2;
  border-color: #3b2a1a;
}

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
  #quote-display h2 {
    font-size: 1.8rem;
  }

  .category-filters {
    gap: 0.35rem;
  }

  .cat-btn {
    font-size: 0.8rem;
    padding: 0.35rem 0.75rem;
  }
}
</style>

<script setup lang="ts">
import AppLayout from '../components/AppLayout.vue'
import { ref, computed } from 'vue'

interface TedQuote {
  text: string
  speaker: string
  talkTitle: string
  tedUrl: string
  category: string
}

const categories = [
  'All',
  'Creativity & Innovation',
  'Leadership & Purpose',
  'Mindset & Psychology',
  'Science & Discovery',
  'Society & Change',
  'Vulnerability & Connection',
]

const activeCategory = ref('All')

const quotes: TedQuote[] = [
  // ── Creativity & Innovation ──
  {
    category: 'Creativity & Innovation',
    text: 'The secret to creativity is knowing how to hide your sources.',
    speaker: 'Sir Ken Robinson',
    talkTitle: 'Do Schools Kill Creativity?',
    tedUrl: 'https://www.ted.com/talks/ken_robinson_says_schools_kill_creativity',
  },
  {
    category: 'Creativity & Innovation',
    text: 'If you\'re not prepared to be wrong, you\'ll never come up with anything original.',
    speaker: 'Sir Ken Robinson',
    talkTitle: 'Do Schools Kill Creativity?',
    tedUrl: 'https://www.ted.com/talks/ken_robinson_says_schools_kill_creativity',
  },
  {
    category: 'Creativity & Innovation',
    text: 'Creativity is the process of having original ideas that have value.',
    speaker: 'Sir Ken Robinson',
    talkTitle: 'Bring on the Learning Revolution!',
    tedUrl: 'https://www.ted.com/talks/ken_robinson_bring_on_the_learning_revolution',
  },
  {
    category: 'Creativity & Innovation',
    text: 'The ones who are crazy enough to think they can change the world are the ones that do.',
    speaker: 'Steve Jobs',
    talkTitle: 'How to Live Before You Die',
    tedUrl: 'https://www.ted.com/talks/steve_jobs_how_to_live_before_you_die',
  },
  {
    category: 'Creativity & Innovation',
    text: 'Your time is limited. Don\'t waste it living someone else\'s life.',
    speaker: 'Steve Jobs',
    talkTitle: 'How to Live Before You Die',
    tedUrl: 'https://www.ted.com/talks/steve_jobs_how_to_live_before_you_die',
  },
  {
    category: 'Creativity & Innovation',
    text: 'Stay hungry. Stay foolish.',
    speaker: 'Steve Jobs',
    talkTitle: 'How to Live Before You Die',
    tedUrl: 'https://www.ted.com/talks/steve_jobs_how_to_live_before_you_die',
  },
  {
    category: 'Creativity & Innovation',
    text: 'No matter how many times you fail, you can get back up and try again.',
    speaker: 'Elizabeth Gilbert',
    talkTitle: 'Your Elusive Creative Genius',
    tedUrl: 'https://www.ted.com/talks/elizabeth_gilbert_your_elusive_creative_genius',
  },
  {
    category: 'Creativity & Innovation',
    text: 'Curiosity is the truth and the way of creative living.',
    speaker: 'Elizabeth Gilbert',
    talkTitle: 'Your Elusive Creative Genius',
    tedUrl: 'https://www.ted.com/talks/elizabeth_gilbert_your_elusive_creative_genius',
  },

  // ── Leadership & Purpose ──
  {
    category: 'Leadership & Purpose',
    text: 'People don\'t buy what you do; they buy why you do it.',
    speaker: 'Simon Sinek',
    talkTitle: 'How Great Leaders Inspire Action',
    tedUrl: 'https://www.ted.com/talks/simon_sinek_how_great_leaders_inspire_action',
  },
  {
    category: 'Leadership & Purpose',
    text: 'Great leaders don\'t start by telling people what to do. They start with why.',
    speaker: 'Simon Sinek',
    talkTitle: 'How Great Leaders Inspire Action',
    tedUrl: 'https://www.ted.com/talks/simon_sinek_how_great_leaders_inspire_action',
  },
  {
    category: 'Leadership & Purpose',
    text: 'Leadership is not about being in charge. It is about taking care of those in your charge.',
    speaker: 'Simon Sinek',
    talkTitle: 'Why Good Leaders Make You Feel Safe',
    tedUrl: 'https://www.ted.com/talks/simon_sinek_why_good_leaders_make_you_feel_safe',
  },
  {
    category: 'Leadership & Purpose',
    text: 'The goal is not to be perfect by the end. The goal is to be better today.',
    speaker: 'Simon Sinek',
    talkTitle: 'How Great Leaders Inspire Action',
    tedUrl: 'https://www.ted.com/talks/simon_sinek_how_great_leaders_inspire_action',
  },
  {
    category: 'Leadership & Purpose',
    text: 'Find your voice, and inspire others to find theirs.',
    speaker: 'Stephen Covey',
    talkTitle: 'The 8th Habit',
    tedUrl: 'https://www.ted.com/talks',
  },
  {
    category: 'Leadership & Purpose',
    text: 'Dedicate yourself to a cause bigger than yourself and you\'ll find the meaning you\'ve been looking for.',
    speaker: 'Angela Duckworth',
    talkTitle: 'Grit: The Power of Passion and Perseverance',
    tedUrl: 'https://www.ted.com/talks/angela_lee_duckworth_grit_the_power_of_passion_and_perseverance',
  },

  // ── Mindset & Psychology ──
  {
    category: 'Mindset & Psychology',
    text: 'Grit is living life like it\'s a marathon, not a sprint.',
    speaker: 'Angela Duckworth',
    talkTitle: 'Grit: The Power of Passion and Perseverance',
    tedUrl: 'https://www.ted.com/talks/angela_lee_duckworth_grit_the_power_of_passion_and_perseverance',
  },
  {
    category: 'Mindset & Psychology',
    text: 'The fixed mindset says ability is destiny. The growth mindset says effort is destiny.',
    speaker: 'Carol Dweck',
    talkTitle: 'The Power of Believing That You Can Improve',
    tedUrl: 'https://www.ted.com/talks/carol_dweck_the_power_of_believing_that_you_can_improve',
  },
  {
    category: 'Mindset & Psychology',
    text: 'Not yet. Those two words open a path into the future.',
    speaker: 'Carol Dweck',
    talkTitle: 'The Power of Believing That You Can Improve',
    tedUrl: 'https://www.ted.com/talks/carol_dweck_the_power_of_believing_that_you_can_improve',
  },
  {
    category: 'Mindset & Psychology',
    text: 'The secret of happiness is something to do, something to love, and something to look forward to.',
    speaker: 'Dan Gilbert',
    talkTitle: 'The Surprising Science of Happiness',
    tedUrl: 'https://www.ted.com/talks/dan_gilbert_the_surprising_science_of_happiness',
  },
  {
    category: 'Mindset & Psychology',
    text: 'We have the ability to manufacture the very commodity we are constantly chasing.',
    speaker: 'Dan Gilbert',
    talkTitle: 'The Surprising Science of Happiness',
    tedUrl: 'https://www.ted.com/talks/dan_gilbert_the_surprising_science_of_happiness',
  },
  {
    category: 'Mindset & Psychology',
    text: 'Your body language may shape who you are.',
    speaker: 'Amy Cuddy',
    talkTitle: 'Your Body Language May Shape Who You Are',
    tedUrl: 'https://www.ted.com/talks/amy_cuddy_your_body_language_may_shape_who_you_are',
  },
  {
    category: 'Mindset & Psychology',
    text: 'Fake it until you become it. Don\'t just fake it until you make it.',
    speaker: 'Amy Cuddy',
    talkTitle: 'Your Body Language May Shape Who You Are',
    tedUrl: 'https://www.ted.com/talks/amy_cuddy_your_body_language_may_shape_who_you_are',
  },

  // ── Science & Discovery ──
  {
    category: 'Science & Discovery',
    text: 'The universe is under no obligation to make sense to you.',
    speaker: 'Neil deGrasse Tyson',
    talkTitle: 'Astrophysics for People in a Hurry',
    tedUrl: 'https://www.ted.com/talks',
  },
  {
    category: 'Science & Discovery',
    text: 'We are all connected — to each other biologically, to the Earth chemically, and to the universe atomically.',
    speaker: 'Neil deGrasse Tyson',
    talkTitle: 'The Most Astounding Fact',
    tedUrl: 'https://www.ted.com/talks',
  },
  {
    category: 'Science & Discovery',
    text: 'You are the universe experiencing itself.',
    speaker: 'Carl Sagan',
    talkTitle: 'Pale Blue Dot',
    tedUrl: 'https://www.ted.com/talks',
  },
  {
    category: 'Science & Discovery',
    text: 'Somewhere, something incredible is waiting to be known.',
    speaker: 'Carl Sagan',
    talkTitle: 'Pale Blue Dot',
    tedUrl: 'https://www.ted.com/talks',
  },
  {
    category: 'Science & Discovery',
    text: 'A person who never made a mistake never tried anything new.',
    speaker: 'Albert Einstein',
    talkTitle: 'The Danger of Science Denial',
    tedUrl: 'https://www.ted.com/talks/michael_specter_the_danger_of_science_denial',
  },

  // ── Society & Change ──
  {
    category: 'Society & Change',
    text: 'Each time a man stands up for an ideal, or acts to improve the lot of others, he sends forth a tiny ripple of hope.',
    speaker: 'Robert F. Kennedy',
    talkTitle: 'TED Talks',
    tedUrl: 'https://www.ted.com/talks',
  },
  {
    category: 'Society & Change',
    text: 'The opposite of poverty is not wealth. The opposite of poverty is justice.',
    speaker: 'Bryan Stevenson',
    talkTitle: 'We Need to Talk About an Injustice',
    tedUrl: 'https://www.ted.com/talks/bryan_stevenson_we_need_to_talk_about_an_injustice',
  },
  {
    category: 'Society & Change',
    text: 'Our humanity is contingent on the humanity of others.',
    speaker: 'Bryan Stevenson',
    talkTitle: 'We Need to Talk About an Injustice',
    tedUrl: 'https://www.ted.com/talks/bryan_stevenson_we_need_to_talk_about_an_injustice',
  },
  {
    category: 'Society & Change',
    text: 'Education is the most powerful weapon which you can use to change the world.',
    speaker: 'Nelson Mandela',
    talkTitle: 'TED Prize',
    tedUrl: 'https://www.ted.com/talks',
  },
  {
    category: 'Society & Change',
    text: 'When you\'ve worked hard and done well and walked through that doorway of opportunity, you do not slam it shut behind you.',
    speaker: 'Michelle Obama',
    talkTitle: 'TED Talks Education',
    tedUrl: 'https://www.ted.com/talks',
  },

  // ── Vulnerability & Connection ──
  {
    category: 'Vulnerability & Connection',
    text: 'Vulnerability is not winning or losing — it\'s having the courage to show up when you can\'t control the outcome.',
    speaker: 'Brené Brown',
    talkTitle: 'The Power of Vulnerability',
    tedUrl: 'https://www.ted.com/talks/brene_brown_the_power_of_vulnerability',
  },
  {
    category: 'Vulnerability & Connection',
    text: 'Connection is why we\'re here. It is what gives purpose and meaning to our lives.',
    speaker: 'Brené Brown',
    talkTitle: 'The Power of Vulnerability',
    tedUrl: 'https://www.ted.com/talks/brene_brown_the_power_of_vulnerability',
  },
  {
    category: 'Vulnerability & Connection',
    text: 'You cannot get to courage without walking through vulnerability.',
    speaker: 'Brené Brown',
    talkTitle: 'Listening to Shame',
    tedUrl: 'https://www.ted.com/talks/brene_brown_listening_to_shame',
  },
  {
    category: 'Vulnerability & Connection',
    text: 'Shame derives its power from being unspeakable.',
    speaker: 'Brené Brown',
    talkTitle: 'Listening to Shame',
    tedUrl: 'https://www.ted.com/talks/brene_brown_listening_to_shame',
  },
  {
    category: 'Vulnerability & Connection',
    text: 'The stories we tell ourselves determine the lives we live.',
    speaker: 'Chimamanda Ngozi Adichie',
    talkTitle: 'The Danger of a Single Story',
    tedUrl: 'https://www.ted.com/talks/chimamanda_ngozi_adichie_the_danger_of_a_single_story',
  },
  {
    category: 'Vulnerability & Connection',
    text: 'When we reject the single story, when we realize that there is never a single story about any place, we regain a kind of paradise.',
    speaker: 'Chimamanda Ngozi Adichie',
    talkTitle: 'The Danger of a Single Story',
    tedUrl: 'https://www.ted.com/talks/chimamanda_ngozi_adichie_the_danger_of_a_single_story',
  },
  {
    category: 'Vulnerability & Connection',
    text: 'Stories matter. Many stories matter.',
    speaker: 'Chimamanda Ngozi Adichie',
    talkTitle: 'The Danger of a Single Story',
    tedUrl: 'https://www.ted.com/talks/chimamanda_ngozi_adichie_the_danger_of_a_single_story',
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

function copyToClipboard(text: string, speaker: string) {
  const fullText = `"${text}" — ${speaker}`
  navigator.clipboard.writeText(fullText).then(() => {
    alert('Quote copied! 📋')
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
    <section id="ted-quote-display">
      <div class="page-header">
        <div class="ted-badge">
          <svg class="ted-icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <circle cx="12" cy="12" r="12"/>
            <text x="12" y="16" text-anchor="middle" font-size="9" font-weight="bold" fill="white" font-family="Arial, sans-serif">TED</text>
          </svg>
          TED Talks
        </div>
        <h2>Ideas Worth Spreading</h2>
        <p class="page-subtitle">Powerful words from the world's most inspiring TED speakers — thinkers, innovators, and storytellers.</p>
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
            <p class="quote-author">&mdash; {{ quote.speaker }}</p>
            <a
              :href="quote.tedUrl"
              target="_blank"
              rel="noopener noreferrer"
              class="ted-source-link"
              @click.stop
              :aria-label="`Watch '${quote.talkTitle}' on TED`"
            >
              <svg class="ted-mini-icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <circle cx="12" cy="12" r="12"/>
                <text x="12" y="16" text-anchor="middle" font-size="9" font-weight="bold" fill="white" font-family="Arial, sans-serif">TED</text>
              </svg>
              Watch Talk
            </a>
          </div>

          <div class="talk-title">{{ quote.talkTitle }}</div>
          <div class="card-actions">
            <button class="copy-btn" @click="copyToClipboard(quote.text, quote.speaker)">Copy</button>
          </div>
        </div>
      </div>
    </section>

    <button @click="scrollToTop" aria-label="Back to top" class="back-to-top">&uarr;</button>
  </AppLayout>
</template>

<style scoped>
/* ── Page Header ── */
#ted-quote-display {
  padding-bottom: 3rem;
}

.page-header {
  text-align: center;
  padding: 2.5rem 1rem 1.5rem;
}

.ted-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  background: #e62b1e;
  color: #fff;
  font-size: 0.82rem;
  font-weight: 700;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  padding: 0.3rem 0.9rem;
  border-radius: 999px;
  margin-bottom: 1rem;
}

.ted-icon {
  width: 1.2rem;
  height: 1.2rem;
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
  max-width: 560px;
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

.quote-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: #e62b1e;
  opacity: 0;
  transition: opacity 0.25s;
}

.quote-card:hover::before {
  opacity: 1;
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
  padding-bottom: 1rem;
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

/* ── TED source link ── */
.ted-source-link {
  display: inline-flex;
  align-items: center;
  gap: 0.3rem;
  background: #e62b1e;
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

.ted-source-link:hover {
  background: #b5211a;
  transform: scale(1.05);
}

.ted-mini-icon {
  width: 0.85rem;
  height: 0.85rem;
  flex-shrink: 0;
}

.talk-title {
  position: absolute;
  bottom: 2.25rem;
  left: 1.25rem;
  right: 1rem;
  font-size: 0.72rem;
  color: #a38b6f;
  font-style: italic;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  pointer-events: none;
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

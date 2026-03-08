<script setup lang="ts">
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'
import { RouterLink } from 'vue-router'

interface Slide {
  type: 'poetry' | 'verse' | 'quote'
  text: string
  attribution: string
  link: string
}

const slides: Slide[] = [
  {
    type: 'verse',
    text: 'The Lord is my shepherd, I lack nothing.',
    attribution: '— Psalm 23:1 (NIV)',
    link: '/bible-verses'
  },
  {
    type: 'poetry',
    text: 'Hold fast to dreams\nFor if dreams die\nLife is a broken-winged bird\nThat cannot fly.',
    attribution: '— Langston Hughes, "Dreams"',
    link: '/poetry'
  },
  {
    type: 'quote',
    text: 'Be the change that you wish to see in the world.',
    attribution: '— Mahatma Gandhi',
    link: '/quotes'
  },
  {
    type: 'verse',
    text: 'For I know the plans I have for you, plans to prosper you and not to harm you, plans to give you hope and a future.',
    attribution: '— Jeremiah 29:11 (NIV)',
    link: '/bible-verses'
  },
  {
    type: 'poetry',
    text: 'Out of the night that covers me,\nBlack as the pit from pole to pole,\nI thank whatever gods may be\nFor my unconquerable soul.',
    attribution: '— William Ernest Henley, "Invictus"',
    link: '/poetry'
  },
  {
    type: 'quote',
    text: 'The journey of a thousand miles begins with one step.',
    attribution: '— Lao Tzu',
    link: '/quotes'
  },
  {
    type: 'verse',
    text: 'I can do all this through him who gives me strength.',
    attribution: '— Philippians 4:13 (NIV)',
    link: '/bible-verses'
  },
  {
    type: 'poetry',
    text: 'Nature\'s first green is gold,\nHer hardest hue to hold.\nHer early leaf\'s a flower;\nBut only so an hour.',
    attribution: '— Robert Frost, "Nothing Gold Can Stay"',
    link: '/poetry'
  },
  {
    type: 'quote',
    text: 'It always seems impossible until it\'s done.',
    attribution: '— Nelson Mandela',
    link: '/quotes'
  },
  {
    type: 'verse',
    text: 'But those who hope in the Lord will renew their strength. They will soar on wings like eagles; they will run and not grow weary.',
    attribution: '— Isaiah 40:31 (NIV)',
    link: '/bible-verses'
  },
  {
    type: 'poetry',
    text: 'Hope is the thing with feathers\nThat perches in the soul,\nAnd sings the tune without the words,\nAnd never stops at all.',
    attribution: '— Emily Dickinson, "Hope is the thing with feathers"',
    link: '/poetry'
  },
  {
    type: 'quote',
    text: 'The mind is everything. What you think you become.',
    attribution: '— Buddha',
    link: '/quotes'
  },
  {
    type: 'verse',
    text: 'Do not be anxious about anything, but in every situation, by prayer and petition, with thanksgiving, present your requests to God.',
    attribution: '— Philippians 4:6 (NIV)',
    link: '/bible-verses'
  },
  {
    type: 'poetry',
    text: 'Two roads diverged in a wood, and I—\nI took the one less traveled by,\nAnd that has made all the difference.',
    attribution: '— Robert Frost, "The Road Not Taken"',
    link: '/poetry'
  },
  {
    type: 'quote',
    text: 'You are enough just as you are.',
    attribution: '— Meghan Markle',
    link: '/quotes'
  },
  {
    type: 'verse',
    text: 'Because of the Lord\'s great love we are not consumed, for his compassions never fail. They are new every morning; great is your faithfulness.',
    attribution: '— Lamentations 3:22–23 (NIV)',
    link: '/bible-verses'
  },
  {
    type: 'poetry',
    text: 'Do not go gentle into that good night.\nRage, rage against the dying of the light.',
    attribution: '— Dylan Thomas, "Do Not Go Gentle into That Good Night"',
    link: '/poetry'
  },
  {
    type: 'quote',
    text: 'Keep your face always toward the sunshine—and shadows will fall behind you.',
    attribution: '— Walt Whitman',
    link: '/quotes'
  },
]

const current = ref(0)
const isAnimating = ref(false)
const direction = ref<'next' | 'prev'>('next')
let timer: ReturnType<typeof setInterval> | null = null

const slide = computed(() => slides[current.value]!)

const typeLabel = computed(() => {
  if (slide.value.type === 'poetry') return 'Poetry'
  if (slide.value.type === 'verse') return 'Bible Verse'
  return 'Quote'
})

function pauseTimer() {
  if (timer) clearInterval(timer)
}

function goTo(index: number, dir: 'next' | 'prev' = 'next') {
  if (isAnimating.value) return
  direction.value = dir
  isAnimating.value = true
  setTimeout(() => {
    current.value = (index + slides.length) % slides.length
    isAnimating.value = false
  }, 300)
}

function next() {
  goTo(current.value + 1, 'next')
  resetTimer()
}

function prev() {
  goTo(current.value - 1, 'prev')
  resetTimer()
}

function resetTimer() {
  if (timer) clearInterval(timer)
  timer = setInterval(next, 6000)
}

onMounted(() => {
  timer = setInterval(next, 6000)
})

onBeforeUnmount(() => {
  if (timer) clearInterval(timer)
})
</script>

<template>
  <div class="slideshow" @mouseenter="pauseTimer" @mouseleave="resetTimer">
    <div class="slide-track" :class="[isAnimating ? 'animating' : '', direction]">
      <div class="slide-content">
        <span class="type-badge" :class="slide.type">{{ typeLabel }}</span>
        <blockquote class="slide-text">{{ slide.text }}</blockquote>
        <p class="slide-attribution">{{ slide.attribution }}</p>
        <RouterLink class="slide-link" :to="slide.link">
          See all {{ typeLabel === 'Bible Verse' ? 'Bible Verses' : typeLabel === 'Poetry' ? 'Poems' : 'Quotes' }} →
        </RouterLink>
      </div>
    </div>

    <div class="controls">
      <button class="ctrl-btn" @click="prev" aria-label="Previous slide">&#8249;</button>
      <div class="dots">
        <button
          v-for="(_, i) in slides"
          :key="i"
          class="dot"
          :class="{ active: i === current }"
          @click="goTo(i)"
          :aria-label="`Go to slide ${i + 1}`"
        />
      </div>
      <button class="ctrl-btn" @click="next" aria-label="Next slide">&#8250;</button>
    </div>
  </div>
</template>

<style scoped>
.slideshow {
  background: linear-gradient(135deg, #3b2a1a 0%, #5a3e2b 100%);
  border-radius: 16px;
  padding: 2.5rem 2rem 1.75rem;
  margin: 2.5rem 0;
  box-shadow: 0 10px 40px rgba(59, 42, 26, 0.25);
  min-height: 220px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  overflow: hidden;
}

.slide-track {
  flex: 1;
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.slide-track.animating.next {
  opacity: 0;
  transform: translateX(30px);
}

.slide-track.animating.prev {
  opacity: 0;
  transform: translateX(-30px);
}

.slide-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 1rem;
}

.type-badge {
  display: inline-block;
  padding: 0.25rem 0.85rem;
  border-radius: 999px;
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.type-badge.poetry {
  background: rgba(201, 169, 110, 0.2);
  color: #e8c97a;
  border: 1px solid rgba(201, 169, 110, 0.4);
}

.type-badge.verse {
  background: rgba(144, 202, 249, 0.15);
  color: #aad4f5;
  border: 1px solid rgba(144, 202, 249, 0.3);
}

.type-badge.quote {
  background: rgba(178, 223, 185, 0.15);
  color: #a8d8b0;
  border: 1px solid rgba(178, 223, 185, 0.3);
}

.slide-text {
  font-family: Georgia, serif;
  font-size: 1.25rem;
  line-height: 1.7;
  color: #fdf8f2;
  white-space: pre-line;
  margin: 0;
  font-style: italic;
  max-width: 680px;
}

.slide-attribution {
  font-size: 0.95rem;
  color: #c9a96e;
  margin: 0;
  font-weight: 500;
}

.slide-link {
  font-size: 0.88rem;
  color: #e8c97a;
  text-decoration: none;
  opacity: 0.75;
  transition: opacity 0.2s;
}

.slide-link:hover {
  opacity: 1;
  text-decoration: underline;
}

.controls {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin-top: 1.5rem;
}

.ctrl-btn {
  background: rgba(253, 248, 242, 0.12);
  border: 1px solid rgba(253, 248, 242, 0.2);
  color: #fdf8f2;
  border-radius: 50%;
  width: 36px;
  height: 36px;
  font-size: 1.4rem;
  line-height: 1;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.2s;
  flex-shrink: 0;
}

.ctrl-btn:hover {
  background: rgba(253, 248, 242, 0.25);
}

.dots {
  display: flex;
  gap: 6px;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 200px;
}

.dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: rgba(253, 248, 242, 0.3);
  border: none;
  cursor: pointer;
  padding: 0;
  transition: background 0.2s, transform 0.2s;
}

.dot.active {
  background: #c9a96e;
  transform: scale(1.3);
}

.dot:hover:not(.active) {
  background: rgba(253, 248, 242, 0.6);
}

@media (max-width: 600px) {
  .slideshow {
    padding: 2rem 1.25rem 1.5rem;
  }

  .slide-text {
    font-size: 1.05rem;
  }
}
</style>

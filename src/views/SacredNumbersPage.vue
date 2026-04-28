<script setup lang="ts">
import AppLayout from '../components/AppLayout.vue'
import ShareButtons from '../components/ShareButtons.vue'
import { ref, computed } from 'vue'
import { sacredNumbers } from '../data/sacredNumbers'

const categories = [
  'All',
  'Divine Perfection',
  'Covenant & Promise',
  'Trial & Testing',
  'Completion & Rest',
]

const activeCategory = ref('All')

const filteredNumbers = computed(() => {
  if (activeCategory.value === 'All') return sacredNumbers
  return sacredNumbers.filter(n => n.category === activeCategory.value)
})

const categoryCount = computed(() => {
  const counts: Record<string, number> = {}
  for (const cat of categories) {
    counts[cat] = cat === 'All' ? sacredNumbers.length : sacredNumbers.filter(n => n.category === cat).length
  }
  return counts
})

const searchQuery = ref('')

const displayedNumbers = computed(() => {
  const base = filteredNumbers.value
  const q = searchQuery.value.trim().toLowerCase()
  if (!q) return base
  return base.filter(n =>
    n.number.toLowerCase().includes(q) ||
    n.significance.toLowerCase().includes(q)
  )
})

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>

<template>
  <AppLayout>
    <section id="sacred-numbers-display">
      <h2>Sacred Numbers</h2>
      <p class="page-subtitle">The numbers woven through scripture — each carrying a divine meaning, a pattern, and a story that reveals the mind of God.</p>

      <div class="search-bar-wrap">
        <input
          v-model="searchQuery"
          type="search"
          class="search-input"
          placeholder="Search a number or its significance..."
          aria-label="Search sacred numbers"
        />
      </div>

      <div class="category-filters">
        <button
          v-for="cat in categories"
          :key="cat"
          class="cat-btn"
          :class="{ active: activeCategory === cat }"
          @click="activeCategory = cat; searchQuery = ''"
        >
          {{ cat }}
          <span class="cat-count">{{ categoryCount[cat] }}</span>
        </button>
      </div>

      <h3 v-if="activeCategory !== 'All'" class="category-title">{{ activeCategory }}</h3>

      <p v-if="displayedNumbers.length === 0" class="no-results">No numbers found for "{{ searchQuery }}".</p>

      <div class="numbers-grid">
        <article
          v-for="item in displayedNumbers"
          :key="item.number"
          class="number-card"
        >
          <span class="number-category-tag">{{ item.category }}</span>
          <div class="number-badge">{{ item.number }}</div>
          <p class="number-significance">{{ item.significance }}</p>
          <blockquote class="number-example">
            <span class="example-label">In Scripture</span>
            "{{ item.example }}"
          </blockquote>
          <ShareButtons :text="item.example" :title="item.number" />
        </article>
      </div>
    </section>

    <button @click="scrollToTop" aria-label="Back to top" class="back-to-top">&uarr;</button>
  </AppLayout>
</template>

<style scoped>
#sacred-numbers-display {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1rem 4rem;
}

#sacred-numbers-display h2 {
  font-size: 2.4rem;
  margin: 2rem 0 0.5rem;
  color: #3b2a1a;
  text-align: center;
  font-weight: 700;
}

.page-subtitle {
  text-align: center;
  color: #6b5a45;
  font-size: 1.05rem;
  margin: 0 0 1.75rem;
  max-width: 620px;
  margin-left: auto;
  margin-right: auto;
}

.search-bar-wrap {
  display: flex;
  justify-content: center;
  margin-bottom: 1.5rem;
}

.search-input {
  width: 100%;
  max-width: 480px;
  padding: 0.6rem 1.1rem;
  border: 1px solid #e0d0b8;
  border-radius: 999px;
  font-size: 0.95rem;
  color: #2f1e0f;
  background: #fdf8f2;
  outline: none;
  transition: border-color 0.2s, box-shadow 0.2s;
}

.search-input:focus {
  border-color: #c9a96e;
  box-shadow: 0 0 0 3px rgba(201, 169, 110, 0.18);
}

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

.no-results {
  text-align: center;
  color: #a38b6f;
  font-style: italic;
  margin: 2rem 0;
}

.numbers-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
}

.number-card {
  background: #fdf8f2;
  border: 1px solid #e8d9c5;
  border-radius: 14px;
  padding: 1.5rem 1.4rem;
  transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease;
  box-shadow: 0 4px 12px rgba(59, 42, 26, 0.07);
  display: flex;
  flex-direction: column;
  gap: 0.85rem;
}

.number-card:hover {
  transform: translateY(-5px) scale(1.02);
  box-shadow: 0 14px 36px rgba(59, 42, 26, 0.14);
  border-color: #c9a96e;
}

.number-category-tag {
  display: inline-block;
  font-size: 0.7rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.07em;
  color: #a38b6f;
  background: rgba(59, 42, 26, 0.06);
  padding: 0.2rem 0.6rem;
  border-radius: 999px;
  align-self: flex-start;
}

.number-badge {
  font-size: 3.5rem;
  font-weight: 900;
  color: #3b2a1a;
  line-height: 1;
  letter-spacing: -0.02em;
  background: linear-gradient(135deg, #3b2a1a, #c9a96e);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.number-significance {
  font-size: 0.97rem;
  line-height: 1.6;
  color: #4a3728;
  margin: 0;
}

.number-example {
  margin: 0;
  padding: 0.85rem 1rem;
  background: rgba(201, 169, 110, 0.1);
  border-left: 3px solid #c9a96e;
  border-radius: 0 8px 8px 0;
  font-size: 0.93rem;
  line-height: 1.65;
  color: #2f1e0f;
  font-style: italic;
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
}

.example-label {
  font-style: normal;
  font-weight: 700;
  font-size: 0.7rem;
  text-transform: uppercase;
  letter-spacing: 0.07em;
  color: #c9a96e;
}

.back-to-top {
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  background: #3b2a1a;
  color: #fdf8f2;
  border: none;
  border-radius: 50%;
  width: 44px;
  height: 44px;
  font-size: 1.3rem;
  cursor: pointer;
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.25);
  transition: background 0.2s, transform 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 50;
}

.back-to-top:hover {
  background: #c9a96e;
  transform: translateY(-3px);
}

@media (max-width: 600px) {
  #sacred-numbers-display h2 {
    font-size: 1.9rem;
  }

  .numbers-grid {
    grid-template-columns: 1fr;
  }

  .number-badge {
    font-size: 2.8rem;
  }
}
</style>

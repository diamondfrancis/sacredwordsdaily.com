<script setup lang="ts">
import AppLayout from '../components/AppLayout.vue'
import { ref, computed } from 'vue'
import { sacredFruits } from '../data/sacredFruits'

const categories = [
  'All',
  'Garden & Paradise',
  'Prophets & Wilderness',
  'Sacred Rites & Covenant',
  'Eastern Sacred Traditions',
  'Healing & Sacred Provision',
]

const activeCategory = ref('All')
const searchQuery = ref('')

const filteredFruits = computed(() => {
  const base = activeCategory.value === 'All'
    ? sacredFruits
    : sacredFruits.filter(f => f.category === activeCategory.value)
  const q = searchQuery.value.trim().toLowerCase()
  if (!q) return base
  return base.filter(f =>
    f.fruit.toLowerCase().includes(q) ||
    f.significance.toLowerCase().includes(q) ||
    f.tradition.toLowerCase().includes(q)
  )
})

const categoryCount = computed(() => {
  const counts: Record<string, number> = {}
  for (const cat of categories) {
    counts[cat] = cat === 'All'
      ? sacredFruits.length
      : sacredFruits.filter(f => f.category === cat).length
  }
  return counts
})

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>

<template>
  <AppLayout>
    <section id="sacred-fruits-display">
      <h2>Sacred Fruits</h2>
      <p class="page-subtitle">
        From Eden's forbidden fruit to the lotus of enlightenment — fruits have carried divine
        meaning across every sacred tradition in human history.
      </p>

      <div class="search-bar-wrap">
        <input
          v-model="searchQuery"
          type="search"
          class="search-input"
          placeholder="Search a fruit, tradition, or theme..."
          aria-label="Search sacred fruits"
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

      <p v-if="filteredFruits.length === 0" class="no-results">
        No fruits found for "{{ searchQuery }}".
      </p>

      <div class="fruits-grid">
        <article
          v-for="item in filteredFruits"
          :key="item.fruit"
          class="fruit-card"
        >
          <span class="fruit-category-tag">{{ item.category }}</span>
          <h3 class="fruit-name">{{ item.fruit }}</h3>
          <p class="fruit-tradition">
            <svg viewBox="0 0 16 16" fill="currentColor" aria-hidden="true" class="tradition-icon">
              <path d="M8 0C5.243 0 3 2.243 3 5c0 3.75 5 11 5 11s5-7.25 5-11c0-2.757-2.243-5-5-5zm0 7.5A2.5 2.5 0 1 1 8 2.5 2.5 2.5 0 0 1 8 7.5z"/>
            </svg>
            {{ item.tradition }}
          </p>
          <p class="fruit-significance">{{ item.significance }}</p>
          <blockquote class="fruit-example">
            <span class="example-label">In Scripture</span>
            {{ item.example }}
          </blockquote>
        </article>
      </div>
    </section>

    <button @click="scrollToTop" aria-label="Back to top" class="back-to-top">&uarr;</button>
  </AppLayout>
</template>

<style scoped>
#sacred-fruits-display {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1rem 4rem;
}

#sacred-fruits-display h2 {
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
  margin: 0 auto 1.75rem;
  max-width: 640px;
  line-height: 1.6;
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

.fruits-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 1.5rem;
}

.fruit-card {
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

.fruit-card:hover {
  transform: translateY(-5px) scale(1.01);
  box-shadow: 0 14px 36px rgba(59, 42, 26, 0.14);
  border-color: #c9a96e;
}

.fruit-category-tag {
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

.fruit-name {
  font-size: 1.75rem;
  font-weight: 800;
  color: #3b2a1a;
  margin: 0;
  line-height: 1.1;
}

.fruit-tradition {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  font-size: 0.82rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: #c9a96e;
  margin: 0;
}

.tradition-icon {
  width: 0.85rem;
  height: 0.85rem;
  flex-shrink: 0;
  color: #c9a96e;
}

.fruit-significance {
  font-size: 0.96rem;
  line-height: 1.65;
  color: #4a3728;
  margin: 0;
}

.fruit-example {
  margin: 0;
  padding: 0.85rem 1rem;
  background: rgba(201, 169, 110, 0.1);
  border-left: 3px solid #c9a96e;
  border-radius: 0 8px 8px 0;
  font-size: 0.92rem;
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
  #sacred-fruits-display h2 {
    font-size: 1.9rem;
  }

  .fruits-grid {
    grid-template-columns: 1fr;
  }
}
</style>

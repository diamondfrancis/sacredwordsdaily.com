<script setup lang="ts">
import AppLayout from '../components/AppLayout.vue'
import WordSlideshow from '../components/WordSlideshow.vue'
import { ref } from 'vue'

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

// Optional: Could fetch this from an API later for a true "daily" feature
const dailyInspiration = ref({
  type: 'verse',
  text: 'The Lord is my shepherd; I shall not want. — Psalm 23:1',
  note: 'A gentle reminder today: rest in His provision.'
})
</script>

<template>
  <AppLayout>
    <section id="home-hero">
      <div class="hero-content">
        <h1>Welcome to Sacred Words Daily</h1>
        <p class="lead">
          A sanctuary of soul-stirring words — where timeless poetry meets eternal Scripture,
          where inspirational quotes kindle hope, and where your own voice finds a home among fellow seekers.
        </p>
        <p>
          Here, every day offers a fresh encounter with beauty, truth, and grace. Whether you come to
          receive encouragement in quiet moments, share verses or verses of your own heart, or simply
          sit in the presence of words that have lifted generations, you belong here.
        </p>

        <WordSlideshow />

        <div class="daily-spotlight">
          <h3>Today's Sacred Spark</h3>
          <blockquote class="daily-quote">
            {{ dailyInspiration.text }}
          </blockquote>
          <p class="daily-note">{{ dailyInspiration.note }}</p>
        </div>

        <div class="cta-group">
          <RouterLink class="cta-button primary" to="/poetry">
            Explore Poetry
          </RouterLink>
          <RouterLink class="cta-button secondary" to="/bible-verses">
            Discover Bible Verses
          </RouterLink>
          <RouterLink class="cta-button outline" to="/quotes">
            Inspirational Quotes
          </RouterLink>
        </div>

        <p class="community-invite">
          Join our growing community of word-lovers. Share a poem, reflect on a verse, or simply
          let these sacred words renew your spirit — one day at a time.
        </p>
      </div>
    </section>

    <button @click="scrollToTop" aria-label="Back to top" class="back-to-top">↑</button>
  </AppLayout>
</template>

<style scoped>
#home-hero {
  padding: 4rem 1.5rem 5rem;
  text-align: center;
  max-width: 900px;
  margin: 0 auto;
}

.hero-content h1 {
  font-size: 3rem;
  margin-bottom: 1.5rem;
  color: #3b2a1a;
  font-weight: 700;
  line-height: 1.1;
}

.lead {
  font-size: 1.35rem;
  line-height: 1.6;
  color: #4a3728;
  margin-bottom: 1.75rem;
  font-style: italic;
}

#home-hero p {
  font-size: 1.15rem;
  line-height: 1.7;
  color: #5a3e2b;
  margin-bottom: 2rem;
}

.daily-spotlight {
  background: linear-gradient(135deg, #fdf8f2 0%, #f8f0e5 100%);
  border: 1px solid #e0d0b8;
  border-radius: 12px;
  padding: 2rem 1.75rem;
  margin: 2.5rem 0;
  box-shadow: 0 6px 20px rgba(59, 42, 26, 0.08);
}

.daily-spotlight h3 {
  font-size: 1.4rem;
  color: #3b2a1a;
  margin-bottom: 1rem;
}

.daily-quote {
  font-size: 1.25rem;
  line-height: 1.65;
  color: #2f1e0f;
  font-family: Georgia, serif;
  font-style: italic;
  margin: 1rem 0;
  padding: 0 1rem;
  border-left: 4px solid #c9a96e;
}

.daily-note {
  font-size: 1rem;
  color: #6b5a45;
  font-style: italic;
}

.cta-group {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1.25rem;
  margin: 2.5rem 0 3rem;
}

.cta-button {
  display: inline-block;
  padding: 0.9rem 2rem;
  border-radius: 6px;
  text-decoration: none;
  font-size: 1.1rem;
  font-weight: 600;
  transition: all 0.25s ease;
}

.primary {
  background-color: #3b2a1a;
  color: #fdf8f2;
}

.primary:hover {
  background-color: #c9a96e;
  color: #3b2a1a;
  transform: translateY(-2px);
}

.secondary {
  background-color: #6b5a45;
  color: #fdf8f2;
}

.secondary:hover {
  background-color: #c9a96e;
  color: #3b2a1a;
  transform: translateY(-2px);
}

.outline {
  background: transparent;
  border: 2px solid #3b2a1a;
  color: #3b2a1a;
}

.outline:hover {
  background-color: #3b2a1a;
  color: #fdf8f2;
  transform: translateY(-2px);
}

.community-invite {
  font-size: 1.1rem;
  color: #5a3e2b;
  font-weight: 500;
}

.back-to-top {
  position: fixed;
  bottom: 2.5rem;
  right: 2.5rem;
  background-color: #3b2a1a;
  color: #fdf8f2;
  border: none;
  border-radius: 50%;
  width: 3rem;
  height: 3rem;
  font-size: 1.4rem;
  cursor: pointer;
  box-shadow: 0 4px 14px rgba(59, 42, 26, 0.3);
  transition: all 0.25s;
  z-index: 1000;
}

.back-to-top:hover {
  background-color: #c9a96e;
  color: #3b2a1a;
  transform: translateY(-4px);
}
</style>
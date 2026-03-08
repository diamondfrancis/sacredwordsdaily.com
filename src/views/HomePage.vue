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
        <p class="eyebrow">A daily sanctuary of the soul</p>
        <h1>
          Welcome to<br>
          <em>Sacred Words</em> <strong>Daily</strong>
        </h1>
        <p class="lead">
          Where <strong>timeless poetry</strong> meets <em>eternal Scripture</em> —
          where inspirational quotes <strong>kindle hope</strong>, and where your own voice
          finds a home among <em>fellow seekers</em>.
        </p>
        <p class="body-text">
          Every day holds a <strong>fresh encounter</strong> with beauty, truth, and grace.
          Come to receive encouragement, share what stirs your heart, or simply
          <em>sit in the presence of words that have lifted generations</em>.
          <strong>You belong here.</strong>
        </p>

        <WordSlideshow />

        <div class="daily-spotlight">
          <p class="spotlight-label">✦ Today's Sacred Spark ✦</p>
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
          Join a growing community of word-lovers — share a poem, reflect on a verse,<br>
          or simply let these <em>sacred words</em> renew your spirit,
          <strong>one day at a time.</strong>
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

.eyebrow {
  font-size: 0.85rem;
  font-weight: 700;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: #c9a96e;
  margin-bottom: 1rem;
}

.hero-content h1 {
  font-size: 3.4rem;
  margin-bottom: 1.5rem;
  color: #3b2a1a;
  font-weight: 800;
  line-height: 1.1;
  font-family: Georgia, serif;
}

.hero-content h1 em {
  font-style: italic;
  font-weight: 400;
  color: #6b4226;
}

.hero-content h1 strong {
  font-weight: 900;
  color: #3b2a1a;
}

.lead {
  font-size: 1.35rem;
  line-height: 1.7;
  color: #4a3728;
  margin-bottom: 1.75rem;
  font-family: Georgia, serif;
}

.lead strong {
  font-weight: 700;
  color: #3b2a1a;
}

.lead em {
  font-style: italic;
  color: #7a4f30;
}

.body-text {
  font-size: 1.12rem;
  line-height: 1.8;
  color: #5a3e2b;
  margin-bottom: 2rem;
}

.body-text strong {
  font-weight: 700;
  color: #3b2a1a;
}

.body-text em {
  font-style: italic;
  color: #7a4f30;
}

.daily-spotlight {
  background: linear-gradient(135deg, #fdf8f2 0%, #f8f0e5 100%);
  border: 1px solid #e0d0b8;
  border-radius: 12px;
  padding: 2rem 1.75rem;
  margin: 2.5rem 0;
  box-shadow: 0 6px 20px rgba(59, 42, 26, 0.08);
}

.spotlight-label {
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: #c9a96e;
  margin-bottom: 1rem;
}

.daily-quote {
  font-size: 1.25rem;
  line-height: 1.65;
  color: #2f1e0f;
  font-family: Georgia, serif;
  font-style: italic;
  font-weight: 400;
  margin: 1rem 0;
  padding: 0 1rem;
  border-left: 4px solid #c9a96e;
  text-align: left;
}

.daily-note {
  font-size: 0.98rem;
  color: #6b5a45;
  font-style: italic;
  margin: 0;
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
  font-size: 1rem;
  font-weight: 700;
  letter-spacing: 0.03em;
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
  line-height: 1.8;
  color: #5a3e2b;
}

.community-invite em {
  font-style: italic;
  color: #7a4f30;
}

.community-invite strong {
  font-weight: 700;
  color: #3b2a1a;
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
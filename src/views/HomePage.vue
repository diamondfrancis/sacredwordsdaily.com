<script setup lang="ts">
import AppLayout from '../components/AppLayout.vue'

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>

<template>
  <AppLayout>
    <section id="home-intro">
      <h2>Welcome to Sacred Words Daily</h2>
      <p>
        At Sacred Words Daily, we celebrate the beauty of poetry and the power of words. Join our
        community of poetry lovers and explore a collection of inspiring quotes, uplifting Bible
        verses, and heartfelt contributions from talented writers.
      </p>
      <br />
      <p>
        Whether you're here to find inspiration, share your own work, or connect with others, we
        invite you to dive into the world of words and let them transform your day.
      </p>
      <div class="button-container">
        <RouterLink class="cta-button" to="/poetry">Explore Poetry</RouterLink>
      </div>
    </section>

    <button @click="scrollToTop" aria-label="Back to top" class="back-to-top">↑</button>
  </AppLayout>
</template>

<style scoped>
#home-intro {
  margin-bottom: 2.5rem;
}

#home-intro h2 {
  font-size: 2rem;
  margin-bottom: 1rem;
  color: #3b2a1a;
}

#home-intro p {
  font-size: 1.05rem;
  color: #5a3e2b;
}

.button-container {
  margin-top: 1.5rem;
}

.cta-button {
  display: inline-block;
  background-color: #3b2a1a;
  color: #fdf8f2;
  padding: 0.75rem 1.5rem;
  border-radius: 4px;
  text-decoration: none;
  font-size: 1rem;
  transition: background-color 0.2s;
}

.cta-button:hover {
  background-color: #c9a96e;
  color: #3b2a1a;
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
  box-shadow: 0 2px 8px rgba(59, 42, 26, 0.3);
  transition: background-color 0.2s;
}

.back-to-top:hover {
  background-color: #c9a96e;
  color: #3b2a1a;
}
</style>

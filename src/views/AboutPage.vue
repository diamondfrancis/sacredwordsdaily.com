<script setup lang="ts">
import AppLayout from '../components/AppLayout.vue'
</script>

<template>
  <AppLayout>
    <section id="about">
      <div class="about-hero">
        <p class="eyebrow">Our Mission</p>
        <h1>About Sacred Words Daily</h1>
        <p class="lead">
          A quiet place on the internet where timeless words from every sacred tradition
          are gathered, preserved, and shared — one day at a time.
        </p>
      </div>

      <div class="about-grid">
        <div class="about-card">
          <div class="card-icon">✦</div>
          <h3>What We Are</h3>
          <p>
            Sacred Words Daily is a curated spiritual resource drawing from the Bible, Quran,
            Torah, Buddhist texts, Hindu scriptures, and the great wells of world poetry and
            philosophy. Our goal is to bring the best of humanity's sacred literature to your
            screen every single day.
          </p>
        </div>

        <div class="about-card">
          <div class="card-icon">☽</div>
          <h3>Why We Exist</h3>
          <p>
            In an age of noise, the soul craves stillness. Sacred words have a way of cutting
            through distraction and touching something real. We believe that whether you are
            a person of faith, a seeker, or simply someone who loves beautiful language —
            these words belong to you.
          </p>
        </div>

        <div class="about-card">
          <div class="card-icon">⊕</div>
          <h3>What We Cover</h3>
          <p>
            Bible verses, sacred poetry, inspirational quotes, sacred names, holy places, sacred
            numbers, sacred fruits, TED Talks, and more. Every category is researched with care,
            rooted in historical religious texts, and written to educate as much as to inspire.
          </p>
        </div>

        <div class="about-card">
          <div class="card-icon">♾</div>
          <h3>Who We Are For</h3>
          <p>
            Everyone. Sacred Words Daily is interfaith and inclusive. Whether you come from
            a Christian, Muslim, Jewish, Hindu, Buddhist, or secular background — or none at all —
            you are welcome here. Truth and beauty have no borders.
          </p>
        </div>
      </div>

      <div class="about-founder">
        <div class="founder-text">
          <h2>Built with Purpose</h2>
          <p>
            Sacred Words Daily was created by
            <a href="https://diamondfrancis.online/" target="_blank" rel="noopener noreferrer">Diamond Francis</a>
            — a developer and lifelong lover of sacred literature. This site exists out of a
            personal conviction that the world becomes a little more graceful when we slow
            down to read words that have outlasted empires.
          </p>
          <p>
            Every word on this site has been chosen deliberately. Every category has been
            assembled with respect for the tradition it comes from. We are grateful you are here.
          </p>
          <RouterLink to="/contact" class="cta-link">Get in Touch &rarr;</RouterLink>
        </div>
      </div>
    </section>
  </AppLayout>
</template>

<style scoped>
#about {
  max-width: 960px;
  margin: 0 auto;
  padding: 2rem 1rem 5rem;
}

.about-hero {
  text-align: center;
  padding: 2.5rem 0 3rem;
}

.eyebrow {
  font-size: 0.8rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: #c9a96e;
  margin: 0 0 0.75rem;
}

.about-hero h1 {
  font-size: 2.6rem;
  font-weight: 800;
  color: #3b2a1a;
  margin: 0 0 1rem;
  line-height: 1.15;
}

.lead {
  font-size: 1.15rem;
  color: #5a3e2b;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.7;
}

.about-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1.5rem;
  margin-bottom: 3.5rem;
}

.about-card {
  background: #fdf8f2;
  border: 1px solid #e8d9c5;
  border-radius: 14px;
  padding: 2rem 1.5rem;
  box-shadow: 0 4px 12px rgba(59, 42, 26, 0.07);
  transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease;
}

.about-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 30px rgba(59, 42, 26, 0.12);
  border-color: #c9a96e;
}

.card-icon {
  font-size: 1.8rem;
  color: #c9a96e;
  margin-bottom: 0.75rem;
  line-height: 1;
}

.about-card h3 {
  font-size: 1.2rem;
  font-weight: 700;
  color: #3b2a1a;
  margin: 0 0 0.75rem;
}

.about-card p {
  font-size: 0.97rem;
  line-height: 1.7;
  color: #4a3728;
  margin: 0;
}

.about-founder {
  background: #3b2a1a;
  color: #fdf8f2;
  border-radius: 16px;
  padding: 3rem 2.5rem;
}

.founder-text h2 {
  font-size: 1.8rem;
  font-weight: 800;
  color: #fdf8f2;
  margin: 0 0 1rem;
}

.founder-text p {
  font-size: 1rem;
  line-height: 1.75;
  color: #e8d9c5;
  margin: 0 0 1rem;
}

.founder-text a {
  color: #c9a96e;
  text-decoration: none;
  border-bottom: 1px solid rgba(201, 169, 110, 0.4);
  transition: color 0.2s;
}

.founder-text a:hover {
  color: #e8c98a;
}

.cta-link {
  display: inline-block;
  margin-top: 0.5rem;
  font-weight: 700;
  font-size: 0.95rem;
  color: #c9a96e;
  text-decoration: none;
  border-bottom: none !important;
  letter-spacing: 0.03em;
  transition: color 0.2s, transform 0.2s;
}

.cta-link:hover {
  color: #e8c98a;
  transform: translateX(3px);
}

@media (max-width: 600px) {
  .about-hero h1 {
    font-size: 2rem;
  }

  .about-founder {
    padding: 2rem 1.25rem;
  }

  .about-grid {
    grid-template-columns: 1fr;
  }
}
</style>

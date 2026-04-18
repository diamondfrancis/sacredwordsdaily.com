<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { useRouter } from 'vue-router'

const menuOpen = ref(false)
const router = useRouter()

const now = ref(new Date())
let clockTimer: ReturnType<typeof setInterval> | null = null

const formattedDateTime = ref('')

function updateClock() {
  now.value = new Date()
  formattedDateTime.value = now.value.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }) + ' · ' + now.value.toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
  })
}

onMounted(() => {
  updateClock()
  clockTimer = setInterval(updateClock, 60_000)
})

onBeforeUnmount(() => {
  if (clockTimer) clearInterval(clockTimer)
})

function toggleMenu() {
  menuOpen.value = !menuOpen.value
}

function closeMenu() {
  menuOpen.value = false
}

router.afterEach(() => {
  menuOpen.value = false
})
</script>

<template>
  <header :class="{ 'menu-open': menuOpen }">
    <RouterLink to="/" class="site-title" aria-label="Go to Home">Sacred Words Daily</RouterLink>

    <button
      class="hamburger"
      :class="{ open: menuOpen }"
      @click="toggleMenu"
      :aria-expanded="menuOpen"
      aria-controls="main-nav"
      aria-label="Toggle navigation menu"
    >
      <span></span>
      <span></span>
      <span></span>
    </button>

    <nav id="main-nav" role="navigation" :class="{ open: menuOpen }">
      <ul>
        <li>
          <RouterLink to="/" aria-label="Navigate to Home" @click="closeMenu">Home</RouterLink>
        </li>
        <li>
          <RouterLink to="/poetry" aria-label="Navigate to Poetry" @click="closeMenu">Poetry</RouterLink>
        </li>
        <li>
          <RouterLink to="/quotes" aria-label="Navigate to Quotes" @click="closeMenu">Quotes</RouterLink>
        </li>
        <li>
          <RouterLink to="/bible-verses" aria-label="Navigate to Bible Verses" @click="closeMenu">Bible Verses</RouterLink>
        </li>
      </ul>
    </nav>
  </header>

  <main>
    <slot />
  </main>

  <footer>
    <div class="footer-grid">
      <div class="footer-section">
        <h4 class="footer-heading">Contact</h4>
        <a href="mailto:contact@sacredwordsdaily.com" class="footer-email">contact@sacredwordsdaily.com</a>
      </div>

      <div class="footer-section">
        <h4 class="footer-heading">Follow Us</h4>
        <div class="social-links">
          <a href="https://x.com/sacred_daily" target="_blank" rel="noopener noreferrer" aria-label="Twitter">𝕏 Twitter</a>
        </div>
      </div>

      <div class="footer-section">
        <h4 class="footer-heading">Date &amp; Time</h4>
        <p class="footer-clock">{{ formattedDateTime }}</p>
      </div>
    </div>

    <div class="footer-bottom">
      <p>&copy; {{ new Date().getFullYear() }} Sacred Words Daily · Made by
        <a href="https://diamondfrancis.online/" target="_blank" rel="noopener noreferrer">Diamond Francis</a>
      </p>
    </div>
  </footer>
</template>

<style scoped>
header {
  background-color: #3b2a1a;
  color: #fdf8f2;
  padding: 1rem 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  z-index: 100;
}

.site-title {
  font-size: 1.8rem;
  font-weight: 700;
  letter-spacing: 0.04em;
  color: #fdf8f2;
  text-decoration: none;
  flex-shrink: 0;
  transition: color 0.2s;
}

.site-title:hover {
  color: #c9a96e;
}

/* ── Hamburger ── */
.hamburger {
  display: none;
  flex-direction: column;
  justify-content: space-between;
  width: 28px;
  height: 20px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 110;
  flex-shrink: 0;
}

.hamburger span {
  display: block;
  width: 100%;
  height: 2px;
  background-color: #fdf8f2;
  border-radius: 2px;
  transition: transform 0.3s ease, opacity 0.3s ease;
  transform-origin: center;
}

.hamburger.open span:nth-child(1) {
  transform: translateY(9px) rotate(45deg);
}
.hamburger.open span:nth-child(2) {
  opacity: 0;
  transform: scaleX(0);
}
.hamburger.open span:nth-child(3) {
  transform: translateY(-9px) rotate(-45deg);
}

/* ── Desktop nav ── */
nav ul {
  list-style: none;
  display: flex;
  gap: 0.25rem;
  margin: 0;
  padding: 0;
}

nav ul li a {
  color: #fdf8f2;
  text-decoration: none;
  font-size: 1rem;
  padding: 0.4rem 0.75rem;
  border-radius: 6px;
  transition: color 0.2s, background 0.2s;
  position: relative;
}

nav ul li a::after {
  content: '';
  position: absolute;
  left: 0.75rem;
  right: 0.75rem;
  bottom: 2px;
  height: 2px;
  background: #c9a96e;
  border-radius: 2px;
  transform: scaleX(0);
  transition: transform 0.25s ease;
}

nav ul li a:hover {
  color: #c9a96e;
  background: rgba(201, 169, 110, 0.1);
}

nav ul li a:hover::after {
  transform: scaleX(1);
}

nav ul li a.router-link-exact-active {
  color: #c9a96e;
}

nav ul li a.router-link-exact-active::after {
  transform: scaleX(1);
}

/* ── Mobile ── */
@media (max-width: 640px) {
  header {
    flex-wrap: wrap;
    gap: 0;
    padding: 1rem 1.25rem;
  }

  .site-title {
    flex: 1;
    min-width: 0;
    font-size: 1.35rem;
  }

  .hamburger {
    display: flex;
  }

  nav {
    display: none;
    width: 100%;
    order: 3;
    border-top: 1px solid rgba(253, 248, 242, 0.12);
    margin-top: 0.75rem;
    padding-top: 0.25rem;
  }

  nav.open {
    display: block;
    animation: slideDown 0.25s ease;
  }

  @keyframes slideDown {
    from { opacity: 0; transform: translateY(-8px); }
    to   { opacity: 1; transform: translateY(0); }
  }

  nav ul {
    flex-direction: column;
    gap: 0;
  }

  nav ul li a {
    display: block;
    padding: 0.85rem 0.5rem;
    border-radius: 0;
    border-bottom: 1px solid rgba(253, 248, 242, 0.08);
    font-size: 1.05rem;
  }

  nav ul li a::after {
    display: none;
  }

  nav ul li:last-child a {
    border-bottom: none;
  }
}

/* ── Main & Footer ── */
main {
  max-width: 900px;
  margin: 3rem auto;
  padding: 0 1.5rem;
  min-height: 60vh;
}

footer {
  background-color: #3b2a1a;
  color: #fdf8f2;
  padding: 2rem 1.5rem 1.25rem;
  font-size: 0.9rem;
}

.footer-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  max-width: 900px;
  margin: 0 auto 1.5rem;
  text-align: center;
}

.footer-heading {
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: #c9a96e;
  margin: 0 0 0.5rem;
  font-weight: 700;
}

.footer-section p,
.footer-section a {
  margin: 0;
}

.footer-email {
  color: #fdf8f2;
  text-decoration: none;
  word-break: break-all;
}

.footer-email:hover {
  color: #c9a96e;
  text-decoration: underline;
}

.social-links {
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
}

.social-links a {
  color: #fdf8f2;
  text-decoration: none;
  transition: color 0.2s;
}

.social-links a:hover {
  color: #c9a96e;
}

.footer-clock {
  color: rgba(253, 248, 242, 0.8);
  font-size: 0.88rem;
}

.footer-bottom {
  border-top: 1px solid rgba(253, 248, 242, 0.12);
  padding-top: 1rem;
  text-align: center;
}

.footer-bottom p {
  margin: 0;
}

.footer-bottom a {
  color: #c9a96e;
  text-decoration: none;
}

.footer-bottom a:hover {
  text-decoration: underline;
}

@media (max-width: 640px) {
  .footer-grid {
    grid-template-columns: 1fr;
    gap: 1.25rem;
  }
}
</style>

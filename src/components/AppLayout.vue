<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, computed } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { getWordOfTheDay } from '../data/sacredWords'

const wordOfTheDay = getWordOfTheDay()

const menuOpen = ref(false)
const quotesDropdownOpen = ref(false)
const sacredDropdownOpen = ref(false)
const router = useRouter()
const route = useRoute()

const quotesActive = computed(() =>
  ['/quotes', '/youtube-quotes', '/ted-talks'].includes(route.path)
)

const sacredActive = computed(() =>
  ['/sacred-words', '/sacred-names', '/sacred-places', '/sacred-numbers'].includes(route.path)
)

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
  quotesDropdownOpen.value = false
  sacredDropdownOpen.value = false
}

function toggleQuotesDropdown() {
  quotesDropdownOpen.value = !quotesDropdownOpen.value
  sacredDropdownOpen.value = false
}

function toggleSacredDropdown() {
  sacredDropdownOpen.value = !sacredDropdownOpen.value
  quotesDropdownOpen.value = false
}

router.afterEach(() => {
  menuOpen.value = false
  quotesDropdownOpen.value = false
  sacredDropdownOpen.value = false
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
        <li class="has-dropdown">
          <button
            class="dropdown-trigger"
            :class="{ 'quotes-active': quotesActive }"
            @click="toggleQuotesDropdown"
            :aria-expanded="quotesDropdownOpen"
            aria-haspopup="true"
          >
            Quotes
            <svg class="chevron" :class="{ rotated: quotesDropdownOpen }" viewBox="0 0 10 6" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><path d="M1 1l4 4 4-4"/></svg>
          </button>
          <ul class="dropdown-menu" :class="{ open: quotesDropdownOpen }">
            <li>
              <RouterLink to="/quotes" aria-label="Navigate to Inspirational Quotes" @click="closeMenu">Inspirational</RouterLink>
            </li>
            <li>
              <RouterLink to="/youtube-quotes" aria-label="Navigate to YouTube Quotes" @click="closeMenu">YouTube</RouterLink>
            </li>
            <li>
              <RouterLink to="/ted-talks" aria-label="Navigate to TED Talks" @click="closeMenu">TED Talks</RouterLink>
            </li>
          </ul>
        </li>
        <li class="has-dropdown">
          <button
            class="dropdown-trigger"
            :class="{ 'quotes-active': sacredActive }"
            @click="toggleSacredDropdown"
            :aria-expanded="sacredDropdownOpen"
            aria-haspopup="true"
          >
            Sacred
            <svg class="chevron" :class="{ rotated: sacredDropdownOpen }" viewBox="0 0 10 6" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><path d="M1 1l4 4 4-4"/></svg>
          </button>
          <ul class="dropdown-menu" :class="{ open: sacredDropdownOpen }">
            <li>
              <RouterLink to="/sacred-words" aria-label="Navigate to Sacred Words" @click="closeMenu">Words</RouterLink>
            </li>
            <li>
              <RouterLink to="/sacred-names" aria-label="Navigate to Sacred Names" @click="closeMenu">Names</RouterLink>
            </li>
            <li>
              <RouterLink to="/sacred-places" aria-label="Navigate to Sacred Places" @click="closeMenu">Places</RouterLink>
            </li>
            <li>
              <RouterLink to="/sacred-numbers" aria-label="Navigate to Sacred Numbers" @click="closeMenu">Numbers</RouterLink>
            </li>
          </ul>
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

  <section class="wotd-banner">
    <div class="wotd-inner">
      <span class="wotd-label">✦ Word of the Day</span>
      <h2 class="wotd-word">{{ wordOfTheDay.word }}</h2>
      <p class="wotd-category">{{ wordOfTheDay.category }}</p>
      <p class="wotd-meaning">{{ wordOfTheDay.meaning }}</p>
      <blockquote class="wotd-example">&ldquo;{{ wordOfTheDay.example }}&rdquo;</blockquote>
      <RouterLink to="/sacred-words" class="wotd-link">Explore All Sacred Words &rarr;</RouterLink>
    </div>
  </section>

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

/* ── Quotes Dropdown ── */
.has-dropdown {
  position: relative;
}

.dropdown-trigger {
  background: none;
  border: none;
  color: #fdf8f2;
  font-size: 1rem;
  font-family: inherit;
  padding: 0.4rem 0.75rem;
  border-radius: 6px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.35rem;
  transition: color 0.2s, background 0.2s;
  position: relative;
}

.dropdown-trigger::after {
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

.dropdown-trigger:hover {
  color: #c9a96e;
  background: rgba(201, 169, 110, 0.1);
}

.dropdown-trigger:hover::after {
  transform: scaleX(1);
}

.dropdown-trigger.quotes-active {
  color: #c9a96e;
}

.dropdown-trigger.quotes-active::after {
  transform: scaleX(1);
}

.chevron {
  width: 0.65rem;
  height: 0.65rem;
  transition: transform 0.2s;
}

.chevron.rotated {
  transform: rotate(180deg);
}

.dropdown-menu {
  display: none;
  position: absolute;
  top: calc(100% + 0.5rem);
  left: 50%;
  transform: translateX(-50%);
  background: #2a1e10;
  border: 1px solid rgba(201, 169, 110, 0.25);
  border-radius: 8px;
  list-style: none;
  margin: 0;
  padding: 0.35rem 0;
  min-width: 160px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.35);
  z-index: 200;
  animation: dropFadeIn 0.15s ease;
}

@keyframes dropFadeIn {
  from { opacity: 0; transform: translateX(-50%) translateY(-4px); }
  to   { opacity: 1; transform: translateX(-50%) translateY(0); }
}

.dropdown-menu.open,
.has-dropdown:hover .dropdown-menu {
  display: block;
}

.dropdown-menu li a {
  display: block;
  padding: 0.6rem 1.1rem;
  color: #fdf8f2;
  text-decoration: none;
  font-size: 0.95rem;
  transition: color 0.2s, background 0.2s;
  white-space: nowrap;
}

.dropdown-menu li a::after {
  display: none;
}

.dropdown-menu li a:hover,
.dropdown-menu li a.router-link-exact-active {
  color: #c9a96e;
  background: rgba(201, 169, 110, 0.12);
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

  /* Dropdown — mobile */
  .has-dropdown:hover .dropdown-menu {
    display: none;
  }

  .dropdown-trigger {
    display: flex;
    justify-content: space-between;
    width: 100%;
    text-align: left;
    padding: 0.85rem 0.5rem;
    border-bottom: 1px solid rgba(253, 248, 242, 0.08);
    border-radius: 0;
    font-size: 1.05rem;
  }

  .dropdown-menu {
    position: static;
    transform: none;
    box-shadow: none;
    background: rgba(255, 255, 255, 0.05);
    border: none;
    border-left: 2px solid rgba(201, 169, 110, 0.4);
    border-radius: 0;
    padding: 0;
    min-width: auto;
    animation: none;
    margin-left: 0.5rem;
  }

  .dropdown-menu.open {
    display: block;
  }

  .dropdown-menu li a {
    padding: 0.75rem 1.25rem;
    border-bottom: 1px solid rgba(253, 248, 242, 0.06);
    font-size: 0.98rem;
  }

  .dropdown-menu li:last-child a {
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

/* ── Word of the Day Banner ── */
.wotd-banner {
  background: linear-gradient(135deg, #2a1e10 0%, #3b2a1a 60%, #1e1408 100%);
  color: #fdf8f2;
  padding: 3.5rem 1.5rem;
  text-align: center;
}

.wotd-inner {
  max-width: 680px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

.wotd-label {
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  color: #c9a96e;
}

.wotd-word {
  font-size: 3rem;
  font-weight: 800;
  margin: 0;
  color: #fdf8f2;
  letter-spacing: 0.01em;
  line-height: 1.1;
}

.wotd-category {
  font-size: 0.8rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: #a38b6f;
  margin: 0;
}

.wotd-meaning {
  font-size: 1.05rem;
  line-height: 1.65;
  color: #e8d9c5;
  margin: 0;
  max-width: 560px;
}

.wotd-example {
  margin: 0;
  padding: 1rem 1.4rem;
  background: rgba(201, 169, 110, 0.12);
  border-left: 3px solid #c9a96e;
  border-radius: 0 10px 10px 0;
  font-style: italic;
  font-size: 0.97rem;
  line-height: 1.7;
  color: #d4c4a8;
  text-align: left;
  align-self: stretch;
}

.wotd-link {
  display: inline-block;
  margin-top: 0.5rem;
  padding: 0.6rem 1.5rem;
  background: #c9a96e;
  color: #2a1e10;
  font-weight: 700;
  font-size: 0.9rem;
  border-radius: 999px;
  text-decoration: none;
  transition: background 0.2s, transform 0.2s;
}

.wotd-link:hover {
  background: #e0c080;
  transform: translateY(-2px);
}

@media (max-width: 600px) {
  .wotd-word {
    font-size: 2.2rem;
  }
}
</style>

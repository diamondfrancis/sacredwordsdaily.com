<script setup lang="ts">
import AppLayout from '../components/AppLayout.vue'
import { ref, onMounted } from 'vue'

const quotes = ref([
  { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
  { text: "Life is what happens when you're busy making other plans.", author: "John Lennon" },
  { text: "You miss 100% of the shots you don't take.", author: "Wayne Gretzky" },
  { text: "Whether you think you can or you think you can't — you're right.", author: "Henry Ford" },
  { text: "The future belongs to those who believe in the beauty of their dreams.", author: "Eleanor Roosevelt" },
  { text: "In the middle of difficulty lies opportunity.", author: "Albert Einstein" },
  { text: "Do what you can, with what you have, where you are.", author: "Theodore Roosevelt" },
  { text: "It always seems impossible until it's done.", author: "Nelson Mandela" },
  { text: "Stay hungry. Stay foolish.", author: "Steve Jobs" },
  { text: "The best way to predict the future is to create it.", author: "Peter Drucker" },
  { text: "You are enough just as you are.", author: "Meghan Markle" },
  { text: "What you get by achieving your goals is not as important as what you become.", author: "Zig Ziglar" },
  { text: "The only limit to our realization of tomorrow is our doubts of today.", author: "Franklin D. Roosevelt" },
  { text: "Act as if what you do makes a difference. It does.", author: "William James" },
  { text: "Success is not final, failure is not fatal: it is the courage to continue that counts.", author: "Winston Churchill" },
  { text: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" },
  { text: "Everything you’ve ever wanted is on the other side of fear.", author: "George Addair" },
  { text: "The harder you work for something, the greater you’ll feel when you achieve it.", author: "Unknown" },
  { text: "Don’t watch the clock; do what it does. Keep going.", author: "Sam Levenson" },
  { text: "Dream big and dare to fail.", author: "Norman Vaughan" },
  { text: "Your time is limited, so don’t waste it living someone else’s life.", author: "Steve Jobs" },
  { text: "Be yourself; everyone else is already taken.", author: "Oscar Wilde" },
  { text: "Strive not to be a success, but rather to be of value.", author: "Albert Einstein" },
  { text: "I am not a product of my circumstances. I am a product of my decisions.", author: "Stephen Covey" },
  { text: "The mind is everything. What you think you become.", author: "Buddha" },
  { text: "Happiness is not something ready-made. It comes from your own actions.", author: "Dalai Lama" },
  { text: "If opportunity doesn’t knock, build a door.", author: "Milton Berle" },
  { text: "The best revenge is massive success.", author: "Frank Sinatra" },
  { text: "Too many of us are not living our dreams because we are living our fears.", author: "Les Brown" },
  { text: "Change your thoughts and you change your world.", author: "Norman Vincent Peale" },
  { text: "It does not matter how slowly you go as long as you do not stop.", author: "Confucius" },
  { text: "You become what you believe.", author: "Oprah Winfrey" },
  { text: "The only person you are destined to become is the person you decide to be.", author: "Ralph Waldo Emerson" },
  { text: "Start where you are. Use what you have. Do what you can.", author: "Arthur Ashe" },
  { text: "Fall seven times and stand up eight.", author: "Japanese Proverb" },
  { text: "Keep your face always toward the sunshine—and shadows will fall behind you.", author: "Walt Whitman" },
  { text: "What lies behind us and what lies before us are tiny matters compared to what lies within us.", author: "Ralph Waldo Emerson" },
  { text: "The best time to plant a tree was 20 years ago. The second best time is now.", author: "Chinese Proverb" },
  { text: "You don’t have to be great to start, but you have to start to be great.", author: "Zig Ziglar" },
  { text: "Life shrinks or expands in proportion to one’s courage.", author: "Anaïs Nin" },
  { text: "An unexamined life is not worth living.", author: "Socrates" },
  { text: "Everything has beauty, but not everyone can see.", author: "Confucius" },
  { text: "When you have a dream, you’ve got to grab it and never let go.", author: "Carol Burnett" },
  { text: "I can’t change the direction of the wind, but I can adjust my sails to always reach my destination.", author: "Jimmy Dean" },
  { text: "The journey of a thousand miles begins with one step.", author: "Lao Tzu" },
  { text: "What we fear doing most is usually what we most need to do.", author: "Tim Ferriss" },
  { text: "Be the change that you wish to see in the world.", author: "Mahatma Gandhi" },
  { text: "The greatest glory in living lies not in never falling, but in rising every time we fall.", author: "Nelson Mandela" },
  { text: "If you want to lift yourself up, lift up someone else.", author: "Booker T. Washington" },
  { text: "We don’t have to wait for some grand utopian future. The future is an infinite succession of presents.", author: "Howard Zinn" }
])

function copyToClipboard(text: string) {
  navigator.clipboard.writeText(text).then(() => {
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
    <section id="quote-display">
      <h2>Inspirational Quotes</h2>
      <div id="quote-container" class="quote-grid">
        <div
          v-for="(quote, index) in quotes"
          :key="index"
          class="quote-card"
          @click="copyToClipboard(quote.text + ' — ' + quote.author)"
        >
          <p class="quote-text">“{{ quote.text }}”</p>
          <p class="quote-author">— {{ quote.author }}</p>
          <div class="copy-hint">Click to copy</div>
        </div>
      </div>
    </section>

    <button @click="scrollToTop" aria-label="Back to top" class="back-to-top">↑</button>
  </AppLayout>
</template>

<style scoped>
#quote-display h2 {
  font-size: 2.4rem;
  margin-bottom: 2rem;
  color: #3b2a1a;
  text-align: center;
}

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
  cursor: pointer;
  transition: all 0.25s ease;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(59, 42, 26, 0.08);
}

.quote-card:hover {
  transform: translateY(-6px) scale(1.03);
  box-shadow: 0 12px 32px rgba(59, 42, 26, 0.16);
  border-color: #c9a96e;
}

.quote-text {
  font-size: 1.1rem;
  line-height: 1.45;
  color: #2f1e0f;
  margin-bottom: 1rem;
  font-style: italic;
}

.quote-author {
  text-align: right;
  color: #6b5a45;
  font-weight: 600;
  margin: 0;
}

.copy-hint {
  position: absolute;
  bottom: 0.75rem;
  right: 1rem;
  font-size: 0.78rem;
  color: #a38b6f;
  opacity: 0.6;
  transition: opacity 0.2s;
  pointer-events: none;
}

.quote-card:hover .copy-hint {
  opacity: 1;
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
  box-shadow: 0 4px 12px rgba(59, 42, 26, 0.3);
  transition: all 0.2s;
  z-index: 1000;
}

.back-to-top:hover {
  background-color: #c9a96e;
  color: #3b2a1a;
  transform: translateY(-3px);
}
</style>
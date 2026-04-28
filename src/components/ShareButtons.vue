<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const props = defineProps<{
  text: string
  author?: string
  title?: string
}>()

const showMenu = ref(false)
const feedbackMsg = ref('')

function buildShareText() {
  const titleLine = props.title ? `"${props.title}"\n` : ''
  const attribution = props.author ? ` — ${props.author}` : ''
  return `${titleLine}"${props.text}"${attribution}\n\nsacredwordsdaily.com`
}

function shareOnTwitter() {
  const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(buildShareText())}`
  window.open(url, '_blank', 'noopener,noreferrer')
  showMenu.value = false
}

function showFeedback(msg: string) {
  feedbackMsg.value = msg
  setTimeout(() => { feedbackMsg.value = '' }, 3000)
}

function toggleMenu(e: Event) {
  e.stopPropagation()
  showMenu.value = !showMenu.value
}

function handleOutsideClick() {
  showMenu.value = false
}

onMounted(() => document.addEventListener('click', handleOutsideClick))
onUnmounted(() => document.removeEventListener('click', handleOutsideClick))
</script>

<template>
  <div class="share-wrap">
    <button class="share-btn" @click="toggleMenu" aria-label="Share">
      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none"
        stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/>
        <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/>
        <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/>
      </svg>
      Share
    </button>

    <div v-if="showMenu" class="share-menu" @click.stop>
      <button class="share-option twitter" @click="shareOnTwitter">
        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 1200 1227" fill="currentColor">
          <path d="M714.163 519.284 1160.89 0h-105.86L667.137 450.887 357.328 0H0l468.492 681.821L0 1226.37h105.866l409.625-476.152 327.181 476.152H1200L714.163 519.284zm-144.61 168.12-47.468-67.894L144.159 79.694h162.603l304.797 435.991 47.468 67.894 396.2 566.721H892.625L569.553 687.404z"/>
        </svg>
        X (Twitter)
      </button>

    </div>

    <p v-if="feedbackMsg" class="share-feedback">{{ feedbackMsg }}</p>
  </div>
</template>

<style scoped>
.share-wrap {
  position: relative;
  display: inline-block;
}

.share-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  background: #3b2a1a;
  color: #fdf8f2;
  border: none;
  border-radius: 8px;
  padding: 0.42rem 0.9rem;
  font-size: 0.82rem;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s, transform 0.15s;
}

.share-btn:hover {
  background: #5a3e2b;
  transform: translateY(-1px);
}

.share-menu {
  position: absolute;
  bottom: calc(100% + 6px);
  right: 0;
  background: #fff;
  border: 1px solid #e8d9c5;
  border-radius: 10px;
  box-shadow: 0 8px 24px rgba(59, 42, 26, 0.18);
  padding: 0.4rem;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  min-width: 160px;
  z-index: 100;
}

.share-option {
  display: flex;
  align-items: center;
  gap: 0.55rem;
  padding: 0.5rem 0.75rem;
  border: none;
  border-radius: 7px;
  font-size: 0.84rem;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.15s;
  text-align: left;
  background: transparent;
  color: #3b2a1a;
}

.share-option:hover {
  background: #fdf0e0;
}

.share-option.twitter { color: #0f1419; }

.share-feedback {
  position: absolute;
  bottom: calc(100% + 40px);
  right: 0;
  background: #3b2a1a;
  color: #fdf8f2;
  font-size: 0.78rem;
  padding: 0.3rem 0.65rem;
  border-radius: 6px;
  white-space: nowrap;
  pointer-events: none;
  z-index: 101;
}
</style>

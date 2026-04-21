<script setup lang="ts">
import AppLayout from '../components/AppLayout.vue'
import { ref } from 'vue'

const form = ref({
  name: '',
  email: '',
  subject: '',
  message: '',
})

const submitted = ref(false)
const submitting = ref(false)
const errorMessage = ref('')

async function handleSubmit() {
  errorMessage.value = ''
  submitting.value = true

  // Basic validation
  if (!form.value.name.trim() || !form.value.email.trim() || !form.value.message.trim()) {
    errorMessage.value = 'Please fill in all required fields.'
    submitting.value = false
    return
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(form.value.email)) {
    errorMessage.value = 'Please enter a valid email address.'
    submitting.value = false
    return
  }

  try {
    const res = await fetch('https://formspree.io/f/contact@sacredwordsdaily.com', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({
        name: form.value.name,
        email: form.value.email,
        subject: form.value.subject,
        message: form.value.message,
      }),
    })

    if (res.ok) {
      submitted.value = true
      form.value = { name: '', email: '', subject: '', message: '' }
    } else {
      errorMessage.value = 'Something went wrong. Please try emailing us directly.'
    }
  } catch {
    errorMessage.value = 'Network error. Please try emailing us directly.'
  } finally {
    submitting.value = false
  }
}
</script>

<template>
  <AppLayout>
    <section id="contact">
      <div class="contact-hero">
        <p class="eyebrow">Reach Out</p>
        <h1>Contact Us</h1>
        <p class="lead">
          Have a question, a suggestion, or a sacred word to share?
          We would love to hear from you.
        </p>
      </div>

      <div class="contact-layout">
        <div class="contact-info">
          <h2>Get In Touch</h2>
          <p>
            Sacred Words Daily is a labor of love. Your feedback, stories, and suggestions
            help shape what we create. Whether it is a correction, a contribution, or simply
            a word of encouragement — we read every message.
          </p>

          <ul class="contact-details">
            <li>
              <span class="detail-label">Email</span>
              <a href="mailto:contact@sacredwordsdaily.com">contact@sacredwordsdaily.com</a>
            </li>
            <li>
              <span class="detail-label">Twitter / X</span>
              <a href="https://x.com/sacred_daily" target="_blank" rel="noopener noreferrer">@sacred_daily</a>
            </li>
            <li>
              <span class="detail-label">Creator</span>
              <a href="https://diamondfrancis.online/" target="_blank" rel="noopener noreferrer">Diamond Francis</a>
            </li>
          </ul>

          <RouterLink to="/about" class="about-link">Learn more about us &rarr;</RouterLink>
        </div>

        <div class="contact-form-wrap">
          <div v-if="submitted" class="success-message" role="status">
            <div class="success-icon">✦</div>
            <h3>Message Sent</h3>
            <p>Thank you for reaching out. We will get back to you as soon as possible.</p>
            <button class="send-another" @click="submitted = false">Send another message</button>
          </div>

          <form v-else @submit.prevent="handleSubmit" class="contact-form" novalidate>
            <div class="field">
              <label for="name">Name <span aria-hidden="true">*</span></label>
              <input
                id="name"
                v-model="form.name"
                type="text"
                placeholder="Your name"
                autocomplete="name"
                required
              />
            </div>

            <div class="field">
              <label for="email">Email <span aria-hidden="true">*</span></label>
              <input
                id="email"
                v-model="form.email"
                type="email"
                placeholder="you@example.com"
                autocomplete="email"
                required
              />
            </div>

            <div class="field">
              <label for="subject">Subject</label>
              <input
                id="subject"
                v-model="form.subject"
                type="text"
                placeholder="What is this about?"
              />
            </div>

            <div class="field">
              <label for="message">Message <span aria-hidden="true">*</span></label>
              <textarea
                id="message"
                v-model="form.message"
                rows="6"
                placeholder="Write your message here..."
                required
              ></textarea>
            </div>

            <p v-if="errorMessage" class="error-msg" role="alert">{{ errorMessage }}</p>

            <button type="submit" class="submit-btn" :disabled="submitting">
              {{ submitting ? 'Sending…' : 'Send Message' }}
            </button>
          </form>
        </div>
      </div>
    </section>
  </AppLayout>
</template>

<style scoped>
#contact {
  max-width: 960px;
  margin: 0 auto;
  padding: 2rem 1rem 5rem;
}

.contact-hero {
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

.contact-hero h1 {
  font-size: 2.6rem;
  font-weight: 800;
  color: #3b2a1a;
  margin: 0 0 1rem;
  line-height: 1.15;
}

.lead {
  font-size: 1.1rem;
  color: #5a3e2b;
  max-width: 560px;
  margin: 0 auto;
  line-height: 1.7;
}

.contact-layout {
  display: grid;
  grid-template-columns: 1fr 1.4fr;
  gap: 3rem;
  align-items: start;
}

.contact-info h2 {
  font-size: 1.5rem;
  font-weight: 700;
  color: #3b2a1a;
  margin: 0 0 1rem;
}

.contact-info p {
  font-size: 0.97rem;
  line-height: 1.75;
  color: #4a3728;
  margin: 0 0 1.5rem;
}

.contact-details {
  list-style: none;
  padding: 0;
  margin: 0 0 1.75rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.contact-details li {
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
}

.detail-label {
  font-size: 0.72rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.09em;
  color: #c9a96e;
}

.contact-details a {
  font-size: 0.97rem;
  color: #3b2a1a;
  text-decoration: none;
  border-bottom: 1px solid #e8d9c5;
  padding-bottom: 0.1rem;
  transition: color 0.2s, border-color 0.2s;
}

.contact-details a:hover {
  color: #c9a96e;
  border-color: #c9a96e;
}

.about-link {
  display: inline-block;
  font-weight: 700;
  font-size: 0.9rem;
  color: #c9a96e;
  text-decoration: none;
  letter-spacing: 0.02em;
  transition: color 0.2s, transform 0.2s;
}

.about-link:hover {
  color: #a07840;
  transform: translateX(3px);
}

/* Form */
.contact-form-wrap {
  background: #fdf8f2;
  border: 1px solid #e8d9c5;
  border-radius: 16px;
  padding: 2rem;
  box-shadow: 0 4px 14px rgba(59, 42, 26, 0.07);
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.field {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
}

.field label {
  font-size: 0.85rem;
  font-weight: 700;
  color: #3b2a1a;
  letter-spacing: 0.02em;
}

.field label span {
  color: #c9a96e;
  margin-left: 2px;
}

.field input,
.field textarea {
  padding: 0.65rem 0.9rem;
  border: 1px solid #e0d0b8;
  border-radius: 8px;
  font-size: 0.97rem;
  color: #2f1e0f;
  background: #fffdf9;
  font-family: inherit;
  transition: border-color 0.2s, box-shadow 0.2s;
  outline: none;
  resize: vertical;
}

.field input:focus,
.field textarea:focus {
  border-color: #c9a96e;
  box-shadow: 0 0 0 3px rgba(201, 169, 110, 0.18);
}

.error-msg {
  font-size: 0.88rem;
  color: #c0392b;
  background: rgba(192, 57, 43, 0.07);
  border-radius: 6px;
  padding: 0.5rem 0.75rem;
  margin: 0;
}

.submit-btn {
  background: #3b2a1a;
  color: #fdf8f2;
  border: none;
  border-radius: 8px;
  padding: 0.75rem 1.75rem;
  font-size: 1rem;
  font-family: inherit;
  font-weight: 700;
  cursor: pointer;
  transition: background 0.2s, transform 0.2s;
  align-self: flex-start;
}

.submit-btn:hover:not(:disabled) {
  background: #c9a96e;
  transform: translateY(-2px);
}

.submit-btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

/* Success state */
.success-message {
  text-align: center;
  padding: 2rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
}

.success-icon {
  font-size: 2.5rem;
  color: #c9a96e;
}

.success-message h3 {
  font-size: 1.4rem;
  font-weight: 700;
  color: #3b2a1a;
  margin: 0;
}

.success-message p {
  font-size: 0.97rem;
  color: #4a3728;
  margin: 0;
  line-height: 1.6;
}

.send-another {
  margin-top: 0.5rem;
  background: none;
  border: 1px solid #c9a96e;
  color: #c9a96e;
  border-radius: 6px;
  padding: 0.5rem 1.25rem;
  font-size: 0.9rem;
  font-family: inherit;
  cursor: pointer;
  transition: background 0.2s, color 0.2s;
}

.send-another:hover {
  background: #c9a96e;
  color: #3b2a1a;
}

@media (max-width: 700px) {
  .contact-layout {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .contact-hero h1 {
    font-size: 2rem;
  }

  .contact-form-wrap {
    padding: 1.5rem 1.1rem;
  }
}
</style>

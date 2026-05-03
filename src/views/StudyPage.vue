<script setup lang="ts">
import AppLayout from '../components/AppLayout.vue'
import ShareButtons from '../components/ShareButtons.vue'
import { ref, computed } from 'vue'

interface Devotional {
  title: string
  theme: string
  scripture: string
  reference: string
  body: string
  reflection: string
  prayer: string
}

const themes = [
  'All',
  'Faith & Trust',
  'Identity & Purpose',
  'Grace & Forgiveness',
  'Prayer & Seeking God',
  'Strength in Trials',
  'Love & Compassion',
]

const activeTheme = ref('All')
const selectedDevotional = ref<Devotional | null>(null)

function openDevotional(d: Devotional) {
  selectedDevotional.value = d
  document.body.style.overflow = 'hidden'
}

function closeDevotional() {
  selectedDevotional.value = null
  document.body.style.overflow = ''
}

const devotionals: Devotional[] = [
  // ── Faith & Trust ──
  {
    theme: 'Faith & Trust',
    title: 'When You Cannot See the Way',
    scripture: 'Trust in the Lord with all your heart and lean not on your own understanding; in all your ways submit to him, and he will make your paths straight.',
    reference: 'Proverbs 3:5–6',
    body: 'There are seasons when the path ahead disappears into fog. The decision you must make has no obvious answer. The future you imagined is not the one unfolding. In those moments, every human instinct urges us to work it out, to figure it out, to rely on what we can see and calculate and control.\n\nBut the invitation of this verse is radical: trust with all your heart — not a portion of it, not the comfortable parts, but the whole thing. And lean not on your own understanding — which is another way of saying, your perspective, however sincere, is partial. You do not have all the information. God does.\n\nSubmission here is not passivity. It is the active, deliberate choice to bring every decision, every crossroads, every anxious question before the One who can see the end from the beginning. And the promise is clear: he will make your paths straight. Not painless. Not instantly obvious. But directed.',
    reflection: 'What area of your life are you currently leaning on your own understanding? What would it look like to genuinely submit that to God today?',
    prayer: 'Lord, my understanding is limited and my vision is short. I choose to trust you with what I cannot see. Straighten my path and give me the courage to walk it, one step at a time. Amen.',
  },
  {
    theme: 'Faith & Trust',
    title: 'Faith Is the Substance',
    scripture: 'Now faith is confidence in what we hope for and assurance about what we do not see.',
    reference: 'Hebrews 11:1',
    body: 'Faith is not wishful thinking. It is not pretending a thing is true while knowing it may not be. Faith, as scripture defines it, is substance — it has weight and reality. It is the assurance that what God has promised is as real as anything you can touch or see, even before it arrives.\n\nThe great chapter of faith that follows this verse is a gallery of men and women who acted on promises they never fully saw fulfilled in their lifetime. Abel, Enoch, Noah, Abraham, Sarah — all of them died "not having received the things promised, but having seen them and greeted them from afar."\n\nThis is the nature of biblical faith: it reaches forward. It lives in the present tense of a future reality. It says, "God said it — therefore it is." Not one day it will be, but it is — because the character of God is the ground on which faith stands.',
    reflection: 'Is there a promise God has spoken to you that you have been waiting on? How can you "greet it from afar" today — living as though it is already true?',
    prayer: 'Father, strengthen my faith to stand on what you have said even when I cannot yet see it. You are faithful. Your word does not return void. I choose to believe. Amen.',
  },

  // ── Identity & Purpose ──
  {
    theme: 'Identity & Purpose',
    title: 'You Were Known Before You Were Born',
    scripture: '"Before I formed you in the womb I knew you, before you were born I set you apart; I appointed you as a prophet to the nations."',
    reference: 'Jeremiah 1:5',
    body: 'These words were spoken to Jeremiah, but they reveal something true about every human being: your existence was not an accident, and your identity was not invented by the world around you. Before you drew your first breath, you were known. Not just anticipated — known, with the intimacy of a creator who fashioned you with intention.\n\nJeremiah\'s response was immediate and recognizable: "I do not know how to speak; I am too young." We all have our version of that protest. I am not qualified. I have made too many mistakes. I am not the right person. But God\'s answer to Jeremiah is the same answer he gives to every person he has called: "Do not say \'I am too young.\' You must go to everyone I send you to and say whatever I command you. Do not be afraid of them, for I am with you."\n\nThe call does not depend on your readiness. It depends on his.',
    reflection: 'What is the version of "I am too young" or "I am not qualified" that you have been telling yourself? How does this verse speak to that voice?',
    prayer: 'God, you knew me before the world did. You named me before I could name myself. Silence every voice that tells me I am not enough, and let me hear only yours. Amen.',
  },
  {
    theme: 'Identity & Purpose',
    title: 'Fearfully and Wonderfully Made',
    scripture: 'For you created my inmost being; you knit me together in my mother\'s womb. I praise you because I am fearfully and wonderfully made; your works are wonderful, I know that full well.',
    reference: 'Psalm 139:13–14',
    body: 'The Hebrew word for "fearfully" here is yare — it speaks of awe, reverence, something that causes you to stop and marvel. You were made with that kind of care. Not assembled, not produced — knit together, which is the language of artistry and patience and detail.\n\nIn a world that constantly measures people against standards of appearance, achievement, and productivity, this psalm is a quiet revolution. Your value was not determined by the market or the mirror or the metrics. It was established in the act of your creation by the God who calls his own works wonderful.\n\nThe psalmist does not say "I know that in theory." He says "I know that full well" — a deep, settled knowing. This is the invitation: to know, not as a distant theological fact, but as a living, personal truth, that you are not a mistake. You are a work of God. And God does not make things he is not proud of.',
    reflection: 'In what area of your life do you find it hardest to believe you are "wonderfully made"? Bring that specific thing before God today.',
    prayer: 'Creator God, you made me on purpose. Help me see myself the way you see me — not through the world\'s eyes, but through yours. I am your work. And your works are wonderful. Amen.',
  },

  // ── Grace & Forgiveness ──
  {
    theme: 'Grace & Forgiveness',
    title: 'The God Who Runs',
    scripture: 'But while he was still a long way off, his father saw him and was filled with compassion for him; he ran to his son, threw his arms around him and kissed him.',
    reference: 'Luke 15:20',
    body: 'In the ancient Near East, a man of dignity did not run. Running was undignified — it was the movement of servants and children, not of elders and fathers. And yet here is the father in Jesus\'s parable, seeing his ruined son "while he was still a long way off" — which means he had been watching the road — and he ran.\n\nThe son had rehearsed a speech: "I am no more worthy to be called your son. Make me like one of your hired servants." He had already decided what grace looked like — maybe a second chance at the bottom. But the father interrupted the speech with an embrace. He called for the best robe, for sandals, for a ring, for a feast. He did not restore his son to servant status. He restored him to son status.\n\nThis is the posture of God toward every person who turns toward home: not waiting with folded arms and a list of conditions, but watching the road, filled with compassion, running.',
    reflection: 'Is there something you have done that you believe has placed you beyond full restoration? How does the father\'s response in this parable speak to that belief?',
    prayer: 'Father, I have wandered. But you have been watching the road. I am turning toward home. Run to me. Restore me — not as a servant, but as a son, as a daughter. I am yours. Amen.',
  },
  {
    theme: 'Grace & Forgiveness',
    title: 'As Far as the East from the West',
    scripture: 'As far as the east is from the west, so far has he removed our transgressions from us.',
    reference: 'Psalm 103:12',
    body: 'East and west never meet. Unlike north and south — which converge at the poles — east and west are infinite opposites. No matter how far east you travel, west is always infinitely behind you. David chose this image deliberately: forgiveness, in God\'s economy, is not temporary, not conditional, not partial. It is immeasurable.\n\nThe verse before it says: "He does not treat us as our sins deserve or repay us according to our iniquities." This is grace in its purest form — not getting what we do deserve. And the verse after speaks of God\'s compassion like a father\'s compassion for his children.\n\nIf you have confessed and turned, God is not holding a record over you. He is not waiting to bring up what you have laid down. The transaction is complete. The distance is infinite. You are not defined by what God has already removed.',
    reflection: 'Is there a sin or failure you keep returning to mentally, even after confession? What would it mean to trust that God has removed it as far as the east is from the west?',
    prayer: 'Lord, I receive your forgiveness — not just as a fact, but as a reality I choose to live in. What you have removed, I will not carry. I am free. Amen.',
  },

  // ── Prayer & Seeking God ──
  {
    theme: 'Prayer & Seeking God',
    title: 'Ask, Seek, Knock',
    scripture: '"Ask and it will be given to you; seek and you will find; knock and the door will be opened to you."',
    reference: 'Matthew 7:7',
    body: 'The verbs here are in the present continuous tense in Greek: keep asking, keep seeking, keep knocking. This is not a vending-machine theology — insert prayer, receive result. It is an invitation into a sustained, living posture of dependence and pursuit.\n\nAsking requires humility — the admission that you need something you do not have. Seeking requires effort — the decision to pursue what matters with your attention and your time. Knocking requires persistence — the willingness to stay at the door even when it has not yet opened.\n\nJesus follows this invitation with a question: "Which of you, if your son asks for bread, will give him a stone?" The implication is clear — if even imperfect human parents give good things to their children, how much more will the perfect heavenly Father give to those who ask. Prayer is not about overcoming God\'s reluctance. It is about aligning with his willingness.',
    reflection: 'What have you stopped asking God for? What would it look like to bring that request back to him with fresh persistence today?',
    prayer: 'Father, I come to you — asking, seeking, knocking. Teach me to pray with both persistence and trust, knowing that you are a Father who gives good gifts to your children. Amen.',
  },
  {
    theme: 'Prayer & Seeking God',
    title: 'Be Still and Know',
    scripture: 'He says, "Be still, and know that I am God; I will be exalted among the nations, I will be exalted in the earth."',
    reference: 'Psalm 46:10',
    body: 'The word translated "be still" in Hebrew is raphah — it can also mean to let go, to release, to cease striving. In the context of Psalm 46, which speaks of the earth giving way, mountains falling into the sea, nations in uproar — God\'s command is not "be still" in a calm moment. It is "be still" in the middle of chaos.\n\nKnowing God, in scripture, is not primarily intellectual. It is relational, experiential — a knowing that comes from time spent in his presence. You cannot know a person at speed. You cannot hear a voice in constant noise. The stillness is not the goal; it is the condition under which the deeper knowing becomes possible.\n\nAnd the ground of this stillness is the second half of the verse: "I will be exalted." The God who commands stillness is the God who has already secured the outcome. You can stop striving because he has not stopped working.',
    reflection: 'When did you last sit in genuine silence before God — not to present a list, but simply to know him? What would it take to create that space today?',
    prayer: 'Lord, I release my grip on everything I have been trying to control. I am still before you. Speak. I am listening. Amen.',
  },

  // ── Strength in Trials ──
  {
    theme: 'Strength in Trials',
    title: 'The Furnace and the Fourth Man',
    scripture: '"Look! I see four men walking around in the fire, unbound and unharmed, and the fourth looks like a son of the gods."',
    reference: 'Daniel 3:25',
    body: 'Shadrach, Meshach, and Abednego were thrown into a furnace so hot it killed the soldiers who threw them in. Their crime: refusing to bow to a human king\'s idol. Their answer before the flames had been one of the most remarkable declarations of faith in the Old Testament — "Our God is able to deliver us. But even if he does not, we will not serve your gods."\n\nThe miracle was not that they were spared from the furnace. They went in. The miracle was who met them there. The king looked in and saw not three men bound and burning, but four men walking freely — and the fourth was unlike any human being.\n\nThis is the pattern of God\'s presence in trial: he does not always remove the fire. He enters it with you. And in the fire, you are unbound. The very thing meant to destroy them destroyed only the ropes that held them.',
    reflection: 'What furnace are you in right now? Have you looked for the fourth man — the presence of God walking with you in it?',
    prayer: 'God, I may not be spared from this fire, but I am not in it alone. I look for your presence in the middle of what is hard. Walk with me. Unbind me. Amen.',
  },
  {
    theme: 'Strength in Trials',
    title: 'Count It All Joy',
    scripture: 'Consider it pure joy, my brothers and sisters, whenever you face trials of many kinds, because you know that the testing of your faith produces perseverance.',
    reference: 'James 1:2–3',
    body: 'James does not say feel joyful. He says consider it joy — which is a choice of perspective, a deliberate act of the mind. He also does not say consider it joy because it will soon be over, or because it is not really that bad. He says consider it joy because of what it is producing.\n\nThe Greek word for "testing" here is dokimion — it was used of the testing of metals by fire to prove their purity. The trial is not a punishment. It is a proving. And what it produces — perseverance, steadfastness, the capacity to endure — is described by James as something that needs to "finish its work," so that you are mature and complete, lacking nothing.\n\nThis is a long-horizon theology. In the immediate moment, trials feel like subtraction. From the longer view, they are addition — they build in you something that cannot be built any other way.',
    reflection: 'What trial are you in the middle of right now? What might God be building in you through it that you could not develop any other way?',
    prayer: 'Lord, give me the courage to see this season from your perspective. I trust that what you are building in me is worth what it costs. Complete your work in me. Amen.',
  },

  // ── Love & Compassion ──
  {
    theme: 'Love & Compassion',
    title: 'Love Is the Greatest',
    scripture: 'And now these three remain: faith, hope and love. But the greatest of these is love.',
    reference: '1 Corinthians 13:13',
    body: 'The thirteenth chapter of First Corinthians is the most complete portrait of love in all of scripture. Paul does not begin with a definition; he begins with negations. Without love, the most impressive spiritual gifts are noise. Without love, faith that moves mountains amounts to nothing. Without love, sacrificial generosity gains nothing.\n\nLove is then described not as a feeling but as a behavior — patient, kind, not envious or boastful, not easily angered, keeping no record of wrongs. These are not emotions. They are choices made, over and over, in the daily friction of real relationships.\n\nAnd then Paul places love above faith and hope — because faith and hope serve their purpose in time. When we see God face to face, we will no longer need faith, because we will see. We will no longer need hope, because we will have. But love — love is the nature of God himself, and it will remain.',
    reflection: 'Looking at Paul\'s description of love, which quality — patience, kindness, keeping no record of wrongs — do you most need to ask God to grow in you right now?',
    prayer: 'God, you are love. Grow in me what I cannot manufacture on my own. Make me patient when I am not, kind when it is difficult, and quick to forgive. Let your love be the thing people encounter when they encounter me. Amen.',
  },
  {
    theme: 'Love & Compassion',
    title: 'The Second Mile',
    scripture: '"If anyone forces you to go one mile, go with them two miles."',
    reference: 'Matthew 5:41',
    body: 'Roman soldiers could legally compel Jewish civilians to carry their equipment for one mile. It was humiliating, involuntary, resented. Jesus takes this familiar grievance and turns it inside out: go two.\n\nThe first mile is obligation. The second mile is freedom — because no one can compel you to walk it. In the second mile, you are no longer a conscript. You are a person who has chosen, out of something deeper than the law, to give more than was demanded.\n\nThis is the ethic of the kingdom: not calculating the minimum required, but living with the generosity that comes from having received immeasurable grace. It does not require that the person who demands the first mile deserves the second. It requires only that the one walking the second mile has been transformed by love.',
    reflection: 'Where in your life are you currently only going the first mile? What would the second mile look like — practically, specifically — in that situation?',
    prayer: 'Lord, make me the kind of person who gives more than is asked, loves beyond what is owed, and serves with the freedom of one who has been freely served. Amen.',
  },
]

const nonAllThemes = themes.filter(t => t !== 'All')

const featuredDevotional = devotionals[0]!

const devotionalsByTheme = computed(() =>
  Object.fromEntries(
    nonAllThemes.map(t => [t, devotionals.filter(d => d.theme === t)])
  )
)

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>

<template>
  <AppLayout>

    <!-- ── Hero ── -->
    <section class="study-hero">
      <div class="hero-inner">
        <p class="eyebrow">✦ Go Deeper</p>
        <h1>Bible Study &amp;<br><em>Daily Devotionals</em></h1>
        <p class="hero-lead">
          Explore scripture with fresh eyes. Each devotional opens a passage,
          walks you through its meaning, and closes with a reflection and prayer
          to carry into your day.
        </p>
        <div class="hero-cta-group">
          <a href="#study-themes" class="hero-btn primary">Browse by Theme</a>
          <button class="hero-btn secondary" @click="openDevotional(featuredDevotional)">
            Today's Study &rarr;
          </button>
        </div>
      </div>
    </section>

    <!-- ── Featured verse strip ── -->
    <div class="verse-strip">
      <blockquote>
        "Your word is a lamp to my feet and a light to my path."
        <cite>&mdash; Psalm 119:105</cite>
      </blockquote>
    </div>

    <!-- ── Theme overview cards ── -->
    <section class="themes-overview">
      <h2 class="section-heading">What Would You Like to Explore?</h2>
      <div class="theme-overview-grid">
        <a
          v-for="t in nonAllThemes"
          :key="t"
          :href="`#theme-${t.replace(/[^a-z0-9]/gi, '-').toLowerCase()}`"
          class="theme-overview-card"
        >
          <span class="theme-icon">
            <span v-if="t === 'Faith & Trust'">🕊</span>
            <span v-else-if="t === 'Identity & Purpose'">✨</span>
            <span v-else-if="t === 'Grace & Forgiveness'">🌿</span>
            <span v-else-if="t === 'Prayer & Seeking God'">🙏</span>
            <span v-else-if="t === 'Strength in Trials'">🔥</span>
            <span v-else-if="t === 'Love & Compassion'">❤️</span>
          </span>
          <span class="theme-name">{{ t }}</span>
          <span class="theme-count-badge">{{ devotionalsByTheme[t]?.length }} studies</span>
        </a>
      </div>
    </section>

    <!-- ── Devotionals by theme ── -->
    <section id="study-themes" class="all-themes-section">
      <div
        v-for="t in nonAllThemes"
        :key="t"
        :id="`theme-${t.replace(/[^a-z0-9]/gi, '-').toLowerCase()}`"
        class="theme-section"
      >
        <div class="theme-section-header">
          <h2 class="theme-section-title">{{ t }}</h2>
          <span class="theme-section-rule"></span>
        </div>
        <div class="study-grid">
          <div
            v-for="d in devotionalsByTheme[t]"
            :key="d.title"
            class="study-card"
            @click="openDevotional(d)"
            role="button"
            tabindex="0"
            @keydown.enter="openDevotional(d)"
          >
            <h3 class="study-card-title">{{ d.title }}</h3>
            <blockquote class="study-card-scripture">
              <p>{{ d.scripture }}</p>
              <cite>{{ d.reference }}</cite>
            </blockquote>
            <p class="study-card-preview">{{ d.body.slice(0, 130) }}&hellip;</p>
            <span class="study-card-link">Read Study &rarr;</span>
          </div>
        </div>
      </div>
    </section>

    <!-- ── Bottom CTA ── -->
    <section class="study-cta-section">
      <div class="study-cta-inner">
        <h2>Keep the Word Close</h2>
        <p>Pair your study with Scripture and inspired poetry.</p>
        <div class="cta-links">
          <RouterLink to="/bible-verses" class="cta-pill">Bible Verses</RouterLink>
          <RouterLink to="/poetry" class="cta-pill">Poetry</RouterLink>
          <RouterLink to="/quotes" class="cta-pill">Inspirational Quotes</RouterLink>
        </div>
      </div>
    </section>

    <button @click="scrollToTop" aria-label="Back to top" class="back-to-top">&uarr;</button>

    <!-- ── Devotional Modal ── -->
    <Teleport to="body">
      <div v-if="selectedDevotional" class="modal-overlay" @click.self="closeDevotional">
        <div class="modal-card">
          <button class="modal-close" @click="closeDevotional" aria-label="Close">&times;</button>
          <span class="modal-tag">{{ selectedDevotional.theme }}</span>
          <h2 class="modal-title">{{ selectedDevotional.title }}</h2>
          <blockquote class="modal-scripture">
            <p>{{ selectedDevotional.scripture }}</p>
            <cite>{{ selectedDevotional.reference }}</cite>
          </blockquote>
          <div class="modal-section">
            <h4>Devotional</h4>
            <p v-for="(para, i) in selectedDevotional.body.split('\n\n')" :key="i" class="modal-body">{{ para }}</p>
          </div>
          <div class="modal-section reflection">
            <h4>Reflection</h4>
            <p class="modal-body">{{ selectedDevotional.reflection }}</p>
          </div>
          <div class="modal-section prayer">
            <h4>Prayer</h4>
            <p class="modal-body modal-prayer">{{ selectedDevotional.prayer }}</p>
          </div>
          <div class="modal-actions">
            <ShareButtons :text="selectedDevotional.scripture" :title="selectedDevotional.title" :author="selectedDevotional.reference" />
          </div>
        </div>
      </div>
    </Teleport>

  </AppLayout>
</template>

<style scoped>
/* ── Hero ── */
.study-hero {
  background: linear-gradient(160deg, #3b2a1a 0%, #5a3e2b 60%, #7a5a3e 100%);
  color: #fdf8f2;
  text-align: center;
  padding: 5rem 1.5rem 4rem;
}

.hero-inner {
  max-width: 720px;
  margin: 0 auto;
}

.eyebrow {
  font-size: 0.85rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #c9a96e;
  margin: 0 0 0.75rem;
}

.study-hero h1 {
  font-size: clamp(2.2rem, 5vw, 3.4rem);
  font-weight: 800;
  line-height: 1.15;
  margin: 0 0 1.25rem;
  color: #fdf8f2;
}

.study-hero h1 em {
  font-style: italic;
  color: #c9a96e;
}

.hero-lead {
  font-size: 1.05rem;
  line-height: 1.7;
  color: rgba(253, 248, 242, 0.85);
  max-width: 560px;
  margin: 0 auto 2rem;
}

.hero-cta-group {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  justify-content: center;
}

.hero-btn {
  padding: 0.7rem 1.6rem;
  border-radius: 999px;
  font-size: 0.95rem;
  font-weight: 700;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.2s;
  border: 2px solid transparent;
}

.hero-btn.primary {
  background: #c9a96e;
  color: #3b2a1a;
}

.hero-btn.primary:hover {
  background: #e0c080;
}

.hero-btn.secondary {
  background: transparent;
  border-color: rgba(253, 248, 242, 0.5);
  color: #fdf8f2;
}

.hero-btn.secondary:hover {
  border-color: #c9a96e;
  color: #c9a96e;
}

/* ── Verse strip ── */
.verse-strip {
  background: #f8f0e5;
  border-top: 1px solid #e0d0b8;
  border-bottom: 1px solid #e0d0b8;
  text-align: center;
  padding: 1.25rem 1.5rem;
}

.verse-strip blockquote {
  margin: 0;
  font-family: Georgia, 'Times New Roman', serif;
  font-size: 1rem;
  font-style: italic;
  color: #3b2a1a;
}

.verse-strip cite {
  display: block;
  font-style: normal;
  font-size: 0.82rem;
  font-weight: 700;
  color: #a38b6f;
  margin-top: 0.3rem;
}

/* ── Theme overview ── */
.themes-overview {
  max-width: 1000px;
  margin: 0 auto;
  padding: 3.5rem 1.5rem 2rem;
}

.section-heading {
  text-align: center;
  font-size: 1.7rem;
  color: #3b2a1a;
  font-weight: 700;
  margin: 0 0 2rem;
}

.theme-overview-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(155px, 1fr));
  gap: 1rem;
}

.theme-overview-card {
  background: linear-gradient(135deg, #fdf8f2 0%, #f8f0e5 100%);
  border: 1px solid #e0d0b8;
  border-radius: 12px;
  padding: 1.25rem 1rem;
  text-align: center;
  text-decoration: none;
  color: #3b2a1a;
  transition: all 0.2s;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.4rem;
  box-shadow: 0 2px 8px rgba(59, 42, 26, 0.06);
}

.theme-overview-card:hover {
  border-color: #c9a96e;
  box-shadow: 0 6px 20px rgba(59, 42, 26, 0.14);
  transform: translateY(-2px);
}

.theme-icon {
  font-size: 1.75rem;
  line-height: 1;
}

.theme-name {
  font-size: 0.85rem;
  font-weight: 700;
  color: #3b2a1a;
  line-height: 1.3;
}

.theme-count-badge {
  font-size: 0.72rem;
  color: #a38b6f;
  font-weight: 600;
}

/* ── All themes section ── */
.all-themes-section {
  max-width: 1100px;
  margin: 0 auto;
  padding: 1rem 1.5rem 3rem;
}

.theme-section {
  margin-bottom: 3.5rem;
}

.theme-section-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.25rem;
}

.theme-section-title {
  font-size: 1.3rem;
  font-weight: 700;
  color: #3b2a1a;
  white-space: nowrap;
  margin: 0;
}

.theme-section-rule {
  flex: 1;
  height: 1px;
  background: #e0d0b8;
}

/* ── Study grid / cards ── */
.study-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(290px, 1fr));
  gap: 1.25rem;
}

.study-card {
  background: linear-gradient(135deg, #fdf8f2 0%, #f8f0e5 100%);
  border: 1px solid #e0d0b8;
  border-radius: 12px;
  padding: 1.25rem;
  cursor: pointer;
  transition: all 0.2s;
  box-shadow: 0 3px 10px rgba(59, 42, 26, 0.07);
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
}

.study-card:hover {
  box-shadow: 0 10px 28px rgba(59, 42, 26, 0.15);
  border-color: #c9a96e;
  transform: translateY(-2px);
}

.study-card-title {
  font-size: 1.05rem;
  font-weight: 700;
  color: #3b2a1a;
  margin: 0;
}

.study-card-scripture {
  margin: 0;
  padding: 0.55rem 0.75rem;
  border-left: 3px solid #c9a96e;
  background: rgba(201, 169, 110, 0.08);
  border-radius: 0 6px 6px 0;
}

.study-card-scripture p {
  font-size: 0.85rem;
  font-style: italic;
  line-height: 1.5;
  color: #3b2a1a;
  margin: 0 0 0.2rem;
  font-family: Georgia, 'Times New Roman', serif;
}

.study-card-scripture cite {
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 700;
  color: #a38b6f;
}

.study-card-preview {
  font-size: 0.85rem;
  line-height: 1.6;
  color: #4a3728;
  margin: 0;
  flex: 1;
}

.study-card-link {
  font-size: 0.82rem;
  font-weight: 700;
  color: #c9a96e;
  margin-top: auto;
}

/* ── Bottom CTA ── */
.study-cta-section {
  background: linear-gradient(160deg, #3b2a1a 0%, #5a3e2b 100%);
  padding: 4rem 1.5rem;
  text-align: center;
}

.study-cta-inner {
  max-width: 600px;
  margin: 0 auto;
}

.study-cta-section h2 {
  font-size: 2rem;
  color: #fdf8f2;
  font-weight: 700;
  margin: 0 0 0.5rem;
}

.study-cta-section p {
  color: rgba(253, 248, 242, 0.75);
  font-size: 1rem;
  margin: 0 0 1.5rem;
}

.cta-links {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  justify-content: center;
}

.cta-pill {
  background: rgba(253, 248, 242, 0.1);
  border: 1px solid rgba(253, 248, 242, 0.3);
  color: #fdf8f2;
  border-radius: 999px;
  padding: 0.5rem 1.2rem;
  font-size: 0.9rem;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.2s;
}

.cta-pill:hover {
  background: #c9a96e;
  border-color: #c9a96e;
  color: #3b2a1a;
}

/* ── Back to top ── */
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

/* ── Modal ── */
.modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(30, 18, 8, 0.55);
  backdrop-filter: blur(3px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2000;
  padding: 1rem;
}

.modal-card {
  background: linear-gradient(135deg, #fdf8f2 0%, #f8f0e5 100%);
  border: 1px solid #e0d0b8;
  border-radius: 16px;
  padding: 2rem;
  max-width: 660px;
  width: 100%;
  max-height: 88vh;
  overflow-y: auto;
  position: relative;
  box-shadow: 0 24px 64px rgba(59, 42, 26, 0.25);
}

.modal-close {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: rgba(59, 42, 26, 0.08);
  border: none;
  border-radius: 50%;
  width: 2rem;
  height: 2rem;
  font-size: 1.25rem;
  line-height: 1;
  color: #3b2a1a;
  cursor: pointer;
  transition: background 0.2s;
}

.modal-close:hover {
  background: #3b2a1a;
  color: #fdf8f2;
}

.modal-tag {
  display: inline-block;
  font-size: 0.72rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: #a38b6f;
  background: rgba(59, 42, 26, 0.06);
  padding: 0.2rem 0.6rem;
  border-radius: 999px;
  margin-bottom: 0.5rem;
}

.modal-title {
  font-size: 1.5rem;
  margin: 0.5rem 0 0.75rem;
  color: #3b2a1a;
  font-weight: 700;
}

.modal-scripture {
  margin: 0 0 1.25rem;
  padding: 0.75rem 1rem;
  border-left: 3px solid #c9a96e;
  background: rgba(201, 169, 110, 0.1);
  border-radius: 0 8px 8px 0;
}

.modal-scripture p {
  font-size: 1rem;
  line-height: 1.6;
  color: #3b2a1a;
  font-style: italic;
  margin: 0 0 0.3rem;
  font-family: Georgia, 'Times New Roman', serif;
}

.modal-scripture cite {
  font-size: 0.85rem;
  font-style: normal;
  font-weight: 700;
  color: #a38b6f;
}

.modal-section {
  margin-bottom: 1.25rem;
}

.modal-section h4 {
  font-size: 0.78rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: #a38b6f;
  margin: 0 0 0.5rem;
}

.modal-section.reflection {
  background: rgba(59, 42, 26, 0.04);
  border-radius: 8px;
  padding: 0.85rem 1rem;
}

.modal-section.prayer {
  background: rgba(201, 169, 110, 0.08);
  border-radius: 8px;
  padding: 0.85rem 1rem;
}

.modal-body {
  font-size: 0.95rem;
  line-height: 1.75;
  color: #2f1e0f;
  margin: 0 0 0.6rem;
}

.modal-prayer {
  font-style: italic;
  font-family: Georgia, 'Times New Roman', serif;
}

.modal-actions {
  border-top: 1px solid rgba(59, 42, 26, 0.08);
  padding-top: 0.75rem;
}

@media (max-width: 600px) {
  .study-hero {
    padding: 3.5rem 1rem 3rem;
  }

  .theme-overview-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .study-grid {
    grid-template-columns: 1fr;
  }

  .hero-cta-group {
    flex-direction: column;
    align-items: center;
  }
}
</style>

        <div
          v-for="d in filteredDevotionals"
          :key="d.title"
          class="study-card"
        >
          <span class="study-theme-tag">{{ d.theme }}</span>
          <h3 class="study-title">{{ d.title }}</h3>
          <blockquote class="study-scripture">
            <p>{{ d.scripture }}</p>
            <cite>{{ d.reference }}</cite>
          </blockquote>
          <p class="study-preview">{{ d.body.slice(0, 140) }}&hellip;</p>
          <div class="card-actions">
            <button class="read-btn" @click="openDevotional(d)">Read Study</button>
            <ShareButtons :text="d.scripture" :title="d.title" :author="d.reference" />
          </div>
        </div>
      </div>
    </section>

    <button @click="scrollToTop" aria-label="Back to top" class="back-to-top">&uarr;</button>

    <!-- Devotional Modal -->
    <Teleport to="body">
      <div v-if="selectedDevotional" class="modal-overlay" @click.self="closeDevotional">
        <div class="modal-card">
          <button class="modal-close" @click="closeDevotional" aria-label="Close">&times;</button>
          <span class="study-theme-tag">{{ selectedDevotional.theme }}</span>
          <h2 class="modal-title">{{ selectedDevotional.title }}</h2>
          <blockquote class="modal-scripture">
            <p>{{ selectedDevotional.scripture }}</p>
            <cite>{{ selectedDevotional.reference }}</cite>
          </blockquote>
          <div class="modal-section">
            <h4>Devotional</h4>
            <p v-for="(para, i) in selectedDevotional.body.split('\n\n')" :key="i" class="modal-body">{{ para }}</p>
          </div>
          <div class="modal-section reflection">
            <h4>Reflection</h4>
            <p class="modal-body">{{ selectedDevotional.reflection }}</p>
          </div>
          <div class="modal-section prayer">
            <h4>Prayer</h4>
            <p class="modal-body modal-prayer">{{ selectedDevotional.prayer }}</p>
          </div>
          <div class="modal-actions">
            <ShareButtons :text="selectedDevotional.scripture" :title="selectedDevotional.title" :author="selectedDevotional.reference" />
          </div>
        </div>
      </div>
    </Teleport>
  </AppLayout>
</template>

<style scoped>
#study-display h2 {
  font-size: 2.4rem;
  margin: 2rem 0 0.5rem;
  color: #3b2a1a;
  text-align: center;
  font-weight: 700;
}

.study-subtitle {
  text-align: center;
  color: #6b5a45;
  font-size: 1rem;
  margin: 0 0 1.75rem;
}

/* ── Theme Filters ── */
.theme-filters {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.5rem;
  margin-bottom: 2rem;
}

.theme-btn {
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

.theme-btn:hover {
  background: #f0e6d6;
  border-color: #c9a96e;
}

.theme-btn.active {
  background: #3b2a1a;
  color: #fdf8f2;
  border-color: #3b2a1a;
}

.theme-count {
  background: rgba(59, 42, 26, 0.08);
  color: #6b5a45;
  font-size: 0.75rem;
  font-weight: 700;
  padding: 0.1rem 0.45rem;
  border-radius: 999px;
  min-width: 1.2rem;
  text-align: center;
}

.theme-btn.active .theme-count {
  background: rgba(253, 248, 242, 0.2);
  color: #fdf8f2;
}

.theme-title {
  text-align: center;
  font-size: 1.4rem;
  color: #5a3e2b;
  margin: 0 0 1.5rem;
  font-weight: 600;
}

/* ── Grid ── */
.study-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
  padding: 0 1rem;
}

.study-card {
  background: linear-gradient(135deg, #fdf8f2 0%, #f8f0e5 100%);
  border: 1px solid #e0d0b8;
  border-radius: 12px;
  padding: 1.25rem 1.25rem 1rem;
  transition: all 0.25s ease;
  box-shadow: 0 4px 12px rgba(59, 42, 26, 0.08);
}

.study-card:hover {
  box-shadow: 0 12px 32px rgba(59, 42, 26, 0.16);
  border-color: #c9a96e;
}

.study-theme-tag {
  display: inline-block;
  font-size: 0.72rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: #a38b6f;
  background: rgba(59, 42, 26, 0.06);
  padding: 0.2rem 0.6rem;
  border-radius: 999px;
  margin-bottom: 0.5rem;
}

.study-title {
  font-size: 1.15rem;
  margin: 0 0 0.6rem;
  color: #3b2a1a;
  font-weight: 700;
}

.study-scripture {
  margin: 0 0 0.75rem;
  padding: 0.65rem 0.85rem;
  border-left: 3px solid #c9a96e;
  background: rgba(201, 169, 110, 0.08);
  border-radius: 0 6px 6px 0;
}

.study-scripture p {
  font-size: 0.88rem;
  line-height: 1.55;
  color: #3b2a1a;
  font-style: italic;
  margin: 0 0 0.25rem;
  font-family: Georgia, 'Times New Roman', serif;
}

.study-scripture cite {
  font-size: 0.78rem;
  font-style: normal;
  font-weight: 700;
  color: #a38b6f;
}

.study-preview {
  font-size: 0.88rem;
  line-height: 1.55;
  color: #4a3728;
  margin: 0 0 0.75rem;
}

.card-actions {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.5rem;
  padding-top: 0.5rem;
  border-top: 1px solid rgba(59, 42, 26, 0.08);
}

.read-btn {
  background: none;
  border: 1px solid #e0d0b8;
  border-radius: 999px;
  padding: 0.3rem 0.85rem;
  font-size: 0.8rem;
  font-weight: 600;
  color: #5a3e2b;
  cursor: pointer;
  transition: all 0.2s;
}

.read-btn:hover {
  background: #3b2a1a;
  color: #fdf8f2;
  border-color: #3b2a1a;
}

/* ── Back to top ── */
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

/* ── Modal ── */
.modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(30, 18, 8, 0.55);
  backdrop-filter: blur(3px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2000;
  padding: 1rem;
}

.modal-card {
  background: linear-gradient(135deg, #fdf8f2 0%, #f8f0e5 100%);
  border: 1px solid #e0d0b8;
  border-radius: 16px;
  padding: 2rem;
  max-width: 660px;
  width: 100%;
  max-height: 88vh;
  overflow-y: auto;
  position: relative;
  box-shadow: 0 24px 64px rgba(59, 42, 26, 0.25);
}

.modal-close {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: rgba(59, 42, 26, 0.08);
  border: none;
  border-radius: 50%;
  width: 2rem;
  height: 2rem;
  font-size: 1.25rem;
  line-height: 1;
  color: #3b2a1a;
  cursor: pointer;
  transition: background 0.2s;
}

.modal-close:hover {
  background: #3b2a1a;
  color: #fdf8f2;
}

.modal-title {
  font-size: 1.5rem;
  margin: 0.5rem 0 0.75rem;
  color: #3b2a1a;
  font-weight: 700;
}

.modal-scripture {
  margin: 0 0 1.25rem;
  padding: 0.75rem 1rem;
  border-left: 3px solid #c9a96e;
  background: rgba(201, 169, 110, 0.1);
  border-radius: 0 8px 8px 0;
}

.modal-scripture p {
  font-size: 1rem;
  line-height: 1.6;
  color: #3b2a1a;
  font-style: italic;
  margin: 0 0 0.3rem;
  font-family: Georgia, 'Times New Roman', serif;
}

.modal-scripture cite {
  font-size: 0.85rem;
  font-style: normal;
  font-weight: 700;
  color: #a38b6f;
}

.modal-section {
  margin-bottom: 1.25rem;
}

.modal-section h4 {
  font-size: 0.78rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: #a38b6f;
  margin: 0 0 0.5rem;
}

.modal-section.reflection {
  background: rgba(59, 42, 26, 0.04);
  border-radius: 8px;
  padding: 0.85rem 1rem;
}

.modal-section.prayer {
  background: rgba(201, 169, 110, 0.08);
  border-radius: 8px;
  padding: 0.85rem 1rem;
}

.modal-body {
  font-size: 0.95rem;
  line-height: 1.75;
  color: #2f1e0f;
  margin: 0 0 0.6rem;
}

.modal-prayer {
  font-style: italic;
  font-family: Georgia, 'Times New Roman', serif;
}

.modal-actions {
  border-top: 1px solid rgba(59, 42, 26, 0.08);
  padding-top: 0.75rem;
}

@media (max-width: 600px) {
  #study-display h2 {
    font-size: 1.8rem;
  }

  .theme-filters {
    gap: 0.35rem;
  }

  .theme-btn {
    font-size: 0.8rem;
    padding: 0.35rem 0.75rem;
  }

  .study-grid {
    grid-template-columns: 1fr;
  }
}
</style>

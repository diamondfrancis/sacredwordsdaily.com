<script setup lang="ts">
import AppLayout from '../components/AppLayout.vue'
import ShareButtons from '../components/ShareButtons.vue'
import { ref, computed } from 'vue'

interface Verse {
  reference: string
  text: string
  category: string
}

const categories = [
  'All',
  'Strength & Courage',
  'Hope & Future',
  'Peace & Comfort',
  'Love & Grace',
  'Trust & Faith',
  "God's Protection & Presence",
  'Wisdom & Guidance',
  'Joy & Identity',
]

const activeCategory = ref('All')

const verses: Verse[] = [
  // ── Strength & Courage ──
  { category: 'Strength & Courage', reference: 'Philippians 4:13', text: 'I can do all this through him who gives me strength.' },
  { category: 'Strength & Courage', reference: 'Isaiah 40:31', text: 'But those who hope in the Lord will renew their strength. They will soar on wings like eagles; they will run and not grow weary, they will walk and not be faint.' },
  { category: 'Strength & Courage', reference: 'Psalm 46:1', text: 'God is our refuge and strength, an ever-present help in trouble.' },
  { category: 'Strength & Courage', reference: 'Joshua 1:9', text: 'Have I not commanded you? Be strong and courageous. Do not be afraid; do not be discouraged, for the Lord your God will be with you wherever you go.' },
  { category: 'Strength & Courage', reference: 'Deuteronomy 31:6', text: 'Be strong and courageous. Do not be afraid or terrified because of them, for the Lord your God goes with you; he will never leave you nor forsake you.' },
  { category: 'Strength & Courage', reference: 'Isaiah 41:10', text: 'So do not fear, for I am with you; do not be dismayed, for I am your God. I will strengthen you and help you; I will uphold you with my righteous right hand.' },
  { category: 'Strength & Courage', reference: '2 Timothy 1:7', text: 'For the Spirit God gave us does not make us timid, but gives us power, love and self-discipline.' },
  { category: 'Strength & Courage', reference: 'Psalm 27:1', text: 'The Lord is my light and my salvation\u2014whom shall I fear? The Lord is the stronghold of my life\u2014of whom shall I be afraid?' },
  { category: 'Strength & Courage', reference: 'Exodus 14:14', text: 'The Lord will fight for you; you need only to be still.' },

  // ── Hope & Future ──
  { category: 'Hope & Future', reference: 'Jeremiah 29:11', text: '\u201CFor I know the plans I have for you,\u201D declares the Lord, \u201Cplans to prosper you and not to harm you, plans to give you hope and a future.\u201D' },
  { category: 'Hope & Future', reference: 'Romans 15:13', text: 'May the God of hope fill you with all joy and peace as you trust in him, so that you may overflow with hope by the power of the Holy Spirit.' },
  { category: 'Hope & Future', reference: 'Hebrews 11:1', text: 'Now faith is confidence in what we hope for and assurance about what we do not see.' },
  { category: 'Hope & Future', reference: 'Lamentations 3:22-23', text: 'Because of the Lord\u2019s great love we are not consumed, for his compassions never fail. They are new every morning; great is your faithfulness.' },
  { category: 'Hope & Future', reference: 'Psalm 30:5', text: 'For his anger lasts only a moment, but his favor lasts a lifetime; weeping may stay for the night, but rejoicing comes in the morning.' },
  { category: 'Hope & Future', reference: 'Ephesians 3:20', text: 'Now to him who is able to do immeasurably more than all we ask or imagine, according to his power that is at work within us.' },

  // ── Peace & Comfort ──
  { category: 'Peace & Comfort', reference: 'Philippians 4:6-7', text: 'Do not be anxious about anything, but in every situation, by prayer and petition, with thanksgiving, present your requests to God. And the peace of God, which transcends all understanding, will guard your hearts and your minds in Christ Jesus.' },
  { category: 'Peace & Comfort', reference: 'Matthew 11:28', text: 'Come to me, all you who are weary and burdened, and I will give you rest.' },
  { category: 'Peace & Comfort', reference: 'John 14:27', text: 'Peace I leave with you; my peace I give you. I do not give to you as the world gives. Do not let your hearts be troubled and do not be afraid.' },
  { category: 'Peace & Comfort', reference: 'Isaiah 26:3', text: 'You will keep in perfect peace those whose minds are steadfast, because they trust in you.' },
  { category: 'Peace & Comfort', reference: 'John 16:33', text: 'I have told you these things, so that in me you may have peace. In this world you will have trouble. But take heart! I have overcome the world.' },
  { category: 'Peace & Comfort', reference: '1 Peter 5:7', text: 'Cast all your anxiety on him because he cares for you.' },
  { category: 'Peace & Comfort', reference: 'Psalm 55:22', text: 'Cast your cares on the Lord and he will sustain you; he will never let the righteous be shaken.' },

  // ── Love & Grace ──
  { category: 'Love & Grace', reference: 'John 3:16', text: 'For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life.' },
  { category: 'Love & Grace', reference: 'Romans 5:8', text: 'But God demonstrates his own love for us in this: While we were still sinners, Christ died for us.' },
  { category: 'Love & Grace', reference: 'Ephesians 2:8-9', text: 'For it is by grace you have been saved, through faith\u2014and this is not from yourselves, it is the gift of God\u2014not by works, so that no one can boast.' },
  { category: 'Love & Grace', reference: '1 Corinthians 16:14', text: 'Do everything in love.' },
  { category: 'Love & Grace', reference: 'Zephaniah 3:17', text: 'The Lord your God is with you, the Mighty Warrior who saves. He will take great delight in you; in his love he will no longer rebuke you, but will rejoice over you with singing.' },
  { category: 'Love & Grace', reference: 'Galatians 5:22-23', text: 'But the fruit of the Spirit is love, joy, peace, forbearance, kindness, goodness, faithfulness, gentleness and self-control. Against such things there is no law.' },

  // ── Trust & Faith ──
  { category: 'Trust & Faith', reference: 'Proverbs 3:5-6', text: 'Trust in the Lord with all your heart and lean not on your own understanding; in all your ways submit to him, and he will make your paths straight.' },
  { category: 'Trust & Faith', reference: 'Romans 8:28', text: 'And we know that in all things God works for the good of those who love him, who have been called according to his purpose.' },
  { category: 'Trust & Faith', reference: 'Psalm 37:4', text: 'Take delight in the Lord, and he will give you the desires of your heart.' },
  { category: 'Trust & Faith', reference: 'Proverbs 16:3', text: 'Commit to the Lord whatever you do, and he will establish your plans.' },
  { category: 'Trust & Faith', reference: 'Matthew 6:33', text: 'But seek first his kingdom and his righteousness, and all these things will be given to you as well.' },
  { category: 'Trust & Faith', reference: 'Hebrews 13:5', text: 'Keep your lives free from the love of money and be content with what you have, because God has said, \u2018Never will I leave you; never will I forsake you.\u2019' },
  { category: 'Trust & Faith', reference: 'Psalm 16:8', text: 'I keep my eyes always on the Lord. With him at my right hand, I will not be shaken.' },

  // ── God's Protection & Presence ──
  { category: "God's Protection & Presence", reference: 'Psalm 23:1', text: 'The Lord is my shepherd, I lack nothing.' },
  { category: "God's Protection & Presence", reference: 'Psalm 91:1-2', text: 'Whoever dwells in the shelter of the Most High will rest in the shadow of the Almighty. I will say of the Lord, \u2018He is my refuge and my fortress, my God, in whom I trust.\u2019' },
  { category: "God's Protection & Presence", reference: 'Psalm 121:1-2', text: 'I lift up my eyes to the mountains\u2014where does my help come from? My help comes from the Lord, the Maker of heaven and earth.' },
  { category: "God's Protection & Presence", reference: 'Matthew 28:20', text: 'And surely I am with you always, to the very end of the age.' },
  { category: "God's Protection & Presence", reference: 'Psalm 145:18', text: 'The Lord is near to all who call on him, to all who call on him in truth.' },
  { category: "God's Protection & Presence", reference: 'Psalm 34:8', text: 'Taste and see that the Lord is good; blessed is the one who takes refuge in him.' },

  // ── Wisdom & Guidance ──
  { category: 'Wisdom & Guidance', reference: 'Psalm 119:105', text: 'Your word is a lamp for my feet, a light on my path.' },
  { category: 'Wisdom & Guidance', reference: 'Romans 12:2', text: 'Do not conform to the pattern of this world, but be transformed by the renewing of your mind. Then you will be able to test and approve what God\u2019s will is\u2014his good, pleasing and perfect will.' },
  { category: 'Wisdom & Guidance', reference: 'Micah 6:8', text: 'He has shown you, O mortal, what is good. And what does the Lord require of you? To act justly and to love mercy and to walk humbly with your God.' },
  { category: 'Wisdom & Guidance', reference: 'Colossians 3:23', text: 'Whatever you do, work at it with all your heart, as working for the Lord, not for human masters.' },
  { category: 'Wisdom & Guidance', reference: 'Psalm 119:11', text: 'I have hidden your word in my heart that I might not sin against you.' },

  // ── Joy & Identity ──
  { category: 'Joy & Identity', reference: '1 Thessalonians 5:16-18', text: 'Rejoice always, pray continually, give thanks in all circumstances; for this is God\u2019s will for you in Christ Jesus.' },
  { category: 'Joy & Identity', reference: 'James 1:2-3', text: 'Consider it pure joy, my brothers and sisters, whenever you face trials of many kinds, because you know that the testing of your faith produces perseverance.' },
  { category: 'Joy & Identity', reference: '2 Corinthians 5:17', text: 'Therefore, if anyone is in Christ, the new creation has come: The old has gone, the new is here!' },
  { category: 'Joy & Identity', reference: 'Psalm 139:14', text: 'I praise you because I am fearfully and wonderfully made; your works are wonderful, I know that full well.' },
]

const filteredVerses = computed(() => {
  if (activeCategory.value === 'All') return verses
  return verses.filter(v => v.category === activeCategory.value)
})

const categoryCount = computed(() => {
  const counts: Record<string, number> = {}
  for (const cat of categories) {
    counts[cat] = cat === 'All' ? verses.length : verses.filter(v => v.category === cat).length
  }
  return counts
})

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>

<template>
  <AppLayout>
    <section id="bible-display">
      <h2>Bible Verses</h2>

      <div class="category-filters">
        <button
          v-for="cat in categories"
          :key="cat"
          class="cat-btn"
          :class="{ active: activeCategory === cat }"
          @click="activeCategory = cat"
        >
          {{ cat }}
          <span class="cat-count">{{ categoryCount[cat] }}</span>
        </button>
      </div>

      <h3 v-if="activeCategory !== 'All'" class="category-title">{{ activeCategory }}</h3>

      <div id="bible-container" class="bible-grid">
        <div
          v-for="verse in filteredVerses"
          :key="verse.reference"
          class="verse-card"
        >
          <span class="verse-category-tag">{{ verse.category }}</span>
          <p class="verse-text">"{{ verse.text }}"</p>
          <p class="verse-ref">— {{ verse.reference }} (NIV)</p>
          <div class="card-actions">
            <ShareButtons :text="verse.text" :author="verse.reference" />
          </div>
        </div>
      </div>
    </section>

    <button @click="scrollToTop" aria-label="Back to top" class="back-to-top">↑</button>
  </AppLayout>
</template>

<style scoped>
#bible-display h2 {
  font-size: 2.5rem;
  margin: 2rem 0 1.25rem;
  color: #3b2a1a;
  text-align: center;
  font-weight: 700;
}

/* ── Category Filters ── */
.category-filters {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.5rem;
  margin-bottom: 2rem;
}

.cat-btn {
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

.cat-btn:hover {
  background: #f0e6d6;
  border-color: #c9a96e;
}

.cat-btn.active {
  background: #3b2a1a;
  color: #fdf8f2;
  border-color: #3b2a1a;
}

.cat-btn.active .cat-count {
  background: rgba(253, 248, 242, 0.2);
  color: #fdf8f2;
}

.cat-count {
  background: rgba(59, 42, 26, 0.08);
  color: #6b5a45;
  font-size: 0.75rem;
  font-weight: 700;
  padding: 0.1rem 0.45rem;
  border-radius: 999px;
  min-width: 1.2rem;
  text-align: center;
}

.category-title {
  text-align: center;
  font-size: 1.4rem;
  color: #5a3e2b;
  margin: 0 0 1.5rem;
  font-weight: 600;
}

/* ── Grid ── */
.bible-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.75rem;
  padding: 0 1rem;
}

.verse-card {
  background: linear-gradient(135deg, #fdf8f2 0%, #f8f0e5 100%);
  border: 1px solid #e0d0b8;
  border-radius: 14px;
  padding: 1.75rem 1.5rem;
  position: relative;
  transition: all 0.3s ease;
  box-shadow: 0 6px 16px rgba(59, 42, 26, 0.1);
  overflow: hidden;
}

.verse-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 16px 40px rgba(59, 42, 26, 0.18);
  border-color: #c9a96e;
}

.verse-category-tag {
  display: inline-block;
  font-size: 0.72rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: #a38b6f;
  background: rgba(59, 42, 26, 0.06);
  padding: 0.2rem 0.6rem;
  border-radius: 999px;
  margin-bottom: 0.75rem;
}

.verse-text {
  font-size: 1.08rem;
  line-height: 1.6;
  color: #2f1e0f;
  margin: 0 0 1rem;
  font-family: Georgia, serif;
  font-style: italic;
}

.verse-ref {
  text-align: right;
  font-size: 1rem;
  color: #6b5a45;
  font-weight: 600;
  margin: 0;
}

.card-actions {
  display: flex;
  justify-content: flex-end;
  padding-top: 0.5rem;
  border-top: 1px solid rgba(59, 42, 26, 0.08);
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
  box-shadow: 0 4px 14px rgba(59, 42, 26, 0.35);
  transition: all 0.25s;
  z-index: 1000;
}

.back-to-top:hover {
  background-color: #c9a96e;
  color: #3b2a1a;
  transform: translateY(-4px);
}

@media (max-width: 600px) {
  #bible-display h2 {
    font-size: 1.8rem;
  }

  .category-filters {
    gap: 0.35rem;
  }

  .cat-btn {
    font-size: 0.8rem;
    padding: 0.35rem 0.75rem;
  }
}
</style>

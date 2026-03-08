<script setup lang="ts">
import AppLayout from '../components/AppLayout.vue'
import { ref } from 'vue'

const verses = ref([
  { reference: "John 3:16", text: "For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life." },
  { reference: "Jeremiah 29:11", text: "For I know the plans I have for you,” declares the Lord, “plans to prosper you and not to harm you, plans to give you hope and a future." },
  { reference: "Philippians 4:13", text: "I can do all this through him who gives me strength." },
  { reference: "Romans 8:28", text: "And we know that in all things God works for the good of those who love him, who have been called according to his purpose." },
  { reference: "Proverbs 3:5-6", text: "Trust in the Lord with all your heart and lean not on your own understanding; in all your ways submit to him, and he will make your paths straight." },
  { reference: "Psalm 23:1", text: "The Lord is my shepherd, I lack nothing." },
  { reference: "Isaiah 40:31", text: "But those who hope in the Lord will renew their strength. They will soar on wings like eagles; they will run and not grow weary, they will walk and not be faint." },
  { reference: "Matthew 11:28", text: "Come to me, all you who are weary and burdened, and I will give you rest." },
  { reference: "Psalm 46:1", text: "God is our refuge and strength, an ever-present help in trouble." },
  { reference: "Philippians 4:6-7", text: "Do not be anxious about anything, but in every situation, by prayer and petition, with thanksgiving, present your requests to God. And the peace of God, which transcends all understanding, will guard your hearts and your minds in Christ Jesus." },
  { reference: "Joshua 1:9", text: "Have I not commanded you? Be strong and courageous. Do not be afraid; do not be discouraged, for the Lord your God will be with you wherever you go." },
  { reference: "Deuteronomy 31:6", text: "Be strong and courageous. Do not be afraid or terrified because of them, for the Lord your God goes with you; he will never leave you nor forsake you." },
  { reference: "Psalm 34:8", text: "Taste and see that the Lord is good; blessed is the one who takes refuge in him." },
  { reference: "2 Corinthians 5:17", text: "Therefore, if anyone is in Christ, the new creation has come: The old has gone, the new is here!" },
  { reference: "Ephesians 2:8-9", text: "For it is by grace you have been saved, through faith—and this is not from yourselves, it is the gift of God—not by works, so that no one can boast." },
  { reference: "Romans 12:2", text: "Do not conform to the pattern of this world, but be transformed by the renewing of your mind. Then you will be able to test and approve what God’s will is—his good, pleasing and perfect will." },
  { reference: "Psalm 119:105", text: "Your word is a lamp for my feet, a light on my path." },
  { reference: "Isaiah 41:10", text: "So do not fear, for I am with you; do not be dismayed, for I am your God. I will strengthen you and help you; I will uphold you with my righteous right hand." },
  { reference: "Lamentations 3:22-23", text: "Because of the Lord’s great love we are not consumed, for his compassions never fail. They are new every morning; great is your faithfulness." },
  { reference: "Hebrews 11:1", text: "Now faith is confidence in what we hope for and assurance about what we do not see." },
  { reference: "1 Peter 5:7", text: "Cast all your anxiety on him because he cares for you." },
  { reference: "Psalm 37:4", text: "Take delight in the Lord, and he will give you the desires of your heart." },
  { reference: "John 14:27", text: "Peace I leave with you; my peace I give you. I do not give to you as the world gives. Do not let your hearts be troubled and do not be afraid." },
  { reference: "Romans 15:13", text: "May the God of hope fill you with all joy and peace as you trust in him, so that you may overflow with hope by the power of the Holy Spirit." },
  { reference: "Psalm 27:1", text: "The Lord is my light and my salvation—whom shall I fear? The Lord is the stronghold of my life—of whom shall I be afraid?" },
  { reference: "Matthew 6:33", text: "But seek first his kingdom and his righteousness, and all these things will be given to you as well." },
  { reference: "Galatians 5:22-23", text: "But the fruit of the Spirit is love, joy, peace, forbearance, kindness, goodness, faithfulness, gentleness and self-control. Against such things there is no law." },
  { reference: "Psalm 121:1-2", text: "I lift up my eyes to the mountains—where does my help come from? My help comes from the Lord, the Maker of heaven and earth." },
  { reference: "Colossians 3:23", text: "Whatever you do, work at it with all your heart, as working for the Lord, not for human masters." },
  { reference: "James 1:2-3", text: "Consider it pure joy, my brothers and sisters, whenever you face trials of many kinds, because you know that the testing of your faith produces perseverance." },
  { reference: "Psalm 139:14", text: "I praise you because I am fearfully and wonderfully made; your works are wonderful, I know that full well." },
  { reference: "Proverbs 16:3", text: "Commit to the Lord whatever you do, and he will establish your plans." },
  { reference: "2 Timothy 1:7", text: "For the Spirit God gave us does not make us timid, but gives us power, love and self-discipline." },
  { reference: "Psalm 30:5", text: "For his anger lasts only a moment, but his favor lasts a lifetime; weeping may stay for the night, but rejoicing comes in the morning." },
  { reference: "Ephesians 3:20", text: "Now to him who is able to do immeasurably more than all we ask or imagine, according to his power that is at work within us." },
  { reference: "1 Corinthians 16:14", text: "Do everything in love." },
  { reference: "Psalm 16:8", text: "I keep my eyes always on the Lord. With him at my right hand, I will not be shaken." },
  { reference: "Romans 5:8", text: "But God demonstrates his own love for us in this: While we were still sinners, Christ died for us." },
  { reference: "Isaiah 26:3", text: "You will keep in perfect peace those whose minds are steadfast, because they trust in you." },
  { reference: "Matthew 28:20", text: "And surely I am with you always, to the very end of the age." },
  { reference: "Psalm 91:1-2", text: "Whoever dwells in the shelter of the Most High will rest in the shadow of the Almighty. I will say of the Lord, 'He is my refuge and my fortress, my God, in whom I trust.'" },
  { reference: "John 16:33", text: "I have told you these things, so that in me you may have peace. In this world you will have trouble. But take heart! I have overcome the world." },
  { reference: "1 Thessalonians 5:16-18", text: "Rejoice always, pray continually, give thanks in all circumstances; for this is God’s will for you in Christ Jesus." },
  { reference: "Psalm 119:11", text: "I have hidden your word in my heart that I might not sin against you." },
  { reference: "Hebrews 13:5", text: "Keep your lives free from the love of money and be content with what you have, because God has said, 'Never will I leave you; never will I forsake you.'" },
  { reference: "Micah 6:8", text: "He has shown you, O mortal, what is good. And what does the Lord require of you? To act justly and to love mercy and to walk humbly with your God." },
  { reference: "Zephaniah 3:17", text: "The Lord your God is with you, the Mighty Warrior who saves. He will take great delight in you; in his love he will no longer rebuke you, but will rejoice over you with singing." },
  { reference: "Psalm 145:18", text: "The Lord is near to all who call on him, to all who call on him in truth." },
  { reference: "Exodus 14:14", text: "The Lord will fight for you; you need only to be still." },
  { reference: "Psalm 55:22", text: "Cast your cares on the Lord and he will sustain you; he will never let the righteous be shaken." }
])

function copyToClipboard(text: string, reference: string) {
  const fullText = `${text} — ${reference} (NIV)`
  navigator.clipboard.writeText(fullText).then(() => {
    alert('Verse copied to clipboard! 📖')
  }).catch(() => {
    alert('Failed to copy verse')
  })
}
</script>

<template>
  <AppLayout>
    <section id="bible-display">
      <h2>Bible Verses – Strength & Hope</h2>
      <div id="bible-container" class="bible-grid">
        <div
          v-for="(verse, index) in verses"
          :key="index"
          class="verse-card"
          @click="copyToClipboard(verse.text, verse.reference)"
        >
          <p class="verse-text">“{{ verse.text }}”</p>
          <p class="verse-ref">— {{ verse.reference }} (NIV)</p>
          <div class="copy-hint">Click to copy</div>
        </div>
      </div>
    </section>

    <button @click="scrollToTop" aria-label="Back to top" class="back-to-top">↑</button>
  </AppLayout>
</template>

<style scoped>
#bible-display h2 {
  font-size: 2.5rem;
  margin: 2rem 0 2.5rem;
  color: #3b2a1a;
  text-align: center;
  font-weight: 700;
}

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
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 6px 16px rgba(59, 42, 26, 0.1);
  overflow: hidden;
}

.verse-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 16px 40px rgba(59, 42, 26, 0.18);
  border-color: #c9a96e;
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

.copy-hint {
  position: absolute;
  bottom: 1rem;
  right: 1.5rem;
  font-size: 0.82rem;
  color: #a38b6f;
  opacity: 0.7;
  transition: opacity 0.25s;
  pointer-events: none;
}

.verse-card:hover .copy-hint {
  opacity: 1;
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
</style>
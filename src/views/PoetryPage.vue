<script setup lang="ts">
import AppLayout from '../components/AppLayout.vue'
import { ref } from 'vue'

const poems = ref([
  {
    title: "Still I Rise",
    author: "Maya Angelou",
    text: "You may write me down in history\nWith your bitter, twisted lies,\nYou may trod me in the very dirt\nBut still, like dust, I’ll rise.\n\nYou may shoot me with your words,\nYou may cut me with your eyes,\nYou may kill me with your hatefulness,\nBut still, like air, I’ll rise.\n\n…\nOut of the huts of history’s shame\nI rise\nUp from a past that’s rooted in pain\nI rise\nI’m a black ocean, leaping and wide,\nWelling and swelling I bear in the tide.\n\nLeaving behind nights of terror and fear\nI rise\nInto a daybreak that’s wondrously clear\nI rise\nBringing the gifts that my ancestors gave,\nI am the dream and the hope of the slave.\nI rise\nI rise\nI rise."
  },
  {
    title: "Hope is the thing with feathers",
    author: "Emily Dickinson",
    text: "Hope is the thing with feathers\nThat perches in the soul,\nAnd sings the tune without the words,\nAnd never stops at all,\n\nAnd sweetest in the gale is heard;\nAnd sore must be the storm\nThat could abash the little bird\nThat kept so many warm.\n\nI’ve heard it in the chillest land,\nAnd on the strangest sea;\nYet, never, in extremity,\nIt asked a crumb of me."
  },
  {
    title: "Invictus",
    author: "William Ernest Henley",
    text: "Out of the night that covers me,\nBlack as the pit from pole to pole,\nI thank whatever gods may be\nFor my unconquerable soul.\n\nIn the fell clutch of circumstance\nI have not winced nor cried aloud.\nUnder the bludgeonings of chance\nMy head is bloody, but unbowed.\n\nBeyond this place of wrath and tears\nLooms but the Horror of the shade,\nAnd yet the menace of the years\nFinds and shall find me unafraid.\n\nIt matters not how strait the gate,\nHow charged with punishments the scroll,\nI am the master of my fate,\nI am the captain of my soul."
  },
  {
    title: "The Road Not Taken",
    author: "Robert Frost",
    text: "Two roads diverged in a yellow wood,\nAnd sorry I could not travel both\nAnd be one traveler, long I stood\nAnd looked down one as far as I could\nTo where it bent in the undergrowth;\n\nThen took the other, as just as fair,\nAnd having perhaps the better claim,\nBecause it was grassy and wanted wear;\nThough as for that the passing there\nHad worn them really about the same,\n\nAnd both that morning equally lay\nIn leaves no step had trodden black.\nOh, I kept the first for another day!\nYet knowing how way leads on to way,\nI doubted if I should ever come back.\n\nI shall be telling this with a sigh\nSomewhere ages and ages hence:\nTwo roads diverged in a wood, and I—\nI took the one less traveled by,\nAnd that has made all the difference."
  },
  {
    title: "If—",
    author: "Rudyard Kipling",
    text: "If you can keep your head when all about you\n   Are losing theirs and blaming it on you,\nIf you can trust yourself when all men doubt you,\n   But make allowance for their doubting too;\n…\nIf you can fill the unforgiving minute\n   With sixty seconds’ worth of distance run—\nYours is the Earth and everything that’s in it,\n   And—which is more—you’ll be a Man, my son!"
  },
  {
    title: "Dreams",
    author: "Langston Hughes",
    text: "Hold fast to dreams\nFor if dreams die\nLife is a broken-winged bird\nThat cannot fly.\n\nHold fast to dreams\nFor when dreams go\nLife is a barren field\nFrozen with snow."
  },
  {
    title: "won't you celebrate with me",
    author: "Lucille Clifton",
    text: "won't you celebrate\nwith me\nwhat i have shaped into\na kind of life? i had no model.\nborn in babylon\nboth nonwhite and woman\nwhat did i see to be except myself?\ni made it up\nhere on this bridge between\nstarshine and clay,\nmy one hand holding tight\nmy other hand; come celebrate\nwith me that everyday\nsomething has tried to kill me\nand has failed."
  },
  {
    title: "Leisure",
    author: "William Henry Davies",
    text: "What is this life if, full of care,\nWe have no time to stand and stare.\n\nNo time to stand beneath the boughs\nAnd stare as long as sheep or cows.\n\nNo time to see, when woods we pass,\nWhere squirrels hide their nuts in grass.\n\nNo time to see, in broad daylight,\nStreams full of stars, like skies at night.\n\nNo time to turn at Beauty's glance,\nAnd watch her feet, how they can dance.\n\nNo time to wait till her mouth can\nEnrich that smile her eyes began.\n\nA poor life this if, full of care,\nWe have no time to stand and stare."
  },
  {
    title: "Nothing Gold Can Stay",
    author: "Robert Frost",
    text: "Nature’s first green is gold,\nHer hardest hue to hold.\nHer early leaf’s a flower;\nBut only so an hour.\nThen leaf subsides to leaf.\nSo Eden sank to grief,\nSo dawn goes down to day.\nNothing gold can stay."
  },
  {
    title: "The Will to Win",
    author: "Berton Braley",
    text: "If you want a thing bad enough\nTo go out and fight for it,\nWork day and night for it,\nGive up your time and your peace and your sleep for it\n\nIf only desire of it\nMakes you quite mad enough\nNever to tire of it,\nMakes you hold all other things tawdry and cheap for it\n\nIf life seems all empty and useless without it\nAnd all that you scheme and you dream is about it,\n\nIf gladly you’ll sweat for it,\nFret for it,\nPlan for it,\nLose all your terror of God or man for it,\n\nIf you simply must win, you find it,\nYou’ll get it!"
  },
  {
    title: "Do Not Go Gentle into That Good Night",
    author: "Dylan Thomas",
    text: "Do not go gentle into that good night,\nOld age should burn and rave at close of day;\nRage, rage against the dying of the light.\n\nThough wise men at their end know dark is right,\nBecause their words had forked no lightning they\nDo not go gentle into that good night.\n\nGood men, the last wave by, crying how bright\nTheir frail deeds might have danced in a green bay,\nRage, rage against the dying of the light.\n\nWild men who caught and sang the sun in flight,\nAnd learn, too late, they grieved it on its way,\nDo not go gentle into that good night.\n\nGrave men, near death, who see with blinding sight\nBlind eyes could blaze like meteors and be gay,\nRage, rage against the dying of the light.\n\nAnd you, my father, there on the sad height,\nCurse, bless, me now with your fierce tears, I pray.\nDo not go gentle into that good night.\nRage, rage against the dying of the light."
  },
  {
    title: "Phenomenal Woman",
    author: "Maya Angelou",
    text: "Pretty women wonder where my secret lies.\nI’m not cute or built to suit a fashion model’s size\nBut when I start to tell them,\nThey think I’m telling lies.\nI say,\nIt’s in the reach of my arms,\nThe span of my hips,\nThe stride of my step,\nThe curl of my lips.\nI’m a woman\nPhenomenally.\nPhenomenal woman,\nThat’s me."
  },
  {
    title: "Dust of Snow",
    author: "Robert Frost",
    text: "The way a crow\nShook down on me\nThe dust of snow\nFrom a hemlock tree\n\nHas given my heart\nA change of mood\nAnd saved some part\nOf a day I had rued."
  },
  {
    title: "No Man Is an Island",
    author: "John Donne",
    text: "No man is an island,\nEntire of itself.\nEach is a piece of the continent,\nA part of the main.\nIf a clod be washed away by the sea,\nEurope is the less.\nAs well as if a promontory were.\nAs well as if a manor of thine own\nOr of thine friend's were.\nEach man's death diminishes me,\nFor I am involved in mankind.\nTherefore, send not to know\nFor whom the bell tolls,\nIt tolls for thee."
  },
  {
    title: "The Oak",
    author: "Alfred Lord Tennyson",
    text: "Live thy life,\nYoung and old,\nLike yon oak,\nBright in spring,\nLiving gold;\n\nThat will sit\nIn the wood\nWhen the winter\nStorms have stript\nAll the leaves;\n\nAnd the sky\nIs as gray\nAs the sea;\nAnd the woods\nAre as bare\nAs the sea."
  }
])

function copyToClipboard(text: string, title: string, author: string) {
  const fullText = `${title}\nby ${author}\n\n${text}`
  navigator.clipboard.writeText(fullText).then(() => {
    alert('Poem copied to clipboard! 📜')
  }).catch(() => {
    alert('Failed to copy poem')
  })
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>

<template>
  <AppLayout>
    <section id="poetry-display">
      <h2>Poetry Collection – Words That Rise</h2>
      <div id="poetry-container" class="poetry-grid">
        <div
          v-for="(poem, index) in poems"
          :key="index"
          class="poem-card"
          @click="copyToClipboard(poem.text, poem.title, poem.author)"
        >
          <h3 class="poem-title">{{ poem.title }}</h3>
          <p class="poem-author">— {{ poem.author }}</p>
          <pre class="poem-text">{{ poem.text }}</pre>
          <div class="copy-hint">Click card to copy</div>
        </div>
      </div>
    </section>

    <button @click="scrollToTop" aria-label="Back to top" class="back-to-top">↑</button>
  </AppLayout>
</template>

<style scoped>
#poetry-display h2 {
  font-size: 2.5rem;
  margin: 2rem 0 2.5rem;
  color: #3b2a1a;
  text-align: center;
  font-weight: 700;
}

.poetry-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.75rem;
  padding: 0 1rem;
}

.poem-card {
  background: linear-gradient(135deg, #fdf8f2 0%, #f8f0e5 100%);
  border: 1px solid #e0d0b8;
  border-radius: 14px;
  padding: 1.5rem 1.5rem 1.25rem;
  position: relative;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 6px 16px rgba(59, 42, 26, 0.1);
  overflow: hidden;
}

.poem-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 16px 40px rgba(59, 42, 26, 0.18);
  border-color: #c9a96e;
}

.poem-title {
  font-size: 1.35rem;
  margin: 0 0 0.5rem;
  color: #3b2a1a;
  font-weight: 600;
}

.poem-author {
  font-size: 1rem;
  color: #6b5a45;
  margin: 0 0 1rem;
  font-style: italic;
  text-align: right;
}

.poem-text {
  font-size: 1.05rem;
  line-height: 1.55;
  color: #2f1e0f;
  margin: 0;
  white-space: pre-wrap;
  font-family: Georgia, serif;
}

.copy-hint {
  position: absolute;
  bottom: 0.9rem;
  right: 1.2rem;
  font-size: 0.8rem;
  color: #a38b6f;
  opacity: 0.65;
  transition: opacity 0.25s;
  pointer-events: none;
}

.poem-card:hover .copy-hint {
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
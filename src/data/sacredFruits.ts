export interface SacredFruit {
  category: string
  fruit: string
  tradition: string
  significance: string
  example: string
}

export const sacredFruits: SacredFruit[] = [
  // ── Garden & Paradise ──
  {
    category: 'Garden & Paradise',
    fruit: 'Fig',
    tradition: 'Christianity · Islam · Buddhism',
    significance: 'The fig appears at the opening of human history — the first plant named after the Fall when Adam and Eve sewed fig leaves to cover themselves. In the Quran, God swears by the fig ("By the fig and the olive," Surah 95:1), elevating it among all creation. The Buddha attained enlightenment seated beneath the sacred fig tree — the Bodhi Tree (Ficus religiosa) — at Bodh Gaya. Jesus later cursed a barren fig tree as a sign of spiritual fruitlessness.',
    example: '"Then the eyes of both of them were opened, and they realized they were naked; so they sewed fig leaves together and made coverings for themselves." — Genesis 3:7',
  },
  {
    category: 'Garden & Paradise',
    fruit: 'Grape',
    tradition: 'Christianity · Judaism · Greek Religion',
    significance: 'The grape vine runs from Noah\'s vineyard to the Last Supper cup — a thread of covenant, joy, and sacrifice through all of Scripture. Jesus claimed the vine as his own identity: "I am the true vine." At the Last Supper he took the cup, blessed it, and said "This is my blood of the covenant." The Promised Land was confirmed by a single cluster of grapes so large two men carried it on a pole.',
    example: '"I am the true vine, and my Father is the gardener... Remain in me, as I also remain in you. No branch can bear fruit by itself; it must remain in the vine." — John 15:1,4',
  },
  {
    category: 'Garden & Paradise',
    fruit: 'Pomegranate',
    tradition: 'Judaism · Islam · Greek Religion',
    significance: 'The pomegranate held royal status in the ancient world. Hebrew tradition teaches that each pomegranate contains 613 seeds — one for each of the 613 commandments of the Torah. Pomegranates were embroidered in blue, purple, and scarlet on the hem of Aaron\'s priestly robe (Exodus 28:33). The Quran mentions it twice among the fruits of Paradise (6:99, 6:141). In Greek myth, Persephone ate pomegranate seeds in Hades — binding her to the underworld for part of every year.',
    example: '"On the hem of the robe make pomegranates of blue, purple and scarlet yarn around the hem, with gold bells between them." — Exodus 28:33',
  },
  {
    category: 'Garden & Paradise',
    fruit: 'Olive',
    tradition: 'Christianity · Judaism · Islam',
    significance: 'The olive is the fruit of peace, anointing, and endurance — present at every turning point of Scripture. A dove returned to Noah with an olive branch, signaling the end of God\'s judgment. Kings and priests were anointed with olive oil in Israel. The Quran calls it "a blessed tree" and uses the light of olive oil as a metaphor for the light of God (Surah 24:35). Jesus spent his final night of freedom in the Garden of Gethsemane — whose very name means "olive press."',
    example: '"When the dove returned to him in the evening, there in its beak was a freshly plucked olive leaf! Then Noah knew that the water had receded." — Genesis 8:11',
  },
  {
    category: 'Garden & Paradise',
    fruit: 'Apple',
    tradition: 'Christianity · Norse Religion · Celtic Tradition',
    significance: 'Though Genesis simply says "fruit," centuries of Western tradition identified the forbidden fruit as an apple — a view cemented by Jerome\'s Latin Vulgate, where "malum" means both "apple" and "evil." The Song of Solomon calls the beloved to rest "under the apple tree." In Norse mythology, the goddess Idunn kept magical golden apples that granted the gods immortality. Celtic tradition located the isle of the dead at "Avalon" — meaning "isle of apples."',
    example: '"Like an apple tree among the trees of the forest is my beloved among the young men. I delight to sit in his shade, and his fruit is sweet to my taste." — Song of Solomon 2:3',
  },

  // ── Prophets & Wilderness ──
  {
    category: 'Prophets & Wilderness',
    fruit: 'Date',
    tradition: 'Islam · Judaism · Christianity',
    significance: 'The date palm is one of the most venerated trees in the Quran and Torah alike. When Mary was in labor with Jesus, Allah commanded her: "Shake the trunk of this palm tree towards you, and fresh, ripe dates will fall upon you" (Quran 19:25). The Psalmist declares "The righteous flourish like the palm tree" (Psalm 92:12). Dates were a primary food of the Israelites in the wilderness, and Jericho was called "the City of Palms."',
    example: '"And shake toward yourself the trunk of the palm tree; it will drop upon you ripe, fresh dates. So eat and drink and be contented." — Quran 19:25',
  },
  {
    category: 'Prophets & Wilderness',
    fruit: 'Carob',
    tradition: 'Christianity · Judaism',
    significance: 'The carob pod — long, sweet, and sustaining — fed the wilderness prophets and the desperate poor. John the Baptist\'s "locusts and wild honey" in some early traditions was actually carob pods, which became known as "St. John\'s Bread." In the parable of the Prodigal Son, the lost son "longed to fill his stomach with the pods that the pigs were eating" — those pods were carob. Jewish law forbids harvesting a carob tree\'s fruit for the first three years, acknowledging God\'s ownership.',
    example: '"He longed to fill his stomach with the pods that the pigs were eating, but no one gave him anything. When he came to his senses, he said, \'How many of my father\'s hired servants have food to spare!\'" — Luke 15:16–17',
  },
  {
    category: 'Prophets & Wilderness',
    fruit: 'Almond',
    tradition: 'Judaism · Christianity',
    significance: 'The almond is the first tree to bloom in Israel, bursting into flower in January — a symbol of divine watchfulness and readiness. God told Jeremiah: "I see an almond branch" (shaqed), then explained: "I am watching (shoqed) to see that my word is fulfilled" — a Hebrew wordplay between the almond and vigilance. Aaron\'s rod miraculously budded and bore almonds overnight, confirming his God-appointed priesthood. The cups of the golden Menorah were shaped like almond blossoms.',
    example: '"The next day Moses entered the tent and saw that Aaron\'s staff, which represented the tribe of Levi, had not only sprouted but had budded, blossomed and produced almonds." — Numbers 17:8',
  },
  {
    category: 'Prophets & Wilderness',
    fruit: 'Mulberry',
    tradition: 'Christianity',
    significance: 'Jesus chose the mulberry tree — a tree so deeply rooted it takes decades to uproot — as his illustration of the power of faith. When his disciples begged him to increase their faith, he pointed to this stubborn, immovable tree and said that even the smallest genuine faith could command it to be uprooted and planted in the sea. The mulberry\'s deep roots became a symbol of what true faith can overcome. In Chinese tradition, the mulberry is sacred to the goddess of silk and the fabric of heaven.',
    example: '"If you have faith as small as a mustard seed, you can say to this mulberry tree, \'Be uprooted and planted in the sea,\' and it will obey you." — Luke 17:6',
  },
  {
    category: 'Prophets & Wilderness',
    fruit: 'Sycamore Fig',
    tradition: 'Christianity · Ancient Egyptian Religion',
    significance: 'In ancient Egypt the sycamore fig was the sacred tree of Hathor, goddess of love and joy — the tree from which the dead received food and water in the afterlife. It was depicted in tomb paintings as the tree of eternal nourishment. In the Gospels, the sycamore fig is the tree that a wealthy tax collector climbed to see Jesus passing — and in doing so encountered the salvation he had never sought. The same tree sacred to Egypt\'s goddess of the dead became the tree from which a man was called into new life.',
    example: '"So Zacchaeus ran ahead and climbed a sycamore-fig tree to see Jesus, since Jesus was coming that way. When Jesus reached the spot, he looked up and said, \'Zacchaeus, come down immediately. I must stay at your house today.\'" — Luke 19:4–5',
  },

  // ── Sacred Rites & Covenant ──
  {
    category: 'Sacred Rites & Covenant',
    fruit: 'Citron (Etrog)',
    tradition: 'Judaism',
    significance: 'The citron — the etrog — is one of the Four Species commanded by God for the festival of Sukkot (Leviticus 23:40): "the fruit of a goodly tree." Rabbinical tradition identified this as the etrog because it is the only fruit that grows, flowers, and ripens year-round — symbolizing the soul that never stops bearing fruit. The etrog has fragrance and taste, and is compared in Midrash to a person who possesses both Torah learning and good deeds. It is held alongside palm, myrtle, and willow in the lulav bundle.',
    example: '"On the first day you are to take branches from luxuriant trees — from palms, willows and other leafy trees — and rejoice before the LORD your God for seven days." — Leviticus 23:40',
  },
  {
    category: 'Sacred Rites & Covenant',
    fruit: 'Quince',
    tradition: 'Judaism · Greek Religion · Islamic Tradition',
    significance: 'Several rabbinic authorities identified the forbidden fruit of Eden not as an apple but as a quince or a citrus — citing the Hebrew "tappuah" as closer to the quince\'s fragrance and appearance. The quince was sacred to Aphrodite in ancient Greece, representing love, marriage, and fertility. In Islamic tradition the quince is described in hadith as a fruit of Paradise that strengthens the heart. Scholars from Avicenna to al-Biruni praised its medicinal sacredness in Islamic medicine.',
    example: '"I adjure you, O daughters of Jerusalem... I sat down in his shade with great delight, and his fruit was sweet to my taste." — Song of Solomon 2:5,3 (traditionally associated with the quince by some rabbinical interpreters)',
  },
  {
    category: 'Sacred Rites & Covenant',
    fruit: 'Wheat',
    tradition: 'Christianity · Judaism · Egyptian Religion',
    significance: 'The wheat grain holds a unique place in the teaching of Jesus — not as harvest abundance but as sacrificial death. "Unless a grain of wheat falls into the earth and dies, it remains alone; but if it dies, it bears much fruit" (John 12:24). This single verse became the theology of resurrection. In ancient Egypt, Osiris was the god of wheat — his death and rebirth mirrored by the grain buried in the earth and rising as new life. The barley firstfruits offering of Leviticus 23 opened the harvest season sacred to God.',
    example: '"Very truly I tell you, unless a kernel of wheat falls to the ground and dies, it remains only a single seed. But if it dies, it produces many seeds." — John 12:24',
  },
  {
    category: 'Sacred Rites & Covenant',
    fruit: 'Cherry',
    tradition: 'Christianity · Japanese Shinto',
    significance: 'In medieval Christian iconography, the cherry was called "the fruit of Paradise" — its blood-red color associated with the sacrifice of Christ and the blood of martyrs. The "Cherry Tree Carol" of English tradition tells of the unborn Jesus commanding a cherry tree to bow its branches to feed his mother Mary. In Japanese Shinto, the cherry blossom (sakura) is the most sacred of all flowers — representing the brevity and beauty of life, the samurai\'s acceptance of death, and the soul\'s transience.',
    example: '"Then Mary spoke to Joseph, so meek and so mild: \'Joseph, gather me some cherries, for I am with child.\' Then bowed down the tallest tree unto his mother\'s hand." — The Cherry Tree Carol (15th century English carol)',
  },
  {
    category: 'Sacred Rites & Covenant',
    fruit: 'Strawberry',
    tradition: 'Christianity',
    significance: 'The strawberry held deep symbolic power in medieval Christian theology. Its three-lobed leaf (trifoliate) was seen as a natural emblem of the Trinity. The red fruit was associated with the blood of Christ and the righteousness he bestows. The Virgin Mary was frequently depicted in art seated in a strawberry garden — "the Virgin in the Strawberry Garden" — the fruit symbolizing perfect righteousness and the works of grace. Thomas Cantimpré called it the fruit of righteous deeds.',
    example: '"In medieval illuminated manuscripts the strawberry garden surrounding the Virgin represented the Paradise of perfect righteousness — a fruit growing low to the ground, near the earth, yet perfectly formed." — Thomas Cantimpré, Liber de Natura Rerum (13th century)',
  },

  // ── Eastern Sacred Traditions ──
  {
    category: 'Eastern Sacred Traditions',
    fruit: 'Mango',
    tradition: 'Hinduism · Buddhism',
    significance: 'In Hinduism the mango is called the "king of fruits" and is sacred to multiple deities. Lord Ganesha is often depicted holding a mango — the perfectly ripe fruit symbolizing attainment. Saraswati, goddess of wisdom, is associated with the mango\'s sweetness. The mango grove (Amrakulya) was a setting where the Buddha frequently taught — the Jivaka Mango Grove in Rajagriha being where he gave many discourses. Mango leaves are tied above doorways during sacred Hindu ceremonies as a symbol of auspiciousness.',
    example: '"Then Ambapali the courtesan heard that the Blessed One had arrived at Vesali and was staying in her mango grove. Harnessing her carriages, she drove out to meet him." — Digha Nikaya (Pali Canon, early Buddhist text)',
  },
  {
    category: 'Eastern Sacred Traditions',
    fruit: 'Coconut',
    tradition: 'Hinduism',
    significance: 'The coconut is called "Shriphal" in Sanskrit — "the fruit of the goddess Sri (Lakshmi)." It is the most universally offered fruit in Hindu ritual: when a coconut is broken before a deity, it symbolizes the shattering of the ego. The hard outer shell = pride; the white inner flesh = purity of the self offered to God; the water inside = the sacred offering. The three eyes of the coconut are said to represent the three eyes of Lord Shiva. No major Hindu ceremony begins without a coconut.',
    example: '"The coconut is Shriphal — the fruit of the goddess. Its three eyes see what mortal eyes cannot. When we break it at the altar, we offer the ego itself to the divine." — Agni Purana (Hindu sacred text)',
  },
  {
    category: 'Eastern Sacred Traditions',
    fruit: 'Banana',
    tradition: 'Hinduism · Buddhism',
    significance: 'The banana is among the most sacred fruits offered to deities in Hindu worship — particularly to Lord Vishnu. In the Ramayana, banana plants lined the path to Ayodhya during Rama\'s coronation. In Buddhist tradition, the banana appears in the Dhammapada as a metaphor for the wandering mind: "The mind, hard to restrain, flighty, wandering where it will — to tame it is good. A tamed mind brings happiness." The entire banana plant — leaves, stem, flower, and fruit — is used in sacred Hindu rituals.',
    example: '"From a plantain trunk, what fruit could you desire? So too, of this fickle mind — know that it is insubstantial." — Dhammapada 7:11 (Buddhist sacred verse)',
  },
  {
    category: 'Eastern Sacred Traditions',
    fruit: 'Lotus Seed',
    tradition: 'Buddhism · Hinduism · Ancient Egyptian Religion',
    significance: 'The lotus is the universal symbol of spiritual awakening: rooted in mud, rising through water, blooming unstained in the sun. The lotus seed pod — with its many perfectly ordered seeds — symbolizes the many paths to enlightenment held within one source. In Hinduism, Brahma (the Creator) was born from a lotus that grew from the navel of Vishnu. In ancient Egypt, the blue lotus was sacred to Nefertum, god of the sunrise, and was placed on the faces of mummies. The Buddha is depicted seated on a lotus throne.',
    example: '"He who abides in loving-kindness, serene and joyful... unstained by water as a lotus — him do I call a brahmin." — Dhammapada 26:23 (Buddhist sacred verse)',
  },
  {
    category: 'Eastern Sacred Traditions',
    fruit: 'Persimmon',
    tradition: 'Japanese Shinto · Confucianism',
    significance: 'The persimmon has been sacred in Japan since antiquity — offered at Shinto shrines during the autumn harvest festival (Niiname-sai) where the Emperor first offers the new grain and fruits to the gods before the people eat. In Confucian tradition the persimmon tree embodies five virtues: long life, shade for all, no birds\' nests (no discord), freedom from insects (purity), and beautiful leaves (elegance of autumn). The dried persimmon (hoshigaki) was offered to ancestors at Buddhist memorial altars.',
    example: '"At the Niiname-sai, the Emperor offers the first fruits of the harvest — including the persimmon — to the gods Amaterasu and Toyouke-Ōmikami before any person tastes the new season\'s food." — Kojiki (Japanese sacred text, 712 CE)',
  },

  // ── Healing & Sacred Provision ──
  {
    category: 'Healing & Sacred Provision',
    fruit: 'Black Seed (Nigella)',
    tradition: 'Islam',
    significance: 'The black seed (Nigella sativa / Habbatus Sauda) is the most explicitly praised medicinal fruit in the Islamic sacred tradition. The Prophet Muhammad declared: "In the black seed there is healing for every disease except death" (Sahih Bukhari). This hadith elevated the small black seed to near-miraculous status in Islamic medicine. Avicenna devoted an entire section of his Canon of Medicine to the black seed, calling it the most powerful healing substance known. It has been found in Tutankhamun\'s tomb, evidence of its ancient sacred status.',
    example: '"Make use of the black seed, for it contains a cure for every disease except death." — Hadith of the Prophet Muhammad (Sahih Bukhari, Vol. 7, Book 71, Hadith 591)',
  },
  {
    category: 'Healing & Sacred Provision',
    fruit: 'Myrrh',
    tradition: 'Christianity · Judaism · Ancient Egyptian Religion',
    significance: 'Myrrh is harvested from the resin-bearing fruit of the Commiphora tree and was among the rarest and most sacred substances in the ancient world. It was one of the three gifts of the Magi at Jesus\'s birth (Matthew 2:11), foreshadowing his role as healer (Raphael\'s oil), king (gold), and sacrifice (myrrh was used in embalming). God commanded Moses to include myrrh as the primary ingredient of the holy anointing oil (Exodus 30:23). The Egyptians used myrrh in embalming the dead as a preserving agent of immortality.',
    example: '"On coming to the house, they saw the child with his mother Mary, and they bowed down and worshiped him. Then they opened their treasures and presented him with gifts of gold, frankincense and myrrh." — Matthew 2:11',
  },
  {
    category: 'Healing & Sacred Provision',
    fruit: 'Lemon',
    tradition: 'Hinduism · Judaism · Islamic Tradition',
    significance: 'The lemon holds protective and purifying sacred status across multiple traditions. In Hindu practice, a string of lemons and green chillies is hung at the entrance of homes and temples during Diwali to ward off the evil eye and invite the goddess Alakshmi to pass by without entering — the sharp, acidic nature of the fruit repels negativity. In Sephardic Jewish tradition the lemon is closely associated with the Sukkot etrog. Islamic herbal medicine (Tibb al-Nabawi) prescribed lemon extensively for purification of blood and spirit.',
    example: '"The lemon-chilli toran hung at the threshold is an offering to Alakshmi — the goddess of misfortune. She is drawn to the sour and pungent and takes it with her, leaving only Lakshmi\'s blessing within." — Diwali folk tradition, Skanda Purana commentary',
  },
  {
    category: 'Healing & Sacred Provision',
    fruit: 'Blackberry',
    tradition: 'Celtic Christianity · Jewish Tradition',
    significance: 'The blackberry bramble carries both pain and sweetness — a fruit the sacred imagination found impossible to ignore. Moses encountered God in the burning bush, which rabbinic tradition identified as a bramble (Hebrew "seneh" = thorn-bush). Some patristic writers saw the crown of thorns placed on Jesus\'s head as woven from blackberry bramble — the fruit of thorns becoming a crown of suffering. In Celtic folk Christianity, Michaelmas (September 29, feast of the Archangel Michael) marks the last day to pick blackberries, after which the Devil is said to have spat on them when cast from heaven.',
    example: '"There the angel of the LORD appeared to Moses in flames of fire from within a bush. Moses saw that though the bush was on fire it did not burn up." — Exodus 3:2 (the seneh — bramble bush — as the site of divine encounter)',
  },
  {
    category: 'Healing & Sacred Provision',
    fruit: 'Bitter Melon',
    tradition: 'Buddhism · Hindu Ayurveda',
    significance: 'The bitter melon (Momordica charantia) is sacred in Buddhist and Ayurvedic tradition as a fruit of purification through discomfort — its extreme bitterness seen as cleansing both body and spirit. In Buddhist monasteries it is eaten during fasting periods as a reminder that enlightenment requires willingness to taste bitterness. The Charaka Samhita (foundational Ayurvedic text, ~300 BCE) names it among the most sacred healing plants, prescribed to purify blood and balance the three doshas — the energies the universe uses to sustain life.',
    example: '"Just as the bitter medicine cures the disease, so the bitter truth, accepted with courage and humility, cures the delusion of the self." — Charaka Samhita, Sutrasthana 1:15 (Ayurvedic sacred medical text, ~300 BCE)',
  },
]

export function getFruitOfTheDay(): SacredFruit {
  const dayIndex = Math.floor(Date.now() / 86_400_000)
  return sacredFruits[dayIndex % sacredFruits.length]
}

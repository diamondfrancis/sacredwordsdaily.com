// Sample data (Bible verses)
const bibleData = [ 
    { title: "John 16:33", content: "In the world you will have tribulation. But take heart; I have overcome the world." },
    { title: "Isaiah 41:10 (NIV)", content: "So do not fear, for I am with you; do not be dismayed, for I am your God. I will strengthen you and help you; I will uphold you with my righteous right hand." },
    { title: "Philippians 4:6–7 (NIV)", content: "Do not be anxious about anything, but in every situation, by prayer and petition, with thanksgiving, present your requests to God. And the peace of God, which transcends all understanding, will guard your hearts and your minds in Christ Jesus." },
    { title: "Romans 15:13 (NIV)", content: "May the God of hope fill you with all joy and peace as you trust in Him, so that you may overflow with hope by the power of the Holy Spirit." },
    { title: "Isaiah 41:13", content: "For I, the LORD your God, hold your right hand; it is I who say to you, 'Fear not, I am the one who helps you." },
];

// Sample data (quotes)
const quoteData = [
    "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
    "In the end, we will remember not the words of our enemies, but the silence of our friends. - Martin Luther King Jr.",
    "The best way to predict the future is to create it. - Peter Drucker",
    "What lies behind us and what lies before us are tiny matters compared to what lies within us. - Ralph Waldo Emerson",
    "Believe you can and you're halfway there. - Theodore Roosevelt"
];

// Sample data (poetry)
const poetryData = [
    {
        title: "The Road Not Taken",
        author: "Robert Frost",
        content: "Two roads diverged in a yellow wood,\nAnd sorry I could not travel both\nAnd be one traveler, long I stood\nAnd looked down one as far as I could\nTo where it bent in the undergrowth;"
    },
    {
        title: "If—",
        author: "Rudyard Kipling",
        content: "If you can keep your head when all about you\nAre losing theirs and blaming it on you,\nYours is the Earth and everything that’s in it,\nAnd—which is more—you’ll be a Man, my son!"
    },
    {
        title: "Still I Rise",
        author: "Maya Angelou",
        content: "You may write me down in history\nWith your bitter, twisted lies,\nYou may trod me in the very dirt\nBut still, like dust, I’ll rise."
    },
    {
        title: "The Peace of Wild Things",
        author: "Wendell Berry",
        content: "I come into the peace of wild things\nWho do not tax their lives with forethought\nOf grief. I come into the presence of still water.\nAnd I feel above me the day-blind stars\nWaiting with their light."
    },
    {
        title: "Invictus",
        author: "William Ernest Henley",
        content: "Out of the night that covers me,\nBlack as the pit from pole to pole,\nI thank whatever gods may be\nFor my unconquerable soul."
    }
];

// Function to generate Bible verses
function generateBibleVerses(bibleData) {
    const bibleContainer = document.getElementById('bible-container');
    if (!bibleContainer || !bibleData.length) return; // Early exit if container is missing or no Bible verses

    bibleData.forEach((verse) => {
        const verseCard = document.createElement('div');
        verseCard.className = 'bible-card';

         // Create title element
         const title = document.createElement('h3');
         title.textContent = verse.title; // Using textContent for security
         verseCard.appendChild(title);
 
         // Create content element
         const content = document.createElement('p');
         content.textContent = verse.content; // Using textContent for security
         verseCard.appendChild(content);
 
         // Append the verse card to the Bible container
         bibleContainer.appendChild(verseCard);
     });
 }
 
 // Generate Bible verses on page load
 document.addEventListener('DOMContentLoaded', () => {
     generateBibleVerses(bibleData);
     // Call other generation functions if needed
 });


// Function to generate quotes
function generateQuotes(quoteData) {
    const quoteContainer = document.getElementById('quote-container');
    if (!quoteContainer || !quoteData.length) return; // Early exit if container is missing or no quotes

    quoteData.forEach((quote) => {
        const quoteCard = document.createElement('div');
        quoteCard.className = 'quote-card';

        // Create content element
        const content = document.createElement('p');
        content.textContent = quote; // Using textContent for security
        quoteCard.appendChild(content);

        // Append the quote card to the main container
        quoteContainer.appendChild(quoteCard);
    });
}

// Function to generate poetry
function generatePoetry(poetryData) {
    const poetryContainer = document.getElementById('poetry-container');
    if (!poetryContainer || !poetryData.length) return; // Early exit if container is missing or no poetry

    poetryData.forEach((poem) => {
        const poemCard = document.createElement('div');
        poemCard.className = 'poem-card';

        // Create title element
        const title = document.createElement('h3');
        title.textContent = poem.title; // Using textContent for security
        poemCard.appendChild(title);

        // Create author element
        const author = document.createElement('p');
        author.textContent = `by ${poem.author}`; // Using textContent for security
        poemCard.appendChild(author);

        // Create content element
        const content = document.createElement('p');
        content.textContent = poem.content; // Using textContent for security
        poemCard.appendChild(content);

        // Append the poem card to the poetry container
        poetryContainer.appendChild(poemCard);
    });
}

// Generate quotes and poetry on page load
document.addEventListener('DOMContentLoaded', () => {
    generateQuotes(quoteData);
    generatePoetry(poetryData);
});
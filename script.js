// Sample data (add poetry lines)
const poetryData = [
    { title: "Sacred Words 1", content: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.", socials:"Twitter"},
    { title: "Sacred Words 2", content: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.", socials:"Twitter" },
    { title: "Sacred Words 3", content: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.", socials:"Twitter" },
    { title: "Sacred Words 4", content: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.", socials:"Twitter" },
    { title: "Sacred Words 5", content: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.", socials:"Twitter"},
    { title: "Sacred Words 6", content: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.", socials:"Twitter"},
];

// Function to generate poetry cards
function generatePoetryCards(poetryData) {
    const poetryContainer = document.getElementById('poetry-container');
    poetryData.forEach(poem => {
        const poetryCard = document.createElement('div');
        poetryCard.className = 'poetry-card';

        const title = document.createElement('h2');
        title.innerText = poem.title;
        poetryCard.appendChild(title);

        const content = document.createElement('p');
        content.innerText = poem.content;
        poetryCard.appendChild(content);

        const socials = document.createElement('p');
        const socialLink = document.createElement('a');
        socialLink.setAttribute('href', poem.socials.link);
        socialLink.setAttribute('target', '_blank'); // Open link in a new tab
        socialLink.innerText = `Follow on ${poem.socials.platform}`;
        socials.appendChild(socialLink);
        
        poetryCard.appendChild(socials);

        poetryContainer.appendChild(poetryCard);
    });
}

// Generate poetry cards on page load
generatePoetryCards(poetryData);
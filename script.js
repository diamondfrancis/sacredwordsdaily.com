// Sample data (add poetry lines)
const poetryData = [
    { title: "Written by Mawuena Rankine", content: "Without Christ, where would I be? Without His love, indwelling in me… Would life have meaning? I think not… Each day a meaningless melting pot. Each decision made recklessly, no reason to care, Without Christ no standard would cause us to share, Love and light could not exist as it would have no place, Each human vessel an empty shell of a space, Without Christ, I know exactly where I’d be, I’d be nowhere and nothing as it’s He who made me!" },
    { title: "John 16:33", content: "In the world you will have tribulation. But take heart; I have overcome the world." },
    { title: "Isaiah 41:10 (NIV)", content: "So do not fear, for I am with you; do not be dismayed, for I am your God. I will strengthen you and help you; I will uphold you with my righteous right hand." },
    { title: "Philippians 4:6–7 (NIV)", content: "Do not be anxious about anything, but in every situation, by prayer and petition, with thanksgiving, present your requests to God. And the peace of God, which transcends all understanding, will guard your hearts and your minds in Christ Jesus." },
    { title: "Romans 15:13 (NIV)", content: "May the God of hope fill you with all joy and peace as you trust in Him, so that you may overflow with hope by the power of the Holy Spirit." },
    { title: "Isaiah 41:13", content: "For I, the LORD your God, hold your right hand; it is I who say to you, 'Fear not, I am the one who helps you." },
];

// Function to generate poetry cards
function generatePoetryCards(poetryData) {
    const poetryContainer = document.getElementById('poetry-container');

    poetryData.forEach((poem, index) => {
        const poetryCard = document.createElement('div');
        poetryCard.className = 'poetry-card';

        const title = document.createElement('h2');
        title.innerText = poem.title;
        poetryCard.appendChild(title);

        const content = document.createElement('p');
        content.innerText = poem.content;
        poetryCard.appendChild(content);

        const socialMediaContainer = document.createElement('div');
        socialMediaContainer.className = 'social-media-container';

        if (index === 0) {
            // Create and add Website link
            const websiteLink = document.createElement('a');
            websiteLink.href = `https://mawuenarankine.com`;
            websiteLink.innerText = 'Website';
            websiteLink.target = "_blank";
            websiteLink.rel = "noopener";
            socialMediaContainer.appendChild(websiteLink);

            // Create and add Instagram link
            const instagramLink = document.createElement('a');
            instagramLink.href = `https://instagram.com/the_purpose_finder?igshid=YmMyMTA2M2Y=`;
            instagramLink.innerText = ' Instagram';
            socialMediaContainer.appendChild(instagramLink);
        } else {

            // Create and add Reference link
            const facebookLink = document.createElement('a');
            facebookLink.href = `https://www.concordia.edu/blog/15-bible-verses-to-encourage-you.html`;
            facebookLink.innerText = 'Reference';
            socialMediaContainer.appendChild(facebookLink);
        }

        // Append the social media container to the poetry card
        poetryCard.appendChild(socialMediaContainer);

        // Append the poetry card to the main container
        poetryContainer.appendChild(poetryCard);
    });
}

// Generate poetry cards on page load
generatePoetryCards(poetryData);
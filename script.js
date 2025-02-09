// Arrays for story components
const characters = ["a pirate", "a ninja", "a robot", "a wizard", "a dinosaur"];
const actions = ["fought", "danced with", "ate", "built", "sang to"];
const locations = ["on the moon", "in a volcano", "at the beach", "in a castle", "on a pirate ship"];

// Function to generate a random story
function generateStory() {
    const randomCharacter = characters[Math.floor(Math.random() * characters.length)];
    const randomAction = actions[Math.floor(Math.random() * actions.length)];
    const randomLocation = locations[Math.floor(Math.random() * locations.length)];

    return `Once upon a time, ${randomCharacter} ${randomAction} ${randomLocation}.`;
}

// Event listener for the button
document.getElementById('generateBtn').addEventListener('click', function() {
    const story = generateStory();
    document.getElementById('story').textContent = story;
});

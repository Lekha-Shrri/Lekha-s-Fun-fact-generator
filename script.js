// script.js
document.getElementById('generateFactBtn').addEventListener('click', generateFunFact);

const funFacts = [
    "Did you know that the Appalachian Trail, one of the most famous hiking trails in the United States, stretches over 2,190 miles across 14 states? It takes the average hiker about 5 to 7 months to complete the entire trail!",
    "Formula 1 cars can accelerate from 0 to 60 mph in just about 2.6 seconds. The engineering behind these cars is so advanced that they can generate enough downforce to theoretically drive upside down in a tunnel!",
    "The fastest recorded swimming speed by a human is about 5.34 mph, achieved by Olympic swimmer César Cielo in the 100-meter freestyle. However, this is still slower than the average speed of a dolphin, which can swim at speeds of up to 25 mph!"
];

function generateFunFact() {
    const randomIndex = Math.floor(Math.random() * funFacts.length);
    document.getElementById('funFact').textContent = funFacts[randomIndex];
}

// Dinamik yazı efekti
const typingText = document.querySelector('.typing-text');
const text = "Rekfit Outdoor Doğa ve Macera Sporları";
let index = 0;

function typeEffect() {
    if (index < text.length) {
        typingText.textContent += text[index];
        index++;
        setTimeout(typeEffect, 100);
    }
}

typeEffect();


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

// Galeri görselleri için modal
const galleryGrid = document.querySelector('.gallery-grid');

// Örnek görseller (URL'leri istediğiniz gibi değiştirin)
const images = [
    { url: './img/g1.jpg', description: 'Açıklama 1' },
    { url: './img/g2.jpg', description: 'Açıklama 2' },
    { url: './img/g3.jpg', description: 'Açıklama 3' },
    { url: './img/g4.jpg', description: 'Açıklama 4' },
    { url: './img/g5.jpg', description: 'Açıklama 5' },
    { url: './img/g6.jpg', description: 'Açıklama 6' },
    { url: './img/g7.jpg', description: 'Açıklama 7' },
    { url: './img/g8.jpg', description: 'Açıklama 8' },
    { url: './img/g9.jpg', description: 'Açıklama 9' },
    { url: './img/g10.jpg', description: 'Açıklama 10' },
    { url: './img/g11.jpg', description: 'Açıklama 11' },
    { url: './img/g12.jpg', description: 'Açıklama 12' },
];

images.forEach((image, i) => {
    const img = document.createElement('img');
    img.src = image.url;
    img.alt = `Image ${i + 1}`;
    img.addEventListener('click', () => showImageModal(image));
    galleryGrid.appendChild(img);
});

function showImageModal(image) {
    const modal = document.createElement('div');
    modal.classList.add('modal');
    modal.innerHTML = `
        <div class="modal-content">
            <img src="${image.url}" alt="Modal Image">
            <p>${image.description}</p>
            <button onclick="closeModal()">Kapat</button>
        </div>
    `;
    document.body.appendChild(modal);

    // Modal dışına tıklandığında kapanması için
    modal.addEventListener('click', function (event) {
        if (event.target === modal) {
            closeModal();
        }
    });
}

function closeModal() {
    const modal = document.querySelector('.modal');
    if (modal) {
        modal.remove();
    }
}

// Modal için stil ekle
const style = document.createElement('style');
style.textContent = `
    .modal {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.8);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 1000;
        backdrop-filter: blur(10px);
    }
    .modal-content {
        padding: 2rem;
        border-radius: 8px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .modal-content img {
        max-width: 30%;
        margin-bottom: 1rem;
    }
`;
document.head.appendChild(style);

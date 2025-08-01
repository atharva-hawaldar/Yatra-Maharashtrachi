let currentImageIndex;
const galleryImages = document.querySelectorAll('.gallery-img');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');

function openLightbox(index) {
    currentImageIndex = index;
    lightbox.style.display = 'block';
    lightboxImg.src = galleryImages[currentImageIndex].src;
}

function closeLightbox() {
    lightbox.style.display = 'none';
}

function changeImage(direction) {
    currentImageIndex += direction;

    if (currentImageIndex >= galleryImages.length) {
        currentImageIndex = 0;
    } else if (currentImageIndex < 0) {
        currentImageIndex = galleryImages.length - 1;
    }

    lightboxImg.src = galleryImages[currentImageIndex].src;
}
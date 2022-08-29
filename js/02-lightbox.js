import { galleryItems } from './gallery-items.js';
// Change code below this line
const listImagesEl = document.querySelector('.gallery');

function createGallary(items) {
    return items
    .map((item) => `
        <li>
            <a class="gallery__item" href="${item.original}">
                <img
                    class="gallery__image"
                    src="${item.preview}" 
                    alt=${item.description} />
            </a>
        </li>
        `)
    .join("");
}
const addGallary = createGallary(galleryItems);
    
listImagesEl.innerHTML = addGallary;

new SimpleLightbox('.gallery .gallery__item', {
    captionsData: 'alt', 
    captionDelay: 250
    
});
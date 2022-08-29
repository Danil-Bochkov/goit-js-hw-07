import { galleryItems } from './gallery-items.js';
// Change code below this line
const listImagesEl = document.querySelector('.gallery');

function createGallary(items) {
    return items
    .map((item) => `
    <div class="gallery__item">
        <a class="gallery__link" href=${item.original}>
            <img
                class="gallery__image"
                src=${item.preview}
                data-source=${item.original}
                alt=${item.description}
            />
        </a>
    </div>`)
    .join("");
}
const addGallary = createGallary(galleryItems);
    
listImagesEl.innerHTML = addGallary;

listImagesEl.addEventListener('click', onImageClick);

function onImageClick(evt) {
    blockStandartAction(evt)
    if (evt.target.nodeName !== "IMG") {
        return;
    }
    const instance = basicLightbox.create(`
        <img src="${evt.target.dataset.source}">
    `);
    instance.show();

    listImagesEl.addEventListener("keydown", (evt) => {
        if (evt.code === "Escape") {
            instance.close();
        }
    }, { once: true } );
}

function blockStandartAction(evt) {
    evt.preventDefault();
}
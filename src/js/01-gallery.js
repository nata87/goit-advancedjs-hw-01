// Add imports above this line
import { galleryItems } from './gallery-items';
// Описаний в документації*
import SimpleLightbox from 'simplelightbox';
// Додатковий імпорт стилів*
import 'simplelightbox/dist/simple-lightbox.min.css';
// Change code below this line

const galleryList = document.querySelector('.gallery');

renderGallery(galleryItems);

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

function renderGallery(galleryItems) {
  galleryList.innerHTML = galleryItems.map(getImageHtml).join('');
}

function getImageHtml({ preview, original, description }) {
  return `<li class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img class="gallery__image" src="${preview}" alt="${description}" />
            </a>
          </li>`;
}

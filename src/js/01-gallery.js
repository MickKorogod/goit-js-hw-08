import { galleryItems } from './gallery-items.js';
// Change code below this line
// Описан в документации
import SimpleLightbox from "simplelightbox";
// Дополнительный импорт стилей
import "simplelightbox/dist/simple-lightbox.min.css";

console.log(galleryItems);
const createGallery = galleryItems.map(item => {
 return `<a class="gallery__link" href="${item.original}"> <img class="gallery__image" src="${item.preview}" alt="${item.description}"
    /> </a>`
}).join('')
console.log(createGallery)
const container = document.querySelector(".gallery")
container.insertAdjacentHTML("afterbegin", createGallery);

const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});

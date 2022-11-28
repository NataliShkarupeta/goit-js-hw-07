import { galleryItems } from './gallery-items.js';
console.log(galleryItems);


const parentContEl = document.querySelector('.gallery');

function makeEl ({preview,original,description}){
return`<a class="gallery__link" href="large-image.jpg" onclick="return false;"><img
class="gallery__image"
src="${preview}"
data-source="${original}"
alt="${description}"
/></a>`
}
const addElHtml = galleryItems.map(makeEl).join('');
parentContEl.insertAdjacentHTML('afterbegin',addElHtml);

parentContEl.addEventListener('click', onClick);

function onClick(event) {
    const imgEl = event.target;
    if (imgEl.nodeName !== 'IMG'){
            return
    } 
 
    const instance = basicLightbox.create(`
        <img src=" ${imgEl.dataset.source}" width="600" height="400">
        `)

    instance.show()
}
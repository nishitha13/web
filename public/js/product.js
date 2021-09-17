const productImages = document.querySeclectorAll(".product-images img");
const productImageSlide = document.querySeclector(".image-slider");

let activeImageSlide = 0;

productImages.forEach((item, i)=> {
  item.addEventListener('click', () => {
    productImages[activeImageSlide].classList.remove('active');
    item.classList.add('active');
    productImageSlide.style.backgroundImage = 'url('${item.src}')';
    activeImageSlide = i;
  })
})


const sizeBtns = document.querySeclectorAll(".size-radio-btn");
let checkedBtn = 0;

sizeBtns.forEach((item, i)=> {
  item.addEventListener('click', () => {
    sizeBtns[checkedBtn].classList.remove('check');
    item.classList.add('check');
    checkedBtn = i;
  })
})

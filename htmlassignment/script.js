const left = document.querySelector('.left')
const right = document.querySelector('.right')

const slider = document.querySelector('.slider')
let slideNumber = 1;
let length = 5;

const nextSlide =()=>{
    slider.style.transform = `translateX(-${slideNumber * 180}px)`;
    slideNumber++;
}
const prevSlide =()=>{
    slider.style.transform = `translateX(-${(slideNumber-2) * 180}px)`;
    slideNumber--;
}
const getFirstSlide =()=>{
    slider.style.transform = `translateX(-0px)`;
    slideNumber = 1;
}
const getLastSlide =()=>{
    slider.style.transform = `translateX(-${(length - 1)*180}px)`;
    slideNumber = 1;
}



right.addEventListener('click',()=>{
    
    slideNumber < length ? nextSlide() : getFirstSlide();

})
left.addEventListener('click',()=>{
    
    slideNumber > 1 ? prevSlide() : getLastSlide();

})


const left2 = document.querySelector('.left2');
const right2 = document.querySelector('.right2');

const slider2 = document.querySelector('.slider2');
let slideNumber2 = 1;
const length2 = slider2.children.length; // Dynamically calculate the number of slides
const screenSize = window.innerWidth
const slideWidth = screenSize <639 ? 340 : 580 ; // Adjust slide width as per your layout

// Move to the next slide
const nextSlide2 = () => {
  slider2.style.transform = `translateX(-${slideNumber2 * slideWidth}px)`;
  slideNumber2++;
};

// Move to the previous slide
const prevSlide2 = () => {
  slider2.style.transform = `translateX(-${(slideNumber2 - 2) * slideWidth}px)`;
  slideNumber2--;
};

// Move to the first slide
const getFirstSlide2 = () => {
  slider2.style.transform = `translateX(0px)`;
  slideNumber2 = 1;
};

// Move to the last slide
const getLastSlide2 = () => {
  slider2.style.transform = `translateX(-${(length2 - 1) * slideWidth}px)`;
  slideNumber2 = length2;
};

// Event listener for the right arrow
right2.addEventListener('click', () => {
  slideNumber2 < length2 ? nextSlide2() : getFirstSlide2();
});

// Event listener for the left arrow
left2.addEventListener('click', () => {
  slideNumber2 > 1 ? prevSlide2() : getLastSlide2();
});

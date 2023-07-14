const slides = document.querySelectorAll(".slide")
var counter = 0;

slides.forEach(
    (slide, index) => {
        // slide horizontally
        slide.style.left = `${index * 100}%`
        // slide vertically
        // slide.style.bottom = `${index * 100}%`
    }
)

const goNext = () => {
    if (counter < slides.length - 1) {
    counter++;
    slideImage();
    }
    };

const goPrev = () => {
    if (counter != 0) {
    counter--;
    slideImage();
    }
    };

const slideImage = () => {
    slides.forEach(
        (slide) => {
            // slide horizontally
            slide.style.transform = `translateX(-${counter * 100}%)`
            // slide vertically
            // slide.style.transform = `translateY(${counter * 100}%)`
        }
    )
}
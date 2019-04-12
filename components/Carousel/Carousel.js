
class Carousel {
    constructor(element, elementWidth) {
        this.element = element;
        this.width = elementWidth;
        this.imgs = Array.from(this.element.querySelectorAll("img")).map((elem, index) => new CarouselImg(elem, index, this));
        this.currentIndex = 0;
        this.imgCount = this.imgs.length;
        window.addEventListener("resize", () => {
            this.width = document.querySelector(".carousel").offsetWidth;
        })
        this.left = this.element.querySelector(".left-button");
        this.left.addEventListener("click", () => this.slide(-1));
        this.right = this.element.querySelector(".right-button");
        this.right.addEventListener("click", () => this.slide(+1));
    }
    //sliding changing current position by +1 or -1, 
    slide(arr) {
        this.currentIndex += arr;
        if(this.currentIndex >= this.imgCount) {
            this.currentIndex = 0;
        } else if(this.currentIndex <= 0 ) {
            this.currentIndex = this.imgCount-1;
        }
        this.imgs.forEach(elem => elem.updateStartingPoint());
    }
}

class CarouselImg {
    constructor(element, index, carousel) {
        this.element = element;
        this.carousel = carousel;
        this.index = index;
        this.startingPoint = (this.index - this.carousel.currentIndex) * this.carousel.width;
    }
    updateStartingPoint() {
        this.startingPoint = (this.index - this.carousel.currentIndex) * this.carousel.width;
        console.log(this.startingPoint);
    }
}

let carousel = document.querySelector(".carousel");
let carouselWidth = document.querySelector(".carousel").offsetWidth; //initial setting of carousel width
carousel = new Carousel(carousel, carouselWidth);




/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the laft and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/
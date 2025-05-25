// first to do seletecting the elements
const getElement = function(selection){
     const element = document.querySelector(selection);
     if(element){
        return element
     }
     throw new Error(`No element matches ${selection}`);
};

//Class definition

class Slider {
    constructor(container){
        this.container = container;
        this.slides = container.querySelectorAll('.slide');
        this.nextBtn = container.querySelector('.next');
        this.prevBtn = container.querySelector('.prev');
        //initial index of the slide
        this.currentSlide = 0;
      //bind mmethodes
      this.nextSlide = this.nextSlide.bind(this);
      this.prevSlide = this.prevSlide.bind(this);

      //add events Listerners
      this.nextBtn.addEventListener('click', this.nextSlide);
      this.prevBtn.addEventListener('click', this.prevSlide);

      //inside constructor , after event lister
      this.startAutoPlay();

    };

     showSlide(index){
        //hides all slides
        this.slides.forEach((slide) => slide.classList.remove('active'));

        //show current one
        this.slides[index].classList.add('active');
     }

    nextSlide(){
        console.log(this)
        this.currentSlide++;
        if(this.currentSlide >= this.slides.length){
            this.currentSlide = 0
        }
        this.showSlide(this.currentSlide);
    };
    prevSlide(){
        console.log(this)
        this.currentSlide--;
        console.log(this.currentSlide);
        if(this.currentSlide < 0){
            this.currentSlide = this.slides.length - 1;
        }
        this.showSlide(this.currentSlide);
    };

    startAutoPlay(){
        setInterval(() =>{
            this.nextSlide();
        } , 4000);  // 4 second
    }
};

const instance1 = new Slider(getElement('.container'));
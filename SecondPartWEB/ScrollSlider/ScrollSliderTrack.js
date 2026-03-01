export default class ScrollSliderTrack extends HTMLElement{
   get slides(){
    return [...this.children]
   }

   getNextSlide(){
    const currentScroll = this.scrollLeft;
    return this.slides.find((slide) => slide.offsetLeft > currentScroll)
   }
   
    getPrevSlide(){
        const currentScroll = this.scrollLeft;
        return this.slides.reverse().find((slide) => slide.offsetLeft < currentScroll)
    }

   getNextSlideWidth(){
    const nextSlide = this.getNextSlide();
    if (nextSlide) {
        return nextSlide.offsetLeft - this.scrollLeft
    }
    return 0;
   }


    getPrevSlideWidth(){
        const prevSlide = this.getPrevSlide();
        if (prevSlide) {
            return  this.scrollLeft - prevSlide.offsetLeft
        }
        return 0;
    }

    scrollByAmout(amount){
        console.log('hello')
        this.scrollBy({
            left: amount, behavior:"smooth",
        })
    }

    scrollToNext(){
        this.scrollByAmout(this.getNextSlideWidth())
    }

    scrollToPrev(){
        this.scrollByAmout(-this.getPrevSlideWidth())
    }

}

customElements.define("scroll-slider-track", ScrollSliderTrack)
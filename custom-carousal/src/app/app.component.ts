import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    slides = [
        { image: '../assets/c2.png', alt: 'Slide 2' },
        { image: '../assets/c2.png', alt: 'Slide 3' },
        { image: '../assets/c2.png', alt: 'Slide 2' },
        { image: '../assets/c2.png', alt: 'Slide 3' },
        { image: '../assets/c2.png', alt: 'Slide 2' },
        { image: '../assets/c2.png', alt: 'Slide 3' },
        { image: '../assets/c2.png', alt: 'Slide 2' },
        { image: '../assets/c2.png', alt: 'Slide 3' },
        { image: '../assets/c2.png', alt: 'Slide 2' },
        { image: '../assets/c2.png', alt: 'Slide 3' },
        { image: '../assets/c2.png', alt: 'Slide 2' },
        { image: '../assets/c2.png', alt: 'Slide 3' },
    ];
    currentIndex = 0;

    getTransform() {
        return `translateX(-${this.currentIndex * 100}%)`;
    }

    next() {
        this.currentIndex = (this.currentIndex + 1) % this.slides.length;
    }

    prev() {
        this.currentIndex =
            (this.currentIndex - 1 + this.slides.length) % this.slides.length;
    }

    // goToSlide(index: number) {
    //     this.currentIndex = index;
    // }
}

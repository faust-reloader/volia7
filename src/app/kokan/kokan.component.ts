import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-kokan',
    templateUrl: 'kokan.component.html',
    styleUrls: ['kokan.component.css']
})

export class KokanComponent implements OnInit {
    needBigImg: boolean = false;
    imgSlides: Array<Array<number>> = [];
    bigImg: number = 1;
    imgArray: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
    currentImg: number = 0;
    currentSlide: number = 0;

    ngOnInit(): void {
        for (let i = 0; i < Math.ceil(this.imgArray.length / 2); i++) {
            this.imgSlides[i] = this.imgArray.slice((i * 2), (i * 2) + 2);
        }
    }

    changeSlide(n: number) {
        const l = this.imgSlides.length;
        this.currentSlide = (this.currentSlide + n + l) % l;
    }

    showBigImg(img: number) {
        this.bigImg = img;
        this.needBigImg = true;
    }

    changeBigImg(n: number) {
        const l = this.imgArray.length;
        this.currentImg = this.bigImg - 1;
        this.currentImg = (this.currentImg + n + l) % l;
        this.bigImg = this.currentImg + 1;
    }

    hideBigImg() {
        this.needBigImg = false;
    }

}

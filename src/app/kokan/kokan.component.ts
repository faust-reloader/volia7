import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-kokan',
    templateUrl: 'kokan.component.html',
    styleUrls: ['kokan.component.css']
})

export class KokanComponent implements OnInit {
    private needBigImg: boolean;
    private bigImg: string;
    private imgArray: Array<number>;
    private imgSlides: Array<Array<number>>;
    private currentImg: number;
    private currentSlide: number;

    ngOnInit(): void {
        this.needBigImg = false;
        // needs automation
        this.imgArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
        this.imgSlides = [[1, 2], [3, 4], [5, 6], [7, 8], [9, 10], [11, 12], [13, 14], [15, 16]];
        this.currentImg = 0;
        this.currentSlide = 0;
    }

    changeSlide(n: number) {
        const l = this.imgSlides.length;
        this.currentSlide = (this.currentSlide + n + l) % l;
    }

    showBigImg(img: string) {
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

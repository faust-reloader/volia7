import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-kokan',
    templateUrl: 'kokan.component.html',
    styleUrls: ['kokan.component.css']
})

export class KokanComponent implements OnInit {
    private needBigImg: boolean;
    private bigImg: string;
    private imgSlides: Array<Array<number>>;
    private currentSlide: number;

    ngOnInit(): void {
        this.needBigImg = false;
        this.imgSlides = [[1, 2], [3, 4], [5, 6], [7, 8], [9, 10], [11, 12], [13, 14], [15, 16]];
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

    hideBigImg() {
        this.needBigImg = false;
    }

}

import {Component, OnInit} from '@angular/core';

import { lines } from '../shared/lines';

export interface Line {
    name: string;
    code: string;
    imgNum: number;
    desc: string;
    list: string;
    text: string;
}

@Component({
    selector: 'app-lines',
    templateUrl: './lines.component.html',
    styleUrls: ['./lines.component.css']
})

export class LinesComponent implements OnInit {
    private linesArray: Array<Line>;
    private needLine: boolean;
    private currentLineIndex: number;
    private currentLine: Line;
    private currentLineList: Array<Array<string>>;
    private currentLineImages: Array<number>;
    private currentLineBigImg: number;

    ngOnInit() {
        this.currentLineBigImg = 1;
        this.linesArray = lines;
    }

    showLine(index: number) {
        this.currentLineIndex = index;
        this.currentLine = this.linesArray[index];
        this.currentLineImages = [];
        for (let i = 1; i <= this.currentLine.imgNum; i++) {
            this.currentLineImages.push(i);
        }
        this.currentLineBigImg = 1;
        this.currentLineList = this.currentLine.list.trim().split('     ').map(x => x.split(':'));
        this.needLine = true;
    }

    hideLine() {
        this.needLine = false;
        this.currentLineBigImg = 1;
    }

    changeImg(i) {
        this.currentLineBigImg = i;
    }

    changeLine(n: number) {
        const l = this.linesArray.length;
        const i = (this.currentLineIndex + n + l) % l;
        this.showLine(i);
    }
}
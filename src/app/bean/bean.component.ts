import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Title} from '@angular/platform-browser';

import {beanHarvesters} from '../shared/harvesters';


import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml, SafeStyle, SafeScript, SafeUrl, SafeResourceUrl } from '@angular/platform-browser';

@Pipe({
    name: 'safe'
})
export class SafePipe implements PipeTransform {

    constructor(protected sanitizer: DomSanitizer) {}

    public transform(value: any, type: string): SafeHtml | SafeStyle | SafeScript | SafeUrl | SafeResourceUrl {
        switch (type) {
            case 'html':
                return this.sanitizer.bypassSecurityTrustHtml(value);
            case 'style':
                return this.sanitizer.bypassSecurityTrustStyle(value);
            case 'script':
                return this.sanitizer.bypassSecurityTrustScript(value);
            case 'url':
                return this.sanitizer.bypassSecurityTrustUrl(value);
            case 'resourceUrl':
                return this.sanitizer.bypassSecurityTrustResourceUrl(value);
            default:
                throw new Error(`Invalid safe type specified: ${type}`);
        }
    }
}

export interface Harvester {
    name: string;
    code: string;
    imgNum: number;
    func: string;
    desc: string;
    text: string;
}

@Component({
    selector: 'app-bean',
    templateUrl: 'bean.component.html',
    styleUrls: ['bean.component.css']
})

export class BeanComponent implements OnInit {
    private harvestersArray: Array<Harvester>;
    private needHarvester: boolean;
    private currentHarvesterIndex: number;
    private currentHarvester: Harvester;
    private currentHarvesterBigImg: number;
    private currentHarvesterImages: Array<number>;

    ngOnInit() {
        this.currentHarvesterBigImg = 1;
        this.harvestersArray = beanHarvesters;
    }

    showHarvester(index: number) {
        this.currentHarvesterIndex = index;
        this.currentHarvester = this.harvestersArray[index];
        this.currentHarvesterImages = [];
        for (let i = 1; i <= this.currentHarvester.imgNum; i++) {
            this.currentHarvesterImages.push(i);
        }
        this.currentHarvesterBigImg = 1;
        this.needHarvester = true;
    }

    hideHarvester() {
        this.needHarvester = false;
        this.currentHarvesterBigImg = 1;
    }

    changeImg(i) {
        this.currentHarvesterBigImg = i;
    }

    changeHarvester(n: number) {
        const l = this.harvestersArray.length;
        const i = (this.currentHarvesterIndex + n + l) % l;
        this.showHarvester(i);
    }


    // beanHarvesters;
    // beanRows: number[];
    // displayModal: string;
    //
    // constructor(private router: Router,
    //             private route: ActivatedRoute,
    //             private titleService: Title) {
    // }
    //
    // ngOnInit() {
    //     // this.route.paramMap.subscribe(pmap => this.showModal(pmap.get('id')));
    //     this.beanHarvesters = beanHarvesters;
    //     this.beanRows = Array.from(Array(Math.ceil(beanHarvesters.length / 4)).keys());
    // }
    //
    // // showModal(id) {
    // //     if (id) {
    // //         this.displayModal = id;
    // //     }
    // // }
    // //
    // // closeModal() {
    // //     this.displayModal = '';
    // // }
    // //
    // // setTitle( newTitle: string) {
    // //     this.titleService.setTitle( newTitle );
    // // }

}

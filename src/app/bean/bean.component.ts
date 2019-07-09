import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Title} from '@angular/platform-browser';

import {beanHarvesters} from '../shared/harvesters';

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
    private html: string;

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
        this.html = this.currentHarvester.text;
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

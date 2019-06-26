import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

import { beanHarvesters } from '../shared/bean';

@Component({
    selector: 'app-bean',
    templateUrl: './bean.component.html'
})

export class BeanComponent implements OnInit {
    beanHarvesters;
    beanRows: number[];
    displayModal: string;

    constructor(private router: Router,
                private route: ActivatedRoute,
                private titleService: Title) {
    }

    ngOnInit() {
        // this.route.paramMap.subscribe(pmap => this.showModal(pmap.get('id')));
        this.beanHarvesters = beanHarvesters;
        this.beanRows = Array.from(Array(Math.ceil(beanHarvesters.length / 4)).keys());
    }

    // showModal(id) {
    //     if (id) {
    //         this.displayModal = id;
    //     }
    // }
    //
    // closeModal() {
    //     this.displayModal = '';
    // }
    //
    // setTitle( newTitle: string) {
    //     this.titleService.setTitle( newTitle );
    // }

}

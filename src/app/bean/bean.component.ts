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
  harvestersArray: Array<Harvester> = [];
  needHarvester: boolean = false;
  currentHarvesterIndex: number = 1;
  currentHarvester: Harvester = {
    name: '',
    code: '',
    imgNum: 0,
    func: '',
    desc: '',
    text: ''
  };
  currentHarvesterBigImg: number = 1;
  currentHarvesterImages: Array<number> = [];

  public constructor(private titleService: Title) {
  }

  public setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  }

  // constructor(private router: Router,
  //            private route: ActivatedRoute,
  //            private titleService: Title) {
  // }
  // showModal(id) {
  //     if (id) {
  //         this.displayModal = id;
  //     }
  // }

  ngOnInit() {
    this.currentHarvesterBigImg = 1;
    this.harvestersArray = beanHarvesters;
    //this.route.paramMap.subscribe(pmap => this.showModal(pmap.get('id')));
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
    this.setTitle(this.currentHarvester.name);
  }

  hideHarvester() {
    this.needHarvester = false;
    this.currentHarvesterBigImg = 1;
    this.setTitle('Техника для уборки фасоли');
  }

  changeImg(i:number) {
    this.currentHarvesterBigImg = i;
  }

  changeHarvester(n: number) {
    const l = this.harvestersArray.length;
    const i = (this.currentHarvesterIndex + n + l) % l;
    this.showHarvester(i);
  }


}

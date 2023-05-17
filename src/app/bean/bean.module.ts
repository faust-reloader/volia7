import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedModule} from '../shared/shared.module';
import {BeanRoutingModule} from './bean-routing.module';
import {BeanComponent} from './bean.component';

@NgModule({
    imports: [
        CommonModule,
        BeanRoutingModule,
        SharedModule,
    ],
    declarations: [
        BeanComponent,
    ]
})
export class BeanModule {
}
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BeanComponent } from './bean.component';

const routes: Routes =  [
    { path: '', component: BeanComponent },
    { path: ':id', component: BeanComponent }
];

@NgModule({
    imports: [ RouterModule.forChild(routes) ],
    exports: [ RouterModule ]
})
export class BeanRoutingModule {}
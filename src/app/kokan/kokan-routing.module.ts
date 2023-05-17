import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { KokanComponent } from './kokan.component';

const routes: Routes =  [
  { path: '', component: KokanComponent }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class KokanRoutingModule {}
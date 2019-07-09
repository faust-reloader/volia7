import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from './header.component';
import {SafePipe} from './safe.pipe';

@NgModule({
    imports: [CommonModule],
    exports: [
        CommonModule,
        HeaderComponent,
        SafePipe
    ],
    declarations: [
        HeaderComponent,
        SafePipe,
    ]
})
export class SharedModule {
}

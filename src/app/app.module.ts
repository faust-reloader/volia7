import {NgModule} from '@angular/core';
import {BrowserModule, Title} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {PageNotFoundComponent} from './404/404.component';
import {ContactComponent} from './contact/contact.component';
import {SharedModule} from './shared/shared.module';
import {BeanModule} from './bean/bean.module';
import {LinesModule} from './lines/lines.module';
import {KokanModule} from './kokan/kokan.module';

@NgModule({
    declarations: [
        AppComponent,
        ContactComponent,
        PageNotFoundComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        SharedModule,
        BeanModule,
        LinesModule,
        KokanModule
    ],
    providers: [Title],
    bootstrap: [AppComponent]
})
export class AppModule {
}

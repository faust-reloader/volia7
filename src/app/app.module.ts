import {NgModule} from '@angular/core';
import {BrowserModule, Title} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {KokanComponent} from './kokan/kokan.component';
import {PageNotFoundComponent} from './404/404.component';
import {ContactComponent} from './contact/contact.component';
import {SharedModule} from './shared/shared.module';
import {LinesComponent} from './lines/lines.component';

@NgModule({
    declarations: [
        AppComponent,
        KokanComponent,
        LinesComponent,
        ContactComponent,
        PageNotFoundComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        SharedModule
    ],
    providers: [Title],
    bootstrap: [AppComponent]
})
export class AppModule {
}

import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html'
})

export class AppComponent {
    onDeactivate() {
        document.body.scrollTop = 0;
    }
    public constructor( private titleService: Title ) { }
    public setTitle( newTitle: string) {
        this.titleService.setTitle( newTitle );
    }
}

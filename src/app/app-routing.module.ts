import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './404/404.component';
import { KokanComponent } from './kokan/kokan.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
    { path: '', component: KokanComponent },
    { path: 'контакты', component: ContactComponent },
    { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

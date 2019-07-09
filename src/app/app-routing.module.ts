import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {PageNotFoundComponent} from './404/404.component';
import {KokanComponent} from './kokan/kokan.component';
import {LinesComponent} from './lines/lines.component';
import {ContactComponent} from './contact/contact.component';
import {BeanComponent} from './bean/bean.component';

const routes: Routes = [
    {path: '', component: KokanComponent},
    {path: 'контакты', component: ContactComponent},
    // { path: 'комбайны_для_уборки_бобовых', loadChildren: 'app/bean/bean.module#BeanModule'},
    {path: 'переработка_ягод_фруктов_овощей', component: LinesComponent},
    {path: 'shnekovyi_konveer_pt-50', component: LinesComponent},
    {path: 'rolang_rg-01', component: LinesComponent},
    {path: 'rolang_rg-02', component: LinesComponent},
    {path: 'rolang_rg-50', component: LinesComponent},
    {path: 'vejalka_d-01', component: LinesComponent},
    {path: 'vibratsionnyi_kalibrator_vg-08', component: LinesComponent},
    {path: 'barbotazhnaja_moechnaja_mashyna_br-02', component: LinesComponent},
    {path: 'valchatyi_kalibrator_sk-01', component: LinesComponent},
    {path: 'vibrostol_v-2', component: LinesComponent},
    {path: 'vertikalnyi_ekstraktor_vp-01', component: LinesComponent},
    {path: 'mashina_udalenija_cherenkov_p-01', component: LinesComponent},
    {path: 'mashina_gruboi_ochistki_b1-01', component: LinesComponent},
    {path: 'mashina_tonkoi_ochistki_b2-01', component: LinesComponent},
    {path: 'inspekcionnyi_transporter_it-01', component: LinesComponent},
    {path: 'inspekcionnyi_transporter_it-03', component: LinesComponent},
    {path: 'lentochnyi_transporter_tt-01', component: LinesComponent},
    {path: 'lentochnyi_transporter_tt-33', component: LinesComponent},
    {path: 'lentochnyi_transporter_tt-50', component: LinesComponent},
    {path: 'lentochnyi_transporter_tt-83', component: LinesComponent},
    {path: 'zapaischik_plenki_pvh', component: LinesComponent},
    {path: 'nastil_dlia_ustanovki_linii', component: LinesComponent},
    {path: 'комбайны_для_уборки_бобовых', component: BeanComponent},
    {path: 'ceiflex_bean_cutter', component: BeanComponent},
    {path: 'sweere_bean_cutter', component: BeanComponent},
    {path: 'double_master_ii', component: BeanComponent},
    {path: 'double_master_iv', component: BeanComponent},
    {path: 'manual_master', component: BeanComponent},
    {path: 'c200_peanut_digger', component: BeanComponent},
    {path: '**', component: PageNotFoundComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}

import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {HomerComponent} from "./homer.component";
import {BartCompComponent} from './bart-comp/bart-comp.component';
import { LisaCompComponent } from './lisa-comp/lisa-comp.component';

const routes: Routes = [
    {
        path: 'homer',
        component: HomerComponent,
        children: [
            {
                path: 'bart',
                component: BartCompComponent,
                outlet: 'major'
            },
            {
                path: 'lisa',
                component: LisaCompComponent,
                outlet: 'major'
            }
        ]
    }
];

@NgModule({
    declarations: [
        HomerComponent,
        BartCompComponent,
        LisaCompComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class HomerModule {
}

import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProvaComponent} from './prova.component';
import {RouterModule, Routes} from "@angular/router";

export const routers: Routes = [
    {
        path: 'prova',
        component: ProvaComponent
    },
    {
        path: 'lazy-child',
        loadChildren: './lazy-child/lazy-child.module#LazyChildModule'
    }
];

@NgModule({
    declarations: [
        ProvaComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(routers)
    ],
    exports: [
        RouterModule
    ]
})
export class ProvaModule {
}

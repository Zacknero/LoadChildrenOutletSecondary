import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {LazyChildComponent} from "./lazy-child.component";
import {FirstCompComponent} from './first-comp/first-comp.component';
import { SecondCompComponent } from './second-comp/second-comp.component';

const routes: Routes = [
    {
        path: 'homer',
        component: LazyChildComponent,
        children: [
            {
                path: 'bart',
                component: FirstCompComponent,
                outlet: 'major'
            },
            {
                path: 'lisa',
                component: SecondCompComponent,
                outlet: 'major'
            }
        ]
    }
];

@NgModule({
    declarations: [
        LazyChildComponent,
        FirstCompComponent,
        SecondCompComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class LazyChildModule {
}

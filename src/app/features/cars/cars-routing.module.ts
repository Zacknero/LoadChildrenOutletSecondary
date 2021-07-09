import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {CarsPageComponent} from './containers/cars-page/cars-page.component';
import {SelectedCarPageComponent} from './containers/selected-car-page/selected-car-page.component';
import {CarResolver} from './services/car.resolver';
import {FiglioloComponent} from "./components/figliolo/figliolo.component";
import {ContestComponent} from "../../core/containers/contest/contest.component";
import {ContactFormComponent} from "../../core/containers/contact-form/contact-form.component";

const routes: Routes = [
    {
        path: 'cars',
        children: [
            {
                path: '',
                component: CarsPageComponent,
                data: {
                    title: 'Cars'
                }
            },
            {
                path: ':carId',
                component: SelectedCarPageComponent,
                resolve: {
                    car: CarResolver
                },
                data: {
                    title: 'Car details'
                }
            },
            {
                path: 'figliolo',
                component: FiglioloComponent,
                children: [
                    {
                        path: 'contest',
                        component: ContestComponent,
                        outlet: 'minor',
                        pathMatch: 'full'
                    },
                    {
                        path: 'contact',
                        component: ContactFormComponent,
                        outlet: 'minor',
                        pathMatch: 'full'
                    }
                ]
            }
        ]
    }

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CarsRoutingModule {
}

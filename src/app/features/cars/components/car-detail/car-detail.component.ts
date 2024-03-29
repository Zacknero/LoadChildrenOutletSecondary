import { Component, Input} from '@angular/core';
import { DetailedCar } from '../../models/detailed-car';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css']
})
export class CarDetailComponent  {
 @Input() car: DetailedCar;
}
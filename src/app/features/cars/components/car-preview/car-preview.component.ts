import { Component, Input } from '@angular/core';
import { Car } from '../../models/car';

@Component({
  selector: 'app-car-preview',
  templateUrl: './car-preview.component.html',
  styleUrls: ['./car-preview.component.css']
})
export class CarPreviewComponent {
  @Input() car: Car;

  get carName(): string {
    return `${this.car.brand} ${this.car.model}`;
  }
}
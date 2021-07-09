import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {CarsService} from '../../services/cars.service';
import {Car} from '../../models/car';

@Component({
  selector: 'app-cars-page',
  templateUrl: './cars-page.component.html',
  styleUrls: ['./cars-page.component.css']
})
export class CarsPageComponent implements OnInit {
  cars$: Observable<Car[]>;

  constructor(private carsService: CarsService) { }

  ngOnInit() {
    this.cars$ = this.carsService.getCars();
  }

}
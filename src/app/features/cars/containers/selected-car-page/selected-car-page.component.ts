import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { pluck } from 'rxjs/operators';
import { DetailedCar } from '../../models/detailed-car';

@Component({
  selector: 'app-selected-car-page',
  templateUrl: './selected-car-page.component.html',
  styleUrls: ['./selected-car-page.component.css']
})
export class SelectedCarPageComponent implements OnInit {
  car$: Observable<DetailedCar>;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.car$ = this.route.data.pipe(
      pluck('car')
    );
  }
}
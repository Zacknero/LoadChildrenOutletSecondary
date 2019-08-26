import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Observable } from 'rxjs';
import { LayoutService } from './core/services/layout.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  isSpinnerVisibile$: Observable<boolean> = this.layoutService.isNavigationPending$;

  constructor(private titleService: Title, private layoutService: LayoutService) { }

  ngOnInit() {
    this.layoutService.appTitle$.subscribe(appTitle => this.titleService.setTitle(appTitle));
  }
}

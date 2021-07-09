import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { HomerComponent } from './homer.component';

describe('LazyChildComponent', () => {
  let component: HomerComponent;
  let fixture: ComponentFixture<HomerComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ HomerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

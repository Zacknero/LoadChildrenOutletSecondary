import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { BartCompComponent } from './bart-comp.component';

describe('FirstCompComponent', () => {
  let component: BartCompComponent;
  let fixture: ComponentFixture<BartCompComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ BartCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BartCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

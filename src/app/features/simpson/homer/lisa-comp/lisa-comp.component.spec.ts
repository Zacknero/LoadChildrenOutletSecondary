import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { LisaCompComponent } from './lisa-comp.component';

describe('SecondCompComponent', () => {
  let component: LisaCompComponent;
  let fixture: ComponentFixture<LisaCompComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ LisaCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LisaCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

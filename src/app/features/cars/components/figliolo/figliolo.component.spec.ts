import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { FiglioloComponent } from './figliolo.component';

describe('FiglioloComponent', () => {
  let component: FiglioloComponent;
  let fixture: ComponentFixture<FiglioloComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ FiglioloComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FiglioloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

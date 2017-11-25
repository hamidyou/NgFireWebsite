import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {UnitFiveComponent} from './unit-five.component';

describe('UnitFiveComponent', () => {
  let component: UnitFiveComponent;
  let fixture: ComponentFixture<UnitFiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UnitFiveComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnitFiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

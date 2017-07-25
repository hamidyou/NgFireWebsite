import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnitOneComponent } from './unit-one.component';

describe('UnitOneComponent', () => {
  let component: UnitOneComponent;
  let fixture: ComponentFixture<UnitOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnitOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnitOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

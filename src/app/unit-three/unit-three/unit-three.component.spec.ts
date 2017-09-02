import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnitThreeComponent } from './unit-three.component';

describe('UnitThreeComponent', () => {
  let component: UnitThreeComponent;
  let fixture: ComponentFixture<UnitThreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnitThreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnitThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

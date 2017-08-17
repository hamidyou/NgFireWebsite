import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnitTwoComponent } from './unit-two.component';

describe('UnitTwoComponent', () => {
  let component: UnitTwoComponent;
  let fixture: ComponentFixture<UnitTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnitTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnitTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

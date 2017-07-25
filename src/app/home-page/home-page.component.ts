import { Component, OnInit } from '@angular/core';
import {UnitInfoService} from './unit-info.service';
import {Unit} from './unit-detail';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  units: Unit[];

  constructor(private unitInfoService: UnitInfoService) { }

  getUnits(): void {
    this.unitInfoService.getUnitInfo().then(units => this.units = units);
  }
  ngOnInit(): void {
    this.getUnits();
  }
}

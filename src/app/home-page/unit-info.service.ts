import {Injectable} from '@angular/core';

import {Unit} from './unit-detail';
import {unitInfo} from './unit-info';

@Injectable()
export class UnitInfoService {
  getUnitInfo(): Promise<Unit[]> {
    return Promise.resolve(unitInfo);
  }
}


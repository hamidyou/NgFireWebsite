import { Component } from '@angular/core';

import { RegisteredUser } from '../registered-user';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent {
  schools = ['CFEVS'];

  programs = ['AP Music Theory', '7th Grade Choir', '8th Grade Choir', 'Womens Choir', 'Mixed Choir', '7th Grade Orchestra', '8th Grade Orchestra', 'HS Orchestra', '7th Grade Band', '8th Grade Band', 'HS Band'];

  gradYears = [2018, 2019, 2020, 2021, 2022, 2023];
}

import { Component, OnInit } from '@angular/core';
import { Patient } from '../../models/Patient';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
})
export class MainPageComponent implements OnInit {
  patients: Array<Patient>;

  constructor() {
    this.patients = [
      {
        id: 1,
        firstName: 'Garfield',
        lastName: "O'Keefe",
        dateOfBirth: '2021-03-26T18:42:44.156Z',
        gender: 'M',
        socialNumber: 1940245786123,
        phoneNumber: '743.655.4845',
      },
      {
        id: 2,
        firstName: 'Waldo',
        lastName: 'Prohaska',
        dateOfBirth: '2020-07-10T20:45:21.591Z',
        gender: 'M',
        socialNumber: 1920245786913,
        phoneNumber: '(518) 073-3113',
      },
      {
        id: 3,
        firstName: 'Merritt',
        lastName: 'Pollich',
        dateOfBirth: '2020-12-05T19:27:19.184Z',
        gender: 'F',
        socialNumber: 1960245756923,
        phoneNumber: '(636) 275-1224',
      },
      {
        id: 4,
        firstName: 'Mariam',
        lastName: 'Reinger',
        dateOfBirth: '2020-04-29T15:28:27.613Z',
        gender: 'F',
        socialNumber: 1910245686923,
        phoneNumber: '730-120-8788',
      },
    ];
  }

  ngOnInit(): void {}

  add() {
    console.log('add new patient');
  }

  remove() {
    console.log('patient removed from table');
  }

  update() {
    console.log('patient updated');
  }
}

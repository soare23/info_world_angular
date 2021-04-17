import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  SimpleChanges,
} from '@angular/core';

import { Patient } from 'src/app/models/Patient';

@Component({
  selector: 'app-add-or-update',
  templateUrl: './add-or-update.component.html',
  styleUrls: ['./add-or-update.component.css'],
})
export class AddOrUpdateComponent implements OnInit, OnChanges {
  @Input() patientToBeUpdated: Patient;
  @Input() showUpdateModal: boolean;
  @Output() closeModal = new EventEmitter();

  addOrUpdateToggle: boolean = false;
  maxDate: String;

  firstName: string;
  lastName: string;
  dateOfBirth: String;
  gender: string;
  socialNumber: number;
  phoneNumber: string;

  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.patientToBeUpdated && this.patientToBeUpdated != undefined) {
      this.firstName = this.patientToBeUpdated.firstName;
      this.lastName = this.patientToBeUpdated.lastName;
      this.dateOfBirth = this.patientToBeUpdated.dateOfBirth;
      this.gender = this.patientToBeUpdated.gender;
      this.socialNumber = this.patientToBeUpdated.socialNumber;
      this.phoneNumber = this.patientToBeUpdated.phoneNumber;
    }
  }

  ngOnInit(): void {
    console.log(this.patientToBeUpdated);

    // get current date for max input date selector

    this.maxDate = new Date().toISOString().split('T')[0];

    // check if update or add

    if (this.patientToBeUpdated === undefined) {
      console.log('patient undefined');
      this.addOrUpdateToggle = true;
    }
  }

  hideModal() {
    this.closeModal.emit('modal closed');
  }

  handleSubmit() {
    console.log(this.firstName);
    console.log(this.lastName);
    console.log(this.dateOfBirth);
    console.log(this.socialNumber);
    console.log(this.phoneNumber);
    console.log('form submited');
  }
}

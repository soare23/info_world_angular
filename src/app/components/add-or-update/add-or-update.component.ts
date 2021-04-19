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
import { PatientService } from '../../services/patient.service';

@Component({
  selector: 'app-add-or-update',
  templateUrl: './add-or-update.component.html',
  styleUrls: ['./add-or-update.component.css'],
})
export class AddOrUpdateComponent implements OnInit, OnChanges {
  @Input() patientToBeUpdated: Patient;
  @Input() showUpdateModal: boolean;
  @Output() closeModal = new EventEmitter();
  @Output() updatedPatientToSend = new EventEmitter<Patient>();
  @Output() newPatientToSend = new EventEmitter<Patient>();

  addOrUpdateToggle: boolean = false;
  maxDate: String;

  id: number;
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  gender: string;
  socialNumber: number;
  phoneNumber: string;

  updatedPatient: Patient;
  newPatient: Patient;

  constructor(private patientService: PatientService) {}

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
    if (this.patientToBeUpdated !== undefined) {
      // create updated patient and send to DB
      this.updatedPatient = {
        id: this.patientToBeUpdated.id,
        firstName: this.firstName,
        lastName: this.lastName,
        dateOfBirth: this.dateOfBirth,
        gender: this.gender,
        socialNumber: this.socialNumber,
        phoneNumber: this.phoneNumber,
      };

      // close modal and send patient to DB
      this.updatedPatientToSend.emit(this.updatedPatient);
      this.closeModal.emit('modal closed');
    } else {
      //create new patient and send to DB
      this.newPatient = {
        id: null,
        firstName: this.firstName,
        lastName: this.lastName,
        dateOfBirth: this.dateOfBirth,
        gender: this.gender,
        socialNumber: this.socialNumber,
        phoneNumber: this.phoneNumber,
      };

      // close modal and send patient to DB
      this.newPatientToSend.emit(this.newPatient);
      this.closeModal.emit('modal closed');
    }
  }
}

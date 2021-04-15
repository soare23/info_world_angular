import { Component, OnInit } from '@angular/core';
import { PatientService } from '../../services/patient.service';
import { Patient } from '../../models/Patient';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
})
export class MainPageComponent implements OnInit {
  patients: Array<Patient>;
  showUpdateModal: boolean;
  patientToBeUpdated: Patient;

  constructor(private patientService: PatientService) {}

  ngOnInit(): void {
    this.patientService.getPatients().subscribe((patients) => {
      this.patients = patients;
    });
  }

  handleModal() {
    this.showUpdateModal = !this.showUpdateModal;
  }

  add() {
    console.log('add new patient');
  }

  remove(patient: Patient) {
    console.log(`patient with id ${patient.id} has been removed`);
  }

  openUpdateModal(patient: Patient) {
    this.handleModal();
    this.patientToBeUpdated = patient;
  }
}

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
  loadingData: boolean = true;

  constructor(private patientService: PatientService) {}

  ngOnInit(): void {
    this.patientService.getPatients().subscribe((patients) => {
      this.patients = patients;
      setTimeout(() => {
        this.loadingData = false;
      }, 2000);
    });
  }

  handleModal($event: any) {
    this.showUpdateModal = !this.showUpdateModal;
  }

  add() {
    this.showUpdateModal = !this.showUpdateModal;
    this.patientToBeUpdated = undefined;
    console.log('add new patient');
  }

  remove(patient: Patient) {
    console.log(`patient with id ${patient.id} has been removed`);
  }

  openUpdateModal(patient: Patient) {
    this.showUpdateModal = !this.showUpdateModal;
    this.patientToBeUpdated = { ...patient };
    // Object.assign(this.patientToBeUpdated, patient);
  }
}

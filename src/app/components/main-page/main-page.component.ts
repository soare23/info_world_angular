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
  showRemoveConfirmModal: boolean;
  patientToBeUpdated: Patient;
  idOfPatientToBeRemoved: number;
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

  openUpdateModal(patient: Patient) {
    this.showUpdateModal = !this.showUpdateModal;
    this.patientToBeUpdated = { ...patient };
    // Object.assign(this.patientToBeUpdated, patient);
  }

  handleAddOrUpdateModal($event: any) {
    this.showUpdateModal = !this.showUpdateModal;
  }

  showAddNewPatientModal() {
    this.showUpdateModal = !this.showUpdateModal;
    this.patientToBeUpdated = undefined;
  }

  openRemoveModal(patient: Patient) {
    this.showRemoveConfirmModal = !this.showRemoveConfirmModal;
    this.idOfPatientToBeRemoved = patient.id;
  }

  closeRemoveConfirmModal($event: any) {
    this.showRemoveConfirmModal = !this.showRemoveConfirmModal;
  }

  //remove patient from UI

  removePatientFromUI(patientId: number) {
    this.patients = this.patients.filter((patient) => patient.id !== patientId);
  }

  // add new patient to DB and UI
  addNewPatientToDBandUI(patient: Patient) {
    this.patientService.addPatient(patient).subscribe((patient) => {
      this.patients.push(patient);
    });
  }

  // update patient in DB and UI
  updatePatientInDBandUI(patient: Patient) {
    this.patientService.updatePatient(patient).subscribe((patient) => {
      let patientIndex = this.patients.findIndex(
        (findPatient) => findPatient.id === patient.id
      );
      this.patients[patientIndex] = patient;
    });
  }
}

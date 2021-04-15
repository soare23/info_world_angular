import { Injectable } from '@angular/core';
import { Patient } from '../models/Patient';

@Injectable({
  providedIn: 'root',
})
export class PatientService {
  // list of patients
  patients: Patient[];

  constructor() {}

  // Get all patients

  getPatients() {
    return this.patients;
  }

  // Get one specific patient

  getPatient(id: number) {
    this.patients.forEach((patient) => {
      if (patient.id === id) {
        return patient;
      }
    });
  }

  // Add new patient

  addPatient(patient: Patient) {
    const patientToAdd = { ...patient };
    patientToAdd.id = this.patients.length + 1;
    this.patients.push(patientToAdd);
  }

  //Remove patient

  removePatient(id: number) {
    this.patients.forEach((patient, index) => {
      if (patient.id === id) {
        this.patients.splice(index, 1);
      }
    });
  }

  //Edit existing patient

  editPatient(newPatientData: Patient) {
    this.patients.forEach((patient) => {
      if (patient.id === newPatientData.id) {
        patient.firstName = newPatientData.firstName
          ? newPatientData.firstName
          : patient.firstName;
        patient.lastName = newPatientData.lastName
          ? newPatientData.lastName
          : patient.lastName;
        patient.dateOfBirth = newPatientData.dateOfBirth
          ? newPatientData.dateOfBirth
          : patient.dateOfBirth;
        patient.sex = newPatientData.sex ? newPatientData.sex : patient.sex;
        patient.phoneNumber = newPatientData.phoneNumber
          ? newPatientData.phoneNumber
          : patient.phoneNumber;
        patient.socialNumber = newPatientData.socialNumber
          ? newPatientData.socialNumber
          : patient.socialNumber;
      }
    });
  }
}

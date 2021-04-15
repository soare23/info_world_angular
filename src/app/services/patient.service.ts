import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Patient } from '../models/Patient';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class PatientService {
  constructor(private http: HttpClient) {}

  // Get all patients
  getPatients(): Observable<Patient[]> {
    return this.http.get<Patient[]>(
      'https://6076f8471ed0ae0017d6a309.mockapi.io/patients'
    );
  }

  // Add new patient

  // Update patient
  updatePatient(patient: Patient) {
    return this.http.put(
      `https://6076f8471ed0ae0017d6a309.mockapi.io/patients/${patient.id}`,
      patient,
      httpOptions
    );
  }

  // Remove patient
}

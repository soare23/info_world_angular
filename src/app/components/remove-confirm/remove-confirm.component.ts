import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Component, Input, OnInit } from '@angular/core';
import { PatientService } from '../../services/patient.service';

@Component({
  selector: 'app-remove-confirm',
  templateUrl: './remove-confirm.component.html',
  styleUrls: ['./remove-confirm.component.css'],
})
export class RemoveConfirmComponent implements OnInit {
  @Input() idOfPatientToBeRemoved: number;
  @Output() closeModal = new EventEmitter();
  @Output() patientRemovedFromDB = new EventEmitter<number>();
  confirmPatientRemove: boolean = true;
  constructor(private patientService: PatientService) {}

  ngOnInit(): void {}

  confirmed() {
    this.closeModal.emit('close remove confirm modal');

    // remove patient from DB
    this.patientService
      .removePatient(this.idOfPatientToBeRemoved)
      .subscribe((patient) => {
        this.patientRemovedFromDB.emit(this.idOfPatientToBeRemoved);
        console.log(`patient with ${this.idOfPatientToBeRemoved} was removed`);
      });
  }

  denied() {
    this.closeModal.emit('close remove confirm modal');
    console.log('remove patient denied');
  }
}

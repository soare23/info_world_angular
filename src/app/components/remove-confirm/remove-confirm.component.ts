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
    // remove patient from DB
    this.patientService
      .removePatient(this.idOfPatientToBeRemoved)
      .subscribe((patient) => {
        // remove patient from UI
        this.patientRemovedFromDB.emit(this.idOfPatientToBeRemoved);
        this.closeModal.emit('close remove confirm modal');
      });
  }

  denied() {
    this.closeModal.emit('close remove confirm modal');
  }
}

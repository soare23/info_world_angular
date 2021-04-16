import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Patient } from 'src/app/models/Patient';

@Component({
  selector: 'app-add-or-update',
  templateUrl: './add-or-update.component.html',
  styleUrls: ['./add-or-update.component.css'],
})
export class AddOrUpdateComponent implements OnInit {
  @Input() patientToBeUpdated: Patient;
  @Input() showUpdateModal: boolean;
  @Output() closeModal = new EventEmitter();

  addOrUpdateToggle: boolean = false;

  firstName: string;
  lastName: string;

  constructor() {}

  ngOnInit(): void {
    console.log(this.patientToBeUpdated);

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
    console.log('form submited');
  }
}

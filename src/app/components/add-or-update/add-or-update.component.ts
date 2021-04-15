import { Component, OnInit, Input } from '@angular/core';
import { Patient } from 'src/app/models/Patient';

@Component({
  selector: 'app-add-or-update',
  templateUrl: './add-or-update.component.html',
  styleUrls: ['./add-or-update.component.css'],
})
export class AddOrUpdateComponent implements OnInit {
  @Input() patientToBeUpdated: Patient;
  @Input() showUpdateModal: boolean;

  firstName: string;
  lastName: string;

  constructor() {}

  ngOnInit(): void {}

  hideModal() {
    this.showUpdateModal = !this.showUpdateModal;
    console.log('I AM NOT DOING MY JOB PROPERLY');
  }

  handleSubmit() {
    console.log('form submited');
  }
}

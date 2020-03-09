import { PatientService } from './../../services/patient/patient.service';
import { Patient } from './../../models/patient/patient.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-patient-create',
  templateUrl: './patient-create.component.html',
  styleUrls: ['./patient-create.component.css']
})
export class PatientCreateComponent implements OnInit {

  patient: Patient;

  constructor(private patientService: PatientService) { }

  ngOnInit(): void {
    this.clear();
  }

  createPatient() {
    console.log('Creating new Patient');

    this.patientService.createPatient(this.patient).subscribe(  () => {
      alert('Patient created.');
      this.clear();
    }, error => {
      console.error(error);
    } );
  }

  clear() {
    this.patient = {id: null, firstName: '', middleName: '', lastName: '', email: ''};
  }
}

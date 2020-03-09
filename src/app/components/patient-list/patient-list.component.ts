import { Patient } from './../../models/patient/patient.model';
import { PatientService } from './../../services/patient/patient.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.css']
})
export class PatientListComponent implements OnInit {

  patients: Patient[];

  constructor(private service: PatientService) {}

  ngOnInit(): void {
    this.loadPatients();
  }

  loadPatients() {
    this.service.getPatients().subscribe(  (data: Patient[]) => {
      this.patients = data;
      console.log(`Patients loaded. count=${this.patients.length}`);
    }, error => {
      console.error(error);
    } );
  }
}

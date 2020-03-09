import { environment } from './../../../environments/environment.prod';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Patient } from 'src/app/models/patient/patient.model';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  constructor(private http: HttpClient) { }

  public getPatients(): Observable<any> {
    return this.http.get( `${environment.patientServiceUrl}/patients`);
  }

  public createPatient(patient: Patient) {
    return this.http.post<Patient>(`${environment.patientServiceUrl}/patients`, patient);
  }
}

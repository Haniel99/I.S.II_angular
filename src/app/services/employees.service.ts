import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  constructor(
    private http: HttpClient
  ) { }
  getEmployees(): Observable<any> {
    return  this.http.get("http://localhost:3100/api/v1/employees/view/2");
  }

}
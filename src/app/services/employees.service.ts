import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

export interface Employee {
  id?: number;
  nombre: string;
  apellido: string;
  departamento_id: number;
  salario: number;
  rol_id: number;
  ubicacion: string;
  telefono: string;
}

@Injectable({
  providedIn: 'root',
})
export class EmployeesService {
  private url: String = 'http://localhost:3100/api/v1/employees';

  constructor(private http: HttpClient) {}

  indexEmployees() {
    return this.http
      .post(`${this.url}/index`, {})
      .pipe(map((data: any) => data['response']));
  }
  viewEmployee(id: number) {
    return this.http
      .get(`${this.url}/view/${id}`)
      .pipe(map((data: any) => data['response']));
  }
  indexLazyEmployees(body: any) {
    return this.http
      .post(`${this.url}/index`, body)
      .pipe(map((data: any) => data['response']));
  }
  createEmployee(employee: Employee) {
    return this.http.post(`${this.url}/create`, employee);
  }

  deleteEmployee(id: number) {
    return this.http.delete(`${this.url}/delete/${id}`);
  }
  updateEmployee(data:any, id:number){
    return this.http.put(`${this.url}/update/${id}`, data);
  }
}

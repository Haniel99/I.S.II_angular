import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

export interface Employee {
  id?: number;
  nombre: string;
  apellido: string;
  puesto: string;
  salario: number;
  departamento_id: number;
  ubicacion: string;
  telefono: string;
}

@Injectable({
  providedIn: 'root'
})

export class EmployeesService {

  private url: String = 'http://localhost:3100/api/v1/employees';

  constructor(private http: HttpClient) {

  }

  indexEmployees(){

    return this.http.get(`${this.url}/index`)
            .pipe(
              map( (data: any) => data['response'] )
            )

  }

  createEmployee(employee: Employee) {
      
    return this.http.post(`${this.url}/create`, employee);

  }

  deleteEmployee(id: number) {

    return this.http.delete(`${this.url}/delete/${id}`);

  }


}
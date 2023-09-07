import { Component, OnInit } from '@angular/core';
import { EmployeesService, Employee } from '../../services/employees.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  newEmployee: Employee;

  constructor(private employeesService: EmployeesService) {
    this.newEmployee = {
      id: 0,
      nombre: '',
      puesto: '',
      salario: 0,
      departamento: '',
      ubicacion: '',
      telefono: ''
    };
  }

  ngOnInit(): void {}

  addEmployee() {
    this.newEmployee.id++;

    this.employeesService.createEmployee(this.newEmployee);
    
    this.newEmployee = {
      id: this.newEmployee.id,
      nombre: '',
      puesto: '',
      salario: 0,
      departamento: '',
      ubicacion: '',
      telefono: ''
    };
  }
}


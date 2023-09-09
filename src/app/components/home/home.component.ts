import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { toggle } from '../components.actions';
import { Employee, EmployeesService } from '../../services/employees.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  employees?: any;

  constructor(private employeesService: EmployeesService) {}

  ngOnInit() {
    this.getEmployees();
  }

  getEmployees() {
    this.employeesService.indexEmployees().subscribe((data) => {
      this.employees = data;
    });
  }

  deleteEmployee(id: number, i: number) {
    return this.employeesService.deleteEmployee(id).subscribe(() => {
      console.log('eliminado');
      this.employees.splice(i, 1);
    });
  }
}

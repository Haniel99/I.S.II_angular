import { Component } from '@angular/core';
import {EmployeesService} from '../../services/employees.service';
import { NgFor } from '@angular/common';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent {
emp?: any;
constructor (private employeesService: EmployeesService) {
  this.emp = this.employeesService.getEmployees();
}
}

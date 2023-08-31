import { Component } from '@angular/core';
import {EmployeesService} from '../../services/employees.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})

export class CreateComponent {
  emp?: any;
  constructor (private employeesService: EmployeesService) {
    this.emp = this.employeesService.getEmployees();
  }
}

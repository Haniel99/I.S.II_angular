import { Component, Input, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { toggle, add } from '../components.actions';
import {   EmployeesService } from "../../services/employees.service";
@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})

export class DeleteComponent {
  toggle?:boolean;
  add?: boolean;
  @Input()  employeeId: number = -1;
  @Input() employees?: any;  
  constructor(
    private service: EmployeesService,
    private store: Store<{toggle: boolean, add: boolean}> ){
    this.store.select('toggle').subscribe(state=>{
      this.toggle = state;
    });
  }
  
  deleteEmployee(){
    this.service.deleteEmployee(this.employeeId).subscribe(res=>{
      this.store.dispatch(toggle());
      this.store.dispatch(add());
    });
  }

  click() {
    this.store.dispatch(toggle());
  }

}

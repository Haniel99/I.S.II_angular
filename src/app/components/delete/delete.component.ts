import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { toggle } from '../components.actions';
import {  EmployeesService } from "../../services/employees.service";
@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})

export class DeleteComponent {
  toggle?:boolean;
  @Input()  employeeId: number = -1;
  constructor(
    private service: EmployeesService,
    private store: Store<{toggle: boolean}> ){
    this.store.select('toggle').subscribe(state=>{
      this.toggle = state;
    })
  }

  deleteEmployee(){
    this.service.deleteEmployee(this.employeeId).subscribe(res=>{
      console.log(res);
      this.store.dispatch(toggle());
    });
  }

  click() {
    this.store.dispatch(toggle());
  }

}

import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { toggle, toggleForm } from '../components.actions';
import { Employee, EmployeesService } from '../../services/employees.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  employees?: any;
  toggle?: boolean; 
  toggleF?: boolean;
  employeeId: number=-1;

  constructor(
    private employeesService: EmployeesService,
    private store: Store<{toggle: boolean, toggleForm: boolean}>
    ) {
      this.store.select('toggle').subscribe(state=>{
        this.toggle = state;
      })
      this.store.select('toggleForm').subscribe(state=>{ 
        this.toggleF = state;
       });
    }
    toggleForms(){
      console.log("cambia");
      this.store.dispatch(toggleForm());
    }
    click(e: any){
      console.log(e);
      this.employeeId=e;
      this.store.dispatch(toggle());
    }
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

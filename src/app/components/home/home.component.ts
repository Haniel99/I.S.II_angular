import { Component } from '@angular/core';
import { EmployeesService } from 'src/app/services/employees.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor( 
    private empService: EmployeesService
   ){}

  getServerData(){
    this.empService.getEmployees().subscribe(res=>{
      console.log(res);
    })
  } 
}

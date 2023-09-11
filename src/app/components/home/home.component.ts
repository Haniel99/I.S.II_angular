import { Component, OnInit, AfterViewInit, DoCheck } from '@angular/core';
import { Store } from '@ngrx/store';
import { toggle, toggleForm, add } from '../components.actions';
import { EmployeesService } from '../../services/employees.service';
import { faFilter } from '@fortawesome/free-solid-svg-icons';

interface IFiltros {
  order_by?: string; //"nombre"
  type_order: boolean; //true or false
  condition?: {
    departamento_id?: number; // department id
  };
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit, AfterViewInit, DoCheck {
  dataFromDirective?: any;
  employees?: any;
  toggle?: boolean;
  toggleF?: boolean;
  employeeId: number = -1;
  add?: boolean = false;
  filtros: IFiltros = {
    type_order: false, //true or false
    condition: {},
  };
  filter: any = faFilter;
  constructor(
    private employeesService: EmployeesService,
    private store: Store<{ toggle: boolean; toggleForm: boolean; add: boolean }>,
  ) {
    this.store.select('toggle').subscribe((state) => {
      this.toggle = state;
    });
    this.store.select('toggleForm').subscribe((state) => {
      this.toggleF = state;
    });
    this.store.select('add').subscribe((state) => {
      this.add = state;
    });
    
  }
  ngAfterViewInit() {}

  ngDoCheck() {
    if (this.add) {
      this.getEmployees();
      this.store.dispatch(add());
    }
  }
  toggleForms() {
    this.store.dispatch(toggleForm());
  }
  click(id: any) {
    this.employeeId = id;
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

  selectDepartment(e: any) {
    if (e.target.value != 'Todos') {
      this.filtros = {
        ...this.filtros,
        condition: {
          departamento_id: parseInt(e.target.value),
        },
      };
    }
  }
  selectOrderType(e: any) {
    if (e.target.value !== 'Ninguno') {
      this.filtros = {
        ...this.filtros,
        order_by: e.target.value,
      };
    }
  }

  applyFilter() {
    this.employeesService.indexLazyEmployees(this.filtros).subscribe((data) => {
      this.employees = data;
    });
  }
  setDataFromDirective(data: any){
    this.dataFromDirective = data;
  }
  selectEmployee(data: any){
    this.employees = [data];
    this.dataFromDirective = [];
  }
}

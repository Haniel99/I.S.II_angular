import { Component, Input, OnInit } from '@angular/core';
import { EmployeesService, Employee } from '../../services/employees.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { add, toggleUpdate } from '../components.actions';
@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css'],
})
export class UpdateComponent implements OnInit {
  toggleF?: any;
  form: FormGroup;
  @Input() dataEmployee:number = -1;
  employees?:any;
  constructor(
    private store: Store<{ toggleUpdate: boolean }>,
    private employeesService: EmployeesService,
    private formBuilder: FormBuilder
  ) {
    this.form = this.formBuilder.group({
      id: [null],
      nombre: [null, Validators.required],
      apellido: [null, Validators.required],
      departamento_id: [null, Validators.required],
      salario: [null, Validators.required],
      rol_id: [null, Validators.required],
      ubicacion: [null, Validators.required],
      telefono: [null, Validators.required],
    });
    this.store.select('toggleUpdate').subscribe((state) => {
      this.toggleF = state;
    });
    
  }
  ngOnInit(){
    this.employeesService.viewEmployee(this.dataEmployee).subscribe(res=>{
      this.employees = res;    
    });
  }
  volver() {
    this.store.dispatch(toggleUpdate());
  }
  updateEmployee() {
    const employee: Employee = {
      nombre: this.form.value.nombre?this.form.value.nombre:this.employees.nombre,
      apellido: this.form.value.apellido?this.form.value.apellido:this.employees.apellido,
      departamento_id: this.form.value.departamento_id?parseInt(this.form.value.departamento_id):this.employees.departamento_id,
      salario: this.form.value.salario?this.form.value.salario:this.employees.salario,
      rol_id: this.form.value.rol_id?parseInt(this.form.value.rol_id):this.employees.rol_id,
      ubicacion: this.form.value.ubicacion?this.form.value.ubicacion:this.employees.ubicacion,
      telefono: this.form.value.telefono?this.form.value.telefono:this.employees.telefono,
    };
    this.employeesService.updateEmployee(employee, this.dataEmployee).subscribe((res) => {
      this.store.dispatch(add());
    });
    this.store.dispatch(toggleUpdate());

  }
}

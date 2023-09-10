import { Component } from '@angular/core';
import { EmployeesService, Employee } from '../../services/employees.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import {  toggleForm, add } from '../components.actions';
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {
  toggleF?: boolean;
  form: FormGroup;

  constructor(
    private store: Store<{ toggleForm: boolean }>,
    private employeesService: EmployeesService, private formBuilder: FormBuilder, private router: Router) {
      this.form = this.formBuilder.group({
        nombre: ['', Validators.required],
        apellido: ['', Validators.required],
        departamento_id: [null, Validators.required],
        salario: [null, Validators.required],
        rol_id: [null, Validators.required],
        ubicacion: ['', Validators.required],
        telefono: ['', Validators.required],
      })

      this.store.select('toggleForm').subscribe(state => {
        this.toggleF=state;
      })
  }
  volver(){
    this.store.dispatch(toggleForm());
  }
  createEmployee(){    
    const employee: Employee = {
      nombre: this.form.value.nombre,
      apellido: this.form.value.apellido,
      departamento_id: parseInt(this.form.value.departamento_id),
      salario: this.form.value.salario,
      rol_id: parseInt(this.form.value.rol_id),
      ubicacion: this.form.value.ubicacion,
      telefono: this.form.value.telefono
    }
    this.employeesService.createEmployee(employee).subscribe(res=>{
      this.store.dispatch(add());
    });
    this.store.dispatch(toggleForm());
  }

}


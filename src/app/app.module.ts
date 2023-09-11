import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import {  StoreModule } from "@ngrx/store";
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { CreateComponent } from './components/create/create.component';
import { UpdateComponent } from './components/update/update.component';
import { DeleteComponent } from './components/delete/delete.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EmployeesService } from './services/employees.service';
import { counterReducer } from './components/component.reducer';
import { toggleFormState } from "./components/componet.form";
import { ModalComponent } from './components/modal/modal.component';
import { addEmployee } from './components/compoenet.add';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SearchEmployeeDirective } from './components/home/search-employee.directive';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CreateComponent,
    UpdateComponent,
    DeleteComponent,
    ModalComponent,
    SearchEmployeeDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    StoreModule.forRoot({ toggle: counterReducer, toggleForm: toggleFormState, add: addEmployee }),
    ReactiveFormsModule,
    FontAwesomeModule
    
  ],
  providers: [
    EmployeesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

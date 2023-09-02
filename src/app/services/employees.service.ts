import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  constructor() { }
  getEmployees() {
    return  [
      {
        "id": 1,
        "nombre": "Juan Pérez",
        "puesto": "Desarrollador de software",
        "salario": 60000,
        "departamento": "Tecnología",
        "ubicacion": "Ciudad A",
        "telefono": "123-456-7890"
      },
      {
        "id": 2,
        "nombre": "María Gómez",
        "puesto": "Diseñadora gráfica",
        "salario": 55000,
        "departamento": "Diseño",
        "ubicacion": "Ciudad B",
        "telefono": "987-654-3210"
      },
      {
        "id": 3,
        "nombre": "Carlos Rodríguez",
        "puesto": "Gerente de ventas",
        "salario": 75000,
        "departamento": "Ventas",
        "ubicacion": "Ciudad C",
        "telefono": "555-123-4567"
      },
      {
        "id": 4,
        "nombre": "Ana Martínez",
        "puesto": "Analista financiero",
        "salario": 62000,
        "departamento": "Finanzas",
        "ubicacion": "Ciudad A",
        "telefono": "222-333-4444"
      },
      {
        "id": 5,
        "nombre": "Luisa López",
        "puesto": "Ingeniera de calidad",
        "salario": 58000,
        "departamento": "Calidad",
        "ubicacion": "Ciudad B",
        "telefono": "666-777-8888"
      },
      {
        "id": 6,
        "nombre": "Miguel Torres",
        "puesto": "Especialista en marketing",
        "salario": 60000,
        "departamento": "Marketing",
        "ubicacion": "Ciudad C",
        "telefono": "999-888-7777"
      },
      {
        "id": 7,
        "nombre": "Sofía Ramírez",
        "puesto": "Recursos humanos",
        "salario": 54000,
        "departamento": "Recursos Humanos",
        "ubicacion": "Ciudad A",
        "telefono": "333-222-1111"
      },
      {
        "id": 8,
        "nombre": "Diego Herrera",
        "puesto": "Analista de datos",
        "salario": 67000,
        "departamento": "Tecnología",
        "ubicacion": "Ciudad B",
        "telefono": "777-555-4444"
      },
      {
        "id": 9,
        "nombre": "Laura Vargas",
        "puesto": "Especialista en ventas",
        "salario": 72000,
        "departamento": "Ventas",
        "ubicacion": "Ciudad C",
        "telefono": "888-999-6666"
      },
      {
        "id": 10,
        "nombre": "Javier Cruz",
        "puesto": "Consultor de negocios",
        "salario": 70000,
        "departamento": "Consultoría",
        "ubicacion": "Ciudad A",
        "telefono": "444-333-2222"
      }
    ]
  }

}
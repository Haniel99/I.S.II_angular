import {
  Directive,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  Output,
} from '@angular/core';
import { add } from '../components.actions';
import { Store } from '@ngrx/store';
@Directive({
  selector: '[appSearchEmployee]',
})
export class SearchEmployeeDirective {
  @Input() datos?: any;
  @Output() salida = new EventEmitter<string[]>();
  datosSaida?: any = [];
  constructor(private element: ElementRef,
    private store: Store<{ add: boolean }>) {}

  @HostListener('input', ['$event']) onEnterText(event: Event) {
    const valor = (event.target as HTMLInputElement).value;
    const employees = this.datos.filter((value: any) => {
      return (
        value.nombre.toLowerCase().startsWith(valor.toLowerCase()) ||
        value.apellido.toLowerCase().startsWith(valor.toLowerCase())
      );
    });
    if (valor !== '') {
      this.salida.emit(employees); //Emite arreglo de posibles canditados
    } else {
      this.salida.emit([]); //Emite arreglo de posibles canditados
      this.store.dispatch(add());
    }
  }
}

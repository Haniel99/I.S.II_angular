import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { toggle } from '../components.actions';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})

export class DeleteComponent {
  toggle?:boolean;
  constructor(private store: Store<{toggle: boolean}> ){
    this.store.select('toggle').subscribe(state=>{
      this.toggle = state;
    })
  }

  click() {
    this.store.dispatch(toggle());
  }

}

import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { toggle } from '../components.actions';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  toggle?: boolean;

  constructor(private store: Store<{ toggle: boolean }>) {
    this.store.select('toggle').subscribe(s=>{
      this.toggle = s;
    })
  }
  ngOnInit() {}
 
  click() {
    this.store.dispatch(toggle());
  }

  
}

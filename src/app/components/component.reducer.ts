import { createReducer, on } from '@ngrx/store';
import { toggle } from './components.actions';

export const initialState = false;

export const counterReducer = createReducer(
  initialState,
  on(toggle, (state) => !state),
   
);



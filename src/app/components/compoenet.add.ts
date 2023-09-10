import { createReducer, on } from '@ngrx/store';
import { add } from './components.actions';

export const initialState = false;

export const addEmployee = createReducer(
  initialState,
  on(add, (state) => !state)
);


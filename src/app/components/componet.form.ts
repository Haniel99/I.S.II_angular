import { createReducer, on } from '@ngrx/store';
import { toggleForm } from './components.actions';

export const initialState = false;

export const toggleFormState = createReducer(
  initialState,
  on(toggleForm, (state) => !state)
);



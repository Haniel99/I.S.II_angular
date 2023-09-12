import { createReducer, on } from '@ngrx/store';
import { toggleUpdate } from './components.actions';

export const initialState = false;

export const toggleUpdateState = createReducer(
  initialState,
  on(toggleUpdate, (state) => !state)
);


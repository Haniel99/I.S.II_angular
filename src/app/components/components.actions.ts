import { createAction } from '@ngrx/store';

export const increment = createAction('[Counter Component] Increment');
export const decrement = createAction('[Counter Component] Decrement');
export const reset = createAction('[Counter Component] Reset');
export const toggle = createAction('[Toggle Component] Toggle ');
export const toggleForm = createAction('[ToggleForm Component] ToggleForm');
export const add = createAction('[Add Component] Add');
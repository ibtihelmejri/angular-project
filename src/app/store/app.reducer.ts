

import * as fromAuth from '../auth/store/auth.reducer';
import { ActionReducerMap } from '@ngrx/store';

export interface AppState {
  auth: fromAuth.authState;
}

export const appReducer: ActionReducerMap<AppState, any> = {
  auth: fromAuth.authReducer
};



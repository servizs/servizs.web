import { State } from './layout.reducer';
import { AppState } from './../../../store/reducers/index';
import { LayoutActionTypes, LayoutActions } from '../actions/layout.actions';
import { createFeatureSelector } from '@ngrx/store';

export interface State {
  isLoading: boolean;
}

const initialState: State = {
  isLoading: false
};

export function reducer(
  state: State = initialState,
  action: LayoutActions
): State {
  switch (action.type) {
    case LayoutActionTypes.Loading:
      return {
        isLoading: true
      };

    case LayoutActionTypes.LoadingFailed:
      return {
        isLoading: false
      };

    case LayoutActionTypes.LoadingCompleted:
      return {
        isLoading: false
      };

    default:
      return state;
  }
}

export const getLoadingStatus = (state: State) =>
  createFeatureSelector<AppState, State>('layout');

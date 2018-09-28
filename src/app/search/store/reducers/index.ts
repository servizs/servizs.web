import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromRoot from '../../../store/reducers/index';
import * as fromSearch from '../reducers/search.reducer';

export interface ServicesState {
  search: fromSearch.State;
}

export interface State extends fromRoot.AppState {
  services: ServicesState;
}

export const reducers: ActionReducerMap<ServicesState> = {
  search: fromSearch.reducer
};

export const getServicesState = createFeatureSelector<State, ServicesState>('services');
export const getSearchState = createSelector(getServicesState, (state: ServicesState) => state.search.services);

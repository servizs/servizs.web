import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromRoot from '../../../store/reducers/index';
import * as fromTasker from '../reducer/tasker.reducer';

export interface TaskerState {
  tasker: fromTasker.State;
}

export interface State extends fromRoot.AppState {
  tasker: TaskerState;
}

export const reducers: ActionReducerMap<TaskerState> = {
  tasker: fromTasker.reducer
};

export const getTaskerState = createFeatureSelector<State, TaskerState>('tasker');
export const getTaskerDetails = createSelector(getTaskerState, (state: TaskerState) => state.tasker.taskerDetails);

import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromRoot from '../../../store/reducers/index';
import * as fromSchedule from '../reducer/schedule.reducer';
import * as fromTasker from '../reducer/tasker.reducer';

export interface TaskerState {
  tasker: fromTasker.State;
}

export interface ScheduleState {
  schedule: fromSchedule.State;
}

export interface State extends fromRoot.AppState {
  tasker: TaskerState;
  schedule: ScheduleState;
}

export const reducers: ActionReducerMap<TaskerState> = {
  tasker: fromTasker.reducer
};

export const scheduleReducers: ActionReducerMap<ScheduleState> = {
  schedule: fromSchedule.reducer
};

export const getTaskerState = createFeatureSelector<State, TaskerState>('tasker');
export const getTaskerDetails = createSelector(getTaskerState, (state: TaskerState) => state.tasker.taskerDetails);

export const getScheduleState = createFeatureSelector<State, ScheduleState>('schedule');
export const getRequestScheduleState = createSelector(
  getScheduleState,
  (state: ScheduleState) => state.schedule.requestedSchedule
);

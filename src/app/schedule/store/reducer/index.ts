import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromRoot from '../../../store/reducers/index';
import * as fromTasker from '../../../tasker/store/reducer/index';
import * as fromSchedule from '../reducer/schedule.reducer';

export interface ScheduleState {
  scheduleInfo: fromSchedule.State;
}

export interface State extends fromRoot.AppState {
  schedule: ScheduleState;
  // schedule: ScheduleState;
}

export const reducers: ActionReducerMap<ScheduleState> = {
  scheduleInfo: fromSchedule.reducer
};

export const getScheduleState = createFeatureSelector<State, ScheduleState>('schedule');
export const getScheduleDetails = createSelector(getScheduleState, (state: ScheduleState) => state.scheduleInfo);

export const getTaskerDetails = createSelector(
  fromTasker.getTaskerState,
  (state: fromTasker.TaskerState) => state.tasker.taskerDetails
);
/*
export const getScheduleState = createFeatureSelector<State, ScheduleState>('schedule');
export const getRequestScheduleState = createSelector(
  getScheduleState,
  (state: ScheduleState) => state.schedule.requestedSchedule
);*/

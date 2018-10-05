import * as fromScheduleActions from '../actions/schedule.actions';
import { ScheduleInfo } from './../../model/schedule.model';

export interface State {
  requestedSchedule: ScheduleInfo;
  error: string;
}

const initialState: State = {
  requestedSchedule: <any>{},
  error: ''
};

export function reducer(state = initialState, action: fromScheduleActions.ScheduleActions): State {
  switch (action.type) {
    case fromScheduleActions.ScheduleActionTyes.ScheduleAService: {
      const scheduleInfo = action.scheduleInfo;

      return {
        ...state,
        error: null,
        requestedSchedule: scheduleInfo
      };
    }

    default: {
      return state;
    }
  }
}

export const getRequestedSchedule = (state: State) => state.requestedSchedule;

import * as fromScheduleActions from '../actions/tasker.actions';
import { BookTasker } from './../../model/tasker.model';

export interface State {
  schedule: BookTasker;
  error: string;
}

const initialState: State = {
  schedule: <any>{},
  error: ''
};

export function reducer(state = initialState, action: fromScheduleActions.ScheduleActions): State {
  switch (action.type) {
    case fromScheduleActions.ScheduleActionTyes.ScheduleAService: {
      const bookTasker = action.bookTasker;

      return {
        ...state,
        error: null,
        schedule: bookTasker
      };
    }

    default: {
      return state;
    }
  }
}

export const getRequestedSchedule = (state: State) => state.schedule;

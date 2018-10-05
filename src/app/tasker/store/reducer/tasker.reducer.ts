import { Tasker } from '../../model/tasker.model';
import * as fromTaskerActions from '../actions/tasker.actions';

export interface State {
  taskerDetails: Tasker;
  error: string;
  selectedTasker: string;
}

const initialState: State = {
  taskerDetails: <any>{},
  error: '',
  selectedTasker: ''
};

export function reducer(state = initialState, action: fromTaskerActions.TaskerActions): State {
  switch (action.type) {
    case fromTaskerActions.TaskerActionsTypes.ViewTaskerDetailsCompleted: {
      const taskerDetails = action.tasker;

      return {
        ...state,
        error: null,
        taskerDetails: taskerDetails
      };
    }

    case fromTaskerActions.TaskerActionsTypes.ViewTaskerDetailsFailed: {
      return {
        error: action.error,
        taskerDetails: null,
        selectedTasker: ''
      };
    }

    case fromTaskerActions.TaskerActionsTypes.SelectTasker: {
      return {
        ...state,
        selectedTasker: action.userId
      };
    }

    default: {
      return state;
    }
  }
}

export const getTaskerDetails = (state: State) => state.taskerDetails;

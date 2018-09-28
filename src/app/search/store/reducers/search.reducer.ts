import { Service, SearchError, ServiceFilter } from './../../models/service.model';
import { ServiceActions, ServicesActionsTypes } from '../actions/services.actions';

export interface State {
  serviceFilter: ServiceFilter;
  services: Service[];
  error: SearchError | null;
}

const initialState: State = {
  serviceFilter: {},
  services: [],
  error: {
    errorMessage: ''
  }
};

export function reducer(state = initialState, action: ServiceActions): State {
  switch (action.type) {
    case ServicesActionsTypes.Search: {
      const serviceFilter = action.payload;
      if (serviceFilter.query === '') {
        return {
          serviceFilter,
          services: [],
          error: null
        };
      }

      return {
        ...state,
        error: null,
        serviceFilter: serviceFilter
      };
    }

    case ServicesActionsTypes.SearchCompleted: {
      return {
        services: action.payload,
        error: null,
        serviceFilter: state.serviceFilter
      };
    }

    case ServicesActionsTypes.SearchFailed: {
      return {
        ...state,
        services: [],
        error: action.payload
      };
    }

    default: {
      return state;
    }
  }
}

export const getServices = (state: State) => state.services;

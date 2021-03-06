import { Service, SearchError, ServiceFilter } from './../../models/service.model';
import { ServiceActions, ServicesActionsTypes } from '../actions/services.actions';

export interface State {
  serviceFilter: ServiceFilter;
  services: Service[];
  error: SearchError | null;
  location: string;
}

const initialState: State = {
  serviceFilter: {},
  services: [],
  error: {
    errorMessage: ''
  },
  location: ''
};

export function reducer(state = initialState, action: ServiceActions): State {
  switch (action.type) {
    case ServicesActionsTypes.Search: {
      const serviceFilter = action.payload;
      if (serviceFilter.query === '') {
        return {
          serviceFilter,
          services: [],
          error: null,
          location: ''
        };
      }

      return {
        ...state,
        error: null,
        serviceFilter: serviceFilter,
        location: state.location
      };
    }

    case ServicesActionsTypes.SearchCompleted: {
      return {
        services: action.payload,
        error: null,
        serviceFilter: state.serviceFilter,
        location: state.location
      };
    }

    case ServicesActionsTypes.SearchFailed: {
      return {
        ...state,
        services: [],
        error: action.payload,
        location: state.location
      };
    }

    case ServicesActionsTypes.GetUserLocationCompleted: {
      return {
        ...state,
        services: [],
        error: null,
        location: action.payload
      };
    }

    case ServicesActionsTypes.GetUserLocationFailed: {
      return {
        ...state,
        services: [],
        error: action.payload,
        location: ''
      };
    }

    default: {
      return state;
    }
  }
}

export const getServices = (state: State) => state.services;

export const getLocation = (state: State) => state.location;

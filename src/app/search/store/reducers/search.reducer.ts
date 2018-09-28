import { ServiceActions, ServicesActionsTypes } from '../actions/services.actions';

export interface State {
  searchText: string;
  services: Service[];
  error: SearchError | null;
}

export interface Service {
  taskrId: string;
  taskrName: String;
  servicesOffered: Array<string>;
  rating: number;
  reviews: Array<string>;
}

export interface SearchError {
  errorMessage: string;
}

const initialState: State = {
  searchText: '',
  services: [],
  error: {
    errorMessage: ''
  }
};

export function reducer(state = initialState, action: ServiceActions): State {
  switch (action.type) {
    case ServicesActionsTypes.Search: {
      const searchText = action.payload;
      if (searchText === '') {
        return {
          searchText,
          services: [],
          error: null
        };
      }

      return {
        ...state,
        error: null,
        searchText: state.searchText
      };
    }

    case ServicesActionsTypes.SearchCompleted: {
      return {
        services: action.payload,
        error: null,
        searchText: state.searchText
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

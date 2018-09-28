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

export interface ServiceFilter {
  query?: string;
  startDate?: string;
  endDate?: string;
  city?: string;
  country?: string;
  postalCode?: string;
}

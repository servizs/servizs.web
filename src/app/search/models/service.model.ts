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

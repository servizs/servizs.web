export interface Service {
  userId: string;
  taskerName: String;
  servicesOffered: Array<string>;
  rating: number;
  reviews: Array<Review>;
  badge: string;
  picture: string;
  profileSummary: string;
  Location: string;
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

export interface Review {
  reviewerPicture: string;
  rating: number;
  comment: string;
}

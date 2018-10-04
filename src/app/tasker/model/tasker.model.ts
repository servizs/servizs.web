export interface Tasker {
  userId: string;
  firstName: string;
  lastName: string;
  location: string;
  services: string[];
  reviews: Review[];
  rating: number;
  badge: string;
  picture: string;
}

export interface Review {
  reviewerPicture: string;
  rating: number;
  comment: string;
}

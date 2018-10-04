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

export interface BookTasker {
  tasker: Tasker;
  noOfHours: number;
  totalCost: number;
  scheduledDate: string;
  startTime: string;
  endTime: string;
  unitNo: string;
  streetNumber: string;
  streetName: string;
  city: number;
  province: string;
  country: string;
  postalCode: string;
  phoneNumber: string; // populate
  emailAddress: string; // populate
  workDescription: string;
  image1?: string[];
  image2?: string[];
}

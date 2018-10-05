import { Tasker } from '../../tasker/model/tasker.model';

export interface ScheduleInfo {
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

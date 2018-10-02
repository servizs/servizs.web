export interface SignUp {
  firstName: string;
  lastName: string;
  city: string; // default these.
  province: string;
  country: string;
  emailAddress: string;
  password: string;
  uid?: string;
}

export interface SignIn {
  emailAddress: string;
  password: string;
}

export enum SignupRoute {
  None = 'None',
  Google = 'Google',
  Facebook = 'Facebook',
  Twitter = 'Twitter'
}

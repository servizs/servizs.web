export interface SignUp {
  firstName: string;
  lastName: string;
  city: string; // default these.
  province: string;
  country: string;
  emailAddress: string;
  password: string;
}

export interface SignIn {
  emailAddress: string;
  password: string;
}

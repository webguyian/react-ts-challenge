export interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  street: string;
  city: string;
  zipcode: string;
  username: string;
  password: string;
}

export type FormKeys = keyof FormData;

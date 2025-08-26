// Auth
export interface LoginFormValues {
  email: string;
  password: string;
}
export interface RegisterFormValues {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

interface User {
  firstName: string;
  lastName: string;
  email: string;
  role: string;
  _id: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface AuthResponse {
  message: string;
  user: User;
}

export interface RefreshResponse {
  accessToken: string;
}

export interface LogoutResponse {
  message: string;
}

export interface GetMeResponse {
  user: User;
}

// Shoes

export interface Shoe {
  _id: string;
  name: string;
  picture: string[];
  description: string;
  isNew: boolean;
  discount: number;
  size: string;
  color: string;
  gender: string;
  price: number;
  __v: number;
  updatedAt: string;
}

export interface ShoeFormValues {
  name: string;
  price: string;
  discount: string;
  color: string;
  size: string;
  description: string;
  isNew: boolean;
  gender: string;
}

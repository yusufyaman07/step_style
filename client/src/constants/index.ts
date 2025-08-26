import type { LoginFormValues, RegisterFormValues } from "../types";

const initialLoginValues: LoginFormValues = {
  email: "",
  password: "",
};
const initialRegisterValues: RegisterFormValues = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
};

export { initialLoginValues, initialRegisterValues };

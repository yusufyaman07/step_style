import { Form, Formik } from "formik";
import { type FC } from "react";
import Input from "../../components/Input";
import { Link } from "react-router-dom";
import { initialRegisterValues } from "../../constants";
import type { RegisterFormValues } from "../../types";
import { RegisterSchema } from "../../schemas";
import useAuth from "../../hooks/useAuth";

const Register: FC = () => {
  const { register } = useAuth();
  const onSubmit = (values: RegisterFormValues) => {
    register.mutate(values);
  };
  return (
    <div className="flex items-center justify-center min-h-screen p-4 bg-app">
      <div className="w-full max-w-md">
        <div className="flex flex-col items-center">
          <div className="flex justify-center mb-6 ms-6">
            <div className="flex items-center justify-center h-20 rounded-lg w-72">
              <img
                src="/logo.svg"
                alt="StepStyle Logo"
                className="block w-auto h-10"
              />
            </div>
          </div>

          <div className="w-full card">
            <div className="px-6 pt-6 pb-2 text-center">
              <h1 className="text-2xl font-semibold">Create Your Account</h1>
            </div>

            <Formik
              initialValues={initialRegisterValues}
              onSubmit={onSubmit}
              validationSchema={RegisterSchema}
            >
              <Form className="px-6 pt-2 pb-6 space-y-8">
                <Input
                  type="text"
                  label="Your Name"
                  name="firstName"
                  placeholder="Yusuf"
                />
                <Input
                  type="text"
                  label="Your Surname"
                  name="lastName"
                  placeholder="YAMAN"
                />
                <Input
                  type="email"
                  label="Your Email"
                  name="email"
                  placeholder="yusufyaman@example.com"
                />
                <Input
                  type="password"
                  label="Your Password"
                  name="password"
                  placeholder="••••••••"
                />

                <button
                  type="submit"
                  className="btn-primary"
                  disabled={register.isPending}
                >
                  Register
                </button>

                <p className="pt-2 text-sm text-center text-muted">
                  Do you have an account?
                  <Link to="/login" className="mx-2 link">
                    Login
                  </Link>
                </p>
              </Form>
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;

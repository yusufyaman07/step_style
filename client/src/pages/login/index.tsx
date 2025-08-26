import { Formik, Form } from "formik"; // Form'u da aldık
import { type FC } from "react";
import { Link } from "react-router-dom";
import { initialLoginValues } from "../../constants";
import type { LoginFormValues } from "../../types";
import Input from "../../components/Input";
import { LoginSchema } from "../../schemas";
import useAuth from "../../hooks/useAuth";

const Login: FC = () => {
  const { login } = useAuth();
  const onSubmit = (values: LoginFormValues) => {
    login.mutate(values);
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
              <h1 className="text-2xl font-semibold">
                Sign in to your account
              </h1>
            </div>

            <Formik
              initialValues={initialLoginValues}
              onSubmit={onSubmit}
              validationSchema={LoginSchema}
            >
              <Form className="px-6 pt-2 pb-6 space-y-8">
                <Input
                  type="email"
                  label="Email Address"
                  name="email"
                  placeholder="yusufyaman@example.com"
                />
                <Input
                  type="password"
                  label="Password"
                  name="password"
                  placeholder="••••••••"
                />
                <button
                  type="submit"
                  className="btn-primary"
                  disabled={login.isPending}
                >
                  Login
                </button>

                <p className="pt-2 text-sm text-center text-muted">
                  Don't have an account?
                  <Link to="/register" className="mx-2 link">
                    Register
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

export default Login;

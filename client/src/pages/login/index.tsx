import { type FC } from "react";

const Login: FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen p-4 bg-app">
      <div className="w-full max-w-md">
        <div className="flex flex-col items-center">
          {/* Logo */}

          <div className="flex justify-center mb-6 ms-6">
            <div className="flex items-center justify-center h-20 rounded-lg w-72">
              <img
                src="/logo.svg"
                alt="StepStyle Logo"
                className="block w-auto h-10"
              />
            </div>
          </div>

          {/* Card */}
          <div className="w-full card">
            <div className="px-6 pt-6 pb-2 text-center">
              <h1 className="text-2xl font-semibold">
                Sign in to your account
              </h1>
            </div>

            <form className="px-6 pt-2 pb-6 space-y-4">
              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm text-white/80">
                  Email address
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  autoComplete="email"
                  placeholder="you@example.com"
                  className="input"
                />
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="password"
                    className="block text-sm text-white/80"
                  >
                    Password
                  </label>
                  <a href="#" className="text-sm link">
                    Forgot password?
                  </a>
                </div>
                <input
                  id="password"
                  type="password"
                  required
                  autoComplete="current-password"
                  placeholder="••••••••"
                  className="input"
                />
              </div>

              <button type="submit" className="btn-primary">
                Sign in
              </button>

              <p className="pt-2 text-sm text-center text-muted">
                Not a member?{" "}
                <a href="#" className="link">
                  Start a 14 day free trial
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

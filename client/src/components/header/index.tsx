import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import useAuth from "../../hooks/useAuth";
import useUser from "../../hooks/useUser";

const Header = () => {
  const { user, isLoading, error } = useUser();
  const { logout } = useAuth();
  const [open, setOpen] = useState(false);

  return (
    <header className="card sticky top-4 z-40 mx-auto max-w-7xl px-4 py-3 md:px-6 md:py-4 rounded-2xl">
      {/* top row */}
      <div className="flex items-center justify-between gap-3">
        {/* mobile menu button */}
        <button
          className="md:hidden text-white/80 hover:text-white transition"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-nav"
        >
          <span className="sr-only">Menu</span>☰
        </button>

        {/* left nav (desktop) */}
        <nav className="hidden md:flex items-center gap-6 font-medium">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `transition ${
                isActive ? "text-white" : "text-white/70 hover:text-white"
              }`
            }
          >
            New Arrivals 🔥
          </NavLink>
          <NavLink
            to="/"
            className={({ isActive }) =>
              `transition ${
                isActive ? "text-white" : "text-white/70 hover:text-white"
              }`
            }
          >
            Men
          </NavLink>
          <NavLink
            to="/"
            className={({ isActive }) =>
              `transition ${
                isActive ? "text-white" : "text-white/70 hover:text-white"
              }`
            }
          >
            Women
          </NavLink>
        </nav>

        {/* logo */}
        <Link to="/" className="flex-1 flex justify-center items-center">
          <img src="/logo.svg" alt="logo" className="h-8 w-auto" />
        </Link>

        {/* right side: user */}
        <div className="flex items-center gap-3">
          {isLoading ? (
            <div className="h-9 w-28 rounded-lg bg-white/10 animate-pulse" />
          ) : user ? (
            <div className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-full bg-white/10 flex items-center justify-center">
                <span className="text-sm">
                  {user.name?.[0]?.toUpperCase() ??
                    user.email?.[0]?.toUpperCase() ??
                    "U"}
                </span>
              </div>
              <button
                onClick={logout.mutate}
                className="btn-primary !w-auto px-4 py-2.5"
                type="button"
              >
                Logout
              </button>
            </div>
          ) : (
            <div className="flex items-center gap-3">
              <Link to="/login" className="link">
                Log in
              </Link>
              <Link to="/register" className="btn-primary !w-auto px-4 py-2.5">
                Sign up
              </Link>
            </div>
          )}
        </div>
      </div>

      {/* mobile nav */}
      {open && (
        <nav
          id="mobile-nav"
          className="md:hidden mt-3 pt-3 border-t border-white/10 grid gap-2"
        >
          <Link
            to="/"
            className="block py-2 text-white/80 hover:text-white transition"
            onClick={() => setOpen(false)}
          >
            New Arrivals 🔥
          </Link>
          <Link
            to="/"
            className="block py-2 text-white/80 hover:text-white transition"
            onClick={() => setOpen(false)}
          >
            Men
          </Link>
          <Link
            to="/"
            className="block py-2 text-white/80 hover:text-white transition"
            onClick={() => setOpen(false)}
          >
            Women
          </Link>
          {error && (
            <p className="text-muted text-sm pt-2">Failed to load user info.</p>
          )}
        </nav>
      )}
    </header>
  );
};

export default Header;

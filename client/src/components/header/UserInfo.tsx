import { useEffect, useRef, useState, type FC } from "react";
import { Link } from "react-router-dom";
import useUser from "../../hooks/useUser";
import useAuth from "../../hooks/useAuth";
import { FaUserAlt as UserIcon } from "react-icons/fa";
import { FiShoppingCart as CartIcon } from "react-icons/fi";

const UserInfo: FC = () => {
  const { user } = useUser();
  const { logout } = useAuth();

  const [open, setOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const onDown = (e: MouseEvent) => {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  const cartCount = 3;

  return (
    <div className="flex items-center gap-5 md:gap-6">
      <div ref={wrapperRef} className="relative">
        {/* User Icon */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-haspopup="menu"
          aria-expanded={open}
          aria-controls="user-menu"
          className="grid place-items-center h-9 w-9 md:h-10 md:w-10 rounded-full text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/20 transition cursor-pointer"
        >
          <UserIcon className="text-[18px]" />
        </button>

        {open && (
          <div
            id="user-menu"
            role="menu"
            className="
              absolute right-0 mt-2 w-56
              rounded-xl border bg-gray-700 border-white/10
              bg-dark/95 backdrop-blur
              text-white text-sm
              shadow-2xl ring-1 ring-black/20
              z-[300] overflow-hidden
              before:content-[''] before:absolute before:-top-2 before:right-4
              before:border-8 before:border-transparent before:border-b-white/10
              after:content-[''] after:absolute after:-top-[7px] after:right-[17px]
              after:border-7 after:border-transparent after:border-b-[color:rgb(29,31,41)]
            "
          >
            {user && (
              <div className="px-4 pt-3 pb-2 cursor-pointer">
                <p className="text-[13px] text-white/70">Signed in as</p>
                <p className="mt-0.5 font-semibold">
                  {user.firstName} {user.lastName}
                </p>
              </div>
            )}

            <div className="my-2 h-px bg-white/10" />

            <div className="py-1">
              <>
                <Link
                  to="/profile"
                  role="menuitem"
                  className="block w-full px-4 py-2 hover:bg-white/10 transition"
                  onClick={() => setOpen(false)}
                >
                  Profile
                </Link>

                {user.role === "admin" && (
                  <Link
                    to="/admin"
                    role="menuitem"
                    className="block w-full px-4 py-2 hover:bg-white/10 transition"
                    onClick={() => setOpen(false)}
                  >
                    Admin Panel
                  </Link>
                )}

                <button
                  role="menuitem"
                  onClick={() => logout.mutate()}
                  className="block w-full text-left px-4 py-2 hover:bg-white/10 transition"
                >
                  Logout
                </button>
              </>
            </div>
          </div>
        )}
      </div>

      {/* Cart Icon */}
      <button
        type="button"
        className="relative grid place-items-center h-9 w-9 md:h-10 md:w-10 rounded-full text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/20 transition"
      >
        <CartIcon className="text-[18px]" />
        {cartCount > 0 && (
          <span className="absolute -top-1 -right-1 min-w-[18px] h-[18px] px-1 rounded-full bg-my-yellow text-[10px] font-semibold grid place-items-center">
            {cartCount}
          </span>
        )}
      </button>
    </div>
  );
};

export default UserInfo;

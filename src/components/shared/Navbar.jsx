import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <header className="w-full bg-base-300 py-4 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="navbar min-h-[72px] bg-base-100/80 backdrop-blur-md border border-base-content/10 rounded-2xl shadow-lg px-4 md:px-6">
          {/* Logo */}
          <div className="navbar-start">
            <Link href="/" className="font-bold leading-none flex items-center">
              <span className="text-lg sm:text-xl lg:text-2xl text-primary">hire</span>
              <span className="text-lg sm:text-xl lg:text-2xl text-orange-500">loop</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal gap-4 xl:gap-8 text-sm">
              <li>
                <Link href="/jobs">Browse Jobs</Link>
              </li>
              <li>
                <Link href="/company">Company</Link>
              </li>
              <li>
                <Link href="/pricing">Pricing</Link>
              </li>
            </ul>
          </div>

          {/* Right Side */}
          <div className="navbar-end gap-2 sm:gap-3">
            {/* Sign In */}
            <Link
              href="/signin"
              className="text-primary text-xs sm:text-sm font-medium whitespace-nowrap"
            >
              Sign In
            </Link>

            {/* Get Started */}
            <Link href="/register" className="btn btn-primary btn-sm rounded-xl px-3 sm:px-5">
              Get Started
            </Link>

            {/* Mobile Menu */}
            <div className="dropdown dropdown-end lg:hidden">
              <label tabIndex={0} className="btn btn-ghost btn-circle btn-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </label>

              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[100] w-56 rounded-xl bg-base-100 p-2 shadow-xl border border-base-content/10"
              >
                <li>
                  <Link href="/jobs">Browse Jobs</Link>
                </li>
                <li>
                  <Link href="/company">Company</Link>
                </li>
                <li>
                  <Link href="/pricing">Pricing</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

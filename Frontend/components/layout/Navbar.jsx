import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";

const navigation = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "About Us",
    path: "/about",
  },
  {
    name: "Services",
    path: "/services",
    dropdown: [
      { name: "Health", path: "/services/health" },
      { name: "Education", path: "/services/education" },
      { name: "Law & Order", path: "/services/law-order" },
    ],
  },
  {
    name: "Events",
    path: "/events",
  },
  {
    name: "Gallery",
    path: "/gallery",
  },
  {
    name: "Videos",
    path: "/videos",
  },
  {
    name: "Articles",
    path: "/articles",
  },
  {
    name: "Contact Us",
    path: "/contact",
  },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const closeMobileMenu = () => {
    setMobileOpen(false);
    setServicesOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">

        {/* Logo */}
        <Link
          to="/"
          onClick={closeMobileMenu}
          className="flex items-center gap-3"
        >
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-green-700 text-lg font-bold text-white">
            PLS
          </div>

          <div className="hidden sm:block">
            <h1 className="text-lg font-bold leading-tight text-gray-900">
              Punjab Lok Sanjh
            </h1>
            <p className="text-xs text-gray-500">
              Serving Humanity Together
            </p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-1 lg:flex">
          {navigation.map((item) => {
            if (item.dropdown) {
              return (
                <div key={item.name} className="group relative">
                  <button
                    type="button"
                    className="flex items-center gap-1 rounded-lg px-4 py-2.5 text-sm font-medium text-gray-700 transition hover:bg-green-50 hover:text-green-700"
                  >
                    {item.name}
                    <ChevronDown
                      size={16}
                      className="transition-transform duration-200 group-hover:rotate-180"
                    />
                  </button>

                  {/* Dropdown */}
                  <div className="invisible absolute left-0 top-full w-52 translate-y-2 rounded-xl border border-gray-100 bg-white p-2 opacity-0 shadow-xl transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                    {item.dropdown.map((child) => (
                      <NavLink
                        key={child.path}
                        to={child.path}
                        className={({ isActive }) =>
                          `block rounded-lg px-4 py-3 text-sm font-medium transition ${
                            isActive
                              ? "bg-green-50 text-green-700"
                              : "text-gray-700 hover:bg-gray-50 hover:text-green-700"
                          }`
                        }
                      >
                        {child.name}
                      </NavLink>
                    ))}
                  </div>
                </div>
              );
            }

            return (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `rounded-lg px-4 py-2.5 text-sm font-medium transition ${
                    isActive
                      ? "bg-green-50 text-green-700"
                      : "text-gray-700 hover:bg-green-50 hover:text-green-700"
                  }`
                }
              >
                {item.name}
              </NavLink>
            );
          })}
        </nav>

        {/* CTA */}
        <Link
          to="/contact"
          className="hidden rounded-lg bg-green-700 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-green-800 lg:block"
        >
          Get Involved
        </Link>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setMobileOpen((prev) => !prev)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          className="rounded-lg p-2 text-gray-700 transition hover:bg-gray-100 lg:hidden"
        >
          {mobileOpen ? <X size={25} /> : <Menu size={25} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`overflow-hidden border-t border-gray-100 bg-white transition-all duration-300 lg:hidden ${
          mobileOpen
            ? "max-h-[600px] opacity-100"
            : "max-h-0 opacity-0"
        }`}
      >
        <nav className="mx-auto max-w-7xl px-4 py-4 sm:px-6">
          <div className="flex flex-col gap-1">

            {navigation.map((item) => {
              if (item.dropdown) {
                return (
                  <div key={item.name}>
                    <button
                      type="button"
                      onClick={() => setServicesOpen((prev) => !prev)}
                      className="flex w-full items-center justify-between rounded-lg px-4 py-3 text-left text-sm font-medium text-gray-700 hover:bg-gray-50"
                    >
                      {item.name}

                      <ChevronDown
                        size={18}
                        className={`transition-transform duration-200 ${
                          servicesOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {servicesOpen && (
                      <div className="ml-4 border-l border-gray-200 pl-3">
                        {item.dropdown.map((child) => (
                          <NavLink
                            key={child.path}
                            to={child.path}
                            onClick={closeMobileMenu}
                            className={({ isActive }) =>
                              `block rounded-lg px-4 py-2.5 text-sm ${
                                isActive
                                  ? "font-semibold text-green-700"
                                  : "text-gray-600 hover:text-green-700"
                              }`
                            }
                          >
                            {child.name}
                          </NavLink>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <NavLink
                  key={item.path}
                  to={item.path}
                  onClick={closeMobileMenu}
                  className={({ isActive }) =>
                    `rounded-lg px-4 py-3 text-sm font-medium ${
                      isActive
                        ? "bg-green-50 text-green-700"
                        : "text-gray-700 hover:bg-gray-50"
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              );
            })}

            {/* Mobile CTA */}
            <Link
              to="/contact"
              onClick={closeMobileMenu}
              className="mt-3 rounded-lg bg-green-700 px-4 py-3 text-center text-sm font-semibold text-white transition hover:bg-green-800"
            >
              Get Involved
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
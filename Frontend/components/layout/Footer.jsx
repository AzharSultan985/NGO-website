import {
  ArrowRight,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";
import { Link } from "react-router-dom";

const quickLinks = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Events", path: "/events" },
  { name: "Gallery", path: "/gallery" },
  { name: "Videos", path: "/videos" },
  { name: "Articles", path: "/articles" },
  { name: "Contact Us", path: "/contact" },
];

const serviceLinks = [
  { name: "Health", path: "/services/health" },
  { name: "Education", path: "/services/education" },
  { name: "Law & Order", path: "/services/law-order" },
];

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-300">

      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">

        <div className="grid gap-12 lg:grid-cols-[1.4fr_0.7fr_0.7fr_1fr]">

          {/* About */}
          <div>
            <Link to="/" className="inline-flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-700 text-sm font-bold text-white">
                PLS
              </div>

              <div>
                <h2 className="text-lg font-bold text-white">
                  Punjab Lok Sanjh
                </h2>
                <p className="text-xs text-gray-500">
                  Serving Humanity Together
                </p>
              </div>
            </Link>

            <p className="mt-6 max-w-sm text-sm leading-7 text-gray-400">
              Punjab Lok Sanjh is committed to supporting communities through
              meaningful initiatives in health, education, and law & order
              awareness.
            </p>

            {/* Social Icons */}
            <div className="mt-6 flex gap-3">
              <a
                href="#"
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-sm font-bold text-gray-400 transition hover:bg-green-700 hover:text-white"
              >
                f
              </a>

              <a
                href="#"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-sm font-bold text-gray-400 transition hover:bg-green-700 hover:text-white"
              >
                ig
              </a>

              <a
                href="#"
                aria-label="YouTube"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-sm font-bold text-gray-400 transition hover:bg-green-700 hover:text-white"
              >
                ▶
              </a>

              <a
                href="#"
                aria-label="LinkedIn"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-sm font-bold text-gray-400 transition hover:bg-green-700 hover:text-white"
              >
                in
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Quick Links
            </h3>

            <ul className="mt-5 space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-gray-400 transition hover:text-green-400"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Our Work
            </h3>

            <ul className="mt-5 space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-gray-400 transition hover:text-green-400"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Contact Us
            </h3>

            <div className="mt-5 space-y-5">

              <div className="flex gap-3">
                <MapPin
                  size={19}
                  className="mt-0.5 shrink-0 text-green-500"
                />

                <p className="text-sm leading-6 text-gray-400">
                  Punjab, Pakistan
                </p>
              </div>

              <a
                href="tel:+923001234567"
                className="flex gap-3 text-sm text-gray-400 transition hover:text-green-400"
              >
                <Phone
                  size={19}
                  className="shrink-0 text-green-500"
                />

                <span>+92 300 1234567</span>
              </a>

              <a
                href="mailto:info@punjabloksanjh.org"
                className="flex gap-3 text-sm text-gray-400 transition hover:text-green-400"
              >
                <Mail
                  size={19}
                  className="shrink-0 text-green-500"
                />

                <span className="break-all">
                  info@punjabloksanjh.org
                </span>
              </a>

              <a
                href="https://wa.me/923001234567"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-green-400 transition hover:text-green-300"
              >
                <MessageCircle size={19} />
                Chat on WhatsApp
                <ArrowRight size={15} />
              </a>

            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-6 text-center sm:px-6 md:flex-row md:items-center md:justify-between md:text-left lg:px-8">

          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} Punjab Lok Sanjh. All rights reserved.
          </p>

          <div className="flex flex-wrap justify-center gap-5 text-xs sm:justify-end">
            <Link
              to="/privacy-policy"
              className="text-gray-500 transition hover:text-green-400"
            >
              Privacy Policy
            </Link>

            <Link
              to="/terms-and-conditions"
              className="text-gray-500 transition hover:text-green-400"
            >
              Terms & Conditions
            </Link>
          </div>

        </div>

        {/* Developer Credit */}
        <div className="border-t border-white/5">
          <div className="mx-auto max-w-7xl px-4 py-4 text-center sm:px-6 lg:px-8">
            <p className="text-xs text-gray-600">
              Powered by{" "}
              <span className="font-medium text-gray-400">
                Azhar Sultan
              </span>
            </p>
          </div>
        </div>
      </div>

    </footer>
  );
}
import { Mail, MapPin, MessageCircle, Phone, ArrowRight } from "lucide-react";
import { FaFacebookF, FaInstagram, FaYoutube, FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";

const quickLinks = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Events", path: "/events" },
  { name: "Gallery", path: "/gallery" },
  { name: "Contact", path: "/contact" },
];

const workLinks = [
  { name: "Health", path: "/services/health" },
  { name: "Education", path: "/services/education" },
  { name: "Awareness", path: "/services/law-order" },
];

const socialIcons = [FaFacebookF, FaInstagram, FaYoutube, FaLinkedinIn];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-white pt-20">

      <div className="absolute right-0 top-0 h-80 w-80 rounded-full bg-green-200/30 blur-3xl" />
      <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-blue-200/30 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr_1fr_1.2fr]">

          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-3">

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-green-600 to-blue-600 font-bold text-white shadow-lg">
                PLS
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900">
                  Punjab Lok Sanjh
                </h3>

                <p className="text-sm text-gray-500">
                  Serving Humanity Together
                </p>
              </div>

            </Link>


            <p className="mt-6 max-w-sm leading-7 text-gray-600">
              Working with communities through health, education and awareness
              initiatives to create a stronger and empowered society.
            </p>


            <div className="mt-7 flex gap-3">
              {socialIcons.map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="flex h-11 w-11 items-center justify-center rounded-xl border border-gray-200 bg-white text-gray-500 shadow-sm transition hover:-translate-y-1 hover:bg-green-600 hover:text-white"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>

          </div>


          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-gray-900">
              Quick Links
            </h4>

            <ul className="mt-6 space-y-3">
              {quickLinks.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="text-sm text-gray-600 transition hover:text-green-600"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>



          {/* Work */}
          <div>

            <h4 className="font-semibold text-gray-900">
              Our Work
            </h4>

            <ul className="mt-6 space-y-3">
              {workLinks.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="text-sm text-gray-600 transition hover:text-green-600"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>

          </div>




          {/* Contact */}
          <div>

            <h4 className="font-semibold text-gray-900">
              Contact Us
            </h4>


            <div className="mt-6 space-y-5">

              <div className="flex gap-3 text-sm text-gray-600">
                <MapPin className="text-green-600" size={20} />
                Punjab, Pakistan
              </div>


              <a
                href="tel:+923001234567"
                className="flex gap-3 text-sm text-gray-600 hover:text-green-600"
              >
                <Phone className="text-green-600" size={20} />
                +92 300 1234567
              </a>


              <a
                href="mailto:info@punjabloksanjh.org"
                className="flex gap-3 text-sm text-gray-600 hover:text-green-600"
              >
                <Mail className="text-green-600" size={20} />
                info@punjabloksanjh.org
              </a>


              <a
                href="https://wa.me/"
                className="inline-flex items-center gap-2 text-sm font-semibold text-green-600"
              >
                <MessageCircle size={20} />
                WhatsApp
                <ArrowRight size={15} />
              </a>

            </div>

          </div>

        </div>

      </div>



      {/* Bottom */}
      <div className="mt-16 border-t border-gray-200">

        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-6 text-center sm:px-6 md:flex-row md:justify-between lg:px-8">

          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Punjab Lok Sanjh. All Rights Reserved.
          </p>


          <p className="text-sm text-gray-500">
            Designed & Developed by{" "}
            <span className="font-semibold text-green-600">
              Azhar Sultan
            </span>
          </p>

        </div>

      </div>


    </footer>
  );
}
import {
  ArrowRight,
  Mail,
  MessageCircle,
  Phone,
} from "lucide-react";
import { Link } from "react-router-dom";

const socialLinks = [
  {
    name: "Facebook",
    href: "#",
    label: "f",
  },
  {
    name: "Instagram",
    href: "#",
    label: "ig",
  },
  {
    name: "YouTube",
    href: "#",
    label: "▶",
  },
  {
    name: "LinkedIn",
    href: "#",
    label: "in",
  },
];
export default function CTASection() {
  return (
    <section className="relative overflow-hidden bg-gray-950">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute -left-40 -top-40 h-96 w-96 rounded-full bg-green-600/10 blur-3xl" />
        <div className="absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-green-500/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8">

        {/* Main CTA */}
        <div className="grid items-center gap-12 lg:grid-cols-[1.4fr_0.8fr]">

          {/* Left Content */}
          <div>
            <span className="inline-flex items-center rounded-full border border-green-500/20 bg-green-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-green-400">
              Get Connected
            </span>

            <h2 className="mt-6 max-w-3xl text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
              Let's work together to
              <span className="block text-green-400">
                create meaningful change.
              </span>
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-7 text-gray-400 sm:text-lg">
              Whether you want to learn more about our work, support a
              community initiative, or simply connect with us, we would
              love to hear from you.
            </p>

            {/* Primary Actions */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-green-600 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-green-700"
              >
                Contact Us
                <ArrowRight size={18} />
              </Link>

              <a
                href="https://wa.me/923001234567"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-green-500/30 bg-green-500/10 px-6 py-3.5 text-sm font-semibold text-green-400 transition hover:bg-green-500 hover:text-white"
              >
                <MessageCircle size={18} />
                WhatsApp Us
              </a>
            </div>
          </div>

          {/* Right Contact Card */}
          <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-sm sm:p-8">

            <h3 className="text-xl font-semibold text-white">
              Connect With Us
            </h3>

            <p className="mt-2 text-sm leading-6 text-gray-400">
              Have a question or want to know more about Punjab Lok Sanjh?
              Reach out to our team.
            </p>

            {/* Phone */}
            <a
              href="tel:+923001234567"
              className="mt-7 flex items-center gap-4 rounded-xl p-3 transition hover:bg-white/5"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-green-500/10 text-green-400">
                <Phone size={19} />
              </span>

              <div>
                <p className="text-xs text-gray-500">
                  Call Us
                </p>
                <p className="mt-1 text-sm font-medium text-gray-200">
                  +92 300 1234567
                </p>
              </div>
            </a>

            {/* Email */}
            <a
              href="mailto:info@punjabloksanjh.org"
              className="flex items-center gap-4 rounded-xl p-3 transition hover:bg-white/5"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-green-500/10 text-green-400">
                <Mail size={19} />
              </span>

              <div>
                <p className="text-xs text-gray-500">
                  Email Us
                </p>
                <p className="mt-1 break-all text-sm font-medium text-gray-200">
                  info@punjabloksanjh.org
                </p>
              </div>
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/923001234567"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 rounded-xl p-3 transition hover:bg-white/5"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-green-500/10 text-green-400">
                <MessageCircle size={19} />
              </span>

              <div>
                <p className="text-xs text-gray-500">
                  WhatsApp
                </p>
                <p className="mt-1 text-sm font-medium text-gray-200">
                  Chat with us
                </p>
              </div>
            </a>

            {/* Divider */}
            <div className="my-6 h-px bg-white/10" />

            {/* Social Media */}
            <div>
              <p className="text-xs font-medium uppercase tracking-wider text-gray-500">
                Follow Us
              </p>

       <div className="mt-4 flex gap-3">
  {socialLinks.map((social) => (
    <a
      key={social.name}
      href={social.href}
      aria-label={social.name}
      target="_blank"
      rel="noopener noreferrer"
      className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-sm font-bold text-gray-400 transition hover:border-green-500/30 hover:bg-green-500 hover:text-white"
    >
      {social.label}
    </a>
  ))}
</div>  
            </div>

          </div>
        </div>

        {/* Bottom Trust Line */}
        <div className="mt-16 border-t border-white/10 pt-6">
          <div className="flex flex-col justify-between gap-3 text-center text-xs text-gray-500 sm:flex-row sm:text-left">
            <p>
              Punjab Lok Sanjh — Serving communities with purpose.
            </p>

            <p>
              Health • Education • Law & Order
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
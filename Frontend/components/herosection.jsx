import { ArrowRight, Play } from "lucide-react";
import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <section className="relative min-h-[calc(100vh-80px)] overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLeEoM4RwgZYfY08doEFwp3yGeeHpfxzr_fhX-uVMWdQ&s=10"
          alt="Punjab Lok Sanjh community work"
          className="h-full w-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/55" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/45 to-black/20" />
      </div>

      {/* Content */}
      <div className="relative mx-auto flex min-h-[calc(100vh-80px)] max-w-7xl items-center px-4 py-20 sm:px-6 lg:px-8">
        <div className="max-w-3xl">

          {/* Label */}
          <div className="mb-6 inline-flex items-center rounded-full border border-white/25 bg-white/10 px-4 py-2 backdrop-blur-sm">
            <span className="mr-2 h-2 w-2 rounded-full bg-green-400" />
            <span className="text-sm font-medium text-white">
              Serving Communities • Creating Impact
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
            Together for a
            <span className="block text-green-400">
              Better Punjab
            </span>
          </h1>

          {/* Description */}
          <p className="mt-6 max-w-2xl text-base leading-7 text-gray-200 sm:text-lg sm:leading-8">
            Punjab Lok Sanjh works with communities to promote health,
            education, and awareness while supporting people in building
            a stronger and more empowered society.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              to="/services"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-green-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg transition hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 focus:ring-offset-black"
            >
              Explore Our Work
              <ArrowRight size={18} />
            </Link>

            <Link
              to="/about"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/40 bg-white/10 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white hover:text-gray-900"
            >
              <Play size={17} />
              Learn More
            </Link>
          </div>

          {/* Impact highlights */}
          <div className="mt-12 grid max-w-xl grid-cols-3 border-t border-white/20 pt-6">
            <div>
              <p className="text-2xl font-bold text-white sm:text-3xl">
                3+
              </p>
              <p className="mt-1 text-xs text-gray-300 sm:text-sm">
                Areas of Work
              </p>
            </div>

            <div className="border-l border-white/20 pl-4 sm:pl-6">
              <p className="text-2xl font-bold text-white sm:text-3xl">
                100+
              </p>
              <p className="mt-1 text-xs text-gray-300 sm:text-sm">
                Community Initiatives
              </p>
            </div>

            <div className="border-l border-white/20 pl-4 sm:pl-6">
              <p className="text-2xl font-bold text-white sm:text-3xl">
                24/7
              </p>
              <p className="mt-1 text-xs text-gray-300 sm:text-sm">
                Commitment
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white/10 to-transparent" />
    </section>
  );
}
import { ArrowRight, Heart, GraduationCap, Scale, Target, Eye } from "lucide-react";
import { Link } from "react-router-dom";

const areasOfWork = [
  {
    icon: Heart,
    title: "Health",
    description:
      "Promoting health awareness, preventive education, medical assistance, and community health initiatives.",
  },
  {
    icon: GraduationCap,
    title: "Education",
    description:
      "Supporting educational awareness, learning opportunities, skill development, and community training.",
  },
  {
    icon: Scale,
    title: "Law & Order",
    description:
      "Raising awareness about legal rights, community rights, public awareness, and access to legal guidance.",
  },
];

const values = [
  "Community empowerment",
  "Equality and inclusion",
  "Transparency and integrity",
  "Human dignity",
  "Sustainable community development",
  "Service to society",
];

export default function About() {
  return (
    <main className="bg-white">

      {/* Page Hero */}
      <section className="relative overflow-hidden bg-gray-950">
        <div className="absolute inset-0">
          <img
            src="/images/about/about-hero.jpg"
            alt="Punjab Lok Sanjh community"
            className="h-full w-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-950 via-gray-950/80 to-gray-950/30" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
          <div className="max-w-3xl">
            <span className="mb-5 inline-block text-sm font-semibold uppercase tracking-wider text-green-400">
              About Punjab Lok Sanjh
            </span>

            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Working Together for
              <span className="block text-green-400">
                Stronger Communities
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 text-gray-300 sm:text-lg sm:leading-8">
              Punjab Lok Sanjh is committed to serving communities through
              meaningful work    in health, education, and law & order awareness.
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">

          {/* Image */}
          <div className="relative">
            <div className="overflow-hidden rounded-2xl">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpNZxE5bbV2E6yQHex53v_Bs2b9aTgDr1rCLwKQGODgQ&s=10"
                alt="Community members participating in an initiative"
                className="h-[420px] w-full object-cover sm:h-[500px]"
              />
            </div>

            <div className="absolute -bottom-6 -right-4 hidden rounded-xl bg-green-700 px-6 py-5 text-white shadow-xl sm:block lg:-right-6">
              <p className="text-2xl font-bold">Together</p>
              <p className="text-sm text-green-100">
                Creating meaningful impact
              </p>
            </div>
          </div>

          {/* Content */}
          <div>
            <span className="text-sm font-semibold uppercase tracking-wider text-green-700">
              Who We Are
            </span>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Building awareness, opportunity and stronger communities
            </h2>

            <p className="mt-6 leading-7 text-gray-600">
              Punjab Lok Sanjh works with communities to address important
              social needs and promote positive change. Our work focuses on
              areas that directly affect people's everyday lives, including
              health, education, and awareness of law and community rights.
            </p>

            <p className="mt-4 leading-7 text-gray-600">
              Through awareness programs, community initiatives, educational
              activities, health-focused programs, and law-related awareness,
              we aim to help communities become more informed, capable, and
              empowered.
            </p>

            <Link
              to="/services"
              className="mt-8 inline-flex items-center gap-2 rounded-lg bg-green-700 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-green-800"
            >
              Explore Our Work
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-gray-50 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-semibold uppercase tracking-wider text-green-700">
              Our Direction
            </span>

            <h2 className="mt-3 text-3xl font-bold text-gray-900 sm:text-4xl">
              Mission & Vision
            </h2>

            <p className="mt-4 text-gray-600">
              Guided by a commitment to community service and positive social
              development.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">

            {/* Mission */}
            <div className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-gray-100 sm:p-10">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-green-50 text-green-700">
                <Target size={28} />
              </div>

              <h3 className="mt-6 text-2xl font-bold text-gray-900">
                Our Mission
              </h3>

              <p className="mt-4 leading-7 text-gray-600">
                To contribute to healthier, better-informed, and more
                empowered communities by creating awareness, supporting
                education, promoting community health, and increasing
                understanding of rights and responsibilities.
              </p>
            </div>

            {/* Vision */}
            <div className="rounded-2xl bg-green-700 p-8 shadow-sm sm:p-10">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-white/10 text-white">
                <Eye size={28} />
              </div>

              <h3 className="mt-6 text-2xl font-bold text-white">
                Our Vision
              </h3>

              <p className="mt-4 leading-7 text-green-50">
                A stronger and more inclusive society where communities have
                greater access to awareness, education, health support, and
                knowledge of their rights.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Areas of Work */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <span className="text-sm font-semibold uppercase tracking-wider text-green-700">
                What We Do
              </span>

              <h2 className="mt-3 text-3xl font-bold text-gray-900 sm:text-4xl">
                Our Areas of Work
              </h2>
            </div>

            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-sm font-semibold text-green-700 hover:text-green-800"
            >
              View all services
              <ArrowRight size={17} />
            </Link>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {areasOfWork.map((area) => {
              const Icon = area.icon;

              return (
                <div
                  key={area.title}
                  className="group rounded-2xl border border-gray-100 bg-white p-7 transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-green-50 text-green-700 transition group-hover:bg-green-700 group-hover:text-white">
                    <Icon size={27} />
                  </div>

                  <h3 className="mt-6 text-xl font-bold text-gray-900">
                    {area.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-gray-600">
                    {area.description}
                  </p>

                  <Link
                    to={`/services/${area.title
                      .toLowerCase()
                      .replace(" & ", "-")
                      .replace(" ", "-")}`}
                    className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-green-700"
                  >
                    Learn more
                    <ArrowRight size={16} />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="bg-gray-950 py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">

          <div>
            <span className="text-sm font-semibold uppercase tracking-wider text-green-400">
              What Guides Us
            </span>

            <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
              Our Core Values
            </h2>

            <p className="mt-5 max-w-xl leading-7 text-gray-400">
              Our work is guided by principles that place people, dignity,
              community participation, and meaningful social impact at the
              center of everything we do.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {values.map((value) => (
              <div
                key={value}
                className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-5 py-4"
              >
                <span className="flex h-2.5 w-2.5 shrink-0 rounded-full bg-green-400" />

                <span className="text-sm font-medium text-gray-200">
                  {value}
                </span>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="bg-green-700">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-4 py-14 text-center sm:px-6 lg:flex-row lg:px-8 lg:text-left">

          <div>
            <h2 className="text-2xl font-bold text-white sm:text-3xl">
              Be part of positive community change
            </h2>

            <p className="mt-2 text-green-100">
              Learn more about our work and how you can get involved.
            </p>
          </div>

          <Link
            to="/contact"
            className="inline-flex shrink-0 items-center gap-2 rounded-lg bg-white px-6 py-3.5 text-sm font-semibold text-green-700 transition hover:bg-gray-100"
          >
            Get Involved
            <ArrowRight size={18} />
          </Link>

        </div>
      </section>

    </main>
  );
}
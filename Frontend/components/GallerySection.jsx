import { ArrowRight, Image as ImageIcon } from "lucide-react";
import { Link } from "react-router-dom";

const galleryItems = [
  {
    id: 1,
    title: "Community Awareness",
    category: "Community Work",
    image: "https://plus.unsplash.com/premium_photo-1661768301831-db643467dff5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y29tbXVuaXR5JTIwd29ya3xlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 2,
    title: "Education Program",
    category: "Education",
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8ZWR1Y2F0aW9ufGVufDB8fDB8fHww",
  },
  {
    id: 3,
    title: "Health Camp",
    category: "Health",
    image: "https://media.istockphoto.com/id/2238761519/photo/experienced-medical-professional-confidently-poses-with-arms-crossed-in-a-modern-clinic.webp?a=1&b=1&s=612x612&w=0&k=20&c=afAjnFYf5xpcayh9p8-DGcveWjm2RqcCqEv1oEqSAiM=",
  },
  {
    id: 4,
    title: "Community Meeting",
    category: "Community Work",
    image: "https://images.unsplash.com/photo-1784000299726-5cca66b771f9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNvbW11bml0eSUyMHdvcmt8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 5,
    title: "Awareness Session",
    category: "Law & Order",
    image: "https://plus.unsplash.com/premium_photo-1695449439526-9cebdbfa1a2c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8TGF3JTIwJTI2JTIwT3JkZXJ8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 6,
    title: "Training Program",
    category: "Training",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSC6eBoIRFBs7xLv1VJLDl94f5qi5hSOjESQYxzDUD9lg&s=10",
  },
];

export default function GallerySection() {
  return (
    <section className="bg-gray-50 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <span className="text-sm font-semibold uppercase tracking-wider text-green-700">
              Our Moments
            </span>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Our Gallery
            </h2>

            <p className="mt-4 max-w-2xl text-gray-600">
              A glimpse into our community activities, programs, events,
              and initiatives.
            </p>
          </div>

          <Link
            to="/gallery"
            className="inline-flex items-center gap-2 text-sm font-semibold text-green-700 transition hover:text-green-800"
          >
            View All Gallery
            <ArrowRight size={17} />
          </Link>
        </div>

        {/* Gallery Grid */}
        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {galleryItems.map((item) => (
            <Link
              key={item.id}
              to="/gallery"
              className="group relative overflow-hidden rounded-2xl bg-gray-200"
            >
              {/* Image */}
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />

              {/* Content */}
              <div className="absolute inset-x-0 bottom-0 translate-y-3 p-5 opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                <span className="text-xs font-medium uppercase tracking-wide text-green-300">
                  {item.category}
                </span>

                <h3 className="mt-1 text-lg font-semibold text-white">
                  {item.title}
                </h3>
              </div>

              {/* Icon */}
              <div className="absolute right-4 top-4 flex h-10 w-10 translate-y-[-8px] items-center justify-center rounded-full bg-white/90 text-gray-800 opacity-0 shadow-lg transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                <ImageIcon size={18} />
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
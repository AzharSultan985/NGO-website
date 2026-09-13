import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, ChevronDown, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { name: "About", path: "/about" },
  {
    name: "Services",
    path: "/services",
    dropdown: [
      { name: "Health", path: "/services/health" },
      { name: "Education", path: "/services/education" },
      { name: "Law & Order", path: "/services/law-order" },
    ],
  },
  { name: "Events", path: "/events" },
  { name: "Gallery", path: "/gallery" },
  { name: "Articles", path: "/articles" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    const scroll = () => setScrolled(window.scrollY > 40);

    window.addEventListener("scroll", scroll);
    return () => window.removeEventListener("scroll", scroll);
  }, []);

  const navStyle = scrolled
    ? "text-gray-700 hover:bg-green-50 hover:text-green-700"
    : "text-white hover:bg-white/20 hover:text-green-300";


  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: .6 }}
className="fixed top-0 left-0 z-999 w-full"    >

      <div className="mx-auto max-w-7xl px-4 pt-5 sm:px-6 lg:px-8">

        <motion.div
          animate={{
            backgroundColor: scrolled
              ? "rgba(255,255,255,.92)"
              : "rgba(15,23,42,.60)",
            boxShadow: scrolled
              ? "0 10px 35px rgba(0,0,0,.08)"
              : "0 10px 40px rgba(0,0,0,.25)",
          }}
          className="flex  h-20 items-center justify-between rounded-2xl border border-white/20 px-6 backdrop-blur-xl"
        >


          {/* Logo */}
 {/* Logo */}

<Link
  to="/"
  className="
  flex
  items-center
  gap-3
  "
>

  <div
    className="
    flex
    h-11
    w-11
    items-center
    justify-center
    rounded-xl
    bg-gradient-to-br
    from-green-600
    to-blue-600
    text-sm
    font-black
    text-white
    shadow-lg
    "
  >
    PLS
  </div>


  <div className="flex flex-col">

    <h2
      className={`
      text-sm
      font-bold
      leading-tight
      ${
        scrolled
        ? "text-gray-900"
        : "text-white"
      }
      `}
    >
      Punjab Lok Sanjh
    </h2>


    <p
      className={`
      text-xs
      ${
        scrolled
        ? "text-gray-500"
        : "text-white/70"
      }
      `}
    >
      Serving Humanity Together
    </p>


  </div>


</Link>


          {/* Desktop Navigation */}

          <nav className="hidden items-center gap-2 lg:flex">


            <NavLink
              to="/"
              className={({isActive}) =>
                `rounded-full px-5 py-2 text-sm font-medium transition-all duration-300 ${
                  isActive
                  ? "bg-green-600 text-white"
                  : navStyle
                }`
              }
            >
              Home
            </NavLink>



            {links.map(item => (

              item.dropdown ? (

                <div key={item.name} className="group relative">

                  <button className={`flex items-center gap-1 rounded-full px-5 py-2 text-sm font-medium transition-all duration-300 ${navStyle}`}>
                    {item.name}
                    <ChevronDown size={15}/>
                  </button>


                  <div className="invisible absolute top-12 w-52 rounded-xl border border-gray-200 bg-white/95 p-2 opacity-0 shadow-2xl backdrop-blur-xl transition-all duration-300 group-hover:visible group-hover:opacity-100">

                    {item.dropdown.map(sub => (

                      <Link
                        key={sub.path}
                        to={sub.path}
                        className="block rounded-lg px-4 py-3 text-sm text-gray-700 transition hover:translate-x-1 hover:bg-green-50 hover:text-green-700"
                      >
                        {sub.name}
                      </Link>

                    ))}

                  </div>

                </div>


              ) : (

                <NavLink
                  key={item.path}
                  to={item.path}
                  className={`rounded-full px-5 py-2 text-sm font-medium transition-all duration-300 ${navStyle}`}
                >
                  {item.name}
                </NavLink>

              )

            ))}


          </nav>



          {/* CTA */}

          <Link
            to="/contact"
            className="hidden items-center gap-2 rounded-full bg-gradient-to-r from-green-600 to-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:scale-105 lg:flex"
          >
            Contact
            <ArrowUpRight size={16}/>
          </Link>



          {/* Mobile Button */}

          <button
            onClick={() => setMobile(!mobile)}
            className={`rounded-xl p-2 lg:hidden ${scrolled ? "text-gray-800" : "text-white"}`}
          >
            {mobile ? <X/> : <Menu/>}
          </button>


        </motion.div>



        {/* Mobile Menu */}

        <AnimatePresence>

          {mobile && (

            <motion.div
              initial={{opacity:0,height:0}}
              animate={{opacity:1,height:"auto"}}
              exit={{opacity:0,height:0}}
              className="mt-3 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-xl lg:hidden"
            >

              <div className="space-y-2 p-5">

                <Link to="/" className="block rounded-xl px-4 py-3 hover:bg-green-50">
                  Home
                </Link>

                {links.map(item => (

                  <Link
                    key={item.path}
                    to={item.path}
                    className="block rounded-xl px-4 py-3 hover:bg-green-50"
                  >
                    {item.name}
                  </Link>

                ))}

              </div>

            </motion.div>

          )}

        </AnimatePresence>


      </div>

    </motion.header>
  );
}
import { motion } from "framer-motion";
import { ArrowRight, Users, HeartHandshake, Globe2 } from "lucide-react";
import { Link } from "react-router-dom";


export default function AboutSection() {

  return (

    <section
      className="
      relative
      overflow-hidden
      bg-white
      py-24
      "
    >


      <div
        className="
        mx-auto
        grid
        max-w-7xl
        items-center
        gap-14
        px-4
        sm:px-6
        lg:grid-cols-2
        lg:px-8
        "
      >


        {/* Image */}


        <motion.div

          initial={{
            opacity:0,
            x:-60
          }}

          whileInView={{
            opacity:1,
            x:0
          }}

          viewport={{
            once:true
          }}

          transition={{
            duration:0.8
          }}

          className="
          relative
          "

        >


          <div
            className="
            overflow-hidden
            rounded-[35px]
            "
          >

            <img

              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLeEoM4RwgZYfY08doEFwp3yGeeHpfxzr_fhX-uVMWdQ&s=10"

              alt="Punjab Lok Sanjh community work"

              className="
              h-[520px]
              w-full
              object-cover
              transition
              duration-700
              hover:scale-105
              "

            />

          </div>



          {/* Floating Card */}


          <motion.div

            animate={{
              y:[0,-12,0]
            }}

            transition={{
              duration:4,
              repeat:Infinity
            }}

            className="
            absolute
            -bottom-8
            right-6
            rounded-2xl
            border
            border-white/40
            bg-white/90
            p-5
            shadow-xl
            backdrop-blur-xl
            "

          >

            <p
              className="
              text-3xl
              font-bold
              text-green-700
              "
            >
              100+
            </p>


            <p
              className="
              text-sm
              text-gray-600
              "
            >
              Community Impact
            </p>


          </motion.div>


        </motion.div>





        {/* Content */}


        <motion.div

          initial={{
            opacity:0,
            x:60
          }}

          whileInView={{
            opacity:1,
            x:0
          }}

          viewport={{
            once:true
          }}

          transition={{
            duration:0.8
          }}

        >



          <span
            className="
            text-sm
            font-semibold
            uppercase
            tracking-[0.25em]
            text-green-600
            "
          >
            About Punjab Lok Sanjh
          </span>




          <h2
            className="
            mt-5
            text-4xl
            font-bold
            leading-tight
            text-gray-900
            sm:text-5xl
            "
          >

            Working Together To Create
            <span
              className="
              block
              bg-gradient-to-r
              from-green-600
              to-blue-600
              bg-clip-text
              text-transparent
              "
            >
              Positive Social Change
            </span>

          </h2>




          <p
            className="
            mt-6
            text-lg
            leading-8
            text-gray-600
            "
          >

            Punjab Lok Sanjh is a community-focused organization
            working to create awareness, opportunities, and support
            systems that help people build stronger and more
            empowered communities.

          </p>



          <p
            className="
            mt-4
            leading-7
            text-gray-600
            "
          >

            Through initiatives in health awareness, education,
            social development, and community support, we work
            alongside people to encourage positive change and
            improve everyday lives.

          </p>






          {/* Stats */}


          <div
            className="
            mt-10
            grid
            grid-cols-3
            gap-5
            border-t
            border-gray-200
            pt-8
            "
          >


            <div>

              <Users
                className="text-green-600"
                size={25}
              />

              <h3
                className="
                mt-3
                text-2xl
                font-bold
                text-gray-900
                "
              >
                100+
              </h3>


              <p className="text-sm text-gray-500">
                People Served
              </p>

            </div>



            <div>

              <HeartHandshake
                className="text-green-600"
                size={25}
              />

              <h3
                className="
                mt-3
                text-2xl
                font-bold
                text-gray-900
                "
              >
                50+
              </h3>


              <p className="text-sm text-gray-500">
                Initiatives
              </p>

            </div>




            <div>

              <Globe2
                className="text-green-600"
                size={25}
              />

              <h3
                className="
                mt-3
                text-2xl
                font-bold
                text-gray-900
                "
              >
                24/7
              </h3>


              <p className="text-sm text-gray-500">
                Commitment
              </p>


            </div>


          </div>





          <Link

            to="/contact"

            className="
            mt-10
            inline-flex
            items-center
            gap-2
            rounded-xl
            bg-green-600
            px-7
            py-3.5
            font-semibold
            text-white
            transition
            hover:bg-green-700
            "

          >

            Support Our Mission

            <ArrowRight size={18}/>

          </Link>



        </motion.div>


      </div>


    </section>

  );
}
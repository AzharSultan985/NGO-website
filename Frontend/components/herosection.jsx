import {
  ArrowRight,
  Play,
  Users,
  HeartHandshake,
  Globe2
} from "lucide-react";

import { Link } from "react-router-dom";
import { motion } from "framer-motion";


export default function HeroSection() {


  return (

    <section
      className="
      relative
      min-h-screen
      overflow-hidden
      "
    >


      {/* Background Image */}

      <motion.div

        initial={{
          scale:1.1
        }}

        animate={{
          scale:1
        }}

        transition={{
          duration:2
        }}

        className="
        absolute
        inset-0
        "
      >

        <img

          src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c"

          alt="Community work"

          className="
          h-full
          w-full
          object-cover
          "
        />


      </motion.div>



      {/* Overlay */}

      <div
        className="
        absolute
        inset-0
        bg-gradient-to-r
        from-black/70
        via-black/50
        to-black/20
        "
      />


      {/* Animated Shapes */}

      <motion.div

        animate={{
          y:[0,-30,0],
          rotate:[0,10,0]
        }}

        transition={{
          duration:8,
          repeat:Infinity
        }}

        className="
        absolute
        right-20
        top-32
        hidden
        h-72
        w-72
        rounded-full
        bg-green-500/20
        blur-3xl
        lg:block
        "

      />



      <div
        className="
        relative
        mx-auto
        flex
        min-h-screen
        max-w-7xl
        items-center
        px-4
        py-32
        sm:px-6
        lg:px-8
        "
      >


        <div
          className="
          grid
          w-full
          items-center
          gap-12
          lg:grid-cols-2
          "
        >



          {/* CONTENT */}


          <motion.div

            initial={{
              opacity:0,
              x:-80
            }}

            animate={{
              opacity:1,
              x:0
            }}

            transition={{
              duration:1
            }}

          >


            <div
              className="
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-white/30
              bg-white/10
              px-5
              py-2
              backdrop-blur-md
              "
            >

              <span
                className="
                h-2
                w-2
                animate-pulse
                rounded-full
                bg-green-400
                "
              />

              <p
                className="
                text-sm
                text-white
                "
              >
                Serving Communities • Creating Impact
              </p>


            </div>




            <h1
              className="
              mt-8
              text-5xl
              font-bold
              leading-tight
              text-white
              sm:text-6xl
              lg:text-7xl
              "
            >

              Building Hope,

              <span
                className="
                block
                bg-gradient-to-r
                from-green-400
                to-blue-400
                bg-clip-text
                text-transparent
                "
              >
                Creating Change
              </span>

            </h1>




            <p
              className="
              mt-6
              max-w-xl
              text-lg
              leading-8
              text-gray-200
              "
            >

              Punjab Lok Sanjh works with communities
              to improve lives through healthcare,
              education and social development programs.

            </p>





            <div
              className="
              mt-8
              flex
              flex-col
              gap-4
              sm:flex-row
              "
            >


              <Link

                to="/services"

                className="
                flex
                items-center
                justify-center
                gap-2
                rounded-xl
                bg-green-600
                px-7
                py-4
                font-semibold
                text-white
                transition
                hover:bg-green-700
                hover:scale-105
                "

              >

                Explore Work

                <ArrowRight size={18}/>

              </Link>




              <Link

                to="/about"

                className="
                flex
                items-center
                justify-center
                gap-2
                rounded-xl
                border
                border-white/40
                bg-white/10
                px-7
                py-4
                font-semibold
                text-white
                backdrop-blur-md
                hover:bg-white
                hover:text-black
                "

              >

                <Play size={17}/>

                Learn More


              </Link>



            </div>






            {/* Stats */}


            <div
              className="
              mt-12
              grid
              max-w-xl
              grid-cols-3
              border-t
              border-white/20
              pt-8
              "
            >


              <div>

                <Users
                  className="text-green-400"
                  size={24}
                />

                <h3
                  className="
                  mt-2
                  text-3xl
                  font-bold
                  text-white
                  "
                >
                  100+
                </h3>

                <p className="text-sm text-gray-300">
                  Communities
                </p>

              </div>



              <div
                className="
                border-l
                border-white/20
                pl-5
                "
              >

                <HeartHandshake
                  className="text-green-400"
                  size={24}
                />

                <h3 className="mt-2 text-3xl font-bold text-white">
                  50+
                </h3>

                <p className="text-sm text-gray-300">
                  Projects
                </p>


              </div>




              <div
                className="
                border-l
                border-white/20
                pl-5
                "
              >

                <Globe2
                  className="text-green-400"
                  size={24}
                />


                <h3 className="mt-2 text-3xl font-bold text-white">
                  24/7
                </h3>


                <p className="text-sm text-gray-300">
                  Support
                </p>


              </div>



            </div>



          </motion.div>







          {/* RIGHT FLOAT CARD */}
<motion.div

  initial={{
    opacity:0,
    y:80
  }}

  animate={{
    opacity:1,
    y:0
  }}

  transition={{
    delay:.5,
    duration:1
  }}

  className="
  hidden
  lg:flex
  justify-center
  "

>


<motion.div

  animate={{
    y:[0,-15,0]
  }}

  transition={{
    duration:5,
    repeat:Infinity,
    ease:"easeInOut"
  }}

  className="
  relative
  w-[350px]
  overflow-hidden
  rounded-[30px]
  border
  border-white/25
  bg-white/10
  p-7
  backdrop-blur-2xl
  shadow-[0_20px_60px_rgba(0,0,0,0.3)]
  "

>


{/* Glow */}

<div
className="
absolute
-right-20
-top-20
h-48
w-48
rounded-full
bg-green-400/30
blur-3xl
"
/>



<div
className="
relative
z-10
"
>


<p
className="
text-[11px]
font-semibold
uppercase
tracking-[0.3em]
text-green-300
"
>
Our Mission
</p>



<h3
className="
mt-4
font-serif
text-3xl
italic
font-semibold
leading-snug
text-white
"
>

"Compassion today
creates a better
tomorrow."

</h3>




<div
className="
mt-6
h-px
bg-white/20
"
/>





<div
className="
mt-5
flex
items-center
justify-between
"
>


<div>

<p
className="
text-3xl
font-bold
text-white
"
>
100+
</p>


<p
className="
text-xs
text-gray-300
"
>
Lives Impacted
</p>


</div>




<div
className="
flex
h-12
w-12
items-center
justify-center
rounded-full
bg-gradient-to-br
from-green-400
to-blue-500
"
>

<span className="text-xl">
❤️
</span>


</div>


</div>



</div>


</motion.div>


</motion.div>



        </div>


      </div>


    </section>

  );

}
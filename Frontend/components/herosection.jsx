import {
  ArrowRight,
  Play
} from "lucide-react";

import {
  Link
} from "react-router-dom";


import {
  motion
} from "framer-motion";


import {
  Canvas
} from "@react-three/fiber";


import {
  Environment,
  Float,
  Sphere
} from "@react-three/drei";



function Model() {

  return (

    <Float
      speed={2}
      rotationIntensity={1.5}
      floatIntensity={2}
    >

      <Sphere
        args={[1.8, 64, 64]}
      >

        <meshStandardMaterial
          color="#22c55e"
          roughness={0.2}
          metalness={0.5}
        />

      </Sphere>


    </Float>

  )

}




export default function HeroSection() {


  return (

    <section
      className="
relative
overflow-hidden
min-h-screen
bg-gradient-to-br
from-white
via-green-50
to-blue-50
"
    >


      {/* Decorative Background */}

      <div
        className="
absolute
right-0
top-20
h-[500px]
w-[500px]
rounded-full
bg-green-300/20
blur-3xl
"
      />


      <div
        className="
absolute
left-0
bottom-0
h-[400px]
w-[400px]
rounded-full
bg-blue-300/20
blur-3xl
"
      />



      <div
        className="
relative
mx-auto
grid
max-w-7xl
items-center
gap-10
px-4
pt-32
pb-20
sm:px-6
lg:grid-cols-2
lg:px-8
"
      >


        {/* LEFT CONTENT */}


        <motion.div

          initial={{
            opacity: 0,
            x: -80
          }}

          whileInView={{
            opacity: 1,
            x: 0
          }}

          viewport={{
            once: true
          }}

          transition={{
            duration: 0.8
          }}

        >


          <div
            className="
inline-flex
items-center
rounded-full
border
border-green-200
bg-white
px-5
py-2
shadow-sm
"
          >

            <span
              className="
mr-2
h-2
w-2
rounded-full
bg-green-500
animate-pulse
"
            />

            <p
              className="
text-sm
font-medium
text-gray-700
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
tracking-tight
text-gray-900
sm:text-6xl
lg:text-7xl
"
          >

            Together For

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
              A Better Punjab
            </span>


          </h1>




          <p
            className="
mt-6
max-w-xl
text-lg
leading-8
text-gray-600
"
          >

            Punjab Lok Sanjh works with communities to create
            positive change through health, education and
            social awareness initiatives.

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
bg-gradient-to-r
from-green-600
to-blue-600
px-7
py-4
font-semibold
text-white
shadow-xl
transition
hover:scale-105
"

            >

              Explore Work

              <ArrowRight size={18} />

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
border-gray-200
bg-white
px-7
py-4
font-semibold
text-gray-800
shadow-sm
transition
hover:shadow-lg
"

            >

              <Play size={17} />

              Learn More

            </Link>



          </div>





          {/* Stats */}


          <div
            className="
mt-12
grid
grid-cols-3
border-t
border-gray-200
pt-8
max-w-xl
"
          >


            <div>

              <h3
                className="
text-3xl
font-bold
text-gray-900
"
              >
                3+
              </h3>

              <p
                className="
text-sm
text-gray-500
"
              >
                Areas
              </p>

            </div>



            <div
              className="
border-l
pl-5
border-gray-200
"
            >

              <h3
                className="
text-3xl
font-bold
text-gray-900
"
              >
                100+
              </h3>

              <p
                className="
text-sm
text-gray-500
"
              >
                Programs
              </p>

            </div>




            <div
              className="
border-l
pl-5
border-gray-200
"
            >

              <h3
                className="
text-3xl
font-bold
text-gray-900
"
              >
                24/7
              </h3>

              <p
                className="
text-sm
text-gray-500
"
              >
                Support
              </p>


            </div>


          </div>


        </motion.div>





        {/* RIGHT 3D */}


        <motion.div

          initial={{
            opacity: 0,
            scale: 0.7
          }}

          whileInView={{
            opacity: 1,
            scale: 1
          }}

          transition={{
            duration: 1
          }}

          className="
h-[500px]
"

        >


          <Canvas
            camera={{
              position: [0, 0, 6]
            }}
          >


            <ambientLight intensity={1} />

            <directionalLight
              position={[3, 3, 3]}
              intensity={2}
            />


            <Model />


            <Environment preset="city" />


          </Canvas>


        </motion.div>



      </div>



    </section>

  )

}
import { ArrowRight, Image as ImageIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";


const galleryItems = [
  {
    id:1,
    title:"Community Awareness",
    category:"Community Work",
    image:"https://plus.unsplash.com/premium_photo-1661768301831-db643467dff5?w=900"
  },
  {
    id:2,
    title:"Education Program",
    category:"Education",
    image:"https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=900"
  },
  {
    id:3,
    title:"Health Camp",
    category:"Health",
    image:"https://images.unsplash.com/photo-1584982751601-97dcc096659c?w=900"
  },
  {
    id:4,
    title:"Community Meeting",
    category:"Social Work",
    image:"https://images.unsplash.com/photo-1556761175-b413da4baf72?w=900"
  },
  {
    id:5,
    title:"Awareness Session",
    category:"Rights Awareness",
    image:"https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=900"
  },
  {
    id:6,
    title:"Training Program",
    category:"Development",
    image:"https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=900"
  }
];



export default function GallerySection(){

return(

<section
className="
relative
overflow-hidden
bg-white
py-24
"
>


{/* Background Glow */}

<div
className="
absolute
right-0
top-20
h-96
w-96
rounded-full
bg-green-200/40
blur-3xl
"
/>


<div
className="
absolute
bottom-0
left-0
h-96
w-96
rounded-full
bg-blue-200/40
blur-3xl
"
/>



<div
className="
relative
mx-auto
max-w-7xl
px-4
sm:px-6
lg:px-8
"
>



{/* Header */}


<motion.div

initial={{
opacity:0,
y:40
}}

whileInView={{
opacity:1,
y:0
}}

viewport={{
once:true
}}

transition={{
duration:.8
}}

className="
flex
flex-col
justify-between
gap-6
md:flex-row
md:items-end
"

>


<div>


<p
className="
text-sm
font-semibold
uppercase
tracking-[0.3em]
text-green-600
"
>
Our Journey
</p>



<h2
className="
mt-4
text-4xl
font-bold
tracking-tight
text-gray-900
sm:text-6xl
"
>

Moments That
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
Create Impact
</span>


</h2>


<p
className="
mt-5
max-w-xl
text-lg
leading-8
text-gray-600
"
>
A visual story of our community programs,
initiatives and efforts towards creating
positive social change.
</p>


</div>




<Link

to="/gallery"

className="
inline-flex
items-center
gap-2
rounded-full
bg-gray-900
px-6
py-3
font-semibold
text-white
transition
hover:scale-105
"

>

View Gallery

<ArrowRight size={17}/>

</Link>



</motion.div>







{/* Gallery */}


<div
className="
mt-16
grid
gap-8
sm:grid-cols-2
lg:grid-cols-3
"
>


{
galleryItems.map((item,index)=>(


<motion.div

key={item.id}


initial={{
opacity:0,
y:80
}}

whileInView={{
opacity:1,
y:0
}}

viewport={{
once:true
}}

transition={{
delay:index*.1,
duration:.7
}}



whileHover={{
y:-12,
rotateX:5,
rotateY:-5
}}


style={{
transformStyle:"preserve-3d"
}}


className="
group
relative
h-[420px]
overflow-hidden
rounded-[32px]
shadow-xl
"
>


<img

src={item.image}

alt={item.title}

className="
h-full
w-full
object-cover
transition
duration-700
group-hover:scale-110
"

/>



{/* Dark cinematic overlay */}

<div
className="
absolute
inset-0
bg-gradient-to-t
from-black/80
via-black/20
to-transparent
"
/>





{/* Content */}

<div
className="
absolute
bottom-0
left-0
p-7
text-white
"
>


<p
className="
text-xs
font-semibold
uppercase
tracking-[0.25em]
text-green-300
"
>

{item.category}

</p>



<h3
className="
mt-3
text-2xl
font-bold
"
>
{item.title}
</h3>



</div>






{/* Floating Icon */}


<motion.div

whileHover={{
rotate:360
}}

transition={{
duration:.6
}}

className="
absolute
right-5
top-5
flex
h-12
w-12
items-center
justify-center
rounded-full
bg-white/20
text-white
backdrop-blur-xl
"

>


<ImageIcon size={20}/>


</motion.div>




</motion.div>


))
}



</div>



</div>


</section>

)

}
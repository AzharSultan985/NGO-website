import {
  ArrowRight,
  Mail,
  Phone,
  MessageCircle,
  
} from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn
} from "react-icons/fa";
import {
  motion
} from "framer-motion";

import {
  Link
} from "react-router-dom";



export default function CTASection(){


return (

<section
className="
relative
overflow-hidden
bg-white
py-24
"
>


{/* Soft Background Effects */}

<div
className="
absolute
right-0
top-10
h-72
w-72
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
h-72
w-72
rounded-full
bg-blue-200/30
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



<motion.div

initial={{
opacity:0,
y:60
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
relative
overflow-hidden
rounded-[35px]
border
border-gray-200
bg-white/70
p-8
shadow-[0_20px_60px_rgba(0,0,0,0.08)]
backdrop-blur-xl
sm:p-12
"


>



{/* Floating Circle */}

<motion.div

animate={{
rotate:360
}}

transition={{
duration:20,
repeat:Infinity,
ease:"linear"
}}

className="
absolute
right-10
top-10
h-20
w-20
rounded-full
border
border-green-200
"
/>




<div
className="
grid
gap-12
lg:grid-cols-2
lg:items-center
"
>





{/* Content */}


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
Get Involved
</p>




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

Together We Can
Create Real Change

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

Your support helps us continue our work
with communities and create meaningful
impact where it matters most.

</p>




<Link

to="/contact"

className="
mt-8
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
hover:scale-105
"

>

Contact Us

<ArrowRight size={18}/>

</Link>


</div>







{/* Contact Cards */}



<div
className="
grid
gap-4
sm:grid-cols-2
"
>




<a
href="#"
className="
group
rounded-2xl
border
border-gray-200
bg-white
p-5
transition
hover:-translate-y-2
hover:shadow-xl
"
>

<Phone
className="
text-green-600
"
size={26}
/>


<h4
className="
mt-3
font-semibold
text-gray-900
"
>
Call Us
</h4>


<p
className="
text-sm
text-gray-500
"
>
+92 XXX XXXXXXX
</p>


</a>





<a

href="https://wa.me/"

className="
group
rounded-2xl
border
border-gray-200
bg-white
p-5
transition
hover:-translate-y-2
hover:shadow-xl
"

>


<MessageCircle
className="
text-green-600
"
size={26}
/>


<h4
className="
mt-3
font-semibold
text-gray-900
"
>
WhatsApp
</h4>


<p
className="
text-sm
text-gray-500
"
>
Chat With Us
</p>


</a>






<a

href="#"

className="
rounded-2xl
border
border-gray-200
bg-white
p-5
transition
hover:-translate-y-2
hover:shadow-xl
"

>


<Mail
className="
text-blue-600
"
size={26}
/>


<h4
className="
mt-3
font-semibold
text-gray-900
"
>
Email
</h4>


<p
className="
text-sm
text-gray-500
"
>
info@example.com
</p>


</a>







<div

className="
rounded-2xl
border
border-gray-200
bg-white
p-5
"

>


<h4
className="
font-semibold
text-gray-900
"
>
Follow Us
</h4>



<div
className="
mt-4
flex
gap-3
"
>


<a
className="
flex
h-10
w-10
items-center
justify-center
rounded-full
bg-gray-100
transition
hover:bg-green-600
hover:text-white
"
>

<FaFacebookF size={18}/>

</a>



<a
className="
flex
h-10
w-10
items-center
justify-center
rounded-full
bg-gray-100
transition
hover:bg-green-600
hover:text-white
"
>

<FaInstagram size={18}/>

</a>



<a
className="
flex
h-10
w-10
items-center
justify-center
rounded-full
bg-gray-100
transition
hover:bg-green-600
hover:text-white
"
>

<FaLinkedinIn size={18}/>

</a>



</div>



</div>



</div>



</div>


</motion.div>


</div>


</section>

)

}
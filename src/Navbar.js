export default function Navbar(){


    return <nav className="nav">

<header className='p-5'>

<div className="container">

   <div className="flex items-center justify-between">

      <div className="">

      <p class="leading-5 font-bold text-[8px]">Craniocervical-Craniosacral-TMJ</p>
      <h2 class="leading-6 font-bold text-[2rem]">CCCS -TMJ</h2>
       <p class="leading-6 font-bold tracking-[.40em] text-[8px] pl-[80px]">INTERNATIONAL</p>
      </div>

      <div class="headerNav hidden md:block">
             <ul class="flex gap-10 font-semibold">
                 <ul class="md:flex gap-10 hidden font-semibold">
                 <li class="hover:border-b-2 hover:border-primary"><a href="/Home">Home</a></li>
                  <li class="hover:border-b-2 hover:border-primary"><a href="/Courses">Courses</a></li>
                     <li class="hover:border-b-2 hover:border-primary"><a href="/News">News</a></li>
                     <li class="hover:border-b-2 hover:border-primary"><a href="/Contacts">Contact</a></li>
                     <li class="hover:border-b-2 hover:border-primary"><a href="/Aboutus">About us </a>
                     </li>
                 </ul>
             </ul>
         </div>




   </div>


   </div>



</header>


    </nav>
}
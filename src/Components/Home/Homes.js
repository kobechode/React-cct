 
import './Home.css';
import { useState } from "react"
import {BsChevronCompactLeft,BsChevronCompactRight} from 'react-icons/bs';






export default function Homes(){
    const  slides = [


            

        {url:'https://github.com/kobechode/CCT/blob/master/dist/img/slider-1.png?raw=true'},
        {url:'https://github.com/kobechode/CCT2/blob/master/dist/img/slider2.png?raw=true'},
        {url:'https://github.com/kobechode/CCT2/blob/master/dist/img/slider3.png?raw=true'},


    ];

    const [currentIndex,setCurrentIndex] = useState(0)
    
    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length -1 : currentIndex - 1;
        setCurrentIndex(newIndex);

    }
    const nextSlide = () => {

       const isLastSlide = currentIndex === slides.length - 1;
       const newIndex = isLastSlide ? 0 : currentIndex + 1 ;
       setCurrentIndex(newIndex);

    }

   
 

    return  (
      
        <div className='Home'>

   
  
  
  
  
  
  
  
  
  
  
       <section className="banner ">
  
          <div className="container">
  
         <div className="banner__content py-20">
  
         <img class="mb-14" src="https://github.com/kobechode/CCT/blob/master/dist/img/bannercms.png?raw=true" alt=""></img>
         
           <p className='mb-16 '>
           Join us for an informative and educational seminar on the <br></br> craniocervical junction.
           Discover the latest advancements and <br></br> techniques in diagnosing and treating disorders related to
           this <br></br> critical area. Don't miss out on the opportunity to network with <br></br> leading experts in
           the field and enhance your knowledge. Register<br></br> now to secure your spot!
  
           </p>
  
           <div class="buttons gap-32">
                      <a class="bg-primary p-3 rounded-full text-black font-semibold" href="about.html">Get a Quote now</a>
  
                      <a class="bg-transparent p-3 rounded-full border border-black text-black font-semibold"
                          href="about.html">Learn More</a>
  
                  </div>
  
  
         </div>
  
  
          </div>
  
  
       </section>
  
        <section className="update py-20 bg-gray-50 shadow-white">
  
          <div className="container">
  
  
          <div className="updates__Wrapper md:grid grid-cols-3 gap-10 ">
  
            <div className="border bg-gray-50 shadow-white py-10 rounded-2xl text-center px-5">
  
            <h1 class="text-2xl font-bold mb-10">Latest News and Update</h1>
  
            <div class=" md:flex gap-4 mb-7">
  
              <img src="https://github.com/kobechode/CCT2/blob/master/dist/img/Doctors1.png?raw=true" alt=""></img>
              <div>
                  <p class="font-bold">Dra. Lolota Florez-Fandalian</p>
                  <p>Lorem ipsum dolor sit amet </p>
              </div>
  
  
              </div>
  
              <p class="break-words mb-14 text-justify text-sm">
                          The craniocervical junction is a crucial area that  connects the skull and neck, supporting
                          the head  and protecting the brain. Stay informed on the  latest developments in
                          diagnosing and treating  disorders related to this area by attending our  upcoming
                          craniocervical seminar
  
                      </p>
  
                      <a class="text-green-600 text-1xl ml-48 font-bold hover:bg-primary hover:rounded-full hover:py-4 hover:text-center" href="courses.html">Read more <i
                      class="fa-sharp fa-solid fa-arrow-right-long text-green-400"></i></a>
            </div>
  
            
            <div class="border bg-gray-50  shadow-white py-10 rounded-2xl text-center px-3">
                      <h1 class="text-2xl font-bold mb-10">Upcoming Events</h1>
  
  
                      <div class="md:flex gap-1 mb-7 ml-10 mt-16">
  
                          <img class=""src="https://github.com/kobechode/CCT/blob/master/dist/img/teeth1.png?raw=true" alt=""></img>
                          <div>
                              <p class=" font-bold tracking-widest md:text-xs mb-1">Craniocervical Craniosacral TMJ-
                                  International Course for BATCH 2 </p>
                              <p class="text-xs">Thursday group will be on <br></br>
                                  November 24, 2022. </p>
                          </div>
  
                      </div>
  
                      <div class="md:flex gap-1 mb-20 ml-10 ">
  
                          <img class="m" src="https://github.com/kobechode/CCT/blob/master/dist/img/teeth2.png?raw=true" alt=""></img>
                          <div>
                              <p class="font-bold tracking-widest text-xs mb-1">Craniocervical Craniosacral TMJ-
                                  International Course for BATCH 3 </p>
                              <p class="text-xs mb-5">Thursday group will be on <br></br>
                                  November 24, 2022. </p>
                          </div>
  
                      </div>
  
                      <a class="text-green-600 text-1xl ml-40 font-bold  hover:bg-primary hover:rounded-full hover:py-4 hover:text-center" href="sdadasd.html">View All Events <i
                              class="fa-sharp fa-solid fa-arrow-right-long text-green-400"></i></a>
                  </div>
  
                  <div
                      class="border  bg-secondary py-10 rounded-2xl border-secondary text-center text-white px-5 ">
                      <h1 class="text-2xl font-bold mb-10">Enroll on our course Now</h1>
  
                      <div class="mb-24 text-justify text-sm ">
  
                          <p>
                              Enroll in our upcoming craniosacral seminar course and gain a deeper understanding of the
                               craniosacral system and its role in maintaining  overall health and wellness. Our
                              experienced  instructors will provide hands-on training and real-world applications
                              to help you enhance  your skills. Don't miss out on the opportunity to  further your
                              education in this exciting field . Register now to secure your spot!
  
                          </p>
  
                      </div>
  
                      <a class="bg-white p-3 rounded-full border border-black text-black font-semibold hover:bg-darkGray" href="sdsadsad.html">Enroll now
                          !</a>
                  </div>
  
  
  
  
  
  
  
          </div>
  
  
  
  
  
  
  
          </div>
          
        </section>
  
  
           <section className="theTeam  py-10">
  
            <div className="container">
  
            <h1 class="text-center font-bold text-2xl mb-10">meet the team</h1>
  
            <div class="theFigure h-[500px] relative mb-[5rem]">
      
                  <div class="item grayscale group hover:grayscale-0">
                      <p class="text-center hidden group-hover:block text-2xl">Doctor Lolita </p>
                      <img src="https://github.com/kobechode/CCT/blob/master/dist/img/Doctor1.png?raw=true" alt=""></img>
                  </div>
      
                  <div class="item grayscale group hover:grayscale-0">
                      <p class="text-center hidden group-hover:block">Doctor Jeffrey </p>
                      <img src="https://github.com/kobechode/CCT/blob/master/dist/img/Doctor2.png?raw=true" alt=""></img>
                  </div>
      
                  <div class="item grayscale group hover:grayscale-0">
                      <p class="text-center hidden group-hover:block">Doctor Ces</p>
                      <img src="https://github.com/kobechode/CCT/blob/master/dist/img/Doctor3.png?raw=true" alt=""></img>
                  </div>
      
              </div>
  
  
              <div class="md:flex  rounded-none border bg-secondary py-11   text-white justify-between -mt-20 px-5  ">
              
              <p class="text-justify  text-lg">Sign up for our craniosacral seminar course and receive comprehensive<br></br> training from experienced instructors in this exciting field</p>
              
              <a class="bg-white p-3 rounded-full text-black font-semibold text-lg" href="sdfsdfsfd.html">Get a Quote now</a>
  
          </div>
  
  
  
  
  
  
  
            </div>
  
  
  
  
  
  
  
  
           </section>
  
  
            <section className="testimonials py-20">
  
  
           
      
            
        
  
  
                <div>
  
                <h1 class="font-bold text-4xl  tracking-widest  mt-14">What our<br></br>customers <br></br>our saying </h1>
                </div>
         
  
         
                <div class="my-slider max-w-[2400px] h-[780px] m-auto py-16 px-4 relative flex  ">

                 <div style={{backgroundImage: `url(${slides[currentIndex].url})`}} className='slider-content' ></div>                    
                   

                     <div className='arrow-left  absolute top-[50%] -translate-x-0  translate-y-[-50%] left-5 text-5xl rounded-full p-2  cursor-pointer '>

                           <BsChevronCompactLeft onClick={prevSlide} size={35} />

                     </div>

                     <div className='arrow-right absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-5xl rounded-full p-2  cursor-pointer '>

                     <BsChevronCompactRight onClick={nextSlide} size={35} />


                     </div>
  
                  </div>
  
  
  
  
  
  
  
             
  
  
  
  
  
  
  
  
            
  
  
  
  
  
  
  
            </section>
  
            <section className="services">
  
  
              <div className="container">
  
               <div className="services__wrapper  md:grid grid-cols-2">
  
  
               <div>
                      <h1 class="font-bold mb-5 text-2xl">Services that we offer.</h1>
                      <p class="tracking-wider text-black  mb-10">Explore the fascinating world of craniocervical and
                          <br></br>craniosacral therapy at our upcoming seminar . Learn from <br></br> experienced instructors and
                          gain hands-on training in <br></br>diagnosing and treating disorders related to the <br></br>
                          craniocervical junction and craniosacral system
                      </p>
  
                      <div class="mb-10 flex gap-4 text-1xl text-[#39B0A8]">
                          <i class="fa-solid fa-phone text-2xl"></i>
                          <p>0967 476 6598</p>
                      </div>
  
                      <div class="flex gap-3 text-1xl text-[#39B0A8]">
                          <i class="fa-solid fa-paper-plane text-2xl "></i>
                          <p >cccstmjinternational@gmail.com</p>
                      </div>
                  </div>
  
                  <div>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/2vMH8lITTCE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                  </div>
  
  
  
  
  
  
               </div>
  
              </div>
            </section>
  
              <section class="mt-10">
        
              <div class="bg-[#39B0A8] md:flex justify-between items-center pt-5 pb-5 md:px-48">
  
                  <div>
                      <p class="w-[60%] text-white font-semibold">
                          Sign up for our craniosacral seminar course and receive comprehensive training from experienced instructors in this exciting field
                      </p>
                  </div>
  
                  <div>
                      <a href="sdsdsad.html" class="bg-white font-bold text-black rounded-xl p-1">Create an appointment</a>
                  </div>
  
              </div>
          </section>
  
  
          <section>
          <div class="container">
              <div class="md:flex justify-center items-center pb-10">
      
                  <div>
                      <div class="pt-10">
                          <p class="leading-5 font-bold text-[8px]">Craniocervical-Craniosacral-TMJ</p>
                          <h2 class="leading-6 font-bold text-[2rem]">CCCS -TMJ</h2>
                          <p class="leading-6 font-bold tracking-[.40em] text-[8px] pl-[80px]">INTERNATIONAL</p>
      
                          <div class="pt-5 w-[65%]">
                              where our passion for craniocervical and craniosacral therapy drives our commitment to providing high-quality education and training. With years of experience and expertise in the field, our team of instructors is dedicated to helping healthcare professionals improve their skills and expand their knowledge.
                          </div>
                      </div>
      
                  </div> 
      
                  <div>
                      <h2 class="pt-5">Follow Us</h2>
                      <div class="pt-5 md:flex">
                          <i class="fa-brands fa-facebook fa-2x pr-3"></i>
                          <i class="fa-brands fa-youtube fa-2x pr-3"></i>
                          <i class="fa-brands fa-instagram fa-2x"></i>
                      </div>
                  </div> 
      
              </div>
          </div>
          </section>
  
  
  
  
  
  
  
  
         
  
  
  
      </div>
    )
}
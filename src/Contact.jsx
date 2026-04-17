import React from 'react';
import emailjs from '@emailjs/browser';
import { Helmet } from "react-helmet-async";
import { useLocation } from 'react-router-dom';
import {useEffect ,useState} from 'react'
function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    // Scroll to the top of the page whenever the route changes
    window.scrollTo(0, 0);
  }, [location]);

  return null; // This component doesn't render anything
}
function Contact(props) {

  const[name,setName]=useState()
  const[email,setEmail]=useState()
  const[message,setMessage]=useState()
  const[phone,setPhone]=useState()
  var serviceID = "service_rrbee09"
  var templateID = "template_5jjim5n"
  
  var userID = "dr8L5wxcbaDVb8vhG"
 const handlesubmit= (e) =>{
  e.preventDefault()
  var templateparams = {
    name:name,
    email:email,
    message:message,
    phone: phone
  }
  emailjs.send(serviceID, templateID, templateparams ,userID).then(
  (response) => {
    console.log('SUCCESS!', response.status, response.text);
    
  alert(name  + " thank you for providing contact info. Our officials will contact you soon")
  },
  (error) => {
    console.log('FAILED...', error);
  },
);
 }

    const lan = props.language
    return (
        <div>
              <ScrollToTop />
              <Helmet>
                    <title>Contact GREENLIVING</title>
                    <meta name="description" content="Contact the leading construction company in cyprus. Contact the engery efficient construction and development company" />
                 <link rel="canonical" href="https://yourwebsite.com/contactus" />
            
                 <meta property="og:title" content="GREENLIVING Construction&Development ltd" />
            <meta property="og:description" content="We build green/energy efficient construction projects. We provide natural sustainable designs with green space in the development area." />
            <meta property="og:image" content="/https://yourwebsite.com/assets/logo_1.png" />
                 
                  </Helmet>
<main class="min-h-screen contactmain" style={{backgroundColor:"white"}}>
<section class="bg-surface-container-low px-8 py-24 md:py-32 flex flex-col items-center">
<div class="max-w-7xl w-full grid grid-cols-1 md:grid-cols-12 gap-12">
<div class="md:col-span-5 flex flex-col justify-center">
    
 

<h1 class="text-display-lg text-2xl md:text-2xl font-bold tracking-tight text-on-surface mb-8 leading-[1.1]" style={{color:"black"}}>
                  <b className='GG'> {
  lan === 'greek'
    ? "GREEN LIVING"
    : lan === 'french'
    ? "GREEN LIVING"
    : lan === 'russian'
    ? "GREEN LIVING"
    : lan === 'hebrew'
    ? "GREEN LIVING"
    : lan === 'english'
    ? "GREEN LIVING"
    : "GREEN LIVING"
}</b> <br /> <br /> {
  lan === 'greek'
    ? "Construction & Development Ltd"
    : lan === 'french'
    ? "Construction & Development Ltd"
    : lan === 'russian'
    ? "Construction & Development Ltd"
    : lan === 'hebrew'
    ?" Construction & Development Ltd"
    : lan === 'english'
    ? "Construction & Development Ltd"
    : "Construction & Development Ltd"
}

                    </h1>
<div class="bg-primary h-1 w-24 mb-8"></div>
<p class="text-body-md text-lg text-on-surface-variant max-w-md leading-relaxed">
  {
  lan === 'greek'
    ? "Δημιουργούμε νέες, σύγχρονες γειτονιές, φέρνοντας νέα ζωή στις πόλεις και προωθώντας έναν ποιοτικό και υγιεινό τρόπο ζωής."
    : lan === 'french'
    ? "Nous créons de nouveaux quartiers modernes, apportant une nouvelle vie aux villes et promouvant un mode de vie sain et de haute qualité."
    : lan === 'russian'
    ? "Мы создаём новые современные районы, вдыхая новую жизнь в города и продвигая качественный и здоровый образ жизни."
    : lan === 'hebrew'
    ? "אנחנו יוצרים שכונות חדשות ומודרניות, מביאים חיים חדשים לערים ומקדמים אורח חיים איכותי ובריא."
    : lan === 'english'
    ? "We create new, modern neighborhoods, bringing fresh life to cities and promoting a high-quality, healthy way of living."
    : "We create new, modern neighborhoods, bringing fresh life to cities and promoting a high-quality, healthy way of living."
} </p>
</div>
<div class="md:col-span-7">
<div class="relative animate forrrm" style={{boxShadow: "0 33px 54px rgba(0,0,0,0.25),  20px 16px 28px rgba(0,0,0,0.2)" }}>
<div class="absolute -top-6 -left-6 w-32 h-32 bg-primary-container/10 -z-10"></div>
<div class="bg-surface-container-lowest p-10 shadow-[0px_60px_60px_0px_rgba(19,27,46,0.04)] border-none ">
<form action="#" class="space-y-8" method="POST"  onSubmit={handlesubmit} >
<div class="grid grid-cols-1 md:grid-cols-2 gap-8">
<div class="space-y-2">
<label class=" text-[18px] font-black tracking-widest text-primary uppercase block" style={{fontFamily:"Manrope"}}>Full Name</label>
<div class="relative bg-surface-container-low">
<input class="w-full bg-transparent border-none border-b-2 border-transparent focus:ring-0 focus:border-primary px-4 py-4 font-body font-medium placeholder:text-on-surface/20 transition-all" name="name" placeholder="IDENTIFY" type="text"
onChange={(e)=>{
  setName(e.target.value)
}}/>
<div class="absolute bottom-0 left-0 w-full h-[2px] bg-outline-variant/20"></div>
</div>
</div>
<div class="space-y-2">
<label class=" text-[18px] font-black tracking-widest text-primary uppercase block" style={{fontFamily:"Manrope"}}>Email Address</label>
<div class="relative bg-surface-container-low">
<input class="w-full bg-transparent border-none border-b-2 border-transparent focus:ring-0 focus:border-primary px-4 py-4 font-body font-medium placeholder:text-on-surface/20 transition-all" name="email" placeholder="SECURE_COMM" type="email"
onChange={(e)=>{
  setEmail(e.target.value)
}}/>
<div class="absolute bottom-0 left-0 w-full h-[2px] bg-outline-variant/20"></div>
</div>
</div>
</div>
<div class="space-y-2">
<label class=" text-[18px] font-black tracking-widest text-primary uppercase block" style={{fontFamily:"Manrope"}}>Telephone / Comms</label>
<div class="relative bg-surface-container-low">
<input class="w-full bg-transparent border-none border-b-2 border-transparent focus:ring-0 focus:border-primary px-4 py-4 font-body font-medium placeholder:text-on-surface/20 transition-all" name="phone" placeholder="+1 (000) 000-0000" type="tel"
onChange={(e)=>{
  setPhone(e.target.value)
}}/>
<div class="absolute bottom-0 left-0 w-full h-[2px] bg-outline-variant/20"></div>
</div>
</div>
<div class="space-y-2">
<label class="text-[18px] font-black tracking-widest text-primary uppercase block" style={{fontFamily:"Manrope"}}>Requirement / Specification</label>
<div class="relative bg-surface-container-low">
<textarea class="w-full bg-transparent border-none border-b-2 border-transparent focus:ring-0 focus:border-primary px-4 py-4 font-body font-medium placeholder:text-on-surface/20 transition-all resize-none" name="message" placeholder="DESCRIBE THE PARAMETERS OF YOUR REQUEST" rows="4"
onChange={(e)=>{
  setMessage(e.target.value)
}}></textarea>
<div class="absolute bottom-0 left-0 w-full h-[2px] bg-outline-variant/20"></div>
</div>
</div>
<button class="w-full bg-primary text-on-primary font-['Manrope'] font-bold uppercase tracking-widest py-6 px-8 hover:bg-primary-container transition-all flex items-center justify-center gap-4 group" type="submit" style={{backgroundColor:"#5fb31b"}}>
                                   CONTACT
                      
</button>
</form>
</div>
</div>
</div>
</div>
</section>
<section class="px-8 py-24 bg-surface max-w-7xl mx-auto w-full" style={{marginTop:"50px"}}>
<div class="grid grid-cols-1 md:grid-cols-4 gap-8" >
<div class="md:col-span-2 bg-surface-container-highest p-12 flex flex-col  min-h-[300px] border-l-4 border-primary" style={{boxShadow: "0 33px 54px rgba(0,0,0,0.25),  20px 16px 28px rgba(0,0,0,0.2)" }}>

                <button className="nav-right" style={{fontSize:"2rem", marginBottom:"10%",color:"white"}}><i class="fa-solid fa-location-dot"></i></button>
<div>
<h3 class="text-2xl font-bold mb-2">ADDRESS</h3>
<p class="text-on-surface-variant uppercase tracking-wider text-sm" style={{fontSize:"1rem"}}> 251 Avenue Makariou, Lakatamia<br/>2311 Nicosia, Cyprus </p>
</div>
</div>
<div class="bg-surface-container p-12 flex flex-col " style={{boxShadow: "0 33px 54px rgba(0,0,0,0.25),  20px 16px 28px rgba(0,0,0,0.2)" }} >
                <button className="nav-right" style={{fontSize:"2rem", marginBottom:"25%"}}><i class="fa-solid fa-phone"></i></button>
<div>
<h3 class="text-xl font-bold mb-2">PHONE</h3>
<p class="text-on-surface-variant text-xs font-bold uppercase tracking-[0.2em]"style={{fontSize:"1rem"}}> (+357) 99440242</p>
</div>
</div>
<div class="bg-primary text-white p-12 flex flex-col " style={{boxShadow: "0 33px 54px rgba(0,0,0,0.25),  20px 16px 28px rgba(0,0,0,0.2)" }}>
                <button className="nav-right" style={{fontSize:"2rem", marginBottom:"25%",color:"white"}}><i class="fa-solid fa-envelope"></i></button>
<div>
<h3 class="text-xl font-bold mb-2" style={{color:"white"}}>EMAIL</h3>
<p class="text-on-surface-variant text-xs font-bold    " style={{fontSize:"1rem"}}>green.living2025 <br />@outlook.com
</p>
</div>
</div>
</div>
</section>
</main>
        </div>
    );
}

export default Contact;
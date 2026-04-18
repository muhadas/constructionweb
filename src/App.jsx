import {useEffect, useState } from 'react'

import emailjs from '@emailjs/browser';
import { useLocation } from 'react-router-dom';
import { useRef } from 'react'
import { Routes, Route ,Link } from "react-router-dom"; 
import Policy from './Policy';
 
import logo1 from "./assets/logo_1.png" 

import logo2 from "./assets/logo_2.png" 
import backgroundVideo from "./assets/background.mp4"; 
import Home from "./Home"
import Certification from './Certification';
import Projects from './Projects'; 
import Organization from './Organization';
import Contact from './Contact';
import Blogs from './Blogs';
import About from './About';
function App() { 
  const [lan,setlan] = useState('greek')
 const menutoogle =()=>{
     document.getElementById("menu").classList.toggle("show");

  }
 const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setShow(true); 
      }
    };


    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const showproject = ()=>{
    document.getElementById('projects').classList.toggle("showbs");
  }
  const showpsidemenu = ()=>{
    document.getElementById('sidemenu').classList.toggle("sidemenushow");
  }


 const location = useLocation();

  useEffect(() => {
    const elements = document.querySelectorAll(".animate");
  const elements2 = document.querySelectorAll(".animateleft");
  
  const elements3 = document.querySelectorAll(".animateright");
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          entry.target.style.transitionDelay = `${i * 0.15}s`;
          entry.target.classList.add("show");
        } else {
          // 🔥 remove when out of view (so it can animate again)
          entry.target.classList.remove("show");
        }
      });
    }, { threshold: 0.2 });

    elements.forEach((el) => observer.observe(el));
    
    elements2.forEach((el) => observer.observe(el));
    
    elements3.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [location]);
  
  

  
  const[name,setName]=useState("not provided")
  const[email,setEmail]=useState()
  const[message,setMessage]=useState("not provided")
  const[phone,setPhone]=useState("not provided")
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
    
  alert("thank you for providing email. Our officials will contact you soon")
  },
  (error) => {
    console.log('FAILED...', error);
  },
);
 }



  return (
    <>
     
           <div className="hero"> 
            <nav className="main">
              <section className='sides' style={{textAlign:'left'}}>
                <button className="nav-left"><Link to="/">{
  lan === 'greek'
    ? "Αρχική"
    : lan === 'french'
    ? "Accueil"
    : lan === 'russian'
    ? "Главная"
    : lan === 'hebrew'
    ? "בית"
    : lan === 'english'
    ? "Home"
    : "Home"
}</Link></button>
              
                

                <button className="nav-left"><Link to="/aboutus">{
  lan === 'greek'
    ? "Σχετικά με εμάς"
    : lan === 'french'
    ? "À propos de nous"
    : lan === 'russian'
    ? "О нас"
    : lan === 'hebrew'
    ? "עלינו"
    : lan === 'english'
    ? "About Us"
    : "About Us"
}</Link></button>
                <button className="nav-left"><Link to="/contactus">{
  lan === 'greek'
    ? "Επικοινωνία"
    : lan === 'french'
    ? "Contact"
    : lan === 'russian'
    ? "Контакты"
    : lan === 'hebrew'
    ? "צור קשר"
    : lan === 'english'
    ? "Contact"
    : "Contact"
}</Link></button>
                <button className="nav-left"><Link to="/blogs">{
  lan === 'greek'
    ? "Ιστολόγια"
    : lan === 'french'
    ? "Blogs"
    : lan === 'russian'
    ? "Блоги"
    : lan === 'hebrew'
    ? "בלוגים"
    : lan === 'english'
    ? "Blogs"
    : "Blogs"
}</Link></button>
                 <button className="nav-left"><Link to="/organization">{
  lan === 'greek'
    ? "Οργάνωση"
    : lan === 'french'
    ? "Organisation"
    : lan === 'russian'
    ? "Организация"
    : lan === 'hebrew'
    ? "ארגון"
    : lan === 'english'
    ? "Organization"
    : "Organization"
}</Link></button>
              </section>
              <section className="center"><img src= "" alt="" />  <button className='ham' onClick={showpsidemenu}><i class="fa-solid fa-bars"></i></button></section>
               <section className='sides' style={{textAlign:'right'}}>
                <button className="nav-left"><Link to="/certification">{
  lan === 'greek'
    ? "Πιστοποίηση"
    : lan === 'french'
    ? "Certification"
    : lan === 'russian'
    ? "Сертификация"
    : lan === 'hebrew'
    ? "הסמכה"
    : lan === 'english'
    ? "Certification"
    : "Certification"
}</Link></button>
                
                 <button className="nav-left"><Link to="/organization">{
  lan === 'greek'
    ? "Η ομάδα μας"
    : lan === 'french'
    ? "Notre équipe"
    : lan === 'russian'
    ? "Наша команда"
    : lan === 'hebrew'
    ? "הצוות שלנו"
    : lan === 'english'
    ? "Our Team"
    : "Our Team"
}</Link></button>
                 <button className="nav-left"><Link to="/projects"  state={{ p: "apartment" }}>{
  lan === 'greek'
    ? "Έργα"
    : lan === 'french'
    ? "Projets"
    : lan === 'russian'
    ? "Проекты"
    : lan === 'hebrew'
    ? "פרויקטים"
    : lan === 'english'
    ? "Projects"
    : "Projects"
}</Link></button>
                <button className="nav-right dropdown-title"
                 onClick={menutoogle}>{lan} ▼    <div id="menu" class="dropdown-menu">
   
    <a href="#" onClick={()=>{setlan('greek') ,menutoogle}} style={{color:"#515151"}}>greek</a>
    <a href="#" onClick={()=>{setlan('english'),menutoogle}} style={{color:"#515151"}}>english</a>
     <a href="#" onClick={()=>{setlan('french'), menutoogle}} style={{color:"#515151"}}>french</a>
    <a href="#" onClick={()=>{setlan('russian'),menutoogle}} style={{color:"#515151"}}>russian</a>
    <a href="#" onClick={()=>{setlan('hebrew'),menutoogle}} style={{color:"#515151"}}>hebrew</a>
  </div></button>
              
              <a href="https://www.facebook.com/profile.php?id=61580999376973"> <button className="nav-right"><i class="fab fa-facebook"></i></button></a> 
               <a href="https://www.tiktok.com/@greenliving3?_r=1&_t=ZS-95dqidJxydj">  <button className="nav-right"><i class="fab fa-tiktok"></i></button></a> 
               <a href="https://www.instagram.com/greenliving.development/">  <button className="nav-right"><i class="fab fa-instagram"></i></button></a> 
               <a href="https://www.facebook.com/profile.php?id=61580999376973">  <button className="nav-right"><i class="fab fa-linkedin"></i></button></a> 
                
               </section>
               
            </nav>
            <nav className="sidemenu" id='sidemenu'>
              <div className="sidetop">
                <section onClick={showpsidemenu}><img src={logo1} alt=""  style={{width:"50px",marginLeft:"15px",marginTop:"15px"}}/></section>
            <section>
            <select
  name="language"
  id="language"
  className="language-select"
  onChange={(e) => {
    setlan(e.target.value);
    showpsidemenu();
  }}
>
  <option value="greek">Greek</option>
  <option value="english">English</option>
  <option value="french">French</option>
  <option value="russian">Russian</option>
  <option value="hebrew">Hebrew</option>
</select>
              </section>
            <section onClick={showpsidemenu}>X</section></div>
            <div className="sidecenter" style={{fontFamily:"'Poppins', sans-serif"}} >
              <li onClick={showpsidemenu} className="sidecenli " style={{fontFamily:"'Poppins', sans-serif"}}><Link to="/">{
  lan === 'greek'
    ? "Αρχική"
    : lan === 'french'
    ? "Accueil"
    : lan === 'russian'
    ? "Главная"
    : lan === 'hebrew'
    ? "בית"
    : lan === 'english'
    ? "Home"
    : "Home"
}</Link></li>
              <hr />
             <li onClick={showpsidemenu} className="sidecenli" style={{fontFamily:"'Poppins', sans-serif"}}><Link to="/aboutus">{
  lan === 'greek'
    ? "Σχετικά με εμάς"
    : lan === 'french'
    ? "À propos de nous"
    : lan === 'russian'
    ? "О нас"
    : lan === 'hebrew'
    ? "עלינו"
    : lan === 'english'
    ? "About Us"
    : "About Us"
}</Link></li>
              <hr />
            <li onClick={showpsidemenu} className="sidecenli" style={{fontFamily:"'Poppins', sans-serif"}}><Link to="/contactus">{
  lan === 'greek'
    ? "Επικοινωνία"
    : lan === 'french'
    ? "Contact"
    : lan === 'russian'
    ? "Контакты"
    : lan === 'hebrew'
    ? "צור קשר"
    : lan === 'english'
    ? "Contact"
    : "Contact"
}</Link></li>
              <hr />
            <li onClick={showpsidemenu} className="sidecenli" style={{fontFamily:"'Poppins', sans-serif"}}><Link to="/blogs">{
  lan === 'greek'
    ? "Ιστολόγια"
    : lan === 'french'
    ? "Blogs"
    : lan === 'russian'
    ? "Блоги"
    : lan === 'hebrew'
    ? "בלוגים"
    : lan === 'english'
    ? "Blogs"
    : "Blogs"
}</Link></li>
              <hr />
           <li onClick={showpsidemenu} className="sidecenli" style={{fontFamily:"'Poppins', sans-serif"}}><Link to="/certification">{
  lan === 'greek'
    ? "Πιστοποίηση"
    : lan === 'french'
    ? "Certification"
    : lan === 'russian'
    ? "Сертификация"
    : lan === 'hebrew'
    ? "הסמכה"
    : lan === 'english'
    ? "Certification"
    : "Certification"
}</Link></li>
              <hr />
               <li onClick={showpsidemenu} className="sidecenli" style={{fontFamily:"'Poppins', sans-serif"}}><Link to="/organization">{
  lan === 'greek'
    ? "Η ομάδα μας"
    : lan === 'french'
    ? "Notre équipe"
    : lan === 'russian'
    ? "Наша команда"
    : lan === 'hebrew'
    ? "הצוות שלנו"
    : lan === 'english'
    ? "Our Team"
    : "Our Team"
}</Link></li>
              <hr />
              
             <li  className="sidecenli" onClick={showproject} style={{fontFamily:"'Poppins', sans-serif"}}>{
  lan === 'greek'
    ? "Έργα"
    : lan === 'french'
    ? "Projets"
    : lan === 'russian'
    ? "Проекты"
    : lan === 'hebrew'
    ? "פרויקטים"
    : lan === 'english'
    ? "Projects"
    : "Projects"
}</li>
            </div>
            <div className="sidebuttom" id='projects' style={{overflow:"hidden" , lineHeight:"30px"}}>
 <li onClick={showpsidemenu} className="sidecenli" style={{fontFamily:"'Poppins', sans-serif",backgroundColor:"rgb(248, 248, 248)"}}><Link to="/projects" state={{ p: "house" }}>{
  lan === 'greek'
    ? "Σπίτι"
    : lan === 'french'
    ? "Maison"
    : lan === 'russian'
    ? "Дом"
    : lan === 'hebrew'
    ? "בית"
    : lan === 'english'
    ? "House"
    : "House"
}</Link></li>
              <hr />
               <li onClick={showpsidemenu} className="sidecenli" style={{fontFamily:"'Poppins', sans-serif",backgroundColor:"rgb(248, 248, 248)"}}><Link to="/projects" state={{ p: "apartment" }}>{
  lan === 'greek'
    ? "Διαμερίσματα"
    : lan === 'french'
    ? "Appartements"
    : lan === 'russian'
    ? "Квартиры"
    : lan === 'hebrew'
    ? "דירות"
    : lan === 'english'
    ? "Apartments"
    : "Apartments"
}</Link></li>
              <hr />
               <li onClick={showpsidemenu} className="sidecenli" style={{fontFamily:"'Poppins', sans-serif",backgroundColor:"rgb(248, 248, 248)"}}><Link to="/projects" state={{ p: "construction" }}>{
  lan === 'greek'
    ? "Εργοτάξιο"
    : lan === 'french'
    ? "Chantier"
    : lan === 'russian'
    ? "Строительная площадка"
    : lan === 'hebrew'
    ? "אתר בנייה"
    : lan === 'english'
    ? "Construction site"
    : "Construction site"
}</Link></li>
              <hr />

            </div>
            </nav>
            <video autoPlay muted  loop src={backgroundVideo} className='backgroundvideo'/>
             
               <div className={show ? "overshow" : "overdiv"}>
                 <section className="over"><img src={logo1} alt="" /></section>
            <section className="over" >
              
            {lan === 'greek' ? 
  <h2>Προσπαθούμε <span style={{color:"#74CA2D"}}>όσο το δυνατόν </span>να αυξήσουμε</h2> 
: lan === 'french' ? 
  <h2>Nous <span style={{color:"#74CA2D"}}>essayons d’augmenter</span> autant que possible</h2>
: lan === 'russian' ? 
  <h2>Мы <span style={{color:"#74CA2D"}}>стараемся увеличить</span> насколько это возможно</h2> 
: lan === 'english' ? 
  <h2>We <span style={{color:"#74CA2D"}}>try to increase</span> as much as possible</h2> 
: lan === 'hebrew' ? 
  <h2>אנחנו <span style={{color:"#74CA2D"}}>מנסים להגדיל</span> ככל האפשר</h2>
: "home"} <br />
            
           <h1 className='theg' >
        {lan === 'greek' ? "το πράσινο στις πόλεις " 
: lan === 'french' ? "LES ESPACES VERTS DANS LES VILLES"
: lan === 'russian' ? "ЗЕЛЁНЫЕ ЗОНЫ В ГОРОДАХ" 
: lan === 'english' ? "THE GREEN SPACES IN THE CITIES" 
: lan === 'hebrew' ? "השטחים הירוקים בערים"
: "home"}
           
</h1>  <a href="#how"><button className='btg'>{
  lan === 'greek'
    ? "Πώς το κάνουμε;"
    : lan === 'french'
    ? "Comment faisons-nous ?"
    : lan === 'russian'
    ? "Как мы это делаем?"
    : lan === 'hebrew'
    ? "איך אנחנו עושים את זה?"
    : lan === 'english'
    ? "How we do?"
    : "How we do?"
}</button></a>
           </section>
           
            </div>

            <div className={show ? "frontthevideoshow" : "frontthevideo"}>
            
            </div>
          
           </div>
           <Routes>
            <Route path="/" element={<Home language ={lan}/>}  /> 
                  <Route path="/aboutus" element={<About language ={lan}/>}  />
                     <Route path="/terms&policy" element={<Policy language ={lan}/>}  />
                        <Route path="/blogs" element={<Blogs language ={lan}/>}  />
                           <Route path="/organization" element={<Organization language ={lan}/>}  />
                              <Route path="/certification" element={<Certification language ={lan}/>}  />
                                 <Route path="/projects" element={<Projects language ={lan} />}  />
                                  <Route path="/contactus" element={<Contact language ={lan}/>}  />
           </Routes>
          
           
<footer class="footer bg-[#111317] dark:bg-[#0c0e12] font-manrope tracking-tight text-body-lg rounded-none w-full border-t border-[#414753]/15"  className='fet'>
<div class="grid grid-cols-1 md:grid-cols-[60%_40%] gap-0 max-w-full mx-auto">
<div class="flex flex-col border-r border-[#414753]/15">
<div class="h-24 px-12 flex items-center justify-between border-b border-[#414753]/15">
<span class="text-2xl font-bold tracking-tighter text-[white]">{
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
}</span>
<div class="flex items-center gap-6">


      <a href="https://www.facebook.com/profile.php?id=61580999376973">       <button className="nav-right" style={{fontSize:"1.5rem", color:"white"}}><i class="fab fa-facebook"></i></button></a> 
                <a href="https://www.tiktok.com/@greenliving3?_r=1&_t=ZS-95dqidJxydj">        <button className="nav-right" style={{fontSize:"1.5rem", color:"white"}} ><i class="fab fa-tiktok"></i></button></a> 
                <a href="https://www.instagram.com/greenliving.development/">        <button className="nav-right" style={{fontSize:"1.5rem", color:"white"}}><i class="fab fa-instagram"></i></button></a> 
                 <a href="https://www.facebook.com/profile.php?id=61580999376973">       <button className="nav-right" style={{fontSize:"1.5rem", color:"white"}}><i class="fab fa-linkedin"></i></button></a> 
                
</div>
</div>
<div class="flex-grow p-12 space-y-8 bg-surface-container-low/30 backdrop-blur-md">
<div class="grid grid-cols-1 md:grid-cols-2 gap-12">
<div>
<p class="text-tertiary label-md   tracking-widest mb-4" style={{textAlign:"left",paddingLeft:"4%"}}>{
  lan === 'greek'
    ? "Επικοινωνία μέσω"
    : lan === 'french'
    ? "Contact via"
    : lan === 'russian'
    ? "Связаться через"
    : lan === 'hebrew'
    ? "צור קשר דרך"
    : lan === 'english'
    ? "Contact through"
    : "Contact through"
}</p>
<p class="text-on-surface leading-relaxed" style={{color:"white"}}>green.living2025@outlook.com
</p>
<p class="text-on-surface leading-relaxed"  style={{color:"white"}}>(+357) 99440242
</p>
</div>
<div>
<p class="text-tertiary label-md   tracking-widest mb-4" style={{textAlign:"left",paddingLeft:"4%"}}>{
  lan === 'greek'
    ? "Διεύθυνση"
    : lan === 'french'
    ? "Adresse"
    : lan === 'russian'
    ? "Адрес"
    : lan === 'hebrew'
    ? "כתובת"
    : lan === 'english'
    ? "Address"
    : "Address"
}</p>
<p class="text-on-surface leading-relaxed"  style={{color:"white"}}>
                            251 Avenue Makariou, Lakatamia, <br/>
                           Nicosia, Cyprus 
                            </p>
</div>
</div>
</div>
<div class="h-24 px-12 flex items-center border-t border-[#414753]/15 bg-surface-container-low" style={{backgroundColor:"#74CA2D"}}>
<nav class="flex items-center gap-1">
  <Link to="/projects">
<a class="text-[white] font-semibold hover:text-[#ffb695] transition-colors duration-300" href="#">{
  lan === 'greek'
    ? "Έργα"
    : lan === 'french'
    ? "Projets"
    : lan === 'russian'
    ? "Проекты"
    : lan === 'hebrew'
    ? "פרויקטים"
    : lan === 'english'
    ? "Projects"
    : "Projects"
}</a></Link>
  <Link to="/aboutus">
<a class="text-[white]/70 hover:text-[#ffb695] transition-colors duration-300" href="#">{
  lan === 'greek'
    ? "Σχετικά με εμάς"
    : lan === 'french'
    ? "À propos de nous"
    : lan === 'russian'
    ? "О нас"
    : lan === 'hebrew'
    ? "עלינו"
    : lan === 'english'
    ? "About us"
    : "About us"
}</a></Link>

  <Link to="/certification">
<a class="text-[white]/70 hover:text-[#ffb695] transition-colors duration-300" href="#">{
  lan === 'greek'
    ? "Όροι & Πολιτική"
    : lan === 'french'
    ? "Conditions & Politique"
    : lan === 'russian'
    ? "Условия и политика"
    : lan === 'hebrew'
    ? "תנאים ומדיניות"
    : lan === 'english'
    ? "Terms & Policy"
    : "Terms & Policy"
}</a></Link>

  <Link to="/contactus">
<a class="text-[white]/70 hover:text-[#ffb695] transition-colors duration-300" href="#">{
  lan === 'greek'
    ? "Επικοινωνία"
    : lan === 'french'
    ? "Contact"
    : lan === 'russian'
    ? "Контакты"
    : lan === 'hebrew'
    ? "צור קשר"
    : lan === 'english'
    ? "Contact"
    : "Contact"
}</a></Link>
</nav>
</div>
</div>
<div class="p-16 flex flex-col justify-center bg-surface-container-low/50 relative overflow-hidden">
<div class="absolute inset-0 opacity-5 pointer-events-none">
<div class="absolute top-0 right-0 w-64 h-64 border-t border-r border-primary"></div>
</div>
<div class="relative z-10">
<h2 class="text-2xl font-extrabold tracking-tighter text-[white] mb-2" style={{textAlign:"left",paddingLeft:"4%"}}>{
  lan === 'greek'
    ? "Επικοινωνήστε μαζί μας"
    : lan === 'french'
    ? "Contactez-nous"
    : lan === 'russian'
    ? "Свяжитесь с нами"
    : lan === 'hebrew'
    ? "צור קשר איתנו"
    : lan === 'english'
    ? "Contact us"
    : "Contact us"
}</h2>
<p class="text-[#b0c7f9]/70 mb-8 max-w-xs" style={{textAlign:"left" ,color:"white"}}>{
  lan === 'greek'
    ? "«Συμπληρώστε το email σας και θα επικοινωνήσουμε άμεσα μαζί σας ή επιλέξτε ένα από τα εικονίδια κοινωνικών δικτύων.»"
    : lan === 'french'
    ? "Entrez votre e-mail ici, nous vous contacterons bientôt. Ou cliquez sur les icônes sociales"
    : lan === 'russian'
    ? "Оставьте ваш email здесь, мы скоро с вами свяжемся. Или нажмите на иконки соцсетей"
    : lan === 'hebrew'
    ? "הזן את האימייל שלך כאן, ניצור איתך קשר בקרוב. או לחץ על אייקוני הרשתות החברתיות"
    : lan === 'english'
    ? "Provide your email here, we will contact you soon. Or click on social icons"
    : "Provide your email here, we will contact you soon. Or click on social icons"
}.</p>
<form class="space-y-4">
<div class="group relative">
<input class="w-full bg-surface-container-highest border-none focus:ring-1 focus:ring-primary text-on-surface px-6 py-4 rounded-none placeholder:text-outline/50 transition-all duration-300" placeholder="Your email" type="email" style={{backgroundColor:"white"}} onChange={(e)=>{
  setEmail(e.target.value)
}}/>
</div>
<button class="w-full bg-green  from-primary to-primary-container text-on-primary font-bold py-4 px-8 rounded-none flex items-center justify-between group hover:brightness-110 transition-all duration-300" type="submit" onClick={handlesubmit}>
<span>SUBMIT </span>
<span class="material-symbols-outlined transition-transform duration-300 group-hover:translate-x-2" data-icon="arrow_right_alt">arrow_right_alt</span>
</button>
</form>
<p class="mt-12 text-xs text-outline font-medium tracking-wide">
                       {
  lan === 'greek'
    ? "© 2026 GREEN LIVING. ΜΕΤΑ ΤΗΝ ΕΠΙΦΥΛΑΞΗ ΠΑΝΤΟΣ ΔΙΚΑΙΩΜΑΤΟΣ."
    : lan === 'french'
    ? "© 2026 GREEN LIVING. TOUS DROITS RÉSERVÉS."
    : lan === 'russian'
    ? "© 2026 GREEN LIVING. ВСЕ ПРАВА ЗАЩИЩЕНЫ."
    : lan === 'hebrew'
    ? "© 2026 GREEN LIVING. כל הזכויות שמורות."
    : lan === 'english'
    ? "© 2026 GREEN LIVING. ALL RIGHTS RESERVED."
    : "© 2026 GREEN LIVING. ALL RIGHTS RESERVED."
}
                    </p>
</div>
</div>
</div>
</footer>
 
    </>
  )
}

export default App

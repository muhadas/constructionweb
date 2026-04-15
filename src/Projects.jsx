import React from 'react';
import { useState } from 'react';

import { Helmet } from "react-helmet-async";
import {useEffect } from 'react'
import { useLocation } from "react-router-dom";
import apart1 from "./assets/image of a modern apartment 1.jpg"
import apart2 from "./assets/image of a modern apartment 2.jpg"
import apart3 from "./assets/image of a modern apartment 3.jpg"
import apart4 from "./assets/image of a modern apartment 4.jpg"
import apart5 from "./assets/image of a modern apartment 5.jpg"
import apart6 from "./assets/image of a modern apartment 6.jpg"
import apart7 from "./assets/image of a modern apartment balcony 7.jpg"
import apart8 from "./assets/image of a modern apartment balcony 8.jpg"
import apart9 from "./assets/image of a modern apartment balcony  9.jpg"
import apart10 from "./assets/image of a modern apartment balcony  10.jpg"
import apart11 from "./assets/image of a modern apartment balcony  11.jpg"
import apart12 from "./assets/image of a modern apartment balcony 12.jpg"
import house1 from "./assets/house with stone exterior 1.jpg"
import house2 from "./assets/house with stone exterior 2.jpg"
import house3 from "./assets/house with stone exterior 3.jpg"
import house4 from "./assets/house with stone exterior 4.jpg"
import house5 from "./assets/modern house interior 10.jpg"
import house6 from "./assets/modern house interior 11.jpg"
import house7 from "./assets/modern house interior 12.jpg"
import house8 from "./assets/REFLET HOUSE.jpg"
import house9 from "./assets/Modern house design 6.jpg"
import house10 from "./assets/house with stone exterior 5.jpg"
import house11 from "./assets/Modern house design 7.jpg"
import house12 from "./assets/TWO HOUSE IN FRONT HPL  8.jpg"

import construction1 from "./assets/construction site 1.jpg"
import construction2 from "./assets/construction site 2.jpg"
import construction3 from "./assets/construction site 3.jpg"
import construction4 from "./assets/construction site 4.jpg"
import construction5 from "./assets/construction site 5.jpg"
import construction6 from "./assets/construction site 6.jpg"
import construction7 from "./assets/construction site 7.jpg"
import construction8 from "./assets/construction site 8.jpg"
import construction9 from "./assets/construction site 9.jpg"
import construction10 from "./assets/construction site 10.jpg"
import construction11 from "./assets/construction site 11.jpg"
import construction12 from "./assets/construction site 12.jpg"

function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    // Scroll to the top of the page whenever the route changes
    window.scrollTo(0, 0);
  }, [location]);

  return null; // This component doesn't render anything
}


function Projects(props) {
    const lan = props.language
    const location = useLocation();
  const { p,  } = location.state || {}; 
    const [project,setProject] = useState(p)
    return (
        <div>

            <Helmet>
                    <title>{project} Development Projects</title>
                    <meta name="description" content="We are showcasing our developed projects. Including houses and apartments. Also showing how we maintain quality during development of the construction" />
                 <link rel="canonical" href="https://yourwebsite.com/projects" />
            
                 <meta property="og:title" content="GREENLIVING Construction&Development ltd" />
            <meta property="og:description" content="We build green/energy efficient construction projects. We provide natural sustainable designs with green space in the development area." />
            <meta property="og:image" content="/https://yourwebsite.com/assets/logo_1.png" />
                 
                  </Helmet>
              <ScrollToTop />
<main class="w-full"> 
<section class="w-full bg-surface-container-lowest py-24 px-8 md:px-16 flex flex-col md:flex-row items-center gap-0 overflow-hidden  arc" style={{backgroundColor:"white"}}>
<div class="flex-1 max-w-2xl">
<div class="mb-2" style={{textAlign:"left"}}>
<span class="bg-primary text-on-primary px-3 py-1 font-label text-[10px] font-bold tracking-[0.2em] uppercase" style={{textAlign:"left"}}>PROJECTS</span>
</div>
<h2 class=" text-2xl md:text-2xl font-bold  tracking-tighter mb-8 leading-tight" style={{textAlign:"left",color:"#74CA2D"}}>
          {
  lan === 'greek'
    ? "ΤΙ ΠΡΟΣΕΧΟΥΜΕ ΣΤΑ ΕΡΓΑ ΜΑΣ"
    : lan === 'french'
    ? "Conception et mise en œuvre"
    : lan === 'russian'
    ? "Проектирование и реализация"
    : lan === 'hebrew'
    ? "עיצוב ויישום"
    : lan === 'english'
    ? "Design and Implementation"
    : "home"
} 
              </h2>

            {
  lan === 'greek' ? (
    <p class="font-body text-lg text-on-surface-variant mb-10 leading-relaxed max-w-xl">
      Στο πλαίσιο του σχεδιασμού και της υλοποίησης του παρόντος οικοδομικού έργου,
      δόθηκε ιδιαίτερη έμφαση στην ενεργειακή απόδοση, στην περιβαλλοντική αναβάθμιση
      και στην ασφάλεια του εργοταξίου. Η επιλογή των υλικών και των κατασκευαστικών
      μεθόδων έγινε σύμφωνα με τις απαιτήσεις του Κανονισμού Ενεργειακής Απόδοσης Κτιρίων
      και των σύγχρονων τεχνικών προδιαγραφών.
    </p>
  ) : lan === 'french' ? (
    <p class="font-body text-lg text-on-surface-variant mb-10 leading-relaxed max-w-xl">
      Dans le cadre de la conception et de la réalisation de ce projet de construction,
      une attention particulière a été accordée à l'efficacité énergétique, à l'amélioration
      environnementale et à la sécurité du chantier. <br /><br />
      Le choix des matériaux et des méthodes de construction a été effectué conformément
      aux exigences du Règlement sur la performance énergétique des bâtiments et aux
      spécifications techniques modernes.
    </p>
  ) : lan === 'russian' ? (
    <p class="font-body text-lg text-on-surface-variant mb-10 leading-relaxed max-w-xl">
      В рамках проектирования и реализации данного строительного проекта особое внимание
      было уделено энергоэффективности, экологическому улучшению и безопасности строительной
      площадки. <br /><br />
      Выбор материалов и строительных методов осуществлялся в соответствии с требованиями
      нормативов по энергетической эффективности зданий и современными техническими стандартами.
    </p>
  ) : lan === 'hebrew' ? (
    <p class="font-body text-lg text-on-surface-variant mb-10 leading-relaxed max-w-xl">
      במסגרת התכנון והביצוע של פרויקט הבנייה הנוכחי, הושם דגש מיוחד על יעילות אנרגטית,
      שיפור סביבתי ובטיחות אתר הבנייה. <br /><br />
      בחירת החומרים ושיטות הבנייה בוצעה בהתאם לדרישות תקנות ביצועי האנרגיה של מבנים
      ולתקנים הטכניים המודרניים.
    </p>
  ) : lan === 'english' ? (
    <p class="font-body text-lg text-on-surface-variant mb-10 leading-relaxed max-w-xl">
      In the design and execution of this construction project, special emphasis was placed
      on energy efficiency, environmental enhancement, and construction site safety.
      <br /><br />
      The selection of materials and construction methods was carried out in accordance with
      the requirements of the Building Energy Performance Regulation and modern technical specifications.
    </p>
  ) : (
    "home"
  )
}
</div> 
<div class="flex-1 flex justify-center items-center" style={{paddingTop:"40px"}}>
<div class="gap-3 items-end" className='mono'> 
<button class=" w-70 h-40 bg-primary text-on-primary flex flex-col items-center justify-center gap-2 tilt-left hover:scale-105 transition-transform mb-8 monob" 
onClick={()=>{
    setProject('house')
}}   style={project === 'house' ? { backgroundColor: "black" ,transform:'rotate(0deg)' } : {transform:'rotate(0deg)'}} >
<i class="fas fa-home"></i>
<span class="font-label text-[10px] font-bold tracking-widest uppercase">Houses</span>
</button>
<button class=" w-70 h-40 bg-primary text-on-primary flex flex-col items-center justify-center gap-2 tilt-left hover:scale-105 transition-transform mb-8 monob" 
onClick={()=>{
    setProject('apartment')
}}   style={project === 'apartment' ? { backgroundColor: "black" ,transform:'rotate(0deg)' } : {transform:'rotate(0deg)'}} >
<i class="fas fa-building"></i>
<span class="font-label text-[10px] font-bold tracking-widest uppercase">Apartment</span>
</button>
<button class=" w-70 h-40 bg-primary text-on-primary flex flex-col items-center justify-center gap-2 tilt-left hover:scale-105 transition-transform mb-8 monob" 
onClick={()=>{
    setProject('construction')
}}   style={project === 'construction' ? { backgroundColor: "black" ,transform:'rotate(0deg)' } : {transform:'rotate(0deg)'}} >
<i class="fas fa-hard-hat"></i>
<span class="font-label text-[10px] font-bold tracking-widest uppercase">Construction Site</span>
</button>
</div>
</div>
</section> 
<section class="w-full bg-surface-container-low py-20 px-8 ro" style={{backgroundColor:"#fffffff7"}}>
<div class="max-w-7xl mx-auto">
<div class="mb-12 border-l-8 border-primary pl-6">
<h3 class="font-headline text-2xl font-bold tracking-tighter uppercase text-primary" style={{color:"black",textAlign:"left"}}>{
  lan === 'greek'
    ? "Γκαλερί προβολής"
    : lan === 'french'
    ? "Galerie de présentation"
    : lan === 'russian'
    ? "Галерея проектов"
    : lan === 'hebrew'
    ? "גלריית הצגת פרויקטים"
    : lan === 'english'
    ? "Gallery showcasing"
    : "Gallery showcasing"
}</h3>
<p class="font-body text-sm text-on-surface-variant"  style={{color:"black",textAlign:"left"}}>our {project} projects.</p>
</div>
<div class="grid grid-cols-1 md:grid-cols-3 gap-1 tyu" style={{width:"99%"}}>


<div class="animate aspect-square bg-on-surface relative group overflow-hidden">
<img class="w-full h-full object-cover 0 group-hover:opacity-100 transition-opacity duration-500"alt={`Image of a modern green eco-friendly ${project}`}
  loading="lazy" src={project === 'apartment' ? apart1 : project === 'construction' ? construction1 : house1}  style={{height:'270px'}}/>
<div class="absolute inset-0 bg-primary/20 mix-blend-multiply"></div>
<div class="absolute bottom-4 left-4"> 
</div>
</div>

<div class="animate aspect-square bg-on-surface relative group overflow-hidden">
<img class="w-full h-full object-cover 0 group-hover:opacity-100 transition-opacity duration-500" alt={`Image of a modern green eco-friendly ${project}`}
  loading="lazy"  src={project === 'apartment' ? apart2 : project === 'construction' ? construction2 : house2}  style={{height:'270px'}}/>
<div class="absolute inset-0 bg-primary/20 mix-blend-multiply"></div>
<div class="absolute bottom-4 left-4"> 
</div>
</div>

<div class="animate aspect-square bg-on-surface relative group overflow-hidden">
<img class="w-full h-full object-cover 0 group-hover:opacity-100 transition-opacity duration-500" alt={`Image of a modern green eco-friendly ${project}`}
  loading="lazy"  src={project === 'apartment' ? apart3 : project === 'construction' ? construction3 : house3}  style={{height:'270px'}}/>
<div class="absolute inset-0 bg-primary/20 mix-blend-multiply"></div>
<div class="absolute bottom-4 left-4"> 
</div>
</div>
<div class="animate aspect-square bg-on-surface relative group overflow-hidden">
<img class="w-full h-full object-cover 0 group-hover:opacity-100 transition-opacity duration-500" alt={`Image of a modern green eco-friendly ${project}`}
  loading="lazy"  src={project === 'apartment' ? apart4 : project === 'construction' ? construction4 : house4}  style={{height:'270px'}}/>
<div class="absolute inset-0 bg-primary/20 mix-blend-multiply"></div>
<div class="absolute bottom-4 left-4"> 
</div>
</div>
<div class="animate aspect-square bg-on-surface relative group overflow-hidden">
<img class="w-full h-full object-cover 0 group-hover:opacity-100 transition-opacity duration-500" alt={`Image of a modern green eco-friendly ${project}`}
  loading="lazy"  src={project === 'apartment' ? apart5 : project === 'construction' ? construction5 : house5}  style={{height:'270px'}}/>
<div class="absolute inset-0 bg-primary/20 mix-blend-multiply"></div>
<div class="absolute bottom-4 left-4"> 
</div>
</div>
<div class="animate aspect-square bg-on-surface relative group overflow-hidden">
<img class="w-full h-full object-cover 0 group-hover:opacity-100 transition-opacity duration-500" alt={`Image of a modern green eco-friendly ${project}`}
  loading="lazy"  src={project === 'apartment' ? apart6 : project === 'construction' ? construction6 : house6}  style={{height:'270px'}}/>
<div class="absolute inset-0 bg-primary/20 mix-blend-multiply"></div>
<div class="absolute bottom-4 left-4"> 
</div>
</div>
<div class="animate aspect-square bg-on-surface relative group overflow-hidden">
<img class="w-full h-full object-cover 0 group-hover:opacity-100 transition-opacity duration-500" alt={`Image of a modern green eco-friendly ${project}`}
  loading="lazy"  src={project === 'apartment' ? apart7 : project === 'construction' ? construction7 : house7}  style={{height:'270px'}}/>
<div class="absolute inset-0 bg-primary/20 mix-blend-multiply"></div>
<div class="absolute bottom-4 left-4"> 
</div>
</div>
<div class="animate aspect-square bg-on-surface relative group overflow-hidden">
<img class="w-full h-full object-cover 0 group-hover:opacity-100 transition-opacity duration-500" alt={`Image of a modern green eco-friendly ${project}`}
  loading="lazy"  src={project === 'apartment' ? apart8 : project === 'construction' ? construction8 : house8}  style={{height:'270px'}}/>
<div class="absolute inset-0 bg-primary/20 mix-blend-multiply"></div>
<div class="absolute bottom-4 left-4"> 
</div>
</div>
<div class="animate aspect-square bg-on-surface relative group overflow-hidden">
<img class="w-full h-full object-cover 0 group-hover:opacity-100 transition-opacity duration-500" alt={`Image of a modern green eco-friendly ${project}`}
  loading="lazy"  src={project === 'apartment' ? apart9 : project === 'construction' ? construction9 : house9}  style={{height:'270px'}}/>
<div class="absolute inset-0 bg-primary/20 mix-blend-multiply"></div>
<div class="absolute bottom-4 left-4"> 
</div>
</div>
<div class="animate aspect-square bg-on-surface relative group overflow-hidden">
<img class="w-full h-full object-cover 0 group-hover:opacity-100 transition-opacity duration-500" alt={`Image of a modern green eco-friendly ${project}`}
  loading="lazy"  src={project === 'apartment' ? apart10 : project === 'construction' ? construction10 : house10}  style={{height:'270px'}}/>
<div class="absolute inset-0 bg-primary/20 mix-blend-multiply"></div>
<div class="absolute bottom-4 left-4"> 
</div>
</div>
<div class="animate aspect-square bg-on-surface relative group overflow-hidden">
<img class="w-full h-full object-cover 0 group-hover:opacity-100 transition-opacity duration-500" alt={`Image of a modern green eco-friendly ${project}`}
  loading="lazy"  src={project === 'apartment' ? apart11 : project === 'construction' ? construction12 : house12}  style={{height:'270px'}}/>
<div class="absolute inset-0 bg-primary/20 mix-blend-multiply"></div>
<div class="absolute bottom-4 left-4"> 
</div>
</div>
<div class="animate aspect-square bg-on-surface relative group overflow-hidden">
<img class="w-full h-full object-cover 0 group-hover:opacity-100 transition-opacity duration-500" dalt={`Image of a modern green eco-friendly ${project}`}
  loading="lazy"  src={project === 'apartment' ? apart12 : project === 'construction' ? construction11 : house11}  style={{height:'270px'}}/>
<div class="absolute inset-0 bg-primary/20 mix-blend-multiply"></div>
<div class="absolute bottom-4 left-4"> 
</div>
</div>
</div>
</div>
</section> 
</main>
        </div>
    );
}

export default Projects;
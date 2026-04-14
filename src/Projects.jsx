import React from 'react';
import { useState } from 'react';

import {useEffect } from 'react'
import { useLocation } from "react-router-dom";
import apart1 from "./assets/apartment11.jpg"
import apart2 from "./assets/apartment2.jpg"
import apart3 from "./assets/apartment3.jpg"
import apart4 from "./assets/apartment4.jpg"
import apart5 from "./assets/apartment5.jpg"
import apart6 from "./assets/Living _ Terrace (1)-1 ME LOGO.jpg"
import apart7 from "./assets/livingterace1.jpg"
import apart8 from "./assets/livingterace2.jpg"
import apart9 from "./assets/livingterace3.jpg"
import apart10 from "./assets/livingterace4.jpg"
import apart11 from "./assets/livingterace5.jpg"
import apart12 from "./assets/livingterace6.jpg"
import house1 from "./assets/housestone1.jpg"
import house2 from "./assets/houseston2.jpg"
import house3 from "./assets/housestone3.jpg"
import house4 from "./assets/housestone4.jpg"
import house5 from "./assets/househpl4.jfif"
import house6 from "./assets/HOUSE WITH STONE 3 WITH LOGO.jpg"
import house7 from "./assets/HOUSE WITH STONE TWO LOGO.jpg"
import house8 from "./assets/REFLET HOUSE.jpg"
import house9 from "./assets/househpl3.jpg"
import house10 from "./assets/housestone5.jpg"
import house11 from "./assets/househpl5.jpg"
import house12 from "./assets/HOUSE WITH HPL AND LOGO.jpg"

import construction1 from "./assets/househpl1.jpg"
import construction2 from "./assets/househpl2.jpg"
import construction3 from "./assets/aa.jpg"
import construction4 from "./assets/i.jpg"
import construction5 from "./assets/j.jpg"
import construction6 from "./assets/k.jpg"
import construction7 from "./assets/IMG_20230321_104615 (1).jpg"
import construction8 from "./assets/IMG_20230222_092448.jpg"
import construction9 from "./assets/IMG_20230321_111322 (1).jpg"
import construction10 from "./assets/re.jpg"
import construction11 from "./assets/m.jpg"
import construction12 from "./assets/Slide3Z.jpg"

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
              <ScrollToTop />
<main class="w-full"> 
<section class="w-full bg-surface-container-lowest py-24 px-8 md:px-16 flex flex-col md:flex-row items-center gap-16 overflow-hidden  arc" style={{backgroundColor:"white"}}>
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
<img class="w-full h-full object-cover 0 group-hover:opacity-100 transition-opacity duration-500" data-alt="Monolithic skyscraper against a dark moody sky with dramatic architectural lines and deep shadows" src={project === 'apartment' ? apart1 : project === 'construction' ? construction1 : house1}  style={{height:'270px'}}/>
<div class="absolute inset-0 bg-primary/20 mix-blend-multiply"></div>
<div class="absolute bottom-4 left-4"> 
</div>
</div>

<div class="animate aspect-square bg-on-surface relative group overflow-hidden">
<img class="w-full h-full object-cover 0 group-hover:opacity-100 transition-opacity duration-500" data-alt="Monolithic skyscraper against a dark moody sky with dramatic architectural lines and deep shadows" src={project === 'apartment' ? apart2 : project === 'construction' ? construction2 : house2}  style={{height:'270px'}}/>
<div class="absolute inset-0 bg-primary/20 mix-blend-multiply"></div>
<div class="absolute bottom-4 left-4"> 
</div>
</div>

<div class="animate aspect-square bg-on-surface relative group overflow-hidden">
<img class="w-full h-full object-cover 0 group-hover:opacity-100 transition-opacity duration-500" data-alt="Monolithic skyscraper against a dark moody sky with dramatic architectural lines and deep shadows" src={project === 'apartment' ? apart3 : project === 'construction' ? construction3 : house3}  style={{height:'270px'}}/>
<div class="absolute inset-0 bg-primary/20 mix-blend-multiply"></div>
<div class="absolute bottom-4 left-4"> 
</div>
</div>
<div class="animate aspect-square bg-on-surface relative group overflow-hidden">
<img class="w-full h-full object-cover 0 group-hover:opacity-100 transition-opacity duration-500" data-alt="Monolithic skyscraper against a dark moody sky with dramatic architectural lines and deep shadows" src={project === 'apartment' ? apart4 : project === 'construction' ? construction4 : house4}  style={{height:'270px'}}/>
<div class="absolute inset-0 bg-primary/20 mix-blend-multiply"></div>
<div class="absolute bottom-4 left-4"> 
</div>
</div>
<div class="animate aspect-square bg-on-surface relative group overflow-hidden">
<img class="w-full h-full object-cover 0 group-hover:opacity-100 transition-opacity duration-500" data-alt="Monolithic skyscraper against a dark moody sky with dramatic architectural lines and deep shadows" src={project === 'apartment' ? apart5 : project === 'construction' ? construction5 : house5}  style={{height:'270px'}}/>
<div class="absolute inset-0 bg-primary/20 mix-blend-multiply"></div>
<div class="absolute bottom-4 left-4"> 
</div>
</div>
<div class="animate aspect-square bg-on-surface relative group overflow-hidden">
<img class="w-full h-full object-cover 0 group-hover:opacity-100 transition-opacity duration-500" data-alt="Monolithic skyscraper against a dark moody sky with dramatic architectural lines and deep shadows" src={project === 'apartment' ? apart6 : project === 'construction' ? construction6 : house6}  style={{height:'270px'}}/>
<div class="absolute inset-0 bg-primary/20 mix-blend-multiply"></div>
<div class="absolute bottom-4 left-4"> 
</div>
</div>
<div class="animate aspect-square bg-on-surface relative group overflow-hidden">
<img class="w-full h-full object-cover 0 group-hover:opacity-100 transition-opacity duration-500" data-alt="Monolithic skyscraper against a dark moody sky with dramatic architectural lines and deep shadows" src={project === 'apartment' ? apart7 : project === 'construction' ? construction7 : house7}  style={{height:'270px'}}/>
<div class="absolute inset-0 bg-primary/20 mix-blend-multiply"></div>
<div class="absolute bottom-4 left-4"> 
</div>
</div>
<div class="animate aspect-square bg-on-surface relative group overflow-hidden">
<img class="w-full h-full object-cover 0 group-hover:opacity-100 transition-opacity duration-500" data-alt="Monolithic skyscraper against a dark moody sky with dramatic architectural lines and deep shadows" src={project === 'apartment' ? apart8 : project === 'construction' ? construction8 : house8}  style={{height:'270px'}}/>
<div class="absolute inset-0 bg-primary/20 mix-blend-multiply"></div>
<div class="absolute bottom-4 left-4"> 
</div>
</div>
<div class="animate aspect-square bg-on-surface relative group overflow-hidden">
<img class="w-full h-full object-cover 0 group-hover:opacity-100 transition-opacity duration-500" data-alt="Monolithic skyscraper against a dark moody sky with dramatic architectural lines and deep shadows" src={project === 'apartment' ? apart9 : project === 'construction' ? construction9 : house9}  style={{height:'270px'}}/>
<div class="absolute inset-0 bg-primary/20 mix-blend-multiply"></div>
<div class="absolute bottom-4 left-4"> 
</div>
</div>
<div class="animate aspect-square bg-on-surface relative group overflow-hidden">
<img class="w-full h-full object-cover 0 group-hover:opacity-100 transition-opacity duration-500" data-alt="Monolithic skyscraper against a dark moody sky with dramatic architectural lines and deep shadows" src={project === 'apartment' ? apart10 : project === 'construction' ? construction10 : house10}  style={{height:'270px'}}/>
<div class="absolute inset-0 bg-primary/20 mix-blend-multiply"></div>
<div class="absolute bottom-4 left-4"> 
</div>
</div>
<div class="animate aspect-square bg-on-surface relative group overflow-hidden">
<img class="w-full h-full object-cover 0 group-hover:opacity-100 transition-opacity duration-500" data-alt="Monolithic skyscraper against a dark moody sky with dramatic architectural lines and deep shadows" src={project === 'apartment' ? apart11 : project === 'construction' ? construction12 : house12}  style={{height:'270px'}}/>
<div class="absolute inset-0 bg-primary/20 mix-blend-multiply"></div>
<div class="absolute bottom-4 left-4"> 
</div>
</div>
<div class="animate aspect-square bg-on-surface relative group overflow-hidden">
<img class="w-full h-full object-cover 0 group-hover:opacity-100 transition-opacity duration-500" data-alt="Monolithic skyscraper against a dark moody sky with dramatic architectural lines and deep shadows" src={project === 'apartment' ? apart12 : project === 'construction' ? construction11 : house11}  style={{height:'270px'}}/>
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
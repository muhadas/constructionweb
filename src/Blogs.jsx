import React from 'react';
import bl1 from "./assets/Slide15.jfif"

import { Helmet } from "react-helmet-async";
import { useLocation } from 'react-router-dom';
import {useEffect } from 'react'
import bl2 from "./assets/Slide16.jfif"

import bl3 from "./assets/GREEN LIVING REFLET FINAL.jpg"


function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    // Scroll to the top of the page whenever the route changes
    window.scrollTo(0, 0);
  }, [location]);

  return null; // This component doesn't render anything
}
function Blogs(props) {
    const lan = props.language
    return (
        <div>

            <Helmet>
                    <title>GREEN ENERGY BLOGS</title>
                    <meta name="description" content="GREEN LIVING provide efficient ways to achieve green engery in your house or property. We provide a detail blogs on how to achieve green energy through solar energy and through nature inspired house designs" />
                 <link rel="canonical" href="https://yourwebsite.com/blogs" />
            
                 <meta property="og:title" content="GREENLIVING Construction&Development ltd" />
            <meta property="og:description" content="We build green/energy efficient construction projects. We provide natural sustainable designs with green space in the development area." />
            <meta property="og:image" content="/https://yourwebsite.com/assets/logo_1.png" />
                 
                  </Helmet>
              <ScrollToTop />
<main class="w-full min-h-screen pb-24 nrk" style={{backgroundColor:"#fffffffa"}}>
<section class="w-full bg-surface-container-low py-12 px-6 mb-12">
  
<div class="max-w-[1440px] mx-auto">
 <div class="mb-2" style={{textAlign:"left"}}>
<span class="bg-primary text-on-primary px-3 py-1 font-label text-[10px] font-bold tracking-[0.2em] uppercase" style={{textAlign:"left"}}>PROJECTS</span>
</div>
<h1 class="text-[1.6rem] leading-none font-bold tracking-tighter text-on-background max-w-4xl uo"  style={{color:"#74CA2D" ,textAlign:"left"}}>OUR PERSPECTIVES  <br />  <b style={{color:"black"}}> ON MODERN ARCHITECTURE. </b> </h1>
</div>
</section>
<div class="w-full px-6">
<div class="max-w-[1440px] mx-auto">
<div class="grid grid-cols-1 md:grid-cols-2 gap-8 art">
    <div className="animate">
<article class="green-border bg-surface-container-lowest p-6 flex flex-col gap-6 " style={{backgroundColor:"white", border:"2px solid #74CA2D",textAlign:"left",boxShadow:"0 33px 54px rgba(0,0,0,0.25),  20px 16px 28px rgba(0,0,0,0.2)"}}>
<header>
<h2 class="  font-extrabold tracking-tight text-on-surface   mec">{
  lan === 'greek'
    ? "Απονομή Α επαίνου στη συμμετοχή του διαγωνισμού ανέγερση μνημείου αιχμάλωτων πολέμου στο Δήμο Λευκωσίας στη Λήδρα Πάλας"
    : lan === 'french'
    ? "Distinction du 1er prix pour la participation au concours de construction du monument des prisonniers de guerre à la municipalité de Nicosie à Ledra Palace"
    : lan === 'russian'
    ? "Присуждение первого поощрительного приза за участие в конкурсе на строительство памятника военнопленным в муниципалитете Никосии в Ледра-Палас"
    : lan === 'hebrew'
    ? "הענקת ציון לשבח ראשון להשתתפות בתחרות הקמת אנדרטה לשבויי מלחמה בעיריית ניקוסיה בלדרה פאלאס"
    : lan === 'english'
    ? "Award of first commendation for participation in the competition for the construction of the Prisoners of War memorial at the Municipality of Nicosia in Ledra Palace"
    : "Award of first commendation for participation in the competition for the construction of the Prisoners of War memorial at the Municipality of Nicosia in Ledra Palace"
}
</h2>
</header>
<div class="w-[98%] mx-auto">
<img alt="Architectural structure" class="w-full aspect-[16/9] object-cover filter   hover:grayscale-0 transition-all duration-500" data-alt="Monolithic concrete skyscraper reflecting bright sunlight against a clear blue sky, sharp angles and architectural precision." src={bl1}/>
</div>
<div class="w-[98%] mx-auto">
<img alt="Architectural structure" class="w-full aspect-[16/9] object-cover filter   hover:grayscale-0 transition-all duration-500" data-alt="Monolithic concrete skyscraper reflecting bright sunlight against a clear blue sky, sharp angles and architectural precision." src={bl2}/>
</div>
</article>
</div>
<div className="animate">
<article class="green-border bg-surface-container-lowest p-6 flex flex-col gap-6"  style={{backgroundColor:"white", border:"2px solid #74CA2D",textAlign:"left",boxShadow:"0 33px 54px rgba(0,0,0,0.25),  20px 16px 28px rgba(0,0,0,0.2)"}} >
<header>
<h2 class="  font-extrabold tracking-tight text-on-surface   mec">{
  lan === 'greek'
    ? "Διαμόρφωση και σχεδιασμός των κήπων στα υπό υλοποίηση κατασκευαστικά έργα"
    : lan === 'french'
    ? "Aménagement et conception des jardins dans les projets de construction en cours"
    : lan === 'russian'
    ? "Обустройство и проектирование садов в реализуемых строительных проектах"
    : lan === 'hebrew'
    ? "תכנון ועיצוב הגינות בפרויקטים בביצוע"
    : lan === 'english'
    ? "Design and development of gardens in ongoing construction projects"
    : "Design and development of gardens in ongoing construction projects"
}</h2>
</header>
<div class="w-[98%] mx-auto">
<img alt="Green Enviroment structure" class="w-full aspect-[16/9] object-cover filter   hover:grayscale-0 transition-all duration-500" data-alt="Macro photography of a modern computer processor with intricate circuitry glowing in deep neon blues and silvers." src={bl3}/>
</div>
<div class="flex flex-row gap-6 mt-2">
 
<section class="flex-1">
<p class="text-sm text-on-surface-variant leading-relaxed font-body" style={{textAlign:"justify"}}>
  {
    lan === 'greek'
      ? "Η εταιρεία Green Living Construction & Development ltd προχώρησε σε επίσκεψη σε εξειδικευμένο φυτώριο, με σκοπό την επιλογή κατάλληλων φυτικών ειδών για τα έργα της. Στο πλαίσιο αυτό, έχει ήδη συναφθεί συνεργασία με φυτώριο για τη διαμόρφωση και τον σχεδιασμό των κήπων στα υπό υλοποίηση κατασκευαστικά έργα."
      : lan === 'french'
      ? "Green Living Construction & Development ltd a effectué une visite dans une pépinière spécialisée afin de sélectionner des espèces végétales adaptées à ses projets. Dans ce cadre, une collaboration a déjà été établie avec une pépinière pour l’aménagement et la conception des jardins dans les projets de construction en cours."
      : lan === 'russian'
      ? "Компания Green Living Construction & Development ltd посетила специализированный питомник с целью выбора подходящих видов растений для своих проектов. В рамках этого уже установлено сотрудничество с питомником для планировки и проектирования садов в реализуемых строительных проектах."
      : lan === 'hebrew'
      ? "חברת Green Living Construction & Development ltd ערכה ביקור במשתלה מתמחה לצורך בחירת מיני צמחים מתאימים לפרויקטים שלה. במסגרת זו כבר נוצר שיתוף פעולה עם משתלה לתכנון ועיצוב הגינות בפרויקטים בביצוע."
      : lan === 'english'
      ? "Green Living Construction & Development ltd visited a specialized nursery to select suitable plant species for its projects. In this context, a collaboration has already been established with a nursery for the design and development of gardens in ongoing construction projects."
      : "Green Living Construction & Development ltd visited a specialized nursery to select suitable plant species for its projects. In this context, a collaboration has already been established with a nursery for the design and development of gardens in ongoing construction projects."
  }
  <br /><br />
  {
    lan === 'greek'
      ? "Η δράση αυτή εντάσσεται στο πρόγραμμα «Ένταξη Πρασίνου στον Αστικό Σχεδιασμό», συμβάλλοντας στην ενίσχυση της βιωσιμότητας και της περιβαλλοντικής ποιότητας των αναπτύξεων."
      : lan === 'french'
      ? "Cette action s’inscrit dans le programme « Intégration de la verdure dans la planification urbaine », contribuant à renforcer la durabilité et la qualité environnementale des développements."
      : lan === 'russian'
      ? "Данная инициатива входит в программу «Интеграция зелёных насаждений в городское планирование» и способствует повышению устойчивости и экологического качества застроек."
      : lan === 'hebrew'
      ? "פעולה זו משתלבת בתוכנית «שילוב ירוק בתכנון עירוני», ותורמת לחיזוק הקיימות ואיכות הסביבה של הפיתוחים."
      : lan === 'english'
      ? "This initiative is part of the “Green Integration in Urban Planning” program, contributing to enhanced sustainability and environmental quality of developments."
      : "This initiative is part of the “Green Integration in Urban Planning” program, contributing to enhanced sustainability and environmental quality of developments."
  }
</p>
</section>
</div>
</article>
</div>
</div>
</div>
</div>
</main>
        </div>
    );
}

export default Blogs;
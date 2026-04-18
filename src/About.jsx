import React from 'react';

import { Helmet } from "react-helmet-async";
import { useLocation } from 'react-router-dom';
import {useEffect } from 'react'
import abt from"./assets/househpl4.jfif";

import abt1 from"./assets/POLYKATOIKIA PHOTOS.jpg";

import abt2 from"./assets/house with stone exterior 5.jpg"
function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    // Scroll to the top of the page whenever the route changes
    window.scrollTo(0, 0);
  }, [location]);

  return null; // This component doesn't render anything
}
function About(props) {
    const lan = props.language
    return (
        <div>
            <Helmet>
                    <title>About GREEN LIVING</title>
                    <meta name="description" content="Green Living is a leading construction and development company in cyprus that provide modern houses and apartments developement with nature inspired green designs" />
                 <link rel="canonical" href="https://yourwebsite.com/aboutus" />
            
                 <meta property="og:title" content="GREENLIVING Construction&Development ltd" />
            <meta property="og:description" content="We build green/energy efficient construction projects. We provide natural sustainable designs with green space in the development area." />
            <meta property="og:image" content="/https://yourwebsite.com/assets/logo_1.png" />
                 
                  </Helmet>
<main class="w-full qr" >   <ScrollToTop />
<section class="bg-surface-container-lowest py-20  md:px-24 bgt">
<div class="max-w-7xl mx-auto flex flex-col gap-12 min-h-[60vh] justify-center"> 
<div class="flex flex-col md:flex-row justify-between items-end gap-8">
<div class="w-full md:w-1/2 flex flex-col  gap-4">
<div class="flex items-center gap-2">
<span class="font-label text-[11px] font-extrabold tracking-[0.25em] text-primary uppercase">OUR STORY</span>
<span class="material-symbols-outlined text-primary text-lg rotate-90" data-icon="arrow_forward">GREEN LIVING</span>
</div>
<h1 class="text-[3.6rem] leading-none font-bold tracking-tighter text-primary">
     {lan === 'greek' ? 
  "Ποιοι είμαστε"
: lan === 'french' ? 
  "Qui sommes-nous"
: lan === 'russian' ? 
  "Кто мы"
: lan === 'english' ? 
  "Who we are"
: lan === 'hebrew' ? 
  "מי אנחנו"
: "home"}
   </h1>
</div>
<div class="w-full md:w-1/2 flex gap-4"> 
</div>
</div> 
<div class="flex flex-col md:flex-row gap-16 items-center">


<div class="w-full md:w-1/2 aspect-square   overflow-hidden animate   " style={{marginTop:"5%"}}>
<img class="w-full  object-cover" data-alt="Wide angle shot of a massive concrete monolith building under dramatic overcast sky, brutalist architecture style" src={abt1}/>
</div>


<div class="w-full md:w-1/2 flex flex-col gap-8">
<div class="bg-surface-container-highest border-l-4 border-primary p-8">
<p class="font-body text-lg leading-relaxed text-on-surface" style={{color:'white'}}>
                {lan === 'greek' ? 
  "Είμαστε μια σύγχρονη εταιρεία development & construction, με όραμα να επαναπροσδιορίσουμε τον τρόπο που ζούμε και κατοικούμε στον αστικό χώρο. Παρότι νεοσύστατοι, φέρνουμε μια φρέσκια προσέγγιση που συνδυάζει αρχιτεκτονική, βιωσιμότητα και λειτουργικότητα."
: lan === 'french' ? 
  "Nous sommes une entreprise moderne de développement et de construction, avec la vision de redéfinir la façon dont nous vivons et habitons les espaces urbains. Bien que récemment créée, nous apportons une approche innovante qui combine architecture, durabilité et fonctionnalité."
: lan === 'russian' ? 
  "Мы современная компания в сфере девелопмента и строительства с видением переосмысления того, как мы живём и обитаем в городском пространстве. Несмотря на недавнее создание, мы предлагаем свежий подход, объединяющий архитектуру, устойчивое развитие и функциональность."
: lan === 'english' ? 
  "We are a modern development & construction company with a vision to redefine the way we live and inhabit urban spaces. Although newly established, we bring a fresh approach that combines architecture, sustainability, and functionality."
: lan === 'hebrew' ? 
  "אנו חברת פיתוח ובנייה מודרנית עם חזון להגדיר מחדש את הדרך שבה אנו חיים ומתגוררים במרחב העירוני. אף על פי שהוקמנו לאחרונה, אנו מביאים גישה רעננה המשלבת אדריכלות, קיימות ופונקציונליות."
: "home"} </p>
</div> 
</div>
</div>
</div>
</section> 
<section class="bg-surface-container-low py-24 px-8 md:px-24 nr" style={{backgroundColor:"rgb(255 255 255 / 92%)"}}>
<div class="max-w-7xl mx-auto flex flex-col md:flex-row gap-20 items-center">
<div class="w-full md:w-3/5">
<span class="font-label text-[18px] font-bold tracking-[0.2em] text-primary uppercase mb-4 block" style={{color:"black"}}>
   {lan === 'greek' ? 
  "Η φιλοσοφία μας"
: lan === 'french' ? 
  "Notre philosophie"
: lan === 'russian' ? 
  "Наша философия"
: lan === 'english' ? 
  "Our Philosophy"
: lan === 'hebrew' ? 
  "הפילוסופיה שלנו"
: "home"}
    </span>
<h2 class="text-2xl font-bold tracking-tight text-on-background mb-8" style={{color:"black" ,textAlign:"left"}}> 
     {lan === 'greek' ? 
  "Δεν αντιμετωπίζουμε την κατοικία ως μια μεμονωμένη μονάδα. Αντίθετα, προσπαθούμε να σχεδιάσουμε ολοκληρωμένα περιβάλλοντα διαβίωσης."
: lan === 'french' ? 
  "Nous ne considérons pas le logement comme une unité isolée. Au contraire, nous cherchons à concevoir des environnements de vie intégrés."
: lan === 'russian' ? 
  "Мы не рассматриваем жильё как отдельную единицу. Напротив, мы стремимся проектировать комплексные жилые пространства."
: lan === 'english' ? 
  "We do not view housing as an isolated unit. Instead, we aim to design integrated living environments."
: lan === 'hebrew' ? 
  "איננו מתייחסים לדיור כיחידה מבודדת. להפך, אנו שואפים לתכנן סביבות מגורים משולבות."
: "home"}
  </h2>
<p class="font-body text-on-surface-variant mb-10 leading-relaxed max-w-xl" style={{textAlign:"left",fontSize:"1.2rem"}}>
         
        {lan === 'greek' ? 
  "Στόχος μας είναι η δημιουργία χώρων που:"
: lan === 'french' ? 
  "Notre objectif est de créer des espaces qui :"
: lan === 'russian' ? 
  "Наша цель — создавать пространства, которые:"
: lan === 'english' ? 
  "Our goal is to create spaces that:"
: lan === 'hebrew' ? 
  "המטרה שלנו היא ליצור מרחבים אשר:"
: "home"}
</p>
      {lan === 'greek' ? 
  <ul class="flex flex-col gap-4 rc" style={{textAlign:"left",fontSize:"1.2rem"}}>
    <li class="flex items-start gap-4">
     <i class="fa-solid fa-circle-check" style={{marginLeft:"17%"}}></i>
      <span class="font-body font-bold  tracking-tight">ενσωματώνονται αρμονικά στον αστικό ιστό</span>
    </li>
    <li class="flex items-start gap-4">
  <i class="fa-solid fa-circle-check" style={{marginLeft:"17%"}}></i>
      <span class="font-body font-bold  tracking-tight">αναβαθμίζουν την καθημερινότητα</span>
    </li>
    <li class="flex items-start gap-4">
  <i class="fa-solid fa-circle-check" style={{marginLeft:"17%"}}></i>
      <span class="font-body font-bold tracking-tight">βελτιώνουν ουσιαστικά την ποιότητα ζωής</span>
    </li>
    <li class="flex items-start gap-4">
       <i class="fa-solid fa-circle-check" style={{marginLeft:"17%"}}></i>
      <span class="font-body font-bold  tracking-tight">λειτουργικούς χώρους</span>
    </li>
    <li class="flex items-start gap-4">
      <i class="fa-solid fa-circle-check" style={{marginLeft:"17%"}}></i>
      <span class="font-body font-bold  tracking-tight">σύγχρονη αισθητική</span>
    </li>
    <li class="flex items-start gap-4">
    <i class="fa-solid fa-circle-check" style={{marginLeft:"17%"}}></i>
      <span class="font-body font-bold  tracking-tight">βιώσιμες λύσεις</span>
    </li>
  </ul>

: lan === 'french' ? 
  <ul class="flex flex-col gap-4 rc" style={{textAlign:"left",fontSize:"1.2rem"}}>
    <li class="flex items-start gap-4">
       <i class="fa-solid fa-circle-check" style={{marginLeft:"17%"}}></i>
      <span class="font-body font-bold  tracking-tight">s’intègrent harmonieusement dans le tissu urbain</span>
    </li>
    <li class="flex items-start gap-4">
       <i class="fa-solid fa-circle-check" style={{marginLeft:"17%"}}></i>
      <span class="font-body font-bold  tracking-tight">améliorent la vie quotidienne</span>
    </li>
    <li class="flex items-start gap-4">
      <i class="fa-solid fa-circle-check" style={{marginLeft:"17%"}}></i>
      <span class="font-body font-bold  tracking-tight">améliorent significativement la qualité de vie</span>
    </li>
    <li class="flex items-start gap-4">
 <i class="fa-solid fa-circle-check" style={{marginLeft:"17%"}}></i>
      <span class="font-body font-bold  tracking-tight">espaces fonctionnels</span>
    </li>
    <li class="flex items-start gap-4">
      <i class="fa-solid fa-circle-check" style={{marginLeft:"17%"}}></i>
      <span class="font-body font-bold  tracking-tight">esthétique contemporaine</span>
    </li>
    <li class="flex items-start gap-4">
      <i class="fa-solid fa-circle-check" style={{marginLeft:"17%"}}></i>
      <span class="font-body font-bold  tracking-tight">solutions durables</span>
    </li>
  </ul>

: lan === 'russian' ? 
  <ul class="flex flex-col gap-4 rc" style={{textAlign:"left",fontSize:"1.2rem"}}> 
    <li class="flex items-start gap-4">
     <i class="fa-solid fa-circle-check" style={{marginLeft:"17%"}}></i>
      <span class="font-body font-bold  tracking-tight">гармонично интегрируются в городскую среду</span>
    </li>
    <li class="flex items-start gap-4">
      <i class="fa-solid fa-circle-check" style={{marginLeft:"17%"}}></i>
      <span class="font-body font-bold  tracking-tight">улучшают повседневную жизнь</span>
    </li>
    <li class="flex items-start gap-4">
       <i class="fa-solid fa-circle-check" style={{marginLeft:"17%"}}></i>
      <span class="font-body font-bold  tracking-tight">существенно повышают качество жизни</span>
    </li>
    <li class="flex items-start gap-4">
      <i class="fa-solid fa-circle-check" style={{marginLeft:"17%"}}></i>
      <span class="font-body font-bold  tracking-tight">функциональные пространства</span>
    </li>
    <li class="flex items-start gap-4">
   <i class="fa-solid fa-circle-check" style={{marginLeft:"17%"}}></i>
      <span class="font-body font-bold  tracking-tight">современная эстетика</span>
    </li>
    <li class="flex items-start gap-4">
      <i class="fa-solid fa-circle-check" style={{marginLeft:"17%"}}></i>
      <span class="font-body font-bold  tracking-tight">устойчивые решения</span>
    </li>
  </ul>

: lan === 'english' ? 
  <ul class="flex flex-col gap-4 rc" style={{textAlign:"left",fontSize:"1.2rem"}}>
    <li class="flex items-start gap-4">
    <i class="fa-solid fa-circle-check" style={{marginLeft:"17%"}}></i>
      <span class="font-body font-bold  tracking-tight">integrate harmoniously into the urban fabric</span>
    </li>
    <li class="flex items-start gap-4">
     <i class="fa-solid fa-circle-check" style={{marginLeft:"17%"}}></i>
      <span class="font-body font-bold  tracking-tight">enhance everyday life</span>
    </li>
    <li class="flex items-start gap-4">
     <i class="fa-solid fa-circle-check" style={{marginLeft:"17%"}}></i>
      <span class="font-body font-bold  tracking-tight">meaningfully improve quality of life</span>
    </li>
    <li class="flex items-start gap-4">
     <i class="fa-solid fa-circle-check" style={{marginLeft:"17%"}}></i>
      <span class="font-body font-bold  tracking-tight">offer functional spaces</span>
    </li>
    <li class="flex items-start gap-4">
    <i class="fa-solid fa-circle-check" style={{marginLeft:"17%"}}></i>
      <span class="font-body font-bold  tracking-tight">feature contemporary aesthetics</span>
    </li>
    <li class="flex items-start gap-4">
      <i class="fa-solid fa-circle-check" style={{marginLeft:"17%"}}></i>
      <span class="font-body font-bold  tracking-tight">incorporate sustainable solutions</span>
    </li>
  </ul>

: lan === 'hebrew' ? 
  <ul class="flex flex-col gap-4 rc" style={{textAlign:"left",fontSize:"1.2rem"}}>
    <li class="flex items-start gap-4">
      <i class="fa-solid fa-circle-check" style={{marginLeft:"17%"}}></i>
      <span class="font-body font-bold  tracking-tight">משתלבים בהרמוניה במרקם העירוני</span>
    </li>
    <li class="flex items-start gap-4">
       <i class="fa-solid fa-circle-check" style={{marginLeft:"17%"}}></i>
      <span class="font-body font-bold  tracking-tight">משפרים את חיי היומיום</span>
    </li>
    <li class="flex items-start gap-4">
      <i class="fa-solid fa-circle-check" style={{marginLeft:"17%"}}></i>
      <span class="font-body font-bold  tracking-tight">משפרים משמעותית את איכות החיים</span>
    </li>
    <li class="flex items-start gap-4">
      <i class="fa-solid fa-circle-check" style={{marginLeft:"17%"}}></i>
      <span class="font-body font-bold  tracking-tight">מרחבים פונקציונליים</span>
    </li>
    <li class="flex items-start gap-4">
    <i class="fa-solid fa-circle-check" style={{marginLeft:"17%"}}></i>
      <span class="font-body font-bold  tracking-tight">אסתטיקה מודרנית</span>
    </li>
    <li class="flex items-start gap-4">
      <i class="fa-solid fa-circle-check" style={{marginLeft:"17%"}}></i>
      <span class="font-body font-bold  tracking-tight">פתרונות בני־קיימא</span>
    </li>
  </ul>

: "home"}
  





</div>
<div class="w-full md:w-2/5 aspect-square bg-surface-container-highest animate maso">
<img class="w-full h-full object-cover " data-alt="Digital grid overlay on top of a futuristic control room with blue holographic data displays and high-tech monitors" src={abt}/>
</div>
</div>
</section> 
<section class="bg-surface py-24 px-8 md:px-24 nr" style={{backgroundColor:"rgb(255 255 255 / 92%)"}}>
<div class="max-w-7xl mx-auto flex flex-col-reverse md:flex-row gap-20 items-center" style={{backgroundColor:"white"}}>
<div class="w-full md:w-2/5 aspect-square   animate maso">
<img class="w-full object-cover" data-alt="Strategic planning session in a minimalist office with sharp shadows and technical blueprints laid out on a stone table" style={{backgroundColor:"white",marginTop:"15%"}} src={abt2}/>
</div>
<div class="w-full md:w-3/5">
<span class="font-label text-[18px] font-bold tracking-[0.2em] text-primary uppercase mb-4 block" style={{color:"black"}}>
    
      {lan === 'greek' ? 
  "Η δέσμευσή μας"
: lan === 'french' ? 
  "Notre engagement"
: lan === 'russian' ? 
  "Наше обязательство"
: lan === 'english' ? 
  "Green Living – Our Commitment"
: lan === 'hebrew' ? 
  "המחויבות שלנו"
: "home"}  
   </span>
<h2 class="text-2xl font-bold tracking-tight text-on-background mb-8" style={{color:"black",textAlign:"left"}}>
    {lan === 'greek' ? 
  "Η φιλοσοφία Green Living είναι στον πυρήνα κάθε μας έργου."
: lan === 'french' ? 
  "La philosophie Green Living est au cœur de chacun de nos projets."
: lan === 'russian' ? 
  "Философия Green Living лежит в основе каждого нашего проекта."
: lan === 'english' ? 
  "The Green Living philosophy lies at the core of every project we undertake."
: lan === 'hebrew' ? 
  "פילוסופיית Green Living נמצאת בלב כל פרויקט שלנו."
: "home"}
  </h2>

  
<p class="font-body text-on-surface-variant mb-10 leading-relaxed max-w-xl" style={{textAlign:"left",fontSize:"1.2rem"}}>
{lan === 'greek' ? 
  "Επιδιώκουμε:"
: lan === 'french' ? 
  "Nous visons à :"
: lan === 'russian' ? 
  "Мы стремимся:"
: lan === 'english' ? 
  "We strive to:"
: lan === 'hebrew' ? 
  "אנו שואפים ל־:"
: "home"}     
      </p>

    {lan === 'greek' ? 
<ul class="flex flex-col gap-4 rc" style={{textAlign:"left",fontSize:"1.2rem"}}>
  <li class="flex items-start gap-4">
    <i class="fa-solid fa-circle-check" style={{marginLeft:"17%"}}></i>
      <span class="font-body font-bold  tracking-tight">την ενσωμάτωση της φύσης μέσα στην πόλη</span>
  </li>
  <li class="flex items-start gap-4">
    <i class="fa-solid fa-circle-check" style={{marginLeft:"17%"}}></i>
      <span class="font-body font-bold  tracking-tight">την ενίσχυση των χώρων πρασίνου</span>
  </li>
  <li class="flex items-start gap-4">
    <i class="fa-solid fa-circle-check" style={{marginLeft:"17%"}}></i>
      <span class="font-body font-bold  tracking-tight">τη δημιουργία «πνευμόνων» καθαρού αέρα</span>
  </li>
  <li class="flex items-start gap-4">
    <i class="fa-solid fa-circle-check" style={{marginLeft:"17%"}}></i>
      <span class="font-body font-bold  tracking-tight">τη βελτίωση του μικροκλίματος</span>
  </li>
  <li class="flex items-start gap-4">
    <i class="fa-solid fa-circle-check" style={{marginLeft:"17%"}}></i>
      <span class="font-body font-bold  tracking-tight">την αναβάθμιση του αστικού περιβάλλοντος</span>
  </li>
  <li class="flex items-start gap-4">
    <i class="fa-solid fa-circle-check" style={{marginLeft:"17%"}}></i>
      <span class="font-body font-bold  tracking-tight">σε έναν πιο υγιή και βιώσιμο τρόπο ζωής</span>
  </li>
</ul>

: lan === 'french' ? 
<ul class="flex flex-col gap-4 rc" style={{textAlign:"left",fontSize:"1.2rem"}}>
  <li class="flex items-start gap-4">
   <i class="fa-solid fa-circle-check" style={{marginLeft:"17%"}}></i>
      <span class="font-body font-bold  tracking-tight">intégrer la nature dans la ville</span>
  </li>
  <li class="flex items-start gap-4">
   <i class="fa-solid fa-circle-check" style={{marginLeft:"17%"}}></i>
      <span class="font-body font-bold  tracking-tight">renforcer les espaces verts</span>
  </li>
  <li class="flex items-start gap-4">
   <i class="fa-solid fa-circle-check" style={{marginLeft:"17%"}}></i>
      <span class="font-body font-bold  tracking-tight">créer des « poumons » d’air pur</span>
  </li>
  <li class="flex items-start gap-4">
   <i class="fa-solid fa-circle-check" style={{marginLeft:"17%"}}></i>
      <span class="font-body font-bold  tracking-tight">améliorer le microclimat</span>
  </li>
  <li class="flex items-start gap-4">
   <i class="fa-solid fa-circle-check" style={{marginLeft:"17%"}}></i>
      <span class="font-body font-bold  tracking-tight">améliorer l’environnement urbain</span>
  </li>
  <li class="flex items-start gap-4">
   <i class="fa-solid fa-circle-check" style={{marginLeft:"17%"}}></i>
      <span class="font-body font-bold  tracking-tight">promouvoir un mode de vie plus sain et durable</span>
  </li>
</ul>

: lan === 'russian' ? 
<ul class="flex flex-col gap-4 rc" style={{textAlign:"left",fontSize:"1.2rem"}}>
  <li class="flex items-start gap-4">
   <i class="fa-solid fa-circle-check" style={{marginLeft:"17%"}}></i>
      <span class="font-body font-bold  tracking-tight">интеграция природы в город</span>
  </li>
  <li class="flex items-start gap-4">
   <i class="fa-solid fa-circle-check" style={{marginLeft:"17%"}}></i>
      <span class="font-body font-bold  tracking-tight">укрепление зелёных зон</span>
  </li>
  <li class="flex items-start gap-4">
   <i class="fa-solid fa-circle-check" style={{marginLeft:"17%"}}></i>
      <span class="font-body font-bold  tracking-tight">создание «лёгких» чистого воздуха</span>
  </li>
  <li class="flex items-start gap-4">
   <i class="fa-solid fa-circle-check" style={{marginLeft:"17%"}}></i>
      <span class="font-body font-bold  tracking-tight">улучшение микроклимата</span>
  </li>
  <li class="flex items-start gap-4">
   <i class="fa-solid fa-circle-check" style={{marginLeft:"17%"}}></i>
      <span class="font-body font-bold  tracking-tight">улучшение городской среды</span>
  </li>
  <li class="flex items-start gap-4">
   <i class="fa-solid fa-circle-check" style={{marginLeft:"17%"}}></i>
      <span class="font-body font-bold  tracking-tight">более здоровый и устойчивый образ жизни</span>
  </li>
</ul>

: lan === 'english' ? 
<ul class="flex flex-col gap-4 rc" style={{textAlign:"left",fontSize:"1.2rem"}}>
  <li class="flex items-start gap-4">
    <i class="fa-solid fa-circle-check" style={{marginLeft:"17%"}}></i>
      <span class="font-body font-bold  tracking-tight">integrate nature into the city</span>
  </li>
  <li class="flex items-start gap-4">
    <i class="fa-solid fa-circle-check" style={{marginLeft:"17%"}}></i>
      <span class="font-body font-bold  tracking-tight">enhance green spaces</span>
  </li>
  <li class="flex items-start gap-4">
    <i class="fa-solid fa-circle-check" style={{marginLeft:"17%"}}></i>
      <span class="font-body font-bold  tracking-tight">create “lungs” of clean air</span>
  </li>
  <li class="flex items-start gap-4">
    <i class="fa-solid fa-circle-check" style={{marginLeft:"17%"}}></i>
      <span class="font-body font-bold  tracking-tight">improving the microclimate</span>
  </li>
  <li class="flex items-start gap-4">
    <i class="fa-solid fa-circle-check" style={{marginLeft:"17%"}}></i>
      <span class="font-body font-bold  tracking-tight">upgrading the urban environment</span>
  </li>
  <li class="flex items-start gap-4">
    <i class="fa-solid fa-circle-check" style={{marginLeft:"17%"}}></i>
      <span class="font-body font-bold  tracking-tight">promoting a healthier and more sustainable lifestyle</span>
  </li>
</ul>

: lan === 'hebrew' ? 
<ul class="flex flex-col gap-4 rc" style={{textAlign:"left",fontSize:"1.2rem"}}>
  <li class="flex items-start gap-4">
   <i class="fa-solid fa-circle-check" style={{marginLeft:"17%"}}></i>
      <span class="font-body font-bold  tracking-tight">שילוב הטבע בעיר</span>
  </li>
  <li class="flex items-start gap-4">
   <i class="fa-solid fa-circle-check" style={{marginLeft:"17%"}}></i>
      <span class="font-body font-bold  tracking-tight">חיזוק השטחים הירוקים</span>
  </li>
  <li class="flex items-start gap-4">
   <i class="fa-solid fa-circle-check" style={{marginLeft:"17%"}}></i>
      <span class="font-body font-bold  tracking-tight">יצירת "ריאות" של אוויר נקי</span>
  </li>
  <li class="flex items-start gap-4">
   <i class="fa-solid fa-circle-check" style={{marginLeft:"17%"}}></i>
      <span class="font-body font-bold  tracking-tight">שיפור המיקרו־אקלים</span>
  </li>
  <li class="flex items-start gap-4">
   <i class="fa-solid fa-circle-check" style={{marginLeft:"17%"}}></i>
      <span class="font-body font-bold  tracking-tight">שדרוג הסביבה העירונית</span>
  </li>
  <li class="flex items-start gap-4">
   <i class="fa-solid fa-circle-check" style={{marginLeft:"17%"}}></i>
      <span class="font-body font-bold  tracking-tight">קידום אורח חיים בריא ובר־קיימא</span>
  </li>
</ul>

: "home"}
 
</div>
</div>
</section>
</main>
        </div>
    );
}

export default About;
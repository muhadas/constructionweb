import React from 'react';

import { Helmet } from "react-helmet-async";
import { useLocation } from 'react-router-dom';
import {useEffect } from 'react'
import pfp from "./assets/collection-user-profile-avatar-icons-260nw-2705697337.jpg"

function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    // Scroll to the top of the page whenever the route changes
    window.scrollTo(0, 0);
  }, [location]);

  return null; // This component doesn't render anything
}
function Organization(props) {
    const lan = props.language
    return (
        <div>
          <Helmet>
                  <title>Organization structure</title>
                  <meta name="description" content="GREEN LIVING CONSTRUCTION AND DEVELOPMENT has a team of specialized indivisual. mastered in creating stuning designs with green natural patches in property" />
               <link rel="canonical" href="https://yourwebsite.com/organization" />
          
               <meta property="og:title" content="GREENLIVING Construction&Development ltd" />
          <meta property="og:description" content="We build green/energy efficient construction projects. We provide natural sustainable designs with green space in the development area." />
          <meta property="og:image" content="/https://yourwebsite.com/assets/logo_1.png" />
               
                </Helmet>
              <ScrollToTop />
<main class=" pb-32 px-6 md:px-12  mx-auto mk9" style={{paddingTop:"70px"}}> 
<section class="mb-16">
<h2 class="font-headline font-extrabold    tracking-tighter mb-4 rotate-90 hj">ORGANIZATION STRUCTURE</h2>
<div class=" h-2 bg-primary mb-8 ht"></div>

  {lan === 'greek' ? 
  <p class="font-body text-body-lg text-secondary leading-relaxed ml" style={{textAlign:"left", fontWeight:"700"}}>
    Οργάνωση και ιεραρχία <br />
    <b style={{color:"#74CA2D"}} className='kk'>της ομάδας συντονισμού και εκτέλεσης έργου</b>
  </p>
: lan === 'french' ? 
  <p class="font-body text-body-lg text-secondary leading-relaxed ml" style={{textAlign:"left", fontWeight:"700"}}>
    Organisation et hiérarchie <br />
    <b style={{color:"#74CA2D"}} className='kk'>de l’équipe de coordination et d’exécution du projet</b>
  </p>
: lan === 'russian' ? 
  <p class="font-body text-body-lg text-secondary leading-relaxed ml" style={{textAlign:"left", fontWeight:"700"}}>
    Организация и иерархия <br />
    <b style={{color:"#74CA2D"}} className='kk'>команды координации и реализации проекта</b>
  </p>
: lan === 'english' ? 
  <p class="font-body text-body-lg text-secondary leading-relaxed ml" style={{textAlign:"left", fontWeight:"700"}}>
    Organization and Hierarchy <br />
    <b style={{color:"#74CA2D"}} className='kk'>of the Project Coordination and Execution Team</b>
  </p>
: lan === 'hebrew' ? 
  <p class="font-body text-body-lg text-secondary leading-relaxed ml" style={{textAlign:"left", fontWeight:"700"}}>
    ארגון והיררכיה <br />
    <b style={{color:"#74CA2D"}} className='kk'>של צוות התיאום והביצוע של הפרויקט</b>
  </p>
: "home"}

</section> 
<div class="flex flex-wrap -mx-4"> 
  
<div class="  p-4 animate " style={{width:"100%" ,boxShadow: "0 33px 54px rgba(0,0,0,0.25),  20px 16px 28px rgba(0,0,0,0.2)" ,marginBottom:"4%"}}>
<div class="bg-matrix-green text-white p-12 chamfer-clip min-h-[400px] flex flex-col items-center text-center" style={{textAlign:"left"}}>
<div class="w-24 h-24 bg-white/10 flex items-center justify-center mb-8"> <img src={pfp} alt="" />
</div>
<h3 class="font-headline font-bold  uppercase rotate-90 ghu">
   {lan === 'greek' ? 
  "Διευθύνοντος"
: lan === 'french' ? 
  "Personnel exécutif"
: lan === 'russian' ? 
  "Исполнительный персонал"
: lan === 'english' ? 
  "Executive Personnel"
: lan === 'hebrew' ? 
  "צוות ניהולי"
: "home"} </h3>
<h3 class="font-headline text-2xl font-bold tracking-tight mb-4 uppercase" style={{color:"black"}}>
    {lan === 'greek' ? 
  "Καθήκοντα Προσωπικού"
: lan === 'french' ? 
  "Fonctions du personnel"
: lan === 'russian' ? 
  "Обязанности персонала"
: lan === 'english' ? 
  "Duties are"
: lan === 'hebrew' ? 
  "תפקידי הצוות"
: "home"}
   </h3>

   {lan === 'greek' ? 
<p class="font-body text-white/80 leading-relaxed text-sm md:text-base max-w-md" style={{width:"90%", maxWidth:"90%"}}>
  Το διευθύνον προσωπικό φέρει την ευθύνη για την ολοκληρωμένη διαχείριση και επίβλεψη των έργων, καλύπτοντας ένα ευρύ φάσμα αρμοδιοτήτων που περιλαμβάνουν:
  <br /><br />
  * Τον συνολικό συντονισμό και τη διαχείριση του έργου, από τη φάση επιλογής του κατάλληλου οικοπέδου έως και την τελική έγκρισή του <br />
  * Την επίβλεψη των πωλήσεων και τη διασφάλιση υψηλού επιπέδου εξυπηρέτησης πελατών, παρέχοντας λεπτομερή ενημέρωση αναφορικά με την πρόοδο, τις τεχνικές προδιαγραφές και λοιπά ζητήματα του έργου. <br />
  * Τον συντονισμό της ομάδας μελετητών, διασφαλίζοντας τη σωστή συνεργασία και την τήρηση των προβλεπόμενων μελετών. <br />
  * Την επίβλεψη του εργοταξίου και τη διαχείριση του χρονοδιαγράμματος, με στόχο την απρόσκοπτη υλοποίηση των εργασιών. <br />
  * Τη διαχείριση όλων των μέσων επικοινωνίας της εταιρείας. <br />
  * Την οργάνωση και διαχείριση των προσφορών, των εντύπων και των σχετικών αιτήσεων.
</p>

: lan === 'french' ? 
<p class="font-body text-white/80 leading-relaxed text-sm md:text-base max-w-md" style={{width:"90%", maxWidth:"90%"}}>
  Le personnel exécutif est responsable de la gestion globale et de la supervision des projets, couvrant un large éventail de tâches comprenant :
  <br /><br />
  * La coordination et la gestion globales du projet, depuis la sélection du terrain approprié jusqu’à son approbation finale. <br />
  * La supervision des ventes et l’assurance d’un haut niveau de service client, avec des mises à jour détaillées sur l’avancement, les spécifications techniques et autres questions liées au projet. <br />
  * La coordination de l’équipe de conception, garantissant une collaboration efficace et le respect des études approuvées. <br />
  * La supervision du chantier et la gestion du calendrier du projet afin d’assurer une exécution fluide des travaux. <br />
  * La gestion de tous les canaux de communication de l’entreprise. <br />
  * L’organisation et la gestion des offres, documents et demandes associées.
</p>

: lan === 'russian' ? 
<p class="font-body text-white/80 leading-relaxed text-sm md:text-base max-w-md" style={{width:"90%", maxWidth:"90%"}}>
  Исполнительный персонал отвечает за комплексное управление и надзор за проектами, включая широкий спектр обязанностей:
  <br /><br />
  * Общая координация и управление проектом — от выбора участка до его окончательного утверждения. <br />
  * Контроль продаж и обеспечение высокого уровня обслуживания клиентов с предоставлением подробной информации о ходе работ, технических характеристиках и других вопросах проекта. <br />
  * Координация команды проектировщиков, обеспечение эффективного сотрудничества и соблюдения утверждённых проектов. <br />
  * Контроль строительной площадки и управление графиком проекта для обеспечения бесперебойного выполнения работ. <br />
  * Управление всеми каналами коммуникации компании. <br />
  * Организация и обработка предложений, документов и связанных заявок.
</p>

: lan === 'english' ? 
<p class="font-body text-white/80 leading-relaxed text-sm md:text-base max-w-md" style={{width:"90%", maxWidth:"90%"}}>
  The executive personnel is responsible for the comprehensive management and supervision of projects, covering a wide range of duties that include:
  <br /><br />
  * The overall coordination and management of the project, from the selection of the appropriate plot to its final approval. <br />
  * Supervision of sales and assurance of a high level of customer service, providing detailed updates regarding progress, technical specifications, and other project-related matters. <br />
  * Coordination of the design team, ensuring effective collaboration and adherence to the approved studies. <br />
  * Supervision of the construction site and management of the project timeline, with the aim of ensuring smooth execution of works. <br />
  * Management of all corporate communication channels. <br />
  * Organization and administration of offers, documentation, and related applications.
</p>

: lan === 'hebrew' ? 
<p class="font-body text-white/80 leading-relaxed text-sm md:text-base max-w-md" style={{width:"90%", maxWidth:"90%"}}>
  הצוות הניהולי אחראי לניהול כולל ופיקוח על הפרויקטים, הכולל מגוון רחב של תחומי אחריות:
  <br /><br />
  * תיאום וניהול כולל של הפרויקט, משלב בחירת המגרש המתאים ועד לאישור הסופי. <br />
  * פיקוח על המכירות והבטחת רמת שירות גבוהה ללקוחות, תוך מתן עדכונים מפורטים על התקדמות, מפרטים טכניים ונושאים נוספים הקשורים לפרויקט. <br />
  * תיאום צוות המתכננים והבטחת שיתוף פעולה יעיל ועמידה בתכניות המאושרות. <br />
  * פיקוח על אתר הבנייה וניהול לוח הזמנים של הפרויקט לצורך ביצוע חלק של העבודות. <br />
  * ניהול כל ערוצי התקשורת של החברה. <br />
  * ארגון וניהול הצעות, מסמכים ובקשות קשורות.
</p>

: "home"}

</div>
</div> 

<div class="animate  p-4 bbb"  style={{textAlign:"left" ,boxShadow: "0 33px 54px rgba(0,0,0,0.25),  20px 16px 28px rgba(0,0,0,0.2)"}}>
<div class=" bg-matrix-green text-white p-12 chamfer-clip min-h-[400px] flex flex-col items-center text-center" style={{textAlign:"left" ,boxShadow: "0 33px 54px rgba(0,0,0,0.25),  20px 16px 28px rgba(0,0,0,0.2)"}}>
<div class="w-24 h-24 bg-white/10 flex items-center justify-center mb-8">
 <img src={pfp} alt="" />
</div>

<h3 class="font-headline font-bold  uppercase rotate-90 ghu"
>
    
    Project Engineer</h3>
<h3 class="font-headline text-2xl font-bold tracking-tight mb-4 uppercase" style={{color:"black"}}><br />
  {lan === 'greek' ? 
  "Αρμοδιότητες Τεχνικού Έργου και Επίβλεψης"
: lan === 'french' ? 
  "Responsabilités techniques et de supervision"
: lan === 'russian' ? 
  "Обязанности по техническому проекту и надзору"
: lan === 'english' ? 
  "Responsibilities:"
: lan === 'hebrew' ? 
  "אחריות הנדסית ופיקוח"
: "home"} </h3>

  {lan === 'greek' ? 
<p class="font-body text-white/80 leading-relaxed text-sm md:text-base max-w-md">
  * Την επίβλεψη και τον συνολικό συντονισμό του εργοταξίου, διασφαλίζοντας την ορθή εφαρμογή των σχεδίων.
  <br />
  * Την τήρηση και παρακολούθηση του Σχεδίου Ασφάλειας και Υγείας στο εργοτάξιο.
  <br />
  * Την παραλαβή και τον ποιοτικό έλεγχο των υλικών που παραδίδονται στο εργοτάξιο.
  <br />
  * Τον συντονισμό του εργατικού δυναμικού και τη διαχείριση των καθημερινών εργασιών.
  <br />
  * Τον συντονισμό του έργου σύμφωνα με το εγκεκριμένο χρονοδιάγραμμα, εξασφαλίζοντας την απρόσκοπτη εξέλιξη των εργασιών.
</p>

: lan === 'french' ? 
<p class="font-body text-white/80 leading-relaxed text-sm md:text-base max-w-md">
  * Supervision et coordination du chantier, garantissant la bonne mise en œuvre des plans approuvés. <br />
  * Suivi et application du plan de santé et de sécurité sur le chantier. <br />
  * Réception et contrôle qualité des matériaux livrés sur le chantier. <br />
  * Coordination de la main-d’œuvre et gestion des activités quotidiennes. <br />
  * Suivi du projet conformément au calendrier approuvé, assurant le bon déroulement des travaux.
</p>

: lan === 'russian' ? 
<p class="font-body text-white/80 leading-relaxed text-sm md:text-base max-w-md">
  * Надзор и координация строительной площадки, обеспечение правильного выполнения утверждённых чертежей. <br />
  * Контроль и соблюдение плана охраны труда и техники безопасности на объекте. <br />
  * Приёмка и контроль качества материалов, доставленных на стройплощадку. <br />
  * Координация рабочей силы и управление ежедневными строительными работами. <br />
  * Контроль выполнения проекта в соответствии с утверждённым графиком, обеспечение бесперебойного хода работ.
</p>

: lan === 'english' ? 
<p class="font-body text-white/80 leading-relaxed text-sm md:text-base max-w-md">
  * Supervising and coordinating the construction site, ensuring the correct implementation of the approved designs. <br />
  * Monitoring and enforcing compliance with the Health and Safety Plan on site. <br />
  * Receiving and conducting quality control of materials delivered to the site. <br />
  * Coordinating the workforce and managing daily construction activities. <br />
  * Overseeing the project in line with the approved schedule, ensuring the smooth progression of works.
</p>

: lan === 'hebrew' ? 
<p class="font-body text-white/80 leading-relaxed text-sm md:text-base max-w-md">
  * פיקוח ותיאום אתר הבנייה, תוך הבטחת יישום נכון של התוכניות המאושרות. <br />
  * מעקב ואכיפה של תכנית הבטיחות והבריאות באתר. <br />
  * קבלה ובדיקת איכות של חומרים המגיעים לאתר. <br />
  * תיאום כוח העבודה וניהול הפעילות היומיומית. <br />
  * פיקוח על הפרויקט בהתאם ללוח הזמנים המאושר והבטחת התקדמות חלקה של העבודות.
</p>

: "home"}
 

</div>
</div> 
<div class="animate  p-4 bbb" style={{textAlign:"left" ,boxShadow: "0 33px 54px rgba(0,0,0,0.25),  20px 16px 28px rgba(0,0,0,0.2)"}}>
<div class="bg-matrix-green text-white p-12 chamfer-clip min-h-[400px] flex flex-col items-center text-center" style={{textAlign:"left"}}>
<div class="w-24 h-24 bg-white/10 flex items-center justify-center mb-8">
 <img src={pfp} alt="" />
</div>

<h3 class="font-headline font-bold  uppercase rotate-90 ghu">Accountant</h3>
<h3 class="font-headline text-2xl font-bold tracking-tight mb-4 uppercase" style={{color:"black"}}> <br />
 {lan === 'greek' ? 
  "Αρμοδιότητες Εκτιμητή / Λογιστή"
: lan === 'french' ? 
  "Responsabilités de l’évaluateur / comptable"
: lan === 'russian' ? 
  "Обязанности оценщика / бухгалтера"
: lan === 'english' ? 
  "Responsibilities:"
: lan === 'hebrew' ? 
  "אחריות שמאי / רואה חשבון"
: "home"}

</h3>
{lan === 'greek' ? 
<p class="font-body text-white/80 leading-relaxed text-sm md:text-base max-w-md">
  Εκτιμητής / Λογιστής έχει την ευθύνη για:
  <br /><br />
  * Την οικονομική διαχείριση των έργων και την παρακολούθηση του χρηματοοικονομικού προγραμματισμού <br />
  * Τη συμβουλευτική υποστήριξη σχετικά με την οικονομική κατάσταση και τη διαχείριση δανειακών υποχρεώσεων. <br />
  * Την εκτίμηση της αξίας γης και τη διασφάλιση της επιλογής συμφερότερων επενδυτικών προτάσεων. <br />
  * Τη διαχείριση κτηματολογικών εγγράφων, συμπεριλαμβανομένων διαδικασιών διαχωρισμού γης και την ανάλυση πολεοδομικών ζωνών για την ορθότερη αξιοποίηση του ακινήτου.
</p>

: lan === 'french' ? 
<p class="font-body text-white/80 leading-relaxed text-sm md:text-base max-w-md">
  L’évaluateur / comptable est responsable de :
  <br /><br />
  * La gestion financière des projets et le suivi de la planification financière. <br />
  * L’accompagnement et le conseil sur la situation financière et la gestion des obligations de prêts. <br />
  * L’évaluation de la valeur foncière et la sélection des opportunités d’investissement les plus avantageuses. <br />
  * La gestion des documents cadastraux, y compris les procédures de division foncière et l’analyse des zones d’urbanisme pour une meilleure exploitation du bien.
</p>

: lan === 'russian' ? 
<p class="font-body text-white/80 leading-relaxed text-sm md:text-base max-w-md">
  Оценщик / бухгалтер отвечает за:
  <br /><br />
  * Финансовое управление проектами и контроль финансового планирования. <br />
  * Консультирование по финансовому состоянию компании и управлению кредитными обязательствами. <br />
  * Оценку стоимости земли и выбор наиболее выгодных инвестиционных предложений. <br />
  * Управление кадастровыми документами, включая процедуры раздела земель и анализ градостроительных зон для оптимального использования недвижимости.
</p>

: lan === 'english' ? 
<p class="font-body text-white/80 leading-relaxed text-sm md:text-base max-w-md">
  The Estimator / Accountant is responsible for:
  <br /><br />
  * Financial management of projects and monitoring of financial planning. <br />
  * Providing advisory support regarding the company’s financial status and management of loan obligations. <br />
  * Valuation of land and ensuring the selection of the most advantageous investment opportunities. <br />
  * Management of cadastral documents, including land subdivision procedures and analysis of urban planning zones for optimal property utilization.
</p>

: lan === 'hebrew' ? 
<p class="font-body text-white/80 leading-relaxed text-sm md:text-base max-w-md">
  שמאי / רואה חשבון אחראי על:
  <br /><br />
  * ניהול פיננסי של פרויקטים ומעקב אחר תכנון פיננסי. <br />
  * מתן ייעוץ לגבי המצב הפיננסי של החברה וניהול התחייבויות הלוואה. <br />
  * הערכת שווי קרקע ובחירת הזדמנויות השקעה משתלמות ביותר. <br />
  * ניהול מסמכי מקרקעין, כולל תהליכי חלוקת קרקע וניתוח אזורי תכנון עירוני לניצול מיטבי של הנכס.
</p>

: "home"}
</div>
</div> 
<div class="animate   p-4 bbb" style={{textAlign:"left" ,boxShadow: "0 33px 54px rgba(0,0,0,0.25),  20px 16px 28px rgba(0,0,0,0.2)"}}>
<div class="bg-matrix-green text-white p-12 chamfer-clip min-h-[400px] flex flex-col items-center text-center" style={{textAlign:"left"}}>
<div class="w-24 h-24 bg-white/10 flex items-center justify-center mb-8 relative">
 <img src={pfp} alt="" />
</div>

<h3 class="font-headline font-bold  uppercase rotate-90 ghu">Architect</h3>
<h3 class="font-headline text-2xl font-bold tracking-tight mb-4 uppercase" style={{color:"black"}}>
   {lan === 'greek' ? 
  "Αρχιτέκτονας"
: lan === 'french' ? 
  "Architecte"
: lan === 'russian' ? 
  "Архитектор"
: lan === 'english' ? 
  "Responsibilities:"
: lan === 'hebrew' ? 
  "אדריכל"
: "home"}
</h3>
<p class="font-body text-white/80 leading-relaxed text-sm md:text-base max-w-md">
             
       {lan === 'greek' ? 
  "Υπεύθυνος για τη μελέτη του έργου, τον σχεδιασμό και την αρχιτεκτονική επίβλεψη κατά την εκτέλεση των εργασιών στο εργοτάξιο."
: lan === 'french' ? 
  "Responsable de l’étude du projet, de la conception et de la supervision architecturale pendant l’exécution des travaux sur le chantier."
: lan === 'russian' ? 
  "Ответственный за проектирование, разработку и архитектурный надзор во время выполнения работ на строительной площадке."
: lan === 'english' ? 
  "Responsible for project study, design, and architectural supervision during the execution of works on the construction site."
: lan === 'hebrew' ? 
  "אחראי על חקר הפרויקט, תכנון ופיקוח אדריכלי במהלך ביצוע העבודות באתר הבנייה."
: "home"}
  </p>
</div>
</div> 
<div class="animate   p-4 bbb" style={{textAlign:"left" ,boxShadow: "0 33px 54px rgba(0,0,0,0.25),  20px 16px 28px rgba(0,0,0,0.2)"}}>
<div class="bg-matrix-green text-white p-12 chamfer-clip min-h-[400px] flex flex-col items-center text-center" style={{textAlign:"left"}}>
<div class="w-24 h-24 bg-white/10 flex items-center justify-center mb-8">
 <img src={pfp} alt="" />
</div>

<h3 class="font-headline font-bold  uppercase rotate-90 ghu">Civil Engineer</h3>
<h3 class="font-headline text-2xl font-bold tracking-tight mb-4 uppercase" style={{color:"black"}}>
    {lan === 'greek' ? 
  "Πολιτικός Μηχανικός"
: lan === 'french' ? 
  "Ingénieur civil"
: lan === 'russian' ? 
  "Инженер-строитель"
: lan === 'english' ? 
  "Responsibilities:"
: lan === 'hebrew' ? 
  "מהנדס אזרחי"
: "home"}
</h3>
<p class="font-body text-white/80 leading-relaxed text-sm md:text-base max-w-md">
          {lan === 'greek' ? 
  "Αναλαμβάνει τη στατική μελέτη του έργου και την επίβλεψη των κατασκευαστικών εργασιών στο εργοτάξιο, διασφαλίζοντας τη συμμόρφωση με τα προβλεπόμενα πρότυπα και κανονισμούς."
: lan === 'french' ? 
  "Il prend en charge l’étude structurelle du projet et la supervision des travaux de construction sur le chantier, en garantissant le respect des normes et réglementations en vigueur."
: lan === 'russian' ? 
  "Он отвечает за конструктивное проектирование проекта и надзор за строительными работами на площадке, обеспечивая соблюдение действующих стандартов и норм."
: lan === 'english' ? 
  "Responsible for the structural study of the project and the supervision of construction works on site, ensuring compliance with the applicable standards and regulations."
: lan === 'hebrew' ? 
  "אחראי על התכנון הקונסטרוקטיבי של הפרויקט ופיקוח על עבודות הבנייה באתר, תוך הבטחת עמידה בתקנים ובתקנות הרלוונטיים."
: "home"}
   </p>
</div>
</div> 
<div class="animate   p-4 bbb" style={{textAlign:"left" ,boxShadow: "0 33px 54px rgba(0,0,0,0.25),  20px 16px 28px rgba(0,0,0,0.2)"}}>
<div class="bg-matrix-green text-white p-12 chamfer-clip min-h-[400px] flex flex-col items-center text-center" style={{textAlign:"left"}}>
<div class="w-24 h-24 bg-white/10 flex items-center justify-center mb-8">
 <img src={pfp} alt="" />
</div>

<h3 class="font-headline font-bold  uppercase rotate-90 ghu">Mechanical Engineer</h3>
<h3 class="font-headline text-2xl font-bold tracking-tight mb-4 uppercase" style={{color:"black"}}>
   {lan === 'greek' ? 
  "Μηχανολόγος Μηχανικός"
: lan === 'french' ? 
  "Ingénieur mécanique"
: lan === 'russian' ? 
  "Инженер-механик"
: lan === 'english' ? 
  "Responsibilities:"
: lan === 'hebrew' ? 
  "מהנדס מכונות"
: "home"}
</h3>{lan === 'greek' ? 
<p class="font-body text-white/80 leading-relaxed text-sm md:text-base max-w-md">
  Υπεύθυνος για:
  <br /><br />
  * Τη σύνταξη της Μελέτης Ενεργειακής Απόδοσης του κτιρίου. <br />
  * Τη μελέτη όλων των μηχανολογικών εγκαταστάσεων. <br />
  * Την επίβλεψη των μηχανολογικών εργασιών κατά την υλοποίηση του έργου.
</p>

: lan === 'french' ? 
<p class="font-body text-white/80 leading-relaxed text-sm md:text-base max-w-md">
  Responsable de :
  <br /><br />
  * La rédaction de l’étude de performance énergétique du bâtiment. <br />
  * La conception de toutes les installations mécaniques. <br />
  * La supervision des travaux mécaniques pendant l’exécution du projet.
</p>

: lan === 'russian' ? 
<p class="font-body text-white/80 leading-relaxed text-sm md:text-base max-w-md">
  Ответственный за:
  <br /><br />
  * Подготовку энергетического паспорта здания. <br />
  * Проектирование всех механических систем. <br />
  * Надзор за механическими работами в процессе реализации проекта.
</p>

: lan === 'english' ? 
<p class="font-body text-white/80 leading-relaxed text-sm md:text-base max-w-md">
  Responsible for:
  <br /><br />
  * Preparing the Building Energy Performance Study. <br />
  * Designing all mechanical installations. <br />
  * Supervising mechanical works during project execution.
</p>

: lan === 'hebrew' ? 
<p class="font-body text-white/80 leading-relaxed text-sm md:text-base max-w-md">
  אחראי על:
  <br /><br />
  * הכנת דו"ח ביצועי אנרגיה של המבנה. <br />
  * תכנון כל המערכות המכניות. <br />
  * פיקוח על העבודות המכניות במהלך ביצוע הפרויקט.
</p>

: "home"}
</div>
</div> 
<div class="animate p-4 bbb" style={{textAlign:"left" ,boxShadow: "0 33px 54px rgba(0,0,0,0.25),  20px 16px 28px rgba(0,0,0,0.2)"}}>
<div class="bg-matrix-green text-white p-12 chamfer-clip min-h-[400px] flex flex-col items-center text-center" style={{textAlign:"left"}}>
<div class="w-24 h-24 bg-white/10 flex items-center justify-center mb-8">
 <img src={pfp} alt="" />
</div>

<h3 class="font-headline font-bold  uppercase rotate-90 ghu">Electrical Engineer</h3>
<h3 class="font-headline text-2xl font-bold tracking-tight mb-4 uppercase" style={{color:"black"}}> 
    {lan === 'greek' ? 
  "Ηλεκτρολόγος Μηχανικός"
: lan === 'french' ? 
  "Ingénieur électricien"
: lan === 'russian' ? 
  "Инженер-электрик"
: lan === 'english' ? 
  "Responsible for"
: lan === 'hebrew' ? 
  "מהנדס חשמל"
: "home"}  
</h3>
<p class="font-body text-white/80 leading-relaxed text-sm md:text-base max-w-md">
           
    {lan === 'greek' ? 
  "Αρμόδιος για τη μελέτη των ηλεκτρολογικών εγκαταστάσεων και τη συνεχή επίβλεψη της ορθής εφαρμογής τους στο εργοτάξιο."
: lan === 'french' ? 
  "Responsable de l’étude des installations électriques et de la supervision continue pour garantir leur bonne mise en œuvre sur le chantier."
: lan === 'russian' ? 
  "Ответственный за проектирование электрических систем и постоянный контроль их правильного выполнения на строительной площадке."
: lan === 'english' ? 
  "Responsible for the design of electrical installations and continuous supervision to ensure their proper implementation on site."
: lan === 'hebrew' ? 
  "אחראי על תכנון מערכות החשמל ופיקוח מתמשך להבטחת יישומן התקין באתר הבנייה."
: "home"} </p>
</div>
</div>
</div>
</main>
        </div>
    );
}

export default Organization;
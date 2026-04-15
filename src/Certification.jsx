
import { useLocation } from 'react-router-dom';
import {useEffect } from 'react'
import logo from "./assets/logo_1.png"

import { Helmet } from "react-helmet-async";
function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    // Scroll to the top of the page whenever the route changes
    window.scrollTo(0, 0);
  }, [location]);

  return null; // This component doesn't render anything
}
function Certification(props) {
    const lan = props.language
    return (
        <div>
            <Helmet>
                    <title>Certified Construction</title>
                    <meta name="description" content="Green Living construction company acheived many qaulity certificates including. Energy Performance Certificate, Certificates of quality and authenticity for specific materials ,Concrete quality certificate,Soil quality study certificate,All our projects come with a one (1) year workmanship guarantee.
,Energy performance certificates, Category A.
Soil quality certificate for backfill.
,Concrete quality certificate.
,Authenticity certificates of selected construction materials (where applicable)., Architectural drawings (floor plans, elevations).
,Electrical installation study,Hydraulic installation drawings, showing the exact placement of pipes.
" />
                 <link rel="canonical" href="https://yourwebsite.com/certification" />
            
                 <meta property="og:title" content="GREENLIVING Construction&Development ltd" />
            <meta property="og:description" content="We build green/energy efficient construction projects. We provide natural sustainable designs with green space in the development area." />
            <meta property="og:image" content="/https://yourwebsite.com/assets/logo_1.png" />
                 
                  </Helmet>
            
      <ScrollToTop />
<main class=" mx-auto px-8 py-12 vb" style={{backgroundColor:"#74ca2dfb",paddingTop:"2.2rem"}}>
    <h2 class=" rotate-90 gr" style={{color:"#ffffff"}}>GREEN LIVING
</h2>
<div class="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12  ">
<section class="space-y-8">
<div class="arrow-right-head bg-primary-fixed w-[90%] py-6 pl-8 pr-16 animateleft">
<h2 class="font-headline font-extrabold text-on-primary-fixed text-xl leading-tight" style={{color:"#74ca2d"}}>
  {lan === 'greek' ? 
  "Πιστοποιητικά"
: lan === 'french' ? 
  "Certificats"
: lan === 'russian' ? 
  "Сертификаты"
: lan === 'english' ? 
  "Certificates"
: lan === 'hebrew' ? 
  "תעודות"
: "home"} 
</h2>
</div>
<div class="animate relative ml-4 space-y-6">
<div class="  absolute top-0 bottom-3 w-[8px] bg-white left-[-36px]" style={{borderRadius:"5px"}}></div>
<div class="relative pl-10">
<p class="text-on-surface-variant font-medium" style={{color:"#ffffff" , textAlign:"left"}}>
  {lan === 'greek' ? 
  "Πιστοποιητικό ενεργειακής απόδοσης, το οποίο αποτυπώνει την ενεργειακή κατηγοριοποίηση του κτιρίου σύμφωνα με την ισχύουσα νομοθεσία."
: lan === 'french' ? 
  "Certificat de performance énergétique, reflétant la classification énergétique du bâtiment conformément à la législation en vigueur."
: lan === 'russian' ? 
  "Сертификат энергетической эффективности, отражающий энергетическую классификацию здания в соответствии с действующим законодательством."
: lan === 'english' ? 
  "Energy Performance Certificate, reflecting the building’s energy classification in accordance with the applicable legislation."
: lan === 'hebrew' ? 
  "תעודת ביצועים אנרגטיים, המשקפת את סיווג האנרגיה של הבניין בהתאם לחקיקה הקיימת."
: "home"}
</p>
</div>
<div class="relative pl-10">

   
<p class="text-on-surface-variant font-medium" style={{color:"#ffffff" , textAlign:"left"}}>
  {lan === 'greek' ? 
  "Πιστοποιητικά ποιότητας και αυθεντικότητας για ορισμένα υλικά που χρησιμοποιούνται στην κατασκευή."
: lan === 'french' ? 
  "Certificats de qualité et d’authenticité pour certains matériaux utilisés dans la construction."
: lan === 'russian' ? 
  "Сертификаты качества и подлинности для отдельных материалов, используемых в строительстве."
: lan === 'english' ? 
  "Certificates of quality and authenticity for specific materials used in the construction"
: lan === 'hebrew' ? 
  "תעודות איכות ואותנטיות עבור חומרים מסוימים המשמשים בבנייה."
: "home"}  </p>
</div>
<div class="relative pl-10">

   
<p class="text-on-surface-variant font-medium" style={{color:"#ffffff" , textAlign:"left"}}>
   {lan === 'greek' ? 
  "Πιστοποιητικό ποιότητας σκυροδέματος, για τη διασφάλιση της συμμόρφωσης με τις προβλεπόμενες προδιαγραφές αντοχής και διάρκειας ζωής του φέροντος οργανισμού."
: lan === 'french' ? 
  "Certificat de qualité du béton, garantissant la conformité aux spécifications requises en matière de résistance et de durabilité de la structure porteuse."
: lan === 'russian' ? 
  "Сертификат качества бетона, обеспечивающий соответствие установленным требованиям прочности и долговечности несущей конструкции."
: lan === 'english' ? 
  "Concrete quality certificate, ensuring compliance with the prescribed specifications for strength and durability of the structural framework."
: lan === 'hebrew' ? 
  "תעודת איכות בטון, המבטיחה עמידה במפרטים הנדרשים לחוזק ועמידות של שלד המבנה."
: "home"}
</p>
</div>
<div class="relative pl-10">

   
<p class="text-on-surface-variant font-medium" style={{color:"#ffffff" , textAlign:"left"}}>
    {lan === 'greek' ? 
  "Πιστοποιητικό μελέτης της ποιότητας του εδάφους, με σκοπό την αξιολόγηση των γεωτεχνικών χαρακτηριστικών και της καταλληλότητας της θεμελίωσης."
: lan === 'french' ? 
  "Certificat d’étude de la qualité du sol, visant à évaluer les caractéristiques géotechniques et l’aptitude des fondations."
: lan === 'russian' ? 
  "Сертификат исследования качества грунта, направленный на оценку геотехнических характеристик и пригодности фундамента."
: lan === 'english' ? 
  "Soil quality study certificate, aimed at evaluating the geotechnical characteristics and the suitability of the foundation"
: lan === 'hebrew' ? 
  "תעודת בדיקת איכות הקרקע, שמטרתה להעריך את המאפיינים הגיאוטכניים והתאמת היסודות."
: "home"} </p>
</div> 
</div>
</section>
<section class="space-y-8 md:pt-4">
<div class="flex justify-start py-2">
<div class="bg-surface-container-low px-6 py-3 rounded-xl flex items-center gap-4 border border-outline-variant/30 shadow-sm" style={{backgroundColor:"#ffffff00" , border:"0px solid #ffffff00 "}}>

<img src={logo} alt="" className='qy' />
</div>
</div>
<div class="mt-8 ">
      <h2 class=" rotate-90 gr2" style={{color:"#ffffff"}}>OF QUALITY
</h2>
<div class="arrow-left-head bg-secondary-fixed w-[90%] py-6 pr-8 pl-16 mb-8 ml-auto">
<h2 class="font-headline font-extrabold text-on-secondary-fixed text-xl text-right" style={{color:"#74ca2d",textAlign:"left",paddingLeft:"20%"}}>
   {lan === 'greek' ? 
  "Εγγυήσεις"
: lan === 'french' ? 
  "Garanties"
: lan === 'russian' ? 
  "Гарантии"
: lan === 'english' ? 
  "Warranty"
: lan === 'hebrew' ? 
  "אחריות"
: "home"} </h2>
</div>
<div class="relative mr-4 space-y-6 flex flex-col items-end animate">
<div class="relative w-full max-w-sm space-y-6">
<div class="absolute top-3 bottom-3 w-[8px] bg-white right-[-8px]" style={{borderRadius:"5px"}}></div>
<div class="relative pr-10 text-right"> 
<p class="text-on-surface-variant font-medium" style={{color:"#ffffff" , textAlign:"right"}}

>
   {lan === 'greek' ? 
  "Όλα τα έργα μας συνοδεύονται από εγγύηση καλής εκτέλεσης διάρκειας ενός (1) έτους."
: lan === 'french' ? 
  "Tous nos projets sont accompagnés d’une garantie de bonne exécution d’une durée d’un (1) an."
: lan === 'russian' ? 
  "Все наши проекты сопровождаются гарантией надлежащего выполнения сроком на один (1) год."
: lan === 'english' ? 
  "All our projects are accompanied by a one (1) year workmanship warranty."
: lan === 'hebrew' ? 
  "כל הפרויקטים שלנו מלווים באחריות ביצוע למשך שנה אחת (1)."
: "home"}</p>
   
    All our projects come with a one (1) year workmanship guarantee.</div>
<div class="relative pr-10 text-right"> 
<p class="text-on-surface-variant font-medium"  style={{color:"#ffffff" , textAlign:"right"}}>
   {lan === 'greek' ? 
  "Επιπλέον, ορισμένα υλικά διαθέτουν εγγύηση σύμφωνα με τις τεχνικές προδιαγραφές που θα παρέχονται από τους υποεργολάβους"
: lan === 'french' ? 
  "De plus, certains matériaux bénéficient d’une garantie conformément aux spécifications techniques fournies par les sous-traitants."
: lan === 'russian' ? 
  "Кроме того, на некоторые материалы распространяется гарантия в соответствии с техническими спецификациями, предоставляемыми субподрядчиками."
: lan === 'english' ? 
  "Additionally, certain materials carry a warranty according to the technical specifications provided by the subcontractors"
: lan === 'hebrew' ? 
  "בנוסף, לחלק מהחומרים קיימת אחריות בהתאם למפרטים הטכניים המסופקים על ידי קבלני המשנה."
: "home"}.</p>
</div>
<div class="relative pr-10 text-right"> 
<p class="text-on-surface-variant font-medium"  style={{color:"#ffffff" , textAlign:"right"}}>
     {lan === 'greek' ? 
  "Η έκδοση της απαιτούμενης άδειας οικοδομής εξασφαλίζεται πριν από την έναρξη οποιασδήποτε εργασίας στο εργοτάξιο"
: lan === 'french' ? 
  "L’obtention du permis de construire requis est assurée avant le début de tout travail sur le chantier."
: lan === 'russian' ? 
  "Получение необходимого разрешения на строительство обеспечивается до начала любых работ на строительной площадке."
: lan === 'english' ? 
  "The issuance of the required building permit is secured prior to the commencement of any work on the construction site"
: lan === 'hebrew' ? 
  "הוצאת היתר הבנייה הנדרש מובטחת לפני תחילת כל עבודה באתר הבנייה."
: "home"}
    .
</p>
</div>

<div class="relative pr-10 text-right">
<p class="text-on-surface-variant font-medium"  style={{color:"#ffffff" , textAlign:"right"}}>
      {lan === 'greek' ? 
  "Τέλος, παρέχεται εγγύηση διασφάλισης τίτλου ιδιοκτησίας προς τους τελικούς αγοραστές, διασφαλίζοντας τη νομιμότητα και τη διαφάνεια των δικαιοπραξιών"
: lan === 'french' ? 
  "Enfin, une garantie de titre de propriété est fournie aux acheteurs finaux, assurant la légalité et la transparence de toutes les transactions."
: lan === 'russian' ? 
  "В заключение конечным покупателям предоставляется гарантия права собственности, обеспечивающая законность и прозрачность всех сделок."
: lan === 'english' ? 
  "Finally, a title deed assurance is provided to the final buyers, ensuring the legality and transparency of all transactions."
: lan === 'hebrew' ? 
  "לבסוף, ניתנת הבטחת זכויות קניין לרוכשים הסופיים, המבטיחה את החוקיות והשקיפות של כל העסקאות."
: "home"}
    
   
</p>
</div>
</div>
</div>
</div>
</section>
<section class="space-y-8 yu">
<div class="arrow-right-head bg-tertiary-fixed w-[85%] py-6 pl-8 pr-16 animateleft">
<h2 class="font-headline font-extrabold text-on-tertiary-fixed text-xl leading-tight"  style={{color:"#74ca2d"}}>
     {lan === 'greek' ? 
  "Ασφάλειες"
: lan === 'french' ? 
  "Assurances"
: lan === 'russian' ? 
  "Страхование"
: lan === 'english' ? 
  "Insurance"
: lan === 'hebrew' ? 
  "ביטוח"
: "home"}

</h2>
</div>
<div class="relative ml-4 space-y-6">
<div class="absolute top-1 bottom-3 w-[8px] bg-white left-[-30px]" style={{borderRadius:"5px"}}></div>
<div class="relative pl-10">
<p class="text-on-surface-variant font-medium" style={{color:"#ffffff" , textAlign:"left"}}>
   {lan === 'greek' ? 
  "Για τη διασφάλιση της ασφάλειας των εργαζομένων και της ομαλής εξέλιξης του έργου, εφαρμόζεται ολοκληρωμένο Σχέδιο Ασφάλειας και Υγείας, εγκεκριμένο πριν την έναρξη των εργασιών."
: lan === 'french' ? 
  "Afin d’assurer la sécurité des travailleurs et le bon déroulement du projet, un Plan de Santé et de Sécurité complet est mis en œuvre, approuvé avant le début des travaux."
: lan === 'russian' ? 
  "Для обеспечения безопасности работников и бесперебойного хода проекта внедряется комплексный план охраны труда и техники безопасности, утверждённый до начала работ."
: lan === 'english' ? 
  "To ensure the safety of workers and the smooth progress of the project, a comprehensive Health and Safety Plan is implemented, approved prior to the commencement of works."
: lan === 'hebrew' ? 
  "להבטחת בטיחות העובדים והתקדמות חלקה של הפרויקט, מיושם תכנית בטיחות ובריאות מקיפה המאושרת לפני תחילת העבודות."
: "home"}

</p>
</div>
<div class="relative pl-10">
<p class="text-on-surface-variant font-medium" style={{color:"#ffffff" , textAlign:"left"}}>
   {lan === 'greek' ? 
  "Όλα τα εργοτάξια είναι πλήρως ασφαλισμένα."
: lan === 'french' ? 
  "Tous les chantiers sont entièrement assurés."
: lan === 'russian' ? 
  "Все строительные площадки полностью застрахованы."
: lan === 'english' ? 
  "All construction sites are fully insured."
: lan === 'hebrew' ? 
  "כל אתרי הבנייה מבוטחים באופן מלא."
: "home"}
</p>
</div>
</div>
</section>
<section class="md:pt-16">
<div class="animate border-l-[3px] border-primary pl-8 py-4 bg-surface-container-low/50 rounded-r-xl" style={{backgroundColor:" #67c51b"}}>
<p class="text-on-surface font-headline font-bold text-lg mb-3" style={{color:"#ffffff" , textAlign:"left"}}>Executive Summary</p>
   
  {lan === 'greek' ? 
<p class="text-on-surface-variant text-base leading-relaxed" style={{color:"#ffffff" , textAlign:"left"}}>
 Το έργο συνοδεύεται από πλήρη αρχιτεκτονικά και ηλεκτρομηχανολογικά σχέδια, μελέτες υδραυλικών εγκαταστάσεων, καθώς και πιστοποιητικά ποιότητας υλικών και ενεργειακής απόδοσης. Προβλέπεται τοποθέτηση εξωτερικής θερμομόνωσης για την αποφυγή θερμογέφυρων, εφαρμογή τσιμεντομόνωσης σε όλες τις βεράντες και χρήση υαλοπινάκων ενεργειακής απόδοσης.
<br /> <br />
Παράλληλα, σε όλες τις κατοικίες εντάσσεται ανάπτυξη χώρων πρασίνου και αρχιτεκτονική τοπίου, με σκοπό τη διαμόρφωση ευνοϊκού μικροκλίματος και τη βελτίωση της ποιότητας αέρα στις αστικές ζώνες.
</p>

: lan === 'french' ?
<p class="text-on-surface-variant text-base leading-relaxed" style={{color:"#ffffff" , textAlign:"left"}}>
Le projet est accompagné de plans architecturaux et électromécaniques complets, d’études des installations hydrauliques, ainsi que de certificats de qualité des matériaux et de performance énergétique. Il est prévu l’installation d’une isolation thermique extérieure afin de prévenir les ponts thermiques, l’application d’une étanchéité au ciment sur toutes les vérandas, ainsi que l’utilisation de vitrages à haute performance énergétique.
<br /> <br />
Par ailleurs, toutes les résidences intègrent des espaces verts et une architecture paysagère, visant à créer un microclimat favorable et à améliorer la qualité de l’air en zone urbaine.
</p>

: lan === 'russian' ?
<p class="text-on-surface-variant text-base leading-relaxed" style={{color:"#ffffff" , textAlign:"left"}}>
Проект сопровождается полными архитектурными и электромеханическими чертежами, исследованиями систем водоснабжения, а также сертификатами качества материалов и энергетической эффективности. Предусмотрена установка внешней теплоизоляции для предотвращения тепловых мостов, применение цементной гидроизоляции на всех верандах и использование энергоэффективного остекления.
<br /> <br />
Одновременно во всех жилых объектах предусмотрены зелёные зоны и ландшафтная архитектура с целью формирования благоприятного микроклимата и улучшения качества воздуха в городской среде.
</p>

: lan === 'english' ?
<p class="text-on-surface-variant text-base leading-relaxed" style={{color:"#ffffff" , textAlign:"left"}}>
The project is accompanied by comprehensive architectural and electromechanical drawings, hydraulic installation studies, as well as material quality and energy performance certificates. Provisions include the installation of external thermal insulation to prevent thermal bridging, the application of cementitious waterproofing on all verandas, and the use of energy-efficient glazing.
<br /> <br />
At the same time, all residences incorporate green spaces and landscape architecture, aiming to create a favorable microclimate and enhance air quality within urban areas.
</p>

: lan === 'hebrew' ?
<p class="text-on-surface-variant text-base leading-relaxed" style={{color:"#ffffff" , textAlign:"left"}}>
הפרויקט מלווה בתכניות אדריכליות ואלקטרו־מכניות מלאות, מחקרי מערכות מים, וכן תעודות איכות חומרים וביצועים אנרגטיים. מתוכננת התקנת בידוד תרמי חיצוני למניעת גשרי קור, יישום איטום צמנטי בכל המרפסות ושימוש בזיגוג בעל יעילות אנרגטית גבוהה.
<br /> <br />
במקביל, בכל הדירות משולבים שטחים ירוקים ואדריכלות נוף, במטרה ליצור מיקרו־אקלים נוח ולשפר את איכות האוויר באזורים עירוניים.
</p>

: "home"}
  

</div>
</section>
</div>

<section class="mt-20 pt-12 border-t border-surface-container-high gop">
<div class="arrow-right-head bg-tertiary-fixed w-[75%] py-6 pl-8 pr-16 nnnv animateleft" >
<h2 class="font-headline font-extrabold text-on-tertiary-fixed text-xl leading-tight  "  style={{color:"#74ca2d"}}>
  {lan === 'greek' ? 
  "Μονώσεις"
: lan === 'french' ? 
  "Isolations"
: lan === 'russian' ? 
  "Изоляция"
: lan === 'english' ? 
  "INSULATION"
: lan === 'hebrew' ? 
  "בידוד"
: "home"}
</h2>
</div>
<p class="text-on-surface-variant text-base leading-relaxed hjk"  style={{color:"#ffffff" , textAlign:"left" ,marginBottom2:"20px",marginTop:"20px"}}>
       {lan === 'greek' ? 
  "Για τη βελτίωση της ενεργειακής απόδοσης και τη μακροχρόνια ανθεκτικότητα του κτιρίου, προβλέπονται οι παρακάτω επεμβάσεις και τεχνικές:"
: lan === 'french' ? 
  "Pour améliorer la performance énergétique du bâtiment et assurer sa durabilité à long terme, les interventions et techniques suivantes sont mises en œuvre :"
: lan === 'russian' ? 
  "Для повышения энергоэффективности здания и обеспечения его долговечной устойчивости предусмотрены следующие меры и технологии:"
: lan === 'english' ? 
  "To enhance the building’s energy efficiency and ensure its long-term durability, the following interventions and techniques are implemented:"
: lan === 'hebrew' ? 
  "לשיפור היעילות האנרגטית של המבנה ולהבטחת עמידותו לטווח ארוך, מיושמות ההתערבויות והטכניקות הבאות:"
: "home"}
                
</p>

<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-4" style={{display:"flex",flexWrap:"wrap", marginTop:"30px"}}>
<div class="animate flex gap-4   p-4 bg-black/50 rounded-lg rrrt">
<span class="font-headline font-extrabold text-primary text-xl">01</span>
<p class="text-on-surface-variant font-medium leading-tight text-sm" style={{color:"#ffffff" , textAlign:"left"}}>
   {lan === 'greek' ? 
  "Τοποθέτηση εξωτερικής θερμομόνωσης στις τοιχοποιίες, με στόχο την αποφυγή θερμογέφυρων και τη βελτίωση της θερμικής προστασίας του κελύφους."
: lan === 'french' ? 
  "Installation d’une isolation thermique extérieure sur les murs en maçonnerie, afin de prévenir les ponts thermiques et d’améliorer la protection thermique de l’enveloppe du bâtiment."
: lan === 'russian' ? 
  "Установка внешней теплоизоляции на стены кладки с целью предотвращения тепловых мостов и улучшения тепловой защиты ограждающих конструкций здания."
: lan === 'english' ? 
  "Installation of external thermal insulation on masonry walls, aimed at preventing thermal bridging and improving the thermal protection of the building envelope."
: lan === 'hebrew' ? 
  "התקנת בידוד תרמי חיצוני על קירות הבניין, במטרה למנוע גשרי קור ולשפר את ההגנה התרמית של מעטפת המבנה."
: "home"}

.</p>
</div>
<div class="animate flex gap-4   p-4 bg-black/50 rounded-lg rrrt">
<span class="font-headline font-extrabold text-primary text-xl">02</span>
<p class="text-on-surface-variant font-medium leading-tight text-sm" style={{color:"#ffffff" , textAlign:"left"}}>
  {lan === 'greek' ? 
  "Επιμελημένη τοποθέτηση στρώσης γρο μπετόν και πολυαιθυλενίου (πολυθήνης) στα θεμέλια, κάτω από την πεδιλόπλακα, για την αποτροπή ανιούσας υγρασίας. Παράλληλα, εφαρμόζεται τσιμεντομόνωση σε όλες τις βεράντες για τη στεγανοποίηση και προστασία από υγρασία."
: lan === 'french' ? 
  "Application soignée d’une couche de béton maigre et d’une membrane en polyéthylène aux fondations, sous la dalle de fondation, afin de prévenir les remontées d’humidité. Parallèlement, une étanchéité cimentaire est appliquée sur toutes les vérandas pour assurer l’imperméabilisation et la protection contre l’humidité."
: lan === 'russian' ? 
  "Тщательная укладка слоя тощего бетона и полиэтиленовой мембраны в фундаменте под фундаментной плитой для предотвращения капиллярного подъема влаги. Кроме того, на всех верандах выполняется цементная гидроизоляция для герметизации и защиты от влаги."
: lan === 'english' ? 
  "Careful application of a lean concrete layer and polyethylene (polythene) membrane at the foundations, beneath the footing slab, to prevent rising damp. In addition, cementitious waterproofing is applied on all verandas to provide sealing and protection against moisture."
: lan === 'hebrew' ? 
  "יישום מוקפד של שכבת בטון רזה וממברנת פוליאתילן ביסודות, מתחת ללוח היסוד, למניעת עליית רטיבות. בנוסף, מיושם איטום צמנטי בכל המרפסות לאיטום ולהגנה מפני לחות."
: "home"}

</p>
</div>
<div class="animate flex gap-4   p-4 bg-black/50 rounded-lg rrrt">
<span class="font-headline font-extrabold text-primary text-xl">03</span>
<p class="text-on-surface-variant font-medium leading-tight text-sm" style={{color:"#ffffff" , textAlign:"left"}}>
   {lan === 'greek' ? 
  "Επιλογή δομικών υλικών με χαμηλούς συντελεστές θερμοπερατότητας, για τη μείωση των θερμικών απωλειών."
: lan === 'french' ? 
  "Sélection de matériaux de construction à faible coefficient de transmission thermique, afin de réduire les pertes de chaleur."
: lan === 'russian' ? 
  "Выбор строительных материалов с низким коэффициентом теплопередачи для снижения теплопотерь."
: lan === 'english' ? 
  "Selection of construction materials with low thermal transmittance coefficients, in order to reduce heat losses."
: lan === 'hebrew' ? 
  "בחירת חומרי בנייה בעלי מקדמי מעבר חום נמוכים, לצמצום אובדן החום."
: "home"}

</p>
</div>
<div class="animate flex gap-4   p-4 bg-black/50 rounded-lg rrrt">
<span class="font-headline font-extrabold text-primary text-xl">04</span>
<p class="text-on-surface-variant font-medium leading-tight text-sm" style={{color:"#ffffff" , textAlign:"left"}}>
    {lan === 'greek' ? 
  "Τοποθέτηση διπλών ενεργειακών υαλοπινάκων με χαμηλό συντελεστή θερμοπερατότητας και ενεργειακή επίστρωση (Low-E), για τη βελτίωση της θερμομονωτικής ικανότητας των ανοιγμάτων και τον περιορισμό των απωλειών."
: lan === 'french' ? 
  "Installation de doubles vitrages à haute performance énergétique avec faible coefficient de transmission thermique et revêtement Low-E, améliorant l’isolation thermique des ouvertures et réduisant les pertes d’énergie."
: lan === 'russian' ? 
  "Установка двухкамерных энергосберегающих стеклопакетов с низким коэффициентом теплопередачи и покрытием Low-E, что повышает теплоизоляционные свойства проёмов и снижает теплопотери."
: lan === 'english' ? 
  "Installation of double energy-efficient glazing with low thermal transmittance and Low-E coating, enhancing the thermal insulation capacity of openings and minimizing energy losses."
: lan === 'hebrew' ? 
  "התקנת זיגוג כפול חסכוני באנרגיה עם מקדם מעבר חום נמוך וציפוי Low-E, לשיפור הבידוד התרמי של הפתחים ולהפחתת איבודי אנרגיה."
: "home"}
</p>
</div> 
</div>
</section>
<section class="mt-20 pt-12 border-t border-surface-container-high">
<div class="arrow-wide-80 bg-primary-container  py-8 pl-10 pr-20 mb-12 animateleft">
<h2 class="font-headline font-extrabold text-on-primary-container text-2xl tracking-tight nm" style={{color:"#41c315" , textAlign:"right"}}>
     {lan === 'greek' ? 
  "Απαραίτητα Πιστοποιητικά και Μελέτες για Τεχνικό Φάκελο Έργου"
: lan === 'french' ? 
  "Certificats et études nécessaires pour le dossier technique du projet"
: lan === 'russian' ? 
  "Необходимые сертификаты и исследования для технического досье проекта"
: lan === 'english' ? 
  "All the necessary quality certificates for the study of building materials and analytical studies"
: lan === 'hebrew' ? 
  "כל התעודות והבדיקות הנדרשות לתיק הטכני של הפרויקט"
: "home"}
   
</h2>
</div>
  {lan === 'greek' ?  
<p class="text-on-surface-variant text-base leading-relaxed amru" style={{color:"#ffffff" , textAlign:"left"}}>
 Στο πλαίσιο της ολοκλήρωσης του τεχνικού φακέλου του έργου και σύμφωνα με τις ισχύουσες πολεοδομικές, περιβαλλοντικές και ενεργειακές διατάξεις, συγκεντρώνονται τα ακόλουθα πιστοποιητικά, μελέτες και σχέδια. Τα εν λόγω έγγραφα διασφαλίζουν την ποιότητα των υλικών, την ενεργειακή αποδοτικότητα του κτιρίου, καθώς και την ορθή και ασφαλή υλοποίηση των ηλεκτρομηχανολογικών και υδραυλικών εγκαταστάσεων.

<br /> <br />
Η πλήρης τεκμηρίωση του έργου, όπως αυτή περιγράφεται στον παρόντα φάκελο, αποτελεί προαπαιτούμενο για την έγκριση των εργασιών και τη νόμιμη αδειοδότησή τους. τα ακόλουθα πιστοποιητικά θα παρέχονται στους πελάτες μας.
</p>

: lan === 'french' ?
<p class="text-on-surface-variant text-base leading-relaxed amru" style={{color:"#ffffff" , textAlign:"left"}}>
Dans le cadre de la finalisation du dossier technique du projet et conformément aux réglementations urbanistiques, environnementales et énergétiques en vigueur, les certificats, études et plans suivants sont rassemblés. Ces documents garantissent la qualité des matériaux, l’efficacité énergétique du bâtiment, ainsi que la bonne et sûre réalisation des installations électromécaniques et hydrauliques.

<br /> <br />
La documentation complète du projet, telle que décrite dans ce dossier, constitue une condition préalable à l’approbation des travaux et à leur autorisation légale. Les certificats suivants seront fournis à nos clients.
</p>

: lan === 'russian' ?
<p class="text-on-surface-variant text-base leading-relaxed amru" style={{color:"#ffffff" , textAlign:"left"}}>
В рамках завершения технического досье проекта и в соответствии с действующими градостроительными, экологическими и энергетическими нормами собираются следующие сертификаты, исследования и чертежи. Эти документы обеспечивают качество материалов, энергоэффективность здания, а также правильное и безопасное выполнение электромеханических и гидравлических установок.

<br /> <br />
Полная документация проекта, как описано в настоящем файле, является обязательным условием для утверждения работ и их законного разрешения. Следующие сертификаты будут предоставлены нашим клиентам.
</p>

: lan === 'english' ?
<p class="text-on-surface-variant text-base leading-relaxed amru" style={{color:"#ffffff" , textAlign:"left"}}>
As part of the completion of the project’s technical file and in accordance with applicable urban planning, environmental, and energy regulations, the following certificates, studies, and plans are collected. These documents ensure the quality of materials, the building’s energy efficiency, as well as the correct and safe implementation of electromechanical and hydraulic installations.

<br /> <br />
The complete project documentation, as described in this file, is a prerequisite for the approval of works and their legal permitting. The following certificates will be provided to our clients.
</p>

: lan === 'hebrew' ?
<p class="text-on-surface-variant text-base leading-relaxed amru" style={{color:"#ffffff" , textAlign:"left"}}>
במסגרת השלמת התיק הטכני של הפרויקט ובהתאם לתקנות התכנון העירוני, הסביבתי והאנרגטי החלות, נאספים האישורים, המחקרים והתוכניות הבאים. מסמכים אלה מבטיחים את איכות החומרים, את היעילות האנרגטית של המבנה, וכן את הביצוע הנכון והבטוח של המערכות האלקטרומכניות וההידראוליות.

<br /> <br />
התיעוד המלא של הפרויקט, כפי שמתואר בתיק זה, מהווה תנאי מקדים לאישור העבודות ולהיתר החוקי שלהן. האישורים הבאים יועברו ללקוחותינו.
</p>

: "home"}
 
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-4" style={{marginTop:"50px"}}>
<div class="animate flex gap-4   p-4 bg-white/50 rounded-lg">
<span class="font-headline font-extrabold text-primary text-xl">01</span>
<p class="text-on-surface-variant font-medium leading-tight text-sm" style={{color:"#ffffff" , textAlign:"left"}}>
     {lan === 'greek' ? 
  "Πιστοποιητικά ενεργειακής απόδοσης κατηγορίας Α’."
: lan === 'french' ? 
  "Certificats de performance énergétique, catégorie A."
: lan === 'russian' ? 
  "Сертификаты энергетической эффективности, категория A."
: lan === 'english' ? 
  "Energy performance certificates, Category A."
: lan === 'hebrew' ? 
  "תעודות ביצועים אנרגטיים, קטגוריה A."
: "home"}
</p>
</div>
<div class="animate flex gap-4   p-4 bg-white/50 rounded-lg">
<span class="font-headline font-extrabold text-primary text-xl">02</span>
<p class="text-on-surface-variant font-medium leading-tight text-sm" style={{color:"#ffffff" , textAlign:"left"}}>
    {lan === 'greek' ? 
  "Πιστοποιητικό ποιότητας του εδάφους επιχωμάτωσης."
: lan === 'french' ? 
  "Certificat de qualité du sol de remblai."
: lan === 'russian' ? 
  "Сертификат качества грунта для засыпки."
: lan === 'english' ? 
  "Soil quality certificate for backfill."
: lan === 'hebrew' ? 
  "תעודת איכות קרקע למילוי חוזר."
: "home"}
</p>
</div>
<div class="animate flex gap-4   p-4 bg-white/50 rounded-lg">
<span class="font-headline font-extrabold text-primary text-xl">03</span>
<p class="text-on-surface-variant font-medium leading-tight text-sm" style={{color:"#ffffff" , textAlign:"left"}}>
     {lan === 'greek' ? 
  "Πιστοποιητικό ποιότητας σκυροδέματος (μπετόν)."
: lan === 'french' ? 
  "Certificat de qualité du béton."
: lan === 'russian' ? 
  "Сертификат качества бетона."
: lan === 'english' ? 
  "Concrete quality certificate."
: lan === 'hebrew' ? 
  "תעודת איכות בטון."
: "home"}
</p>
</div>
<div class="animate flex gap-4   p-4 bg-white/50 rounded-lg">
<span class="font-headline font-extrabold text-primary text-xl">04</span>
<p class="text-on-surface-variant font-medium leading-tight text-sm" style={{color:"#ffffff" , textAlign:"left"}}>
     {lan === 'greek' ? 
  "Πιστοποιητικά αυθεντικότητας επιλεγμένων δομικών υλικών (όπου είναι εφικτό)."
: lan === 'french' ? 
  "Certificats d’authenticité des matériaux de construction sélectionnés (le cas échéant)."
: lan === 'russian' ? 
  "Сертификаты подлинности выбранных строительных материалов (при наличии)."
: lan === 'english' ? 
  "Authenticity certificates of selected construction materials (where applicable)."
: lan === 'hebrew' ? 
  "תעודות אותנטיות של חומרי בנייה נבחרים (במידת האפשר)."
: "home"}
</p>
</div>
<div class="animate flex gap-4   p-4 bg-white/50 rounded-lg">
<span class="font-headline font-extrabold text-primary text-xl">05</span>
<p class="text-on-surface-variant font-medium leading-tight text-sm" style={{color:"#ffffff" , textAlign:"left"}}>
     {lan === 'greek' ? 
  "Αρχιτεκτονικά σχέδια (κατόψεις, όψεις)."
: lan === 'french' ? 
  "Plans architecturaux (plans d’étage, façades)."
: lan === 'russian' ? 
  "Архитектурные чертежи (планы этажей, фасады)."
: lan === 'english' ? 
  "Architectural drawings (floor plans, elevations)."
: lan === 'hebrew' ? 
  "תכניות אדריכליות (תכניות קומה, חזיתות)."
: "home"}
</p>
</div>
<div class="animate flex gap-4   p-4 bg-white/50 rounded-lg">
<span class="font-headline font-extrabold text-primary text-xl">06</span>
<p class="text-on-surface-variant font-medium leading-tight text-sm" style={{color:"#ffffff" , textAlign:"left"}}>
     {lan === 'greek' ? 
  "Ηλεκτρολογική μελέτη εγκαταστάσεων."
: lan === 'french' ? 
  "Étude des installations électriques."
: lan === 'russian' ? 
  "Проект электрических установок."
: lan === 'english' ? 
  "Electrical installation study."
: lan === 'hebrew' ? 
  "תכנון מערכות חשמל."
: "home"}
</p>
</div>
<div class="animate flex gap-4   p-4 bg-white/50 rounded-lg">
<span class="font-headline font-extrabold text-primary text-xl">07</span>
<p class="text-on-surface-variant font-medium leading-tight text-sm" style={{color:"#ffffff" , textAlign:"left"}}>
     {lan === 'greek' ? 
  "Σχέδια υδραυλικών εγκαταστάσεων, με αποτύπωση της ακριβούς τοποθέτησης των σωληνώσεων."
: lan === 'french' ? 
  "Plans des installations hydrauliques, indiquant l’emplacement exact des canalisations."
: lan === 'russian' ? 
  "Чертежи водопроводных систем с указанием точного расположения труб."
: lan === 'english' ? 
  "Hydraulic installation drawings, showing the exact placement of pipes."
: lan === 'hebrew' ? 
  "תכניות מערכות אינסטלציה, עם סימון המיקום המדויק של הצנרת."
: "home"}
</p>
</div>
</div>
</section>
</main> 
        </div>
    );
}

export default Certification;
import { Link, Links } from 'react-router-dom'
import { Helmet } from "react-helmet-async";
import { useLocation } from 'react-router-dom';
import {useEffect , useRef,useState } from 'react'
import ft from './assets/Slide1.jfif'
import logo2 from "./assets/logo_1.png"
import solar from "./assets/solarpanels.png"

import v1 from "./assets/Green and Natural modern infrastructure design.png"
import v2 from "./assets/Green and Natural modern infrastructure design for buildings.png"

import we from './assets/modernhousewithgreenspace.jpg' 


function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    // Scroll to the top of the page whenever the route changes
    window.scrollTo(0, 0);
  }, [location]);

  return null; // This component doesn't render anything
}
function Home(props) {
  const lan = props.language


    return(
        <>

         <Helmet>
        <title>Construction Company in Cyprus</title>
        <meta name="description" content="The few construction company in cyprus which provide development by sustaining green enviroment. Our company speciallizes is green living life styles of our development structures. we use best materials, provide greenland in property, energy efficient designs. We build best energy efficient construction projects, Including construction of  apartments." />
     <link rel="canonical" href="https://yourwebsite.com/" />

     <meta property="og:title" content="GREENLIVING Construction&Development ltd" />
<meta property="og:description" content="We build green/energy efficient construction projects. We provide natural sustainable designs with green space in the development area." />
<meta property="og:image" content="/https://yourwebsite.com/assets/logo_1.png" />
     
      </Helmet>

        <div className="homefirst">
              <ScrollToTop />
          
<div className="animate">   <div className="logodescription">
              <sec className="ld_1"><img src={logo2} alt="" /></sec> 
              <sec className="ld_2">

                <div className="ld_2top">
                  <h1>{
  lan === 'greek'
    ? "Πράσινη Διαβίωση"
    : lan === 'french'
    ? "Vie Écologique"
    : lan === 'russian'
    ? "Экологичный образ жизни"
    : lan === 'hebrew'
    ? "חיים ירוקים"
    : lan === 'english'
    ? "GREEN LIVING"
    : "GREEN LIVING"
}</h1>
                  <div  className='ltd'>
                    <h2>{
  lan === 'greek'
    ? "Κατασκευές & Ανάπτυξη ΕΠΕ"
    : lan === 'french'
    ? "Construction & Développement SARL"
    : lan === 'russian'
    ? "Строительство и развитие ООО"
    : lan === 'hebrew'
    ? "בנייה ופיתוח בע\"מ"
    : lan === 'english'
    ? "Construction & Development Ltd"
    : "Construction & Development Ltd"
}</h2>
</div>
                  </div>

              <sec className="ld_2bottom">
                <p>{lan === 'greek' ? "«Να δημιουργήσουμε νέες, σύγχρονες γειτονιές, προσφέροντας νέα πνοή στις πόλεις και προάγοντας έναν τρόπο ζωής υψηλής ποιότητας και υγιεινής διαβίωσης.“"
: lan === 'french' ? "Créer de nouveaux quartiers modernes, insuffler une nouvelle vie aux villes et promouvoir un mode de vie de haute qualité et sain"
: lan === 'russian' ? "Создавать новые современные районы, вдохновляя города новой жизнью и продвигая качественный и здоровый образ жизни"
: lan === 'english' ? "We create new, modern neighborhoods, bringing fresh life to cities and promoting a high-quality, healthy way of living"
: lan === 'hebrew' ? "אנו יוצרים שכונות חדשות ומודרניות, מעניקים חיים חדשים לערים ומקדמים אורח חיים איכותי ובריא"
: "home"} .</p>
              </sec>
              </sec>
            </div> </div>
            <div className="hfcenter"><h2 style={{fontSize:"2rem"}}>{
  lan === 'greek'
    ? "Το Έργο Μας"
    : lan === 'french'
    ? "Notre Travail"
    : lan === 'russian'
    ? "Наша работа"
    : lan === 'hebrew'
    ? "העבודה שלנו"
    : lan === 'english'
    ? "Our Work"
    : "Our Work"
}</h2></div>
            
            <div className="hfbottom">
              <sec className="hfb  animate"  style={{height:"100%"}}><h2  style={{color:"white",fontFamily:" 'Poppins', 'Montserrat', sans-serif", marginTop:"-30px"}} >{
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
}</h2><section className="tophfb"></section></sec> 
              <sec className="hfb2  animate"  style={{height:"100%"}}><h2 style={{color:"white",fontFamily:" 'Poppins', 'Montserrat', sans-serif", marginTop:"-30px"}}>{
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
}</h2><section className="tophfb"></section></sec>
              <sec className="hfb3  animate"  style={{height:"100%"}}><h2 style={{color:"white",fontFamily:" 'Poppins', 'Montserrat', sans-serif" , marginTop:"-30px"}}>{
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
}</h2><section className="tophfb"></section></sec>  
              </div>
                 <button class=" from-primary to-primary-container text-on-primary px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-primary/20 transition-all"  style={{backgroundColor:"#74CA2D", fontSize:"1.5rem"}}>
                  <Link to="/projects">   {
  lan === 'greek'
    ? "Δείτε τα έργα μας"
    : lan === 'french'
    ? "Voir nos projets"
    : lan === 'russian'
    ? "Посмотреть наши проекты"
    : lan === 'hebrew'
    ? "ראה את הפרויקטים שלנו"
    : lan === 'english'
    ? "See our projects"
    : "See our projects"
}
                    </Link>    </button>
          
          
          </div>

<section class=" relative min-h-screen flex items-center justify-center overflow-hidden pt-40 tessec ">
<div class="absolute inset-0 z-0">
<img alt="Modern construction site" class="w-full h-full object-cover" data-alt="Wide angle shot of a massive modern construction site at twilight with heavy machinery and steel frameworks under dramatic cool blue lighting"  src={ft}/>
<div class="absolute inset-0 bg-gradient-to-r from-surface via-surface/80 to-surface/40" style={{backgroundColor:"#000000b3"}}></div>
<div class="absolute inset-0 bg-surface/20 backdrop-grayscale-[0.2]"></div>
</div>
<div class="relative z-10 max-w-7xl mx-auto px-8 py-24 grid lg:grid-cols-2 gap-16 items-center" style={{paddingBottom:"8rem"}} >
<div class="no2 space-y-8">
<div class="inline-block">
<span class="text-secondary tracking-[0.2em] uppercase text-xs font-bold bg-secondary/10 px-4 py-1.5 rounded-full" style={{color:"white"}} id="how">{
  lan === 'greek'
    ? "Δημιουργούμε Νέα"
    : lan === 'french'
    ? "Nous créons du nouveau"
    : lan === 'russian'
    ? "Мы создаём новое"
    : lan === 'hebrew'
    ? "אנחנו יוצרים חדש"
    : lan === 'english'
    ? "We create new"
    : "We create new"
}</span>
</div>
  {lan === 'greek' ? 
  <h1 class="text-2xl md:text-2xl font-extrabold tracking-tight text-white leading-[1.1]">
    Η Green   <br/>
    <span class=" bg-clip-text bg-gradient-to-r from-primary to-secondary">living </span>
  </h1>
: lan === 'french' ? 
  <h1 class="text-2xl md:text-2xl font-extrabold tracking-tight text-white leading-[1.1]">
    Quartiers <br/>
    <span class=" bg-clip-text bg-gradient-to-r from-primary to-secondary">modernes</span>
  </h1>
: lan === 'russian' ? 
  <h1 class="text-2xl md:text-2xl font-extrabold tracking-tight text-white leading-[1.1]">
    Современные <br/>
    <span class=" bg-clip-text bg-gradient-to-r from-primary to-secondary">районы</span>
  </h1>
: lan === 'english' ? 
  <h1 class="text-2xl md:text-2xl font-extrabold tracking-tight text-white leading-[1.1]">
    Modern <br/>
    <span class=" bg-clip-text bg-gradient-to-r from-primary to-secondary">neighborhoods</span>
  </h1>
: lan === 'hebrew' ? 
  <h1 class="text-2xl md:text-2xl font-extrabold tracking-tight text-white leading-[1.1]">
    שכונות <br/>
    <span class=" bg-clip-text bg-gradient-to-r from-primary to-secondary">מודרניות</span>
  </h1>
: "home"}
           

<p class="text-lg text-on-surface-variant max-w-xl leading-relaxed"  style={{color:"white"}}>
              {lan === 'greek' ? 
  " αποτελεί την προσπάθεια ενσωμάτωσης της φύσης στον αστικό ιστό, ενισχύοντας τους χώρους πρασίνου και τις φυτεύσεις, συμβάλλοντας καθοριστικά στη δημιουργία πνευμόνων καθαρού αέρα και στην αναβάθμιση του αστικού περιβάλλοντος. "
: lan === 'french' ? 
  "Nous ne promouvons pas le logement simplement comme une entité isolée, mais comme une partie d’une conception urbaine globale visant à améliorer la qualité de vie dans les villes et les banlieues. Le mode de vie vert représente notre effort d’intégrer la nature dans le tissu urbain, en renforçant les espaces verts et les plantations, contribuant ainsi de manière significative à la création de zones d’air pur et à l’amélioration globale de l’environnement urbain."
: lan === 'russian' ? 
  "Мы не рассматриваем жильё просто как отдельную сущность, а как часть комплексного городского планирования, направленного на улучшение качества жизни в городах и пригородах. Зелёный образ жизни отражает наши усилия по интеграции природы в городскую структуру, расширению зелёных зон и насаждений, что значительно способствует созданию зон чистого воздуха и улучшению городской среды."
: lan === 'english' ? 
  <p>
    We do not promote housing merely as a standalone entity, but as part of a comprehensive urban design aimed at improving the way and quality of life within cities and suburbs.  
    <br /> <br/>
    Green Living represents our effort to integrate nature into the urban fabric, enhancing green spaces and plantings, contributing significantly to the creation of clean-air zones and the overall improvement of the urban environment.
  </p>
: lan === 'hebrew' ? 
  "איננו מקדמים דיור כישות נפרדת בלבד, אלא כחלק מתכנון עירוני כולל שמטרתו לשפר את איכות החיים בערים ובפרברים. החיים הירוקים מייצגים את מאמצינו לשלב את הטבע במרקם העירוני, לחזק שטחים ירוקים ונטיעות, ולתרום באופן משמעותי ליצירת אזורי אוויר נקי ולשיפור הסביבה העירונית."
: "home"}
           
           
  </p>
<div class="flex gap-4">
<button class=" from-primary to-primary-container text-on-primary px-4 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-primary/20 transition-all" style={{backgroundColor:"#74CA2D",fontSize:"0.7rem"}}>
              <Link to="/organization">          {
  lan === 'greek'
    ? "Η Ομάδα Μας"
    : lan === 'french'
    ? "Notre Équipe"
    : lan === 'russian'
    ? "Наша команда"
    : lan === 'hebrew'
    ? "הצוות שלנו"
    : lan === 'english'
    ? "Our Team"
    : "Our Team"
}
                       </Link> </button>
                        <button class=" from-primary to-primary-container text-on-primary px-4 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-primary/20 transition-all" style={{backgroundColor:"#74CA2D",fontSize:"0.6rem"}}>
                        <Link to="/certification">    {
  lan === 'greek'
    ? "Οι Πολιτικές Μας"
    : lan === 'french'
    ? "Nos Politiques"
    : lan === 'russian'
    ? "Наши политики"
    : lan === 'hebrew'
    ? "המדיניות שלנו"
    : lan === 'english'
    ? "Our Policies"
    : "Our Policies"
} </Link>
                        </button>
</div>
</div>
<div class="grid sm:grid-cols-2 gap-6">
<div class="group bg-surface-variant/40 backdrop-blur-xl p-8 rounded-xl border border-white/5 hover:bg-surface-variant/60 transition-all duration-500 hover:-translate-y-2  animate" style={{ borderRadius:"0px"}}>

<h3 class="text-xl font-bold text-white mb-3" style={{color:"#74CA2D"}}>******</h3>
<p class="text-on-surface-variant text-sm leading-relaxed">
   
{lan === 'greek' ? 
  "Στόχος μας είναι η ουσιαστική μείωση της επίδρασης του κτίσματος πάνω στο φυσικό περιβάλλον, μέσα από τον ορθολογικό σχεδιασμό και την υπεύθυνη διαχείριση των πόρων."
: lan === 'french' ? 
  "Notre objectif est de réduire de manière significative l’impact du bâtiment sur l’environnement naturel grâce à une conception rationnelle et une gestion responsable des ressources."
: lan === 'russian' ? 
  "Наша цель — существенно снизить воздействие здания на природную среду посредством рационального проектирования и ответственного управления ресурсами."
: lan === 'english' ? 
  "Our goal is to substantially reduce the building’s impact on the natural environment through rational design and responsible resource management."
: lan === 'hebrew' ? 
  "המטרה שלנו היא לצמצם באופן משמעותי את השפעת המבנה על הסביבה הטבעית באמצעות תכנון רציונלי וניהול אחראי של משאבים."
: "home"}
           
                        </p>
</div>
<div class="group bg-surface-variant/40 backdrop-blur-xl p-8 rounded-xl border border-white/5 hover:bg-surface-variant/60 transition-all duration-500 hover:-translate-y-2 animate" style={{ borderRadius:"0px"}}>

<h3 class="text-xl font-bold text-white mb-3"  style={{color:"#74CA2D"}}>******</h3>
<p class="text-on-surface-variant text-sm leading-relaxed">
    {lan === 'greek' ? 
  "Δίνουμε προτεραιότητα στη μείωση της ενεργειακής κατανάλωσης στα έργα μας, αξιοποιώντας ανανεώσιμες πηγές ενέργειας, όπως η ηλιακή."
: lan === 'french' ? 
  "Nous donnons la priorité à la réduction de la consommation d’énergie dans nos projets en utilisant des sources d’énergie renouvelables, telles que l’énergie solaire."
: lan === 'russian' ? 
  "Мы уделяем приоритетное внимание снижению энергопотребления в наших проектах, используя возобновляемые источники энергии, такие как солнечная энергия."
: lan === 'english' ? 
  "We prioritize reducing energy consumption in our projects by utilizing renewable energy sources, such as solar power."
: lan === 'hebrew' ? 
  "אנו נותנים עדיפות להפחתת צריכת האנרגיה בפרויקטים שלנו באמצעות שימוש במקורות אנרגיה מתחדשים, כגון אנרגיה סולארית."
: "home"}   
                  
                        </p>
</div>
<div class="group bg-surface-variant/40 backdrop-blur-xl p-8 rounded-xl border border-white/5 hover:bg-surface-variant/60 transition-all duration-500 hover:-translate-y-2 animate" style={{ borderRadius:"0px"}}>

<h3 class="text-xl font-bold text-white mb-3"  style={{color:"#74CA2D"}}>******</h3>
<p class="text-on-surface-variant text-sm leading-relaxed">
    {lan === 'greek' ? 
  "Ένταξη του πράσινου στον αστικό ιστό. Η ανάπτυξη κήπων και χώρων πρασίνου αποτελεί βασικό στοιχείο κάθε έργου μας, ενώ, όπου αυτό είναι εφικτό,"
: lan === 'french' ? 
  "Intégration du vert dans le tissu urbain. Le développement de jardins et d’espaces verts est un élément fondamental de chaque projet, et chaque fois que cela est possible,"
: lan === 'russian' ? 
  "Интеграция зелёных зон в городскую среду. Развитие садов и зелёных пространств является основным элементом каждого нашего проекта, и, где это возможно,"
: lan === 'english' ? 
  "The development of gardens and green spaces is a fundamental element of every project, and wherever possible"
: lan === 'hebrew' ? 
  "שילוב הירוק במרקם העירוני. פיתוח גינות ושטחים ירוקים מהווה מרכיב מרכזי בכל פרויקט שלנו, ובכל מקום שבו הדבר מתאפשר,"
: "home"}      </p>
</div>
<div class="group bg-surface-variant/40 backdrop-blur-xl p-8 rounded-xl border border-white/5 hover:bg-surface-variant/60 transition-all duration-500 hover:-translate-y-2 animate" style={{ borderRadius:"0px"}}>

<h3 class="text-xl font-bold text-white mb-3"  style={{color:"#74CA2D"}}>******</h3>
<p class="text-on-surface-variant text-sm leading-relaxed">
    {lan === 'greek' ? 
  "επιλέγουμε θέσεις σε άμεση γειτνίαση με δημόσιους χώρους πρασίνου, ενισχύοντας την ποιότητα ζωής των κατοίκων και την περιβαλλοντική αξία του τόπου."
: lan === 'french' ? 
  "Nous choisissons des emplacements à proximité immédiate d’espaces verts publics, améliorant ainsi la qualité de vie des habitants et la valeur environnementale du site."
: lan === 'russian' ? 
  "Мы выбираем места в непосредственной близости от общественных зелёных зон, повышая качество жизни жителей и экологическую ценность территории."
: lan === 'english' ? 
  "We select locations in proximity to public green areas, enhancing both the residents’ quality of life and the environmental value of the community."
: lan === 'hebrew' ? 
  "אנו בוחרים מיקומים בקרבה מיידית לשטחים ירוקים ציבוריים, ובכך משפרים את איכות החיים של התושבים ואת הערך הסביבתי של המקום."
: "home"}       
       </p>
</div>
</div>
</div>
</section>
 
    


<main class="pt-0"> 
<section class="w-full flex flex-col md:flex-row min-h-[530px] bg-surface overflow-hidden"> 


<div class="w-full md:w-1/2 p-8 md:p-20 flex flex-col justify-center bg-surface"> 
<h1 class="animateleft text-2xl md:text-2xl font-extrabold tracking-tighter text-primary leading-none mb-8" style={{color:"gray"}}>
         {lan === 'greek' ? 
  "Μικροκλίμα: Αστική Νησίδα Θερμότητας"
: lan === 'french' ? 
  "Microclimat : Îlot de chaleur urbain"
: lan === 'russian' ? 
  "Микроклимат: Городской остров тепла"
: lan === 'english' ? 
  "Microclimate: Urban Heat Island"
: lan === 'hebrew' ? 
  "מיקרו-אקלים: אי חום עירוני"
: "home"}  

                </h1>
             {lan === 'greek' ? 
  <p class="animate max-w-md text-on-surface-variant leading-relaxed text-lg font-body">
    Η ηλιακή ακτινοβολία απορροφάται από τις οροφές, τις εξωτερικές επιφάνειες των κτιρίων, την άσφαλτο και λοιπά δομικά υλικά, οδηγώντας σε σημαντική αύξηση της θερμοκρασίας αυτών των επιφανειών σε αστικό περιβάλλον. Η θερμοκρασία των επιφανειών δύναται να υπερβαίνει την αντίστοιχη του περιβάλλοντος αέρα κατά 30-40°C.
    <br /><br />
    Η αύξηση αυτή επιδρά άμεσα στη θερμοκρασία του ατμοσφαιρικού αέρα στις αστικές περιοχές, συμβάλλοντας στη διαμόρφωση του φαινομένου της αστικής θερμικής νησίδας. Το φαινόμενο μπορεί να προκαλέσει άνοδο της θερμοκρασίας στο σύνολο μιας πόλης κατά 1-5°C σε σύγκριση με τις γειτονικές ημιαστικές ή αγροτικές περιοχές.
    <br /><br />
    Η ανύψωση της θερμοκρασίας στο αστικό περιβάλλον συνεπάγεται αύξηση των επιπέδων ατμοσφαιρικής ρύπανσης, καθώς και εντατικοποίηση της ζήτησης ενέργειας για την κάλυψη αναγκών ψύξης. Η ένταση του φαινομένου συνδέεται άμεσα με την αυξημένη δομημένη επιφάνεια και τη σταδιακή συρρίκνωση των ελεύθερων χώρων πρασίνου, λόγω της εντεινόμενης οικοδομικής δραστηριότητας εντός των πόλεων.
  </p>
: lan === 'french' ? 
  <p class="animate max-w-md text-on-surface-variant leading-relaxed text-lg font-body">
    Le rayonnement solaire est absorbé par les toits, les façades des bâtiments, l’asphalte et d’autres matériaux de construction, entraînant une augmentation significative de la température de ces surfaces en milieu urbain. Les températures de surface peuvent dépasser la température de l’air ambiant de 30 à 40°C.
    <br /><br />
    Cette augmentation affecte directement la température de l’air atmosphérique dans les zones urbaines, contribuant à la formation du phénomène d’îlot de chaleur urbain. Ce phénomène peut augmenter la température globale d’une ville de 1 à 5°C par rapport aux zones suburbaines ou rurales voisines.
    <br /><br />
    L’élévation des températures en milieu urbain entraîne une augmentation de la pollution de l’air ainsi qu’une demande accrue d’énergie pour le refroidissement. L’intensité du phénomène est directement liée à l’expansion des surfaces bâties et à la réduction progressive des espaces verts ouverts en raison de l’intensification de l’activité de construction en ville.
  </p>
: lan === 'russian' ? 
  <p class="animate max-w-md text-on-surface-variant leading-relaxed text-lg font-body">
    Солнечная радиация поглощается крышами, фасадами зданий, асфальтом и другими строительными материалами, что приводит к значительному повышению температуры этих поверхностей в городской среде. Температура поверхностей может превышать температуру окружающего воздуха на 30–40°C.
    <br /><br />
    Это повышение напрямую влияет на температуру атмосферного воздуха в городах, способствуя формированию эффекта городского теплового острова. Это явление может повышать общую температуру города на 1–5°C по сравнению с пригородными или сельскими районами.
    <br /><br />
    Повышение температуры в городской среде приводит к росту уровня загрязнения воздуха и увеличению потребности в энергии для охлаждения. Интенсивность явления напрямую связана с ростом застроенных территорий и постепенным сокращением зелёных открытых пространств из-за активного строительства в городах.
  </p>
: lan === 'english' ? 
  <p class="animate max-w-md text-on-surface-variant leading-relaxed text-lg font-body">
    Solar radiation is absorbed by rooftops, building facades, asphalt, and other construction materials, leading to a significant increase in the temperature of these surfaces in urban environments. Surface temperatures can exceed the ambient air temperature by 30–40°C.
    <br /><br />
    This increase directly affects the atmospheric air temperature in urban areas, contributing to the formation of the urban heat island phenomenon. This effect can raise the overall temperature of a city by 1–5°C compared to nearby suburban or rural areas.
    <br /><br />
    Elevated temperatures in the urban environment lead to higher levels of air pollution and increased energy demand for cooling. The intensity of the phenomenon is directly linked to the expansion of built-up areas and the gradual reduction of green open spaces due to intensified construction activity within cities.
  </p>
: lan === 'hebrew' ? 
  <p class="animate max-w-md text-on-surface-variant leading-relaxed text-lg font-body">
    קרינת השמש נספגת בגגות, חזיתות מבנים, אספלט וחומרי בנייה נוספים, מה שמוביל לעלייה משמעותית בטמפרטורת המשטחים בסביבה עירונית. טמפרטורת המשטחים עשויה לעלות ב־30–40 מעלות צלזיוס מעל טמפרטורת האוויר הסביבתי.
    <br /><br />
    עלייה זו משפיעה ישירות על טמפרטורת האוויר בערים ותורמת להיווצרות תופעת אי החום העירוני. תופעה זו עשויה להעלות את הטמפרטורה הכללית בעיר ב־1–5 מעלות צלזיוס בהשוואה לאזורים פרבריים או כפריים סמוכים.
    <br /><br />
    עליית הטמפרטורות בסביבה העירונית גורמת לעלייה בזיהום האוויר ולביקוש מוגבר לאנרגיה לקירור. עוצמת התופעה קשורה ישירות להתרחבות השטחים הבנויים ולצמצום ההדרגתי של השטחים הירוקים עקב פעילות בנייה מואצת בערים.
  </p>
: "home"}

<div class="mt-12"> 
</div>
</div>




<div class="w-full md:w-1/2 h-[442px] md:h-auto bg-surface-container-low">
<img class="animate w-full h-full object-cover   contrast-125"  alt="Green and Natural modern infrastructure design"
  loading="lazy" style={{height:"100%"}} src={v1}/>
</div>
</section> 
<section class="w-full flex flex-col md:flex-row-reverse min-h-[530px] bg-surface-container-low overflow-hidden"> 
<div class="w-full md:w-1/2 p-8 md:p-20 flex flex-col justify-center bg-surface-container-low"> 
<div class="flex flex-col lg:flex-row lg:items-end gap-6 mb-8">
<h2 class="animate text-2xl md:text-2xl font-extrabold tracking-tighter text-primary leading-none" style={{color:"gray"}}>
   
   {lan === 'greek' ? 
  "Τρόποι αντιμετώπισης της αστικής νησίδας θερμότητας"
: lan === 'french' ? 
  "Moyens de réduire l’effet d’îlot de chaleur urbain"
: lan === 'russian' ? 
  "Способы смягчения эффекта городского теплового острова"
: lan === 'english' ? 
  "Ways to Mitigate the Urban Heat Island Effect"
: lan === 'hebrew' ? 
  "דרכים להפחתת אפקט אי החום העירוני"
: "home"}

    </h2>
 
</div>
   {lan === 'greek' ? 
  <p class="animate max-w-md text-on-surface-variant leading-relaxed text-lg font-body">
    Η φύτευση δέντρων γύρω από μια κατοικία συμβάλλει σημαντικά στη μείωση των ψυκτικών φορτίων. Ένα ανεπτυγμένο δέντρο μπορεί να μειώσει τις ανάγκες κλιματισμού κατά 12–24%, ενώ η ύπαρξη τριών δέντρων αυξάνει το ποσοστό αυτό στο 17–57%.
    <br /><br />
    Η σκιά των δέντρων μειώνει την ακτινοβολία και τη θερμοκρασία του περιβάλλοντος, κάνοντας τον αέρα κάτω από αυτά έως και 4,5°C πιο δροσερό. Η σκίαση που προκαλείται από τα δέντρα συνεισφέρει κατά 10–35% στη μείωση ενώ το υπόλοιπο ποσοστό οφείλεται στην εξατμισοδιαπνοή· τα φυτά απορροφούν θερμότητα από το περιβάλλον, μειώνοντας περαιτέρω τη θερμοκρασία.
    <br /><br />
    Σε αντίθεση με τα τεχνητά σκίαστρα, τα φυτά αντανακλούν πολύ λιγότερη θερμότητα και θερμαίνονται ελάχιστα, προσφέροντας ένα φυσικό, πιο αποτελεσματικό μικροκλίμα.
  </p>
: lan === 'french' ? 
  <p class="animate max-w-md text-on-surface-variant leading-relaxed text-lg font-body">
    La plantation d’arbres autour d’une habitation contribue de manière significative à la réduction des besoins de refroidissement. Un arbre mature peut réduire les besoins en climatisation de 12 à 24 %, tandis que la présence de trois arbres peut porter cette réduction à 17 à 57 %.
    <br /><br />
    L’ombre des arbres réduit le rayonnement et la température ambiante, rendant l’air en dessous jusqu’à 4,5°C plus frais. Environ 10 à 35 % de cet effet de refroidissement est dû à l’ombrage, tandis que le reste est lié à l’évapotranspiration, les plantes absorbant la chaleur de l’environnement et réduisant ainsi la température.
    <br /><br />
    Contrairement aux dispositifs d’ombrage artificiels, les plantes réfléchissent très peu de chaleur et se réchauffent très légèrement, offrant un microclimat naturel et plus efficace.
  </p>
: lan === 'russian' ? 
  <p class="animate max-w-md text-on-surface-variant leading-relaxed text-lg font-body">
    Посадка деревьев вокруг жилого дома значительно способствует снижению потребности в охлаждении. Взрослое дерево может уменьшить потребность в кондиционировании на 12–24%, а наличие трёх деревьев увеличивает этот показатель до 17–57%.
    <br /><br />
    Тень деревьев снижает солнечное излучение и температуру окружающей среды, делая воздух под ними до 4,5°C прохладнее. Около 10–35% этого эффекта охлаждения обеспечивается затенением, а остальная часть связана с испарением и транспирацией, при которой растения поглощают тепло из окружающей среды, дополнительно снижая температуру.
    <br /><br />
    В отличие от искусственных затеняющих конструкций, растения отражают очень мало тепла и практически не нагреваются, создавая естественный и более эффективный микроклимат.
  </p>
: lan === 'english' ? 
  <p class="animate max-w-md text-on-surface-variant leading-relaxed text-lg font-body">
    Planting trees around a residence significantly contributes to reducing cooling loads. A mature tree can decrease air conditioning needs by 12–24%, while having three trees can increase this reduction to 17–57%.
    <br /><br />
    The shade provided by trees lowers radiation and ambient temperature, making the air beneath them up to 4.5°C cooler. Approximately 10–35% of this cooling effect comes from shading, while the remainder is due to evapotranspiration, as plants absorb heat from the environment, further reducing temperature.
    <br /><br />
    Unlike artificial shading devices, plants reflect very little heat and warm up minimally, providing a natural and more effective microclimate.
  </p>
: lan === 'hebrew' ? 
  <p class="animate max-w-md text-on-surface-variant leading-relaxed text-lg font-body">
    נטיעת עצים סביב מגורים תורמת באופן משמעותי להפחתת עומסי קירור. עץ בוגר יכול להפחית את הצורך במיזוג אוויר ב־12–24%, בעוד ששלושה עצים יכולים להגדיל את ההפחתה ל־17–57%.
    <br /><br />
    צל העצים מפחית קרינה וטמפרטורה סביבתית, והופך את האוויר שמתחתיהם לקריר יותר בעד 4.5 מעלות צלזיוס. כ־10–35% מהאפקט נובע מהצללה, והיתר נובע מאידוי-דיות, כאשר הצמחים סופגים חום מהסביבה ומפחיתים את הטמפרטורה.
    <br /><br />
    בניגוד לאמצעי הצללה מלאכותיים, צמחים מחזירים מעט מאוד חום ומתחממים מעט מאוד, ובכך יוצרים מיקרו-אקלים טבעי ויעיל יותר.
  </p>
: "home"}
           

<div class="mt-12"> 
</div>
</div> 
<div class="w-full md:w-1/2 h-[442px] md:h-auto bg-[#f0f4f0]">
<img class="animate w-full h-full object-cover"
 alt="Green and Natural modern infrastructure design for buildings"
  loading="lazy" style={{height:"100%"}} src={v2}/>
</div>
</section> 
<section class="p-8 md:p-20 bg-surface tessec" style={{backgroundColor:"white"}}>
<div class="mb-20">
<span class="font-['Manrope'] text-tertiary font-bold tracking-[0.3em] text-xs" style={{color:"#74CA2D"}}>
    {lan === 'greek' ? 
  "Πώς επιτυγχάνεται η μείωση της ενεργειακής κατανάλωσης"
: lan === 'french' ? 
  "Comment réduire la consommation d’énergie"
: lan === 'russian' ? 
  "Как достигается снижение энергопотребления"
: lan === 'english' ? 
  "How to achieve the reduction of energy consumption"
: lan === 'hebrew' ? 
  "כיצד מושגת הפחתת צריכת האנרגיה"
: "home"}      
</span>
</div>
<div class="grid grid-cols-1 md:grid-cols-3 gap-1 juj">


<div class="  p-12 bg-surface-container-highest aspect-square flex flex-col justify-between" >
<span class="text-2xl font-black text-primary" style={{color:"white"}}>01</span>
<div>
<h3 class="text-xl font-bold mb-4 " style={{color:"white"}}>
    {lan === 'greek' ? 
  "Σχεδιασμός"
: lan === 'french' ? 
  "Planification"
: lan === 'russian' ? 
  "Планирование"
: lan === 'english' ? 
  "Planning"
: lan === 'hebrew' ? 
  "תכנון"
: "home"}     
</h3>
 {lan === 'greek' ? 
  <p class="text-sm text-on-surface-variant" style={{color:"white",textAlign:"left"}}>
    Προσανατολισμός <br />
    Θερμομόνωση <br />
    Ηλιοπροστασία <br />
    Δημιουργία μικροκλίματος για αντιμετώπιση <br />
    αστικής νησίδας.
  </p>
: lan === 'french' ? 
  <p class="text-sm text-on-surface-variant" style={{color:"white",textAlign:"left"}}>
    Orientation <br />
    Isolation thermique <br />
    Protection solaire <br />
    Création d’un microclimat pour faire face <br />
    à l’îlot de chaleur urbain.
  </p>
: lan === 'russian' ? 
  <p class="text-sm text-on-surface-variant" style={{color:"white" ,textAlign:"left"}}>
    Ориентация <br />
    Теплоизоляция <br />
    Солнечная защита <br />
    Создание микроклимата для борьбы <br />
    с городским тепловым островом.
  </p>
: lan === 'english' ? 
  <p class="text-sm text-on-surface-variant" style={{color:"white" ,textAlign:"left"}}>
    Orientation <br />
    Thermal insulation <br />
    Sun protection <br />
    Creating a microclimate for coping <br />
    with the urban heat island.
  </p>
: lan === 'hebrew' ? 
  <p class="text-sm text-on-surface-variant" style={{color:"white" ,textAlign:"left"}}>
    כיוון <br />
    בידוד תרמי <br />
    הגנה מפני שמש <br />
    יצירת מיקרו־אקלים להתמודדות <br />
    עם אי החום העירוני.
  </p>
: "home"}
           

</div>
</div>


<div className="animate"> 
<div class="p-12 bg-surface-container-highest aspect-square flex flex-col justify-between">
<span class="text-2xl font-black text-primary" style={{color:"white"}}>02</span>
<div>
<h3 class="text-xl font-bold mb-4" style={{color:"white"}}>

    {lan === 'greek' ? 
  "Ενεργειακή απόδοση"
: lan === 'french' ? 
  "Efficacité énergétique"
: lan === 'russian' ? 
  "Энергоэффективность"
: lan === 'english' ? 
  "Energy efficiency"
: lan === 'hebrew' ? 
  "יעילות אנרגטית"
: "home"}
      
</h3>
{lan === 'greek' ? 
  <p class="text-sm text-on-surface-variant" style={{color:"white" ,textAlign:"left"}}>
    Η-Μ εγκαταστάσεις <br />
    Θέρμανση – Ψύξη - Κλιματισμός <br />
    Φωτισμός <br />
    Συσκευές <br />
    Αυτοματισμοί & Έλεγχος <br />
    Ηλιακά θερμικά <br />
    Φωτοβολταϊκά
  </p>
: lan === 'french' ? 
  <p class="text-sm text-on-surface-variant" style={{color:"white",textAlign:"left"}}>
    Installations électromécaniques <br />
    Chauffage – Refroidissement – Climatisation <br />
    Éclairage <br />
    Appareils <br />
    Automatisation & contrôle <br />
    Chauffe-eau solaires <br />
    Photovoltaïque
  </p>
: lan === 'russian' ? 
  <p class="text-sm text-on-surface-variant" style={{color:"white",textAlign:"left"}}>
    Инженерные системы <br />
    Отопление – Охлаждение – Кондиционирование <br />
    Освещение <br />
    Устройства <br />
    Автоматизация и управление <br />
    Солнечное тепловое <br />
    Фотовольтаика
  </p>
: lan === 'english' ? 
  <p class="text-sm text-on-surface-variant" style={{color:"white",textAlign:"left"}}>
    Heating - Cooling - Air conditioning <br />
    Lighting <br />
    Devices <br />
    Automation & Control <br />
    Solar thermal <br />
    Photovoltaics
  </p>
: lan === 'hebrew' ? 
  <p class="text-sm text-on-surface-variant" style={{color:"white" ,textAlign:"left"}}>
    מערכות אלקטרומכניות <br />
    חימום – קירור – מיזוג אוויר <br />
    תאורה <br />
    מכשירים <br />
    אוטומציה ובקרה <br />
    חימום סולארי <br />
    פוטו־וולטאי
  </p>
: "home"}
   

</div>
</div>

</div>



  
<div className="animate">
<div class="p-12 bg-primary text-on-primary aspect-square flex flex-col justify-between">
<span class="text-2xl font-black text-on-primary" style={{color:"white"}}>03</span>
<div>
<h3 class="text-xl font-bold mb-4"style={{color:"white"}}>Smart Construction</h3>
<p class="text-sm text-on-primary/70" style={{color:"white",textAlign:"left"}}>Eco-friendly materials <br />
High-performance windows & glazing <br /> 
Green roofs & walls <br /> 
Thermal mass optimization <br /> 
Water management systems.</p>
</div>
</div>

</div>

</div>
</section>
</main>

    <section  className=" blur-bg w-full min-h-[600px] flex items-center py-2 px-8 lg:px-24">
        <div class="responsive-section relative z-10 w-full flex flex-col lg:flex-row items-center justify-between gap-12">
            
            <div class="lg:w-[60%]">
                        <h1 class="text-2xl lg:text-2xl font-extrabold mb-6 leading-tight" style={{color:"white",fontWeight:"600" ,textAlign:"left"}}>
          {lan === 'greek' ? 
  "Πώς να επιτευχθεί η μείωση της ενεργειακής κατανάλωσης"
: lan === 'french' ? 
  "Comment réduire la consommation d’énergie"
: lan === 'russian' ? 
  "Как достичь снижения энергопотребления"
: lan === 'english' ? 
  "How to achieve the reduction of energy consumption"
: lan === 'hebrew' ? 
  "כיצד להשיג הפחתה בצריכת האנרגיה"
: "home"}
           
              
                <br /> 
                <br />
      </h1>
              <p class="text-on-surface-variant text-sm leading-relaxed"  style={{color:"white",marginBottom:"10%" ,textAlign:"left"}} >
              {lan === 'greek' ? 
  "Η μείωση της ενεργειακής κατανάλωσης επιτυγχάνεται μέσω του σωστού σχεδιασμού και της υιοθέτησης ενεργειακά αποδοτικών λύσεων. Έτσι, μειώνουμε σημαντικά τις ενεργειακές ανάγκες και συμβάλλουμε στη βιώσιμη ανάπτυξη του αστικού περιβάλλοντος."
: lan === 'french' ? 
  "La réduction de la consommation d’énergie est obtenue grâce à une conception appropriée et à l’adoption de solutions énergétiquement efficaces. Ainsi, nous réduisons considérablement les besoins énergétiques et contribuons au développement durable de l’environnement urbain."
: lan === 'russian' ? 
  "Снижение энергопотребления достигается за счёт правильного проектирования и внедрения энергоэффективных решений. Таким образом, мы значительно уменьшаем потребность в энергии и способствуем устойчивому развитию городской среды."
: lan === 'english' ? 
  "Energy consumption is reduced through proper design and the adoption of energy-efficient solutions. In this way, we significantly lower energy needs and contribute to the sustainable development of the urban environment."
: lan === 'hebrew' ? 
  "הפחתת צריכת האנרגיה מושגת באמצעות תכנון נכון ואימוץ פתרונות חסכוניים באנרגיה. כך אנו מצמצמים משמעותית את הצרכים האנרגטיים ותורמים לפיתוח בר־קיימא של הסביבה העירונית."
: "home"} </p>
<div class="grid sm:grid-cols-2 gap-6">




<div className="animate">
<div class="  group bg-surface-variant/40 backdrop-blur-xl p-8  border border-white/5 hover:bg-surface-variant/60 transition-all duration-500 hover:-translate-y-2 mj " style={{backgroundColor:"#74CA2D",boxShadow:"0 4px 6px rgba(0,0,0,0.2), 0 8px 20px rgba(0,0,0,0.15)"}}>

<h3 class="text-xl font-bold text-white mb-3"  style={{color:"white"}} >1</h3>
<p class="text-on-surface-variant text-sm leading-relaxed"  style={{color:"white"}} >
            {lan === 'greek' ? 
  "Στα έργα μας δίνουμε έμφαση στη θερμομόνωση των κτιρίων, στην επιλογή υλικών με υψηλές ενεργειακές αποδόσεις και στην αξιοποίηση ανανεώσιμων πηγών ενέργειας, όπως η ηλιακή με την τοποθέτηση φωτοβολταϊκών."
: lan === 'french' ? 
  "Dans nos projets, nous mettons l’accent sur l’isolation thermique des bâtiments, le choix de matériaux à haute performance énergétique et l’utilisation de sources d’énergie renouvelables, telles que l’énergie solaire grâce à l’installation de panneaux photovoltaïques."
: lan === 'russian' ? 
  "В наших проектах мы уделяем особое внимание теплоизоляции зданий, выбору материалов с высокой энергоэффективностью и использованию возобновляемых источников энергии, таких как солнечная энергия с установкой фотоэлектрических панелей."
: lan === 'english' ? 
  "In our projects, we focus on building insulation, selecting materials with high energy performance, and utilizing renewable energy sources, such as solar power through the installation of photovoltaic panels."
: lan === 'hebrew' ? 
  "בפרויקטים שלנו אנו שמים דגש על בידוד תרמי של מבנים, בחירת חומרים בעלי ביצועים אנרגטיים גבוהים ושימוש במקורות אנרגיה מתחדשים, כגון אנרגיה סולארית באמצעות התקנת פאנלים פוטו־וולטאיים."
: "home"}   </p>
</div>

</div>



<div className="animate"> 
<div class="group bg-surface-variant/40 backdrop-blur-xl p-8  border border-white/5 hover:bg-surface-variant/60 transition-all duration-500 hover:-translate-y-2 mj" style={{backgroundColor:"#74CA2D",boxShadow:"0 4px 6px rgba(0,0,0,0.2), 0 8px 20px rgba(0,0,0,0.15)"}}>

<h3 class="text-xl font-bold text-white mb-3"  style={{color:"white"}} >2</h3>
<p class="text-on-surface-variant text-sm leading-relaxed"  style={{color:"white"}} >
                         
                      {lan === 'greek' ? 
  "Τα υλικά που χρησιμοποιούμε έχουν πολύ χαμηλό συντελεστή θερμοπερατότητας (U-value), εμποδίζοντας το κρύο να διεισδύει εντός της κατοικίας τον χειμώνα και προστατεύοντας από τις έντονες ακτινοβολίες το καλοκαίρι."
: lan === 'french' ? 
  "Les matériaux que nous utilisons ont un très faible coefficient de transmission thermique (valeur U), empêchant le froid de pénétrer dans la maison en hiver et protégeant contre les fortes radiations en été."
: lan === 'russian' ? 
  "Используемые нами материалы имеют очень низкий коэффициент теплопередачи (U-value), предотвращая проникновение холода в дом зимой и защищая от интенсивного излучения летом."
: lan === 'english' ? 
  "The materials we use have a very low thermal transmittance (U-value), preventing cold from entering the home in winter and protecting against intense radiation in summer."
: lan === 'hebrew' ? 
  "החומרים שבהם אנו משתמשים בעלי מקדם מעבר חום נמוך מאוד (U-value), המונע חדירת קור לבית בחורף ומגן מפני קרינה חזקה בקיץ."
: "home"} </p>
</div>


</div>




<div className="animate">
<div class="group bg-surface-variant/40 backdrop-blur-xl p-8  border border-white/5 hover:bg-surface-variant/60 transition-all duration-500 hover:-translate-y-2 mj" style={{backgroundColor:"#74CA2D",boxShadow:"0 4px 6px rgba(0,0,0,0.2), 0 8px 20px rgba(0,0,0,0.15)"}}>

<h3 class="text-xl font-bold text-white mb-3"  style={{color:"white"}} >3</h3>
<p class="text-on-surface-variant text-sm leading-relaxed"  style={{color:"white"}} >
              {lan === 'greek' ? 
  "Τα κτίρια μας έχουν ενεργειακή απόδοση Α"
: lan === 'french' ? 
  "Nos bâtiments atteignent une performance énergétique de classe A"
: lan === 'russian' ? 
  "Наши здания имеют класс энергоэффективности A"
: lan === 'english' ? 
  "Our buildings achieve an energy efficiency rating of A."
: lan === 'hebrew' ? 
  "הבניינים שלנו משיגים דירוג יעילות אנרגטית A"
: "home"}  </p>
</div>

</div>





<div className="animate"> 
<div class="group bg-surface-variant/40 backdrop-blur-xl p-8  border border-white/5 hover:bg-surface-variant/60 transition-all duration-500 hover:-translate-y-2 mj" style={{backgroundColor:"#74CA2D",boxShadow:"0 4px 6px rgba(0,0,0,0.2), 0 8px 20px rgba(0,0,0,0.15)"}}>

<h3 class="text-xl font-bold text-white mb-3 " style={{color:"white"}}>4</h3>
<p class="text-on-surface-variant text-sm leading-relaxed"  style={{color:"white"}} >
                 
          {lan === 'greek' ? 
  "Παράλληλα, εφαρμόζουμε τεχνολογίες εξοικονόμησης ενέργειας στον φωτισμό και στα συστήματα θέρμανσης και ψύξης."
: lan === 'french' ? 
  "Dans le même temps, nous mettons en œuvre des technologies d’économie d’énergie dans l’éclairage et les systèmes de chauffage et de refroidissement."
: lan === 'russian' ? 
  "В то же время мы внедряем энергосберегающие технологии в освещение и системы отопления/охлаждения."
: lan === 'english' ? 
  "At the same time, we implement energy-saving technologies in lighting and heating/cooling systems."
: lan === 'hebrew' ? 
  "במקביל, אנו מיישמים טכנולוגיות לחיסכון באנרגיה בתאורה ובמערכות חימום וקירור."
: "home"} </p>
</div>


</div>

</div>
              
            </div>

<div className="animate"> 
           <div class="flex-1">
<img class=" shadow-2xl object-cover h-[400px] w-full" alt="Solar panels showcasing how to acheive green enegry"
  loading="lazy" src={solar} style={{width:"140%",boxShadow:"0 9px 14px rgba(0,0,0,0.2), 0 8px 20px rgba(0,0,0,0.7)"}}/>
</div> </div>

        </div>
    </section>
    

    
   

<main  style={{backgroundColor:"rgb(255 255 255 / 96%)"}}>

<section class="bg-surface-container-low py-0 px-8">
<div class="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16 kj">
  
<div className="animate"> 
<div class="flex-1">
<img  class=" shadow-2xl object-cover h-[490px] w-full" 
alt="modern house design with green space"
  loading="lazy" style={{boxShadow:"0 33px 54px rgba(0,0,0,0.25),  20px 16px 28px rgba(0,0,0,0.2),", borderRadius:"0px, ",height:"300px"}} src={we}/>
</div>
</div>
<div class="flex-1 space-y-6 fcs">
<h2 class="animateleft text-2xl font-bold text-white tracking-tight" style={{color:"gray"}}>
    {lan === 'greek' ? 
  "Green Spaces and Sustainable Urban Development"
: lan === 'french' ? 
  "Espaces verts et développement urbain durable"
: lan === 'russian' ? 
  "Зелёные зоны и устойчивое городское развитие"
: lan === 'english' ? 
  "Green Spaces and Sustainable Urban Development"
: lan === 'hebrew' ? 
  "שטחים ירוקים ופיתוח עירוני בר־קיימא"
: "home"}       
.</h2>
 {lan === 'greek' ? 
  <p class="animate text-on-surface-variant leading-relaxed text-lg">
    Η πρόβλεψη μεγάλων κήπων και η διάθεση επαρκών εκτάσεων γης για την ανάπτυξη πράσινων ζωνών στις οικιστικές αστικές περιοχές αποτελεί ουσιώδες στοιχείο της βιώσιμης πολεοδομικής ανάπτυξης.
    <br /><br />
    Στο συνολικό κόστος των ακινήτων προβλέπεται ποσό το οποίο κατευθύνεται στην ανάπτυξη χώρων πρασίνου και στον σχεδιασμό τοπίου, συμβάλλοντας στη δημιουργία δροσερών και ευχάριστων μικροκλιμάτων εντός των πόλεων.
  </p>
: lan === 'french' ? 
  <p class="animate text-on-surface-variant leading-relaxed text-lg">
    La planification de grands jardins et l’allocation de terrains suffisants pour le développement de zones vertes dans les zones résidentielles urbaines constituent un élément fondamental de l’urbanisme durable.
    <br /><br />
    Une partie du coût total des biens immobiliers est dédiée au développement des espaces verts et à l’aménagement paysager, contribuant à la création de microclimats plus frais et agréables au sein des villes.
  </p>
: lan === ' russian' ? 
  <p class="animate text-on-surface-variant leading-relaxed text-lg">
    Планирование больших садов и выделение достаточных земельных участков для развития зелёных зон в жилых городских районах является важным элементом устойчивого городского развития.
    <br /><br />
    Часть общей стоимости недвижимости направляется на развитие зелёных зон и ландшафтный дизайн, способствуя созданию более прохладного и комфортного микроклимата в городах.
  </p>
: lan === 'english' ? 
  <p class="animate text-on-surface-variant leading-relaxed text-lg">
    Planning for large gardens and allocating sufficient land for the development of green zones in residential urban areas is a fundamental element of sustainable urban planning.
    <br /><br />
    A portion of the total cost of the properties is dedicated to the development of green spaces and landscape design, contributing to the creation of cooler and more pleasant microclimates within the cities.
  </p>
: lan === 'hebrew' ? 
  <p class="animate text-on-surface-variant leading-relaxed text-lg">
    תכנון גינות גדולות והקצאת שטחי קרקע מספקים לפיתוח אזורי ירוק בשטחים עירוניים למגורים מהווים מרכיב מרכזי בתכנון עירוני בר־קיימא.
    <br /><br />
    חלק מעלות הנכסים מוקדש לפיתוח שטחים ירוקים ולעיצוב נוף, התורמים ליצירת מיקרו־אקלים קריר ונעים יותר בתוך הערים.
  </p>
: "home"}
           

</div>
</div>
</section>  
</main>
        
        </>
    )

    
}

export default Home
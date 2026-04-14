import React from 'react';

import { useLocation } from 'react-router-dom';
import {useEffect } from 'react'
import mon from "./assets/Screenshot (548).png"

function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    // Scroll to the top of the page whenever the route changes
    window.scrollTo(0, 0);
  }, [location]);

  return null; // This component doesn't render anything
}
function Policy(props) {
    return (
        <div>
            
<main class="w-full"> 
      <ScrollToTop />
<section class="p-12 md:p-24 bg-surface grid grid-cols-1 md:grid-cols-3 gap-12">
<div class="bg-surface-container-highest p-8 border-l-4 border-primary">
<span class="material-symbols-outlined text-primary mb-6" data-icon="polyline">polyline</span>
<h3 class="text-xl font-bold font-headline mb-4">GEOMETRIC PRECISION</h3>
<p class="text-sm text-on-surface-variant">Standardized 8px grid systems ensure that every pixel serves a tactical purpose in the user experience.</p>
</div>
<div class="bg-surface-container-highest p-8 border-l-4 border-primary">
<span class="material-symbols-outlined text-primary mb-6" data-icon="square_foot">square_foot</span>
<h3 class="text-xl font-bold font-headline mb-4">ARCHITECTURAL AUDIT</h3>
<p class="text-sm text-on-surface-variant">Real-time monitoring of structural integrity across the decentralized network infrastructure.</p>
</div>
<div class="bg-surface-container-highest p-8 border-l-4 border-primary">
<span class="material-symbols-outlined text-primary mb-6" data-icon="layers">layers</span>
<h3 class="text-xl font-bold font-headline mb-4">STACKED REDUNDANCY</h3>
<p class="text-sm text-on-surface-variant">Tonal layering provides depth without the need for ornamental shadows or distracting effects.</p>
</div>
</section> 
<section class="relative w-full h-[530px] bg-on-surface overflow-hidden">
<img alt="" class="w-full h-full object-cover mix-blend-overlay opacity-40 grayscale" data-alt="monolithic skyscraper reflecting deep blue sky with sharp geometric lines and high contrast architectural shadows" src={mon}/>
<div class="absolute inset-0 flex flex-col justify-center px-12 md:px-24" >
<div class="bg-primary/90 backdrop-blur-md p-12 max-w-2xl text-white" style={{backgroundColor:"#74CA2D"}}>
<h2 class="text-2xl md:text-6xl font-extrabold tracking-tighter mb-6">THE BLUEPRINT OF AUTHORITY</h2>
<p class="text-lg text-primary-fixed leading-relaxed">
                        We don't just design interfaces; we construct systems of power. Every interaction is a statement of intent.
                    </p>
</div>
</div>
</section>

<section class="w-full bg-surface-container-highest py-24 px-8 md:px-16 " style={{paddingTop:"30px", paddingBottom:"40px"}}>
<div class="max-w-4xl mx-auto text-center md:text-left">
<h4 class="font-headline text-2xl font-bold tracking-tighter text-primary mb-8 uppercase">INSULATION
</h4>
<p class="font-body text-xl text-primary font-medium leading-relaxed mb-12">
           To enhance the building’s energy efficiency    and ensure its long-term durability, the following interventions and techniques are implemented:

                </p>
<div class="grid grid-cols-1 md:grid-cols-2 gap-8 border-t-2 border-primary pt-12">
<div class="flex items-center gap-6 group">
<div class="flex-shrink-0 w-12 h-12 bg-primary flex items-center justify-center">
<span class="material-symbols-outlined text-on-primary">check</span>
</div>
<div>
<p class="font-headline font-bold text-primary uppercase text-xs tracking-widest">Installation of external thermal insulation on masonry walls,</p>
<p class="font-body text-sm text-on-surface-variant italic"> aimed at preventing thermal bridging and improving the thermal protection of the building envelope</p>
</div>
</div>
<div class="flex items-center gap-6 group">
<div class="flex-shrink-0 w-12 h-12 bg-primary flex items-center justify-center">
<span class="material-symbols-outlined text-on-primary">check</span>
</div>
<div>
<p class="font-headline font-bold text-primary uppercase text-xs tracking-widest">Careful application of a lean concrete layer and polyethylene (polythene) membrane at the foundations, 
</p>
<p class="font-body text-sm text-on-surface-variant italic">beneath the footing slab, to prevent rising damp. In addition, cementitious waterproofing is applied on all verandas to provide sealing and protection against moisture.</p>
</div>
</div>
<div class="flex items-center gap-6 group">
<div class="flex-shrink-0 w-12 h-12 bg-primary flex items-center justify-center">
<span class="material-symbols-outlined text-on-primary">check</span>
</div>
<div>
<p class="font-headline font-bold text-primary uppercase text-xs tracking-widest">Selection of construction materials with low thermal transmittance coefficients, </p>
<p class="font-body text-sm text-on-surface-variant italic">in order to reduce heat losses.
.</p>
</div>
</div>
<div class="flex items-center gap-6 group">
<div class="flex-shrink-0 w-12 h-12 bg-primary flex items-center justify-center">
<span class="material-symbols-outlined text-on-primary">check</span>
</div>
<div>
<p class="font-headline font-bold text-primary uppercase text-xs tracking-widest">Installation of double energy-efficient glazing with low thermal transmittance and Low-E coating, </p>
<p class="font-body text-sm text-on-surface-variant italic">enhancing the thermal insulation capacity of openings and minimizing energy losses.
</p>
</div>
</div>
</div>
</div>
</section>
</main>
        </div>
    );
}

export default Policy;
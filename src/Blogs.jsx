import React from 'react';
import bl1 from "./assets/Slide15.jfif"

import { useLocation } from 'react-router-dom';
import {useEffect } from 'react'
import bl2 from "./assets/Slide16.jfif"


function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    // Scroll to the top of the page whenever the route changes
    window.scrollTo(0, 0);
  }, [location]);

  return null; // This component doesn't render anything
}
function Blogs(props) {
    return (
        <div>
              <ScrollToTop />
<main class="w-full min-h-screen pb-24 nrk" style={{backgroundColor:"#fffffffa"}}>
<section class="w-full bg-surface-container-low py-12 px-6 mb-12">
<div class="max-w-[1440px] mx-auto">
<p class="text-[0.6875rem] font-bold uppercase tracking-[0.2em] text-primary mb-4 rotate-90 gr3"  style={{color:"black"}}>artwork</p>
<h1 class="text-[1.6rem] leading-none font-bold tracking-tighter text-on-background max-w-4xl uo"  style={{color:"#74CA2D" ,textAlign:"left"}}>OUR PERSPECTIVES  <br />  <b style={{color:"black"}}> ON MODERN ARCHITECTURE. </b> </h1>
</div>
</section>
<div class="w-full px-6">
<div class="max-w-[1440px] mx-auto">
<div class="grid grid-cols-1 md:grid-cols-2 gap-8 art">
    <div className="animate">
<article class="green-border bg-surface-container-lowest p-6 flex flex-col gap-6 " style={{backgroundColor:"white", border:"2px solid #74CA2D",textAlign:"left",boxShadow:"0 33px 54px rgba(0,0,0,0.25),  20px 16px 28px rgba(0,0,0,0.2)"}}>
<header>
<h2 class="text-2xl font-extrabold tracking-tight text-on-surface uppercase">The Monolithic Shift: Security Through Brutalism</h2>
</header>
<div class="w-[98%] mx-auto">
<img alt="Architectural structure" class="w-full aspect-[16/9] object-cover filter   hover:grayscale-0 transition-all duration-500" data-alt="Monolithic concrete skyscraper reflecting bright sunlight against a clear blue sky, sharp angles and architectural precision." src={bl1}/>
</div>
<div class="flex flex-row gap-6 mt-2">
<aside class="w-24 shrink-0 flex flex-col gap-2">
<span class="text-[10px] font-bold uppercase tracking-widest text-primary border-l-4 border-primary pl-2 " style={{color:"black"}}>/</span>
<span class="text-[10px] font-bold uppercase tracking-widest text-primary border-l-4 border-primary pl-2"  style={{color:"black"}}>/</span>
<span class="text-[10px] font-bold uppercase tracking-widest text-primary border-l-4 border-primary pl-2"  style={{color:"black"}}>/</span>
</aside>
<section class="flex-1">
<p class="text-sm text-on-surface-variant leading-relaxed font-body">
                             We do not promote housing merely as a standalone entity, but as part of a comprehensive urban design aimed at improving the way and quality of life within cities and suburbs.Green Living represents our effort to integrate nature into the urban fabric, enhancing green spaces and plantings, contributing significantly to the creation of clean-air zones and the overall improvement of the urban environment
                             We do not promote housing merely as a standalone entity, but as part of a comprehensive urban design aimed at improving the way and quality of life within cities and suburbs.Green Living represents our effort to integrate nature into the urban fabric, enhancing green spaces and plantings, contributing significantly to the creation of clean-air zones and the overall improvement of the urban environment   </p> 
</section>
</div>
</article>
</div>
<div className="animate">
<article class="green-border bg-surface-container-lowest p-6 flex flex-col gap-6"  style={{backgroundColor:"white", border:"2px solid #74CA2D",textAlign:"left",boxShadow:"0 33px 54px rgba(0,0,0,0.25),  20px 16px 28px rgba(0,0,0,0.2)"}} >
<header>
<h2 class="text-2xl font-extrabold tracking-tight text-on-surface uppercase">Precision Engineering in Sovereign Cloud Systems</h2>
</header>
<div class="w-[98%] mx-auto">
<img alt="Technology structure" class="w-full aspect-[16/9] object-cover filter   hover:grayscale-0 transition-all duration-500" data-alt="Macro photography of a modern computer processor with intricate circuitry glowing in deep neon blues and silvers." src={bl2}/>
</div>
<div class="flex flex-row gap-6 mt-2">
<aside class="w-24 shrink-0 flex flex-col gap-2">
<span class="text-[10px] font-bold uppercase tracking-widest text-primary border-l-4 border-primary pl-2"  style={{color:"black"}}>/</span>
<span class="text-[10px] font-bold uppercase tracking-widest text-primary border-l-4 border-primary pl-2"  style={{color:"black"}}>/</span>
<span class="text-[10px] font-bold uppercase tracking-widest text-primary border-l-4 border-primary pl-2"  style={{color:"black"}}>/</span>
</aside>
<section class="flex-1">
<p class="text-sm text-on-surface-variant leading-relaxed font-body">
                               We do not promote housing merely as a standalone entity, but as part of a comprehensive urban design aimed at improving the way and quality of life within cities and suburbs.Green Living represents our effort to integrate nature into the urban fabric, enhancing green spaces and plantings, contributing significantly to the creation of clean-air zones and the overall improvement of the urban environment
                               We do not promote housing merely as a standalone entity, but as part of a comprehensive urban design aimed at improving the way and quality of life within cities and suburbs.Green Living represents our effort to integrate nature into the urban fabric, enhancing green spaces and plantings, contributing significantly to the creation of clean-air zones and the overall improvement of the urban environment </p> 
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
import { useState } from "react";

function MovieBanner(){
    return(
        <>

        <div className="relative h-screen w-screen flex justify-center items-end md:justify-start  ">

            <div className="    
             h-[clamp(500px,100vh,580px)]
             md:h-[clamp(500px,90vh,800px)]
             bg-[url('/images/banner/hero_banner.jpg')]  
             bg-no-repeat
             bg-cover 
             mask-l-from-0
             mask-r-from-90%
             absolute
             inset-0
            bg-center
            "> </div>

             <div className=" w-1/2 h-[50%] md:h-[55%] absolute flex flex-col gap-2  ">
                <div className="leading-none font-semibold  text-[clamp(2rem,10vw,5rem)]">    

                <h1 className="text-white  text-center " >THE</h1>
                <h1 className="text-white  text-center" >PROTECTOR</h1>
                </div>

                <div className=" justify-center hidden  md:flex ">
                <p className="text-white max-w-[90%]  text-[clamp(1rem,1vw,2rem)] font-semibold">
                    The city hides secrets older than memory.Power has chosen him.
                    Now destiny demands everything. Beneath the skyline of Istanbul, an ancient war awakens.He never asked for this power. But he will fight to protect what matters.
                </p>
                
                </div>

                 <div className="flex w-full gap-3 justify-center ">
               <button className="py-2.5 px-6 md:py-4 m bg-white text-small font-bold flex gap-2 cursor-pointer items-center">
                    <img src="/images/Vector.svg" alt="" className="w-3.5"/>
                    <p>Play</p>
                </button>
                <button className="py-2.5 md:py-4 px-16 font-bold text-small flex gap-2 items-center cursor-pointer bg-white/30">
                    <img src="/images/Detail.svg" alt="" className="w-5" />
                    <p className="text-white">Details</p>

                </button>
                
                </div>
               </div>

             </div>   
           
        </>
    )
}

export default MovieBanner;
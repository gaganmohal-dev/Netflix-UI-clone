import { useState } from "react";

function MovieBanner(){
    return(
        <>

        <div className="relative w-screen h-screen">
            <div className="    
             bg-[url('/images/banner/hero_banner.jpg')]  
             bg-no-repeat
             bg-cover 
             mask-l-from-0
             mask-r-from-90%
             absolute
             inset-0
            " />
             <div className=" w-1/2 h-2/3 absolute bottom-0  flex flex-col gap-2  ">
                <div className="leading-none font-semibold">                
                <h1 className="text-white text-[7rem] text-center" >THE</h1>
                <h1 className="text-white text-[7rem] text-center" >PROTECTOR</h1>
                </div>

                <div className="flex justify-center">
                <p className="text-white max-w-[80%] text-[1rem] font-semibold">
                    The city hides secrets older than memory.Power has chosen him.
                    Now destiny demands everything. Beneath the skyline of Istanbul, an ancient war awakens.He never asked for this power. But he will fight to protect what matters.
                </p>
                
                </div>

                 <div className="flex gap-3 m-4 ml-20">
                <button className="py-2 px-8 bg-white text-small font-bold flex gap-3 items-center">
                    <img src="/images/Vector.svg" alt="" className="w-3.5"/>
                    <p>Play</p>
                    </button>
                <button className="py-4 px-16 font-bold text-small flex gap-3 items-center bg-white/30">
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
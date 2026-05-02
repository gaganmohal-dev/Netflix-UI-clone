import React from "react";
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { useState, useEffect, useRef } from "react";
import Cards from "./Cards";
import Rows from "../../Data/RowsData.js"

function Row({name, movies}){
    const [showLeftBtn, setLeftBtn] = useState(false);
    const [showRightBtn, setRightBtn] = useState(false);
    const rowRef = useRef(null);    
    useEffect(() => {
         let row = rowRef.current
        
         
         let handleScroll = () => {
            let scrollLeft = row.scrollLeft;  //0
            let clientWidth = row.clientWidth; 
            let scrollWidth = row.scrollWidth;

            setLeftBtn(scrollLeft > 0)
            const isAtEnd = scrollLeft + clientWidth >= scrollWidth - 1;
            setRightBtn(!isAtEnd);  
         }
         
         handleScroll()
         setTimeout(handleScroll, 100) //
         row.addEventListener('scroll', handleScroll)

         return () => {
             row.removeEventListener('scroll', handleScroll)
            }
    },[movies])
    
    let scrollBackward = () =>{
        rowRef.current.scrollBy({left:-rowRef.current.offsetWidth, behavior:"smooth"})
    }

    let scrollForward = () =>{
        rowRef.current.scrollBy({left:rowRef.current.offsetWidth, behavior:"smooth"})
    }

    return(
        <>
          
                <div  className=" py-4 ">
                    {/* Mobile First Layout */}
                    {/* Row 1 */}

                    <div className="p-1 px-3">
                        <span className=" text-[clamp(1.5rem,1.8vw,2.8rem)] bebas-neue-regular text-white leading-none">{name}</span>
                    </div>

                    <div className="relative group">
                        <div ref={rowRef}  className=" text-white  scrollbar-hide overflow-y-hidden overflow-x-auto  h-[22vh]  md:h-[37vh] flex gap-2 ">
                           {movies.map((movie) => ( 
                                <Cards key={movie.id} movie={movie} className="min-w-[120px] h-[271px] w-35 md:w-45.5"/>
                            ))}
                        </div>
                        
                {/* layering for side */}
                   {showLeftBtn &&   
                    <div className=" opacity-0 group-hover:opacity-100 transition delay-80 ease-in-out cursor-pointer absolute top-0  h-full w-20 bg-linear-to-r from-black to-transparent" onClick={scrollBackward}></div> 
                    } 
                     
                      
                    { showRightBtn &&  <div className=" opacity-0 group-hover:opacity-100 transition delay-80 ease-in-out cursor-pointer absolute top-0 right-0 h-full w-20 bg-linear-to-l from-black to-transparent" onClick={scrollForward}></div>
                    }

                        <div  className="absolute top-[50%] hidden md:flex justify-between w-full  z-10 " >
                            
                    
                           {showLeftBtn && <button className="opacity-0 group-hover:opacity-100 absolute left-0 cursor-pointer  transition delay-100 ease-in-out"
                             onClick={scrollBackward}
                            >
                                <ChevronLeftIcon  sx={{color: '#FFFFFF', fontSize: '40px'}}/>
                            </button>}
                          
                      
                      
                           { showRightBtn &&  <button className="absolute right-0 opacity-0 group-hover:opacity-100 cursor-pointer transition delay-100 ease-in-out    "
                            onClick={scrollForward}>
                                <ChevronRightIcon  sx={{color: '#FFFFFF', fontSize: '40px'}}/>
                            </button>}
                          
                        </div>  
                    </div>

                </div>
              
        </> 
    )
}

export default Row;
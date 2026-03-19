import { useState,useEffect } from "react";
function Cards({id, movie}){

    return(
    <>
        <div className="shrink-0 min-w-[120px] w-[150px] md:w-[200px]  h-full cursor-pointer  " key={id}>
             <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} className=" w-full h-full rounded-[0.5rem] "  alt="movieCard" />   
        </div>
            
    </> 
    )
}

export default Cards;
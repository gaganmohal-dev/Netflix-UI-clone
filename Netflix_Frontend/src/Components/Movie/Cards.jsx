import { useState,useEffect } from "react";
import {Link} from "react-router-dom"
import PlayArrowOutlinedIcon from '@mui/icons-material/PlayArrowOutlined';
import AddIcon from '@mui/icons-material/Add';
function Cards({id, movie}){
    
    return(
    <>
    {/* movie.id which is gonna be matched with path of component in App.jsx*/}
    <Link to={`/Movie/${movie.id}`}>  
        <div className="relative shrink-0 min-w-[120px] w-[150px] md:w-[200px]  h-full cursor-pointer group " key={id} >
             <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} className=" w-full h-full rounded-[0.5rem] "  alt="movieCard" 
                
             />     

                {/* Layerign inset-0 */}
            <div className="absolute inset-0 bg-linear-to-t from-black to-transparent opacity-0 hover:opacity-100 transition duration-300">

                 <div className="absolute  bottom-15 right-2 z-20  w-11 h-11 transition delay-200">
             
                <button className="w-full h-full bg-gray-400/50 rounded-full cursor-pointer mb-1">
                 <AddIcon fontSize="large"/>
                </button>
             
                <button className="w-full  h-full  bg-red-500/90 rounded-full cursor-pointer">
                    < PlayArrowOutlinedIcon fontSize="large" />
                </button>
            </div>

            </div>

           
        </div>
        </Link>
    
    </> 
    )
}

export default Cards;
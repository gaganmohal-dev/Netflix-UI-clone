import {useContext } from "react";
import { watchListContext } from "../../Contexts/watchListContext";
import {Link, useNavigate} from "react-router-dom"
import PlayArrowOutlinedIcon from '@mui/icons-material/PlayArrowOutlined';
import AddIcon from '@mui/icons-material/Add';
import CheckIcon from '@mui/icons-material/Check';
function Cards({id, movie}){
    const navigate = useNavigate()
    const {watchList, setWatchList}= useContext(watchListContext)
    const isInWatchlist = watchList?.some(item => item.id === movie.id);
    console.log(watchList)
    return(
    <>
    {/* movie.id which is gonna be matched with path of component in App.jsx*/}
        <div className="relative shrink-0 min-w-[120px] w-[150px] md:w-[200px]  h-full cursor-pointer group " key={id} >
          
                <img
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    className="w-full h-full rounded-[0.5rem] cursor-pointer"
                    alt="movieCard"

                />
                        
         
           
  {/* Layerign inset-0 */}
        <div className="absolute inset-0 bg-linear-to-t from-black to-transparent opacity-0 hover:opacity-100 transition duration-300"  onClick={() => navigate(`/Movie/${movie.id}`)}>

            <div className="absolute  bottom-15 right-2 z-35  w-12 h-12 transition delay-200 flex flex-col gap-2">
                <div className="w-full h-full group/button relative inline-block">
                <button className=" w-full h-full bg-gray-400/50 rounded-full cursor-pointer "
                    onClick={(e) => {
                        e.stopPropagation();
                        if(isInWatchlist){
                              // Removing
                              setWatchList(prev => prev.filter(item => item.id !== movie.id))
                          }else{
                              setWatchList(prev => [...prev , movie])
                          }
                    }}
                >
                 {isInWatchlist ? <CheckIcon fontSize="large"/> : <AddIcon fontSize="large"/>}
                </button>

                    <span className="absolute bottom-12 left-1/2 -translate-x-1/2 
                                        scale-0 group-hover/button:scale-100 transition-transform
                                        bg-black text-white text-xs px-2 py-1 rounded whitespace-nowrap">
                            {isInWatchlist ? "Added to watchlist" : "Add to watchlist"}
                    </span>
               </div>

                <button className="w-full  h-full  bg-red-500/90 rounded-full cursor-pointer"
                      onClick={(e) => {
                          e.stopPropagation();
                         
                        console.log(e)
                    }}
                >
                    < PlayArrowOutlinedIcon fontSize="large"/>
                </button>
            </div>

            </div>
            </div>
        
    
    </> 
    )
}

export default Cards;
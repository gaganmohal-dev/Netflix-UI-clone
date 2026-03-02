import { CloudCog } from "lucide-react";
import { useEffect, useState } from "react";


function MovieBanner(){
   const apiKey = import.meta.env.VITE_TMDB_KEY;
   const [Movies, setMovies] = useState([]); 

   // API FETCHING THE DATA
    useEffect(() => {
        const fetchData = async function(){
        const res = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`)
        const data = await res.json()
        const finalData = data.results.filter(movie => movie.backdrop_path !== null)
        setMovies(finalData)
        }

        fetchData()
    }, []) 

    const [currentIndex , setIndex] = useState(0);

    // Using Timers for Crousel to slide
            useEffect(() => {
                if(Movies.length === 0) return
                const interval = setInterval(() => {
                        setIndex(prevIndex => (prevIndex + 1) % Movies.length)
                    }, 10000)

                    return () => clearInterval(interval);
                
            }, [Movies.length])
            
    
   return(
        <>    
        <div className="relative h-[80vh]  md:h-dvh w-full  flex justify-center  md:justify-start  ">

                {console.log(Movies[0])}
           
                {Movies.map((movie,index) => (
                    <div 
                    className={`hidden md:block absolute inset-0  bg-no-repeat bg-cover  transition-opacity duration-1000 ease-in-out    ${index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"}`}
                    key={movie.id} 
                    style={{
                        backgroundImage : 
                        `url(
                            https://image.tmdb.org/t/p/original/${movie.backdrop_path}
                            )`}}
                    >
                        <div className="absolute inset-0 bg-linear-to-r 
                            from-black 
                            via-black/40 
                            to-transparent" />
                       <div className="absolute inset-0 
                        bg-linear-to-t 
                        from-black from-0% 
                        via-black/40 via-10% 
                        to-transparent to-20%" />
                    </div> 
                    
                ))}

             {/* For Mobile Layout */}
        
                {Movies.map((movie,index) => (
                  <div 
                    className={`md:hidden  absolute top-16 w-[95%] h-[60vh] flex items-end justify-end rounded-4xl bg-red-400 bg-no-repeat bg-position-[60%] bg-cover transition-opacity duration-1000 ease-in-out    ${index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"}`}
                    key={movie.id} 
                    style={{
                        backgroundImage : 
                        `url(
                            https://image.tmdb.org/t/p/original/${movie.poster_path}
                            )`}}
                     >   
                    <div className="flex flex-col gap-3"> 
                     <div className="h-18 w-18 rounded-full bg-gray-600/80">
                        <img src="/images/plus.svg" alt="Add Movie" className="flex justify-center items-center w-full h-full  invert" />
                     </div>
                     <div className="h-18 w-18 rounded-full bg-netflix-red/75 mb-8 mr-4 flex justify-center items-center bg-clip-padding backdrop-filter backdrop-blur-sm border border-gray-100">
                            <img src="/images/play.svg" alt="playbutton" className="w-[80%] h-[60%] object-cover invert" />
                     </div>
                    </div>
                </div>
                ))}
  
       

        {Movies.length > 0 && (   
            <div className=" md:w-1/2 md:h-full h-[70vh] w-auto flex flex-col gap-6  md:justify-center  z-20">
                <div className="leading-none font-semibold text-[clamp(2rem,12vw,5rem)] hidden md:block ">    
                    <h1 className="text-white  text-center " >{Movies[currentIndex].title}</h1>
                </div>

                <div className=" justify-center hidden  md:flex ">
                    <p className="text-white max-w-[90%]  text-[clamp(1rem,1vw,2rem)] font-semibold">
                        {Movies[currentIndex].overview}
                    </p>
                </div>
             
                <div className=" w-full hidden md:flex gap-3 justify-center ">
                    <button className="py-3 px-10 md:py-4 m bg-white text-small font-bold flex gap-2 cursor-pointer items-center">
                        <img src="/images/Vector.svg" alt="" className="w-3.5"/>
                        <p>Play</p>
                    </button>
                    <button className="py-3 md:py-4 px-14 font-bold text-small flex gap-2 items-center cursor-pointer bg-white/30">
                        <img src="/images/Detail.svg" alt="" className="w-5" />
                        <p className="text-white">Details</p>
                    </button>
                </div>

                
            </div>
          )}
             

             

             </div>   
           
        </>
  )
}

export default MovieBanner;
import React from "react";
import { useState, useEffect } from "react";
import Cards from "../Movie/Cards";
function Trending() {
     const [movies, setMovies] = useState([]);
    const apiKey = import.meta.env.VITE_TMDB_KEY;
    useEffect(() => {
      const fetching = async () => {
          try{
                const res = await fetch(
                    `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`);
               
                if(!res.ok){
                     throw new Error("Failed to fetch");
                }

                const data = await res.json();
                setMovies(data.results);

            }catch (err) {
                console.error(err);
             }
        }  

        fetching()
    }, []);  
  return (
    <>
        {/* Trending Movies grid */}
           <div className="w-[80%] max-w-8xl mt-9 leading-none mx-auto">

            {/* Heading */}
            <h2 className="text-white text-2xl font-semibold leading-none ">
                Trending in India
            </h2>

            {/* Grid */}
         <div className="grid gap-3 gap-x-5 pt-2  text-white
                grid-cols-[repeat(auto-fill,minmax(140px,1fr))]">
                {movies.map((movie) => (
                <Cards key={movie.id} id={movie.id} movie={movie}  />
                ))}
            </div>

            </div>
    </>
  );
}

export default Trending;
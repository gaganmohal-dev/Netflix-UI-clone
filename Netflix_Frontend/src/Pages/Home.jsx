import { useState, useEffect } from "react";
import MovieBanner from "../Components/Movie/MovieBanner"
import Row from "../Components/Movie/Row";
import movieCategories from "../Data/RowsData.js"
function HomePage(){

    const apiKey = import.meta.env.VITE_TMDB_KEY;
    const [movies,setMovies] = useState({})

    useEffect(() => {
        const  fetchData = async () => {
            try{
                const  responses = await Promise.all(
                    movieCategories.map(category => 
                    fetch(`https://api.themoviedb.org/3${category.endpoint}${category.endpoint.includes("?")? "&" : "?"}api_key=${apiKey}`),
                ))

                const data = await Promise.all(
                    responses.map(res => res.json())
                )
               
                const finalData = {} //{key:value}
                data.forEach((item,index) => {
                    const key = movieCategories[index].key
                    finalData[key] = item.results
                })
                
                setMovies(finalData);
            }catch(error){
                console.error(error)
            }
        
        }
         
         fetchData()
     }, [movieCategories])

   
    return(
        <>
        {/*calling Movie banner  */}
            

        {/* Navbar */}
      
            <MovieBanner />
      
       
        {/* Rows */}
        <section>
            { 
                movieCategories.map((category )=> (
                  
                        <Row key={category.key}  name={category.name} movies={movies[category.key] || []}/>
                        
                   
                )
                )
            }
        </section>
            
        

       

             
               
           
               

        </>
    )
}

export default HomePage;
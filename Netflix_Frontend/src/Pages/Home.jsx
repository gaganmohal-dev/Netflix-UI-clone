import { useState, useEffect } from "react";
import Navbar from "../Components/Navbar"
import SideBar from "../Components/SideBar"
import MovieBanner from "../Components/Movie/MovieBanner"
import Row from "../Components/Movie/Row";
import movieCategories from "../Data/RowsData.js"
import Footer from "../Components/Footer.jsx";
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
               
                const finalData = {}
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

     const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    return(
        <>
        {/*calling Movie banner  */}
            

        {/* Navbar */}
        <header>
            <Navbar setIsSidebarOpen={setIsSidebarOpen} isSidebarOpen = {isSidebarOpen} />
            <MovieBanner />
        </header>
       
        {/* Rows */}
        <section>
            { 
                movieCategories.map((category )=> (
                  
                        <Row key={category.key}  name={category.name} movies={movies[category.key] || []}/>
                        
                   
                )
                )
            }
        </section>
            
        

        {/* Sidebar */}
           {isSidebarOpen && (
                <div
                onClick={() => setIsSidebarOpen(false)}
                className="fixed inset-0 bg-black/40 z-40"
                />
             )}
            <SideBar 
                isSidebarOpen = {isSidebarOpen}
            />

             {/*Footer */}
             
                <Footer />
           
               

        </>
    )
}

export default HomePage;
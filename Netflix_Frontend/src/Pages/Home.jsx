import { useState } from "react";
import Navbar from "../Components/Navbar"
import SideBar from "../Components/SideBar"
import MovieBanner from "../Components/Movie/MovieBanner"
function HomePage(){
     const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    return(
        <>
        {/*calling Movie banner  */}
            <MovieBanner />

        {/* Navbar */}
             <Navbar setIsSidebarOpen={setIsSidebarOpen} isSidebarOpen = {isSidebarOpen} />
        
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


               

        </>
    )
}

export default HomePage;
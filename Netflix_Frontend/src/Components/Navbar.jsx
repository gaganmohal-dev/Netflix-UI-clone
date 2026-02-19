import { useState } from "react"
import SideBar from "./SideBar";
function Navbar({setIsSidebarOpen}){
    const handleClick = () => {
        setIsSidebarOpen(true)
    }
    return(
    <>
        <div className=" px-4 py-8 flex justify-between">
                
            <div className="flex gap-8 text-small ">
                <div className="flex justify-center items-center">
                    <img src="/images/NetflixLogoSvg.svg" className=" h-7 md:h-8.5" /> 
                </div>
             
                <ul className=" hidden md:flex text-amber-50 justify-center items-center gap-5 cursor-pointer ">
                    <li className="hover:text-gray-300">Home</li>
                    <li className="hover:text-gray-300">Movies</li>
                    <li className="hover:text-gray-300">Tv Shows</li>
                    <li className="hover:text-gray-300">Latest</li>
                    <li className="hover:text-gray-300">My List</li>
                </ul>
            </div>
       
            <div className="hidden md:flex gap-8 justify-center items-center "> 
                <div><img src="/images/Search.svg" alt="" className="cursor-pointer"/></div>
                <div><img src="/images/GiftBox.svg" alt="" className="cursor-pointer" /></div>
                <div><img src="/images/NotificationBell.svg" alt="" className="cursor-pointer" /></div>
                <div className="flex items-center gap-1.5">
                    <img src="/images/profile.svg" alt="" className="cursor-pointer"/>
                    <img src="/images/DownArrow.svg" alt="" className="cursor-pointer"/>
                </div> 
            </div>

            {/* Hamburger */}
            
                <div className="md:hidden flex items-center gap-5">
                    <img src="/images/Search.svg" alt="search" className="h-5" />
                    <img src="/images/profile.svg" alt="search" className="h-6" onClick={handleClick} />
                </div> 
            

            
        </div>
    </>
    )    
}
export default Navbar


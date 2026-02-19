import { useState } from "react"
import Navbar from "./Components/Navbar"
import SideBar from "./Components/SideBar"
function App(){
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    return(
        <>
        
           <Navbar setIsSidebarOpen={setIsSidebarOpen} isSidebarOpen = {isSidebarOpen} />
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
export default App
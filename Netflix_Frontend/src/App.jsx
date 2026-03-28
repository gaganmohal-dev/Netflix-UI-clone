import { useState} from "react"
import { Outlet } from "react-router-dom";
import Navbar from "./Components/Navbar"
import SideBar from "./Components/SideBar";
import Footer from "./Components/Footer";

function App(){
    //  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    return(
        <>
       
        {/* // <header>
        //     <Navbar setIsSidebarOpen={setIsSidebarOpen} isSidebarOpen = {isSidebarOpen} />
        // </header>
             */}
        <section>
         <Outlet />
        </section>

        {/* Sidebar
           {isSidebarOpen && (
                <div
                onClick={() => setIsSidebarOpen(false)}
                className="fixed inset-0 bg-black/40 z-40"
                />
             )}
            <SideBar 
                isSidebarOpen = {isSidebarOpen}
            /> */}

             
        {/*Footer */}
        <footer>
         <Footer />
        </footer>
        </>
    )
}
export default App
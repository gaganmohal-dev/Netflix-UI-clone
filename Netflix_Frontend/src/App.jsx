import { Outlet } from "react-router-dom";
import Footer from "./Components/Footer";

function App(){
   
    return(
        <>

        <section>
         <Outlet />
        </section>

        {/*Footer */}
        <footer>
         <Footer />
        </footer>
        </>
    )
}
export default App
import ReactDOM from "react-dom/client";
import { useState } from "react";
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import App from "./App";
import HomePage from "./Pages/Home";
import MoviePage from "./Pages/MoviePage";
import '../src/index.css'
import BasicLayout from "./Components/BasicLayout";
import { watchListContext } from "./Contexts/watchListContext";

const router = createBrowserRouter([
    {
        path: "/",
        element: <BasicLayout  />,
        children: [
        { index: true, element: <HomePage /> }
        ]
  },
  {
    path: "/Movie/:id",
    element: <App />,
    children: [
      { index: true, element: <MoviePage /> }
    ]
  }
])

function Root() {
   const [watchList, setWatchList] = useState([]);

   return(
    <>
      <watchListContext.Provider value={{watchList, setWatchList}} >
            <RouterProvider router={router} />
      </watchListContext.Provider>
    </>  

   )
}

ReactDOM.createRoot(document.getElementById('root')).render(<Root />)
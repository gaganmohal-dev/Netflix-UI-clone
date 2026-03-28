import ReactDOM from "react-dom/client";
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import App from "./App";
import HomePage from "./Pages/Home";
import MoviePage from "./Pages/MoviePage";
import '../src/index.css'
import BasicLayout from "./Components/BasicLayout";

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


ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
)
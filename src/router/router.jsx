import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout/MainLayout";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import AllGame from "../pages/AllGame/AllGame";
import GameDetails from "../pages/GameDetails/GameDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout/>,
    children:[
      {
        index:true,
        element:<Home/>
      },
      {
        path:'/login',
        element:<Login/>
      },
      {
        path:'/register',
        element:<Register/>
      },
      {
        path:'/game',
        element:<AllGame/>,
        loader:() => fetch("/gameData.json")
      }

    ]
  },
  {
    path:'/gameDetails/:id',
    element:<GameDetails></GameDetails>,
    loader:() => fetch('/gameData.json'),
    // hydrateFallbackElement:<h2>error</h2>
  },
  {
    path: "/*",
    element: <h3>error 404</h3>,
  },

]);
import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout/MainLayout";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import AllGame from "../pages/AllGame/AllGame";
import GameDetails from "../pages/GameDetails/GameDetails";
import Profile from "../pages/Profile/Profile";
import PrivateRoute from "../provider/PrivateRoute/PrivateRoute";
import Loading from "../components/Loading/Loading";
import ErrorPage from "../pages/ErrorPage/ErrorPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout/>,
    errorElement:<ErrorPage></ErrorPage>,
    hydrateFallbackElement:<Loading></Loading>,
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
    path:"/profile",
    element:<Profile></Profile>
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
    element:(
      <PrivateRoute>
        <GameDetails></GameDetails>
      </PrivateRoute>
    ),
    loader:() => fetch('/gameData.json'),
    // hydrateFallbackElement:<h2>error</h2>
  },
  {
    path: "/*",
    element: <ErrorPage/>,
  },

]);
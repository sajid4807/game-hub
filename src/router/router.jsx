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
import UpdateProfile from "../components/UpdateProfile/UpdateProfile";
import ForgetPassword from "../pages/ForgetPassword/ForgetPassword";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout/>,
    errorElement:<ErrorPage></ErrorPage>,
    hydrateFallbackElement:<Loading></Loading>,
    children:[
      {
        index:true,
        element:<Home/>,
        hydrateFallbackElement:<Loading/>
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
    path:'/updateProfile',
    element:<UpdateProfile/>
  },
  {
    path:'/forgetPassword',
    element:<ForgetPassword/>
  },
      {
        path:'/game',
        element:<AllGame/>,
        loader:() => fetch("/gameData.json"),
        hydrateFallbackElement:<Loading/>
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
    hydrateFallbackElement:<Loading/>
  },
  {
    path: "/*",
    element:<ErrorPage/>
  },
]);
import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "./Main";
import Home from "../Pages/Home/Home";
import UpdateProfile from "../Pages/UpdateProfile/UpdateProfile";
import LogIn from "../Pages/LogIn/LogIn";
import SignUp from "../Pages/SignUp/SignUp";


  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:"/",
            element:<Home></Home>
        },
        {
            path:"updateProfile",
            element:<UpdateProfile></UpdateProfile>
        },
        {
            path:"login",
            element:<LogIn></LogIn>
        },
        {
            path:"signup",
            element:<SignUp></SignUp>
        },
      ]
    },
  ]);
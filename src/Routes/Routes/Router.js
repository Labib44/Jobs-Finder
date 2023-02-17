import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import About from "../../Pages/About/About";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import SignUp from "../../Pages/Login/SignUp";

export const router=createBrowserRouter([
    {
        path:'/', element:<Main></Main>, children:[
            {
                path:'/', element: <Home></Home>
            },
            {
                path:'/login', element: <Login></Login>
            },
            {
                path:'/signup', element: <SignUp></SignUp>
            },
            {
                path:'/about', element: <About></About>
            },
        ]
    }
])
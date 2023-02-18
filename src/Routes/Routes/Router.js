import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import About from "../../Pages/About/About";
import Contact from "../../Pages/Contact/Contact";
import ExperienceDetails from "../../Pages/ExperiencedDetails/ExperienceDetails";
import FresherDetails from "../../Pages/FresherDetails/FresherDetails";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import SignUp from "../../Pages/Login/SignUp";
import ItDetails from "../../Pages/TopIt/ItDetails";

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
            {
                path:'/contact', element: <Contact></Contact>
            },
            {
                path:'/FresherDetails', element: <FresherDetails></FresherDetails>
            },
            {
                path:'/ExperienceDetails', element: <ExperienceDetails></ExperienceDetails>
            },
            {
                path:'/itDetails', element: <ItDetails></ItDetails>
            },
        ]
    }
])
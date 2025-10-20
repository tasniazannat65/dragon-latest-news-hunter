import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layouts/HomeLayout";
import AuthLayout from "../Layouts/AuthLayout";
import Home from "../Pages/Home";
import About from "../Pages/About";
import career from "../Pages/career";
import CategoryNews from "../Components/CategoryNews";
import Loading from "../Components/Loading";
import Register from "../Pages/Register";
import Login from "../Pages/Login";

export const router = createBrowserRouter([
    {
      path: '/',
      Component: HomeLayout,
      children: [
        {
            index: true,
            Component: Home
        },
        {
            path: '/about',
            Component: About
        },
        {
            path: '/career',
            Component: career
        },
        {
            path: '/category/:id',
            Component: CategoryNews,
            loader: ()=>fetch('/news.json').then(res=> res.json()),
            hydrateFallbackElement: <Loading/>
        }
      ]
    },
    {
       path: '/auth',
       Component: AuthLayout,
       children:[
        {
            path: '/auth/register',
            Component: Register
        },
        {
            path: '/auth/login',
            Component: Login
        }
       ]
    },
    {
      
    }
])
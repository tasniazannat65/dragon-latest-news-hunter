import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layouts/HomeLayout";
import AuthLayout from "../Layouts/AuthLayout";
import Home from "../Pages/Home";
import About from "../Pages/About";
import career from "../Pages/career";

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
        }
      ]
    },
    {
       path: '/auth',
       Component: AuthLayout
    },
    {
      
    }
])
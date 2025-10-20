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
import NewsDetails from "../Pages/NewsDetails";
import PrivateRoute from "../AuthProvider/PrivateRoute";

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
        path: '/news-details/:id',
        element: <PrivateRoute>
            <NewsDetails/>
        </PrivateRoute>,
        loader: ()=>fetch('/news.json'),
        hydrateFallbackElement: <Loading/>
      
    }
])
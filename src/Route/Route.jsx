import { createBrowserRouter } from 'react-router-dom';
import Login from '../Pages/Login/Login';
import MainLayout from '../Layout/MainLayout';
import MainHome from '../Pages/Home/MainHome/MainHome';
import Register from '../Pages/Register/Register';
import NotFound from '../Pages/NotFound/NotFound';
import Blog from '../Pages/Blog/Blog';
import CourceLayout from '../Layout/CourceLayout';
import Cources from '../Pages/Cources/Cources';
import Details from '../Pages/Cources/Details/Details';
import CheckOut from '../Pages/Cources/Checkout/CheckOut';
import PrivateRoute from '../Authentication/PrivateRoute';
import FAQ from '../Pages/FAQ/FAQ';

export const routes = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        errorElement: <NotFound />,
        children: [
            {
                path: "/",
                element: <MainHome />,
            },
            {
                path: "/home",
                element: <MainHome />,
            },
            {
                path: "/blog",
                element: <Blog />,
            },
            {
                path: "/faq",
                element: <FAQ />,
            },
            {
                path: "/login",
                element: <Login />,
            },
            {
                path: "/register",
                element: <Register />,
            },

        ]
    },
    {
        path: "/cources",
        element: <CourceLayout />,
        errorElement: <NotFound />,
        children: [
            {
                path: "/cources",
                element: <Cources />,
                loader: () => fetch("https://high-impact-institute-server.vercel.app/cources")
            },
            {
                path: "/cources/details/:id",
                element: <Details />,
                loader: ({ params }) => fetch(`https://high-impact-institute-server.vercel.app/cources/details/${params.id}`),
            },
            {
                path: "/cources/checkout",
                element: <PrivateRoute><CheckOut /></PrivateRoute>,
            }
        ]
    }

])
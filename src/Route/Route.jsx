import { createBrowserRouter } from 'react-router-dom';
import Login from '../Pages/Login/Login';
import MainLayout from '../Layout/MainLayout';
// import Blog from '../Pages/Blog/Blog';
import MainHome from '../Pages/Home/MainHome/MainHome';
import Register from '../Pages/Register/Register';
import NotFound from '../Pages/NotFound/NotFound';
import Blog from '../Pages/Blog/Blog';

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
                path: "/login",
                element: <Login />,
            },
            {
                path: "/register",
                element: <Register />,
            },

        ]
    }
])
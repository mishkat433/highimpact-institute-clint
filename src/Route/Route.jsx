import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../Layout/MainLayout';
import Blog from '../Pages/Blog/Blog';
import MainHome from '../Pages/Home/MainHome/MainHome';

export const routes = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: "/",
                element: <MainHome />,
            },
            {
                path: "/blog",
                element: <Blog />,
            },
            // {
            //     path: "/news/:id",
            //     loader: ({ params }) => fetch(`http://localhost:5000/news/${params.id}`),
            //     element: <News />,
            // },
        ]
    }
])
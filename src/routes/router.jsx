import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import Home from "../pages/Home";
import CategoryNews from "../pages/CategoryNews";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../pages/Login";
import Register from "../pages/Register";
import NewsDetails from "../pages/NewsDetails";

const router = createBrowserRouter(
    [
        {
            path: '/',
            element: <HomeLayout></HomeLayout>,
            children: [
                {
                    path: '/',
                    element: <Home></Home>
                },
                {
                    path: '/category/:id',
                    element: <CategoryNews></CategoryNews>,
                    hydrateFallbackElement: 'Loading...',
                    loader: () => fetch('/news.json')
                }
            ]
        },
        {
            path: '/auth',
            element: <AuthLayout></AuthLayout>,
            children: [
                {
                    path: '/auth/login',
                    element: <Login></Login>
                },
                {
                    path: '/auth/register',
                    element: <Register></Register>
                }
            ]
        },
        {
            path: '/news-details/:id',
            element: <NewsDetails></NewsDetails>,
            hydrateFallbackElement: 'Loading...',
            loader: () => fetch('/news.json')
        },
        {
            path: '/*',
            element: <h2>Error - 404</h2>
        },
    ]
)

export default router;
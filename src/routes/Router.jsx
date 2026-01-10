import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import HomeLayout from '../layouts/HomeLayout';
import Home from '../pages/Home';
import Login from '../pages/Login';
import AuthLayout from '../layouts/AuthLayout';
import SignUp from '../pages/SignUp';

const Router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout></HomeLayout>,
        children: [
            {
                index: true,
                element: <Home></Home>,
                loader:()=>fetch("/popularskills.json")
            }
        ]
    },
    {
        path: '/auth',
        element: <AuthLayout></AuthLayout>,
        children: [
            {
                path:'/auth/login',
                element:<Login></Login>
            },
            {
                path:'/auth/signup',
                element:<SignUp></SignUp>
            }
        ]
    },
    {
        path: "/*",
        element: <h2>Error404</h2>,
    },
])

export default Router;
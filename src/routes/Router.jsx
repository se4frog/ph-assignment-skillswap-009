import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import HomeLayout from '../layouts/HomeLayout';
import Home from '../pages/Home';
import Login from '../pages/Login';
import AuthLayout from '../layouts/AuthLayout';
import SignUp from '../pages/SignUp';
import SkillDetails from '../pages/SkillDetails';
import ProfilePage from '../pages/ProfilePage';
import ProfileLayout from '../layouts/ProfileLayout';
import Loading from '../pages/Loading';
import ErrorPage from '../pages/ErrorPage';
import PrivateRoute from '../provider/PrivateRoute';
import ForgetPassword from '../pages/ForgetPassword';

const Router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout></HomeLayout>,
        children: [
            {
                index: true,
                element: <Home></Home>,
                loader: () => fetch("/popularskills.json"),
                hydrateFallbackElement: <Loading></Loading>
            }
        ]
    },
    {
        path: '/profile',
        element: <ProfileLayout></ProfileLayout>
    },
    {
        path: '/auth',
        element: <AuthLayout></AuthLayout>,
        children: [
            {
                path: '/auth/login',
                element: <Login></Login>,
            },
            {
                path: '/auth/signup',
                element: <SignUp></SignUp>
            },
            {
                path:'/auth/forget-password',
                element:<ForgetPassword></ForgetPassword>,
            }
        ]
    },
    {
        path: '/skill-details/:id',
        element: <PrivateRoute> 
            <SkillDetails></SkillDetails>
        </PrivateRoute>,
        loader: () => fetch("/popularskills.json"),
        hydrateFallbackElement: <Loading></Loading>,
        errorElement: <ErrorPage></ErrorPage>
    },
    {
        path: "/*",
        element: <ErrorPage></ErrorPage>,
    },
])

export default Router;
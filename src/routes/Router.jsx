import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import HomeLayout from '../layouts/HomeLayout';
import Container from '../components/Container';
import Home from '../pages/Home';

const Router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout></HomeLayout>,
        children:[
            {
                index: true,
                element: (<Container>
                    <Home></Home>
                </Container>),
                
            }
        ]
    }
])

export default Router;
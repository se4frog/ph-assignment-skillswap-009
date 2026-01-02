import React from 'react';
import Navbar from '../components/Navbar';

import Footer from '../components/Footer';
import Container from '../components/Container';
import { Outlet } from 'react-router-dom';

const HomeLayout = () => {
    return (
        <div className='flex flex-col min-h-screen'>
            <div className='flex-1'>
                <Container>
                    <Navbar></Navbar>
                    <Outlet></Outlet>
                </Container>
            </div>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default HomeLayout;
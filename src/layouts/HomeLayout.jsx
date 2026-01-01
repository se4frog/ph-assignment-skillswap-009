import React from 'react';
import Navbar from '../components/Navbar';

import Footer from '../components/Footer';
import Container from '../components/Container';
import { Outlet } from 'react-router-dom';

const HomeLayout = () => {
    return (
        <div className='flex flex-col min-h-screen'>
            <header>
                <Navbar></Navbar>
            </header>
            <main className='flex-1'>
                <Outlet></Outlet>
            </main>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default HomeLayout;
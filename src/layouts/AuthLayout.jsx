import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Outlet } from 'react-router-dom';
import Container from '../components/Container';

const AuthLayout = () => {
    return (
        <div className='flex flex-col'>
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

export default AuthLayout;
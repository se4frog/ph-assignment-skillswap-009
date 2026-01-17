import React from 'react';
import Navbar from '../components/Navbar';

import Footer from '../components/Footer';
import Container from '../components/Container';
import { Outlet, useNavigation } from 'react-router-dom';
import Loading from '../pages/Loading';

const HomeLayout = () => {

    const  {state} = useNavigation()
    return (
        <div className='flex flex-col min-h-screen'>
            <div className='flex-1'>
                <Container>
                    <Navbar></Navbar>
                  {state=="loading" ? <Loading></Loading>: <Outlet></Outlet>}
                </Container>
            </div>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default HomeLayout;
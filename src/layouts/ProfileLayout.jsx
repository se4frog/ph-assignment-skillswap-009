import React from 'react';
import ProfilePage from '../pages/ProfilePage';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Container from '../components/Container';

const ProfileLayout = () => {
    return (
        <div>
            <Container>
                <Navbar></Navbar>
                <ProfilePage></ProfilePage>
                <Footer></Footer>
            </Container>
        </div>
    );
};

export default ProfileLayout;
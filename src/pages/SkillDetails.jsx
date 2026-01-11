import React from 'react';
import {  useLoaderData, useParams } from 'react-router-dom';
import SkillDetailsCard from '../components/SkillDetailsCard';
import Navbar from '../components/Navbar';
import Container from '../components/Container';
import Footer from '../components/Footer';


const SkillDetails = () => {

    const skilldata = useLoaderData();

    const { id } = useParams();

    const skill = skilldata.find((skilltarget) => skilltarget.skillId == id);

    return (
        <div className="skills-container">
            <Container>
                <Navbar></Navbar>
          
            <SkillDetailsCard
                skill={skill}
            />

            <Footer></Footer>

            </Container>
        </div>
    );
};

export default SkillDetails;
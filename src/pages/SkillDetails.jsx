import React from 'react';
import {  useLoaderData, useParams } from 'react-router-dom';
import SkillDetailsCard from '../components/SkillDetailsCard';
i

const SkillDetails = () => {

    const skilldata = useLoaderData();

    const { id } = useParams();

    const skill = skilldata.find((skilltarget) => skilltarget.skillId == id);

    return (
        <div className="skills-container">
          
            <SkillDetailsCard
                skill={skill}
            />

        </div>
    );
};

export default SkillDetails;
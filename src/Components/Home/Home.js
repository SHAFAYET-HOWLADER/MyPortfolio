import React from 'react';
import Banner from './Banner';
import Contact from './Contact';
import MySkills from './MySkills';
import Projects from './Projects';

const Home = () => {
    return (
        <div>
            <Banner/>
            <MySkills/>
            <Projects/>
            <Contact/>
        </div>
    );
};

export default Home;
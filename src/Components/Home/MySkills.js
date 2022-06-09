import React from 'react';
import { useTypewriter } from 'react-simple-typewriter';
import { GiPencil } from 'react-icons/gi';
import './MySkills.css'
const MySkills = () => {
    const { text } = useTypewriter({
        words: ['My Skills'],
        loop: {},
    })
    return (
        <section id='mySkills'>
            <div className='overly'>
                <div className='container'>
                    <div className='skill_content'>
                        <h3>Welcome 
                             <br/>
                            <small>To</small></h3>
                        <h2>{text}<GiPencil style={{
                                marginTop: '-15px'
                            }} /> </h2>
                    </div>
                    <div className='skill_text'>
                        <button>Html5</button>
                        <button>Css3</button>
                        <button>Bootstrap5</button>
                        <button>Tailwind</button>
                        <button>React</button>
                        <button>React Router</button>
                        <button>Firebase</button>
                        <button>Firebase Hooks</button>
                        <button>Javascript</button>
                        <button>Node Js</button>
                        <button>Express Js</button>
                        <button>Mongodb</button>
                        <button>Github</button>
                        <button>Netlify</button>
                        <button>Heroku</button>
                        <div className='skill_overly'></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MySkills;
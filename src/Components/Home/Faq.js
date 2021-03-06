import React from 'react';
import { useTypewriter } from 'react-simple-typewriter';
import { GiPencil } from 'react-icons/gi';
import './Faq.css'
const Faq = () => {
    const { text } = useTypewriter({
        words: ['Faq'],
        loop: {},
    })
    return (
        <section id='faq'>
            <div className='overly'>
                <div className='container'>
                    <div className='skill_content'>
                        <h3>Welcome
                            <br />
                            <small>To</small></h3>
                        <h2>{text}<GiPencil style={{
                            marginTop: '-15px'
                        }} /> </h2>
                    </div>
                </div>  
            </div>
        </section>
    );
};

export default Faq;
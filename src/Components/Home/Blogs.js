import React from 'react';
import { useTypewriter } from 'react-simple-typewriter';
import { GiPencil } from 'react-icons/gi';
import './Blogs.css'
const Blogs = () => {
    const { text } = useTypewriter({
        words: ['My Blogs.Comming Soon...'],
        loop: {},
    })
    return (
        <section id="blogs">
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

export default Blogs;
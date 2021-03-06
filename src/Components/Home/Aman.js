import React from 'react';
import './Aman.css';
import aman_one from '../../anam/anam_one (1).png';
import aman_two from '../../anam/anam_one (2).png';
import aman_three from '../../anam/anam_one (3).png';
import aman_four from '../../anam/anam_one (4).png';

const Aman = () => {
    return (
        <section id='fitness'>
            <div className='container'>
                <div className='fitness_area'>
                    <div className='fitness_left'>
                        <h4>Title:Aman Template</h4>
                        <h4>Technologies : html5, css3, css3 Flexbox</h4>
                        <h5>Details : </h5>
                        <li>Responsiveness : This project is mobile friendly project any android use use this project friendly.</li>
                        <div className='link'>
                            <a href='https://github.com/SHAFAYET-HOWLADER/html_template' target='_blank'>
                                Client Code
                            </a>
                            &nbsp;
                            <a href='https://shafayet-howlader.github.io/html_template/' target='_blank'>
                                Live Site
                            </a>
                        </div>
                    </div>
                    <div className='fitness_right'>
                        <img src={aman_one} alt="img" />
                        <img src={aman_two} alt="img" />
                        <img src={aman_three} alt="img" />
                        <img src={aman_four} alt="img" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Aman;
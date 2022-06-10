import React from 'react';
import './Pax.css';
import pax_one from '../../pax_template/pax_one (1).png';
import pax_two from '../../pax_template/pax_one (2).png';
import pax_three from '../../pax_template/pax_one (3).png';
import pax_four from '../../pax_template/pax_one (3).png';


const Pax = () => {
    return (
        <section id='fitness'>
            <div className='container'>
                <div className='fitness_area'>
                    <div className='fitness_left'>
                        <h4>Title:Pax Template</h4>
                        <h4>Technologies : html5, css3, css3 Flexbox</h4>
                        <h5>Details : </h5>
                        <li>Responsiveness : This project is mobile friendly project any android use use this project friendly.</li>
                        <div className='link'>
                            <a href='https://github.com/SHAFAYET-HOWLADER/biznes-html-template' target='_blank'>
                                Client Code
                            </a>
                            &nbsp;
                            <a href='https://shafayet-howlader.github.io/biznes-html-template/' target='_blank'>
                                Live Site
                            </a>
                        </div>
                    </div>
                    <div className='fitness_right'>
                        <img src={pax_one} alt="img" />
                        <img src={pax_two} alt="img" />
                        <img src={pax_three} alt="img" />
                        <img src={pax_four} alt="img" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Pax;
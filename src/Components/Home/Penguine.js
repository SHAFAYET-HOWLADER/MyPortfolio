import React from 'react';
import './Penguine.css';
import peng1 from '../../penguine/peng_one (1).png';
import peng2 from '../../penguine/peng_one (1).png';
import peng3 from '../../penguine/peng_one (1).png';
import peng4 from '../../penguine/peng_one (1).png';


const Penguine = () => {
    return (
        <section id='fitness'>
        <div className='container'>
            <div className='fitness_area'>
                <div className='fitness_left'>
                    <h4>Title:Penguine Project</h4>
                    <h4>Technologies : html5, css3, css3 Flexbox</h4>
                    <h5>Details : </h5>
                    <li>Responsiveness : This project is mobile friendly project any android use use this project friendly.</li>
                    <div className='link'>
                        <a href='https://github.com/SHAFAYET-HOWLADER/penguine-project' target='_blank'>
                            Client Code
                        </a>
                        &nbsp;
                        <a href='https://shafayet-howlader.github.io/penguine-project/' target='_blank'>
                            Live Site
                        </a>
                    </div>
                </div>
                <div className='fitness_right'>
                    <img src={peng1} alt="img" />
                    <img src={peng2} alt="img" />
                    <img src={peng3} alt="img" />
                    <img src={peng4} alt="img" />
                </div>
            </div>
        </div>
    </section>
    );
};

export default Penguine;
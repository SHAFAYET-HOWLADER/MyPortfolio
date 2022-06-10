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
                        <h5>Technologies & details : </h5>
                        <li>Custom Active Link : All routing located on header contain custom active link to indicate where are the pages visible.</li>
                        <div className='link'>
                            <a href='https://github.com/SHAFAYET-HOWLADER/independent_service_provider' target='_blank'>
                                Client Code
                            </a>
                            &nbsp;
                            <a href='https://handle-firebase-project.web.app/' target='_blank'>
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
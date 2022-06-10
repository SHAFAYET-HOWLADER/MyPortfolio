import React from 'react';
import './Doctor.css';
import doctor_one from '../../doctor/doctor (1).png';
import doctor_two from '../../doctor/doctor (2).png';
import doctor_three from '../../doctor/doctor (3).png';
import doctor_four from '../../doctor/doctor (4).png';

const Doctor = () => {
    return (
        <section id='fitness'>
            <div className='container'>
                <div className='fitness_area'>
                    <div className='fitness_left'>
                        <h4>Title: Doctor html template</h4>
                        <h4>Technologies : html, css, bootstrap,Jquery</h4>
                        <h5>Technologies & details : </h5>
                        <li>This project was developed on a career of a doctor</li>
                        <li>Responsiveness : This project is mobile friendly project any android use use this project friendly.</li>
                        <div className='link'>
                            <a href='https://github.com/SHAFAYET-HOWLADER/doctors.psd' target='_blank'>
                                Client Code
                            </a>
                            &nbsp;
                            <a href='https://shafayet-howlader.github.io/doctors.psd/' target='_blank'>
                                Live Site
                            </a>
                        </div>
                    </div>
                    <div className='fitness_right'>
                        <img src={doctor_one} alt="img" />
                        <img src={doctor_two} alt="img" />
                        <img src={doctor_three} alt="img" />
                        <img src={doctor_four} alt="img" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Doctor;
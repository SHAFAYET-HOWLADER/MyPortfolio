import React from 'react';
import './Watch.css';
import watch1 from '../../watchMart/mart_one (1).png';
import watch2 from '../../watchMart/mart_one (2).png';
import watch3 from '../../watchMart/mart_one (3).png';
import watch4 from '../../watchMart/mart_one (4).png';


const Biznes = () => {
    return (
        <section id='fitness'>
        <div className='container'>
            <div className='fitness_area'>
                <div className='fitness_left'>
                    <h4>Title:Watch Mart</h4>
                    <h4>Technologies : html5, css3, css3 Flexbox</h4>
                    <h5>Details : </h5>
                    <li>Responsiveness : This project is mobile friendly project any android use use this project friendly.</li>
                    <div className='link'>
                        <a href='https://github.com/SHAFAYET-HOWLADER/product_analysis_webpage' target='_blank'>
                            Client Code
                        </a>
                        &nbsp;
                        <a href='https://subtle-gumdrop-ff88cb.netlify.app/' target='_blank'>
                            Live Site
                        </a>
                    </div>
                </div>
                <div className='fitness_right'>
                    <img src={watch1} alt="img" />
                    <img src={watch2} alt="img" />
                    <img src={watch3} alt="img" />
                    <img src={watch4} alt="img" />
                </div>
            </div>
        </div>
    </section>
    );
};

export default Biznes;
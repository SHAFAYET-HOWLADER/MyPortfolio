import React from 'react';
import './Agricultural.css';
import culture_one from '../../agriculture/culture_one (1).png';
import culture_two from '../../agriculture/culture_one (2).png';
import culture_three from '../../agriculture/culture_one (3).png';
import culture_four from '../../agriculture/culture_one (4).png';

const Agricultural = () => {
    return (
        <section id='fitness'>
            <div className='container'>
                <div className='fitness_area'>
                    <div className='fitness_left'>
                        <h4>Title: Agricultural Manufacturer</h4>
                        <h4>Technologies : html, css, bootstrap, react, node.js, express.js and mongodb.</h4>
                        <h5>Technologies & details : </h5>
                        <li>React-Protected Route :This project was developed using react protected routing also have been implement react-router.</li>
                        <li>Custom Active Link : All routing located on header contain custom active link to indicate where are the pages visible.</li>
                        <li>Project Category : This project was independent service provider project developed by naming fitness club, gymnasiumCenter.com.</li>
                        <li>Authentication : All access way like, email and password, login, register, google signIn, facebook signIn, github signIn was added using google firebase authentication.</li>
                        <li>Design : This ui design is fully unique and not signed copy paste related from other source.</li>
                        <li>Responsiveness : This project is mobile friendly project any android use use this project friendly.</li>
                        <div className='link'>
                            <a href='https://github.com/SHAFAYET-HOWLADER/warehouse_management_client_side' target='_blank'>
                                Client Code
                            </a>
                            &nbsp;
                            <a href='https://github.com/SHAFAYET-HOWLADER/warehouse_management_server_side' target='_blank'>
                                Server Code
                            </a>
                            &nbsp;
                            <a href='https://final-project-13085.web.app/' target='_blank'>
                                Live Site
                            </a>
                        </div>
                    </div>
                    <div className='fitness_right'>
                        <img src={culture_one} alt="img" />
                        <img src={culture_two} alt="img" />
                        <img src={culture_three} alt="img" />
                        <img src={culture_four} alt="img" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Agricultural;
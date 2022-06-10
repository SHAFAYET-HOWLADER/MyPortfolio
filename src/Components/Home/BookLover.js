import React from 'react';
import './BookLover.css';
import book_one from '../../bookLover/lover_one (1).png';
import book_two from '../../bookLover/lover_one (2).png';
import book_three from '../../bookLover/lover_one (2).png';
import book_four from '../../bookLover/lover_one (2).png';

const BookLover = () => {
    return (
        <section id='fitness'>
            <div className='container'>
                <div className='fitness_area'>
                    <div className='fitness_left'>
                        <h4>Title: Fitness Club</h4>
                        <h4>Technologies : html, css, bootstrap, react, node.js, express.js and mongodb.</h4>
                        <h5>Details : </h5>
                        <li>Technologies & Requirements : This projects was developed using javascript.Like react js, react routing, firebase authentication, node.js, express.js, mongodb and it was hosted to heroku server as well.</li>
                        <li>React js : React js makes more faster an websites.This projects was built using react js library.</li>
                        <li>React Routing : Also here are implemented react routing to go any route while clicking header menu.</li>
                        <li>Firebase : I added login, register and alternative social login to access personal activity in websites.So that user can find easily their interested activity filling form.</li>
                        <li>Backend : Here at book lover website i added js backend technologies like node.js, express.js and mongodb.So user can feel free to add their new book and manage it easily.</li>
                        <li>Mobile Friendly : Projects is fully responsible and user friendly.Modern any android user can browsing this website perfectly.</li>
                        <div className='link'>
                            <a href='https://github.com/SHAFAYET-HOWLADER/warehouse_management_client_side' target='_blank'>
                                Client Code
                            </a>
                            &nbsp;
                            <a href='https://github.com/SHAFAYET-HOWLADER/warehouse_management_server_side' target='_blank'>
                                Server Code
                            </a>
                            &nbsp;
                            <a href='https://warehouseactivity-da4ea.web.app/' target='_blank'>
                                Live Site
                            </a>
                        </div>
                    </div>
                    <div className='fitness_right'>
                        <img src={book_one} alt="img" />
                        <img src={book_two} alt="img" />
                        <img src={book_three} alt="img" />
                        <img src={book_four} alt="img" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BookLover;
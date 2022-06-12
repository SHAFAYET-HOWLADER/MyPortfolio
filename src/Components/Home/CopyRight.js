import React from 'react';
import './CopyRight.css'
const CopyRight = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <section id="copyRight">
            <div className='container'>
                <div className='copyRight_text'>
                    <p>All right reserved @ &copy; my-portfolio {year} </p>
                </div>
            </div>
        </section>
    );
};

export default CopyRight;
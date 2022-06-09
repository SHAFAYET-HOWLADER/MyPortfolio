import React from 'react';
import { useTypewriter } from 'react-simple-typewriter';
import { GiPencil } from 'react-icons/gi';
import my_png from '../../section_images/fiverr-pic-removebg.png';
import './Contact.css'
const Contact = () => {
    const { text } = useTypewriter({
        words: ['Touch'],
        loop: {},
    })
    const sendMessage = (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const message = event.target.message.value;
        event.target.reset();
        console.log(name,email,message)
    }
    return (
        <section id='contact'>
            <div className='overly'>
                <div className='container'>
                    <div className='skill_content'>
                        <h3>Get
                            <br />
                            <small>In</small></h3>
                        <h2>{text}<GiPencil style={{
                            marginTop: '-15px'
                        }} /> </h2>
                    </div>
                    <div className='contact_area'>
                        <div className='contact_left'>
                            <img src={my_png} alt='img' />
                            <h4>Name : Safayet Howlader</h4>
                            <p>Email : Safayethowlader96@gmail.com</p>
                            <p>Phone : 01704830855</p>
                            <p>Village : Shitaikunda</p>
                            <p>Thana : Kotalipara</p>
                            <p>District : Gopalganj</p>
                            <p>Capital : Dhaka</p>
                            <p>Country : Bangladesh</p>
                        </div>
                        <div className='contact_right'>
                            <h3>Contact With Me</h3>
                            <p>
                                Please fill out the form on this section to contact with me. Or call between 9:00 a.m. and 8:00 p.m. ET, Monday through Friday</p>
                            <form className='form_area' onSubmit={sendMessage}>
                                <input type='text' name='name' placeholder='Name' required />
                                <input type='email' name='email' placeholder='Email' required />
                                <textarea name='message' placeholder='Post A Comment' required />
                                <input id='submit' type='submit' value='Send Message' />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
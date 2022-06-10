import React, { useRef} from 'react';
import { useTypewriter } from 'react-simple-typewriter';
import { GiPencil } from 'react-icons/gi';
import {toast } from 'react-toastify';
import my_png from '../../section_images/fiverr-pic-removebg.png';
import emailjs from '@emailjs/browser';
import './Contact.css'
const Contact = () => {
    const form = useRef();
    const { text } = useTypewriter({
        words: ['Touch'],
        loop: {},
    })

    const sendMessage = (event) => {
        event.preventDefault();
        
        emailjs.sendForm('service_qeohbup', 'template_lj6qwdb', form.current, 'D5D1ko7NfOs4lP_9d')
        .then((result) => {
            console.log(result.text);
            if(result){
                toast.success("Thanks for messaging");
            }
        },
        event.target.reset(),
         (error) => {
            console.log(error.text);
        });
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
                            <form ref={form} className='form_area' onSubmit={sendMessage}>
                                <input type='text' name='user_name' placeholder='Name' required />
                                <input type='text' name='user_subject' placeholder='Subject' required />
                                <input type='email' name='user_email' placeholder='Email' required />
                                <textarea name='user_message' placeholder='Post A Message' required />
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
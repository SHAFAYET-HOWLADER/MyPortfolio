import React from 'react';
import { useTypewriter } from 'react-simple-typewriter';
import { GiPencil } from 'react-icons/gi';
import mySelf from '../../section_images/fiverr-pic-removebg.png';
import { FaFacebookSquare, FaGithubSquare } from 'react-icons/fa';
import { ImLinkedin } from 'react-icons/im';
import './Banner.css';
const Banner = () => {
    const { text } = useTypewriter({
        words: ['Safayet Howlader . Javascript Developer'],
        loop: {},
    })
    return (
        <section id="banner">
            <div className='overly'>
                <div className='container'>
                    <div className='banner_content'>
                        <div className='banner_left'>
                            <h3>Hello,</h3>
                            <h3>My Name Is </h3>
                            <h2>{text}<GiPencil style={{
                                marginTop: '-15px'
                            }} /> </h2>
                            <div className='banner_btn'>
                                <button>Read More</button>
                                <div className='btn_overly'>

                                </div>
                            </div>
                        </div>
                        <div className='safayet'>
                            <img src={mySelf} alt='own_png' />
                            <div className='mySelf_icon'>
                                <a target='_blank' href='https://www.facebook.com/shafayethowlader.shazuhowlader.5'><FaFacebookSquare /></a>
                                <a target="_blank" href='https://www.linkedin.com/in/safayet-howlader-0597b720b/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3Bnfk4Nzi5TFSr1L2h09RHhQ%3D%3D'><ImLinkedin /></a>
                                <a target="_blank" href='https://github.com/SHAFAYET-HOWLADER'><FaGithubSquare /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default Banner;
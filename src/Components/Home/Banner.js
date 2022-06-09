
import { useTypewriter } from 'react-simple-typewriter';
import { GiPencil } from 'react-icons/gi';
import mySelf from '../../section_images/fiverr-pic-removebg.png';
import { FaFacebookSquare, FaGithubSquare } from 'react-icons/fa';
import { ImLinkedin } from 'react-icons/im';
import { AiOutlineDownload } from 'react-icons/ai';
import './Banner.css';
const Banner = () => {
    const { text } = useTypewriter({
        words: [' My Name Is Safayet Howlader.'],
        loop: {},
    })
    return (
        <section id="banner">
            <div className='overly'>
                <div className='container'>
                    <div className='banner_content'>
                        <div className='banner_left'>
                            <h3>Hello,</h3>

                            <h2>{text}<GiPencil style={{
                                marginTop: '-15px'
                            }} /> </h2>
                            <div>
                                <h3>
                                    Professional Web Designer
                                    <br />
                                    Aspiring Mern Stack Developer
                                </h3>
                                <p>
                                    I work Both On front end and backend development.
                                    I provide 100% client satisfaction.
                                    Quality and satisfy Everyone can trust.
                                </p>
                                <div className='btn_download'>
                                    <a target="_blank" href="https://drive.google.com/file/d/1gBiqrEGuKn0_ypJBpj6K-8rUYnmIq0Pl/view?usp=sharing" download>
                                      <AiOutlineDownload style={{
                                          fontSize: '18px',
                                          fontWeight: 'bold'
                                      }}/>  Download Resume
                                    </a>
                                    <div className='btn_overly'></div>
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
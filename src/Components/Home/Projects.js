import { useTypewriter } from 'react-simple-typewriter';
import { GiPencil } from 'react-icons/gi';
import {useNavigate} from 'react-router-dom';
import fitness_one from '../../fitnessClub/fitness_one (1).png';
import book_one from '../../bookLover/lover_one (4).png';
import agri_one from '../../agriculture/culture_one (2).png';
import doctor_one from '../../doctor/doctor (4).png';
import aman_one from '../../anam/anam_one (2).png';
import penguine_one from '../../penguine/peng_one (3).png';
import pax_one from '../../pax_template/pax_one (4).png';
import watch_one from '../../watchMart/mart_one (4).png';
import './Projects.css'
const Projects = () => {
  const navigate = useNavigate()
  const { text } = useTypewriter({
    words: ['My Projects'],
    loop: {},
  })
  const navigateToFitness = ()=>{
     navigate('/fitness')
  }
  const navigateToBook = ()=>{
     navigate('/bookLover')
  }
  const navigateToCulture = ()=>{
     navigate('/culture')
  }
  const navigateToDoctor = ()=>{
     navigate('/doctor')
  }
  const navigateToAman = ()=>{
     navigate('/aman')
  }
  const navigateToPeng = ()=>{
     navigate('/penguine')
  }
  const navigateToPax = ()=>{
     navigate('/pax')
  }
  const navigateToWatch = ()=>{
     navigate('/watch')
  }
  return (
    <section id='projects'>
      <div className='overly'>
        <div className='container'>
          <div className='skill_content'>
            <h3>Welcome
              <br />
              <small>To</small></h3>
            <h2>{text}<GiPencil style={{
              marginTop: '-15px'
            }} /> </h2>
          </div>
          <div className='projects_area'>
            <div className='projects_img'>
              <img src={fitness_one} alt='img' />
              <div className='img_overly'>
                <h2>Fitness Club</h2>
                <br />             
                  <button onClick={navigateToFitness}>Details</button>
              </div>
            </div>
            <div className='projects_img'>
              <img src={book_one} alt='img' />
              <div className='img_overly'>
                <h2>Book Lover</h2>
                <br />
                <button  onClick={navigateToBook}>Details</button>
              </div>
            </div>
            <div className='projects_img'>
              <img src={agri_one} alt='img' />
              <div className='img_overly'>
                <h2>Agricultural</h2>
                <br />
                <button  onClick={navigateToCulture}>Details</button>
              </div>
            </div>
            <div className='projects_img'>
              <img src={doctor_one} alt='img' />
              <div className='img_overly'>
                <h2>Doctor Template</h2>
                <br />
                <button onClick={navigateToDoctor}>Details</button>
              </div>
            </div>
            <div className='projects_img'>
              <img src={aman_one} alt='img' />
              <div className='img_overly'>
                <h2>Aman</h2>
                <br />
                <button onClick={navigateToAman}>Details</button>
              </div>
            </div>
            <div className='projects_img'>
              <img src={penguine_one} alt='img' />
              <div className='img_overly'>
                <h2>Penguine</h2>
                <br />
                <button onClick={navigateToPeng}>Details</button>
              </div>
            </div>
            <div className='projects_img'>
              <img src={pax_one} alt='img' />
              <div className='img_overly'>
                <h2>Pax Template</h2>
                <br />
                <button onClick={navigateToPax}>Details</button>
              </div>
            </div>
            <div className='projects_img'>
              <img src={watch_one} alt='img' />
              <div className='img_overly'>
                <h2>Watch Mart</h2>
                <br />
                <button onClick={navigateToWatch}>Details</button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
};

export default Projects;
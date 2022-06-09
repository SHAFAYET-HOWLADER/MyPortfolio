import React from 'react';
import { useTypewriter } from 'react-simple-typewriter';
import { GiPencil } from 'react-icons/gi';
import { FaGithubSquare } from 'react-icons/fa';
import project_one from '../../section_images/project.png';
import project_two from '../../section_images/project (2).png';
import project_three from '../../section_images/project (1).png';
import project_four from '../../section_images/doctor.png';
import project_five from '../../section_images/penguine.png';
import project_six from '../../section_images/aman (2).png';
import './Projects.css'
const Projects = () => {
  const { text } = useTypewriter({
    words: ['My Projects'],
    loop: {},
  })
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
          <div className='myProjects'>
            <div className='project_img'>
              <img src={project_one} alt='img' />
              <div className='project_overly'>
                <div className='preview_text'>
                  <h3>Fitness Club
                  <small> (React)</small>
                  </h3>
                  
                  <a target='_blank' href='https://github.com/SHAFAYET-HOWLADER/independent_service_provider' >
                    <span>
                      <FaGithubSquare style={{
                        color: '#d1d1d1',
                        fontSize: "20px",
                        marginTop: "-5px"
                      }} />&nbsp;github</span>
                  </a>
                  &nbsp;
                  <a href='https://handle-firebase-project.web.app/' target='_blank'>Live Site</a>
                  &nbsp;
                  <a href='' target='_blank'>Info</a>
                </div>
              </div>
            </div>            
            <div className='project_img'>
              <img src={project_three} alt='img' />

              <div className='project_overly'>
                <div className='preview_text'>
                  <h3>Warehouse
                    <br/>
                  <small> (React+node.Js)</small>
                  </h3>
                  <div>
                    <a target='_blank' href='https://github.com/SHAFAYET-HOWLADER/warehouse_management_client_side' >
                      <span>
                        <FaGithubSquare style={{
                          color: '#d1d1d1',
                          fontSize: "20px",
                          marginTop: "-5px"
                        }} />&nbsp;Client Code</span>
                    </a>
                    <br />
                    <br />
                    <a target='_blank' href='https://github.com/SHAFAYET-HOWLADER/warehouse_management_server_side' >
                      <span>
                        <FaGithubSquare style={{
                          color: '#d1d1d1',
                          fontSize: "20px",
                          marginTop: "-5px"
                        }} />&nbsp;Server Code</span>
                    </a>

                  </div>
                  <br />
                  &nbsp;
                  <a href='https://warehouseactivity-da4ea.web.app/' target='_blank'>Live Site</a>
                  &nbsp;
                  <a href='' target='_blank'>Info</a>
                </div>
              </div>
            </div>
            <div className='project_img'>
              <img src={project_two} alt='img' />
              <div className='project_overly'>
              <div className='preview_text'>
                  <h3>Agricultural
                  <br/>
                  <small> (React+node.Js)</small>
                  </h3>
                  <div>
                    <a target='_blank' href='https://github.com/SHAFAYET-HOWLADER/Agricultural_Manufacturer' >
                      <span>
                        <FaGithubSquare style={{
                          color: '#d1d1d1',
                          fontSize: "20px",
                          marginTop: "-5px"
                        }} />&nbsp;Client Code</span>
                    </a>
                    <br />
                    <br />
                    <a target='_blank' href='https://github.com/SHAFAYET-HOWLADER/agricultural_manufacturer_server_side' >
                      <span>
                        <FaGithubSquare style={{
                          color: '#d1d1d1',
                          fontSize: "20px",
                          marginTop: "-5px"
                        }} />&nbsp;Server Code</span>
                    </a>

                  </div>
                  <br />
                  &nbsp;
                  <a href='https://final-project-13085.web.app/' target='_blank'>Live Site</a>
                  &nbsp;
                  <a href='' target='_blank'>Info</a>
                </div>
              </div>
            </div>
            <div className='project_img'>
              <img src={project_four} alt='img' />
              <div className='project_overly'>
                <div className='preview_text'>
                  <h3>Html
                  <small> (Jquery)</small>
                  </h3>
                  
                  <a target='_blank' href='https://github.com/SHAFAYET-HOWLADER/independent_service_provider' >
                    <span>
                      <FaGithubSquare style={{
                        color: '#d1d1d1',
                        fontSize: "20px",
                        marginTop: "-5px"
                      }} />&nbsp;github</span>
                  </a>
                  &nbsp;
                  <a href='https://handle-firebase-project.web.app/' target='_blank'>Live Site</a>
                  &nbsp;
                  <a href='' target='_blank'>Info</a>
                </div>
              </div>
            </div>
            <div className='project_img'>
              <img src={project_five} alt='img' />
              <div className='project_overly'>
                <div className='preview_text'>
                  <h3>penguine
                  <small> (Simple Html)</small>
                  </h3>
                  
                  <a target='_blank' href='https://github.com/SHAFAYET-HOWLADER/penguine-project' >
                    <span>
                      <FaGithubSquare style={{
                        color: '#d1d1d1',
                        fontSize: "20px",
                        marginTop: "-5px"
                      }} />&nbsp;github</span>
                  </a>
                  &nbsp;
                  <a href='https://shafayet-howlader.github.io/penguine-project/' target='_blank'>Live Site</a>
                  &nbsp;
                  <a href='' target='_blank'>Info</a>
                </div>
              </div>
            </div>
            <div className='project_img'>
              <img src={project_six} alt='img' />
              <div className='project_overly'>
                <div className='preview_text'>
                  <h3>aman
                  <small> (Simple Html)</small>
                  </h3>
                  
                  <a target='_blank' href='https://github.com/SHAFAYET-HOWLADER/html_template' >
                    <span>
                      <FaGithubSquare style={{
                        color: '#d1d1d1',
                        fontSize: "20px",
                        marginTop: "-5px"
                      }} />&nbsp;github</span>
                  </a>
                  &nbsp;
                  <a href='https://shafayet-howlader.github.io/html_template/' target='_blank'>Live Site</a>
                  &nbsp;
                  <a href='' target='_blank'>Info</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
};

export default Projects;
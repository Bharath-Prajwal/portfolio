import React from 'react'
import './project.css'
function Projects() {
  return (
    <section id='projects'>
    <div className='projectmain'>
        <p className='procontent'>Projects</p>
        <div className='projmain'>
            <div className='project'>
                <img className='projimage' src={require('../images/blood-removebg-preview.png')} alt='bld'/>
                <div className='horizontal'></div>
                <div  className='projcontent'>
                <p className='projecthead'>MERN Stack Application</p>
                <p>Designed and implemented a full-stack blood donation website using MERN stack (MongoDB, Express.js, React.js,Node.js)<br></br>
                  
                  For Source code <a className='link' href='https://github.com/Bharath-Prajwal/bloodproject'>Click here</a>
                  </p>
            </div>
            
            </div>
            <div className='project'>
                <img className='projimage' src={require('../images/object.jpg')} alt='bld'/>
                <div className='horizontal'></div>
                <div  className='projcontent'>
                <p className='projecthead'>Object Detection and Tracking</p>
                <p>Developed an automated object detection and tracking system capable of identifying and tracking multiple objects in real-time using YOLOv5 and DeepSORT.<br></br>
                    </p>
            </div>
            
            
            </div>
            <div className='project'>
                <img className='projimage' src={require('../images/mobile-removebg-preview.png')} alt='bld'/>
                <div className='horizontal'></div>
                <div  className='projcontent'>
                <p className='projecthead'>Basic Ecommerce Mobile application</p>
                <p>Built a fully functional e-commerce mobile application with React Native, targeting Android and iOS..<br></br>
                   
                    For Source code <a className='link' href='https://github.com/Bharath-Prajwal/EcommerceMobileApplication'>Click here</a></p>
            </div>
            
            
            </div>
        </div>
        
    </div>
    </section>
  )
}

export default Projects
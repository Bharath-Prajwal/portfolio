import React from 'react'
import './contact.css'
function Contact() {
  return (
    <section id='contact'>
    <div className='contmain'>
        <p className='concontent'>Contact me</p>
        <div className='contentdetails'>
            <div className='particulardetails'>
                <img className='logo' src={require('../images/mlogo-removebg-preview.png')} alt='mobile'/>
                <div className='space'></div>
                <p>+91 7330609926</p>
            </div>
            <div className='particulardetails'>
                <img className='logo' src={require('../images/emlogo-removebg-preview.png')} alt='mobile'/>
                <div className='space'></div>
                <p>bharathboreddy01@gmail.com</p>
            </div>
            <div className='particulardetails'>
                <img className='logo' src={require('../images/linlogo-removebg-preview.png')} alt='mobile'/>
                <div className='space'></div>
                <a href='https://www.linkedin.com/in/bharath-kumar-reddy-56813221a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' className='linkdin'>Bharath</a>
            </div>
        </div>
    </div>
    </section>
  )
}

export default Contact
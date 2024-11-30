import React from 'react'
import './skills.css'
function Skills() {
  return (
    <div className='skillsmain'>
        <p className='skillcontent'>Skills</p>
        <div className='skillssub'>
            <div className='skills'>
                <img className='skillimage' src={require('../images/c-removebg-preview.png')} alt='C'/>
                <p>C </p>
            </div>
            <div className='skills'>
                <img className='skillimage' src={require('../images/java-removebg-preview.png')} alt='C'/>
                <p>Java</p>
            </div>
            <div className='skills'>
                <img className='skillimage' src={require('../images/native-removebg-preview.png')} alt='C'/>
                <p>Native</p>
            </div>
            <div className='skills'>
                <img className='skillimage' src={require('../images/react_js-removebg-preview.png')} alt='C'/>
                <p>React.js</p>
            </div>
        </div>
        <div className='skillssub'>
            <div className='skills'>
                <img className='skillimage' src={require('../images/mongo-removebg-preview.png')} alt='C'/>
                <p>Mongo</p>
            </div>
            <div className='skills'>
                <img className='skillimage' src={require('../images/express-removebg-preview.png')} alt='C'/>
                <p>Express</p>
            </div>
            <div className='skills'>
                <img className='skillimage' src={require('../images/node-removebg-preview.png')} alt='C'/>
                <p>Node</p>
            </div>
            <div className='skills'>
                <img className='skillimage' src={require('../images/sql-removebg-preview.png')} alt='C'/>
                <p>SQL</p>
            </div>
        </div>
    </div>
  )
}

export default Skills
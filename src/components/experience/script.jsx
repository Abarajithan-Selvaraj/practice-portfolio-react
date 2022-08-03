import React from 'react'
import './style.css'
import {BsPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>What skills I have</h5>
      <h2>My Experience</h2>
      <div className="container xp__container">
        <div className="xp_frontend">
          <h3>Frontend Development</h3>
          <div className="xp__content">
            <article className='xp__details'>
              <BsPatchCheckFill className='xp__details-icon' />
              <div>
                <h4>HTML</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='xp__details'>
              <BsPatchCheckFill className='xp__details-icon' />
              <div>
                <h4>CSS</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='xp__details'>
              <BsPatchCheckFill className='xp__details-icon' />
              <div>
                <h4>JavaScript</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='xp__details'>
              <BsPatchCheckFill className='xp__details-icon' />
              <div>
                <h4>Bootstrap</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='xp__details'>
              <BsPatchCheckFill className='xp__details-icon' />
              <div>
                <h4>Tailwind</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='xp__details'>
              <BsPatchCheckFill className='xp__details-icon' />
              <div>
                <h4>React</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
          </div>
        </div>
        {/* END OF FRONTEND*/}

        <div className="xp_backend">
          <h3>Backend Development</h3>
          <div className="xp__content">
            <article className='xp__details'>
              <BsPatchCheckFill className='xp__details-icon' />
              <div>
                <h4>NodeJS</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='xp__details'>
              <BsPatchCheckFill className='xp__details-icon' />
              <div>
                <h4>MongoDB</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='xp__details'>
              <BsPatchCheckFill className='xp__details-icon' />
              <div>
                <h4>PHP</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='xp__details'>
              <BsPatchCheckFill className='xp__details-icon' />
              <div>
                <h4>MySQL</h4>
                <small className='text-light'>Beginner</small>
              </div>
            </article>
            <article className='xp__details'>
              <BsPatchCheckFill className='xp__details-icon' />
              <div>
                <h4>Python</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
          </div>
        </div>
        {/* END OF BACKEND*/}
      </div>
    </section>
  )
}

export default Experience
import React, {useRef} from 'react';
import './style.css';
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import { BsWhatsapp } from 'react-icons/bs'
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_vr7ioln', 'template_w3e4518', form.current, 'lpQxXuPM7r4Pc9ZBu')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    
    e.target.reset();
  };

  return (
    <section id='contact'>
      <h5>Get in touch</h5>
      <h2>Contact me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>abdg027@gmail.com</h5>
            <a href="mailto:abdg027@gmail.com" target="_blank" rel="noreferrer">Send a message</a>
          </article>
          <article className="contact__option">
            <RiMessengerLine className='contact__option-icon'/>
            <h4>Facebook</h4>
            <h5>AbDG027</h5>
            <a href="https://facebook.com" target="_blank" rel="noreferrer">Send a message</a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className='contact__option-icon'/>
            <h4>Whatsapp</h4>
            <h5>+1 543 353 345344</h5>
            <a href="https://api.whatsapp.com/send?phone+1543353345344" target="_blank" rel="noreferrer">Send a message</a>
          </article>
        </div>
        {/* END OF CONTACT ACTION */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Your fullname" required/>
          <input type="email" name="email" placeholder="Your email" required />
          <textarea name="message" rows="7" placeholder="Your message" required></textarea>
          <button className="btn btn-primary" type="submit">Send message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact
import React, { useContext, useRef, useState } from 'react';
import './Contact.css';
import emailjs from '@emailjs/browser';
import { themeContext } from '../../Context';
import swal from 'sweetalert';
import { useMediaQuery } from '@mui/material';

const Contact = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const form = useRef();

  const matches = useMediaQuery('(min-width:600px)');

  const match = useMediaQuery('only screen and (max-width: 472px)');

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_maowzgc',
        'template_1uvdp15',
        form.current,
        'tFJYsAZvNHZ9bLurX'
      )
      .then(
        (result) => {
          console.log(result.text);
          swal({
            title: 'Message Sent!',
            text: 'Thanks for Contacting, I will get back to you soon!',
            icon: 'success',
            button: 'Ok',
          });
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="contact-form" id="contact">
      {/* left side copy and paste from work section */}
      <div className="w-left">
        <div className="awesome">
          {/* darkMode */}
          <span style={{ color: darkMode ? 'white' : '' }}>
            Excited hear something from you!
          </span>
          <span>Contact me</span>
        </div>
      </div>
      {/* right side form */}
      <div className="c-right">
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="user_name"
            className="user"
            placeholder="Name"
            required
          />
          <input
            type="email"
            name="user_email"
            className="user"
            placeholder="Email"
            required
          />
          <textarea
            name="message"
            className="user"
            placeholder="Message"
            required
          />
          <input type="submit" value="Send" className="button" />
        </form>
      </div>
    </div>
  );
};

export default Contact;

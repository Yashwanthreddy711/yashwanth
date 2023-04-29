import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ig1oa4c', 'template_dd7ddmj', form.current, 'hQxM7mNXxHCkuweL0')
      .then((result) => {
          console.log(result.text);
          e.target.reset();
      }, (error) => {
          console.log(error.text);
      });
  };


  return (
    <div className="flex flex-col items-center w-full min-h-screen bg-custom">
    <p className="p-5 mt-32 font-bold tracking-wider text-center text-white text-1xl md:text-left md:text-4xl md:pl-2">
      CONTACT ME
    </p>
    <div className='flex flex-col w-auto h-auto m-auto bg-white rounded-lg '>
      <form ref={form} onSubmit={sendEmail} className='p-10' action="#">
        <div >
          <label htmlFor="name" className='block p-2 font-sans text-base md:text-xl '>Name</label>
          <input type="text" name="user_name" autofocus className='h-12 p-5 text-base bg-gray-200 rounded-md outline-none w-60 name md:text-xl md:w-96' placeholder='Enter your name'/>
        </div>
        <div >
          <label htmlFor="mail" className='block p-2 font-sans text-base md:text-xl'>Mail</label>
          <input type="text" name="user_email" autoCorrect='off' required className='h-12 p-5 text-base bg-gray-200 border-b-4 rounded-md outline-none md:text-xl w-60 md:w-96 mail' placeholder='Enter your mail'/>
        </div>
        <div >
          <label htmlFor="message  " className='block p-2 font-sans text-base md:text-xl'>Message</label>
          <textarea type="textField" name="message" rows="7" col="60"  className='p-5 text-base bg-gray-200 border-b-4 rounded-md outline-none md:text-xl w-60 md:w-96 message' placeholder='Type your message' />
        </div>
        <button type='submit' value="Send" className='block px-5 py-2 mx-auto mt-4 text-base text-white rounded-lg md:text-xl bg-custom'> Submit</button>
      </form>
    </div>
  </div>
  )
}

export default Contact;
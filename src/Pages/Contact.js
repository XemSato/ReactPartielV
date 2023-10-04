import React, { useState } from 'react';
import Baniere from "../Components/Baniere";
import ImageBaniere from "../Img/test.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import emailjs from 'emailjs-com';

const Contact = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const sendEmail = () => {
    emailjs.send("service_94t4snq","template_4sit6he", {
      to_email: 'lorenzoj68@hotmail.fr', // Remplacez par l'adresse de destination
      from_email: email,
      message: message,
    }, 'aOfbrtkUm99zjf2aB')
    .then((response) => {
      console.log('E-mail envoyé avec succès !', response);
      alert('E-mail envoyé avec succès !');
    })
    .catch((error) => {
      console.error('Erreur lors de l\'envoi de l\'e-mail :', error);
      alert('Erreur lors de l\'envoi de l\'e-mail. Veuillez réessayer plus tard.');
    });
  };

  return (
    <div>
      <div className="Banierre">
        <Baniere title="Contactez-nous" description=" " url={ImageBaniere} />
      </div>

      <div className="container">
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
          <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">Your message</label>
          <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" onChange={(e) => setMessage(e.target.value)}></textarea>
        </div>
        <button onClick={sendEmail}>Submit</button>
      </div>
    </div>
  );
};

export default Contact;
import React from 'react';

function Contact() {
    return (
      <div className="contact-main">
        <div className="contact-info">
          <div>Phone: <a className="phone" href="tel:8166251651">(816) 625-1651</a></div>
          <div>Email: <a className="phone" href="mailto:antiqueautoworks@gmail.com">antiqueautoworks@gmail.com</a></div>
          <div>Address: 203 N 1st St. Bates City, MO 64011</div>
        </div>
        <div> 
        <iframe title="location" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3100.337328717231!2d-94.07564888464641!3d39.007617879553806!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87c11353c9bf8633%3A0xa2d019325d777fe3!2s203%20N%201st%20St%2C%20Bates%20City%2C%20MO%2064011!5e0!3m2!1sen!2sus!4v1576093344921!5m2!1sen!2sus" width="100%" height="450" frameBorder="0" allowFullScreen=""></iframe>
        </div>
      </div>
    );
  }

  export default Contact;
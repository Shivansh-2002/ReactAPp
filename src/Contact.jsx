import React from 'react';

const Contact = () => {
  return (
    <div id="contact">
      <div className="container">
        <h1 className="titl">Contact Me</h1>
        <p className="kk">Feel free to contact me through the form. Looking forward to meeting new people.</p>
        <form action="https://formspree.io/f/mdovagza" method="post">
          <input type="text" name="Name" placeholder="Your Name" required />
          <input type="text" name="email" placeholder="Your Email" required />
          <textarea name="Message" rows="8" placeholder="Your Message"></textarea>
          <button type="submit" className="btn btn2">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;

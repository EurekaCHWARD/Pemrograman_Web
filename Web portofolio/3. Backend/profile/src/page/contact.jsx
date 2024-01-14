import React, { useState } from 'react';
import 'aos/dist/aos.css';
import '../css/style.css';
import 'bootstrap/dist/css/bootstrap.css';

const Contact = () => {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [notification, setNotification] = useState({ type: "", message: "" });

  const baseUrl = "http://localhost:3000";

  const sendEmail = async () => {
    let dataSend = {
      email: email,
      subject: subject,
      message: message,
    };

    try {
      const res = await fetch(`${baseUrl}/email/sendEmail`, {
        method: "POST",
        body: JSON.stringify(dataSend),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });

      console.log(res);

      if (res.status > 199 && res.status < 300) {
        setNotification({ type: "success", message: "Email sent successfully!" });
      }
    } catch (error) {
      setNotification({ type: "error", message: "Error sending email. Please try again." });
      console.error("Error sending email:", error);
    }
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    await sendEmail();
  };

  return (
    <section className="contact section-padding pt-0" id="contact">
      <div className="container">
        <div class="row">
          <div class="col-lg-6 col-md-6 col-12">
            <form onSubmit={handleFormSubmit} class="contactForm" role="form">
            <div id="sendmessage">Your message has been sent. Thank you!</div>
            <div id="errormessage"></div>
              <div class="form-group d-flex flex-column-reverse">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  class="form-control"
                  name="cf-email"
                  id="cf-email"
                  placeholder="Receiver Email"
                  data-rule="email"
                  data-msg="Please enter a valid email"
                />
                <label htmlFor="cf-name" class="webform-label">
                  Receiver Email
                </label>
                <div className="validation"></div>
              </div>

              <div class="form-group d-flex flex-column-reverse">
                <input
                  type="text"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  class="form-control"
                  name="cf-name"
                  id="cf-name"
                  placeholder="Subject"
                  data-rule="minlen:4"
                  data-msg="Please enter at least 8 chars of the subject"
                />
                <label htmlFor="cf-name" class="webform-label">
                  Subject
                </label>
                <div className="validation"></div>
              </div>

              <div class="form-group d-flex flex-column-reverse">
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  class="form-control"
                  name="cf-message"
                  id="cf-message"
                  rows="5"
                  data-rule="required"
                  data-msg="Please write something for us"
                  placeholder="Your Message"
                />
                <label htmlFor="cf-message" class="webform-label">
                  Your Message
                </label>
                <div className="validation"></div>
              </div>

              <button type="submit" class="form-control" id="submit-button" name="submit">
                Send
              </button>
            </form>
            {notification.message && (
              <div className={`notification ${notification.type}`}>
                {notification.message}
              </div>
            )}
          </div>

          <div class="mx-auto col-lg-4 col-md-6 col-12">
            <h3 class="my-4 pt-4 pt-lg-0">Say hello</h3>
            <p>
                <a href="https://api.whatsapp.com/send?phone=6288996866339">
                    (+62) 889-8686-6339
                </a>
            </p>
            <p>
                <a href="mailto:eurekadiaandisy8@webmail.umm.ac.id">
                    eurekadiaandisy8@webmail.umm.ac.id
                <i class="fas fa-arrow-right custom-icon"></i>
                </a>
            </p>
            <ul class="social-links mt-2">
            <li><a href="https://www.facebook.com/UMMcampus/" rel="noopener" class="fab fa-facebook"></a></li>
                <li><a href="https://twitter.com/ummcampus" rel="noopener" class="fab fa-twitter"></a></li>
                <li><a href="https://www.instagram.com/yurereka/" rel="noopener" class="fab fa-instagram"></a></li>
                <li><a href="#" rel="noopener" class="fab fa-linkedin"></a></li>
                <li><a href="https://www.youtube.com/@UMMtube" rel="noopener" class="fab fa-youtube"></a></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

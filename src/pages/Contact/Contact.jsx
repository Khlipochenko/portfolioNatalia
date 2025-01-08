import { FaLinkedin } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { GrLocation } from "react-icons/gr";
import { IoGitNetworkSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import "./Contact.scss";
import { useState } from "react";

export const Contact = () => {
  const [isSend, setIsSend] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  return (
    <div className="contact-page">
      <h2 className="contact-page__überschrift">Contact</h2>
      <div className="contact-page__content">
        <div className=" contact-page__section contact-page__location">
          <div className="contact-page__icon">
            <GrLocation />
          </div>
          <div>
            <h4>Location</h4>
            <span className="contact-page__span"> Düsseldorf, Germany</span>
          </div>
        </div>
        <div className=" contact-page__section contact-page__profiles">
          <div className="contact-page__icon">
            <IoGitNetworkSharp />
          </div>
          <div>
            {" "}
            <h4>Social Profiles</h4>
            <ul className="contact-page__profiles-list">
              <li>
                {" "}
                <a className="contact-page__profile-item" href="#">
                  <FaGithub />
                </a>
              </li>
              <li>
                {" "}
                <a className="contact-page__profile-item" href="#">
                  <FaLinkedin />
                </a>
              </li>
              <li>
                {" "}
                <a className="contact-page__profile-item" href="#">
                  <FaWhatsapp />
                </a>
              </li>
              <li>
                {" "}
                <a className="contact-page__profile-item" href="#">
                  <FaInstagram />
                </a>
              </li>{" "}
            </ul>
          </div>
        </div>
        <div className=" contact-page__section contact-page__email">
          <div className="contact-page__icon">
            <MdEmail />
          </div>
          <div>
            {" "}
            <h4>Email</h4>
            <span className="contact-page__span">khlipochenko@gmail.com</span>
          </div>
        </div>{" "}
      </div>

      {isSend ? (
        <>
        <p>Thank you, {formData.name? formData.name: 'Guest'}!</p>
        <p> Your message has been successfully sent. I will get back to you as soon as possible!</p></>
      ) : (
        <form className="contact-page__form">
          <div className="contact-page__name-email">
            <input
              type="text"
              placeholder="Your Name"
              onChange={(e) => handleChange(e)}
              name="name"
              value={formData.name}
            />

            <input
              type='email'
              placeholder="Your Email"
              required
              onChange={(e) => handleChange(e)}
              name="email"
              value={formData.email}
            />
          </div>
          <input
            className="subject "
            type="text"
            name="subject"
            placeholder="Subject"
            onChange={(e) => handleChange(e)}
            value={formData.subject}
          />
          <textarea
          name='message'
          required
            columns="70"
            rows="5"
            placeholder="Your message..."
            onChange={(e) => handleChange(e)}
            value={formData.message}
          ></textarea>
          <button
            className="contact-page__form-button"
            onClick={() =>  formData.email&& formData.message && setIsSend(!isSend)}
          >
            send
          </button>
        </form>
      )}
    </div>
  );
};

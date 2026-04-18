import { FaLinkedin } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { GrLocation } from "react-icons/gr";
import { IoGitNetworkSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import "./Contact.scss";
import { useState } from "react";
import { useTranslation } from "react-i18next";
export const Contact = () => {
  const [isSend, setIsSend] = useState(false);
  const {t}=useTranslation()
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
    <div className="contact-page" id="contact">
     <h2 className="contact-page__überschrift">{t("contact.title")}</h2>
     <div className="contact-page__alles">
      <div className="contact-page__content">
        <div className=" contact-page__section contact-page__location">
          <div className="contact-page__icon">
            <GrLocation />
          </div>
          <div>
            <h4>{t("contact.place")}</h4>
            <span className="contact-page__span"> {t("contact.place-name")}</span>
          </div>
        </div>
        <div className=" contact-page__section contact-page__profiles">
          <div className="contact-page__icon">
            <IoGitNetworkSharp />
          </div>
          <div>
            {" "}
            <h4>{t("contact.profiles")}</h4>
            <ul className="contact-page__profiles-list">
              <li>
                {" "}
                <a className="contact-page__profile-item" href="https://github.com/Khlipochenko" target="_blank">
                  <FaGithub />
                </a>
              </li>
               <li>
                {" "}
                <a className="contact-page__profile-item" href="https://www.linkedin.com/in/natalia-panova-5aa8a0346/">
                  <FaLinkedin />
                </a>
              </li> 
              <li>
                {" "}
                <a className="contact-page__profile-item" href="https://wa.me/+4915126702692">
                  <FaWhatsapp />
                </a>
              </li>
              <li>
                {" "}
                <a className="contact-page__profile-item" href="https://www.instagram.com/khlipochenko_natalia/">
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
        <div className="message">
        <p>{t("contact.answer-1")} {formData.name? formData.name: 'Guest'}!</p>
        <p> {t("contact.answer-2")}</p></div>
      ) : (
        <form className="contact-page__form">
          <div className="contact-page__name-email">
            <input
              type="text"
              placeholder={t("contact.name")}
              onChange={(e) => handleChange(e)}
              name="name"
              value={formData.name}
            />

            <input
              type='email'
              placeholder={t("contact.email")}
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
            placeholder={t("contact.subject")}
            onChange={(e) => handleChange(e)}
            value={formData.subject}
          />
          <textarea
          name='message'
          required
            columns="70"
            rows="5"
          placeholder={t("contact.placeholder-textarea")}
            onChange={(e) => handleChange(e)}
            value={formData.message}
          ></textarea>
          <button
            className="contact-page__form-button"
            onClick={() =>  formData.email&& formData.message && setIsSend(!isSend)}
          >
          {t("contact.send")}
          </button>
        </form>
      )} </div>
    </div>
  );
};
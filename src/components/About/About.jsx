import  "./About.scss";
import { useTranslation } from "react-i18next";
export const About=()=>{
    const {t}=useTranslation()
    return(
        < div className='about' id="about">
            <h2>{t("about.title")}</h2>
            <p>{t("about.text")}</p>
        
        <h3>{t("about.education")}</h3>
        <div className="education-card">
        <span>12/2023 - 07/2025</span>
        <p> {t("about.education-card-1.place")}</p></div>

        <div className="education-card">
        <span>09/2009 - 06/2011</span>
        <p>{t("about.education-card-2.place")}</p></div>
        <div className="education-card">
        <span>09/2005 - 06/2009</span>
        <p>{t("about.education-card-3.place")}</p></div>


        </div>
    )
}
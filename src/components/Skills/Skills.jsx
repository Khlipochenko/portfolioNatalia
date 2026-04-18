import { Carousel } from "../../components/Carousel/Carousel";
import dataSkills from "./DataSkills.json";
import  "./Skills.scss";
import { useTranslation } from "react-i18next";

export const Skills=()=>{
    const {t}=useTranslation()
    return(
    <div className="skills-page" id="skills">
    
        <h2> {t("skills.title")}</h2>
        <Carousel props={dataSkills}></Carousel>
        <p  dangerouslySetInnerHTML={{ __html: t("skills.description") }} ></p>
    </div>
    )
}
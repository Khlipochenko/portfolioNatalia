
import { ProjectsCard } from "../../components/ProjectsCard/ProjectsCard"
import "./Projects.scss"
import { useTranslation } from "react-i18next"
export const Projects=()=>{
    const {t}=useTranslation()
    const projects = t("projects.items", { returnObjects: true });
    return(
        <div >
            <h2 id="projects">{t("projects.title")}</h2>
            <div className="projekt-seite">
            {
               projects.map((project)=>
                (<ProjectsCard key = {project.id} props={project}></ProjectsCard>))
            }
         
</div>
        </div>
    )
}
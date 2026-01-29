import dataProjects from "./DataProjects.json"
import { ProjectsCard } from "../../components/ProjectsCard/ProjectsCard"
import "./Projects.scss"
export const Projects=()=>{
    return(
        <div >
            <h2 id="projects">Projects</h2>
            <div className="projekt-seite">
            {
                dataProjects.map((project)=>
                (<ProjectsCard key = {project.id} props={project}></ProjectsCard>))
            }
         
</div>
        </div>
    )
}
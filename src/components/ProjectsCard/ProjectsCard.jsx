import "./ProjectsCard.scss";
import { FaLink } from "react-icons/fa";
import { useState } from "react";

export const ProjectsCard = ({ props }) => {


  return (
    <div className="card">
      <a
        href={props.url}
        target="_blank"
        className="project-link"
      
      >
        <div className="project">
       
          <img src={props.img} alt={props.name} />
          <div>
             <h3>{props.name}</h3>
          <p>{props.description}</p></div> 
         
        </div>
      </a>
    </div>
  );
};


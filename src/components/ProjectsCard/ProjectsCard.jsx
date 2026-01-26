import "./ProjectsCard.scss";
import { FaLink } from "react-icons/fa";
import { useState } from "react";

export const ProjectsCard = ({ props }) => {
  const [hoverEffect, sethoverEffect] = useState(false);

  return (
    <>
      <a
        href={props.url}
        target="_blank"
        className="project-link"
        onMouseEnter={() => sethoverEffect(true)}
        onMouseLeave={() => sethoverEffect(false)}
      >
        <div className="project">
          <h3>{props.name}</h3>
          <img src={props.img} alt={props.name} />
          <p>{props.description}</p>
          {hoverEffect && <div className="icon-link"><FaLink /></div> }
        </div>
      </a>
    </>
  );
};


import React from "react";
function Project({image,title,description,link}){return <div className="project"><img src={image} alt={title}/><div><b>{title}</b><p>{description}</p><a href={link} target="_blank" rel="noreferrer">GitHub Link</a></div></div>}
export default Project;

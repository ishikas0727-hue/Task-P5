import React from "react";
import Project from "./Project";
function Projects(){const projects=[
{image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBUhPa84pLqGIjbv2eC97vkShs2dm4tehqt0hvjLEGsg&s=10",title:"Project 1: SIT210",description:"This project has two distinct embedded systems projects: an Automated Smart Light System to automatically turn on a light, and a Temperature & Humidity Monitor that utilizes a DHT22 sensor to accurately measure and track real-time climate data.",link:"https://github.com/ishikas0727-hue/SIT210"},
{image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpS0fSuEh0iow5TG_Umgt3WFJ54JspEQHI0eCqPmkMng&s=10",title:"Project 2: HTML",description:"This is my beginner-friendly HTML code that builds a clean webpage. This is very helpful for learning from basics and is easy to grasp. Practice of this will be very helpful in future.",link:"https://github.com/ishikas0727-hue/firstproject"}];
return <div id="work">{projects.map(p=><Project key={p.title}{...p}/>)}</div>}
export default Projects;

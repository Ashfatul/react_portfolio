import { useState } from "react"
import "../assets/scss/projects.scss"
import { useEffect } from "react";
import SingleProject from "./SingleProject";

export default function Projects() {

    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetch('/public/data/projects.json')
        .then(res => res.json())
        .then(data => setProjects(data));
    }, []);
  return (
    <div className="Projects">
        {projects.map(p => (
            <SingleProject key={p.id} data={p}/>
        ))}
    </div>
  )
}

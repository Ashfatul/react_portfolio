import { useEffect, useState } from "react";
import "../assets/scss/technology.scss"
import SingleTechnology from "./SingleTechnology";

export default function TechnologySection() {
    const [tech, setTech] = useState([]);

    useEffect(() => {
        fetch('/public/data/technology.json')
            .then(response => response.json())
            .then(data => setTech(data));
    }, []);

    return (
        <>
            <div className="technologySection">
                {tech.map(tech => (
                    <SingleTechnology data={tech} key={tech.id} />
                ))}
            </div>
        </>
    );
}

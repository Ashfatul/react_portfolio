import SingleEducationExperience from "./SingleEducationExperience";
import "../assets/scss/educationExperience.scss";
import { useEffect, useState } from "react";

export default function EducationExperience() {
    const [edu, setEdu] = useState([]);
    const [exp, setExp] = useState([]);

    useEffect(() => {
        fetch('/public/data/education.json')
        .then(res => res.json())
        .then(data => setEdu(data));
    }, []);

    useEffect(() => {
        fetch('/public/data/experience.json')
            .then(res => res.json())
            .then(data => setExp(data));
    }, []);

    return (
        <div className="educationExperience">
            <div className="educationExperience_grid">
                <div className="educationExperience_left">
                    {exp.map(ex => (
                        <SingleEducationExperience key={ex.id} data={ex} />
                    ))}
                </div>
                <div className="educationExperience_right">
                    {edu.map(edu => (
                        <SingleEducationExperience key={edu.id} data={edu} />
                    ))}
                </div>
            </div>
        </div>
    );
}

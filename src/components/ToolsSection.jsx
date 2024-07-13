import { useEffect, useState } from "react";
import "../assets/scss/tools.scss"
import SingleTools from "./SingleTools";

export default function ToolsSection() {
    const [tools, setTools] = useState([]);

    useEffect(() => {
        fetch('/public/data/tools.json')
            .then(response => response.json())
            .then(data => setTools(data));
    }, []);

    return (
        <>
            <div className="toolsSection">
                {tools.map(tools => (
                    <SingleTools data={tools} key={tools.id} />
                ))}
            </div>
        </>
    );
}

import React, { useState, useEffect } from "react";
import "./styles.css";
import useContentful from "../../../backend/contentful/useContentful";


const ProjectGrid = () => {
    const { getProjects } = useContentful();
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        getProjects().then(setProjects);
    }, []);
    return (
        <div className="home-container">
            <h1>Projects</h1>
            <div className="home-grid">
                {projects.map((projects, index) => (
                    <div key={index} className="home-card">
                        <img src={projects.image} alt={projects.name} className="home-image" />
                        <h3>{projects.name}</h3>
                        <p>{projects.description}</p>
                        <p>{projects.date}</p>
                        <p>{projects.status}</p>
                        <button>View Project</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProjectGrid;

import React, { useState, useEffect } from "react";
import "../../styles.css";
import { client } from '../../../sanityio/sanityClient';

const ProjectGrid = () => {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const query = `*[_type == "projects"] | order(order asc, date desc) {
                    name,
                    description,
                    "image": image.asset->url,
                    date,
                    status,
                    projectUrl,
                    category,
                    location,
                    slug
                }`;

                const data = await client.fetch(query);
                console.log("Fetched Projects Data:", data);
                setProjects(data);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching projects data:", error);
                setLoading(false);
            }
        };

        fetchProjects();
    }, []);

    if (loading) {
        return (
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh',
                fontSize: '18px'
            }}>
                Loading...
            </div>
        );
    }

    return (
        <div className="home-container">
            <h1>Projects</h1>
            <div className="home-grid">
                {projects.map((project, index) => (
                    <div key={index} className="home-card">
                        <img src={project.image} alt={project.name} className="home-image" />
                        <h3>{project.name}</h3>
                        <p>{project.description}</p>
                        <p>{project.date}</p>
                        <p>{project.status}</p>
                        <button>View Project</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProjectGrid;

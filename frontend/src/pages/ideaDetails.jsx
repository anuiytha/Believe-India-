import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./styles.css"; // Import styles

const IdeaDetails = () => {
    const { id } = useParams();
    const [idea, setIdea] = useState(null);

    useEffect(() => {
        axios.get(`http://localhost:3001/ideas/${id}`)
            .then(response => {
                setIdea(response.data);
            })
            .catch(error => {
                console.error("Error fetching idea details:", error);
            });
    }, [id]);

    if (!idea) return <p>Loading...</p>;

    return (
        <div className="idea-details">
            <div className="idea-card expanded">
                <h2>{idea.idea_title}</h2>
                <p>{idea.idea_description}</p>
                <span className={`status ${idea.idea_status.toLowerCase()}`}>{idea.idea_status}</span>
                <p><strong>Category:</strong> {idea.idea_category}</p>
            </div>
        </div>
    );
};

export default IdeaDetails;

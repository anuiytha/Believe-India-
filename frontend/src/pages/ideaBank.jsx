import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "./styles.css"; // Import styles
import IdeaForm from "./ideaForm";

const IdeaBank = () => {
    const [ideas, setIdeas] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetchIdeas();
    }, []);

    const fetchIdeas = () => {
        axios.get("http://localhost:3001/ideas")
            .then(response => {
                console.log("Fetched Ideas:", response.data)
                setIdeas(response.data);
            })
            .catch(error => {
                console.error("Error fetching ideas:", error);
            });
    };

    const handleDelete = async (ideaId, event) => {
        event.preventDefault(); // Prevent navigation to idea detail page
        event.stopPropagation(); // Stop event bubbling

        if (window.confirm("Are you sure you want to delete this idea?")) {
            try {
                await axios.delete(`http://localhost:3001/ideas/${ideaId}`);
                // Remove the idea from the local state
                setIdeas(ideas.filter(idea => idea.idea_id !== ideaId));
                alert("Idea deleted successfully!");
            } catch (error) {
                console.error("Error deleting idea:", error);
                alert("Failed to delete idea. Please try again.");
            }
        }
    };

    const handleUpdate = (ideaId, event) => {
        event.preventDefault(); // Prevent navigation to idea detail page
        event.stopPropagation(); // Stop event bubbling
        navigate(`/update-idea/${ideaId}`);
    };

    return (
        <div className="idea-bank">
            <h2>Idea Bank</h2>

            <div className="idea-grid">
                {ideas.map(idea => (
                    <div key={idea.idea_id} className="idea-card">
                        <Link to={`/idea/${idea.idea_id}`} className="idea-content">
                            {idea.idea_image ? (
                                <img src={idea.idea_image} alt={idea.idea_title} className="idea-image" />
                            ) : (
                                <p>No Image Available</p>
                            )}

                            <h3>{idea.idea_title}</h3>
                            <p>{idea.idea_description.substring(0, 80)}...</p>
                            <span className={`status ${idea.idea_status.toLowerCase()}`}>{idea.idea_status}</span>
                        </Link>


                        <div className="idea-actions">
                            <button className="update-btn" onClick={(e) => handleUpdate(idea.idea_id, e)}>Update</button>
                            <button className="delete-btn" onClick={(e) => handleDelete(idea.idea_id, e)}>Delete</button>
                        </div>
                    </div>

                ))}
            </div>
            <IdeaForm />
        </div>
    );
};

export default IdeaBank;

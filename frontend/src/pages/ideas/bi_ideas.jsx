import React, { useEffect, useState } from "react";
import axios from "axios";

const BIIdeas = () => {
    const [ideas, setIdeas] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:3001/ideas") // Replace with your backend API endpoint
            .then(response => {
                setIdeas(response.data);
            })
            .catch(error => {
                console.error("Error fetching ideas:", error);
                console.log("Error fetching ideas 123");
            });
    }, []);

    return (
        <div>
            <h2>BI Ideas</h2>
            <table border="1">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Status</th>
                        <th>Created At</th>
                    </tr>
                </thead>
                <tbody>
                    {ideas.map(idea => (
                        <tr key={idea.id}>
                            <td>{idea.id}</td>
                            <td>{idea.idea_title}</td>
                            <td>{idea.idea_description}</td>
                            <td>{idea.idea_status}</td>
                            <td>{idea.idea_created_at}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default BIIdeas;

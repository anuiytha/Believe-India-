import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import "./styles.css";

const UpdateIdea = () => {
    const { ideaId } = useParams();
    const navigate = useNavigate();
    const [idea, setIdea] = useState({
        idea_title: "",
        idea_description: "",
        idea_status: "",
        idea_category: ""
    });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchIdea();
    }, [ideaId]);

    const fetchIdea = async () => {
        try {
            const response = await axios.get(`http://localhost:3001/ideas/${ideaId}`);
            setIdea(response.data);
            setLoading(false);
        } catch (error) {
            console.error("Error fetching idea:", error);
            setError("Failed to load idea details");
            setLoading(false);
        }
    };

    const handleChange = (e) => {
        console.log(`Field: ${e.target.name}, Value: ${e.target.value}`);
        setIdea({ ...idea, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            console.log('Updating idea with data:', idea);
            await axios.put(`http://localhost:3001/ideas/${ideaId}`, idea);
            console.log('Idea updated successfully!');
            alert("Idea updated successfully!");
            navigate('/idea-bank'); // Redirect back to idea bank
        } catch (error) {
            console.error("Error updating idea:", error);
            alert("Failed to update idea. Please try again.");
        }
    };

    const handleCancel = () => {
        navigate('/idea-bank');
    };

    if (loading) {
        return (
            <div className="form-container">
                <h2>Update Idea</h2>
                <p>Loading idea details...</p>
            </div>
        );
    }

    if (error) {
        return (
            <div className="form-container">
                <h2>Update Idea</h2>
                <p style={{ color: 'red' }}>{error}</p>
                <button onClick={handleCancel}>Back to Idea Bank</button>
            </div>
        );
    }

    return (
        <div className="form-container">
            <h2>Update Idea</h2>
            <form onSubmit={handleSubmit}>
                <table className="styled-table">
                    <tbody>
                        <tr>
                            <td><label>Title:</label></td>
                            <td>
                                <input
                                    type="text"
                                    name="idea_title"
                                    value={idea.idea_title}
                                    onChange={handleChange}
                                    required
                                />
                            </td>
                        </tr>
                        <tr>
                            <td><label>Description:</label></td>
                            <td>
                                <textarea
                                    name="idea_description"
                                    value={idea.idea_description}
                                    onChange={handleChange}
                                    required
                                    rows="4"
                                />
                            </td>
                        </tr>
                        <tr>
                            <td><label>Status:</label></td>
                            <td>
                                <select
                                    name="idea_status"
                                    value={idea.idea_status}
                                    onChange={handleChange}
                                    required
                                >
                                    <option value="">Select Status</option>
                                    <option value="pending">Pending</option>
                                    <option value="ongoing">Ongoing</option>
                                    <option value="approved">Approved</option>
                                    <option value="rejected">Rejected</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td><label>Category:</label></td>
                            <td>
                                <select
                                    name="idea_category"
                                    value={idea.idea_category}
                                    onChange={handleChange}
                                    required
                                >
                                    <option value="">Select Category</option>
                                    <option value="technology">Technology</option>
                                    <option value="education">Education</option>
                                    <option value="health">Health</option>
                                    <option value="environment">Environment</option>
                                    <option value="social">Social</option>
                                    <option value="other">Other</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td colSpan="2" className="center">
                                <button type="submit" style={{ marginRight: '10px' }}>
                                    Update Idea
                                </button>
                                <button
                                    type="button"
                                    onClick={handleCancel}
                                    style={{
                                        backgroundColor: '#6c757d',
                                        marginLeft: '10px'
                                    }}
                                >
                                    Cancel
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </form>
        </div>
    );
};

export default UpdateIdea; 
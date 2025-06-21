import React, { useState } from "react";
import axios from "axios";
import "./styles.css";

const IdeaForm = () => {
    const [idea, setIdea] = useState({
        idea_title: "",
        idea_description: "",
        idea_status: "",
        idea_category: "",
        idea_image: "" // Store uploaded image URL
    });

    const handleChange = (e) => {
        setIdea({ ...idea, [e.target.name]: e.target.value });
    };

    const handleImageUpload = async (e) => {
        const file = e.target.files[0];
        const formData = new FormData();
        formData.append("file", file);
        formData.append("upload_preset", "YOUR_CLOUDINARY_PRESET"); // Adjust for Contentful

        try {
            const response = await axios.post("https://api.cloudinary.com/v1_1/YOUR_CLOUD_NAME/image/upload", formData);
            setIdea({ ...idea, idea_image: response.data.secure_url });
        } catch (error) {
            console.error("Error uploading image:", error);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:3001/ideas", idea);
            alert("Idea submitted successfully!");
            setIdea({ idea_title: "", idea_description: "", idea_status: "", idea_category: "", idea_image: "" });
        } catch (error) {
            alert("Failed to submit idea.");
        }
    };

    return (
        <div>
            <h2>Submit a New Idea</h2>
            <form onSubmit={handleSubmit}>
                <table className="styled-table">
                    <tbody>
                        <tr>
                            <td><label>Title:</label></td>
                            <td><input type="text" name="idea_title" value={idea.idea_title} onChange={handleChange} required /></td>
                        </tr>
                        <tr>
                            <td><label>Description:</label></td>
                            <td><textarea name="idea_description" value={idea.idea_description} onChange={handleChange} required /></td>
                        </tr>
                        <tr>
                            <td><label>Status:</label></td>
                            <td>
                                <select name="idea_status" value={idea.idea_status} onChange={handleChange}>
                                    <option value="pending">Pending</option>
                                    <option value="approved">Approved</option>
                                    <option value="rejected">Rejected</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td><label>Category:</label></td>
                            <td>
                                <select name="idea_category" value={idea.idea_category} onChange={handleChange}>
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
                            <td><label>Upload Image:</label></td>
                            <td><input type="file" accept="image/*" onChange={handleImageUpload} /></td>
                        </tr>
                        <tr>
                            <td colSpan="2" className="center">
                                <button type="submit">Submit Idea</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </form>
        </div>
    );
};

export default IdeaForm;

const Project = require('../models/projects');

exports.createProject = async (req, res) => {
    try {
        const { project_name, project_description, project_status, project_category, project_tags, project_attachments } = req.body;
        const project = await Project.create({ project_name, project_description, project_status, project_category, project_tags, project_attachments });
        res.status(201).json(project);
    } catch (error) {
        res.status(500).json({ error: 'Failed to create project' });
    }
}
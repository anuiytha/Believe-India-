const Idea = require('../models/ideas');

exports.createIdea = async (req, res) => {
    try {
        const { idea_id, idea_title, idea_description, idea_status, idea_category, idea_image, idea_created_at } = req.body;
        const idea = await Idea.create({ idea_id, idea_title, idea_description, idea_status, idea_category, idea_image, idea_created_at });
        res.status(201).json(idea);
    } catch (error) {
        res.status(500).json({ error: 'Failed to create idea' });
    }
}

exports.getIdeas = async (req, res) => {
    try {
        const ideas = await Idea.findAll();
        const formattedIdeas = ideas.map(idea => ({
            ...idea.toJSON(),
            idea_image: idea.idea_image
                ? `data:image/jpeg;base64,${Buffer.from(idea.idea_image).toString('base64')}`
                : null
        }));


        res.status(200).json(formattedIdeas); // Corrected return statement
    } catch (error) {
        res.status(500).json({ error: 'Failed to get ideas' });
    }
};


exports.getIdeaById = async (req, res) => {
    try {
        const idea = await Idea.findByPk(req.params.idea_id);
        res.status(200).json(idea);
    } catch (error) {
        res.status(500).json({ error: 'Failed to get idea' });
    }
}

exports.insertIdea = async (req, res) => {
    try {
        const idea = await Idea.create(req.body);
        res.status(201).json(idea);
    } catch (error) {
        res.status(500).json({ error: 'Failed to insert idea' });
    }
}

exports.updateIdea = async (req, res) => {
    try {
        const updatedIdea = await Idea.update(req.body, {
            where: { idea_id: req.params.idea_id }
        });

        if (updatedIdea[0] === 0) {
            return res.status(404).json({ error: 'Idea not found' });
        }

        res.status(200).json({ message: 'Idea updated successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to update idea' });
    }
};


exports.deleteIdea = async (req, res) => {
    try {
        await Idea.destroy({ where: { idea_id: req.params.idea_id } });
        res.status(200).json({ message: 'Idea deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to delete idea' });
    }
}


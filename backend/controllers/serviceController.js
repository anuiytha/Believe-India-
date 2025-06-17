const Service = require('../models/services');

exports.createService = async (req, res) => {
    try {
        const { service_name, service_description, service_status, service_category, service_tags, service_attachments } = req.body;
        const service = await Service.create({ service_name, service_description, service_status, service_category, service_tags, service_attachments });
        res.status(201).json(service);
    } catch (error) {
        res.status(500).json({ error: 'Failed to create service' });
    }
}
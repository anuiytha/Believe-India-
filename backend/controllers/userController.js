const User = require('../models/users');

exports.createUser = async (req, res) => {
    try {
        const { user_name, user_email, user_password, user_role } = req.body;
        const user = await User.create({ user_name, user_email, user_password, user_role });
        res.status(201).json(user);
    } catch (error) {
        res.status(500).json({ error: 'Failed to create user' });
    }
}

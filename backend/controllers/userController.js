const bcrypt = require('bcrypt');
const User = require('../models/users');
const jwt = require('jsonwebtoken');
require('dotenv').config();

// Register New User
exports.registerUser = async (req, res) => {
    try {
        const { user_name, user_email, user_password, user_role } = req.body;

        // Hash the incoming password
        const hashedPassword = await bcrypt.hash(user_password, 10);

        // Create user using your model's fields
        const user = await User.create({
            user_name,
            user_email,
            user_password: hashedPassword, // ✅ correct field name
            user_role,
            user_created_at: new Date(),
            user_updated_at: new Date()
        });

        res.status(201).json({ user });
    } catch (error) {
        console.error(error); // Helps with debugging
        res.status(500).json({ error: 'Registration failed' });
    }
};

// Login Existing User
exports.loginUser = async (req, res) => {
    try {
        const { user_name, user_password } = req.body;

        // Find user by username
        const user = await User.findOne({ where: { user_name } });

        if (!user) return res.status(401).json({ error: 'User not found' });

        // Compare provided password to stored hash
        const valid = await bcrypt.compare(user_password, user.user_password);
        if (!valid) return res.status(401).json({ error: 'Invalid password' });

        // Generate JWT token
        const token = jwt.sign(
            { id: user.id, user_name: user.user_name, role: user.user_role },
            process.env.JWT_SECRET,
            { expiresIn: '1h' }
        );

        res.status(200).json({ token });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Login failed' });
    }
};

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
// 

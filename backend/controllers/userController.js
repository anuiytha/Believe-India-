const User = require('../models/users');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../middleware/auth');

// Register a new user
exports.register = async (req, res) => {
    try {
        const { user_name, user_email, user_password, user_role = 'user' } = req.body;

        // Check if user already exists
        const existingUser = await User.findOne({ where: { user_email } });
        if (existingUser) {
            return res.status(400).json({ error: 'User with this email already exists' });
        }

        // Hash password
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(user_password, saltRounds);

        // Create user
        const user = await User.create({
            user_name,
            user_email,
            user_password: hashedPassword,
            user_role
        });

        // Generate JWT token
        const token = jwt.sign(
            { userId: user.id, email: user.user_email, role: user.user_role },
            JWT_SECRET,
            { expiresIn: '24h' }
        );

        // Return user data without password
        const userResponse = {
            id: user.id,
            user_name: user.user_name,
            user_email: user.user_email,
            user_role: user.user_role,
            user_created_at: user.user_created_at
        };

        res.status(201).json({
            message: 'User registered successfully',
            user: userResponse,
            token
        });
    } catch (error) {
        console.error('Registration error:', error);
        res.status(500).json({ error: 'Failed to register user' });
    }
};

// Login user
exports.login = async (req, res) => {
    try {
        const { user_email, user_password } = req.body;

        // Find user by email
        const user = await User.findOne({ where: { user_email } });
        if (!user) {
            return res.status(401).json({ error: 'Invalid email or password' });
        }

        // Check password
        const isValidPassword = await bcrypt.compare(user_password, user.user_password);
        if (!isValidPassword) {
            return res.status(401).json({ error: 'Invalid email or password' });
        }

        // Generate JWT token
        const token = jwt.sign(
            { userId: user.id, email: user.user_email, role: user.user_role },
            JWT_SECRET,
            { expiresIn: '24h' }
        );

        // Return user data without password
        const userResponse = {
            id: user.id,
            user_name: user.user_name,
            user_email: user.user_email,
            user_role: user.user_role,
            user_created_at: user.user_created_at
        };

        res.json({
            message: 'Login successful',
            user: userResponse,
            token
        });
    } catch (error) {
        console.error('Login error:', error);
        res.status(500).json({ error: 'Failed to login' });
    }
};

// Get current user profile
exports.getProfile = async (req, res) => {
    try {
        const userResponse = {
            id: req.user.id,
            user_name: req.user.user_name,
            user_email: req.user.user_email,
            user_role: req.user.user_role,
            user_created_at: req.user.user_created_at
        };

        res.json({ user: userResponse });
    } catch (error) {
        console.error('Get profile error:', error);
        res.status(500).json({ error: 'Failed to get profile' });
    }
};

// Update user profile
exports.updateProfile = async (req, res) => {
    try {
        const { user_name, user_email } = req.body;
        const userId = req.user.id;

        // Check if email is already taken by another user
        if (user_email) {
            const existingUser = await User.findOne({
                where: {
                    user_email,
                    id: { [User.sequelize.Op.ne]: userId }
                }
            });
            if (existingUser) {
                return res.status(400).json({ error: 'Email already taken' });
            }
        }

        // Update user
        const updateData = {};
        if (user_name) updateData.user_name = user_name;
        if (user_email) updateData.user_email = user_email;

        await User.update(updateData, { where: { id: userId } });

        // Get updated user
        const updatedUser = await User.findByPk(userId);
        const userResponse = {
            id: updatedUser.id,
            user_name: updatedUser.user_name,
            user_email: updatedUser.user_email,
            user_role: updatedUser.user_role,
            user_created_at: updatedUser.user_created_at
        };

        res.json({
            message: 'Profile updated successfully',
            user: userResponse
        });
    } catch (error) {
        console.error('Update profile error:', error);
        res.status(500).json({ error: 'Failed to update profile' });
    }
};

// Change password
exports.changePassword = async (req, res) => {
    try {
        const { currentPassword, newPassword } = req.body;
        const userId = req.user.id;

        // Get user with current password
        const user = await User.findByPk(userId);
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        // Verify current password
        const isValidPassword = await bcrypt.compare(currentPassword, user.user_password);
        if (!isValidPassword) {
            return res.status(400).json({ error: 'Current password is incorrect' });
        }

        // Hash new password
        const saltRounds = 10;
        const hashedNewPassword = await bcrypt.hash(newPassword, saltRounds);

        // Update password
        await User.update(
            { user_password: hashedNewPassword },
            { where: { id: userId } }
        );

        res.json({ message: 'Password changed successfully' });
    } catch (error) {
        console.error('Change password error:', error);
        res.status(500).json({ error: 'Failed to change password' });
    }
};

// Get all users (admin only)
exports.getAllUsers = async (req, res) => {
    try {
        const users = await User.findAll({
            attributes: ['id', 'user_name', 'user_email', 'user_role', 'user_created_at', 'user_updated_at']
        });

        res.json({ users });
    } catch (error) {
        console.error('Get all users error:', error);
        res.status(500).json({ error: 'Failed to get users' });
    }
};

// Get user by ID (admin or self)
exports.getUserById = async (req, res) => {
    try {
        const userId = parseInt(req.params.id);
        const user = await User.findByPk(userId, {
            attributes: ['id', 'user_name', 'user_email', 'user_role', 'user_created_at', 'user_updated_at']
        });

        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        res.json({ user });
    } catch (error) {
        console.error('Get user by ID error:', error);
        res.status(500).json({ error: 'Failed to get user' });
    }
};

// Update user (admin only)
exports.updateUser = async (req, res) => {
    try {
        const userId = parseInt(req.params.id);
        const { user_name, user_email, user_role } = req.body;

        const user = await User.findByPk(userId);
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        // Check if email is already taken by another user
        if (user_email && user_email !== user.user_email) {
            const existingUser = await User.findOne({
                where: {
                    user_email,
                    id: { [User.sequelize.Op.ne]: userId }
                }
            });
            if (existingUser) {
                return res.status(400).json({ error: 'Email already taken' });
            }
        }

        // Update user
        const updateData = {};
        if (user_name) updateData.user_name = user_name;
        if (user_email) updateData.user_email = user_email;
        if (user_role) updateData.user_role = user_role;

        await User.update(updateData, { where: { id: userId } });

        // Get updated user
        const updatedUser = await User.findByPk(userId, {
            attributes: ['id', 'user_name', 'user_email', 'user_role', 'user_created_at', 'user_updated_at']
        });

        res.json({
            message: 'User updated successfully',
            user: updatedUser
        });
    } catch (error) {
        console.error('Update user error:', error);
        res.status(500).json({ error: 'Failed to update user' });
    }
};

// Delete user (admin only)
exports.deleteUser = async (req, res) => {
    try {
        const userId = parseInt(req.params.id);

        const user = await User.findByPk(userId);
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        await User.destroy({ where: { id: userId } });

        res.json({ message: 'User deleted successfully' });
    } catch (error) {
        console.error('Delete user error:', error);
        res.status(500).json({ error: 'Failed to delete user' });
    }
};

// Legacy function for backward compatibility
exports.createUser = async (req, res) => {
    try {
        const { user_name, user_email, user_password, user_role } = req.body;
        const user = await User.create({ user_name, user_email, user_password, user_role });
        res.status(201).json(user);
    } catch (error) {
        res.status(500).json({ error: 'Failed to create user' });
    }
};

const bcrypt = require('bcrypt');
const User = require('../models/users');

// exports.createUser = async (req, res) => {
//     try {
//         const { user_name, user_email, user_password, user_role, user_created_at, user_updated_at, password_hash } = req.body;
//         const user = await User.create({ user_name, user_email, user_password, user_role, user_created_at, user_updated_at, password_hash });
//         res.status(201).json(user);
//     } catch (error) {
//         res.status(500).json({ error: 'Failed to create user' });
//     }
// }

exports.registerUser = async (req, res) => {
    try {
        const { user_name, user_email, password, user_role } = req.body;
        const password_hash = await bcrypt.hash(password, 10);

        const user = await User.create({
            user_name,
            user_email,
            password_hash,
            user_role,
            user_created_at: new Date(),
            user_updated_at: new Date()
        })
        res.status(201).json({ user });

    } catch (error) {
        res.status(500).json({ error: 'Registration failed' });
    }
};

exports.loginUser = async (req, res) => {
    try {
        const { user_name, password } = req.body;
        const user = await User.findOne({ where: { user_name } })

        if (!user) return res.status(401).json({ error: 'User not found' });

        const valid = await bcrypt.compare(password, user.password_hash);
        if (!valid) return res.status(401).json({ error: 'Invalid password' });

        const token = jwt.sign(
            { id: user.id, user_name: user.user_name, role: user.user_role },
            process.env.JWT_SECRET,
            { expiresIn: '1h' }
        )

        res.json({ token });
    } catch (error) {
        res.status(500).json({ error: 'Login failed' });
    }
}



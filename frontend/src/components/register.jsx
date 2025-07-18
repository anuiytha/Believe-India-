import { useState } from 'react';
import axios from 'axios';

export default function Register() {
    const [form, setForm] = useState({
        user_name: '',
        user_email: '',
        user_password: '',
        user_role: 'user'

    });

    const handleChange = e => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleRegister = async () => {
        try {
            await axios.post('http://localhost:3001/api/auth/register', form);
            alert('Registeration successful!');
        } catch (err) {
            alert('Registration failed');
        }
    };

    return (
        <div>
            <h2>Register</h2>
            <input name="user_name" placeholder="Username" onChange={handleChange} />
            <input name="user_email" placeholder="Email" onChange={handleChange} />
            <input name="user_password" type="password" placeholder="Password" onChange={handleChange} />
            <select name="user_role" onChange={handleChange}>
                <option value="user">User</option>
                <option value="admin">Admin</option>
            </select>
            <button onClick={handleRegister}>Register</button>
        </div>
    )
}

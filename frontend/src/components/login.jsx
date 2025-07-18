// import { useState } from 'react';
// import axios from 'axios';
// import { jwtDecode } from 'jwt-decode';

// function Login({ setUser }) {
//     const [form, setForm] = useState({ user_name: '', user_password: '' });

//     const handleChange = e => {
//         setForm({ ...form, [e.target.name]: e.target.value });
//     };

//     const handleLogin = async () => {
//         try {
//             const res = await axios.post('http://localhost:3001/api/auth/login', form);
//             const token = res.data.token;
//             localStorage.setItem('token', token);
//             const decoded = jwtDecode(token);
//             setUser(decoded);
//         } catch (err) {
//             alert('Login failed');
//         }
//     };

//     return (
//         <div>
//             <h2>Login</h2>
//             <input name="user_name" placeholder="Username" onChange={handleChange} />
//             <input name="user_password" type="password" placeholder="Password" onChange={handleChange} />
//             <button onClick={handleLogin}>Login</button>
//         </div>
//     );
// }

// export default Login;

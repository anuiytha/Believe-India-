const express = require('express');
const cors = require('cors');
const app = express();
const sequelize = require('./config/db');
const ideaRoutes = require('./routes/ideaRoutes');
const projectRoutes = require('./routes/projectRoutes');
const userRoutes = require('./routes/userRoutes');
const serviceRoutes = require('./routes/serviceRoutes');

app.use(cors());
app.use(cors({
    origin: "http://localhost:5173"
}));

app.use(express.json());
app.use('/', ideaRoutes);
app.use('/', projectRoutes);
app.use('/', userRoutes);
app.use('/', serviceRoutes);

sequelize.sync().then(() => {
    app.listen(3001, () => console.log('Server running on port 3001'));
})

module.exports = app;
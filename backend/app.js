const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

const taskRoutes = require('./routes/taskRoutes');
app.use('/api/tasks', taskRoutes);

const { errorHandler } = require('./middlewares/errorHandler');
app.use(errorHandler);

module.exports = app;

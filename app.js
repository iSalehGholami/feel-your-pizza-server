const express = require('express');
const sequelize = require('./db/db'); // Import sequelize instance from db.js
const authRouter = require('./routes/authRouter');

const app = express();

// Use authRouter for user authentication endpoints
app.use('/api/auth', authRouter);


// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

/*********************************************************************************

WEB422 – Assignment 01
I declare that this assignment is my own work in accordance with Seneca 
Academic Policy. No part of this assignment has been copied manually 
or electronically from any other source (including 3rd party web sites) or 
distributed to other students. I acknowledge that violation of this policy
to any degree results in a ZERO for this assignment and possible failure of
the course.

Name: Alexandru Zaporojan
Student ID: 105756233



********************************************************************************/ 

const express = require('express');
const app = express();

const cors = require('cors');
app.use(cors());

require('dotenv').config();

app.use(express.json());

// Simple GET route
app.get('/', (req, res) => {
    res.json({ message: "API Listening" });
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

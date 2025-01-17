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

const ListingsDB = require("./modules/listingsDB.js"); // Correctly require the ListingsDB module
const db = new ListingsDB();

// Initialize the database connection
db.initialize(process.env.MONGODB_CONN_STRING)
  .then(() => {
    // If successful, start the server
    console.log("Database initialized successfully");

    // Simple GET route
    app.get('/', (req, res) => {
      res.json({ message: "API Listening" });
    });

    // Additional routes can be added here once DB is connected

    const PORT = 3000;
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  })
  .catch(err => {
    console.error("Error initializing the database:", err);
  });

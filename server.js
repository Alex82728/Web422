/*********************************************************************************

WEB422 – Assignment 02
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
const cors = require('cors');
require('dotenv').config();
const ListingsDB = require('./modules/listingsDB.js');

const app = express();
const db = new ListingsDB();

// Middleware
app.use(cors());
app.use(express.json());

// Initialize MongoDB connection
db.initialize(process.env.MONGODB_CONN_STRING)
  .then(() => {
    console.log('Database initialized successfully');

    // Root route
    app.get('/', (req, res) => {
      res.send('Welcome to the Listings API. Use /api/listings to interact with the API.');
    });

    // Routes
    app.post('/api/listings', async (req, res) => {
      try {
        const newListing = await db.addNewListing(req.body);
        res.status(201).json(newListing);
      } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Failed to create listing' });
      }
    });

    app.get('/api/listings', async (req, res) => {
      const { page, perPage, name } = req.query;
      if (isNaN(page) || isNaN(perPage)) {
        return res.status(400).json({ error: 'Invalid page or perPage value' });
      }
      try {
        const listings = await db.getAllListings(page, perPage, name);
        res.status(200).json(listings);
      } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Failed to fetch listings' });
      }
    });

    app.get('/api/listings/:id', async (req, res) => {
      const { id } = req.params;
      try {
        const listing = await db.getListingById(id);
        if (!listing) {
          return res.status(404).json({ error: 'Listing not found' });
        }
        res.status(200).json(listing);
      } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Failed to fetch listing' });
      }
    });

    app.put('/api/listings/:id', async (req, res) => {
      const { id } = req.params;
      try {
        const result = await db.updateListingById(req.body, id);
        if (result.nModified === 0) {
          return res.status(404).json({ error: 'Listing not found or no changes made' });
        }
        res.status(200).json({ message: 'Listing updated successfully' });
      } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Failed to update listing' });
      }
    });

    app.delete('/api/listings/:id', async (req, res) => {
      const { id } = req.params;
      try {
        const result = await db.deleteListingById(id);
        if (result.deletedCount === 0) {
          return res.status(404).json({ error: 'Listing not found' });
        }
        res.status(204).send();
      } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Failed to delete listing' });
      }
    });

    // Start the server (for local only)
    if (process.env.NODE_ENV !== 'production') {
      const PORT = process.env.PORT || 3000;
      app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`);
      });
    }
  })
  .catch((err) => {
    console.error('Database connection error:', err);
  });

// Export the app for Vercel
module.exports = app;

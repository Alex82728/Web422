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

const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const ListingsDB = require("./modules/listingsDB");
const path = require("path");

// Load dotenv variables
require("dotenv").config();

const app = express();
const myData = new ListingsDB(process.env.MONGODB_CONN_STRING); // Ensure .env contains MONGODB_CONN_STRING

app.use(cors());
app.use(bodyParser.json());

// Serve static files from 'public' folder
app.use(express.static(path.join(__dirname, "public")));

const HTTP_PORT = process.env.PORT || 8080;

// Route to handle GET / (Root)
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

// API Routes

// POST /api/listings
app.post("/api/listings", (req, res) => {
    console.log("POST /api/listings", req.body); // Debugging log
    myData.addNewListing(req.body)
        .then(() => {
            res.status(201).json({ message: "New listing successfully added" });
        })
        .catch((err) => {
            console.error("Error adding listing:", err);
            res.status(400).json(err);
        });
});

// GET /api/listings
app.get("/api/listings", (req, res) => {
    console.log("GET /api/listings called"); // Debugging log
    const page = parseInt(req.query.page) || 1;
    const perPage = parseInt(req.query.perPage) || 10;

    myData.getAllListings(page, perPage)
        .then((listings) => {
            console.log("Retrieved listings count:", listings.length);
            res.status(200).json(listings);
        })
        .catch((err) => {
            console.error("Error fetching listings:", err);
            res.status(400).json(err);
        });
});

// GET /api/listings/:id
app.get("/api/listings/:id", (req, res) => {
    console.log(`GET /api/listings/${req.params.id} called`); // Debugging log
    myData.getListingById(req.params.id)
        .then((listing) => {
            res.status(200).json(listing);
        })
        .catch((err) => {
            console.error("Error fetching listing by ID:", err);
            res.status(404).json(err);
        });
});

// PUT /api/listings/:id
app.put("/api/listings/:id", (req, res) => {
    console.log(`PUT /api/listings/${req.params.id} called`, req.body); // Debugging log
    myData.updateListingById(req.body, req.params.id)
        .then(() => {
            res.status(200).json({ message: `Listing ${req.params.id} successfully updated` });
        })
        .catch((err) => {
            console.error("Error updating listing:", err);
            res.status(404).json(err);
        });
});

// DELETE /api/listings/:id
app.delete("/api/listings/:id", (req, res) => {
    console.log(`DELETE /api/listings/${req.params.id} called`); // Debugging log
    myData.deleteListingById(req.params.id)
        .then(() => {
            res.status(200).json({ message: `Listing ${req.params.id} successfully deleted` });
        })
        .catch((err) => {
            console.error("Error deleting listing:", err);
            res.status(404).json(err);
        });
});

// Initialize the Service & Start the Server
myData.initialize()
    .then(() => {
        console.log("Database connection successful");
        app.listen(HTTP_PORT, () => {
            console.log(`Server is running at: http://localhost:${HTTP_PORT}`);
        });
    })
    .catch((err) => {
        console.error("Error initializing database:", err);
    });

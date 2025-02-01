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
const dataService = require("./modules/data-service.js");

// Load dotenv variables
require("dotenv").config({path:"./config/config.env"});

const myData = dataService(`mongodb+srv://alexsandumd:349566695@cluster0.qcpkk.mongodb.net/myDatabase?retryWrites=true&w=majority`);

const app = express();

app.use(cors());

app.use(bodyParser.json());

const HTTP_PORT = process.env.PORT || 8080;

// API Routes

// POST /api/listings 
app.post("/api/listings", (req, res) => {
    myData.addNewListing(req.body)
        .then(() => {
            res.status(201).json(`New listing successfully added`);
        })
        .catch((err) => {
            res.status(400).json(err);
        });
});

// GET /api/listings 
app.get("/api/listings", (req, res) => {
    myData.getAllListings(req.query.page, req.query.perPage)
        .then((listings) => {
            res.status(200).json(listings);
        })
        .catch((err) => {
            res.status(400).json(err);
        });
});

// GET /api/listings/:id 
app.get("/api/listings/:id", (req, res) => {
    myData.getListingById(req.params.id)
        .then((listing) => {
            res.status(200).json(listing);
        })
        .catch((err) => {
            res.status(404).json(err);
        });
});

// PUT /api/listings/:id 
app.put("/api/listings/:id", (req, res) => {
    myData.updateListingById(req.body, req.params.id)
        .then(() => {
            res.status(200).json(`Listing ${req.body._id} successfully updated`);
        })
        .catch((err) => {
            res.status(404).json(err);
        });
});

// DELETE /api/listings/:id 
app.delete("/api/listings/:id", (req, res) => {
    myData.deleteListingById(req.params.id)
        .then(() => {
            res.status(200).json(`Listing ${req.params.id} successfully deleted`);
        })
        .catch((err) => {
            res.status(404).json(err);
        });
});

// Initialize the Service & Start the Server

myData.initialize().then(() => {
    app.listen(HTTP_PORT, () => {
        console.log(`Server listening on: ${HTTP_PORT}`);
    });
}).catch((err) => {
    console.log(err);
});

const mongoose = require('mongoose');
const listingSchema = require("./modules/listingSchema");


class ListingsDB {
  constructor(connectionString) {
    this.connectionString = connectionString;
   
    this._listings = mongoose.model("listingsAndReviews", listingSchema, "listingsAndReviews");  
  }

  initialize() {
    return new Promise((resolve, reject) => {
      mongoose.connect(this.connectionString) 
        .then(() => {
          console.log('Connected to MongoDB');
          resolve();
        })
        .catch((err) => {
          console.error("Failed to connect to MongoDB:", err.message);
          reject(err);
        });
    });
  }

  // Get all listings with pagination
  getAllListings(page = 1, perPage = 10) {
    return new Promise((resolve, reject) => {
      this._listings.find()
        .skip((page - 1) * perPage)  // Skip records based on the page number
        .limit(perPage)  // Limit the number of records per page
        .then((listings) => {
          resolve(listings);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }

  // Get a listing by its ID
  getListingById(id) {
    return new Promise((resolve, reject) => {
      this._listings.findById(id)
        .then((listing) => {
          if (listing) {
            resolve(listing);
          } else {
            reject("Listing not found");
          }
        })
        .catch((err) => {
          reject(err);
        });
    });
  }

  // Add a new listing
  addNewListing(listing) {
    return new Promise((resolve, reject) => {
      this._listings.create(listing)
        .then((newListing) => {
          resolve(newListing);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }

  // Update a listing by its ID
  updateListingById(updatedData, id) {
    return new Promise((resolve, reject) => {
      this._listings.findByIdAndUpdate(id, updatedData, { new: true })
        .then((updatedListing) => {
          resolve(updatedListing);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }

  // Delete a listing by its ID
  deleteListingById(id) {
    return new Promise((resolve, reject) => {
      this._listings.findByIdAndDelete(id)
        .then(() => {
          resolve(`Listing ${id} successfully deleted`);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }
}

module.exports = ListingsDB;

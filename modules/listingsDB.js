const mongoose = require('mongoose');
const listingSchema = require("./listingSchema");

class ListingsDB {
  constructor(connectionString) {
    this.connectionString = connectionString;
    
    // Check if the model already exists
    this._listings = mongoose.models.listingsAndReviews || mongoose.model("listingsAndReviews", listingSchema, "listingsAndReviews");
  }

  initialize() {
    return new Promise((resolve, reject) => {
      mongoose.connect(this.connectionString)
        .then(() => {
          console.log('✅ Connected to MongoDB');
          resolve();
        })
        .catch((err) => {
          console.error("❌ Failed to connect to MongoDB:", err.message);
          reject(err);
        });

      mongoose.connection.on("disconnected", () => {
        console.warn("⚠️ MongoDB disconnected!");
      });
    });
  }

  getAllListings(page = 1, perPage = 10) {
    return new Promise((resolve, reject) => {
      this._listings.find()
        .skip((page - 1) * perPage)
        .limit(perPage)
        .then((listings) => resolve(listings))
        .catch((err) => reject(err));
    });
  }

  getListingById(id) {
    return new Promise((resolve, reject) => {
      if (!id) {
        return reject("ID is required");
      }

      if (mongoose.Types.ObjectId.isValid(id)) {
        this._listings.findById(id)
          .then((listing) => {
            if (listing) {
              resolve(listing);
            } else {
              reject("Listing not found");
            }
          })
          .catch((err) => reject(err));
      } else {
        this._listings.findOne({ _id: id })
          .then((listing) => {
            if (listing) {
              resolve(listing);
            } else {
              reject("Listing not found");
            }
          })
          .catch((err) => reject(err));
      }
    });
  }

  addNewListing(listing) {
    return new Promise((resolve, reject) => {
      this._listings.create(listing)
        .then((newListing) => resolve(newListing))
        .catch((err) => reject(err));
    });
  }

  updateListingById(updatedData, id) {
    return new Promise((resolve, reject) => {
      if (!mongoose.Types.ObjectId.isValid(id) && typeof id !== 'string') {
        return reject("Invalid ID format");
      }
      
      this._listings.findByIdAndUpdate(id, updatedData, { new: true })
        .then((updatedListing) => {
          if (updatedListing) {
            resolve(updatedListing);
          } else {
            reject("Listing not found");
          }
        })
        .catch((err) => reject(err));
    });
  }

  deleteListingById(id) {
    return new Promise((resolve, reject) => {
      if (!mongoose.Types.ObjectId.isValid(id) && typeof id !== 'string') {
        return reject("Invalid ID format");
      }

      this._listings.findByIdAndDelete(id)
        .then((result) => {
          if (result) {
            resolve(`Listing ${id} successfully deleted`);
          } else {
            reject("Listing not found");
          }
        })
        .catch((err) => reject(err));
    });
  }

  getTotalListingsCount() {
    return new Promise((resolve, reject) => {
      this._listings.countDocuments()
        .then((count) => resolve(count))
        .catch((err) => reject(err));
    });
  }
}

module.exports = ListingsDB;

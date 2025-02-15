const mongoose = require('mongoose');
const listingSchema = require("./listingSchema");

class ListingsDB {
  constructor(connectionString) {
    this.connectionString = connectionString;
    this._listings = mongoose.models.listingsAndReviews || mongoose.model("listingsAndReviews", listingSchema, "listingsAndReviews");
  }

  // Initialize database connection
  async initialize() {
    try {
      await mongoose.connect(this.connectionString);
      console.log('✅ Connected to MongoDB');
    } catch (err) {
      console.error("❌ Failed to connect to MongoDB:", err.message);
      throw err;
    }

    mongoose.connection.on("disconnected", () => {
      console.warn("⚠️ MongoDB disconnected!");
    });
  }

  // Get all listings with pagination
  async getAllListings(page = 1, perPage = 10) {
    try {
      const listings = await this._listings.find()
        .skip((page - 1) * perPage)
        .limit(perPage);
      return listings;
    } catch (err) {
      throw new Error(`Error fetching listings: ${err.message}`);
    }
  }

  // Get a listing by its ID
  async getListingById(id) {
    if (!id) {
      throw new Error("ID is required");
    }

    if (!mongoose.Types.ObjectId.isValid(id)) {
      throw new Error("Invalid ID format");
    }

    try {
      const listing = await this._listings.findById(id);
      if (!listing) {
        throw new Error("Listing not found");
      }
      return listing;
    } catch (err) {
      throw new Error(`Error fetching listing: ${err.message}`);
    }
  }

  // Add a new listing
  async addNewListing(listing) {
    try {
      const newListing = await this._listings.create(listing);
      return newListing;
    } catch (err) {
      throw new Error(`Error adding listing: ${err.message}`);
    }
  }

  // Update a listing by its ID
  async updateListingById(updatedData, id) {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      throw new Error("Invalid ID format");
    }

    try {
      const updatedListing = await this._listings.findByIdAndUpdate(id, updatedData, { new: true });
      if (!updatedListing) {
        throw new Error("Listing not found");
      }
      return updatedListing;
    } catch (err) {
      throw new Error(`Error updating listing: ${err.message}`);
    }
  }

  // Delete a listing by its ID
  async deleteListingById(id) {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      throw new Error("Invalid ID format");
    }

    try {
      const result = await this._listings.findByIdAndDelete(id);
      if (!result) {
        throw new Error("Listing not found");
      }
      return `Listing ${id} successfully deleted`;
    } catch (err) {
      throw new Error(`Error deleting listing: ${err.message}`);
    }
  }

  // Get total listings count
  async getTotalListingsCount() {
    try {
      const count = await this._listings.countDocuments();
      return count;
    } catch (err) {
      throw new Error(`Error fetching listings count: ${err.message}`);
    }
  }
}

module.exports = ListingsDB;

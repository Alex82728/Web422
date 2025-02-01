const mongoose = require("mongoose");
const listingSchema = require("./listingSchema");

module.exports = class ListingsDB {
  constructor() {
    // We don't have a `Listing` object until initialize() is complete
    this.Listing = null;
  }

  // Pass the connection string to `initialize()`
  initialize(connectionString) {
    return new Promise((resolve, reject) => {
      // Creating the database connection
      const db = mongoose.createConnection(connectionString);

      db.once('error', (err) => {
        reject(err);
      });

      db.once('open', () => {
        // Specify the collection name as 'listingsAndReviews'
        this.Listing = db.model("listing", listingSchema, 'listingsAndReviews');  // <-- Updated collection name
        resolve();
      });
    });
  }

  async addNewListing(data) {
    // Add a new listing to the 'listingsAndReviews' collection
    const newListing = new this.Listing(data);
    await newListing.save();
    return newListing;
  }

  // Get all listings from the 'listingsAndReviews' collection
  getAllListings(page, perPage, name) {
    let findBy = name ? { "name": { "$regex": name, "$options": "i" } } : {};

    if (+page && +perPage) {
      return this.Listing.find(findBy, {reviews: 0}) // Exclude reviews field in the results
        .sort({ number_of_reviews: -1 }) // Sort by number of reviews (descending)
        .skip((page - 1) * +perPage)  // Pagination
        .limit(+perPage)  // Pagination limit
        .exec();
    }

    return Promise.reject(new Error('page and perPage query parameters must be valid numbers'));
  }

  // Get a listing by ID from the 'listingsAndReviews' collection
  getListingById(id) {
    return this.Listing.findOne({ _id: id }).exec();
  }

  // Update a listing by ID in the 'listingsAndReviews' collection
  updateListingById(data, id) {
    return this.Listing.updateOne({ _id: id }, { $set: data }).exec();
  }

  // Delete a listing by ID from the 'listingsAndReviews' collection
  deleteListingById(id) {
    return this.Listing.deleteOne({ _id: id }).exec();
  }
}

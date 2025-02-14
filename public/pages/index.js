// pages/api/listings/index.js
import ListingsDB from "../../../modules/listingsDB"; // Adjust path as needed

const myData = new ListingsDB(process.env.MONGODB_CONN_STRING);

export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      const page = parseInt(req.query.page) || 1;
      const perPage = parseInt(req.query.perPage) || 10;
      const listings = await myData.getAllListings(page, perPage);
      res.status(200).json(listings);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  } else if (req.method === "POST") {
    try {
      await myData.addNewListing(req.body);
      res.status(201).json({ message: "New listing successfully added" });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  } else {
    res.status(405).json({ error: "Method Not Allowed" });
  }
}

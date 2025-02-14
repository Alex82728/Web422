// pages/api/listings/[id].js
import ListingsDB from "../../../modules/listingsDB"; // Adjust path as needed

const myData = new ListingsDB(process.env.MONGODB_CONN_STRING);

export default async function handler(req, res) {
  const { id } = req.query;

  if (req.method === "GET") {
    try {
      const listing = await myData.getListingById(id);
      res.status(200).json(listing);
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
  } else {
    res.status(405).json({ error: "Method Not Allowed" });
  }
}

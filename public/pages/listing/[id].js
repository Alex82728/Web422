// pages/api/listings/[id].js

const listingsData = [
  { id: '10030955', name: 'Luxury Beach House', price: '$1,500,000', location: 'California' },
  { id: '1206364', name: 'Modern Apartment', price: '$450,000', location: 'New York' },
  // You can add more listings here as needed
];

export default function handler(req, res) {
  const { id } = req.query;
  
  // Find the listing that matches the id
  const listing = listingsData.find((listing) => listing.id === id);
  
  if (listing) {
    res.status(200).json(listing);
  } else {
    res.status(404).json({ error: 'Listing not found' });
  }
}

// components/ListingDetails.js
import { Card } from 'react-bootstrap';

export default function ListingDetails({ listing }) {
  return (
    <Card>
      <Card.Body>
        <Card.Title>{listing.title}</Card.Title>
        <Card.Text>{listing.description}</Card.Text>
        <Card.Text>
          <strong>Price:</strong> ${listing.price}
        </Card.Text>
        <Card.Text>
          <strong>Location:</strong> {listing.location}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}
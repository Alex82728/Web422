import { Container, Row, Col } from 'react-bootstrap';

export default function ListingDetails({ listing }) {
  return (
    <Container>
      <Row>
        <Col lg={6}>
          <img
            onError={(event) => {
              event.target.onerror = null; // Prevent infinite loop
              event.target.src = 'https://placehold.co/600x400?text=Photo+Not+Available';
            }}
            className="img-fluid w-100"
            src={listing.photo_url || 'https://placehold.co/600x400?text=Photo+Not+Available'}
            alt="Listing Image"
          />
          <br />
          <br />
        </Col>
        <Col lg={6}>
          <p>{listing.neighborhood_overview || 'No neighborhood overview available.'}</p>
          <strong>Price:</strong> ${listing.price.toFixed(2)}<br />
          <strong>Room:</strong> {listing.room_type}<br />
          <strong>Bed:</strong> {listing.bed_type} ({listing.beds} beds)<br />
          <br />
          <strong>Rating:</strong> {listing.review_scores?.review_scores_rating || 'N/A'} ({listing.number_of_reviews} Reviews)<br />
        </Col>
      </Row>
    </Container>
  );
}

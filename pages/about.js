import { Card } from 'react-bootstrap';
import ListingDetails from '@/components/ListingDetails';
import PageHeader from '@/components/PageHeader';

export async function getStaticProps() {
  const listingId = '10030955'; // Updated listing ID
  const res = await fetch(`https://web422-zxergpdbe-alexandrus-projects-cb24e18f.vercel.app/api/listings/${listingId}`);

  // Log the raw response to inspect it
  const text = await res.text();
  console.log('Raw Response:', text);

  // Try parsing the response as JSON
  try {
    const data = JSON.parse(text);
    console.log('Parsed Data:', data); // Log the parsed data

    return {
      props: {
        listing: data,
      },
    };
  } catch (error) {
    console.error('Failed to parse JSON:', error);
    return {
      props: {
        listing: null,
      },
    };
  }
}

export default function About({ listing }) {
  return (
    <>
      {/* Page Header */}
      <PageHeader text="About the Developer - Alexandru Zaporojan" />

      {/* About Me Section */}
      <Card className="bg-light">
        <Card.Body>
          <p>Hello, I'm Alexandru Zaporojan, a software developer with a passion for building web applications and exploring new technologies. I'm excited to be working on this project!</p>
          <p>Feel free to check out my listing below:</p>
        </Card.Body>
      </Card>
      <br />

      {/* Listing Details Section */}
      {listing ? (
        <Card>
          <Card.Body>
            <ListingDetails listing={listing} />
          </Card.Body>
        </Card>
      ) : (
        <p>Listing not available</p>
      )}
    </>
  );
}

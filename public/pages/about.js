import { Card } from 'react-bootstrap';  // Import Card from react-bootstrap
import Link from 'next/link';  // Import Link from Next.js
import PageHeader from '@/components/PageHeader';  // Import PageHeader component
import ListingDetails from '@/components/ListingDetails';  // Import ListingDetails component

// Fetch data during build time using getStaticProps
export async function getStaticProps() {
  const res = await fetch('https://web422-iu669sv7i-alexandrus-projects-cb24e18f.vercel.app/api/listings/10030955');  // Using the live API URL
  const data = await res.json();

  // Return the fetched data as props
  return {
    props: {
      listing: data,  // The data from the API
    },
  };
}

export default function About({ listing }) {
  return (
    <div>
      {/* Page Header Component */}
      <PageHeader text="About the Developer - John Doe" />

      {/* Developer Info */}
      <Card className="bg-light">
        <Card.Body>
          <p>
            Hi, I'm Alexandru, a passionate developer with a love for building web applications. I specialize in building
            user-friendly, responsive websites using technologies like Next.js, React, and Node.js.
          </p>
          <p>
            I'm always learning and improving my skills, and I enjoy working on projects that challenge me to think outside the box.
          </p>
        </Card.Body>
      </Card>
      <br />

      {/* Link to Listing */}
      <Link href={`/listing/${listing.id}`} passHref legacyBehavior>
        <a>View the listing</a>
      </Link>

      {/* Listing Details Component */}
      <ListingDetails listing={listing} />
    </div>
  );
}

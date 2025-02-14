import { Card } from 'react-bootstrap';
import Link from 'next/link';
import PageHeader from '@/components/PageHeader';
import ListingDetails from '@/components/ListingDetails';

export async function getStaticProps() {
  try {
    const res = await fetch('https://web422-zxergpdbe-alexandrus-projects-cb24e18f.vercel.app/api/listings/10030955');
    const data = await res.json();

    return {
      props: {
        listing: data,
      },
    };
  } catch (error) {
    return {
      props: {
        listing: null,
      },
    };
  }
}

export default function About({ listing }) {
  if (!listing) {
    return <p>Failed to load listing data.</p>;
  }

  return (
    <div>
      <PageHeader text="About the Developer - Alexandru Zaporojan" />

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

      {/* Link to the specific listing */}
      <Link href={`/listing/${listing._id}`} passHref>
        <a>View the listing</a>
      </Link>

      {/* Display the ListingDetails component */}
      <ListingDetails listing={listing} />
    </div>
  );
}

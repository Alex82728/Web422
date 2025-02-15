import { useState, useEffect } from 'react';
import useSWR from 'swr';
import Pagination from 'react-bootstrap/Pagination';
import Accordion from 'react-bootstrap/Accordion';
import ListingDetails from '@/components/ListingDetails';
import PageHeader from '@/components/PageHeader';

export default function Home() {
  const [page, setPage] = useState(1);
  const [pageData, setPageData] = useState([]);

  const { data, error } = useSWR(
    `https://web422-zxergpdbe-alexandrus-projects-cb24e18f.vercel.app/api/listings?page=${page}&perPage=10`
  );

  useEffect(() => {
    if (data) {
      setPageData(data);
    }
  }, [data]);

  const previous = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const next = () => {
    setPage(page + 1);
  };

  return (
    <div>
      <PageHeader text="Browse Listings : Sorted by Number of Ratings" />
      {error ? (
        <p>Failed to load data</p>
      ) : (
        <Accordion>
          {pageData.map((listing) => (
            <Accordion.Item eventKey={listing._id.toString()} key={listing._id}>
              <Accordion.Header>
                <strong>{listing.name}</strong> - {listing.address.street}
              </Accordion.Header>
              <Accordion.Body>
                <ListingDetails listing={listing} />
              </Accordion.Body>
            </Accordion.Item>
          ))}
        </Accordion>
      )}
      <Pagination>
        <Pagination.Prev onClick={previous} />
        <Pagination.Item>{page}</Pagination.Item>
        <Pagination.Next onClick={next} />
      </Pagination>
    </div>
  );
}

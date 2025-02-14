// pages/index.js
import useSWR from 'swr';
import { useState, useEffect } from 'react';
import { Pagination, Accordion } from 'react-bootstrap';
import ListingDetails from '@/components/ListingDetails';
import PageHeader from '@/components/PageHeader';

export default function Home() {
  const [page, setPage] = useState(1);
  const [pageData, setPageData] = useState([]);

  const { data, error } = useSWR(`/api/listings?page=${page}&perPage=10`);

  useEffect(() => {
    if (data) setPageData(data);
  }, [data]);

  const previous = () => setPage((prev) => Math.max(prev - 1, 1));
  const next = () => setPage((prev) => prev + 1);

  return (
    <div>
      <PageHeader text="Browse Listings : Sorted by Number of Ratings" />
      <Accordion>
        {pageData.map((listing) => (
          <Accordion.Item eventKey={listing._id} key={listing._id}>
            <Accordion.Header>
              <strong>{listing.name}</strong> - {listing.address.street}
            </Accordion.Header>
            <Accordion.Body>
              <ListingDetails listing={listing} />
            </Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
      <Pagination className="justify-content-center">
        <Pagination.Prev onClick={previous} />
        <Pagination.Item>{page}</Pagination.Item>
        <Pagination.Next onClick={next} />
      </Pagination>
    </div>
  );
}

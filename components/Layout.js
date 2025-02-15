import { SWRConfig } from 'swr';
import MainNav from './MainNav';

const fetcher = async (...args) => {
  const response = await fetch(...args);

  if (!response.ok) {
    throw new Error(`Request failed with status: ${response.status}`);
  }

  return response.json();
};

export default function Layout({ children }) {
  return (
    <SWRConfig value={{ fetcher }}>
      <MainNav />
      <div className="container mt-5 pt-5">{children}</div>
    </SWRConfig>
  );
}

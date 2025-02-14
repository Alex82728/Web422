import Layout from "../components/Layout"; // Ensure the correct import path
import { SWRConfig } from "swr";  
import "../styles/main.css"; // Ensure styles are globally applied
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS globally

// Fetcher function to handle data fetching
const fetcher = async (url) => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Request failed with status: ${response.status}`);
  }
  return response.json();
};

function MyApp({ Component, pageProps }) {
  return (
    <SWRConfig value={{ fetcher }}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SWRConfig>
  );
}

export default MyApp;

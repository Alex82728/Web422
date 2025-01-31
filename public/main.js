// Global variables
let page = 1; // Default page number
const perPage = 10; // Number of listings per page
let searchName = null; // Search query, null by default

// Function to load listings data
function loadListingsData() {
  let url = `/api/listings?page=${page}&perPage=${perPage}`;

  // If searchName is provided, include it in the query string
  if (searchName) {
    url += `&name=${searchName}`;
  }

  // Fetch listings data
  fetch(url)
    .then(res => {
      return res.ok ? res.json() : Promise.reject(res.status);
    })
    .then(data => {
      // Get the tbody element where we'll insert the rows
      const listingsTableBody = document.querySelector('#listingsTable tbody');
      listingsTableBody.innerHTML = ''; // Clear existing rows

      // Check if listings are available
      if (data.listings && data.listings.length) {
        // Generate table rows dynamically from the data
        data.listings.forEach(listing => {
          const tr = document.createElement('tr');
          tr.setAttribute('data-id', listing._id);

          // Create table columns for each listing
          tr.innerHTML = `
            <td>${listing.name}</td>
            <td>${listing.room_type}</td>
            <td>${listing.address?.street || 'N/A'}</td>
            <td>${listing.summary || 'No summary available.'}<br><br>
              <strong>Accommodates:</strong> ${listing.accommodates}<br>
              <strong>Rating:</strong> ${listing.review_scores?.review_scores_rating || 'N/A'} (${listing.number_of_reviews} Reviews)
            </td>
          `;

          // Append the row to the table body
          listingsTableBody.appendChild(tr);

          // Add a click event to open the modal when clicking on a row
          tr.addEventListener('click', () => showModal(listing._id));
        });
      } else {
        // If no listings are available, show "No data available"
        const tr = document.createElement('tr');
        tr.innerHTML = `<td colspan="4"><strong>No data available</strong></td>`;
        listingsTableBody.appendChild(tr);

        // If the current page > 1, go back to the previous page
        if (page > 1) {
          page--;
        }
      }

      // Update the current page number displayed
      document.getElementById('current-page').textContent = page;
    })
    .catch(err => {
      // Handle errors (e.g., network issues, 404, 500)
      console.error('Error fetching listings:', err);
    });
}

// Show modal with listing details
function showModal(listingId) {
  // Make a request for detailed data for the clicked listing
  fetch(`/api/listings/${listingId}`)
    .then(res => {
      return res.ok ? res.json() : Promise.reject(res.status);
    })
    .then(listing => {
      const modalTitle = document.getElementById('detailsModalLabel');
      const modalBody = document.querySelector('#detailsModal .modal-body');

      // Set modal content
      modalTitle.textContent = listing.name;
      modalBody.innerHTML = `
        <img id="photo" onerror="this.onerror=null;this.src = 'https://placehold.co/600x400?text=Photo+Not+Available'" class="img-fluid w-100" src="${listing.images?.picture_url || 'https://placehold.co/600x400?text=Photo+Not+Available'}"><br><br>
        <p>${listing.neighborhood_overview || 'No neighborhood overview available.'}</p>
        <p><strong>Price:</strong> $${listing.price.toFixed(2)}</p>
        <p><strong>Room:</strong> ${listing.room_type}</p>
        <p><strong>Bed:</strong> ${listing.bed_type} (${listing.beds})</p>
      `;

      // Show the modal
      const modal = new bootstrap.Modal(document.getElementById('detailsModal'));
      modal.show();
    })
    .catch(err => {
      console.error('Error fetching listing details:', err);
    });
}

// Initialize and load listings when the page loads
document.addEventListener('DOMContentLoaded', () => {
  loadListingsData(); // Initial data load

  // Click event for "previous page" pagination button
  document.getElementById('previous-page').addEventListener('click', () => {
    if (page > 1) {
      page--; // Decrease page number
      loadListingsData(); // Refresh data for the previous page
    }
  });

  // Click event for "next page" pagination button
  document.getElementById('next-page').addEventListener('click', () => {
    page++; // Increase page number
    loadListingsData(); // Refresh data for the next page
  });

  // Submit event for the "searchForm"
  document.getElementById('searchForm').addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent default form submission
    searchName = document.getElementById('name').value.trim() || null; // Set the search query
    page = 1; // Reset to the first page
    loadListingsData(); // Load listings with the new search query
  });

  // Click event for "clearForm" button
  document.getElementById('clearForm').addEventListener('click', () => {
    document.getElementById('name').value = ''; // Reset the name field
    searchName = null; // Reset the search query
    loadListingsData(); // Load listings with no search filter
  });
});

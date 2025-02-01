let listingData = [];
let page = 1;
const perPage = 10;

// Table template using Underscore.js
const listingTableTemplate = _.template(`
  <% _.forEach(listingData, function(listing) { %>
    <tr data-id="<%- listing._id %>">
      <td><%- listing.name %></td>
      <td><%- listing.property_type %></td>
      <td><%- listing.location ? listing.location.country : 'N/A' %></td>
      <td><%- listing.summary %></td>
    </tr>
  <% }); %>
`);

// Function to load listings from the API
function loadListingData() {
  fetch(`http://localhost:8080/api/listings?page=${page}&perPage=${perPage}`)
    .then((response) => response.json())
    .then((data) => {
      listingData = data;
      const rows = listingTableTemplate({ listingData });
      document.querySelector("#listing-table tbody").innerHTML = rows;
      document.querySelector("#current-page").textContent = page;
    })
    .catch((error) => {
      console.error('Error fetching listings:', error);
    });
}

// Clicked row event to show more details (you can customize this)
document.querySelector("#listing-table tbody").addEventListener("click", function (e) {
  if (e.target.tagName === "TD") {
    const row = e.target.closest("tr");
    const listingId = row.getAttribute("data-id");
    const clickedListing = listingData.find((listing) => listing._id === listingId);
    
    // Display the details in a modal (assuming you have a modal setup)
    document.querySelector("#modal-title").textContent = clickedListing.name;
    document.querySelector("#modal-body").innerHTML = `
      <p><strong>Price:</strong> $${clickedListing.price}</p>
      <p><strong>Room Type:</strong> ${clickedListing.room_type}</p>
      <p><strong>Location:</strong> ${clickedListing.address ? clickedListing.address.country : 'N/A'}</p>
      <p><strong>Summary:</strong> ${clickedListing.summary}</p>
    `;
    
    $('#listing-modal').modal('show');  // Assuming you are using Bootstrap modal
  }
});

// Load listings on page load
document.addEventListener('DOMContentLoaded', loadListingData);

// Pagination functionality
document.querySelector("#previous-page").addEventListener("click", function () {
  if (page > 1) {
    page--;
    loadListingData();
  }
});

document.querySelector("#next-page").addEventListener("click", function () {
  page++;
  loadListingData();
});

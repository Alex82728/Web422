let listingData = [];
let page = 1;
const perPage = 10;

// Table template using Underscore.js
const listingTableTemplate = _.template(`
  <% _.forEach(listingData, function(listing) { %>
    <tr data-id="<%- listing._id ? listing._id : '' %>">
      <td><%- listing.name %></td>
      <td><%- listing.property_type %></td>
      <td><%- listing.address && listing.address.country ? listing.address.country : 'N/A' %></td>
      <td><%- listing.summary %></td>
    </tr>
  <% }); %>
`);

// Function to load listings from the API
function loadListingData() {
  console.log("Fetching total listing count...");

  fetch("http://localhost:8080/api/listings/count")
    .then((response) => response.json())
    .then((countData) => {
      console.log("API response for count:", countData);

      if (countData && typeof countData.count === "number") {
        const totalListings = countData.count;
        const totalPages = Math.ceil(totalListings / perPage);
        updatePaginationControls(totalPages);

        console.log(`Fetching listings for page ${page}...`);
        return fetch(`http://localhost:8080/api/listings?page=${page}&perPage=${perPage}`);
      } else {
        throw new Error("Invalid count data received.");
      }
    })
    .then((response) => response.json())
    .then((data) => {
      console.log("API response for listings:", data);

      if (Array.isArray(data) && data.length > 0) {
        listingData = data;
        const rows = listingTableTemplate({ listingData });
        document.querySelector("#listing-table tbody").innerHTML = rows;
        document.querySelector("#current-page").textContent = `Page ${page}`;
      } else {
        console.warn("No listings found.");
        document.querySelector("#listing-table tbody").innerHTML =
          "<tr><td colspan='4'>No listings available</td></tr>";
      }
    })
    .catch((error) => {
      console.error("Error fetching listings:", error);
    });
}

// Function to update pagination controls
function updatePaginationControls(totalPages) {
  document.querySelector("#previous-page").disabled = page <= 1;
  document.querySelector("#next-page").disabled = page >= totalPages;
}

// Pagination buttons
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

// Search functionality
document.querySelector("#searchBar").addEventListener("input", function () {
  const searchTerm = this.value.toLowerCase();
  console.log("Search term:", searchTerm);

  const filteredListings = listingData.filter((listing) => {
    return (
      listing.name.toLowerCase().includes(searchTerm) ||
      (listing.property_type && listing.property_type.toLowerCase().includes(searchTerm)) ||
      (listing.address && listing.address.country && listing.address.country.toLowerCase().includes(searchTerm)) ||
      (listing.summary && listing.summary.toLowerCase().includes(searchTerm))
    );
  });

  console.log("Filtered Listings:", filteredListings);

  const rows = listingTableTemplate({ listingData: filteredListings });
  document.querySelector("#listing-table tbody").innerHTML = rows;
});

// Click event to handle listing selection
document.querySelector("#listing-table tbody").addEventListener("click", function (e) {
  if (e.target.tagName === "TD") {
    const row = e.target.closest("tr");
    const listingId = row.getAttribute("data-id");

    console.log("Clicked row ID:", listingId); // Debugging

    if (!listingId) {
      console.warn("Row clicked but no valid ID found.");
      return;
    }

    // Fetch listing details...
    fetch(`http://localhost:8080/api/listings/${listingId}`)
      .then((response) => response.json())
      .then((data) => {
        console.log("Listing details:", data);
        alert(`Listing: ${data.name}\nType: ${data.property_type}\nLocation: ${data.address.country}`);
      })
      .catch((error) => {
        console.error("Error fetching listing details:", error);
      });
  }
});

// Load listings on page load
document.addEventListener("DOMContentLoaded", loadListingData);

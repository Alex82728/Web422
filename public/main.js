const listingsTableBody = document.querySelector("#listingsTable tbody");
const previousPageBtn = document.querySelector("#previous-page");
const nextPageBtn = document.querySelector("#next-page");
const currentPageDisplay = document.querySelector("#current-page");
const searchForm = document.querySelector("#searchForm");
const clearFormBtn = document.querySelector("#clearForm");

let currentPage = 1;
const perPage = 10; // Number of listings per page
let searchName = null; // Stores search query

// Function to fetch listings and populate table
async function fetchListings() {
    try {
        let url = `/api/listings?page=${currentPage}&perPage=${perPage}`;
        if (searchName) {
            url += `&name=${encodeURIComponent(searchName)}`; // Append search query
        }

        const response = await fetch(url);
        const listings = await response.json();

        // Clear previous table rows
        listingsTableBody.innerHTML = "";

        // Check if listings are empty
        if (listings.length === 0) {
            listingsTableBody.innerHTML = "<tr><td colspan='4' class='text-center'>No listings found.</td></tr>";
            return;
        }

        // Populate the table with new data
        listings.forEach(listing => {
            const row = document.createElement("tr");
            row.setAttribute("data-id", listing._id);
            row.innerHTML = `
                <td>${listing.name || "No Name"}</td>
                <td>${listing.room_type || "N/A"}</td>
                <td>${listing.address?.street || "Unknown Location"}</td>
                <td>${listing.summary || "No Summary Available"}</td>
            `;
            listingsTableBody.appendChild(row);

            // Add click event to open modal
            row.addEventListener("click", () => fetchListingDetails(listing._id));
        });

        // Update current page display
        currentPageDisplay.textContent = currentPage;
    } catch (error) {
        console.error("Error fetching listings:", error);
    }
}

// Function to fetch & display individual listing details in modal
async function fetchListingDetails(listingId) {
    try {
        const response = await fetch(`/api/listings/${listingId}`);
        const listing = await response.json();

        document.querySelector("#modal-title").textContent = listing.name || "Listing Details";
        document.querySelector(".modal-body").innerHTML = `
            <img id="photo" onerror="this.onerror=null;this.src='https://placehold.co/600x400?text=Photo+Not+Available'" 
                 class="img-fluid w-100" src="${listing.images?.picture_url || 'https://placehold.co/600x400?text=Photo+Not+Available'}"><br><br>
            <p>${listing.neighborhood_overview || "No neighborhood overview available."}</p>
            <strong>Price:</strong> $${(listing.price || 0).toFixed(2)}<br>
            <strong>Room:</strong> ${listing.room_type || "N/A"}<br>
            <strong>Bed:</strong> ${listing.bed_type || "N/A"} (${listing.beds || "?"})<br>
        `;

        // Show modal
        new bootstrap.Modal(document.getElementById("detailsModal")).show();
    } catch (error) {
        console.error("Error fetching listing details:", error);
    }
}

// Pagination controls
previousPageBtn.addEventListener("click", () => {
    if (currentPage > 1) {
        currentPage--;
        fetchListings();
    }
});

nextPageBtn.addEventListener("click", () => {
    currentPage++;
    fetchListings();
});

// Handle search form submission
searchForm.addEventListener("submit", (event) => {
    event.preventDefault(); // Prevent default form submission
    searchName = document.querySelector("#name").value.trim(); // Get search input
    currentPage = 1; // Reset to page 1
    fetchListings(); // Fetch new listings based on search
});

// Handle clear form button click
clearFormBtn.addEventListener("click", () => {
    document.querySelector("#name").value = ""; // Clear input field
    searchName = null; // Reset search query
    fetchListings(); // Reload full listing data
});

// Initial Fetch
fetchListings();

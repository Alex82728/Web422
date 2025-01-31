document.addEventListener("DOMContentLoaded", function () {
    const API_URL = "https://your-vercel-deployment-url/api/listings"; // Change to your actual API endpoint
    const listingsTable = document.getElementById("listingsTable").getElementsByTagName("tbody")[0];
    const searchForm = document.getElementById("searchForm");
    const nameInput = document.getElementById("name");
    const clearForm = document.getElementById("clearForm");

    // Function to fetch and display listings
    async function fetchListings(name = "") {
        try {
            const response = await fetch(`${API_URL}?name=${encodeURIComponent(name)}`);
            if (!response.ok) throw new Error("Failed to fetch data");
            
            const data = await response.json();
            listingsTable.innerHTML = ""; // Clear table before adding new rows

            data.forEach(listing => {
                const row = listingsTable.insertRow();
                row.innerHTML = `
                    <td>${listing.name}</td>
                    <td>${listing.type}</td>
                    <td>${listing.location}</td>
                    <td>${listing.summary}</td>
                `;

                // Open modal with details on row click
                row.addEventListener("click", () => showListingDetails(listing));
            });
        } catch (error) {
            console.error("Error fetching listings:", error);
        }
    }

    // Handle search form submission
    searchForm.addEventListener("submit", function (event) {
        event.preventDefault();
        fetchListings(nameInput.value.trim());
    });

    // Handle clearing the search form
    clearForm.addEventListener("click", function () {
        nameInput.value = "";
        fetchListings();
    });

    // Placeholder function for modal (implement later)
    function showListingDetails(listing) {
        alert(`Clicked on: ${listing.name}\nDetails: ${JSON.stringify(listing, null, 2)}`);
    }

    // Initial fetch when page loads
    fetchListings();
});

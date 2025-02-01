let listingData = [];

// Page number
let page = 1;

// Items per page
const perPage = 10;

// Table template
const listingTableTemplate = _.template(
    `<% _.forEach(listingData, function(listing) { %>
        <tr data-id=<%- listing._id %>>
            <td><%- listing.customer.email %></td>
            <td><%- listing.storeLocation %></td>
            <td><%- listing.items.length %></td>
            <td><%- moment.utc(listing.saleDate).local().format("LLLL") %></td>
        </tr>
    <% }); %>`
);

// Modal template
const listingModalBodyTemplate = _.template(
    `<h4>Customer</h4>
    <strong>email:</strong> <%- obj.customer.email %><br>
    <strong>age:</strong> <%- obj.customer.age %><br>
    <strong>satisfaction:</strong> <%- obj.customer.satisfaction %> / 5
    <br><br>
    <h4>Items: $<%- obj.total.toFixed(2) %></h4>
    <table class="table">
        <thead>
            <tr>
                <th>Product Name</th>
                <th>Quantity</th>
                <th>Price</th>
            </tr>
        </thead>
        <tbody>
            <% _.forEach(obj.items, function(listing) { %>
                <tr data-id=<%- listing._id %>>
                    <td><%- listing.name %></td>
                    <td><%- listing.quantity %></td>
                    <td>$<%- listing.price %></td>
                </tr>
            <% }); %>
        </tbody>
    </table>`
);

// Function to populate listingData array
function loadListingData() {
    fetch(`https://arnin-web422-ass1.herokuapp.com/api/listings?page=${page}&perPage=${perPage}`)
        .then((response) => {
            return response.json();
        })
        .then((myJson) => {
            listingData = myJson;
            let rows = listingTableTemplate(listingData);
            $("#listing-table tbody").html(rows);
            $("#current-page").html(page);
        })
}

// Clicked row
$("#listing-table tbody").on("click", "tr", function(e) {
    let clickedRow = $(this).attr("data-id");
    let clickedListing = listingData.find(({ _id }) => _id == clickedRow);

    // Add property total to clicked object
    clickedListing.total = 0;

    // For loop to sum the total of the listing, price * quantity
    for (let i = 0; i < clickedListing.items.length; i++) {
        clickedListing.total += clickedListing.items[i].price * clickedListing.items[i].quantity;
    }

    $("#listing-modal h4").html(`Listing: ${clickedListing._id}`);
    $("#modal-body").html(listingModalBodyTemplate(clickedListing));

    $('#listing-modal').modal({
        backdrop: 'static',
        keyboard: false
    });
});

// Previous page button
$("#previous-page").on("click", function(e) {
    if (page > 1) {
        page--;
    }
    loadListingData();
});

// Next page button
$("#next-page").on("click", function(e) {
    page++;
    loadListingData();
});

// Document is ready
$(function() {

    // Load data into page
    loadListingData();
});

// // document.getElementById('toggle-btn').addEventListener('click', function() {
// //     var sidebar = document.getElementById('sidebar');
// //     var content = document.getElementById('content');
// //     if (sidebar.style.left === '0px') {
// //         sidebar.style.left = '-250px';
// //         content.style.marginLeft = '0';
// //     } else {
// //         sidebar.style.left = '0px';
// //         content.style.marginLeft = '250px';
// //     }
// // });

// // script.js

// document.addEventListener('DOMContentLoaded', function() {
//     // Example data
//     const salesData = {
//         totalSales: 12345.67,
//         numTransactions: 150,
//         avgSaleValue: 82.97,
//         topSalesAgent: "Alice Johnson"
//     };

//     // Update the card contents
//     document.getElementById('total-sales').textContent = `$${salesData.totalSales.toFixed(2)}`;
//     document.getElementById('num-transactions').textContent = salesData.numTransactions;
//     document.getElementById('avg-sale-value').textContent = `$${salesData.avgSaleValue.toFixed(2)}`;
//     document.getElementById('top-sales-agent').textContent = salesData.topSalesAgent;

//     // Search functionality (basic example)
//     const searchInput = document.getElementById('search');
//     searchInput.addEventListener('input', function() {
//         const query = searchInput.value.toLowerCase();
//         // Simple example: just log the query
//         console.log('Search query:', query);
//     });
// });


function performSearch() {
    var searchTerm = document.getElementById('search-input').value;
    alert('You searched for: ' + searchTerm);
    // Here you can add your actual search functionality
    }

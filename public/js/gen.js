/**
 * Generates a receipt from form data and redirects to receipt.html.
 */
function generateReceipt() {
    // Get values from form inputs
    const salesAgent = document.getElementById('salesAgent').value;
    const date = document.getElementById('date').value;
    const customerName = document.getElementById('customerName').value;
    const transactionId = document.getElementById('transactionId').value;
    let subtotal = 0;

    const items = document.getElementById('items').value.split('\n').map(item => {
        const [name, quantity, price] = item.split(',');
        let finalPrice = price.trim() * quantity
       
        subtotal += finalPrice;
        return { name: name.trim(), quantity: quantity.trim(), price: price.trim(), amount: finalPrice };
    });


    // Calculate tax and total
    const taxRate = 0.00; // 0%
    const tax = subtotal * taxRate;
    const total = subtotal + tax;


    // Check if all required fields are filled
    if (salesAgent && date && customerName && transactionId && items.length > 0) {
        // Store data in localStorage
        localStorage.setItem('receiptData', JSON.stringify({ salesAgent, date, customerName, transactionId, items, tax, total, subtotal }));
        // Redirect to receipt page
        window.location.href = 'receipt';
    } else {
        alert('Please fill out all fields correctly.');
    }
}

// // form validation for the sales form
// document.getElementById('receiptForm').addEventListener('submit', function(event) {
//     let isValid = true;
//     // Clear previous error messages
//     document.querySelectorAll('.error').forEach(el => el.textContent = '');

//     // Sales Agent Name
//     const salesAgent = document.getElementById('salesAgent').value;
//     if (!/^[A-Za-z0-9]{2,}$/.test(salesAgent)) {
//         document.getElementById('salesAgentError').textContent = 'Sales agent name must be alphanumeric and at least 2 characters long.';
//         isValid = false;
//     }

//     // Transaction ID
//     const transactionId = document.getElementById('transactionId').value;
//     if (transactionId.trim() === '') {
//         document.getElementById('transactionIdError').textContent = 'Transaction ID is required.';
//         isValid = false;
//     }

//     // Date and Time
//     const date = document.getElementById('date').value;
//     if (!date) {
//         document.getElementById('dateError').textContent = 'Date and Time are required.';
//         isValid = false;
//     }

//     // Customer Name
//     const customerName = document.getElementById('customerName').value;
//     if (!/^[A-Za-z0-9]{2,}$/.test(customerName)) {
//         document.getElementById('customerNameError').textContent = 'Customer name must be alphanumeric and at least 2 characters long.';
//         isValid = false;
//     }

//     // Items
//     const items = document.getElementById('items').value;
//     if (items.trim() === '') {
//         document.getElementById('itemsError').textContent = 'Items field cannot be empty.';
//         isValid = false;
//     }

//     // Amount Paid
//     const amountPaid = document.getElementById('amountPaid').value;
//     if (!/^\d{5,}$/.test(amountPaid)) {
//         document.getElementById('amountPaidError').textContent = 'Amount paid must be at least 5 characters long and numeric.';
//         isValid = false;
//     }

//     // If any validation fails, prevent form submission
//     if (!isValid) {
//         event.preventDefault();
//     }
// });

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
        window.location.href = 'bill';
    } else {
        alert('Please fill out all fields correctly.');
    }
}

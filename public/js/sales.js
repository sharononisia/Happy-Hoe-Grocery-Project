
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

document.addEventListener('DOMContentLoaded', () => {
    const itemsInput = document.getElementById('items');
    const totalInput = document.getElementById('total');
    
    itemsInput.addEventListener('input', calculateTotal);

    function calculateTotal() {
        const itemsText = itemsInput.value;
        const lines = itemsText.split('\n');
        let total = 0;

        lines.forEach(line => {
            const parts = line.split(',');
            if (parts.length === 3) {
                const quantity = parseFloat(parts[1].trim());
                const price = parseFloat(parts[2].trim());

                if (!isNaN(quantity) && !isNaN(price)) {
                    total += quantity * price;
                }
            }
        });

        totalInput.value = total.toFixed(2);
    }
});

//form validation
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('receiptForm');
    
    form.addEventListener('submit', function(event) {
        let isValid = true;
        
        // Clear previous errors
        clearErrors();
        
        // Validate Sales Agent
        const salesAgent = document.getElementById('salesAgent');
        if (!salesAgent.value.trim()) {
            showError('salesAgentError', 'Sales Agent Name is required.', salesAgent);
            isValid = false;
        }
        
        // Validate Transaction ID
        const transactionId = document.getElementById('transactionId');
        if (!transactionId.value.trim()) {
            showError('transactionIdError', 'Transaction ID is required.', transactionId);
            isValid = false;
        }
        
        // Validate Date
        const date = document.getElementById('date');
        if (!date.value) {
            showError('dateError', 'Date and Time are required.', date);
            isValid = false;
        }
        
        // Validate Customer Name
        const customerName = document.getElementById('customerName');
        if (!customerName.value.trim()) {
            showError('customerNameError', 'Customer Name is required.', customerName);
            isValid = false;
        }
        
        // Validate Items
        const items = document.getElementById('items');
        if (!items.value.trim()) {
            showError('itemsError', 'Items field is required.', items);
            isValid = false;
        }
        
        // Validate Total
        const total = document.getElementById('total');
        if (!total.value.trim() || isNaN(total.value) || parseFloat(total.value) <= 0) {
            showError('totalError', 'Total must be a positive number.', total);
            isValid = false;
        }
        
        if (!isValid) {
            event.preventDefault(); // Prevent form submission if invalid
        }
    });
    
    function showError(errorId, message, field) {
        const errorSpan = document.getElementById(errorId);
        if (errorSpan) {
            errorSpan.textContent = message;
        }
        if (field) {
            field.classList.add('error');
        }
    }
    
    function clearErrors() {
        const errorSpans = document.querySelectorAll('.error');
        errorSpans.forEach(span => {
            span.textContent = '';
        });
        const errorFields = document.querySelectorAll('input.error, textarea.error');
        errorFields.forEach(field => {
            field.classList.remove('error');
        });
    }
});


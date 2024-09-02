function calculateTotalCost() {
    // Get the values of quantity and cost per kg
    const quantity = parseFloat(document.getElementById('quantity').value) || 0;
    const costPerKg = parseFloat(document.getElementById('theCostPerKg').value) || 0;
    
    // Calculate the total cost
    const totalCost = quantity * costPerKg;
    
    // Update the total cost input field
    document.getElementById('theTotalCost').value = totalCost.toFixed(2);
  }

  window.onload = function() {
    // Add event listeners to input fields
    document.getElementById('quantity').addEventListener('input', calculateTotalCost);
    document.getElementById('theCostPerKg').addEventListener('input', calculateTotalCost);
  }
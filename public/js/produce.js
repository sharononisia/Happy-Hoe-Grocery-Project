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

  function showError(fieldId, message) {
    const errorSpan = document.getElementById(fieldId + 'Error');
    const inputField = document.getElementById(fieldId);
    errorSpan.textContent = message;
    errorSpan.style.display = 'block';
    inputField.classList.add('error-border');
  }
  
  function clearError(fieldId) {
    const errorSpan = document.getElementById(fieldId + 'Error');
    const inputField = document.getElementById(fieldId);
    errorSpan.style.display = 'none';
    inputField.classList.remove('error-border');
  }
  
  function validateForm() {
    let isValid = true;
  
    // Get form values
    const produce = document.getElementById('produce').value;
    const typeOfProduce = document.getElementById('typeOfProduce').value;
    const date = document.getElementById('date').value;
    const timeOfProduce = document.getElementById('timeOfProduce').value;
    const quantity = document.getElementById('quantity').value.trim();
    const theCostPerKg = document.getElementById('theCostPerKg').value.trim();
    const theTotalCost = document.getElementById('theTotalCost').value.trim();
    const nameOfDealer = document.getElementById('nameOfDealer').value.trim();
    const contact = document.getElementById('contact').value.trim();
    const thePriceToBeSoldAt = document.getElementById('thePriceToBeSoldAt').value.trim();
    
    // Produce validation (must be selected)
    clearError('produce');
    if (produce === '') {
      showError('produce', 'Please select a produce.');
      isValid = false;
    }
  
    // Type of Produce validation (alphabets only, at least 2 characters)
    clearError('typeOfProduce');
    if (typeOfProduce.length < 1 || !/^[a-zA-Z]+$/.test(typeOfProduce)) {
      showError('typeOfProduce', 'Type of produce must contain alphabets.');
      isValid = false;
    }
  
    // Date validation (must not be empty)
    clearError('date');
    if (!date) {
      showError('date', 'Please select a date.');
      isValid = false;
    }
  
    // Time validation (must not be empty)
    clearError('timeOfProduce');
    if (!timeOfProduce) {
      showError('timeOfProduce', 'Please select a time.');
      isValid = false;
    }
  
    // Quantity validation (numeric, at least 3 characters)
    clearError('quantity');
    if (isNaN(quantity) || quantity.length < 2) {
      showError('quantity', 'Tonnage must be a number and at least 2 characters.');
      isValid = false;
    }
  
    // Cost per kg validation (numeric, not empty)
    clearError('theCostPerKg');
    if (isNaN(theCostPerKg) || theCostPerKg.length < 4) {
      showError('theCostPerKg', 'Cost per kg must be a number and at least 4 characters.');
      isValid = false;
    }
  
    // Total cost validation (numeric, not empty)
    clearError('theTotalCost');
    if (isNaN(theTotalCost) || theTotalCost.length < 4) {
      showError('theTotalCost', 'Total cost must be a number and at least 4 characters.');
      isValid = false;
    }
  
    // Name of dealer validation (alpha-numeric, at least 1 characters)
    clearError('nameOfDealer');
    if (nameOfDealer.length < 1 || !/^[a-zA-Z0-9\s]+$/.test(nameOfDealer)) {
      showError('nameOfDealer', 'Dealer name must be at least 1 characters and alphanumeric.');
      isValid = false;
    }
  
    // Contact validation (valid phone number format)
    clearError('contact');
    if (!/^07\d{8}$/.test(contact)) {
      showError('contact', 'Please enter a valid phone number .');
      isValid = false;
    }
  
    // Price to be sold at validation (must be numeric)
    clearError('thePriceToBeSoldAt');
    if (isNaN(thePriceToBeSoldAt) || thePriceToBeSoldAt.length < 1) {
      showError('thePriceToBeSoldAt', 'Price to be sold at must be a number.');
      isValid = false;
    }
  
    return isValid;
  }
  
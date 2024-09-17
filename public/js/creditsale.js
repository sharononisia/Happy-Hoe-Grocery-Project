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
    errorSpan.textContent = '';
    inputField.classList.remove('error-border');
  }
  
  function validateForm() {
    let isValid = true;
  
    // Get form values
    const buyer = document.getElementById('buyer').value.trim();
    const nin = document.getElementById('nin').value.trim();
    const location = document.getElementById('location').value.trim();
    const contact = document.getElementById('contact').value.trim();
    const amountDue = document.getElementById('amountDue').value.trim();
    const salesAgentName = document.getElementById('salesAgentName').value.trim();
    const dueDate = document.getElementById('dueDate').value;
    const theProduceName = document.getElementById('theProduceName').value.trim();
    const typeOfProduce = document.getElementById('typeOfProduce').value;
    const quantity = document.getElementById('quantity').value.trim();
    const dispatchDate = document.getElementById('date').value;
  
    // Buyer validation
    clearError('buyer');
    if (buyer.length < 2 || !/^[a-zA-Z0-9\s]+$/.test(buyer)) {
      showError('buyer', "Name of Buyer must be at least 2 characters and alphanumeric.");
      isValid = false;
    }
  
    // NIN validation
    // clearError('nin');
    // if (!/^[A-Z0-9]{13}$/.test(nin)) {
    //   showError('nin', "Please enter a valid NIN (13 alphanumeric characters).");
    //   isValid = false;
    // }
  
    // Location validation
    clearError('location');
    if (location.length < 2 || !/^[a-zA-Z0-9\s]+$/.test(location)) {
      showError('location', "Location must be at least 2 characters and alphanumeric.");
      isValid = false;
    }
  
    // Contact validation
    clearError('contact');
    if (!/^07\d{8}$/.test(contact)) {
      showError('contact', "Please enter a valid contact number (e.g., 0701234567).");
      isValid = false;
    }
  
    // Amount Due validation
    clearError('amountDue');
    if (amountDue.length < 5 || isNaN(amountDue)) {
      showError('amountDue', "Amount Due must be a number and at least 5 characters long.");
      isValid = false;
    }
  
    // Sales Agent Name validation
    clearError('salesAgentName');
    if (salesAgentName.length < 2 || !/^[a-zA-Z0-9\s]+$/.test(salesAgentName)) {
      showError('salesAgentName', "Sales Agent Name must be at least 2 characters and alphanumeric.");
      isValid = false;
    }
  
    // Due Date validation
    clearError('dueDate');
    if (!dueDate) {
      showError('dueDate', "Please select a Due Date.");
      isValid = false;
    }
  
    // The Produce Name validation
    clearError('theProduceName');
    if (theProduceName.length < 2 || !/^[a-zA-Z0-9\s]+$/.test(theProduceName)) {
      showError('theProduceName', "The Produce Name must be at least 2 characters and alphanumeric.");
      isValid = false;
    }
  
    // Type of Produce validation
    clearError('typeOfProduce');
    if (!typeOfProduce) {
      showError('typeOfProduce', "Please select a Type of Produce.");
      isValid = false;
    }
  
    // Quantity validation
    clearError('quantity');
    if (isNaN(quantity) || quantity <= 0) {
      showError('quantity', "Please enter a valid tonnage in Kgs.");
      isValid = false;
    }
  
    // Date of Dispatch validation
    clearError('date');
    if (!dispatchDate) {
      showError('date', "Please select a Date of Dispatch.");
      isValid = false;
    }
  
    // If the form is invalid, prevent submission
    return isValid;
  }
  
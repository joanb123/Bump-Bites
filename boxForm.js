// Get form data from URL query parameters
const urlParams = new URLSearchParams(window.location.search);
const expectedDue = urlParams.get('expectedDue');
const trimesterOne = urlParams.get('trimesterOne');
const trimesterTwo = urlParams.get('trimesterTwo');
const trimesterThree = urlParams.get('trimesterThree');
const dietary = urlParams.get('dietary');

// Set form data to input fields
document.getElementById('dueDate').value = expectedDue;
document.getElementById('trimesterOne').value = trimesterOne;
document.getElementById('trimesterTwo').value = trimesterTwo;
document.getElementById('trimesterThree').value = trimesterThree;
document.getElementById('dietaryRestrictions').value = dietary;

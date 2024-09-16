// Function to scroll to a section smoothly
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

// Function to open the modal on page load
window.onload = function() {
    const modal = document.getElementById("userTypeModal");
    if (modal) {
        modal.style.display = "flex"; // Show modal as flex to center it
    }
};

// Function to handle user selection
function setUserType(type) {
    // Save user type to localStorage
    localStorage.setItem("userType", type);

    // Hide the modal
    const modal = document.getElementById("userTypeModal");
    if (modal) {
        modal.style.display = "none";
    }

    // Perform actions based on the selection
    if (type === "farmer") {
        alert("Welcome, Farmer!");
        // Redirect or load specific content for farmers
    } else if (type === "contractor") {
        alert("Welcome, Contractor!");
        // Redirect or load specific content for contractors
    }
}

// Event listener for feedback form submission
document.getElementById('feedbackForm')?.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Logic to send feedback to a server can be added here

    alert("Thank you for your feedback!");
    this.reset(); // Reset the form
});

// Show farmer form
function showFarmerForm() {
    document.getElementById('farmer-form').style.display = 'block';
    document.getElementById('contractor-search').style.display = 'none';
}

// Show contractor search
function showContractorSearch() {
    document.getElementById('contractor-search').style.display = 'block';
    document.getElementById('farmer-form').style.display = 'none';
}

// Submit farmer form
function submitFarmerForm() {
    const cropType = document.getElementById('cropType').value;
    const cropQuantity = document.getElementById('cropQuantity').value;

    const farmerData = document.getElementById('farmer-data');
    if (farmerData) {
        farmerData.innerHTML = `<h4>Crop Details Submitted:</h4>
                                <p><strong>Crop Type:</strong> ${cropType}</p>
                                <p><strong>Quantity:</strong> ${cropQuantity} kg</p>`;
    }

    // Clear the form
    document.getElementById('farmerForm')?.reset();
}

// Submit contractor search
function submitContractorSearch() {
    const searchCropType = document.getElementById('searchCropType').value;
    const searchCropQuantity = document.getElementById('searchCropQuantity').value;

    const contractorResults = document.getElementById('contractor-results');
    if (contractorResults) {
        contractorResults.innerHTML = `<h4>Search Results:</h4>
                                        <p><strong>Crop Type:</strong> ${searchCropType}</p>
                                        <p><strong>Quantity Needed:</strong> ${searchCropQuantity} kg</p>`;
    }

    // Clear the form
    document.getElementById('contractorForm')?.reset();
}

// Redirect to specific pages on button click
document.getElementById('farmerBtn')?.addEventListener('click', function () {
    window.location.href = 'farmer.html';
});

document.getElementById('contractorBtn')?.addEventListener('click', function () {
    window.location.href = 'contractor.html';
});

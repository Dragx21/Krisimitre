// Function to update the services button based on user type
function updateServicesButton(userType) {
    const servicesContainer = document.querySelector('.container');
    if (servicesContainer) {
        servicesContainer.innerHTML = `
            <h1>Our services</h1>
            <div class="buttons">
                <button id="serviceBtn">${userType === 'farmer' ? 'Search for Contracts' : 'Give Contract'}</button>
            </div>
        `;

        // Add event listener to the new button
        document.getElementById('serviceBtn').addEventListener('click', function() {
            if (userType === 'farmer') {
                window.location.href = 'farmer.html';
            } else {
                window.location.href = 'contractor.html';
            }
        });
    }
}

// Function to open the modal on page load
window.onload = function() {
    const userType = localStorage.getItem("userType");
    if (!userType) {
        const modal = document.getElementById("userTypeModal");
        if (modal) {
            modal.style.display = "flex";
        }
    } else {
        updateServicesButton(userType);
    }
};

// Function to handle user selection in the modal
function setUserType(type) {
    localStorage.setItem("userType", type);
    const modal = document.getElementById("userTypeModal");
    if (modal) {
        modal.style.display = "none";
    }
    updateServicesButton(type);
}

// Event listener for feedback form submission
document.getElementById('feedbackForm')?.addEventListener('submit', function(event) {
    event.preventDefault();
    alert("Thank you for your feedback!");
    this.reset();
});

// ... any other main page specific code ...

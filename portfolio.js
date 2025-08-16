const hamburger = document.getElementById('hamburger');
const menu = document.querySelector('.menu');
hamburger.addEventListener('click', function () {
    const hamIcon = this.querySelector('.hamburger-icon');
    const crossIcon = this.querySelector('.cross-icon');
    if (hamIcon.style.display === "none") {
        hamIcon.style.display = "inline-block"
        menu.style.display = "none"
        crossIcon.style.display = "none"
    }
    else {
        crossIcon.style.display = "inline-block"
        hamIcon.style.display = "none"
        menu.style.display = "block"
    }
});



const loader = document.getElementById('loader');

// Function to show the loader
function showLoader() {
  loader.style.display = 'block';
}

// Function to hide the loader
function hideLoader() {
  loader.style.display = 'none';
}

// Example usage:
// Simulate a loading process
showLoader(); // Show the loader when loading starts

// After some operation (e.g., AJAX request completes)
setTimeout(() => {
  hideLoader(); // Hide the loader when loading finishes
  // Display your content here
}, 3000); // Simulate a 3-second loading time
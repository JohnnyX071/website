// Function to scroll to a specific unit
function scrollToUnit(unitId) {
  // Get the element by its ID
  var element = document.getElementById(unitId);

  // Check if the element exists
  if (element) {
    // Scroll smoothly to the element
    element.scrollIntoView({ behavior: "smooth" });
  }
}

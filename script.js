// script.js

document.addEventListener("DOMContentLoaded", function () {
  const tabs = document.querySelectorAll(".tab-link");
  const tabContents = document.querySelectorAll(".tab-content");

  tabs.forEach((tab) => {
    tab.addEventListener("click", function () {
      const tabId = this.getAttribute("data-tab");

      tabs.forEach((item) => {
        item.classList.remove("active");
      });
      tabContents.forEach((item) => {
        item.classList.remove("active");
      });

      this.classList.add("active");
      document.getElementById(tabId).classList.add("active");
    });
  });
});
// Get the modal
 // JavaScript for modal functionality
 document.addEventListener('DOMContentLoaded', function() {
  var modal = document.getElementById("popupModal");
  var btn = document.getElementById("openPopup");
  var span = document.getElementsByClassName("close")[0];

  // Open the modal
  btn.onclick = function() {
      modal.style.display = "block";
      document.body.style.overflow = "hidden"; // Prevent scrolling of background content
  }

  // Close the modal
  span.onclick = function() {
      modal.style.display = "none";
      document.body.style.overflow = "auto"; // Restore scrolling of background content
  }

  // Close the modal if clicked outside the modal
  window.onclick = function(event) {
      if (event.target == modal) {
          modal.style.display = "none";
          document.body.style.overflow = "auto"; // Restore scrolling of background content
      }
  }
});
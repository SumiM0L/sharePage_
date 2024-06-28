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
    var modal = document.getElementById("popupModal");

    // Get the button that opens the modal
    var btn = document.getElementById("openPopup");

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks the button, open the modal 
    btn.onclick = function() {
        modal.style.display = "block";
    }

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }


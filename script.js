document.addEventListener("DOMContentLoaded", function () {
  const tabs = document.querySelectorAll(".tab-link");
  const tabContents = document.querySelectorAll(".tab-content");

  // Initially hide all tab contents except the first one
  tabContents.forEach((content, index) => {
    if (index !== 0) {
      content.style.display = "none";
    } else {
      content.classList.add("active");
    }
  });

  tabs.forEach((tab) => {
    tab.addEventListener("click", function () {
      const tabId = this.getAttribute("data-tab");

      // Remove "active" class from all tabs
      tabs.forEach((item) => {
        item.classList.remove("active");
      });

      // Add "active" class to the clicked tab
      this.classList.add("active");

      // Hide all tab contents except the corresponding one
      tabContents.forEach((content) => {
        if (content.id === tabId) {
          content.style.display = "block";
        } else {
          content.style.display = "none";
        }
      });
    });
  });

  // Function to handle mobile-specific layout
  function handleMobileLayout() {
    const isMobile = window.matchMedia("(max-width: 600px)").matches;

    if (isMobile) {
      // Display tabs in a single row with flexbox
      const tabList = document.querySelector(".tabs");
      tabList.style.display = "flex";
      tabList.style.overflowX = "auto"; // Enable horizontal scrolling if tabs overflow
      tabList.style.whiteSpace = "nowrap"; // Prevent tabs from wrapping

      // Ensure the first tab's content is initially visible
      const initialTab = document.querySelector(".tab-link");
      const initialTabId = initialTab.getAttribute("data-tab");
      const initialContent = document.getElementById(initialTabId);
      if (initialContent) {
        initialContent.style.display = "block";
      }
    }
  }

  // Initial setup for mobile layout
  handleMobileLayout();

  // Listen for window resize events to adjust layout
  window.addEventListener("resize", handleMobileLayout);
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

    // tab mobile
    
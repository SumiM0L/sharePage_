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


document.addEventListener("DOMContentLoaded", function () {
  const toggleButton = document.getElementById("toggleButton");

  // Send a message to background script on button click
  toggleButton.addEventListener("click", function () {
    browser.runtime.sendMessage({ toggle: true });
  });
});
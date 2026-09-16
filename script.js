const searchInput = document.querySelector("#search-term");
const searchButton = document.querySelector("#search-button");
const searchMessage = document.querySelector("#search-message");

searchButton.addEventListener("click", function () {
  searchMessage.textContent = searchInput.value;
});
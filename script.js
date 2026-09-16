const searchInput = document.querySelector("#search-term");
const searchButton = document.querySelector("#search-button");
const searchMessage = document.querySelector("#search-message");

async function askApi(searchTerm) {
  const response = await fetch(
    `https://tammy-data-api.lestertammy1977.workers.dev/api/v1/datasets/board-games/records?limit=5&search=${encodeURIComponent(searchTerm)}`
  );

  const data = await response.json();

  console.log("Status:", response.status);
  console.log("Records:", data.records.length);
}

searchButton.addEventListener("click", function () {
  askApi(searchInput.value);
});
const searchInput = document.querySelector("#search-term");
const searchButton = document.querySelector("#search-button");
const searchMessage = document.querySelector("#search-message");
const gameName = document.querySelector("#game-name");
const minimumPlayers = document.querySelector("#minimum-players");

async function askApi(searchTerm) {
  const response = await fetch(
    `https://tammy-data-api.lestertammy1977.workers.dev/api/v1/datasets/board-games/records?limit=5&search=${encodeURIComponent(searchTerm)}`
  );

  const data = await response.json();

  gameName.textContent = data.records[0].Name;
  minimumPlayers.textContent = data.records[0]["Minimum players"];
    
  console.log("Status:", response.status);
  console.log("Records:", data.records.length);
}

searchButton.addEventListener("click", function () {
  askApi(searchInput.value);
});
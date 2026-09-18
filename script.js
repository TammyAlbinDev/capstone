const searchInput = document.querySelector("#search-term");
const searchButton = document.querySelector("#search-button");
const searchMessage = document.querySelector("#search-message");

async function askApi(searchTerm) {
  const response = await fetch(
    `https://tammy-data-api.lestertammy1977.workers.dev/api/v1/datasets/board-games/records?limit=5&search=${encodeURIComponent(searchTerm)}`
  );

  const data = await response.json();
  const records = data.records;

  document.getElementById("result-1").textContent =
    records[0].Name + " needs at least " + records[0]["Minimum players"] + " players.";

  document.getElementById("result-2").textContent =
    records[1].Name + " needs at least " + records[1]["Minimum players"] + " players.";

  document.getElementById("result-3").textContent =
    records[2].Name + " needs at least " + records[2]["Minimum players"] + " players.";

  console.log("Status:", response.status);
  console.log("Records:", records.length);
}

searchButton.addEventListener("click", function () {
  askApi(searchInput.value);
});

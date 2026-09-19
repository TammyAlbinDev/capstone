const searchInput = document.querySelector("#search-term");
const searchButton = document.querySelector("#search-button");
const searchMessage = document.querySelector("#search-message");
const resultsList = document.querySelector("#results-list");

async function askApi(searchTerm) {
  resultsList.textContent = "Loading…";
  searchMessage.textContent = "";

  const response = await fetch(
    `https://tammy-data-api.lestertammy1977.workers.dev/api/v1/datasets/board-games/records?limit=5&search=${encodeURIComponent(searchTerm)}`
  );

  if (response.status === 200) {
    const data = await response.json();
    const records = data.records;

    if (records.length === 0) {
      resultsList.textContent = "Nothing matched.";
      return;
    }

    records.forEach(function (record) {
      const card = document.createElement("article");

      card.textContent =
        record.Name +
        " | Minimum players: " +
        record["Minimum players"] +
        " | Maximum players: " +
        record["Maximum players"] +
        " | Average game time: " +
        record["Average game time"];

      resultsList.appendChild(card);
    });

    console.log("Status:", response.status);
    console.log("Records:", records.length);
  } else {
    resultsList.textContent =
      "That request did not work. Status: " + response.status;
  }
}

searchButton.addEventListener("click", function () {
  resultsList.textContent = "";
  askApi(searchInput.value);
});

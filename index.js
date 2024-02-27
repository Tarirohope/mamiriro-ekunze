function searchHandle(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-input-form");
  let cityElement = document.querySelector("#city");
  cityElement.innerHTML = searchInput.value;
}
let searchedData = document.querySelector("#search-form");
searchedData.addEventListener("submit", searchHandle);
